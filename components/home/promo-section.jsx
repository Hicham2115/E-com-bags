"use client";

import { useState, useEffect } from "react";
import Link from "next/link";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function PromoSection() {
  const [time, setTime] = useState({ d: 7, h: 14, m: 22, s: 8 });

  useEffect(() => {
    const end = new Date();
    end.setDate(end.getDate() + 7);
    end.setHours(end.getHours() + 14);

    const tick = () => {
      const diff = Math.max(0, end.getTime() - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor(diff / 3600000) % 24,
        m: Math.floor(diff / 60000) % 60,
        s: Math.floor(diff / 1000) % 60
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (/*#__PURE__*/
    _jsxs("section", { className: "relative overflow-hidden text-center bg-gold text-oria-text py-[clamp(70px,10vw,120px)] px-[clamp(20px,4vw,60px)]", children: [/*#__PURE__*/

      _jsx("div", {
        className: "absolute top-0 left-[-50%] w-[200%] h-full pointer-events-none",
        style: {
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
          animation: "shimmer 5s linear infinite"
        } }
      ), /*#__PURE__*/

      _jsx("div", { className: "text-[11px] tracking-[0.35em] uppercase font-medium mb-6", children: "Limited \u2014 Through April 30" }), /*#__PURE__*/
      _jsxs("h2", { className: "font-serif text-[clamp(48px,7vw,96px)] leading-[0.98] relative z-10 mb-9", children: ["Buy two, the ", /*#__PURE__*/
        _jsx("em", { className: "italic", children: "third is ours." })] }
      ), /*#__PURE__*/

      _jsx("div", { className: "inline-flex gap-7 mb-10 relative z-10", children:
        [
        { val: pad(time.d), label: "Days" },
        { val: ":", label: null },
        { val: pad(time.h), label: "Hours" },
        { val: ":", label: null },
        { val: pad(time.m), label: "Min" },
        { val: ":", label: null },
        { val: pad(time.s), label: "Sec" }].
        map((cell, i) =>
        cell.label === null ? /*#__PURE__*/
        _jsx("span", { className: "font-serif text-[40px] opacity-40 self-start pt-2", children: ":" }, i) : /*#__PURE__*/

        _jsxs("div", { className: "flex flex-col items-center", children: [/*#__PURE__*/
          _jsx("strong", { className: "font-serif text-[clamp(40px,5vw,64px)] font-normal leading-none tabular-nums", children:
            cell.val }
          ), /*#__PURE__*/
          _jsx("span", { className: "text-[10px] tracking-[0.3em] uppercase mt-2 opacity-70", children: cell.label })] }, i
        )

        ) }
      ), /*#__PURE__*/

      _jsx("div", { children: /*#__PURE__*/
        _jsx(Link, { href: "/products", children: /*#__PURE__*/
          _jsx("button", { className: "inline-flex items-center gap-2.5 text-[12px] tracking-[0.22em] uppercase font-medium px-8 py-4.5 rounded-full border border-oria-text hover:bg-oria-text hover:text-gold transition-all duration-500", children: "Shop The Offer \u2192" }

          ) }
        ) }
      )] }
    ));

}