"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  function addItem(product, qty = 1, color) {
    const selectedColor = color ?? product.primary;
    const itemKey = `${product.id}-${selectedColor}`;
    setItems((prev) => {
      const existing = prev.find((x) => x.id === itemKey);
      if (existing) {
        toast.success(`${product.name} updated in bag`);
        return prev.map((x) => x.id === itemKey ? { ...x, qty: x.qty + qty } : x);
      }
      toast.success(`${product.name} added to bag`);
      return [...prev, {
        id: itemKey,
        variantId: product.variantId,
        handle: product.handle,
        name: product.name,
        price: product.price,
        image: product.images[0] ?? "",
        qty,
        color: selectedColor,
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

  return (
    <CartContext.Provider value={{ items, open, setOpen, addItem, removeItem, changeQty, count, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
