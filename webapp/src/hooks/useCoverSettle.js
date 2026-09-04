import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

// The cover headline lifts and fades as the cover scrolls out, handing off
// to §01 rather than sliding away flat.
export function useCoverSettle(sectionRef, blockRef) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const block = blockRef.current;
    if (!section || !block) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;

    const tween = gsap.fromTo(
      block,
      { y: 0, opacity: 1 },
      {
        y: -70,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [sectionRef, blockRef]);
}
