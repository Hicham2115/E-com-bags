"use client";

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-[clamp(60px,7vw,100px)] pb-10 bg-oria-black text-text-light">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px circle at 20% 20%, rgba(201,169,110,0.06), transparent 50%), radial-gradient(600px circle at 80% 80%, rgba(201,169,110,0.04), transparent 60%)",
          animation: "footerBg 18s ease-in-out infinite alternate",
        }}
      />

      <div
        className="text-center px-[clamp(20px,4vw,60px)] mb-10 overflow-hidden whitespace-nowrap font-serif text-[clamp(42px,8vw,120px)] tracking-[0.03em] leading-none font-normal"
        style={{ color: "transparent", WebkitTextStroke: "1px var(--gold)" }}
      >
        MAISON{" "}
        <em style={{ fontStyle: "italic", WebkitTextStroke: "1px var(--gold-deep)" }}>ORIA</em>
      </div>

      <div
        className="mx-[clamp(20px,4vw,60px)] mb-[clamp(40px,5vw,60px)] h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold) 20%, var(--gold) 80%, transparent)" }}
      />

      <div className="grid md:grid-cols-2 gap-15 px-[clamp(20px,4vw,60px)] mb-15">
        <div>
          <p className="mb-8 max-w-110 font-serif italic text-[clamp(22px,2vw,30px)] leading-[1.4] text-text-light">
            &quot;A bag should hold what matters. The rest is just leather.&quot;
          </p>
          <div className="flex gap-3.5">
            {[
              {
                label: "Instagram",
                svg: (
                  <>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeWidth="2.5" />
                  </>
                ),
              },
              {
                label: "TikTok",
                svg: (
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                ),
              },
              {
                label: "Facebook",
                svg: (
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-[rgba(245,240,234,0.18)] flex items-center justify-center transition-all duration-500 hover:scale-[1.08]"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.4">
                  {s.svg}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-[clamp(28px,3vw,40px)] font-normal mb-3">
            Join the <em className="italic text-gold">Circle.</em>
          </h4>
          <p className="text-[13px] mb-6 max-w-90 text-[rgba(245,240,234,0.6)]">
            Quiet letters from the atelier. New arrivals first. No noise. Once a fortnight.
          </p>
          <form
            className="flex items-center max-w-105 border-b border-[rgba(245,240,234,0.25)] pb-3 transition-all duration-300 focus-within:border-gold"
            onSubmit={(e) => {
              e.preventDefault();
              e.currentTarget.querySelector("button").textContent = "Welcome ✦";
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent border-0 outline-none py-2 text-sm text-text-light"
            />
            <button type="submit" className="text-[11px] tracking-[0.25em] uppercase pl-4 transition-all duration-300 hover:tracking-[0.35em] text-gold">
              Subscribe →
            </button>
          </form>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-[clamp(20px,4vw,60px)] pt-8 items-center text-[11px] tracking-[0.18em] uppercase border-t border-[rgba(245,240,234,0.08)] text-[rgba(245,240,234,0.5)]">
        <div>© 2026 Maison Oria · Est. 2019</div>
        <div className="flex gap-4.5 md:justify-center flex-wrap">
          {["Privacy", "Terms", "Shipping", "Care"].map((l) => (
            <a key={l} href="#" className="hover:text-gold transition-colors">
              {l}
            </a>
          ))}
        </div>
        <div className="flex md:justify-end gap-2.5 flex-wrap">
          {["VISA", "MC", "AMEX", "PAYPAL", "COD"].map((m) => (
            <span key={m} className="border border-[rgba(245,240,234,0.18)] rounded px-2.5 py-1 text-[9px] font-semibold text-[rgba(245,240,234,0.7)]">
              {m}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
