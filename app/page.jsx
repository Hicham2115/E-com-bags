import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Collections } from "@/components/home/collections";
import { Bestsellers } from "@/components/home/bestsellers";
import { BrandStory } from "@/components/home/brand-story";
import { SocialProof } from "@/components/home/social-proof";
import { UGCGrid } from "@/components/home/ugc-grid";
import { PromoSection } from "@/components/home/promo-section";
import { getProducts } from "@/lib/shopify";
import { queryKeys } from "@/lib/queries";

export default async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.products,
    queryFn: getProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Navbar />
      <main>
        <Hero />
        <section id="collections">
          <Collections />
        </section>
        <section id="our-story">
          <BrandStory />
        </section>
        <section id="collections">
          <Bestsellers />
        </section>
        <Marquee />
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "0 clamp(20px,4vw,60px)" }} />
        <section id="social-proof">
          <SocialProof />
        </section>
        <section id="about">
          <UGCGrid />
        </section>
        <PromoSection />
      </main>
      <Footer />
    </HydrationBoundary>
  );
}
