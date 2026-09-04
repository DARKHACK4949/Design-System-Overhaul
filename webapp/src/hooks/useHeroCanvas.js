import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { fitCanvas, watchSize } from "../lib/canvas";

const ACCENTS = ["#e74c21", "#b3452c", "#e83fc8"];

// The cover's opening gesture: a scattered field of marks resolves onto the
// page's own 74px lattice over ~3.2s, then breathes gently in place. This is
// the whole case study argument compressed into one motion — chaos becoming
// a documented grid.
export function useHeroCanvas(canvasRef) {
  const state = useRef({
    hf: null,
    marks: null,
    settled: false,
    intro: null, // { t0 }
    tickFn: null,
  });

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const s = state.current;

    const sizeHero = () => {
      const f = fitCanvas(cv);
      if (!f) {
        s.hf = null;
        return;
      }
      s.hf = f;
      const gap = 74; // matches the page-wide CSS lattice, so marks land on it
      const cols = Math.ceil(f.w / gap) + 1;
      const rows = Math.ceil(f.h / gap) + 1;
      const marks = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const tx = i * gap + gap * 0.5;
          const ty = j * gap + gap * 0.5;
          const rnd = Math.random();
          marks.push({
            tx,
            ty,
            x: tx + (Math.random() - 0.5) * f.w * 0.85,
            y: ty + (Math.random() - 0.5) * f.h * 0.9,
            rot: (Math.random() - 0.5) * 3.2,
            s: rnd > 0.975 ? 6 : 2.5,
            c: rnd > 0.975 ? ACCENTS[(i + j) % 3] : "#dcd6ca",
            d: Math.random() * 0.45,
          });
        }
      }
      s.marks = marks;
    };

    const draw = () => {
      if (!s.hf || !s.marks) return;
      const { ctx, w, h } = s.hf;
      ctx.clearRect(0, 0, w, h);
      s.marks.forEach((m) => {
        const x = m.cx == null ? m.x : m.cx;
        const y = m.cy == null ? m.y : m.cy;
        if (x < -40 || x > w + 40 || y < -40 || y > h + 40) return;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(m.crot || 0);
        ctx.globalAlpha = m.op == null ? 0.2 : m.op;
        ctx.fillStyle = m.c;
        ctx.fillRect(-m.s / 2, -m.s / 2, m.s, m.s);
        ctx.restore();
      });
    };

    const stopTick = () => {
      if (s.tickFn) {
        gsap.ticker.remove(s.tickFn);
        s.tickFn = null;
      }
    };

    const breathe = () => {
      stopTick();
      const t0 = performance.now();
      s.tickFn = () => {
        const t = (performance.now() - t0) / 1000;
        s.marks.forEach((m, i) => {
          m.cx = m.tx + Math.sin(t * 0.4 + i * 0.7) * 2.2;
          m.cy = m.ty + Math.cos(t * 0.33 + i * 0.5) * 2.2;
          m.crot = 0;
          m.op = 1;
        });
        draw();
      };
      gsap.ticker.add(s.tickFn);
    };

    const runIntro = () => {
      stopTick();
      const t0 = performance.now();
      s.tickFn = () => {
        const t = Math.min(1, (performance.now() - t0) / 3200);
        const e = 1 - Math.pow(1 - t, 3);
        s.marks.forEach((m) => {
          const lp = Math.max(0, Math.min(1, (e - m.d) / (1 - m.d)));
          const k = 1 - Math.pow(1 - lp, 3);
          m.cx = m.x + (m.tx - m.x) * k;
          m.cy = m.y + (m.ty - m.y) * k;
          m.crot = m.rot * (1 - k);
          m.op = 0.18 + 0.82 * k;
        });
        draw();
        if (t >= 1) {
          s.settled = true;
          breathe();
        }
      };
      gsap.ticker.add(s.tickFn);
    };

    const setup = () => {
      stopTick();
      sizeHero();
      if (!s.hf || !s.marks || !s.marks.length) return;
      if (reduced) {
        s.marks.forEach((m) => {
          m.cx = m.tx;
          m.cy = m.ty;
          m.crot = 0;
          m.op = 1;
        });
        draw();
        return;
      }
      if (s.settled) breathe();
      else runIntro();
    };

    setup();
    const unwatch = watchSize(cv, setup);

    return () => {
      stopTick();
      unwatch();
    };
  }, [canvasRef]);
}
