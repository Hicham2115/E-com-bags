// Run once: SHOPIFY_ADMIN_TOKEN=shpat_xxx node scripts/seed-products.mjs
const DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || "ecom-bags-go7fuueq.myshopify.com";
const TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;
if (!TOKEN) { console.error("Set SHOPIFY_ADMIN_TOKEN env var first."); process.exit(1); }
const BASE = `https://${DOMAIN}/admin/api/2024-01`;

const headers = {
  "Content-Type": "application/json",
  "X-Shopify-Access-Token": TOKEN,
};

const products = [
  {
    title: "The Atlas Tote",
    product_type: "Tote",
    tags: ["BESTSELLER"],
    body_html: "A structured everyday tote in vegetable-tanned Italian leather. Hand-stitched seams, brass hardware cast in Marrakech, and a removable suede pouch that lives inside.",
    variants: [
      { option1: "Camel",  price: "1180.00", compare_at_price: "1420.00" },
      { option1: "Black",  price: "1180.00", compare_at_price: "1420.00" },
      { option1: "Cocoa",  price: "1180.00", compare_at_price: "1420.00" },
      { option1: "Ivory",  price: "1180.00", compare_at_price: "1420.00" },
      { option1: "Ruby",   price: "1180.00", compare_at_price: "1420.00" },
    ],
    options: [{ name: "Color", values: ["Camel", "Black", "Cocoa", "Ivory", "Ruby"] }],
  },
  {
    title: "Lune Crossbody",
    product_type: "Crossbody",
    tags: ["NEW"],
    body_html: "A sleek crossbody in smooth full-grain leather. Adjustable chain strap, two interior slip pockets, and a secure magnetic clasp.",
    variants: [
      { option1: "Black", price: "780.00" },
      { option1: "Cocoa", price: "780.00" },
      { option1: "Ink",   price: "780.00" },
    ],
    options: [{ name: "Color", values: ["Black", "Cocoa", "Ink"] }],
  },
  {
    title: "Medina Mini",
    product_type: "Mini",
    tags: [],
    body_html: "Compact and perfectly formed. Fits your essentials with room for a small notebook. The artisan-knotted top handle is a signature detail.",
    variants: [
      { option1: "Camel", price: "560.00" },
      { option1: "Ivory", price: "560.00" },
      { option1: "Ruby",  price: "560.00" },
      { option1: "Sage",  price: "560.00" },
    ],
    options: [{ name: "Color", values: ["Camel", "Ivory", "Ruby", "Sage"] }],
  },
  {
    title: "Souk Shoulder",
    product_type: "Shoulder",
    tags: ["SALE"],
    body_html: "A generous shoulder bag with a relaxed silhouette. Soft vegetable-tanned leather that moulds to your body over time.",
    variants: [
      { option1: "Cocoa", price: "980.00", compare_at_price: "1180.00" },
      { option1: "Camel", price: "980.00", compare_at_price: "1180.00" },
      { option1: "Black", price: "980.00", compare_at_price: "1180.00" },
    ],
    options: [{ name: "Color", values: ["Cocoa", "Camel", "Black"] }],
  },
  {
    title: "Riad Evening",
    product_type: "Evening",
    tags: ["NEW"],
    body_html: "An understated evening clutch with a sculptural brass frame. Silk-lined interior, hidden interior pocket.",
    variants: [
      { option1: "Black", price: "640.00" },
      { option1: "Ruby",  price: "640.00" },
      { option1: "Ivory", price: "640.00" },
    ],
    options: [{ name: "Color", values: ["Black", "Ruby", "Ivory"] }],
  },
  {
    title: "Kasbah Tote",
    product_type: "Tote",
    tags: ["BESTSELLER"],
    body_html: "Our most capacious tote. Laptop-ready, with a built-in divider and exterior slip pocket. Carries everything; weighs almost nothing.",
    variants: [
      { option1: "Camel", price: "1320.00" },
      { option1: "Cocoa", price: "1320.00" },
      { option1: "Sage",  price: "1320.00" },
    ],
    options: [{ name: "Color", values: ["Camel", "Cocoa", "Sage"] }],
  },
  {
    title: "Saharienne Crossbody",
    product_type: "Crossbody",
    tags: [],
    body_html: "A wide, flat crossbody inspired by the desert horizon. Fits a tablet, a paperback, and your daily essentials.",
    variants: [
      { option1: "Sage",  price: "720.00" },
      { option1: "Camel", price: "720.00" },
      { option1: "Black", price: "720.00" },
    ],
    options: [{ name: "Color", values: ["Sage", "Camel", "Black"] }],
  },
  {
    title: "Bab Mini",
    product_type: "Mini",
    tags: [],
    body_html: "Named after the city gates of Marrakech. A petite box bag with a sliding top clasp and detachable wrist strap.",
    variants: [
      { option1: "Ivory", price: "480.00" },
      { option1: "Camel", price: "480.00" },
      { option1: "Ruby",  price: "480.00" },
    ],
    options: [{ name: "Color", values: ["Ivory", "Camel", "Ruby"] }],
  },
  {
    title: "Atlas Soft",
    product_type: "Shoulder",
    tags: [],
    body_html: "The relaxed sibling of the Atlas Tote. Unstructured, buttery soft leather with a single wide shoulder strap.",
    variants: [
      { option1: "Black", price: "860.00" },
      { option1: "Cocoa", price: "860.00" },
      { option1: "Camel", price: "860.00" },
    ],
    options: [{ name: "Color", values: ["Black", "Cocoa", "Camel"] }],
  },
  {
    title: "Lune Evening",
    product_type: "Evening",
    tags: ["SALE"],
    body_html: "The evening version of our bestselling Lune silhouette. Smaller, lighter, with a delicate chain strap that doubles as a bracelet.",
    variants: [
      { option1: "Ruby",  price: "540.00", compare_at_price: "720.00" },
      { option1: "Black", price: "540.00", compare_at_price: "720.00" },
    ],
    options: [{ name: "Color", values: ["Ruby", "Black"] }],
  },
  {
    title: "Fez Crossbody",
    product_type: "Crossbody",
    tags: ["NEW"],
    body_html: "A compact crossbody with a structured front flap and signature hand-stitched border. Inspired by the medina tiles of Fès.",
    variants: [
      { option1: "Ink",   price: "740.00" },
      { option1: "Black", price: "740.00" },
      { option1: "Camel", price: "740.00" },
    ],
    options: [{ name: "Color", values: ["Ink", "Black", "Camel"] }],
  },
  {
    title: "Mellah Tote",
    product_type: "Tote",
    tags: [],
    body_html: "A relaxed open-top tote with a reinforced base. Veg-tanned leather develops a deep patina with everyday use.",
    variants: [
      { option1: "Cocoa", price: "1240.00" },
      { option1: "Camel", price: "1240.00" },
    ],
    options: [{ name: "Color", values: ["Cocoa", "Camel"] }],
  },
];

async function createProduct(data) {
  const res = await fetch(`${BASE}/products.json`, {
    method: "POST",
    headers,
    body: JSON.stringify({ product: { ...data, status: "active" } }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(json.errors ?? json));
  return json.product;
}

async function main() {
  console.log(`Creating ${products.length} products in ${DOMAIN}...\n`);
  for (const p of products) {
    try {
      const created = await createProduct(p);
      console.log(`✓  ${created.title}  (handle: ${created.handle})`);
      // Shopify rate limit: 2 req/s on dev stores
      await new Promise(r => setTimeout(r, 600));
    } catch (err) {
      console.error(`✗  ${p.title}: ${err.message}`);
    }
  }
  console.log("\nDone.");
}

main();
