import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

export default function ProgressBar() {
  const fillRef = useRef(null);

  useLayoutEffect(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.set(fillRef.current, { scaleX: self.progress });
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 90,
        height: 2,
        background: "rgba(20,19,15,.1)",
        pointerEvents: "none",
      }}
    >
      <div
        ref={fillRef}
        style={{
          height: "100%",
          background: "#e74c21",
          transformOrigin: "0 50%",
          transform: "scaleX(0)",
        }}
      />
    </div>
  );
}
