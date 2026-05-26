import { getProducts } from "@/lib/shopify";
import { ProductsCatalog } from "@/components/products-catalog";import { jsx as _jsx } from "react/jsx-runtime";

export default async function ProductsPage() {
  const products = await getProducts();
  return /*#__PURE__*/_jsx(ProductsCatalog, { products: products });
}