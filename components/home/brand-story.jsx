"use client";

import { useReveal } from "@/hooks/use-reveal";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function BrandStory() {
  const { ref: ref1, visible: v1 } = useReveal();
  const { ref: ref2, visible: v2 } = useReveal();

  return (/*#__PURE__*/
    _jsx("section", { className: "py-[clamp(80px,12vw,160px)] px-[clamp(20px,4vw,60px)]", children: /*#__PURE__*/
      _jsxs("div", { className: "grid md:grid-cols-[1.2fr_1fr] gap-20 items-center max-w-360 mx-auto", children: [/*#__PURE__*/

        _jsxs("div", {
          ref: ref1,
          className: `reveal relative rounded-xs overflow-hidden aspect-4/5 ${v1 ? "is-visible" : ""}`,
          style: { background: "linear-gradient(135deg, #d8c4a5 0%, #9c7a4e 100%)" }, children: [/*#__PURE__*/

          _jsx("div", {
            className: "absolute inset-0",
            style: { backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 14px)" } }
          ), /*#__PURE__*/
          _jsx("div", {
            className: "absolute inset-0",
            style: { background: "radial-gradient(ellipse at 70% 30%, rgba(255,240,220,0.3), transparent 60%)" } }
          ), /*#__PURE__*/

          _jsxs("svg", {
            viewBox: "0 0 400 500",
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] opacity-70", children: [/*#__PURE__*/

            _jsx("path", { d: "M80 200 Q80 140 140 140 L260 140 Q320 140 320 200 L320 400 Q320 440 280 440 L120 440 Q80 440 80 400 Z", fill: "#fff", fillOpacity: "0.18", stroke: "#fff", strokeWidth: "1.5", strokeOpacity: "0.5" }), /*#__PURE__*/
            _jsx("path", { d: "M150 140 Q150 70 200 70 Q250 70 250 140", stroke: "#fff", strokeWidth: "8", fill: "none", strokeOpacity: "0.6", strokeLinecap: "round" }), /*#__PURE__*/
            _jsx("rect", { x: "185", y: "180", width: "30", height: "14", fill: "#fff", fillOpacity: "0.5" })] }
          ), /*#__PURE__*/

          _jsxs("div", { className: "absolute bottom-6 left-6 flex items-center gap-3 text-ivory text-[10px] tracking-[0.3em] uppercase", children: [/*#__PURE__*/
            _jsx("span", { className: "block w-6 h-px bg-gold" }), "Est. 2019 \xB7 Handcrafted"] }

          )] }
        ), /*#__PURE__*/


        _jsxs("div", {
          ref: ref2,
          className: `reveal ${v2 ? "is-visible" : ""}`, children: [/*#__PURE__*/

          _jsx("div", { className: "text-[11px] tracking-[0.25em] uppercase text-oria-muted mb-6", children: "\u2014 Our Story" }), /*#__PURE__*/
          _jsxs("h2", { className: "font-serif text-[clamp(40px,5vw,72px)] mb-8", children: ["Patience is the ", /*#__PURE__*/
            _jsx("em", { className: "italic text-gold-deep", children: "fabric." })] }
          ), /*#__PURE__*/
          _jsx("p", { className: "text-base text-charcoal mb-5 max-w-120", children: "We started in 2019 with a single intention: to make bags that age the way a woman does \u2014 with grace, with story, with no apology. Not trend-driven. Not mass-produced. Just the right bag, made properly." }

          ), /*#__PURE__*/
          _jsx("p", { className: "text-base text-charcoal mb-5 max-w-120", children: "Every Maison Oria piece is shaped by a single artisan from start to finish. Forty-eight hours. Full-grain vegetable-tanned leather. Precision-cast brass hardware built to outlast everything in your wardrobe." }

          ), /*#__PURE__*/
          _jsx("blockquote", { className: "font-serif italic text-[28px] leading-[1.3] my-9 pl-6 border-l-2 border-gold max-w-115 text-oria-text", children: "\"A bag is not a thing you carry. It is a thing that carries you back to yourself.\"" }

          ), /*#__PURE__*/
          _jsxs("div", { className: "flex items-center gap-4 text-[11px] tracking-[0.25em] uppercase text-oria-muted", children: [/*#__PURE__*/
            _jsx("span", { className: "block w-10 h-px bg-gold" }), "Yasmina El Idrissi \xB7 Founder"] }

          )] }
        )] }
      ) }
    ));

}