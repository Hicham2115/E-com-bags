import { notFound } from "next/navigation";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getProduct, getProducts } from "@/lib/shopify";
import { queryKeys } from "@/lib/queries";
import { ProductDetail } from "@/components/product-detail";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const queryClient = new QueryClient();
  const [product] = await Promise.all([
    queryClient.fetchQuery({
      queryKey: queryKeys.product(id),
      queryFn: () => getProduct(id),
    }),
    queryClient.prefetchQuery({
      queryKey: queryKeys.products,
      queryFn: getProducts,
    }),
  ]);

  if (!product) notFound();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetail handle={id} />
    </HydrationBoundary>
  );
}
