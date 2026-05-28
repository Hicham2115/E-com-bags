"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { swatchBg } from "@/lib/products";
import { BagSVG } from "./bag-svg";
import { Badge } from "@/components/ui/badge";
import { useCart } from "./cart-context";
import { useWishlist } from "@/store/wishlist";

export function ProductCard({ product: p, offsetY = false }) {
  const [hovered, setHovered] = useState(false);
  const { toggle, isLiked } = useWishlist();
  const wished = isLiked(p.id);
  const { addItem } = useCart();

  const hasImages = p.images.length > 0;
  const img1 = p.images[0];
  const img2 = p.images[1] ?? p.images[0];

  const badgeStyle =
    p.badge === "SALE"
      ? "bg-red-700 text-white border-0"
      : p.badge === "BESTSELLER"
      ? "bg-[var(--gold)] text-[var(--oria-text)] border-0"
      : "bg-[var(--oria-text)] text-[var(--text-light)] border-0";

  return (
    <article
      className="relative group"
      style={offsetY ? { transform: "translateY(40px)" } : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/products/${p.handle}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--ivory-2)] rounded-sm mb-[18px]">
          <div
            className="absolute inset-0 transition-transform duration-1000"
            style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
          >
            {hasImages ? (
              <Image src={img1} alt={p.name} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            ) : (
              <BagSVG color={p.primary} />
            )}
          </div>

          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            {hasImages ? (
              <Image src={img2} alt={p.name} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            ) : (
              <BagSVG color={p.primary} alt={true} />
            )}
          </div>

          {p.badge && (
            <Badge className={`absolute top-[14px] left-[14px] z-10 text-[10px] tracking-[0.2em] uppercase font-medium rounded-full px-3 py-1.5 ${badgeStyle}`}>
              {p.badge}
            </Badge>
          )}

          <button
            className="absolute top-[14px] right-[14px] z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
            style={wished ? { background: "var(--oria-text)" } : undefined}
            aria-label="Add to wishlist"
            onClick={(e) => { e.preventDefault(); toggle(p); }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              style={{ stroke: wished ? "var(--gold)" : "var(--oria-text)", fill: wished ? "var(--gold)" : "none", strokeWidth: 1.4, transition: "all .25s" }}
            >
              <path d="M12 21s-7-4.5-9-9.5C1.5 7 5 4 8 4c2 0 3 1 4 2 1-1 2-2 4-2 3 0 6.5 3 5 7.5-2 5-9 9.5-9 9.5z" />
            </svg>
          </button>

          <button
            className="absolute left-[14px] right-[14px] bottom-[14px] z-10 bg-[var(--ivory)] text-[var(--oria-text)] py-3 text-[11px] tracking-[0.25em] uppercase font-medium rounded-full transition-all duration-500 hover:bg-[var(--oria-text)] hover:text-[var(--text-light)]"
            style={{ transform: hovered ? "translateY(0)" : "translateY(120%)" }}
            onClick={(e) => { e.preventDefault(); addItem(p, 1, p.primary); }}
          >
            Quick Add to Bag
          </button>
        </div>
      </Link>

      <Link href={`/products/${p.handle}`}>
        <h3 style={{ fontFamily: "var(--serif)", fontSize: "22px", lineHeight: 1.2, marginBottom: "6px" }}>
          {p.name}
        </h3>
        <div className="flex justify-between items-center gap-3">
          <div className="text-sm font-medium tracking-[0.04em]" style={{ color: "var(--gold-deep)" }}>
            {p.was && <s className="mr-2 text-[var(--oria-muted)] font-normal">€ {p.was.toLocaleString()}</s>}
            € {p.price.toLocaleString()}
          </div>
        </div>
        <div className="flex gap-1.5 mt-2">
          {p.colors.map((c) => (
            <span
              key={c}
              className="w-3.5 h-3.5 rounded-full border border-black/10"
              style={{ background: swatchBg[c] }}
            />
          ))}
        </div>
      </Link>
    </article>
  );
}
