import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getProducts } from "@/lib/shopify";
import { queryKeys } from "@/lib/queries";
import { ProductsCatalog } from "@/components/products-catalog";

export default async function ProductsPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.products,
    queryFn: getProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductsCatalog />
    </HydrationBoundary>
  );
}
