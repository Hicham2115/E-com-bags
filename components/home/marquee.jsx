import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";const rows = [
{ items: ["New Collection 2026", "Free Worldwide Delivery", "Handcrafted by Master Artisans", "Buy 2 Get 1 Free", "Élégance Sans Effort"], reverse: false, outerCls: "bg-oria-text text-ivory", accentCls: "text-gold", dur: "36s" },
{ items: ["Every Bag · One Artisan", "Forty-Eight Hours per Bag", "Lifetime Repairs", "Full-Grain Vegetable-Tanned Leather", "Established 2019"], reverse: true, outerCls: "bg-gold text-oria-text", accentCls: "text-oria-text", dur: "42s" }];


export function Marquee() {
  return (/*#__PURE__*/
    _jsx(_Fragment, { children:
      rows.map((row, ri) => /*#__PURE__*/
      _jsx("div", {

        className: `overflow-hidden py-5.5 border-t border-t-white/6 border-b border-b-white/6 ${row.outerCls}`, children: /*#__PURE__*/

        _jsx("div", {
          className: "flex gap-12 whitespace-nowrap font-serif italic text-[clamp(20px,2.4vw,32px)]",
          style: {
            animation: `marqueeMove ${row.dur} linear infinite`,
            animationDirection: row.reverse ? "reverse" : "normal"
          }, children:

          [...row.items, ...row.items].map((item, i) => /*#__PURE__*/
          _jsxs("span", { className: "flex items-center gap-12", children: [
            item, /*#__PURE__*/
            _jsx("span", { className: `not-italic ${row.accentCls}`, children: "\u2726" })] }, i
          )
          ) }
        ) }, ri
      )
      ) }
    ));

}