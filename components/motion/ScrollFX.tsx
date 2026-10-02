"use client";

import { useEffect } from "react";

const REVEAL_EASE = "cubic-bezier(.16,1,.3,1)";

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
 *
 * Elements already on screen keep the CSS entrance from globals.css; only the
 * ones that start off screen are hidden here and revealed on scroll. All DOM
 * reads happen inside IntersectionObserver callbacks or at the start of a
 * rAF frame, before any style writes, so nothing forces a synchronous layout.
 */
export function ScrollFX() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.style.transition = `opacity 640ms ${REVEAL_EASE}, transform 640ms ${REVEAL_EASE}`;
          el.style.transitionDelay = (parseFloat(el.dataset.reveal || "0") || 0) + "ms";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          reveal.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    const initial = new IntersectionObserver((entries) => {
      for (const e of entries) {
        const el = e.target as HTMLElement;
        initial.unobserve(el);
        if (e.isIntersecting) continue;
        el.style.animation = "none";
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        reveal.observe(el);
      }
    });

    const scanReveals = () => {
      if (reduce) return;
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-fx-init])").forEach((el) => {
        el.dataset.fxInit = "1";
        initial.observe(el);
      });
    };

    const parallax = () => {
      const items = [
        ...[...document.querySelectorAll<HTMLElement>("[data-parallax]")].map((el) => ({ el, bg: false })),
        ...[...document.querySelectorAll<HTMLElement>("[data-parallax-bg]")].map((el) => ({ el, bg: true })),
      ];
      if (reduce || !items.length) return () => {};
      let raf = 0;
      const frame = () => {
        raf = 0;
        const vh = window.innerHeight;
        const rects = items.map(({ el }) => el.getBoundingClientRect());
        items.forEach(({ el, bg }, i) => {
          const r = rects[i];
          if (r.bottom < -vh || r.top > vh * 2) return;
          const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
          if (bg) {
            el.style.backgroundPosition =
              "50% calc(50% + " + (p * (parseFloat(el.dataset.parallaxBg || "0.3") || 0.3) * -100).toFixed(2) + "px)";
          } else {
            el.style.transform =
              "translate3d(0," + (p * (parseFloat(el.dataset.parallax || "0.2") || 0.2) * -100).toFixed(2) + "px,0)";
          }
        });
      };
      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(frame);
      };
      addEventListener("scroll", onScroll, { passive: true });
      addEventListener("resize", onScroll);
      onScroll();
      return () => {
        cancelAnimationFrame(raf);
        removeEventListener("scroll", onScroll);
        removeEventListener("resize", onScroll);
      };
    };

    scanReveals();
    const cleanupParallax = parallax();

    // Route content can stream in slightly after mount; pick up late
    // [data-reveal] nodes a few times, mirroring the original.
    let n = 0;
    const t = setInterval(() => {
      scanReveals();
      if (++n > 8) clearInterval(t);
    }, 400);

    return () => {
      clearInterval(t);
      initial.disconnect();
      reveal.disconnect();
      cleanupParallax();
    };
  }, []);

  return null;
}
