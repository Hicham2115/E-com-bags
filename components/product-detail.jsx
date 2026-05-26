"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { BagSVG } from "@/components/bag-svg";
import { useCart } from "@/components/cart-context";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { swatchBg } from "@/lib/products";

const reviews = [
  {
    avatar: "L", bg: "#E8D5B0", name: "Léa M.", location: "Paris", verified: true, date: "3 weeks ago",
    stars: 5, fit: ["5'7\" / 170cm", "Daily wear", "Owned 6 months"],
    title: "Honestly, it's the only bag in my closet now.",
    body: "I bought the Atlas in camel back in September and it hasn't left my shoulder since. The leather has softened into something that feels like it's always belonged to me.",
    color: "camel", product: "Atlas Tote", helpful: 47, active: true,
    reply: { from: "Yasmina", role: "Founder, Maison Oria", text: "Léa — thank you for this. Stop by the atelier next time you're in Marrakech, coffee on us. — Y" },
  },
  {
    avatar: "H", bg: "#c9b89a", name: "Hafsa K.", location: "Casablanca", verified: true, date: "1 month ago",
    stars: 5, fit: ["5'4\" / 162cm", "Work + travel", "Owned 4 months"],
    title: "Worth every dirham. I've stopped looking at other brands.",
    body: "I've carried Hermès. I've carried Chanel. This is the bag I reach for every morning. The construction is unreal for the price — hand-stitched seams, the brass feels heavy in the right way.",
    color: "cocoa", product: "Atlas Tote", helpful: 32,
  },
  {
    avatar: "C", bg: "#d4c4a8", name: "Camille R.", location: "Lyon", verified: true, date: "6 weeks ago",
    stars: 5, fit: ["5'9\" / 175cm", "Evening out", "Owned 2 months"],
    title: "The interior pouch is the whole game.",
    body: "Tiny detail that sold me — the removable suede pouch inside. I take it on its own to dinner. Two bags for the price of one and both are beautiful.",
    color: "black", product: "Lune Crossbody", helpful: 28,
  },
  {
    avatar: "S", bg: "#e3d4be", name: "Sara D.", location: "Rabat", verified: true, date: "2 months ago",
    stars: 4, fit: ["5'5\" / 165cm", "Daily commute", "Owned 3 months"],
    title: "Beautiful — but read the dimensions twice.",
    body: "The bag itself is gorgeous, the leather is everything they say it is, and the brass clasp is satisfying to use. Honest note: I thought it would fit my 14\" laptop and it doesn't — it's a 13\" max. Customer service offered me an exchange within minutes.",
    color: "ivory", product: "Kasbah Tote", helpful: 19,
  },
  {
    avatar: "A", bg: "#d8c3a3", name: "Amira J.", location: "Tangier", verified: true, date: "3 months ago",
    stars: 5, fit: ["5'2\" / 158cm", "Wedding gift", "Owned 5 months"],
    title: "I cried unboxing it. That's the review.",
    body: "My husband bought me the Atlas for our anniversary. The dust bag has a handwritten note from the artisan. Who does that anymore. The leather smells like my grandmother's library in Fès.",
    color: "ruby", product: "Atlas Tote", helpful: 64,
  },
];

function ProductImage({ src, color, alt = false }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={color}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    );
  }
  return <BagSVG color={color} alt={alt} />;
}

