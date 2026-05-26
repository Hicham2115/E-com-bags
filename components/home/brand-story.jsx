"use client";

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
          style={{ background: "linear-gradient(135deg, #d8c4a5 0%, #9c7a4e 100%)" }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 14px)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(255,240,220,0.3), transparent 60%)" }}
          />

          <svg
            viewBox="0 0 400 500"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] opacity-70"
          >
            <path d="M80 200 Q80 140 140 140 L260 140 Q320 140 320 200 L320 400 Q320 440 280 440 L120 440 Q80 440 80 400 Z" fill="#fff" fillOpacity="0.18" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.5" />
            <path d="M150 140 Q150 70 200 70 Q250 70 250 140" stroke="#fff" strokeWidth="8" fill="none" strokeOpacity="0.6" strokeLinecap="round" />
            <rect x="185" y="180" width="30" height="14" fill="#fff" fillOpacity="0.5" />
          </svg>

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
