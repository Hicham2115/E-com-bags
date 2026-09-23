"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
        s: Math.floor(diff / 1000) % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0e0c0a 0%, #1a1610 50%, #0e0c0a 100%)",
      }}
    >
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Top gold rule */}
      <div className="gold-rule opacity-30" />

      <div className="relative z-10 px-[clamp(20px,6vw,100px)] py-[clamp(60px,10vw,120px)]">
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-center max-w-[1400px] mx-auto">

          {/* LEFT — offer text */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-gold opacity-60" />
              <span className="text-[10px] tracking-[0.45em] text-gold uppercase">
                Limited Offer — Through April 30
              </span>
            </div>

            <h2
              className="font-serif leading-[0.92] tracking-[-0.02em] text-text-light mb-8"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)" }}
            >
              Buy two,
              <br />
              the{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg, #C9A96E 0%, #e8c87a 50%, #a8884d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                third is ours.
              </em>
            </h2>

            <p className="text-[13px] tracking-[0.08em] text-oria-muted leading-relaxed mb-10 max-w-sm">
              Add three pieces to your cart. The lowest-priced item is
              automatically deducted at checkout. No code needed.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-3.5 text-[11px] tracking-[0.3em] uppercase font-medium text-oria-black bg-gold hover:bg-gold-deep transition-colors duration-400"
            >
              Shop the Offer →
            </Link>
          </div>

          {/* RIGHT — countdown */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <span className="text-[10px] tracking-[0.4em] text-oria-muted uppercase">
              Offer ends in
            </span>

            <div className="flex items-start gap-4">
              {[
                { val: pad(time.d), label: "Days" },
                { val: pad(time.h), label: "Hours" },
                { val: pad(time.m), label: "Min" },
                { val: pad(time.s), label: "Sec" },
              ].map((cell, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex items-center justify-center mb-2.5"
                      style={{
                        width: "clamp(64px, 7vw, 92px)",
                        height: "clamp(64px, 7vw, 92px)",
                        border: "1px solid rgba(201,169,110,0.25)",
                        background: "rgba(201,169,110,0.04)",
                      }}
                    >
                      <span
                        className="font-serif tabular-nums leading-none text-text-light"
                        style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
                      >
                        {cell.val}
                      </span>
                    </div>
                    <span className="text-[9px] tracking-[0.35em] text-oria-muted uppercase">
                      {cell.label}
                    </span>
                  </div>
                  {i < 3 && (
                    <span
                      className="font-serif text-gold/40 self-start"
                      style={{ fontSize: "clamp(1.4rem, 2vw, 2rem)", marginTop: "0.6rem" }}
                    >
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Decorative ornament */}
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none" className="opacity-20 mt-2">
              <path d="M16 2 L30 16 L16 30 L2 16 Z" stroke="#C9A96E" strokeWidth="1" fill="none" />
              <path d="M16 7 L25 16 L16 25 L7 16 Z" stroke="#C9A96E" strokeWidth="0.6" fill="none" opacity="0.5" />
              <circle cx="16" cy="16" r="1.5" fill="#C9A96E" />
            </svg>
          </div>

        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="gold-rule opacity-30" />
    </section>
  );
}
