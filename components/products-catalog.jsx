"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { swatchBg } from "@/lib/products";import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";

const ALL_COLORS = [
{ color: "camel", label: "Camel" },
{ color: "black", label: "Black" },
{ color: "ivory", label: "Ivory" },
{ color: "cocoa", label: "Cocoa" },
{ color: "ruby", label: "Ruby" },
{ color: "sage", label: "Sage" },
{ color: "ink", label: "Ink" }];

const CATEGORIES = ["Tote", "Crossbody", "Shoulder", "Mini", "Evening"];
const SORTS = ["Featured", "New Arrivals", "Price · Low → High", "Price · High → Low"];

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
    if (colors.size) list = list.filter((p) => p.colors.some((c) => colors.has(c)));
    list = list.filter((p) => p.price >= priceMin && p.price <= priceMax);
    if (sort === "Price · Low → High") list.sort((a, b) => a.price - b.price);
    if (sort === "Price · High → Low") list.sort((a, b) => b.price - a.price);
    if (sort === "New Arrivals") list.sort((a, b) => (b.badge === "NEW" ? 1 : 0) - (a.badge === "NEW" ? 1 : 0));
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
    products.forEach((p) => p.colors.forEach((c) => {map[c] = (map[c] ?? 0) + 1;}));
    return map;
  }, [products]);

  const range = globalMax - globalMin || 1;
  const lp = (priceMin - globalMin) / range * 100;
  const hp = (priceMax - globalMin) / range * 100;

  return (/*#__PURE__*/
    _jsxs(_Fragment, { children: [/*#__PURE__*/
      _jsx(Navbar, {}), /*#__PURE__*/
      _jsx("div", {
        style: {
          background: "linear-gradient(180deg, var(--ivory) 0%, var(--ivory-2) 100%)",
          paddingTop: "140px",
          paddingBottom: "60px",
          paddingLeft: "clamp(20px,4vw,60px)",
          paddingRight: "clamp(20px,4vw,60px)"
        }, children: /*#__PURE__*/

        _jsxs("div", { style: { maxWidth: "1440px", margin: "0 auto" }, children: [/*#__PURE__*/
          _jsxs("div", { className: "flex items-center gap-3 mb-8 text-[11px] tracking-[0.22em] uppercase", style: { color: "var(--oria-muted)" }, children: [/*#__PURE__*/
            _jsx(Link, { href: "/", className: "hover:text-[var(--gold-deep)] transition-colors", children: "Home" }), /*#__PURE__*/
            _jsx("span", { style: { opacity: 0.5 }, children: "\u203A" }), /*#__PURE__*/
            _jsx("span", { children: "Collections" }), /*#__PURE__*/
            _jsx("span", { style: { opacity: 0.5 }, children: "\u203A" }), /*#__PURE__*/
            _jsx("strong", { style: { color: "var(--oria-text)", fontWeight: 500 }, children: "All Bags" })] }
          ), /*#__PURE__*/
          _jsxs("div", { className: "flex justify-between items-end flex-wrap gap-6", children: [/*#__PURE__*/
            _jsxs("h1", { style: { fontFamily: "var(--serif)", fontSize: "clamp(48px,6vw,88px)", fontWeight: 400 }, children: ["All ", /*#__PURE__*/
              _jsx("em", { style: { fontStyle: "italic", color: "var(--gold-deep)" }, children: "Bags" })] }
            ), /*#__PURE__*/
            _jsxs("div", { style: { fontSize: "13px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--oria-muted)" }, children: ["Showing ",
              filtered.length, " of ", products.length, " products"] }
            )] }
          )] }
        ) }
      ), /*#__PURE__*/

      _jsxs("div", {
        className: "grid mx-auto",
        style: { maxWidth: "1440px", gridTemplateColumns: "260px 1fr", gap: "60px", padding: "60px clamp(20px,4vw,60px) 120px" }, children: [/*#__PURE__*/


        _jsxs("aside", { style: { position: "sticky", top: "100px", alignSelf: "start", fontSize: "13px" }, children: [/*#__PURE__*/

          _jsxs("div", { style: { paddingBottom: "24px", borderBottom: "1px solid var(--line)" }, children: [/*#__PURE__*/
            _jsxs("div", { className: "flex justify-between mb-4 text-[11px] tracking-[0.25em] uppercase font-medium", children: [/*#__PURE__*/
              _jsx("span", { children: "Category" }), /*#__PURE__*/
              _jsx("button", { onClick: clearAll, style: { color: "var(--gold-deep)" }, className: "hover:underline text-[11px] tracking-[0.22em] uppercase", children: "Clear" })] }
            ), /*#__PURE__*/
            _jsx("ul", { className: "flex flex-col gap-2.5", children:
              CATEGORIES.map((cat) => {
                const count = products.filter((p) => p.cat === cat).length;
                return (/*#__PURE__*/
                  _jsx("li", { children: /*#__PURE__*/
                    _jsxs("label", { className: "flex items-center gap-2.5 cursor-pointer py-1 hover:text-[var(--gold-deep)] transition-colors", children: [/*#__PURE__*/
                      _jsx("input", {
                        type: "checkbox",
                        checked: cats.has(cat),
                        onChange: () => toggleCat(cat),
                        style: { accentColor: "var(--gold-deep)" } }
                      ),
                      cat, /*#__PURE__*/
                      _jsx("span", { className: "ml-auto text-[12px]", style: { color: "var(--oria-muted)" }, children: count })] }
                    ) }, cat
                  ));

              }) }
            )] }
          ), /*#__PURE__*/


          _jsxs("div", { style: { padding: "24px 0", borderBottom: "1px solid var(--line)" }, children: [/*#__PURE__*/
            _jsx("div", { className: "mb-4 text-[11px] tracking-[0.25em] uppercase font-medium", children: "Color" }),
            availableColors.length === 0 ? /*#__PURE__*/
            _jsx("p", { className: "text-[12px]", style: { color: "var(--oria-muted)" }, children: "No colors available" }) : /*#__PURE__*/

            _jsx("div", { className: "flex flex-wrap gap-3", children:
              availableColors.map(({ color, label }) => /*#__PURE__*/
              _jsxs("button", {

                title: `${label} (${colorCount[color] ?? 0})`,
                onClick: () => toggleColor(color),
                className: "flex flex-col items-center gap-1 cursor-pointer group", children: [/*#__PURE__*/

                _jsx("span", {
                  className: "w-7 h-7 rounded-full border border-[var(--line)] block transition-transform group-hover:scale-110",
                  style: {
                    background: swatchBg[color],
                    boxShadow: colors.has(color) ? "0 0 0 2px var(--ivory), 0 0 0 3.5px var(--oria-text)" : undefined
                  } }
                ), /*#__PURE__*/
                _jsx("span", { className: "text-[9px] tracking-[0.15em] uppercase", style: { color: colors.has(color) ? "var(--oria-text)" : "var(--oria-muted)" }, children:
                  label }
                )] }, color
              )
              ) }
            )] }

          ), /*#__PURE__*/


          _jsxs("div", { style: { padding: "24px 0", borderBottom: "1px solid var(--line)" }, children: [/*#__PURE__*/
            _jsx("div", { className: "mb-4 text-[11px] tracking-[0.25em] uppercase font-medium", children: "Price" }), /*#__PURE__*/
            _jsxs("div", { className: "relative h-7", children: [/*#__PURE__*/
              _jsx("div", { className: "absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2", style: { background: "var(--line)" } }), /*#__PURE__*/
              _jsx("div", {
                className: "absolute top-1/2 h-[2px] -translate-y-1/2",
                style: { left: `${lp}%`, right: `${100 - hp}%`, background: "var(--gold-deep)" } }
              ), /*#__PURE__*/
              _jsx("input", {
                type: "range", min: globalMin, max: globalMax, step: 50, value: priceMin,
                className: "absolute inset-0 w-full h-full appearance-none bg-transparent pointer-events-auto",
                style: { WebkitAppearance: "none" },
                onChange: (e) => {
                  const v = +e.target.value;
                  if (v < priceMax - 100) setPriceMin(v);
                } }
              ), /*#__PURE__*/
              _jsx("input", {
                type: "range", min: globalMin, max: globalMax, step: 50, value: priceMax,
                className: "absolute inset-0 w-full h-full appearance-none bg-transparent pointer-events-auto",
                style: { WebkitAppearance: "none" },
                onChange: (e) => {
                  const v = +e.target.value;
                  if (v > priceMin + 100) setPriceMax(v);
                } }
              )] }
            ), /*#__PURE__*/
            _jsxs("div", { className: "flex justify-between mt-3 text-[12px]", style: { color: "var(--oria-muted)" }, children: [/*#__PURE__*/
              _jsxs("span", { children: ["\u20AC ", priceMin.toLocaleString()] }), /*#__PURE__*/
              _jsxs("span", { children: ["\u20AC ", priceMax.toLocaleString()] })] }
            )] }
          ), /*#__PURE__*/


          _jsxs("div", { style: { padding: "24px 0" }, children: [/*#__PURE__*/
            _jsx("div", { className: "mb-4 text-[11px] tracking-[0.25em] uppercase font-medium", children: "Sort By" }), /*#__PURE__*/
            _jsx("div", { className: "inline-flex items-center gap-2.5 border border-[var(--line)] px-[18px] py-3 rounded-full text-[11px] tracking-[0.22em] uppercase bg-[var(--ivory)]", children: /*#__PURE__*/
              _jsx("select", {
                value: sort,
                onChange: (e) => setSort(e.target.value),
                className: "border-0 bg-transparent text-[11px] tracking-[0.22em] uppercase outline-none cursor-pointer", children:

                SORTS.map((s) => /*#__PURE__*/_jsx("option", { children: s }, s)) }
              ) }
            )] }
          )] }
        ), /*#__PURE__*/


        _jsxs("div", { children: [/*#__PURE__*/
          _jsx("div", { className: "grid grid-cols-3 gap-x-7 gap-y-10", children:
            filtered.map((p, i) => /*#__PURE__*/
            _jsx(ProductCard, { product: p, offsetY: i % 3 === 1 }, p.id)
            ) }
          ),
          filtered.length === 0 && /*#__PURE__*/
          _jsx("div", { className: "text-center py-20", style: { color: "var(--oria-muted)", fontSize: "14px", letterSpacing: "0.1em" }, children: "No products match your filters." }

          ), /*#__PURE__*/

          _jsx("div", { className: "flex justify-center mt-20", children: /*#__PURE__*/
            _jsx("button", { className: "inline-flex items-center gap-2.5 text-[12px] tracking-[0.22em] uppercase font-medium px-8 py-[18px] rounded-full border border-[var(--oria-text)] hover:bg-[var(--oria-text)] hover:text-[var(--ivory)] transition-all duration-500", children: "Load More \u2193" }

            ) }
          )] }
        )] }
      ), /*#__PURE__*/

      _jsx(Footer, {})] }
    ));

}