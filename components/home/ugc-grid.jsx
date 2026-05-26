"use client";

import { useReveal } from "@/hooks/use-reveal";

const tiles = [
  { user: "@leam.paris", likes: "218", bg: "linear-gradient(140deg, #d4b889 0%, #8C6E3F 100%)", span: "h2" },
  { user: "@hafsa.k", likes: "142", bg: "linear-gradient(150deg, #1f1c1a 0%, #3a3530 100%)" },
  { user: "@camillerl", likes: "96", bg: "linear-gradient(135deg, #E8D5B0 0%, #c9a96e 100%)" },
  { user: "@oria_atelier · behind the seams", likes: "512", bg: "linear-gradient(120deg, #7a4f2d 0%, #d4b889 60%, #E8D5B0 100%)", span: "w2" },
  { user: "@amira.j", likes: "387", bg: "linear-gradient(160deg, #a3414b 0%, #5a1e26 100%)" },
  { user: "@sage_in_fez", likes: "73", bg: "linear-gradient(135deg, #a5b29a 0%, #5d6e54 100%)" },
  { user: "@noor.tangier", likes: "204", bg: "linear-gradient(140deg, #f5ede0 0%, #cbbfa9 100%)" },
  { user: "@oria_atelier · Lune campaign", likes: "1.2k", bg: "linear-gradient(135deg, #3d5470 0%, #1f2e44 80%, #C9A96E 100%)", span: "w2h2" },
  { user: "@sara.rabat", likes: "58", bg: "linear-gradient(150deg, #c9b89a 0%, #8C6E3F 100%)" },
  { user: "@ink.studio.ma", likes: "119", bg: "linear-gradient(160deg, #2c3e57 0%, #1a1a1a 100%)" },
];

export function UGCGrid() {
  const { ref, visible } = useReveal();
  const { ref: ref2, visible: v2 } = useReveal();

  return (
    <section className="py-[clamp(80px,10vw,140px)] px-[clamp(20px,4vw,60px)] border-t border-line">
      <div className="max-w-360 mx-auto">
        <div
          ref={ref}
          className={`reveal flex justify-between items-end gap-8 mb-14 flex-wrap ${visible ? "is-visible" : ""}`}
        >
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-oria-muted mb-4">— From The Community</div>
            <h2 className="font-serif text-[clamp(40px,5vw,72px)] leading-[0.98]">
              Worn <em className="italic text-gold-deep">by you.</em>
            </h2>
          </div>
          <div className="flex flex-col gap-2 max-w-80">
            <a href="#" className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-medium text-gold-deep">
              @maisonoria · #WornByOria
            </a>
            <p className="text-sm text-oria-muted leading-[1.6]">
              Tag us in your moment. We re-share our favourites every Friday — and send a thank-you bottle of mint tea when we do.
            </p>
          </div>
        </div>

        <div
          ref={ref2}
          className={`reveal-stagger grid gap-3 ${v2 ? "is-visible" : ""}`}
          style={{ gridTemplateColumns: "repeat(6,1fr)", gridAutoRows: "120px" }}
        >
          {tiles.map((t, i) => (
            <a
              key={i}
              href="#"
              className="relative overflow-hidden rounded-xs group isolate"
              style={{
                gridColumn: t.span === "w2" || t.span === "w2h2" ? "span 2" : undefined,
                gridRow: t.span === "h2" || t.span === "w2h2" ? "span 2" : undefined,
              }}
            >
              <div
                className="absolute inset-0 transition-transform duration-1000 group-hover:scale-[1.06]"
                style={{ background: t.bg }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-1"
                style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)" }}
              />
              <div className="absolute bottom-2.5 left-3 right-3 flex justify-between items-end z-10 text-[11px] tracking-[0.15em] uppercase transition-all duration-500 text-ivory opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0">
                <span>{t.user}</span>
                <span className="flex items-center gap-1.5">♡ {t.likes}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 mt-14 flex-wrap">
          <p className="font-serif italic text-[20px] text-charcoal max-w-90">
            A bag becomes itself the moment it leaves the atelier and starts becoming yours.
          </p>
          <button className="inline-flex items-center gap-2.5 text-[12px] tracking-[0.22em] uppercase font-medium px-8 py-4.5 rounded-full border border-oria-text bg-oria-text text-text-light hover:bg-transparent hover:text-oria-text transition-all duration-500">
            Follow on Instagram ↗
          </button>
        </div>
      </div>
    </section>
  );
}
