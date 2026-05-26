"use client";

import Image from "next/image";
import photo1 from "@/app/assets/d1f8ab17a39f8cca6f67330d86fc791b.jpg";
import photo2 from "@/app/assets/5f158d4cb9936e5e3f64db8a9079abbe.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function UGCGrid() {
  const { ref: r1, visible: v1 } = useReveal();
  const { ref: r2, visible: v2 } = useReveal();
  const { ref: r3, visible: v3 } = useReveal();

  return (
    <section className="py-[clamp(80px,10vw,140px)] px-[clamp(20px,4vw,60px)] border-t border-line overflow-hidden">
      <div className="max-w-360 mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-10 gap-y-16 items-start">
        {/* Left photo */}
        <div ref={r1} className={`reveal ${v1 ? "is-visible" : ""}`}>
          <div className="relative aspect-3/4 rounded-xs overflow-hidden">
            <Image
              src={photo1}
              alt="Maison Oria customer"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="flex items-center gap-3 mt-4 text-[11px] tracking-[0.2em] uppercase text-oria-muted">
            <span className="block w-4 h-px bg-gold" />
            @leam.paris · #WornByOria
          </div>
        </div>

        {/* Center text column */}
        <div
          ref={r2}
          className={`reveal md:sticky md:top-32 flex flex-col gap-8 md:w-72 ${v2 ? "is-visible" : ""}`}
        >
          <div className="text-[11px] tracking-[0.3em] uppercase text-oria-muted">
            — From The Community
          </div>

          <h2 className="font-serif text-[clamp(40px,4vw,64px)] leading-[0.95]">
            Worn
            <br />
            <em className="italic text-gold-deep">by you.</em>
          </h2>

          <div className="w-8 h-px bg-gold" />

          <p className="text-sm text-oria-muted leading-[1.7] max-w-64">
            Tag us in your moment. We re-share our favourites every Friday — and
            send a thank-you bottle of mint tea when we do.
          </p>

          <blockquote className="font-serif italic text-[22px] leading-[1.35] text-charcoal border-l-2 border-gold pl-5">
            "A bag becomes itself the moment it starts becoming yours."
          </blockquote>

          <a
            href="#"
            className="self-start text-[11px] tracking-[0.25em] uppercase text-gold-deep font-medium flex items-center gap-2 group"
          >
            @maisonoria
            <span className="block h-px w-0 bg-gold-deep transition-all duration-500 group-hover:w-8" />
          </a>

          <button className="self-start inline-flex items-center gap-2.5 text-[11px] tracking-[0.22em] uppercase font-medium px-7 py-3.5 border border-oria-text text-oria-text hover:bg-oria-text hover:text-ivory transition-all duration-500">
            Follow on Instagram ↗
          </button>
        </div>

        {/* Right photo — offset down */}
        <div ref={r3} className={`reveal md:mt-28 ${v3 ? "is-visible" : ""}`}>
          <div className="relative aspect-3/4 rounded-xs overflow-hidden">
            <Image
              src={photo2}
              alt="Maison Oria customer"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="flex items-center gap-3 mt-4 text-[11px] tracking-[0.2em] uppercase text-oria-muted">
            <span className="block w-4 h-px bg-gold" />
            @hafsa.k · #WornByOria
          </div>
        </div>
      </div>
    </section>
  );
}
