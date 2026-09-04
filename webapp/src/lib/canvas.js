export function fitCanvas(cv) {
  if (!cv) return null;
  const r = cv.getBoundingClientRect();
  if (r.width < 2 || r.height < 2) return null;
  const d = Math.min(window.devicePixelRatio || 1, 2);
  cv.width = Math.max(1, Math.round(r.width * d));
  cv.height = Math.max(1, Math.round(r.height * d));
  const ctx = cv.getContext("2d");
  ctx.setTransform(d, 0, 0, d, 0, 0);
  return { ctx, w: r.width, h: r.height };
}

export function watchSize(el, cb) {
  if (!el) return () => {};
  if (typeof ResizeObserver === "undefined") {
    const raf = requestAnimationFrame(cb);
    return () => cancelAnimationFrame(raf);
  }
  let t = null;
  const ro = new ResizeObserver(() => {
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;
    clearTimeout(t);
    t = setTimeout(cb, 90);
  });
  ro.observe(el);
  return () => {
    clearTimeout(t);
    ro.disconnect();
  };
}
