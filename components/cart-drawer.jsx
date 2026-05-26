"use client";

import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "./cart-context";
import { BagSVG } from "./bag-svg";
import { swatchBg } from "@/lib/products";import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";






export function CartDrawer({ open, onClose }) {
  const { items, removeItem, changeQty, subtotal } = useCart();

  return (/*#__PURE__*/
    _jsx(Sheet, { open: open, onOpenChange: (v) => !v && onClose(), children: /*#__PURE__*/
      _jsxs(SheetContent, {
        side: "right",
        className: "w-full max-w-[440px] flex flex-col p-0 border-l border-[var(--line)]",
        style: { background: "var(--ivory)" }, children: [/*#__PURE__*/

        _jsx(SheetHeader, { className: "flex flex-row items-center justify-between px-8 py-7 border-b border-[var(--line)]", children: /*#__PURE__*/
          _jsxs(SheetTitle, { style: { fontFamily: "var(--serif)", fontSize: "24px", fontWeight: 400 }, children: ["Your Bag",
            " ", /*#__PURE__*/
            _jsxs("span", { className: "text-sm font-normal text-[var(--oria-muted)]", style: { fontFamily: "Inter, sans-serif" }, children: ["\u2014 ",
              items.reduce((s, i) => s + i.qty, 0), " items"] }
            )] }
          ) }
        ), /*#__PURE__*/

        _jsx("div", { className: "flex-1 overflow-y-auto px-8 py-6", children:
          items.length === 0 ? /*#__PURE__*/
          _jsx("p", { className: "text-center text-[var(--oria-muted)] py-10", children: "Your bag is empty." }) :

          items.map((item) => /*#__PURE__*/
          _jsxs("div", { className: "grid grid-cols-[80px_1fr_auto] gap-4 py-4 border-b border-[var(--line)]", children: [/*#__PURE__*/
            _jsx("div", { className: "relative w-20 h-[100px] bg-[var(--ivory-2)] rounded overflow-hidden", children:
              item.image ? /*#__PURE__*/
              _jsx(Image, { src: item.image, alt: item.name, fill: true, className: "object-cover", sizes: "80px" }) : /*#__PURE__*/

              _jsx(BagSVG, { color: item.color }) }

            ), /*#__PURE__*/
            _jsxs("div", { children: [/*#__PURE__*/
              _jsx("div", { style: { fontFamily: "var(--serif)", fontSize: "18px", marginBottom: "4px" }, children: item.name }), /*#__PURE__*/
              _jsxs("div", { className: "flex items-center gap-1.5 mb-3", children: [/*#__PURE__*/
                _jsx("span", { className: "w-3 h-3 rounded-full border border-black/10 inline-block", style: { background: swatchBg[item.color] } }), /*#__PURE__*/
                _jsxs("span", { className: "text-[11px] tracking-[0.18em] uppercase text-[var(--oria-muted)]", children: [item.color, " \xB7 Standard"] })] }
              ), /*#__PURE__*/
              _jsxs("div", { className: "flex items-center gap-3 text-[13px]", children: [/*#__PURE__*/
                _jsx("button", {
                  className: "w-[22px] h-[22px] border border-[var(--line)] rounded-full text-xs flex items-center justify-center hover:border-[var(--oria-text)] transition-colors",
                  onClick: () => changeQty(item.id, -1), children:
                  "\u2212" }), /*#__PURE__*/
                _jsx("span", { children: item.qty }), /*#__PURE__*/
                _jsx("button", {
                  className: "w-[22px] h-[22px] border border-[var(--line)] rounded-full text-xs flex items-center justify-center hover:border-[var(--oria-text)] transition-colors",
                  onClick: () => changeQty(item.id, 1), children:
                  "+" })] }
              )] }
            ), /*#__PURE__*/
            _jsxs("div", { className: "flex flex-col items-end", children: [/*#__PURE__*/
              _jsxs("div", { style: { fontFamily: "var(--serif)", fontSize: "18px", color: "var(--gold-deep)" }, children: ["\u20AC ",
                (item.price * item.qty).toLocaleString()] }
              ), /*#__PURE__*/
              _jsx("button", {
                className: "mt-2 text-[10px] tracking-[0.2em] uppercase text-[var(--oria-muted)] hover:text-[var(--oria-text)] transition-colors",
                onClick: () => removeItem(item.id), children:
                "Remove" }

              )] }
            )] }, item.id
          )
          ) }

        ), /*#__PURE__*/

        _jsxs("div", { className: "px-8 py-6 border-t border-[var(--line)]", children: [/*#__PURE__*/
          _jsxs("div", { className: "flex justify-between mb-2 text-sm", children: [/*#__PURE__*/
            _jsx("span", { children: "Subtotal" }), /*#__PURE__*/
            _jsxs("strong", { style: { fontFamily: "var(--serif)", fontSize: "22px", color: "var(--gold-deep)", fontWeight: 500 }, children: ["\u20AC ",
              subtotal.toLocaleString()] }
            )] }
          ), /*#__PURE__*/
          _jsx("div", { className: "text-[11px] text-[var(--oria-muted)] tracking-[0.18em] uppercase mb-5", children: "Shipping & taxes calculated at checkout \xB7 Free worldwide over \u20AC500" }

          ), /*#__PURE__*/
          _jsx(Button, {
            className: "w-full justify-center py-5 text-[12px] tracking-[0.22em] uppercase font-medium rounded-full bg-[var(--oria-text)] text-[var(--text-light)] hover:bg-[var(--gold)] hover:text-[var(--oria-text)] transition-all duration-500 border-0", children:
            "Proceed to Checkout \u2192" }

          )] }
        )] }
      ) }
    ));

}