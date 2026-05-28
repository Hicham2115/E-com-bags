"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/use-reveal";

import col01 from "@/app/assets/0a1c8049ea123fef6ebc69ba2a20b878.jpg";
import col02 from "@/app/assets/6ea53359b3d57305da4c5cf60e72a79c.jpg";
import col03 from "@/app/assets/f1cdb05b70301e4b8298ce0ac3bed4dd.jpg";

const collectionImages = [col01.src, col02.src, col03.src];

const collections = [
  {
    no: "01",
    label: "N° 01 / Collection",
    name: "Atlas",
    sub: "The Tote",
    keyword: "atlas",
    bg: "linear-gradient(145deg, #e8e2da 0%, #d4c9bb 40%, #c2b49e 100%)",
  },
  {
    no: "02",
    label: "N° 02 / Collection",
    name: "Sac Luna",
    sub: "The Shoulder Bag",
    keyword: "luna",
    bg: "#1e1c1a",
  },
  {
    no: "03",
    label: "N° 03 / Collection",
    name: "Medina",
    sub: "The Chain Bag",
    keyword: "medina",
    bg: "#1e1c1a",
  },
];

export function Collections() {
  const { ref: headRef, visible: headVisible } = useReveal();
  const { ref: gridRef, visible: gridVisible } = useReveal();

  return (
    <section className="py-[clamp(80px,12vw,160px)] overflow-hidden">
      {/* Header */}
      <div
        ref={headRef}
        className={`reveal px-[clamp(20px,4vw,60px)] mb-14 ${headVisible ? "is-visible" : ""}`}
      >
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-5 text-[10px] tracking-[0.35em] text-oria-muted uppercase">
              <span className="inline-block w-6 h-px bg-gold" />
              Spring / Summer 26
            </div>
            <h2 className="font-serif text-[clamp(2.8rem,5.5vw,4.5rem)] leading-[0.92] tracking-[-0.02em]">
              Three <em className="text-gold-deep not-italic">Collections.</em>
              <br />
              One Philosophy.
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase pb-1 border-b border-oria-black hover:border-gold hover:text-gold transition-colors duration-300 shrink-0"
          >
            View All →
          </Link>
        </div>
      </div>

      {/* Grid: large left + two stacked right */}
      <div
        ref={gridRef}
        className="px-[clamp(20px,4vw,60px)] grid gap-4 grid-cols-1 md:grid-cols-[1.45fr_1fr]"
      >
        {/* LEFT: Atlas — tall hero card */}
        <div
          className="relative overflow-hidden rounded-xs group cursor-pointer md:row-[1/3]"
          style={{
            height: "clamp(340px, 60vw, 860px)",
            background: collections[0].bg,
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? "translateY(0)" : "translateY(48px)",
            transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0s",
          }}
        >
          <img src={collectionImages[0]} alt="Atlas" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1400 group-hover:scale-[1.05]" />

          {/* Hover overlay */}
          <div
            className="absolute inset-0 z-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.55) 100%)" }}
          />
          {/* Always-on bottom fade */}
          <div
            className="absolute inset-0 z-1"
            style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.68) 100%)" }}
          />

          {/* Ghost number */}
          <div className="absolute top-8 right-9 font-serif text-[9rem] leading-none text-black/8 select-none pointer-events-none z-2">
            01
          </div>

          {/* Text */}
          <div className="absolute bottom-0 left-0 right-0 p-10 z-3 text-text-light">
            <div className="text-[10px] tracking-[0.38em] opacity-55 uppercase mb-2">{collections[0].label}</div>
            <div className="font-serif text-[clamp(2.8rem,4vw,4rem)] leading-none tracking-[-0.01em] mb-3">
              {collections[0].name}
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-7 bg-gold opacity-70" />
              <span className="text-[10px] tracking-[0.3em] text-gold/75 uppercase">{collections[0].sub}</span>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.28em] uppercase border-b border-white/30 pb-1 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:border-gold hover:text-gold"
            >
              Discover →
            </Link>
          </div>
        </div>

        {/* RIGHT TOP: Sac Luna */}
        <div
          className="relative overflow-hidden rounded-xs group cursor-pointer"
          style={{
            height: "clamp(250px, 37vh, 420px)",
            background: collections[1].bg,
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? "translateY(0)" : "translateY(48px)",
            transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}
        >
          <img src={collectionImages[1]} alt="Sac Luna" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1400 group-hover:scale-[1.04]" />
          <div className="absolute inset-0 z-1 bg-black/15" />
          <div
            className="absolute inset-0 z-1"
            style={{ background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.78) 100%)" }}
          />
          <div className="absolute top-5 right-7 font-serif text-[5rem] leading-none text-black/8 select-none pointer-events-none z-2">02</div>
          <div className="absolute bottom-0 left-0 right-0 p-7 z-3 text-text-light">
            <div className="text-[10px] tracking-[0.35em] opacity-55 uppercase mb-1.5">{collections[1].label}</div>
            <div className="font-serif text-[clamp(1.7rem,2.6vw,2.4rem)] leading-none mb-3">{collections[1].name}</div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-gold border-b border-gold pb-0.5 opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
            >
              Shop Now →
            </Link>
          </div>
        </div>

        {/* RIGHT BOTTOM: Medina */}
        <div
          className="relative overflow-hidden rounded-xs group cursor-pointer"
          style={{
            height: "clamp(250px, 37vh, 420px)",
            background: collections[2].bg,
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? "translateY(0)" : "translateY(48px)",
            transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.28s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.28s",
          }}
        >
          <img src={collectionImages[2]} alt="Medina" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1400 group-hover:scale-[1.04]" />
          <div className="absolute inset-0 z-1 bg-black/15" />
          <div
            className="absolute inset-0 z-1"
            style={{ background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.75) 100%)" }}
          />
          <div className="absolute top-5 right-7 font-serif text-[5rem] leading-none text-black/8 select-none pointer-events-none z-2">03</div>
          <div className="absolute bottom-0 left-0 right-0 p-7 z-3 text-text-light">
            <div className="text-[10px] tracking-[0.35em] opacity-55 uppercase mb-1.5">{collections[2].label}</div>
            <div className="font-serif text-[clamp(1.7rem,2.6vw,2.4rem)] leading-none mb-3">{collections[2].name}</div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-gold border-b border-gold pb-0.5 opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
            >
              Shop Now →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="mt-12 px-[clamp(20px,4vw,60px)] flex items-center gap-6">
        <div className="h-px flex-1 bg-line" />
        <Link
          href="/products"
          className="md:hidden text-[11px] tracking-[0.28em] uppercase pb-1 border-b border-oria-black hover:border-gold hover:text-gold transition-colors duration-300"
        >
          View All →
        </Link>
        <div className="text-[10px] tracking-[0.3em] text-oria-muted uppercase">
          Maison Oria — Est. 2019
        </div>
        <div className="h-px flex-1 bg-line" />
      </div>
    </section>
  );
}
