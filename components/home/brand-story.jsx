"use client";

import Image from "next/image";
import brandPhoto from "@/app/assets/d6dfbbff7ad7ba911a653d2d2681de52.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function BrandStory() {
  const { ref: ref1, visible: v1 } = useReveal();
  const { ref: ref2, visible: v2 } = useReveal();

  return (
    <section className="py-[clamp(80px,12vw,160px)] px-[clamp(20px,4vw,60px)]">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-20 items-center max-w-360 mx-auto">
        <div
          ref={ref1}
          className={`reveal relative rounded-xs overflow-hidden aspect-4/5 ${v1 ? "is-visible" : ""}`}
        >
          <Image
            src={brandPhoto}
            alt="Woman carrying a Maison Oria leather bag"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-6 left-6 flex items-center gap-3 text-ivory text-[10px] tracking-[0.3em] uppercase">
            <span className="block w-6 h-px bg-gold" />
            Est. 2019 · Handcrafted
          </div>
        </div>

        <div
          ref={ref2}
          className={`reveal ${v2 ? "is-visible" : ""}`}
        >
          <div className="text-[11px] tracking-[0.25em] uppercase text-oria-muted mb-6">— Our Story</div>
          <h2 className="font-serif text-[clamp(40px,5vw,72px)] mb-8">
            Patience is the <em className="italic text-gold-deep">fabric.</em>
          </h2>
          <p className="text-base text-charcoal mb-5 max-w-120">
            We started in 2019 with a single intention: to make bags that age the way a woman does — with grace, with story, with no apology. Not trend-driven. Not mass-produced. Just the right bag, made properly.
          </p>
          <p className="text-base text-charcoal mb-5 max-w-120">
            Every Maison Oria piece is shaped by a single artisan from start to finish. Forty-eight hours. Full-grain vegetable-tanned leather. Precision-cast brass hardware built to outlast everything in your wardrobe.
          </p>
          <blockquote className="font-serif italic text-[28px] leading-[1.3] my-9 pl-6 border-l-2 border-gold max-w-115 text-oria-text">
            "A bag is not a thing you carry. It is a thing that carries you back to yourself."
          </blockquote>
          <div className="flex items-center gap-4 text-[11px] tracking-[0.25em] uppercase text-oria-muted">
            <span className="block w-10 h-px bg-gold" />
            Yasmina El Idrissi · Founder
          </div>
        </div>
      </div>
    </section>
  );
}
