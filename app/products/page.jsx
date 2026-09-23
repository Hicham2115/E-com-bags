import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queries";
import { ProductsCatalog } from "@/components/products-catalog";
import { demoProducts } from "@/lib/demo-product";

export default function ProductsPage() {
  const queryClient = new QueryClient();
  queryClient.setQueryData(queryKeys.products, demoProducts);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductsCatalog />
    </HydrationBoundary>
  );
}
