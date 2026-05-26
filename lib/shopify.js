
import { swatchBg } from "./products";

const DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;
const API_URL = `https://${DOMAIN}/api/2024-01/graphql.json`;

async function shopifyFetch(query, variables) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 }
  });

  if (!res.ok) throw new Error(`Shopify fetch failed: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

// ─── GraphQL fragments ────────────────────────────────────────────────────────

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

// ─── Types ────────────────────────────────────────────────────────────────────
























// ─── Mapper ───────────────────────────────────────────────────────────────────

const CATEGORY_MAP = {
  tote: "Tote",
  crossbody: "Crossbody",
  shoulder: "Shoulder",
  mini: "Mini",
  evening: "Evening"
};

const VALID_COLORS = new Set(Object.keys(swatchBg));

function toProductColor(v) {
  const normalized = v.toLowerCase().trim();
  return VALID_COLORS.has(normalized) ? normalized : null;
}

function mapProduct(node) {
  const numericId = node.id.replace("gid://shopify/Product/", "");

  const cat =
  CATEGORY_MAP[node.productType.toLowerCase().trim()] ?? "Tote";

  const upperTags = node.tags.map((t) => t.toUpperCase());
  const badge =
  ["BESTSELLER", "NEW", "SALE"].find((b) => upperTags.includes(b)) ??
  null;

  const images = node.images.edges.map((e) => e.node.url);

  const variants = node.variants.edges.map((e) => e.node);
  const defaultVariant = variants[0];

  const colorOption = node.options.find(
    (o) => o.name.toLowerCase() === "color"
  );
  const colors = (colorOption?.values ?? []).
  map(toProductColor).
  filter((c) => c !== null);
  if (colors.length === 0) colors.push("black");

  const price = parseFloat(
    defaultVariant?.price.amount ?? node.priceRange.minVariantPrice.amount
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
    variantId: defaultVariant?.id ?? ""
  };
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function getProducts() {
  const data = await shopifyFetch(

    GET_PRODUCTS, { first: 50 });

  return data.products.edges.map((e) => mapProduct(e.node));
}

export async function getProduct(handle) {
  const data = await shopifyFetch(

    GET_PRODUCT, { handle });

  return data.productByHandle ? mapProduct(data.productByHandle) : null;
}