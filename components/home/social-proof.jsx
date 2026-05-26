"use client";

import { useReveal } from "@/hooks/use-reveal";
import { swatchBg } from "@/lib/products";

const reviews = [
  {
    avatar: "L", avClass: "av-1", bg: "#E8D5B0",
    name: "Léa M.", location: "Paris", verified: true, date: "3 weeks ago",
    stars: 5, fit: ["5'7\" / 170cm", "Daily wear", "Owned 6 months"],
    title: "Honestly, it's the only bag in my closet now.",
    body: "I bought the Atlas in camel back in September and it hasn't left my shoulder since. The leather has softened into something that feels like it's always belonged to me — there's a small crease on the front from where it leans against my hip and I love it. The brass is starting to patina. I keep finding excuses to use it.",
    color: "camel", product: "Atlas Tote",
    helpful: 47,
    reply: { from: "Yasmina", role: "Founder, Maison Oria", text: "Léa — thank you for this. The clasp loosens after the first ten days; mine did the same. If you're ever near one of our stockists, stop in — coffee on us. — Y" },
    feature: true,
  },
  {
    avatar: "H", avClass: "av-2", bg: "#c9b89a",
    name: "Hafsa K.", location: "London", verified: true, date: "1 mo ago",
    stars: 5, fit: ["Work + travel", "4 months"],
    title: "Worth every penny.",
    body: "I've carried Hermès. I've carried Chanel. This is the one I reach for every morning. The brass feels heavy in the right way.",
    color: "cocoa", product: "Atlas Tote",
    helpful: 32,
  },
  {
    avatar: "A", avClass: "av-3", bg: "#d4c4a8",
    name: "Amira J.", location: "New York", verified: true, date: "3 mo ago",
    stars: 5, fit: ["Wedding gift", "5 months"],
    title: "I cried unboxing it. That's the review.",
    body: "My husband bought it for our anniversary. The dust bag came with a handwritten note from the artisan. Who does that anymore?",
    color: "ruby", product: "Atlas Tote",
    helpful: 64,
  },
];

