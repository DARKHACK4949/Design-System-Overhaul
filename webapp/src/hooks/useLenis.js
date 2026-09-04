import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../lib/gsap";

// Premium inertial scroll: Lenis eases the real scroll position toward the
// wheel/touch target every frame, and is kept in lockstep with GSAP's
// ScrollTrigger so every scroll-linked reveal in the page tracks it exactly
// (no jank, no dead re-implementation of what the browser already does for
// touch/keyboard). Replaces the prototype's hand-rolled wheel hijack.
export function useLenis() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.15,
      smoothTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);
}
