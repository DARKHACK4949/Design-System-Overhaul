import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { fitCanvas, watchSize } from "../lib/canvas";

const LANE_COLORS = ["#e74c21", "#b3452c", "#e83fc8"];
const LANE_NAMES = ["CRM", "OPS", "AI"];
const LAYER_LABELS = ["PRIMITIVES", "SEMANTIC", "COLLECTIONS", "COMPONENTS", "SCREENS"];

// §05's diagram: three structurally identical pipelines running in parallel,
// tokens streaming down five shared layers. Argues the corrected thesis
// visually — one method, applied three separate times, not one shared trunk.
export function useArchCanvas(canvasRef) {
  const state = useRef({ af: null, bands: null, tokens: null, tickFn: null });

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const s = state.current;

    const sizeArch = () => {
      const f = fitCanvas(cv);
      if (!f) {
        s.af = null;
        return;
      }
      s.af = f;
      s.bands = [0.16, 0.34, 0.52, 0.7, 0.88].map((p) => p * f.h);
      if (!s.tokens) {
        s.tokens = Array.from({ length: 54 }, (_, i) => ({
          lane: i % 3,
          t: Math.random(),
          v: 0.055 + Math.random() * 0.05,
        }));
      }
    };

    const draw = (t) => {
      if (!s.af) return;
      const { ctx, w, h } = s.af;
      const B = s.bands;
      const gutter = Math.max(74, w * 0.2);
      const lanes = [gutter, w * 0.5, w - gutter];
      ctx.clearRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(243,241,236,.09)";
      ctx.lineWidth = 1;
      B.forEach((y) => {
        ctx.beginPath();
        ctx.moveTo(0, Math.round(y) + 0.5);
        ctx.lineTo(w, Math.round(y) + 0.5);
        ctx.stroke();
      });

      ctx.font = "500 9px 'Geist Mono', monospace";
      ctx.textAlign = "left";
      ctx.fillStyle = "rgba(125,118,106,.85)";
      LAYER_LABELS.forEach((l, i) => ctx.fillText(l, 14, B[i] - 9));

      lanes.forEach((x, i) => {
        ctx.strokeStyle = `${LANE_COLORS[i]}44`;
        ctx.beginPath();
        ctx.moveTo(x, B[0]);
        ctx.lineTo(x, B[4]);
        ctx.stroke();
        ctx.fillStyle = LANE_COLORS[i];
        B.forEach((y) => ctx.fillRect(x - 4, y - 4, 8, 8));
        ctx.fillRect(x - 15, B[4] - 1.5, 30, 3);
        ctx.textAlign = "center";
        ctx.font = "500 9px 'Geist Mono', monospace";
        ctx.fillText(LANE_NAMES[i], x, B[4] + 19);
        ctx.textAlign = "left";
      });

      s.tokens.forEach((k) => {
        const p = k.t;
        const x = lanes[k.lane] + Math.sin(p * 24 + k.lane * 2) * 3;
        const y = B[0] + (B[4] - B[0]) * p;
        ctx.globalAlpha = p < 0.05 ? p / 0.05 : p > 0.96 ? (1 - p) / 0.04 : 1;
        ctx.fillStyle = p < 0.5 ? "#f3f1ec" : LANE_COLORS[k.lane];
        ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
      });
      ctx.globalAlpha = 1;
    };

    const stopTick = () => {
      if (s.tickFn) {
        gsap.ticker.remove(s.tickFn);
        s.tickFn = null;
      }
    };

    const loop = () => {
      stopTick();
      s.tickFn = () => {
        s.tokens.forEach((k) => {
          k.t = (k.t + k.v * 0.016) % 1;
        });
        draw();
      };
      gsap.ticker.add(s.tickFn);
    };

    const setup = () => {
      stopTick();
      sizeArch();
      draw(0);
    };

    setup();
    const unwatch = watchSize(cv, setup);

    let io;
    if (!reduced && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            stopTick();
            if (entry.isIntersecting) loop();
            else draw(0);
          });
        },
        { threshold: 0.02 }
      );
      io.observe(cv);
    }

    return () => {
      stopTick();
      unwatch();
      io?.disconnect();
    };
  }, [canvasRef]);
}
