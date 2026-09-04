import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

// Flow-map images drift vertically against their frame as they pass through
// the viewport, scaled slightly so no edge gaps appear during the drift.
export function useParallaxDrift(ref, { scale = 1.06, range = 2.6 } = {}) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(el, { scale: 1 });
      return undefined;
    }
    gsap.set(el, { scale });
    const tween = gsap.fromTo(
      el,
      { yPercent: -range },
      {
        yPercent: range,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref, scale, range]);
}