export function ProductDetail({ product, suggested }) {
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState(product.primary);
  const [activeThumb, setActiveThumb] = useState(0);
  const [qty, setQty] = useState(1);
  const [helpfuls, setHelpfuls] = useState(new Set([0]));
  const [activeFilter, setActiveFilter] = useState(0);

  const thumbImages = product.images.length > 0
    ? [product.images[0], product.images[1] ?? product.images[0], product.images[2] ?? product.images[0], product.images[3] ?? product.images[0]]
    : null;
  const thumbColors = [product.primary, product.colors[1] ?? product.primary, product.colors[2] ?? product.primary, product.primary];
  const activeImage = thumbImages ? thumbImages[activeThumb] : undefined;

  const badgeStyle =
    product.badge === "SALE"
      ? "bg-red-700 text-white border-0"
      : product.badge === "BESTSELLER"
      ? "bg-[var(--gold)] text-[var(--oria-text)] border-0"
      : "bg-[var(--oria-text)] text-[var(--text-light)] border-0";

  return (
    <>
      <Navbar />

      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "120px clamp(20px,4vw,60px) 0" }}>
        <div className="flex items-center gap-3 pt-5 mb-0 text-[11px] tracking-[0.22em] uppercase" style={{ color: "var(--oria-muted)" }}>
          <Link href="/" className="hover:text-[var(--gold-deep)] transition-colors">Home</Link>
          <span style={{ opacity: 0.5 }}>›</span>
          <Link href="/products" className="hover:text-[var(--gold-deep)] transition-colors">Collections</Link>
          <span style={{ opacity: 0.5 }}>›</span>
          <strong style={{ color: "var(--oria-text)", fontWeight: 500 }}>{product.name}</strong>
        </div>

        <div className="grid gap-20 py-10 pb-30" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
          {/* Image gallery */}
          <div className="grid gap-5" style={{ gridTemplateColumns: "80px 1fr", alignItems: "start" }}>
            <div className="flex flex-col gap-2.5">
              {(thumbImages ?? thumbColors).map((src, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveThumb(i);
                    if (!thumbImages) setSelectedColor(thumbColors[i]);
                  }}
                  className="relative rounded-sm overflow-hidden transition-opacity duration-300"
                  style={{
                    width: "80px", height: "100px",
                    opacity: activeThumb === i ? 1 : 0.55,
                    boxShadow: activeThumb === i ? "0 0 0 1px var(--oria-text)" : undefined,
                  }}
                >
                  {thumbImages ? (
                    <Image src={src} alt={`View ${i + 1}`} fill className="object-cover" sizes="80px" />
                  ) : (
                    <BagSVG color={src} />
                  )}
                </button>
              ))}
            </div>

            <div className="relative rounded-sm overflow-hidden bg-[var(--ivory-2)]" style={{ aspectRatio: "4/5" }}>
              {product.badge && (
                <Badge className={`absolute top-[14px] left-[14px] z-10 text-[10px] tracking-[0.2em] uppercase font-medium rounded-full px-3 py-1.5 ${badgeStyle}`}>
                  {product.badge}
                </Badge>
              )}
              <ProductImage src={activeImage} color={selectedColor} />
              <button
                className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3.5 py-2.5 rounded-full text-[10px] tracking-[0.22em] uppercase font-medium"
                style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(10px)" }}
              >
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M3 12a9 4 0 1 0 18 0M3 12a9 4 0 1 1 18 0M6 9l3 3-3 3" />
                </svg>
                View in 360°
              </button>
            </div>
          </div>

          {/* Product info */}
          <div style={{ position: "sticky", top: "100px", alignSelf: "start" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--oria-muted)" }}>
              — N° 01 / The Atlas Edit
            </div>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(36px,4vw,56px)", lineHeight: 1.02, margin: "16px 0 14px" }}>
              {product.name.replace(/(\S+)$/, "")}
              <em style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>{product.name.split(" ").pop()}</em>
            </h1>

            <div className="flex items-center gap-3 mb-6 text-[12px]" style={{ color: "var(--oria-muted)" }}>
              <span style={{ color: "var(--gold)", letterSpacing: "2px" }}>★★★★★</span>
              <span>4.9 · <a href="#reviews" className="border-b border-[var(--line)] pb-px">128 reviews</a></span>
            </div>

            <div className="flex items-baseline gap-3.5 mb-6">
              <div style={{ fontFamily: "var(--serif)", fontSize: "32px", color: "var(--gold-deep)", fontWeight: 500 }}>
                {product.was && <s className="text-xl mr-1.5 font-normal" style={{ color: "var(--oria-muted)" }}>€ {product.was.toLocaleString()}</s>}
                € {product.price.toLocaleString()}
              </div>
              {product.was && (
                <Badge className="text-[11px] tracking-[0.22em] uppercase border-0 bg-transparent text-red-700 font-medium p-0">
                  Save {Math.round(100 - product.price / product.was * 100)}%
                </Badge>
              )}
            </div>

            <p className="mb-8 leading-[1.7]" style={{ color: "var(--charcoal)", maxWidth: "460px" }}>
              A structured everyday tote in vegetable-tanned Italian leather. Hand-stitched seams, brass hardware cast in Marrakech, and a removable suede pouch that lives inside.
            </p>

            {/* Color picker */}
            <div className="mb-7">
              <div className="flex justify-between mb-3 text-[11px] tracking-[0.25em] uppercase" style={{ color: "var(--oria-muted)" }}>
                <span>Color</span>
                <strong style={{ color: "var(--oria-text)", fontWeight: 500 }}>{selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}</strong>
              </div>
              <div className="flex gap-2.5">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    title={c}
                    onClick={() => setSelectedColor(c)}
                    className="w-9 h-9 rounded-full border border-[var(--line)] relative flex items-center justify-center hover:scale-[1.08] transition-transform"
                    style={{
                      background: swatchBg[c],
                      boxShadow: selectedColor === c ? "0 0 0 2px var(--ivory), 0 0 0 3px var(--oria-text)" : undefined,
                    }}
                  >
                    {selectedColor === c && (
                      <span className="text-white text-sm font-medium" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <div className="mb-3 text-[11px] tracking-[0.25em] uppercase" style={{ color: "var(--oria-muted)" }}>Quantity</div>
              <div className="inline-flex items-center border border-[var(--line)] rounded-full p-1.5">
                <button
                  className="w-9 h-9 rounded-full flex items-center justify-center text-lg hover:bg-[var(--ivory-2)] transition-colors"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span className="w-9 text-center text-sm font-medium">{qty}</span>
                <button
                  className="w-9 h-9 rounded-full flex items-center justify-center text-lg hover:bg-[var(--ivory-2)] transition-colors"
                  onClick={() => setQty((q) => Math.min(9, q + 1))}
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 mb-4">
              <Button
                className="w-full justify-center py-5 text-[12px] tracking-[0.22em] uppercase font-medium rounded-full bg-[var(--oria-text)] text-[var(--text-light)] hover:bg-[var(--gold)] hover:text-[var(--oria-text)] transition-all duration-500 border-0"
                onClick={() => addItem(product, qty, selectedColor)}
              >
                Add to Bag — € {(product.price * qty).toLocaleString()} →
              </Button>
              <Button
                variant="outline"
                className="w-full justify-center py-5 text-[12px] tracking-[0.22em] uppercase font-medium rounded-full border-[var(--oria-text)] hover:bg-[var(--oria-text)] hover:text-[var(--text-light)] transition-all duration-500"
              >
                Add to Wishlist ♡
              </Button>
            </div>

            <div className="flex items-center gap-2.5 text-[12px] mt-4" style={{ color: "var(--oria-muted)" }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="var(--gold-deep)" strokeWidth="1.4">
                <path d="M3 16V8h12v8M15 12h4l2 4v0H3" />
                <circle cx="7" cy="18" r="2" />
                <circle cx="18" cy="18" r="2" />
              </svg>
              Complimentary delivery across Morocco · 2-day shipping worldwide
            </div>

            {/* Accordion */}
            <Accordion defaultValue={["details"]} className="mt-9">
              <AccordionItem value="details" className="border-t border-[var(--line)]">
                <AccordionTrigger className="py-5 text-[12px] tracking-[0.22em] uppercase font-medium hover:no-underline">
                  Product Details
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-[1.7]" style={{ color: "var(--charcoal)" }}>
                  <ul className="space-y-1">
                    {["Vegetable-tanned full-grain Italian leather", "Hand-stitched waxed cotton thread", "Solid brass hardware, cast in Marrakech", "Removable suede zip pouch", "Magnetic top closure", "Dimensions: 34 × 28 × 14 cm", "Strap drop: 22 cm"].map((d) => (
                      <li key={d} className="pl-4 relative before:content-['·'] before:absolute before:left-1.5 before:text-[var(--gold)]">{d}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="care" className="border-[var(--line)]">
                <AccordionTrigger className="py-5 text-[12px] tracking-[0.22em] uppercase font-medium hover:no-underline">
                  Care Instructions
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-[1.7]" style={{ color: "var(--charcoal)", maxWidth: "460px" }}>
                  Wipe with a dry, soft cloth. Condition every six months with our beeswax balm. Store in the included dust bag, away from direct sunlight. Patina will develop with wear — this is the bag becoming yours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-[var(--line)]">
                <AccordionTrigger className="py-5 text-[12px] tracking-[0.22em] uppercase font-medium hover:no-underline">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-[1.7]" style={{ color: "var(--charcoal)", maxWidth: "460px" }}>
                  Free express shipping across Morocco (2–3 business days). Worldwide delivery in 2–5 business days via DHL. Returns accepted within 30 days, no questions. Lifetime repairs — send it back to the atelier whenever it needs love.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-6 py-15" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          {[
            { icon: "M5 11h14v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM8 11V7a4 4 0 0 1 8 0v4", title: "Secure Checkout", desc: "SSL encrypted · Stripe & PayPal" },
            { icon: "M3 16V8h12v8M15 12h4l2 4v0H3M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", title: "Free Delivery", desc: "Across Morocco · 2-day worldwide" },
            { icon: "M12 3 4 9v6c0 4 4 6 8 6s8-2 8-6V9zM9 12l2 2 4-4", title: "Premium Leather", desc: "Veg-tanned · Lifetime repairs" },
          ].map((f) => (
            <div key={f.title} className="flex items-center gap-[18px] px-2">
              <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center border border-[var(--line)]">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--gold-deep)" strokeWidth="1.4">
                  <path d={f.icon} />
                </svg>
              </div>
              <div>
                <h4 className="text-[11px] tracking-[0.25em] uppercase font-medium mb-1">{f.title}</h4>
                <p className="text-[12px]" style={{ color: "var(--oria-muted)" }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested products */}
        {suggested.length > 0 && (
          <section className="py-[clamp(70px,8vw,110px)]" style={{ borderTop: "1px solid var(--line)" }}>
            <div className="flex justify-between items-end gap-10 mb-16 flex-wrap">
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(44px,5.5vw,84px)", lineHeight: 0.98 }}>
                You might <em style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>also love</em>
              </h2>
              <div style={{ fontSize: "12px", letterSpacing: "0.22em", color: "var(--oria-muted)", textTransform: "uppercase" }}>
                — Curated for you
              </div>
            </div>
            <div className="grid grid-cols-4 gap-7">
              {suggested.slice(0, 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* Reviews */}
        <section id="reviews" className="py-[clamp(70px,8vw,100px)]" style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: "60px" }}>
          {/* Rating summary */}
          <div style={{ position: "sticky", top: "100px", alignSelf: "start" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--oria-muted)", marginBottom: "16px" }}>— Customer Reviews</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "64px", fontWeight: 400, lineHeight: 1, marginBottom: "6px" }}>4.9</div>
            <div style={{ color: "var(--gold)", fontSize: "18px", marginBottom: "12px", letterSpacing: "2px" }}>★★★★★</div>
            <div style={{ fontSize: "12px", color: "var(--oria-muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
              128 verified · 96% recommend
            </div>

            {[{ n: "5★", p: "92%", c: 117 }, { n: "4★", p: "6%", c: 8 }, { n: "3★", p: "1.5%", c: 2 }, { n: "2★", p: "0%", c: 0 }, { n: "1★", p: "1%", c: 1 }].map((b) => (
              <div key={b.n} className="flex items-center gap-3 mb-2 text-[12px]">
                <span className="w-9" style={{ color: "var(--oria-muted)" }}>{b.n}</span>
                <div className="flex-1 h-1 rounded-sm overflow-hidden bg-[var(--line)]">
                  <div className="h-full bg-[var(--gold)]" style={{ width: b.p }} />
                </div>
                <span className="w-10 text-right" style={{ color: "var(--oria-muted)" }}>{b.c}</span>
              </div>
            ))}

            <div className="mt-7 pt-6 text-[12px] leading-[1.7]" style={{ borderTop: "1px solid var(--line)", color: "var(--oria-muted)" }}>
              {[["Quality", "4.9"], ["Value", "4.6"], ["Daily Wear", "4.8"]].map(([label, score]) => (
                <div key={label} className="flex justify-between mb-2">
                  <span>{label}</span>
                  <span style={{ color: "var(--gold-deep)" }}>★ {score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review list */}
          <div>
            <div className="flex flex-wrap gap-2 mb-7">
              {["All · 128", "★★★★★ · 117", "★★★★☆ · 8", "With Photos · 42", "Most Helpful", "Newest"].map((f, i) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(i)}
                  className="px-4 py-2 rounded-full border text-[11px] tracking-[0.18em] uppercase font-medium transition-all duration-300"
                  style={{
                    borderColor: activeFilter === i ? "var(--oria-text)" : "var(--line)",
                    background: activeFilter === i ? "var(--oria-text)" : "transparent",
                    color: activeFilter === i ? "var(--text-light)" : "var(--oria-muted)",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {reviews.map((r, i) => (
              <article key={i} className="py-8 border-b border-[var(--line)] grid gap-6" style={{ gridTemplateColumns: "56px 1fr" }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative"
                  style={{ background: r.bg, fontFamily: "var(--serif)", fontSize: "18px", fontWeight: 500, color: "var(--oria-text)" }}
                >
                  {r.avatar}
                  <span className="absolute inset-[-3px] border border-[var(--line)] rounded-full" />
                </div>

                <div>
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2.5">
                    <div>
                      <div className="text-sm font-medium tracking-[0.02em]">{r.name}</div>
                      <div className="flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase mt-0.5" style={{ color: "var(--gold-deep)" }}>
                        ✓ Verified Buyer · {r.location}
                      </div>
                    </div>
                    <div className="text-[11px]" style={{ color: "var(--oria-muted)" }}>{r.date}</div>
                  </div>

                  <div className="flex items-center gap-3 mb-3.5 flex-wrap">
                    <span style={{ color: "var(--gold)", fontSize: "13px", letterSpacing: "1.5px" }}>
                      {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
                    </span>
                    <div className="flex flex-wrap gap-3.5 text-[11px]" style={{ color: "var(--oria-muted)" }}>
                      {r.fit.map((f, j) => (
                        <span key={f} className="flex items-center gap-3.5">
                          {j > 0 && <span className="w-[3px] h-[3px] rounded-full bg-[var(--gold)]" />}
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h4 style={{ fontFamily: "var(--serif)", fontSize: "22px", lineHeight: 1.25, marginBottom: "10px", fontWeight: 500 }}>{r.title}</h4>
                  <p className="text-sm leading-[1.75] max-w-[640px]" style={{ color: "var(--charcoal)" }}>{r.body}</p>

                  <div className="inline-flex items-center gap-2 mt-3.5 px-3.5 py-2 rounded-full text-[11px] tracking-[0.15em] uppercase" style={{ background: "var(--ivory-2)", color: "var(--oria-muted)" }}>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: swatchBg[r.color] }} />
                    {r.product} · <strong style={{ color: "var(--oria-text)", fontWeight: 500 }}>{r.color.charAt(0).toUpperCase() + r.color.slice(1)}</strong>
                  </div>

                  <div className="flex items-center gap-2 mt-4 text-[11px] tracking-[0.15em] uppercase" style={{ color: "var(--oria-muted)" }}>
                    <button
                      className="inline-flex items-center gap-2 px-3.5 py-2 border rounded-full text-[11px] transition-all duration-300 hover:border-[var(--oria-text)]"
                      style={{
                        borderColor: helpfuls.has(i) ? "var(--oria-text)" : "var(--line)",
                        background: helpfuls.has(i) ? "var(--oria-text)" : "transparent",
                        color: helpfuls.has(i) ? "var(--text-light)" : "var(--oria-text)",
                      }}
                      onClick={() => setHelpfuls((prev) => {
                        const next = new Set(prev);
                        next.has(i) ? next.delete(i) : next.add(i);
                        return next;
                      })}
                    >
                      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M14 9V5a3 3 0 0 0-6 0v4H5l1 12h12l1-12h-5z" />
                      </svg>
                      Helpful · {r.helpful + (helpfuls.has(i) ? 1 : 0)}
                    </button>
                    <button className="px-3.5 py-2 border border-[var(--line)] rounded-full hover:border-[var(--oria-text)] transition-all">Reply</button>
                    <a href="#" className="ml-auto text-[10px] hover:text-[var(--oria-text)] transition-colors" style={{ color: "var(--oria-muted)" }}>Report</a>
                  </div>

                  {r.reply && (
                    <div className="mt-5 p-[18px_22px] rounded-r-sm" style={{ background: "var(--ivory-2)", borderLeft: "2px solid var(--gold)" }}>
                      <div className="flex items-center gap-2.5 mb-2.5 text-[11px] tracking-[0.2em] uppercase font-medium">
                        <span className="w-[22px] h-[22px] rounded-full bg-[var(--oria-text)] text-[var(--gold)] flex items-center justify-center text-[11px]" style={{ fontFamily: "var(--serif)" }}>O</span>
                        <span style={{ color: "var(--oria-text)" }}>{r.reply.from}</span>
                        <span style={{ color: "var(--oria-muted)" }}>· {r.reply.role}</span>
                      </div>
                      <p className="text-sm leading-[1.7]" style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--charcoal)" }}>{r.reply.text}</p>
                    </div>
                  )}
                </div>
              </article>
            ))}

            <div className="flex items-center justify-between flex-wrap gap-4 mt-8 p-6 border border-dashed border-[var(--line)] rounded-sm">
              <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "18px", color: "var(--charcoal)" }}>
                Carrying yours? We'd love to hear about it.
              </p>
              <button className="inline-flex items-center gap-2.5 text-[12px] tracking-[0.22em] uppercase font-medium px-8 py-[18px] rounded-full border border-[var(--oria-text)] hover:bg-[var(--oria-text)] hover:text-[var(--text-light)] transition-all duration-500">
                Write a Review →
              </button>
            </div>

            <div className="text-center pt-8">
              <a href="#" className="text-[11px] tracking-[0.25em] uppercase pb-1 border-b border-[var(--gold)]" style={{ color: "var(--gold-deep)" }}>
                Load 123 More Reviews
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
