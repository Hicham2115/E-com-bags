"use client";

import { useState } from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "./cart-context";
import { BagSVG } from "./bag-svg";
import { swatchBg } from "@/lib/products";
import { createCheckout } from "@/lib/shopify";

export function CartDrawer({ open, onClose }) {
  const { items, removeItem, changeQty, subtotal } = useCart();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    const url = await createCheckout(items);
    setLoading(false);
    if (url) {
      window.location.href = url;
    }
  }

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full max-w-[440px] flex flex-col p-0 border-l border-[var(--line)]"
        style={{ background: "var(--ivory)" }}
      >
        <SheetHeader className="flex flex-row items-center justify-between px-8 py-7 border-b border-[var(--line)]">
          <SheetTitle style={{ fontFamily: "var(--serif)", fontSize: "24px", fontWeight: 400 }}>
            Your Bag{" "}
            <span className="text-sm font-normal text-[var(--oria-muted)]" style={{ fontFamily: "Inter, sans-serif" }}>
              — {items.reduce((s, i) => s + i.qty, 0)} items
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <p className="text-center text-[var(--oria-muted)] py-10">Your bag is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="grid grid-cols-[80px_1fr_auto] gap-4 py-4 border-b border-[var(--line)]">
                <div className="relative w-20 h-[100px] bg-[var(--ivory-2)] rounded overflow-hidden">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                  ) : (
                    <BagSVG color={item.color} />
                  )}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: "18px", marginBottom: "4px" }}>{item.name}</div>
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-3 h-3 rounded-full border border-black/10 inline-block" style={{ background: swatchBg[item.color] }} />
                    <span className="text-[11px] tracking-[0.18em] uppercase text-[var(--oria-muted)]">{item.color} · Standard</span>
                  </div>
                  <div className="flex items-center gap-3 text-[13px]">
                    <button
                      className="w-[22px] h-[22px] border border-[var(--line)] rounded-full text-xs flex items-center justify-center hover:border-[var(--oria-text)] transition-colors"
                      onClick={() => changeQty(item.id, -1)}
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      className="w-[22px] h-[22px] border border-[var(--line)] rounded-full text-xs flex items-center justify-center hover:border-[var(--oria-text)] transition-colors"
                      onClick={() => changeQty(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div style={{ fontFamily: "var(--serif)", fontSize: "18px", color: "var(--gold-deep)" }}>
                    € {(item.price * item.qty).toLocaleString()}
                  </div>
                  <button
                    className="mt-2 text-[10px] tracking-[0.2em] uppercase text-[var(--oria-muted)] hover:text-[var(--oria-text)] transition-colors"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="px-8 py-6 border-t border-[var(--line)]">
          <div className="flex justify-between mb-2 text-sm">
            <span>Subtotal</span>
            <strong style={{ fontFamily: "var(--serif)", fontSize: "22px", color: "var(--gold-deep)", fontWeight: 500 }}>
              € {subtotal.toLocaleString()}
            </strong>
          </div>
          <div className="text-[11px] text-[var(--oria-muted)] tracking-[0.18em] uppercase mb-5">
            Shipping & taxes calculated at checkout · Free worldwide over €500
          </div>
          <Button
            onClick={handleCheckout}
            disabled={loading || items.length === 0}
            className="w-full justify-center py-5 text-[12px] tracking-[0.22em] uppercase font-medium rounded-full bg-[var(--oria-text)] text-[var(--text-light)] hover:bg-[var(--gold)] hover:text-[var(--oria-text)] transition-all duration-500 border-0 disabled:opacity-50"
          >
            {loading ? "Redirecting…" : "Proceed to Checkout →"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
