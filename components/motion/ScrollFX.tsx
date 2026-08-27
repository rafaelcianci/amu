"use client";

import { useEffect } from "react";

/**
 * AMU parallax + reveal helper — ported from design_references/parallax.js.
 * Scans the DOM (server-rendered markup keeps the original data-* attributes)
 * for three sanctioned uses:
 *   data-parallax="<speed>"     translate3d on scroll (negative = reverse)
 *   data-parallax-bg="<speed>"  same maths applied to background-position
 *   data-reveal / data-reveal="<ms>"  fade + rise once, IntersectionObserver
 * Honours prefers-reduced-motion exactly as the reference implementation.
 * Remounted (via a `key={pathname}` in the layout) on every route change so
 * it re-scans freshly rendered page content.
 */
export function ScrollFX() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveals = () => {
      const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
      if (!items.length) return;
      if (reduce) {
        items.forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
        return;
      }
      items.forEach((el) => {
        if (el.dataset.fxInit) return;
        el.dataset.fxInit = "1";
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        el.style.transition =
          "opacity 640ms cubic-bezier(.16,1,.3,1), transform 640ms cubic-bezier(.16,1,.3,1)";
        el.style.transitionDelay = (parseFloat(el.dataset.reveal || "0") || 0) + "ms";
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            io.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
      );
      items.forEach((el) => io.observe(el));
      return () => io.disconnect();
    };

    const parallax = () => {
      const moved = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
      const bgs = [...document.querySelectorAll<HTMLElement>("[data-parallax-bg]")];
      if (reduce || (!moved.length && !bgs.length)) return () => {};
      let raf = 0;
      const frame = () => {
        raf = 0;
        const vh = window.innerHeight;
        for (const el of moved) {
          const r = el.getBoundingClientRect();
          if (r.bottom < -vh || r.top > vh * 2) continue;
          const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
          el.style.transform =
            "translate3d(0," + (p * (parseFloat(el.dataset.parallax || "0.2") || 0.2) * -100).toFixed(2) + "px,0)";
        }
        for (const el of bgs) {
          const r = el.getBoundingClientRect();
          if (r.bottom < -vh || r.top > vh * 2) continue;
          const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
          el.style.backgroundPosition =
            "50% calc(50% + " + (p * (parseFloat(el.dataset.parallaxBg || "0.3") || 0.3) * -100).toFixed(2) + "px)";
        }
      };
      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(frame);
      };
      addEventListener("scroll", onScroll, { passive: true });
      addEventListener("resize", onScroll);
      frame();
      return () => {
        removeEventListener("scroll", onScroll);
        removeEventListener("resize", onScroll);
      };
    };

    const cleanupReveal = reveals();
    const cleanupParallax = parallax();

    // Route content can stream in slightly after mount (fonts, images
    // affecting layout); re-scan a few times, mirroring the original.
    let n = 0;
    const t = setInterval(() => {
      reveals();
      if (++n > 8) clearInterval(t);
    }, 400);

    return () => {
      clearInterval(t);
      cleanupReveal?.();
      cleanupParallax?.();
    };
  }, []);

  return null;
}