export function SocialProof() {
  const { ref, visible } = useReveal();
  const { ref: ref2, visible: v2 } = useReveal();

  return (
    <section className="bg-oria-text text-text-light py-[clamp(80px,10vw,140px)] relative overflow-hidden">
      <div className="mx-auto max-w-360 px-[clamp(20px,4vw,60px)] grid grid-cols-[360px_1fr] gap-20 items-start">
        <div
          ref={ref}
          className={`reveal sticky top-25 ${visible ? "is-visible" : ""}`}
        >
          <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">— Customer Reviews</div>
          <h2 className="font-serif text-[clamp(40px,4.8vw,64px)] font-normal leading-[1.02] tracking-[-0.01em] mb-8">
            Two thousand women.
            <br />One <em className="italic text-gold">thing in common.</em>
          </h2>

          <div className="flex items-baseline gap-3 mb-2">
            <strong className="font-serif text-[72px] leading-none font-normal">4.9</strong>
            <em className="italic text-gold text-[30px] font-serif">/ 5</em>
          </div>
          <div className="text-gold tracking-[2px] text-sm mb-1.5">★★★★★</div>
          <div className="text-[11px] tracking-[0.25em] uppercase text-[rgba(245,240,234,0.55)] mb-6">
            From 2,147 verified buyers · 96% recommend
          </div>

          {[
            { lab: "5★", pct: "92%", n: "1,975" },
            { lab: "4★", pct: "6%", n: "129" },
            { lab: "3★", pct: "1.5%", n: "32" },
            { lab: "2★", pct: "0.4%", n: "8" },
            { lab: "1★", pct: "0.1%", n: "3" },
          ].map((bar) => (
            <div key={bar.lab} className="flex items-center gap-3 mb-2 text-[11px] text-[rgba(245,240,234,0.7)]">
              <span className="w-7">{bar.lab}</span>
              <div className="flex-1 h-[3px] rounded-xs overflow-hidden bg-[rgba(245,240,234,0.1)]">
                <div className="h-full rounded-xs bg-gold" style={{ width: bar.pct }} />
              </div>
              <span className="w-10 text-right text-[rgba(245,240,234,0.4)]">{bar.n}</span>
            </div>
          ))}

          <div className="flex flex-wrap gap-4 mt-8 pt-7 border-t border-[rgba(245,240,234,0.1)] text-[10px] tracking-[0.22em] uppercase text-[rgba(245,240,234,0.5)]">
            {["Featured · Vogue", "Editor's Pick · Elle", "The Cut"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="text-gold">✦</span>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={ref2}
          className={`reveal-stagger grid grid-cols-2 gap-6 ${v2 ? "is-visible" : ""}`}
        >
          {reviews.map((r, i) => (
            <article
              key={i}
              className={`flex flex-col p-7 rounded-md border border-[rgba(245,240,234,0.08)] bg-[rgba(245,240,234,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(201,169,110,0.3)] ${r.feature ? "col-span-2" : ""}`}
            >
              <div className="flex items-center gap-3.5 mb-[18px]">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-serif text-[17px] text-oria-text"
                  style={{ background: r.bg }}
                >
                  {r.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-text-light">{r.name}</div>
                  <div className="text-[10px] tracking-[0.18em] uppercase text-gold">
                    Verified Buyer · {r.location}
                  </div>
                </div>
                <div className="text-[10px] text-[rgba(245,240,234,0.4)] tracking-[0.06em] whitespace-nowrap">{r.date}</div>
              </div>

              <div className="text-gold text-[13px] tracking-[1.5px] mb-3">
                {"★".repeat(r.stars)}
              </div>

              {r.fit && (
                <div className="flex flex-wrap gap-3 mb-4 text-[10px] text-[rgba(245,240,234,0.45)] tracking-[0.06em]">
                  {r.fit.map((f, j) => (
                    <span key={f} className="flex items-center gap-3">
                      {j > 0 && <span className="w-[3px] h-[3px] rounded-full bg-gold" />}
                      {f}
                    </span>
                  ))}
                </div>
              )}

              <h4 className={`font-serif leading-[1.25] mb-2.5 font-medium text-text-light ${r.feature ? "text-[28px]" : "text-[22px]"}`}>
                {r.title}
              </h4>
              <p className="flex-1 mb-4 leading-[1.7] text-sm text-[rgba(245,240,234,0.75)]">{r.body}</p>

              {r.color && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(245,240,234,0.12)] mb-3.5 w-fit text-[10px] tracking-[0.15em] uppercase text-[rgba(245,240,234,0.6)]">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: swatchBg[r.color] }} />
                  {r.product} · <strong className="text-text-light font-medium">{r.color.charAt(0).toUpperCase() + r.color.slice(1)}</strong>
                </div>
              )}

              <div className="flex items-center gap-4 pt-4 border-t border-[rgba(245,240,234,0.08)] text-[10px] tracking-[0.18em] uppercase text-[rgba(245,240,234,0.45)]">
                <span className="text-[rgba(245,240,234,0.7)]">♡ Helpful · {r.helpful}</span>
              </div>

              {r.reply && (
                <div className="mt-4 p-3.5 rounded-r-xs border-l-2 border-gold bg-[rgba(201,169,110,0.06)]">
                  <div className="flex items-center gap-2.5 mb-2 text-[10px] tracking-[0.2em] uppercase">
                    <span className="w-5 h-5 rounded-full bg-gold text-oria-text flex items-center justify-center text-[11px] font-serif">O</span>
                    <span className="text-text-light">{r.reply.from}</span>
                    <span className="text-[rgba(245,240,234,0.4)]">{r.reply.role}</span>
                  </div>
                  <p className="font-serif italic text-sm text-[rgba(245,240,234,0.8)] leading-[1.6]">{r.reply.text}</p>
                </div>
              )}
            </article>
          ))}

          <div className="col-span-2 flex justify-between items-center flex-wrap gap-6 pt-9 border-t border-[rgba(245,240,234,0.08)]">
            <p className="font-serif italic text-[18px] text-[rgba(245,240,234,0.6)]">
              "A bag should hold what matters. The rest is just leather."
            </p>
            <button className="inline-flex items-center gap-2.5 text-[12px] tracking-[0.22em] uppercase font-medium px-8 py-[18px] rounded-full border border-[rgba(245,240,234,0.35)] text-text-light transition-all duration-500 hover:bg-gold hover:border-gold hover:text-oria-text">
              Read All 2,147 Reviews →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
