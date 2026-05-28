import { NextResponse } from "next/server";

const DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;

const CREATE_CART = `
  mutation cartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { checkoutUrl }
      userErrors { field message }
    }
  }
`;

export async function POST(req) {
  if (!DOMAIN || !TOKEN) {
    return NextResponse.json({ error: "Shopify not configured" }, { status: 503 });
  }

  const { items } = await req.json();
  const lines = (items ?? [])
    .filter((i) => i.variantId)
    .map((i) => ({ merchandiseId: i.variantId, quantity: i.qty }));

  if (!lines.length) {
    return NextResponse.json({ error: "No valid items" }, { status: 400 });
  }

  const res = await fetch(`https://${DOMAIN}/api/2024-01/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN,
    },
    body: JSON.stringify({ query: CREATE_CART, variables: { lines } }),
  });

  const json = await res.json();
  const checkoutUrl = json.data?.cartCreate?.cart?.checkoutUrl;

  if (!checkoutUrl) {
    return NextResponse.json({ error: "Could not create checkout" }, { status: 500 });
  }

  return NextResponse.json({ checkoutUrl });
}
