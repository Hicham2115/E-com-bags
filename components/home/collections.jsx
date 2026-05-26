"use client";

import Link from "next/link";
import Image from "next/image";
import { useReveal } from "@/hooks/use-reveal";

const collections = [
  {
    no: "N° 01 / Collection",
    name: "Atlas",
    keyword: "atlas",
    bg: "linear-gradient(135deg, #C9A96E 0%, #8C6E3F 100%)",
  },
  {
    no: "N° 02 / Collection",
    name: "Sac Luna",
    keyword: "luna",
    bg: "linear-gradient(160deg, #1a1a1a 0%, #2c2c2c 60%, #3a3530 100%)",
  },
  {
    no: "N° 03 / Collection",
    name: "Medina",
    keyword: "medina",
    bg: "linear-gradient(170deg, #E8D5B0 0%, #B5945A 70%, #8C6E3F 100%)",
  },
];

export function Collections({ products = [] }) {
  const { ref: headRef, visible: headVisible } = useReveal();
  const { ref: gridRef, visible: gridVisible } = useReveal();

  // Pick one product image per collection slot
  const images = collections.map((c, i) => {
    const match = products.find((p) =>
      p.name.toLowerCase().includes(c.keyword),
    );
    if (match?.images[0]) return match.images[0];
    // fallback: spread remaining products across slots
    const size = Math.ceil(products.length / 3);
    return products[i * size]?.images[0] ?? null;
  });

  return (
    <section className="py-[clamp(80px,12vw,160px)] px-[clamp(20px,4vw,60px)]">
      <div
        ref={headRef}
        className={`reveal flex justify-between items-end gap-10 mb-16 flex-wrap ${headVisible ? "is-visible" : ""}`}
      >
        <h2 className="font-serif uppercase text-6xl leading-[0.98] max-w-175">
          Three <span className="text-gold-deep">Collections.</span>
          <br />
          One Philosophy.
        </h2>
        <div className="text-[12px] tracking-[0.22em] text-oria-muted uppercase">
          — Spring/Summer 26
        </div>
      </div>

      <div
        ref={gridRef}
        className={`reveal-stagger grid gap-6 h-[70vh] min-h-145 ${gridVisible ? "is-visible" : ""}`}
        style={{ gridTemplateColumns: "1.2fr 0.9fr 1.1fr" }}
      >
        {collections.map((c, i) => (
          <CollectionCard
            key={c.name}
            collection={c}
            image={images[i]}
            offset={i === 1}
            visible={gridVisible}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}

function CollectionCard({ collection: c, image, offset, visible, delay }) {
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
      {/* Background: real product image or gradient */}
      <div
        className="absolute inset-0 transition-transform duration-1200 group-hover:scale-[1.06]"
        style={{ background: c.bg }}
      >
        {image && (
          <Image
            src={image}
            alt={c.name}
            fill
            className="object-cover object-center"
            sizes="33vw"
          />
        )}
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-9 z-10 text-text-light">
        <div className="text-[11px] tracking-[0.3em] opacity-70">{c.no}</div>
        <div className="font-serif text-[clamp(28px,3.4vw,44px)] tracking-[-0.005em] mt-1.5 mb-2">
          {c.name}
        </div>
        <Link
          href="/products"
          className="text-[11px] tracking-[0.3em] uppercase inline-flex items-center gap-2 pb-1 text-gold border-b border-gold opacity-0 translate-y-2.5 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0"
        >
          Shop Now →
        </Link>
      </div>
    </article>
  );
}
