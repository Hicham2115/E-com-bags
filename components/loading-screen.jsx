"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function LoadingScreen() {
  const screenRef = useRef(null);
  const ornamentRef = useRef(null);
  const maisonRef = useRef(null);
  const oriaRef = useRef(null);
  const dividerRef = useRef(null);
  const taglineRef = useRef(null);
  const progressBarRef = useRef(null);
  const [visible, setVisible] = useState(() =>
    typeof window === "undefined"
      ? true
      : !sessionStorage.getItem("loading-seen")
  );

  useEffect(() => {
    if (!visible) return;

    const screen = screenRef.current;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial states
    gsap.set([maisonRef.current, oriaRef.current, taglineRef.current], {
      yPercent: 110,
      opacity: 0,
    });
    gsap.set(ornamentRef.current, { opacity: 0, scale: 0.7 });
    gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: "left center" });

    tl
      // Ornament fades in with slight scale
      .to(ornamentRef.current, { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" })
      // Divider line expands
      .to(dividerRef.current, { scaleX: 1, duration: 0.7, ease: "power2.inOut" }, "-=0.3")
      // "MAISON" rises from clip
      .to(maisonRef.current, { yPercent: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.3")
      // "ORIA" follows slightly behind
      .to(oriaRef.current, { yPercent: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.6")
      // Tagline
      .to(taglineRef.current, { yPercent: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.4")
      // Progress bar
      .to(progressBarRef.current, { scaleX: 1, duration: 1.4, ease: "power1.inOut" }, "-=0.2")
      // Hold briefly, then exit: entire screen slides up
      .to(screen, {
        yPercent: -100,
        duration: 1.1,
        ease: "power3.inOut",
        delay: 0.25,
        onComplete: () => {
          sessionStorage.setItem("loading-seen", "1");
          setVisible(false);
        },
      });

    return () => tl.kill();
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={screenRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#0e0c0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Ornamental diamond */}
      <div ref={ornamentRef} style={{ marginBottom: "2rem" }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 2 L30 16 L16 30 L2 16 Z"
            stroke="#C9A96E"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M16 7 L25 16 L16 25 L7 16 Z"
            stroke="#C9A96E"
            strokeWidth="0.6"
            fill="none"
            opacity="0.5"
          />
          <circle cx="16" cy="16" r="1.5" fill="#C9A96E" />
        </svg>
      </div>

      {/* Divider */}
      <div
        ref={dividerRef}
        style={{
          width: "5rem",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
          marginBottom: "2rem",
        }}
      />

      {/* MAISON */}
      <div style={{ overflow: "hidden", lineHeight: 1 }}>
        <p
          ref={maisonRef}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 300,
            letterSpacing: "0.35em",
            color: "#FAF7F4",
            margin: 0,
            lineHeight: 1,
          }}
        >
          MAISON
        </p>
      </div>

      {/* ORIA */}
      <div style={{ overflow: "hidden", lineHeight: 1, marginTop: "0.2rem" }}>
        <p
          ref={oriaRef}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            letterSpacing: "0.5em",
            background: "linear-gradient(135deg, #C9A96E 0%, #e8c87a 50%, #a8884d 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: 0,
            lineHeight: 1,
          }}
        >
          ORIA
        </p>
      </div>

      {/* Tagline */}
      <div style={{ overflow: "hidden", marginTop: "1.75rem" }}>
        <p
          ref={taglineRef}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(0.65rem, 2vw, 0.8rem)",
            fontWeight: 300,
            letterSpacing: "0.3em",
            color: "#7a716a",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          Handcrafted Leather &nbsp;·&nbsp; Timeless Elegance
        </p>
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          backgroundColor: "#1c1916",
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #a8884d, #C9A96E, #e8c87a)",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}
