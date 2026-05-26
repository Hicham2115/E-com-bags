"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { swatchBg } from "@/lib/products";
import { BagSVG } from "./bag-svg";
import { Badge } from "@/components/ui/badge";
import { useCart } from "./cart-context";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";






export function ProductCard({ product: p, offsetY = false }) {
  const [wished, setWished] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const hasImages = p.images.length > 0;
  const img1 = p.images[0];
  const img2 = p.images[1] ?? p.images[0];

  const badgeStyle =
  p.badge === "SALE" ?
  "bg-red-700 text-white border-0" :
  p.badge === "BESTSELLER" ?
  "bg-[var(--gold)] text-[var(--oria-text)] border-0" :
  "bg-[var(--oria-text)] text-[var(--text-light)] border-0";

  return (/*#__PURE__*/
    _jsxs("article", {
      className: "relative group",
      style: offsetY ? { transform: "translateY(40px)" } : undefined,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false), children: [/*#__PURE__*/

      _jsx(Link, { href: `/products/${p.handle}`, className: "block", children: /*#__PURE__*/
        _jsxs("div", { className: "relative aspect-[4/5] overflow-hidden bg-[var(--ivory-2)] rounded-sm mb-[18px]", children: [/*#__PURE__*/

          _jsx("div", {
            className: "absolute inset-0 transition-transform duration-1000",
            style: { transform: hovered ? "scale(1.06)" : "scale(1)" }, children:

            hasImages ? /*#__PURE__*/
            _jsx(Image, { src: img1, alt: p.name, fill: true, className: "object-cover", sizes: "(max-width: 1024px) 50vw, 33vw" }) : /*#__PURE__*/

            _jsx(BagSVG, { color: p.primary }) }

          ), /*#__PURE__*/

          _jsx("div", {
            className: "absolute inset-0 transition-opacity duration-700",
            style: { opacity: hovered ? 1 : 0 }, children:

            hasImages ? /*#__PURE__*/
            _jsx(Image, { src: img2, alt: p.name, fill: true, className: "object-cover", sizes: "(max-width: 1024px) 50vw, 33vw" }) : /*#__PURE__*/

            _jsx(BagSVG, { color: p.primary, alt: true }) }

          ),

          p.badge && /*#__PURE__*/
          _jsx(Badge, { className: `absolute top-[14px] left-[14px] z-10 text-[10px] tracking-[0.2em] uppercase font-medium rounded-full px-3 py-1.5 ${badgeStyle}`, children:
            p.badge }
          ), /*#__PURE__*/


          _jsx("button", {
            className: "absolute top-[14px] right-[14px] z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300",
            style: wished ? { background: "var(--oria-text)" } : undefined,
            "aria-label": "Add to wishlist",
            onClick: (e) => {e.preventDefault();setWished(!wished);}, children: /*#__PURE__*/

            _jsx("svg", { viewBox: "0 0 24 24", className: "w-4 h-4", style: { stroke: wished ? "var(--gold)" : "var(--oria-text)", fill: wished ? "var(--gold)" : "none", strokeWidth: 1.4, transition: "all .25s" }, children: /*#__PURE__*/
              _jsx("path", { d: "M12 21s-7-4.5-9-9.5C1.5 7 5 4 8 4c2 0 3 1 4 2 1-1 2-2 4-2 3 0 6.5 3 5 7.5-2 5-9 9.5-9 9.5z" }) }
            ) }
          ), /*#__PURE__*/

          _jsx("button", {
            className: "absolute left-[14px] right-[14px] bottom-[14px] z-10 bg-[var(--ivory)] text-[var(--oria-text)] py-3 text-[11px] tracking-[0.25em] uppercase font-medium rounded-full transition-all duration-500 hover:bg-[var(--oria-text)] hover:text-[var(--text-light)]",
            style: { transform: hovered ? "translateY(0)" : "translateY(120%)" },
            onClick: (e) => {e.preventDefault();addItem(p, 1, p.primary);}, children:
            "Quick Add to Bag" }

          )] }
        ) }
      ), /*#__PURE__*/

      _jsxs(Link, { href: `/products/${p.handle}`, children: [/*#__PURE__*/
        _jsx("h3", { style: { fontFamily: "var(--serif)", fontSize: "22px", lineHeight: 1.2, marginBottom: "6px" }, children:
          p.name }
        ), /*#__PURE__*/
        _jsx("div", { className: "flex justify-between items-center gap-3", children: /*#__PURE__*/
          _jsxs("div", { className: "text-sm font-medium tracking-[0.04em]", style: { color: "var(--gold-deep)" }, children: [
            p.was && /*#__PURE__*/_jsxs("s", { className: "mr-2 text-[var(--oria-muted)] font-normal", children: ["\u20AC ", p.was.toLocaleString()] }), "\u20AC ",
            p.price.toLocaleString()] }
          ) }
        ), /*#__PURE__*/
        _jsx("div", { className: "flex gap-1.5 mt-2", children:
          p.colors.map((c) => /*#__PURE__*/
          _jsx("span", {

            className: "w-3.5 h-3.5 rounded-full border border-black/10",
            style: { background: swatchBg[c] } }, c
          )
          ) }
        )] }
      )] }
    ));

}