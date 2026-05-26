"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/use-reveal";

const collections = [
  {
    no: "N° 01 / Collection",
    name: "Atlas",
    bg: "linear-gradient(135deg, #C9A96E 0%, #8C6E3F 100%)",
    svg: (
      <svg
        viewBox="0 0 400 500"
        className="absolute w-1/2 h-auto opacity-90"
        style={{ inset: "20% 25%" }}
      >
        <defs>
          <linearGradient id="g_atlas" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M80 180 Q80 130 130 130 L270 130 Q320 130 320 180 L320 380 Q320 420 280 420 L120 420 Q80 420 80 380 Z"
          fill="url(#g_atlas)"
        />
        <path
          d="M140 130 Q140 70 200 70 Q260 70 260 130"
          stroke="#fff"
          strokeOpacity="0.5"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    no: "N° 02 / Collection",
    name: "Lune",
    bg: "linear-gradient(160deg, #1a1a1a 0%, #2c2c2c 60%, #3a3530 100%)",
    svg: (
      <svg
        viewBox="0 0 400 500"
        className="absolute w-[55%] h-auto opacity-[0.95]"
        style={{ inset: "18% 22%" }}
      >
        <ellipse cx="200" cy="320" rx="160" ry="110" fill="#0a0a0a" />
        <ellipse
          cx="200"
          cy="305"
          rx="160"
          ry="110"
          fill="#1f1c1a"
          stroke="#C9A96E"
          strokeWidth="0.5"
        />
        <circle cx="200" cy="180" r="14" fill="#C9A96E" />
        <path
          d="M120 290 Q200 240 280 290"
          stroke="#C9A96E"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    no: "N° 03 / Collection",
    name: "Medina",
    bg: "linear-gradient(170deg, #E8D5B0 0%, #B5945A 70%, #8C6E3F 100%)",
    svg: (
      <svg
        viewBox="0 0 400 500"
        className="absolute w-[44%] h-auto opacity-[0.85]"
        style={{ inset: "22% 28%" }}
      >
        <path
          d="M100 200 L100 380 Q100 410 130 410 L270 410 Q300 410 300 380 L300 200 Z"
          fill="#fff"
          fillOpacity="0.55"
          stroke="#5C3D24"
          strokeWidth="2"
        />
        <path
          d="M150 200 Q150 130 200 130 Q250 130 250 200"
          stroke="#5C3D24"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="200" cy="300" r="6" fill="#5C3D24" />
      </svg>
    ),
  },
];

export function Collections() {
  const { ref: headRef, visible: headVisible } = useReveal();
  const { ref: gridRef, visible: gridVisible } = useReveal();

  return (
    <section className="py-[clamp(80px,12vw,160px)] px-[clamp(20px,4vw,60px)]">
      <div
        ref={headRef}
        className={`reveal flex justify-between items-end gap-10 mb-16 flex-wrap ${headVisible ? "is-visible" : ""}`}
      >
        <h2 className="font-serif uppercase text-6xl leading-[0.98] max-w-[700px]">
          Three <span className=" text-gold-deep">Collections.</span>
          <br />One Philosophy.
        </h2>
        <div className="text-[12px] tracking-[0.22em] text-oria-muted uppercase">
          — Spring/Summer 26
        </div>
      </div>

      <div
        ref={gridRef}
        className={`reveal-stagger grid gap-6 h-[70vh] min-h-[580px] ${gridVisible ? "is-visible" : ""}`}
        style={{ gridTemplateColumns: "1.2fr 0.9fr 1.1fr" }}
      >
        {collections.map((c, i) => (
          <CollectionCard
            key={c.name}
            collection={c}
            offset={i === 1}
            visible={gridVisible}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}

function CollectionCard({ collection: c, offset, visible, delay }) {
  return (
    <article
      className="relative overflow-hidden rounded-xs cursor-pointer group isolate"
      style={{
        transform: offset
          ? visible
            ? "translateY(48px)"
            : "translateY(calc(48px + 30px))"
          : visible
          ? "translateY(0)"
          : "translateY(30px)",
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      <div
        className="absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-[1.06]"
        style={{ background: c.bg }}
      >
        {c.svg}
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-9 z-10 text-text-light">
        <div className="text-[11px] tracking-[0.3em] opacity-70">{c.no}</div>
        <div className="font-serif text-[clamp(28px,3.4vw,44px)] tracking-[-0.005em] mt-1.5 mb-2">
          {c.name}
        </div>
        <Link
          href="/products"
          className="text-[11px] tracking-[0.3em] uppercase inline-flex items-center gap-2 pb-1 text-gold border-b border-gold opacity-0 translate-y-[10px] transition-all duration-[400ms] group-hover:opacity-100 group-hover:translate-y-0"
        >
          Shop Now →
        </Link>
      </div>
    </article>
  );
}
