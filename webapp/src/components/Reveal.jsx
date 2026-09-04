import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

/**
 * Scroll-triggered reveal, replacing the prototype's CSS
 * `animation-timeline: view()` declarations.
 *
 * Fires once on entry rather than scrubbing: a scrubbed reveal leaves the
 * element parked at opacity 0 whenever ScrollTrigger mismeasures the page
 * (fonts landing late, an iframe host, a mid-page resize), which reads to a
 * reader as missing content. Firing once cannot strand anything, and anything
 * already past the trigger point at load is shown immediately.
 */
export default function Reveal({
  as: Tag = "div",
  y = 30,
  scale,
  clip, // [fromInsetPct, toInsetPct] for a left-to-right wipe reveal
  start = "top 88%",
  duration = 0.9,
  delay = 0,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const visible = { opacity: 1, y: 0, scale: 1, clipPath: clip ? `inset(0 ${clip[1]}% 0 0)` : "none" };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !gsap || !ScrollTrigger) {
      gsap.set(el, visible);
      return undefined;
    }

    const hidden = { opacity: 0, y };
    if (scale) hidden.scale = scale;
    if (clip) hidden.clipPath = `inset(0 ${clip[0]}% 0 0)`;
    gsap.set(el, hidden);

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: () => gsap.to(el, { ...visible, duration, delay, ease: "power3.out", overwrite: "auto" }),
    });

    // Belt and braces: if the trigger has not fired by the time the page has
    // settled and the element is on screen, just show it.
    const failsafe = setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && parseFloat(getComputedStyle(el).opacity) < 0.05) {
        gsap.to(el, { ...visible, duration: 0.4, ease: "power2.out", overwrite: "auto" });
      }
    }, 2200);

    return () => {
      clearTimeout(failsafe);
      trigger.kill();
    };
  }, [y, scale, clip, start, duration, delay]);

  return (
    <Tag ref={ref} className={className} style={{ willChange: "transform, opacity", ...style }} {...rest}>
      {children}
    </Tag>
  );
}
