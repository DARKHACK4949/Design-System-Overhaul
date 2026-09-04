import { useRef } from "react";
import { useParallaxDrift } from "../hooks/useParallaxDrift";
import Reveal from "./Reveal";

const mono = { fontFamily: "'Geist Mono', monospace" };

export default function FlowFigure({ dot, label, meta, src, alt, minWidth = 620, maxWidth }) {
  const imgRef = useRef(null);
  useParallaxDrift(imgRef, { scale: 1.06 });

  return (
    <Reveal
      as="figure"
      y={30}
      start="top 90%"
      style={{
        margin: 0,
        border: "1px solid #2b2823",
        background: "#050504",
        maxWidth,
        width: maxWidth ? "100%" : undefined,
        alignSelf: maxWidth ? "center" : undefined,
      }}
    >
      <figcaption
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 18px",
          borderBottom: "1px solid #2b2823",
          ...mono,
          fontSize: 10,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "#7d766a",
        }}
      >
        <span style={{ display: "flex", gap: 12, alignItems: "center", color: "#f3f1ec" }}>
          <i style={{ width: 8, height: 8, background: dot, display: "block", flex: "0 0 8px" }} />
          {label}
        </span>
        {meta && <span>{meta}</span>}
      </figcaption>
      <div style={{ padding: "clamp(14px,1.6vw,26px)", overflowX: "auto" }}>
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          style={{ width: "100%", minWidth, height: "auto", willChange: "transform" }}
        />
      </div>
    </Reveal>
  );
}
