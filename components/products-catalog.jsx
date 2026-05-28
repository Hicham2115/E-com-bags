"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { swatchBg } from "@/lib/products";

const ALL_COLORS = [
  { color: "camel", label: "Camel" },
  { color: "black", label: "Black" },
  { color: "ivory", label: "Ivory" },
  { color: "cocoa", label: "Cocoa" },
  { color: "ruby", label: "Ruby" },
  { color: "sage", label: "Sage" },
  { color: "ink", label: "Ink" },
];

const CATEGORIES = ["Tote", "Crossbody", "Shoulder", "Mini", "Evening"];
const SORTS = [
  "Featured",
  "New Arrivals",
  "Price · Low → High",
  "Price · High → Low",
];

export function ProductsCatalog({ products }) {
  const allPrices = products.map((p) => p.price);
  const globalMin = products.length ? Math.floor(Math.min(...allPrices)) : 0;
  const globalMax = products.length ? Math.ceil(Math.max(...allPrices)) : 10000;

  // Only show colors that actually exist in the product data
  const availableColors = useMemo(() => {
    const present = new Set(products.flatMap((p) => p.colors));
    return ALL_COLORS.filter(({ color }) => present.has(color));
  }, [products]);

  const [cats, setCats] = useState(new Set());
  const [colors, setColors] = useState(new Set());
  const [priceMin, setPriceMin] = useState(globalMin);
  const [priceMax, setPriceMax] = useState(globalMax);
  const [sort, setSort] = useState("Featured");

  const filtered = useMemo(() => {
    let list = products.slice();
    if (cats.size) list = list.filter((p) => cats.has(p.cat));
    if (colors.size)
      list = list.filter((p) => p.colors.some((c) => colors.has(c)));
    list = list.filter((p) => p.price >= priceMin && p.price <= priceMax);
    if (sort === "Price · Low → High") list.sort((a, b) => a.price - b.price);
    if (sort === "Price · High → Low") list.sort((a, b) => b.price - a.price);
    if (sort === "New Arrivals")
      list.sort(
        (a, b) => (b.badge === "NEW" ? 1 : 0) - (a.badge === "NEW" ? 1 : 0),
      );
    return list;
  }, [cats, colors, priceMin, priceMax, sort, products]);

  function toggleCat(cat) {
    setCats((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  }
  function toggleColor(c) {
    setColors((prev) => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
      return next;
    });
  }
  function clearAll() {
    setCats(new Set());
    setColors(new Set());
    setPriceMin(globalMin);
    setPriceMax(globalMax);
  }

  // Color count per product
  const colorCount = useMemo(() => {
    const map = {};
    products.forEach((p) =>
      p.colors.forEach((c) => {
        map[c] = (map[c] ?? 0) + 1;
      }),
    );
    return map;
  }, [products]);

  const range = globalMax - globalMin || 1;
  const lp = ((priceMin - globalMin) / range) * 100;
  const hp = ((priceMax - globalMin) / range) * 100;

  return (
    <>
      <Navbar />
      <div
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, var(--ivory-2) 100%)",
          paddingTop: "140px",
          paddingBottom: "60px",
          paddingLeft: "clamp(20px,4vw,60px)",
          paddingRight: "clamp(20px,4vw,60px)",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div
            className="flex items-center gap-3 mb-8 text-[11px] tracking-[0.22em] uppercase"
            style={{ color: "var(--oria-muted)" }}
          >
            <Link
              href="/"
              className="hover:text-[var(--gold-deep)] transition-colors"
            >
              Home
            </Link>
            <span style={{ opacity: 0.5 }}>›</span>
            <span>Collections</span>
            <span style={{ opacity: 0.5 }}>›</span>
            <strong style={{ color: "var(--oria-text)", fontWeight: 500 }}>
              All Bags
            </strong>
          </div>
          <div className="flex justify-between items-end flex-wrap gap-6">
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(48px,6vw,88px)",
                fontWeight: 400,
              }}
            >
              All{" "}
              <span
                style={{
                  color: "var(--gold-deep)",
                  fontFamily: "var(--serif)",
                }}
              >
                Bags
              </span>
            </h1>
            <div
              style={{
                fontSize: "13px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--oria-muted)",
              }}
            >
              Showing {filtered.length} of {products.length} products
            </div>
          </div>
        </div>
      </div>

      <div
        className="grid mx-auto"
        style={{
          maxWidth: "1440px",
          gridTemplateColumns: "260px 1fr",
          gap: "60px",
          padding: "60px clamp(20px,4vw,60px) 120px",
        }}
      >
        <aside
          style={{
            position: "sticky",
            top: "100px",
            alignSelf: "start",
            fontSize: "13px",
          }}
        >
          <div
            style={{
              paddingBottom: "24px",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <div className="flex justify-between mb-4 text-[11px] tracking-[0.25em] uppercase font-medium">
              <span>Category</span>
              <button
                onClick={clearAll}
                style={{ color: "var(--gold-deep)" }}
                className="hover:underline text-[11px] tracking-[0.22em] uppercase"
              >
                Clear
              </button>
            </div>
            <ul className="flex flex-col gap-2.5">
              {CATEGORIES.map((cat) => {
                const count = products.filter((p) => p.cat === cat).length;
                return (
                  <li key={cat}>
                    <label className="flex items-center gap-2.5 cursor-pointer py-1 hover:text-[var(--gold-deep)] transition-colors">
                      <input
                        type="checkbox"
                        checked={cats.has(cat)}
                        onChange={() => toggleCat(cat)}
                        style={{ accentColor: "var(--gold-deep)" }}
                      />
                      {cat}
                      <span
                        className="ml-auto text-[12px]"
                        style={{ color: "var(--oria-muted)" }}
                      >
                        {count}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            style={{ padding: "24px 0", borderBottom: "1px solid var(--line)" }}
          >
            <div className="mb-4 text-[11px] tracking-[0.25em] uppercase font-medium">
              Color
            </div>
            {availableColors.length === 0 ? (
              <p className="text-[12px]" style={{ color: "var(--oria-muted)" }}>
                No colors available
              </p>
            ) : (
              <div className="flex flex-wrap gap-3">
                {availableColors.map(({ color, label }) => (
                  <button
                    key={color}
                    title={`${label} (${colorCount[color] ?? 0})`}
                    onClick={() => toggleColor(color)}
                    className="flex flex-col items-center gap-1 cursor-pointer group"
                  >
                    <span
                      className="w-7 h-7 rounded-full border border-[var(--line)] block transition-transform group-hover:scale-110"
                      style={{
                        background: swatchBg[color],
                        boxShadow: colors.has(color)
                          ? "0 0 0 2px var(--ivory), 0 0 0 3.5px var(--oria-text)"
                          : undefined,
                      }}
                    />
                    <span
                      className="text-[9px] tracking-[0.15em] uppercase"
                      style={{
                        color: colors.has(color)
                          ? "var(--oria-text)"
                          : "var(--oria-muted)",
                      }}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div
            style={{ padding: "24px 0", borderBottom: "1px solid var(--line)" }}
          >
            <div className="mb-4 text-[11px] tracking-[0.25em] uppercase font-medium">
              Price
            </div>
            <div className="relative h-7">
              <div
                className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2"
                style={{ background: "var(--line)" }}
              />
              <div
                className="absolute top-1/2 h-[2px] -translate-y-1/2"
                style={{
                  left: `${lp}%`,
                  right: `${100 - hp}%`,
                  background: "var(--gold-deep)",
                }}
              />
              <input
                type="range"
                min={globalMin}
                max={globalMax}
                step={50}
                value={priceMin}
                className="absolute inset-0 w-full h-full appearance-none bg-transparent pointer-events-auto"
                style={{ WebkitAppearance: "none" }}
                onChange={(e) => {
                  const v = +e.target.value;
                  if (v < priceMax - 100) setPriceMin(v);
                }}
              />
              <input
                type="range"
                min={globalMin}
                max={globalMax}
                step={50}
                value={priceMax}
                className="absolute inset-0 w-full h-full appearance-none bg-transparent pointer-events-auto"
                style={{ WebkitAppearance: "none" }}
                onChange={(e) => {
                  const v = +e.target.value;
                  if (v > priceMin + 100) setPriceMax(v);
                }}
              />
            </div>
            <div
              className="flex justify-between mt-3 text-[12px]"
              style={{ color: "var(--oria-muted)" }}
            >
              <span>€ {priceMin.toLocaleString()}</span>
              <span>€ {priceMax.toLocaleString()}</span>
            </div>
          </div>

          <div style={{ padding: "24px 0" }}>
            <div className="mb-4 text-[11px] tracking-[0.25em] uppercase font-medium">
              Sort By
            </div>
            <div className="inline-flex items-center gap-2.5 border border-[var(--line)] px-[18px] py-3 rounded-full text-[11px] tracking-[0.22em] uppercase bg-[var(--ivory)]">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border-0 bg-transparent text-[11px] tracking-[0.22em] uppercase outline-none cursor-pointer"
              >
                {SORTS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        </aside>

        <div>
          <div className="grid grid-cols-3 gap-x-7 gap-y-10">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} offsetY={i % 3 === 1} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div
              className="text-center py-20"
              style={{
                color: "var(--oria-muted)",
                fontSize: "14px",
                letterSpacing: "0.1em",
              }}
            >
              No products match your filters.
            </div>
          )}
          {/* <div className="flex justify-center mt-20">
            <button className="inline-flex items-center gap-2.5 text-[12px] tracking-[0.22em] uppercase font-medium px-8 py-[18px] rounded-full border border-[var(--oria-text)] hover:bg-[var(--oria-text)] hover:text-[var(--ivory)] transition-all duration-500">
              Load More ↓
            </button>
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
}
