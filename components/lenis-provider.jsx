"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Handle anchor clicks for smooth scroll-to-section
    const onClick = (e) => {
      const target = e.target.closest("a[href^='#']");
      if (!target) return;
      const id = (target.getAttribute("href") ?? "").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    };

    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return <>{children}</>;
}
