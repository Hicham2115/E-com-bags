import axios from "axios";
import { unstable_cache } from "next/cache";
import { swatchBg } from "./products";

// Storefront credentials stay server-only; the browser only calls this through our API routes.
const DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;
const API_URL = DOMAIN ? `https://${DOMAIN}/api/2024-01/graphql.json` : null;

async function shopifyFetch(query, variables) {
  // Fail early with a useful message when the store is not configured.
  if (!API_URL || !TOKEN) {
    throw new Error("Shopify credentials are not configured.");
  }

  // Send the GraphQL operation and its variables to Shopify's Storefront API.
  const { data: json } = await axios.post(
    API_URL,
    { query, variables },
    {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": TOKEN,
      },
    },
  );

  // Shopify can return GraphQL errors in a successful HTTP response.
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

// Shared product shape used by both catalog and product-detail queries.

const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    handle
    title
    productType
    tags
    priceRange {
      minVariantPrice { amount currencyCode }
    }
    compareAtPriceRange {
      minVariantPrice { amount }
    }
    images(first: 4) {
      edges { node { url altText } }
    }
    variants(first: 20) {
      edges {
        node {
          id
          availableForSale
          price { amount }
          compareAtPrice { amount }
          selectedOptions { name value }
        }
      }
    }
    options { name values }
  }
`;

const GET_PRODUCTS = `
  ${PRODUCT_FRAGMENT}
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges { node { ...ProductFields } }
    }
  }
`;

const GET_PRODUCT = `
  ${PRODUCT_FRAGMENT}
  query GetProduct($handle: String!) {
    productByHandle(handle: $handle) { ...ProductFields }
  }
`;


// Convert Shopify's GraphQL response into the smaller product shape used by the UI.

const CATEGORY_MAP = {
  tote: "Tote",
  crossbody: "Crossbody",
  shoulder: "Shoulder",
  mini: "Mini",
  evening: "Evening",
};

const VALID_COLORS = new Set(Object.keys(swatchBg));

function toProductColor(v) {
  const normalized = v.toLowerCase().trim();
  return VALID_COLORS.has(normalized) ? normalized : null;
}

function mapProduct(node) {
  const numericId = node.id.replace("gid://shopify/Product/", "");

  const cat = CATEGORY_MAP[node.productType.toLowerCase().trim()] ?? "Tote";

  const upperTags = node.tags.map((t) => t.toUpperCase());
  const badge =
    ["BESTSELLER", "NEW", "SALE"].find((b) => upperTags.includes(b)) ?? null;

  const images = node.images.edges.map((e) => e.node.url);

  const variants = node.variants.edges.map((e) => e.node);
  const defaultVariant = variants[0];

  const colorOption = node.options.find(
    (o) => o.name.toLowerCase() === "color",
  );
  const colors = (colorOption?.values ?? [])
    .map(toProductColor)
    .filter((c) => c !== null);
  if (colors.length === 0) colors.push("black");

  const price = parseFloat(
    defaultVariant?.price.amount ?? node.priceRange.minVariantPrice.amount,
  );
  const compareAtRaw =
    defaultVariant?.compareAtPrice?.amount ??
    node.compareAtPriceRange.minVariantPrice.amount;
  const compareAt = parseFloat(compareAtRaw ?? "0");

  return {
    id: numericId,
    handle: node.handle,
    name: node.title,
    cat,
    price,
    was: compareAt > price ? compareAt : undefined,
    badge,
    colors,
    primary: colors[0],
    images,
    variantId: defaultVariant?.id ?? "",
  };
}

// ─── Public API ───────────────────────────────────────────────────────────────

async function fetchProducts() {
  const data = await shopifyFetch(GET_PRODUCTS, { first: 50 });
  return data.products.edges.map((e) => mapProduct(e.node));
}

async function fetchProduct(handle) {
  const data = await shopifyFetch(GET_PRODUCT, { handle });
  return data.productByHandle ? mapProduct(data.productByHandle) : null;
}

// Cache catalog reads for five minutes so page loads do not wait for Shopify each time.
const getCachedProducts = unstable_cache(fetchProducts, ["shopify-products"], {
  revalidate: 300,
  tags: ["shopify-products"],
});

const getCachedProduct = unstable_cache(fetchProduct, ["shopify-product"], {
  revalidate: 300,
  tags: ["shopify-products"],
});

export async function getProducts() {
  return getCachedProducts();
}

export async function getProduct(handle) {
  return getCachedProduct(handle);
}
