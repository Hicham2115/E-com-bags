import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/lib/shopify";
import { ProductDetail } from "@/components/product-detail";import { jsx as _jsx } from "react/jsx-runtime";





export default async function ProductPage({ params }) {
  const { id } = await params;
  const [product, all] = await Promise.all([getProduct(id), getProducts()]);

  if (!product) notFound();

  const suggested = all.
  filter((p) => p.handle !== product.handle && p.cat === product.cat).
  slice(0, 4).
  concat(
    all.
    filter((p) => p.handle !== product.handle && p.cat !== product.cat).
    slice(0, Math.max(0, 4 - all.filter((p) => p.handle !== product.handle && p.cat === product.cat).length))
  );

  return /*#__PURE__*/_jsx(ProductDetail, { product: product, suggested: suggested });
}