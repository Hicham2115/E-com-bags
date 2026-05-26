"use client";

import { createContext, useContext, useState } from "react";import { jsx as _jsx } from "react/jsx-runtime";
























const CartContext = /*#__PURE__*/createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  function addItem(product, qty = 1, color) {
    const selectedColor = color ?? product.primary;
    const itemKey = `${product.id}-${selectedColor}`;
    setItems((prev) => {
      const existing = prev.find((x) => x.id === itemKey);
      if (existing) {
        return prev.map((x) => x.id === itemKey ? { ...x, qty: x.qty + qty } : x);
      }
      return [...prev, {
        id: itemKey,
        variantId: product.variantId,
        handle: product.handle,
        name: product.name,
        price: product.price,
        image: product.images[0] ?? "",
        qty,
        color: selectedColor
      }];
    });
    setOpen(true);
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((x) => x.id !== id));
  }

  function changeQty(id, delta) {
    setItems((prev) =>
    prev.map((x) => {
      if (x.id !== id) return x;
      const newQty = x.qty + delta;
      return newQty < 1 ? x : { ...x, qty: newQty };
    })
    );
  }

  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (/*#__PURE__*/
    _jsx(CartContext.Provider, { value: { items, open, setOpen, addItem, removeItem, changeQty, count, subtotal }, children:
      children }
    ));

}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}