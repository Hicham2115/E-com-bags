import { notFound } from "next/navigation";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queries";
import { ProductDetail } from "@/components/product-detail";
import { demoProducts } from "@/lib/demo-product";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const queryClient = new QueryClient();
  const product = demoProducts.find((item) => item.handle === id);

  if (!product) notFound();
  queryClient.setQueryData(queryKeys.product(id), product);
  queryClient.setQueryData(queryKeys.products, demoProducts);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetail handle={id} />
    </HydrationBoundary>
  );
}
