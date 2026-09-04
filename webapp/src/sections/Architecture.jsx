import { useRef } from "react";
import { latticeStyle } from "../styles/lattice";
import SectionIntro from "../components/SectionIntro";
import PullQuote from "../components/PullQuote";
import Reveal from "../components/Reveal";
import { useArchCanvas } from "../hooks/useArchCanvas";

const mono = { fontFamily: "'Geist Mono', monospace" };

const LAYERS = [
  { n: "01", title: "Primitives", body: "Raw ramps. Named by value, never by use." },
  { n: "02", title: "Semantic tokens", body: "One naming grammar, written once and reused in all three systems." },
  { n: "03", title: "Six collections", body: "Colour · Typography · Spacing · Layout · Radius · Stroke. The same six in every system." },
  { n: "04", title: "Components & states", body: "Hierarchy, anatomy and six states, specified independently per product.", tags: true },
  { n: "05", title: "Attached screens", body: "Product screens rebuilt against their own system, so the file is the source of truth." },
];

export default function Architecture() {
  const canvasRef = useRef(null);
  useArchCanvas(canvasRef);

  return (
    <section style={{ ...latticeStyle(true), color: "#f3f1ec", padding: "clamp(84px,10vw,168px) 0", borderTop: "1px solid #2b2823" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <SectionIntro
          dark
          index="05 / The architecture"
          tag="Three systems · one method"
          heading={<>Three systems.<br />Built the<br />same way.</>}
          lead="Each product got its own system, because each product genuinely needed one. What they share is not values. It is structure. The same five layers, the same naming grammar, the same collections, in three separate files. Primitives feed semantic tokens; semantic tokens feed components; components feed screens. Nothing skips a layer and nothing points backwards. Learn one of the three and you can read the other two."
        />
      </div>

      <div
        style={{
          maxWidth: 1560,
          margin: "clamp(40px,4.6vw,74px) auto 0",
          padding: "0 clamp(22px,5.2vw,96px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(320px,100%),1fr))",
          gap: "clamp(24px,3vw,50px)",
          alignItems: "stretch",
        }}
      >
        <Reveal
          y={0}
          start="top 92%"
          style={{ position: "relative", minHeight: 520, border: "1px solid #2b2823", background: "#050504" }}
        >
          <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
          <div
            style={{
              position: "absolute",
              left: 16,
              top: 14,
              ...mono,
              fontSize: 10,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#7d766a",
              pointerEvents: "none",
            }}
          >
            Fig. 05.1 / Three parallel resolution paths
          </div>
        </Reveal>

        <Reveal
          as="div"
          y={14}
          start="top 92%"
          style={{ display: "grid", gridTemplateRows: "repeat(5, 1fr)", borderTop: "1px solid #2b2823" }}
        >
          {LAYERS.map((l) => (
            <div
              key={l.n}
              style={{ borderBottom: l.n !== "05" ? "1px solid #2b2823" : undefined, padding: "20px 4px", display: "flex", gap: 20, alignItems: "baseline" }}
            >
              <span style={{ ...mono, fontSize: 11, color: "#7d766a", flex: "0 0 26px" }}>{l.n}</span>
              <div style={{ width: l.tags ? "100%" : undefined }}>
                <strong style={{ display: "block", fontSize: "clamp(20px,1.7vw,28px)", letterSpacing: "-.032em", fontWeight: 500 }}>
                  {l.title}
                </strong>
                <span style={{ fontSize: 14, color: "#7d766a" }}>{l.body}</span>
                {l.tags && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 14 }}>
                    <span style={{ borderBottom: "4px solid #e74c21", padding: "9px 4px", ...mono, fontSize: 10, letterSpacing: ".16em" }}>
                      CRM SYSTEM
                    </span>
                    <span style={{ borderBottom: "4px solid #b3452c", padding: "9px 4px", ...mono, fontSize: 10, letterSpacing: ".16em" }}>
                      OPS SYSTEM
                    </span>
                    <span style={{ borderBottom: "4px solid #e83fc8", padding: "9px 4px", ...mono, fontSize: 10, letterSpacing: ".16em" }}>
                      AI SYSTEM
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <div
        style={{
          maxWidth: 1560,
          margin: "clamp(36px,4vw,64px) auto 0",
          padding: "0 clamp(22px,5.2vw,96px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(300px,100%),1fr))",
          gap: "clamp(20px,2.4vw,34px)",
        }}
      >
        <Reveal y={24} scale={0.985} start="top 92%">
          <img
            src="/assets/figma-variables.jpeg"
            alt="Figma variables panel showing six collections and per-product modes"
            style={{ width: "100%", aspectRatio: "1354/939", objectFit: "cover", background: "#000" }}
          />
          <div style={{ marginTop: 12, ...mono, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "#7d766a" }}>
            Fig. 05.2 / Variables · the same six collections in each system
          </div>
        </Reveal>
        <Reveal y={24} scale={0.985} start="top 92%">
          <img
            src="/assets/figma-styles.jpeg"
            alt="Figma styles panel"
            style={{ width: "100%", aspectRatio: "1354/939", objectFit: "cover", background: "#000" }}
          />
          <div style={{ marginTop: 12, ...mono, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "#7d766a" }}>
            Fig. 05.3 / Published styles, resolved from tokens
          </div>
        </Reveal>
      </div>

      <div style={{ maxWidth: 1560, margin: "clamp(52px,6.5vw,110px) auto 0", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <PullQuote accent="#e83fc8">
          Three separate systems. Learn one and you can read the other two.
        </PullQuote>
      </div>
    </section>
  );
}
