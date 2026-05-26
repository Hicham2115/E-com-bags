"use client";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function Footer() {
  return (/*#__PURE__*/
    _jsxs("footer", { className: "relative overflow-hidden pt-[clamp(60px,7vw,100px)] pb-10 bg-oria-black text-text-light", children: [/*#__PURE__*/

      _jsx("div", {
        className: "absolute inset-0 pointer-events-none",
        style: {
          background: "radial-gradient(800px circle at 20% 20%, rgba(201,169,110,0.06), transparent 50%), radial-gradient(600px circle at 80% 80%, rgba(201,169,110,0.04), transparent 60%)",
          animation: "footerBg 18s ease-in-out infinite alternate"
        } }
      ), /*#__PURE__*/


      _jsxs("div", {
        className: "text-center px-[clamp(20px,4vw,60px)] mb-10 overflow-hidden whitespace-nowrap font-serif text-[clamp(80px,15vw,240px)] tracking-[0.03em] leading-none font-normal",
        style: {
          color: "transparent",
          WebkitTextStroke: "1px var(--gold)"
        }, children: [
        "MAISON ", /*#__PURE__*/
        _jsx("em", { style: { fontStyle: "italic", WebkitTextStroke: "1px var(--gold-deep)" }, children: "ORIA" })] }
      ), /*#__PURE__*/


      _jsx("div", {
        className: "mx-[clamp(20px,4vw,60px)] mb-[clamp(40px,5vw,60px)] h-px",
        style: { background: "linear-gradient(90deg, transparent, var(--gold) 20%, var(--gold) 80%, transparent)" } }
      ), /*#__PURE__*/


      _jsxs("div", { className: "grid md:grid-cols-2 gap-15 px-[clamp(20px,4vw,60px)] mb-15", children: [/*#__PURE__*/
        _jsxs("div", { children: [/*#__PURE__*/
          _jsx("p", { className: "mb-8 max-w-[440px] font-serif italic text-[clamp(22px,2vw,30px)] leading-[1.4] text-text-light", children: "\"A bag should hold what matters. The rest is just leather.\"" }

          ), /*#__PURE__*/
          _jsx("div", { className: "flex gap-3.5", children:
            [
            { label: "Instagram", path: "M3 3h18v18H3zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" },
            { label: "TikTok", path: "M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4a4 4 0 0 0 4 4" },
            { label: "Pinterest", path: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM11 8v8M11 8a3 3 0 1 1 3 3c-2 0-3 2-3 5" }].
            map((s) => /*#__PURE__*/
            _jsx("a", {

              href: "#",
              "aria-label": s.label,
              className: "w-11 h-11 rounded-full border border-[rgba(245,240,234,0.18)] flex items-center justify-center transition-all duration-500 hover:scale-[1.08]", children: /*#__PURE__*/

              _jsx("svg", { viewBox: "0 0 24 24", className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: "1.4", children: /*#__PURE__*/
                _jsx("path", { d: s.path }) }
              ) }, s.label
            )
            ) }
          )] }
        ), /*#__PURE__*/

        _jsxs("div", { children: [/*#__PURE__*/
          _jsxs("h4", { className: "font-serif text-[clamp(28px,3vw,40px)] font-normal mb-3", children: ["Join the ", /*#__PURE__*/
            _jsx("em", { className: "italic text-gold", children: "Circle." })] }
          ), /*#__PURE__*/
          _jsx("p", { className: "text-[13px] mb-6 max-w-90 text-[rgba(245,240,234,0.6)]", children: "Quiet letters from the atelier. New arrivals first. No noise. Once a fortnight." }

          ), /*#__PURE__*/
          _jsxs("form", {
            className: "flex items-center max-w-[420px] border-b border-[rgba(245,240,234,0.25)] pb-3 transition-all duration-300 focus-within:border-gold",
            onSubmit: (e) => {e.preventDefault();e.currentTarget.querySelector("button").textContent = "Welcome ✦";}, children: [/*#__PURE__*/

            _jsx("input", {
              type: "email",
              required: true,
              placeholder: "Your email address",
              className: "flex-1 bg-transparent border-0 outline-none py-2 text-sm text-text-light" }
            ), /*#__PURE__*/
            _jsx("button", { type: "submit", className: "text-[11px] tracking-[0.25em] uppercase pl-4 transition-all duration-300 hover:tracking-[0.35em] text-gold", children: "Subscribe \u2192" }

            )] }
          )] }
        )] }
      ), /*#__PURE__*/


      _jsxs("div", { className: "grid md:grid-cols-3 gap-6 px-[clamp(20px,4vw,60px)] pt-8 items-center text-[11px] tracking-[0.18em] uppercase border-t border-[rgba(245,240,234,0.08)] text-[rgba(245,240,234,0.5)]", children: [/*#__PURE__*/
        _jsx("div", { children: "\xA9 2026 Maison Oria \xB7 Est. 2019" }), /*#__PURE__*/
        _jsx("div", { className: "flex gap-[18px] md:justify-center flex-wrap", children:
          ["Privacy", "Terms", "Shipping", "Care"].map((l) => /*#__PURE__*/
          _jsx("a", { href: "#", className: "hover:text-gold transition-colors", children: l }, l)
          ) }
        ), /*#__PURE__*/
        _jsx("div", { className: "flex md:justify-end gap-2.5 flex-wrap", children:
          ["VISA", "MC", "AMEX", "PAYPAL", "COD"].map((m) => /*#__PURE__*/
          _jsx("span", {

            className: "border border-[rgba(245,240,234,0.18)] rounded px-2.5 py-1 text-[9px] font-semibold text-[rgba(245,240,234,0.7)]", children:

            m }, m
          )
          ) }
        )] }
      )] }
    ));

}