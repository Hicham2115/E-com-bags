import { getProducts } from "@/lib/shopify";
import { ProductsCatalog } from "@/components/products-catalog";

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductsCatalog products={products} />;
}
