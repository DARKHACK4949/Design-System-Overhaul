import { useRef } from "react";
import { latticeStyle } from "../styles/lattice";
import { useHeroCanvas } from "../hooks/useHeroCanvas";
import { useCoverSettle } from "../hooks/useCoverSettle";

const mono = { fontFamily: "'Geist Mono', monospace" };

const META = [
  { label: "Role", value: "Sole systems designer, with one senior reviewer" },
  { label: "Window", value: "Six months, alongside live product work" },
  { label: "Scope", value: "Research, audit, user flows, three design systems, attached screens" },
  { label: "Not mine", value: "Implementation, owned by engineering" },
  { label: "Outcome", value: "Three documented systems where there were none", accent: true },
];

export default function Cover() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const blockRef = useRef(null);

  useHeroCanvas(canvasRef);
  useCoverSettle(sectionRef, blockRef);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...latticeStyle(false),
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "22px clamp(22px,5.2vw,96px)",
          ...mono,
          fontSize: 11,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "#6f6a60",
          borderBottom: "1px solid #ddd7ca",
        }}
      >
        <span>Sanyam Sharma · UX/UI, Design Systems</span>
        <span style={{ display: "flex", gap: 7, alignItems: "center" }}>
          <i style={{ width: 8, height: 8, background: "#e74c21", display: "block" }} />
          <i style={{ width: 8, height: 8, background: "#8a2b1a", display: "block" }} />
          <i style={{ width: 8, height: 8, background: "#e83fc8", display: "block" }} />
        </span>
        <span>Design systems · Enterprise SaaS</span>
      </div>

      <div
        ref={blockRef}
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 1560,
          width: "100%",
          margin: "0 auto",
          padding: "clamp(48px,7vw,110px) clamp(22px,5.2vw,96px)",
          willChange: "transform, opacity",
        }}
      >
        <div
          style={{
            ...mono,
            fontSize: 11,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "#e74c21",
            display: "flex",
            gap: 14,
            alignItems: "center",
            animation: "fadeIn 1s both .1s",
          }}
        >
          <span>Design systems case study</span>
        </div>
        <h1
          style={{
            margin: "clamp(24px,3vw,46px) 0 0",
            fontSize: "clamp(52px,8.6vw,172px)",
            lineHeight: 0.855,
            letterSpacing: "-.052em",
            fontWeight: 500,
            maxWidth: "15ch",
          }}
        >
          <span style={{ display: "block", animation: "rise 1.1s cubic-bezier(.16,.84,.24,1) both .12s" }}>
            Three products.
          </span>
          <span style={{ display: "block", animation: "rise 1.1s cubic-bezier(.16,.84,.24,1) both .24s" }}>
            Three systems.
          </span>
          <span
            style={{
              display: "block",
              color: "#e74c21",
              animation: "rise 1.1s cubic-bezier(.16,.84,.24,1) both .36s",
            }}
          >
            Reverse-engineered
          </span>
          <span
            style={{
              display: "block",
              color: "#e74c21",
              animation: "rise 1.1s cubic-bezier(.16,.84,.24,1) both .46s",
            }}
          >
            from what shipped.
          </span>
        </h1>
        <p
          style={{
            margin: "clamp(30px,3.6vw,54px) 0 0",
            maxWidth: "62ch",
            fontSize: "clamp(17px,1.32vw,23px)",
            lineHeight: 1.5,
            color: "#43403a",
            animation: "riseSm 1s cubic-bezier(.16,.84,.24,1) both .6s",
          }}
        >
          Two live enterprise products and one in development. No design system, no documented flows, no
          documentation of any kind. I read all three backwards from the screens that had already shipped,
          audited every component, type scale and spacing decision, fixed what was broken, and delivered
          research, user flows, a design system per product, and screens rebuilt against them, all while
          regular delivery continued.
        </p>
      </div>

      <div
        style={{
          position: "relative",
          borderTop: "1px solid #ddd7ca",
          maxWidth: 1560,
          width: "100%",
          margin: "0 auto",
          padding: "0 clamp(22px,5.2vw,96px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(150px,100%),1fr))",
            gap: 1,
            background: "#ddd7ca",
            animation: "fadeIn 1.2s both .8s",
          }}
        >
          {META.map((m, i) => (
            <div
              key={m.label}
              className="cover-meta-cell"
              style={{
                background: "#f6f4ef",
                padding: i === 0 ? "22px 20px 26px 0" : i === META.length - 1 ? "22px 0 26px 20px" : "22px 20px 26px",
              }}
            >
              <div style={{ ...mono, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a9388" }}>
                {m.label}
              </div>
              <div style={{ marginTop: 10, fontSize: 15, lineHeight: 1.3, color: m.accent ? "#e74c21" : undefined }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 0 20px",
            ...mono,
            fontSize: 10,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "#9a9388",
          }}
        >
          <span style={{ animation: "blink 2.4s infinite" }}>↓ Scroll</span>
          <span>00 / 09</span>
        </div>
      </div>
    </section>
  );
}
