import { NextResponse } from "next/server";
import axios from "axios";

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

  const { data: json } = await axios.post(
    `https://${DOMAIN}/api/2024-01/graphql.json`,
    { query: CREATE_CART, variables: { lines } },
    {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": TOKEN,
      },
    },
  );

  const checkoutUrl = json.data?.cartCreate?.cart?.checkoutUrl;

  if (!checkoutUrl) {
    return NextResponse.json({ error: "Could not create checkout" }, { status: 500 });
  }

  return NextResponse.json({ checkoutUrl });
}
