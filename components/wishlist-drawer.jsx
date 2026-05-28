"use client";

import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useWishlist } from "@/store/wishlist";
import { useCart } from "./cart-context";
import { BagSVG } from "./bag-svg";
import { swatchBg } from "@/lib/products";

export function WishlistDrawer() {
  const { items, open, setOpen, toggle } = useWishlist();
  const { addItem } = useCart();

  return (
    <Sheet open={open} onOpenChange={(v) => !v && setOpen(false)}>
      <SheetContent
        side="right"
        className="w-full max-w-[440px] flex flex-col p-0 border-l border-[var(--line)]"
        style={{ background: "var(--ivory)" }}
      >
        <SheetHeader className="flex flex-row items-center justify-between px-8 py-7 border-b border-[var(--line)]">
          <SheetTitle style={{ fontFamily: "var(--serif)", fontSize: "24px", fontWeight: 400 }}>
            Liked{" "}
            <span className="text-sm font-normal text-[var(--oria-muted)]" style={{ fontFamily: "Inter, sans-serif" }}>
              — {items.length} {items.length === 1 ? "piece" : "pieces"}
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
              <svg viewBox="0 0 24 24" className="w-10 h-10 opacity-20" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 21s-7-4.5-9-9.5C1.5 7 5 4 8 4c2 0 3 1 4 2 1-1 2-2 4-2 3 0 6.5 3 5 7.5-2 5-9 9.5-9 9.5z" />
              </svg>
              <p className="text-[var(--oria-muted)] text-sm tracking-[0.08em]">Nothing saved yet.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="grid grid-cols-[80px_1fr_auto] gap-4 py-4 border-b border-[var(--line)]">
                <Link href={`/products/${item.handle}`} onClick={() => setOpen(false)}>
                  <div className="relative w-20 h-[100px] bg-[var(--ivory-2)] rounded overflow-hidden">
                    {item.images?.[0] ? (
                      <Image src={item.images[0]} alt={item.name} fill className="object-cover" sizes="80px" />
                    ) : (
                      <BagSVG color={item.primary} />
                    )}
                  </div>
                </Link>

                <div className="flex flex-col justify-between py-1">
                  <div>
                    <Link href={`/products/${item.handle}`} onClick={() => setOpen(false)}>
                      <div style={{ fontFamily: "var(--serif)", fontSize: "18px", marginBottom: "4px" }}>{item.name}</div>
                    </Link>
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="w-3 h-3 rounded-full border border-black/10 inline-block" style={{ background: swatchBg[item.primary] }} />
                      <span className="text-[11px] tracking-[0.18em] uppercase text-[var(--oria-muted)]">{item.primary}</span>
                    </div>
                    <div style={{ fontFamily: "var(--serif)", fontSize: "16px", color: "var(--gold-deep)" }}>
                      € {item.price?.toLocaleString()}
                    </div>
                  </div>
                  <button
                    className="mt-3 self-start text-[10px] tracking-[0.22em] uppercase border border-[var(--oria-text)] rounded-full px-4 py-1.5 transition-all duration-300 hover:bg-[var(--oria-text)] hover:text-[var(--text-light)]"
                    onClick={() => { addItem(item, 1, item.primary); setOpen(false); }}
                  >
                    Add to Bag
                  </button>
                </div>

                <button
                  aria-label="Remove from wishlist"
                  className="self-start mt-1 text-[var(--oria-muted)] hover:text-[var(--oria-text)] transition-colors"
                  onClick={() => toggle(item)}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
