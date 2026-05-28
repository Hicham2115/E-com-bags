"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { BagSVG } from "./bag-svg";

function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/api/products").then((r) => r.json()),
    staleTime: 5 * 60_000,
  });
}

export function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const { data: products = [], isLoading } = useProducts();

  useEffect(() => {
    if (open) { inputRef.current?.focus(); }
    else { setQuery(""); }
  }, [open]);

  const results = query.trim().length < 2
    ? []
    : products
        .filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.cat?.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 6);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex flex-col"
      style={{ background: "rgba(249,248,247,0.97)", backdropFilter: "blur(12px)" }}
    >
      {/* Search bar */}
      <div
        className="flex items-center gap-4 px-[clamp(20px,4vw,60px)] border-b"
        style={{ borderColor: "var(--line)", height: "72px" }}
      >
        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 shrink-0 opacity-40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search bags, styles, collections…"
          className="flex-1 bg-transparent border-0 outline-none text-base tracking-[0.04em]"
          style={{ fontFamily: "var(--serif)", color: "var(--oria-text)" }}
        />
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors shrink-0"
          aria-label="Close search"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Results area */}
      <div className="flex-1 overflow-y-auto px-[clamp(20px,4vw,60px)] py-8">

        {isLoading && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="aspect-4/5 w-full rounded-sm mb-3" />
                <Skeleton className="h-5 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            ))}
          </div>
        )}

        {!isLoading && query.trim().length < 2 && (
          <p className="text-[13px] tracking-[0.12em] text-(--oria-muted)">
            Start typing to search…
          </p>
        )}

        {!isLoading && query.trim().length >= 2 && results.length === 0 && (
          <div className="text-center py-16">
            <p style={{ fontFamily: "var(--serif)", fontSize: "22px" }} className="mb-2">
              No results for &ldquo;{query}&rdquo;
            </p>
            <p className="text-[12px] tracking-[0.12em] text-(--oria-muted)">
              Try a different spelling or browse all collections.
            </p>
            <Link
              href="/products"
              onClick={onClose}
              className="inline-block mt-6 text-[11px] tracking-[0.25em] uppercase border-b border-current pb-0.5 hover:opacity-60 transition-opacity"
            >
              Browse All →
            </Link>
          </div>
        )}

        {!isLoading && results.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
            {results.map((p) => (
              <Link key={p.id} href={`/products/${p.handle}`} onClick={onClose} className="group">
                <div className="relative aspect-4/5 bg-(--ivory-2) rounded-sm overflow-hidden mb-3">
                  {p.images?.[0] ? (
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  ) : (
                    <BagSVG color={p.primary} />
                  )}
                </div>
                <p style={{ fontFamily: "var(--serif)", fontSize: "18px" }} className="mb-0.5">
                  {p.name}
                </p>
                <p className="text-sm" style={{ color: "var(--gold-deep)" }}>
                  {p.price?.toLocaleString()} MAD
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
