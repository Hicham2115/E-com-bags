"use client";

import { createContext, useContext } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      open: false,
      setOpen: (v) => set({ open: v }),
      addItem(product, qty = 1, color) {
        const selectedColor = color ?? product.primary;
        const itemKey = `${product.id}-${selectedColor}`;
        set((state) => {
          const existing = state.items.find((x) => x.id === itemKey);
          if (existing) {
            toast.success(`${product.name} updated in bag`);
            return { items: state.items.map((x) => x.id === itemKey ? { ...x, qty: x.qty + qty } : x), open: true };
          }
          toast.success(`${product.name} added to bag`);
          return {
            items: [...state.items, {
              id: itemKey,
              variantId: product.variantId,
              handle: product.handle,
              name: product.name,
              price: product.price,
              image: product.images[0] ?? "",
              qty,
              color: selectedColor,
            }],
            open: true,
          };
        });
      },
      removeItem: (id) => set((state) => ({ items: state.items.filter((x) => x.id !== id) })),
      changeQty: (id, delta) => set((state) => ({
        items: state.items.map((x) => {
          if (x.id !== id) return x;
          const newQty = x.qty + delta;
          return newQty < 1 ? x : { ...x, qty: newQty };
        }),
      })),
      get count() { return get().items.reduce((s, i) => s + i.qty, 0); },
      get subtotal() { return get().items.reduce((s, i) => s + i.price * i.qty, 0); },
    }),
    { name: "maison-oria-cart", partialize: (s) => ({ items: s.items }) },
  ),
);

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const store = useCartStore();
  const count = store.items.reduce((s, i) => s + i.qty, 0);
  const subtotal = store.items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <CartContext.Provider value={{ ...store, count, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
