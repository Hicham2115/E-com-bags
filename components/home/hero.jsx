"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/ui/typing-animation";
export function Hero() {
  const imgRef = useRef(null);
  const eyebrowRef = useRef(null);
  const subtitleRef = useRef(null);
  const bottomRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Set initial hidden states
      gsap.set(
        [
          eyebrowRef.current,
          subtitleRef.current,
          bottomRef.current,
          stripRef.current,
        ],
        { opacity: 0, y: 28 },
      );
      gsap.set(imgRef.current, { opacity: 0, scale: 1.04 });

      tl.to(imgRef.current, { opacity: 0.65, scale: 1, duration: 1.4 })
        .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.8")
        // TextType starts typing at ~0.9s in via initialDelay
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6 }, "+=1.8")
        .to(bottomRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .to(stripRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2");
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0806]">
        <div ref={imgRef} className="absolute inset-0">
          <Image
            src="/assets/pexels-visualkamikaze-14039965.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-[0.65]"
          />
        </div>

        <div className="grain opacity-[0.25]" />

        <div className="relative z-2 w-full pt-[clamp(120px,14vw,180px)] px-[clamp(28px,5vw,80px)] pb-[clamp(80px,10vw,120px)]">
          <div
            ref={eyebrowRef}
            className="flex items-center gap-3 mb-[clamp(32px,4vw,52px)]"
          >
            <span className="inline-flex items-center gap-2 py-1.75 px-3.5 border border-[rgba(248,189,79,0.45)] text-[9px] tracking-[0.32em] uppercase font-medium rounded-xs text-gold">
              Best Seller
            </span>
            <span className="text-[10px] tracking-[0.32em] uppercase text-white font-normal">
              Signature Collection · SS 26
            </span>
          </div>

          <TypingAnimation
            as="div"
            duration={80}
            delay={900}
            loop={false}
            showCursor={false}
            startOnView={false}
            natural={true}
            className="font-serif text-[120px] font-medium leading-[0.88] tracking-[-0.03em] text-text-light m-0 uppercase max-w-275"
          >
            WHERE A BAG BECOMES A STORY
          </TypingAnimation>

          <h1
            ref={subtitleRef}
            className="font-serif text-[120px] font-medium leading-[0.88] tracking-[-0.03em] text-text-light m-0 uppercase max-w-275"
          >
            <span className="flex text-[20px] tracking-[0.26em] uppercase font-medium mt-4 gap-2">
              Crafted with intention. Carried with purpose.
            </span>
          </h1>

          <div
            ref={bottomRef}
            className="flex items-end justify-between flex-wrap gap-8 mt-[clamp(48px,6vw,80px)]"
          >
            <p className="font-serif italic text-[18px] text-white max-w-90 leading-normal m-0">
              "REFINED BY HAND. MODERN BY DESIGN. "
            </p>

            <Link href="/products">
              <Button className="inline-flex cursor-pointer items-center gap-3 text-[11px] tracking-[0.26em] uppercase font-medium px-9 py-5 rounded-none border border-(--gold) bg-transparent text-(--gold) hover:bg-(--gold) hover:text-(--oria-text) transition-all duration-500">
                Shop the Collection <span>→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div
        ref={stripRef}
        className="bg-oria-black border-t border-[rgba(201,169,110,0.18)] py-4 overflow-hidden"
      >
        <div
          className="flex gap-16 whitespace-nowrap text-[10px] tracking-[0.28em] uppercase font-normal"
          style={{ animation: "marqueeMove 28s linear infinite" }}
        >
          {[...Array(2)].flatMap((_, i) =>
            [
              "New Collection — Spring / Summer 2026",
              "Free Worldwide Delivery",
              "Lifetime Repairs · Full-Grain Leather",
              "Every Bag · One Artisan · Start to Finish",
            ].map((item, j) => (
              <span
                key={`${i}-${j}`}
                className="flex items-center gap-16 text-white/60"
              >
                {item}
                <span className="text-gold not-italic">✦</span>
              </span>
            )),
          )}
        </div>
      </div>
    </>
  );
}
