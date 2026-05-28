import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlist = create(
  persist(
    (set, get) => ({
      items: [],
      open: false,
      setOpen: (v) => set({ open: v }),
      toggle: (product) => {
        const exists = get().items.some((p) => p.id === product.id);
        set({
          items: exists
            ? get().items.filter((p) => p.id !== product.id)
            : [...get().items, product],
        });
      },
      isLiked: (id) => get().items.some((p) => p.id === id),
    }),
    { name: "maison-oria-wishlist", partialize: (s) => ({ items: s.items }) }
  )
);
