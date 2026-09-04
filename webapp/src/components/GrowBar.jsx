import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

export default function GrowBar({ widthPct, color, trackColor = "#2b2823", height = 3 }) {
  const trackRef = useRef(null);
  const fillRef = useRef(null);

  useLayoutEffect(() => {
    const fill = fillRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(fill, { scaleX: 1 });
      return undefined;
    }

    gsap.set(fill, { scaleX: 0 });
    const trigger = ScrollTrigger.create({
      trigger: trackRef.current,
      start: "top 88%",
      once: true,
      onEnter: () => gsap.to(fill, { scaleX: 1, duration: 1.1, ease: "power3.out" }),
    });
    const failsafe = setTimeout(() => {
      const r = trackRef.current?.getBoundingClientRect();
      if (r && r.top < window.innerHeight) gsap.to(fill, { scaleX: 1, duration: 0.4, overwrite: "auto" });
    }, 2200);

    return () => {
      clearTimeout(failsafe);
      trigger.kill();
    };
  }, []);

  return (
    <div ref={trackRef} style={{ height, background: trackColor }}>
      <div
        ref={fillRef}
        style={{
          height: "100%",
          width: widthPct,
          background: color,
          transformOrigin: "0 50%",
        }}
      />
    </div>
  );
}
