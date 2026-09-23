import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ProductDetail } from "@/components/product-detail";
import { demoProduct } from "@/lib/demo-product";
import { queryKeys } from "@/lib/queries";

export const metadata = {
  title: "Atlas Atelier Tote — Maison Oria",
  description: "A showcase of the Maison Oria single-product experience.",
};

export default function DemoProductPage() {
  const queryClient = new QueryClient();
  queryClient.setQueryData(queryKeys.product(demoProduct.handle), demoProduct);
  queryClient.setQueryData(queryKeys.products, [demoProduct]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetail handle={demoProduct.handle} />
    </HydrationBoundary>
  );
}
