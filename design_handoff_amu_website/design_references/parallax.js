/* AMU parallax + reveal helper.
   Usage (no build step, no framework):
     <div data-parallax="0.25">        translates on scroll; value = speed (negative = opposite way)
     <div data-parallax-bg="0.35">     shifts a CSS background-position instead of transforming
     <div data-reveal>                 fades + rises once when it enters the viewport
     <div data-reveal="120">           same, with a 120ms stagger delay
   Honours prefers-reduced-motion: everything renders in its final state, no motion. */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const reveals = () => {
    const items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;
    if (reduce) { items.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; }); return; }
    items.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 640ms cubic-bezier(.16,1,.3,1), transform 640ms cubic-bezier(.16,1,.3,1)';
      el.style.transitionDelay = (parseFloat(el.dataset.reveal) || 0) + 'ms';
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    items.forEach(el => io.observe(el));
  };

  const parallax = () => {
    const moved = [...document.querySelectorAll('[data-parallax]')];
    const bgs = [...document.querySelectorAll('[data-parallax-bg]')];
    if (reduce || (!moved.length && !bgs.length)) return;
    let raf = 0;
    const frame = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of moved) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) continue;
        // -1 .. 1 across the element's travel through the viewport
        const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
        el.style.transform = 'translate3d(0,' + (p * (parseFloat(el.dataset.parallax) || 0.2) * -100).toFixed(2) + 'px,0)';
      }
      for (const el of bgs) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) continue;
        const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
        el.style.backgroundPosition = '50% calc(50% + ' + (p * (parseFloat(el.dataset.parallaxBg) || 0.3) * -100).toFixed(2) + 'px)';
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(frame); };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    frame();
  };

  const start = () => { reveals(); parallax(); };
  if (document.readyState === 'loading') addEventListener('DOMContentLoaded', start);
  else start();
  // DC templates stream in progressively — re-scan a few times as content lands.
  let n = 0;
  const t = setInterval(() => { start(); if (++n > 8) clearInterval(t); }, 400);
})();
