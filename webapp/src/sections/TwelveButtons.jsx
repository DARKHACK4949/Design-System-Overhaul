import { useState } from "react";
import { latticeStyle } from "../styles/lattice";
import SectionIntro from "../components/SectionIntro";
import PullQuote from "../components/PullQuote";
import Reveal from "../components/Reveal";
import { AUDIT, DEFAULT_READ } from "../data/audit";

const mono = { fontFamily: "'Geist Mono', monospace" };

const BUTTON_VISUALS = [
  { label: "Save", bg: "#e74c21", color: "#fff", radius: 999, pad: "13px 30px", fontSize: 15, fontWeight: 600, ls: ".04em", upper: true },
  { label: "Save", bg: "#8a2b1a", color: "#fff", radius: 4, pad: "12px 26px", fontSize: 15, fontWeight: 500 },
  { label: "Create", bg: "#e83fc8", color: "#fff", radius: 999, pad: "14px 30px", fontSize: 14, fontWeight: 600, ls: ".06em", upper: true },
  { label: "Apply", bg: "#8a2b1a", color: "#fff", radius: 2, pad: "11px 24px", fontSize: 14, fontWeight: 500 },
  { label: "Submit", outline: "#e74c21", color: "#c23c1c", radius: 6, pad: "11px 26px", fontSize: 15, fontWeight: 600 },
  { label: "Add lead", bg: "#e74c21", color: "#fff", radius: 999, pad: "10px 22px", fontSize: 13, fontWeight: 500 },
  { label: "Approve", bg: "#b3452c", color: "#fff", radius: 4, pad: "15px 28px", fontSize: 15, fontWeight: 700, ls: ".08em", upper: true },
  { label: "Confirm", bg: "#6d2417", color: "#fff", radius: 0, pad: "13px 26px", fontSize: 14, fontWeight: 600, ls: ".1em", upper: true },
  { label: "Predict", outline: "#e83fc8", color: "#c417aa", radius: 999, pad: "12px 28px", fontSize: 15, fontWeight: 600 },
  { label: "Update", bg: "#e74c21", color: "#fff", radius: 999, pad: "14px 34px", fontSize: 16, fontWeight: 500 },
  { label: "Continue", bg: "#f18bdc", color: "#fff", radius: 999, pad: "13px 26px", fontSize: 13, fontWeight: 700, ls: ".1em", upper: true },
  { label: "Next", dashed: "#958c81", color: "#6f6a60", radius: 4, pad: "12px 30px", fontSize: 15, fontWeight: 500 },
];

export default function TwelveButtons() {
  const [read, setRead] = useState(DEFAULT_READ);

  return (
    <section style={{ ...latticeStyle(false), padding: "0 0 clamp(84px,10vw,168px)" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <SectionIntro
          index="03 / The repeated decision"
          tag="Component audit / primary actions"
          heading={<>Twelve ways to<br />build one button.</>}
          lead={
            <>
              The audit started with the most ordinary component in the three products. I pulled every primary
              action button I could find and put them on one board. Four labels for the same operation. Three
              radii. Two type scales. Every one of them was a defensible local decision.{" "}
              <span style={{ color: "#14130f" }}>Hover any of them to read where it came from.</span>
            </>
          }
        />

        <div className="audit-layout" style={{ marginTop: "clamp(34px,4vw,60px)" }}>
          <Reveal
            start="top 90%"
            y={0}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(150px,100%),1fr))",
              gap: 1,
              background: "#ddd7ca",
              border: "1px solid #ddd7ca",
            }}
          >
            {AUDIT.map((entry, i) => {
              const v = BUTTON_VISUALS[i];
              return (
                <div
                  key={entry.t + i}
                  className={`audit-cell${read === entry ? " is-active" : ""}`}
                  tabIndex={0}
                  onMouseEnter={() => setRead(entry)}
                  onMouseLeave={() => setRead(DEFAULT_READ)}
                  onFocus={() => setRead(entry)}
                  onBlur={() => setRead(DEFAULT_READ)}
                  onClick={() => setRead(entry)}
                >
                  <span
                    style={{
                      pointerEvents: "none",
                      background: v.bg,
                      border: v.outline ? `2px solid ${v.outline}` : v.dashed ? `1px dashed ${v.dashed}` : undefined,
                      color: v.color,
                      borderRadius: v.radius,
                      padding: v.pad,
                      fontSize: v.fontSize,
                      fontWeight: v.fontWeight,
                      letterSpacing: v.ls,
                      textTransform: v.upper ? "uppercase" : undefined,
                    }}
                  >
                    {v.label}
                  </span>
                </div>
              );
            })}
          </Reveal>

          <Reveal
            as="aside"
            start="top 90%"
            y={0}
            className="audit-readout"
            style={{
              border: "1px solid #14130f",
              padding: "clamp(20px,2vw,28px)",
              minHeight: 250,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ ...mono, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "#6f6a60" }}>
              Audit readout
            </span>
            <b style={{ display: "block", marginTop: 22, fontSize: "clamp(20px,1.7vw,27px)", lineHeight: 1.1, letterSpacing: "-.03em", fontWeight: 500 }}>
              {read.t}
            </b>
            <div
              style={{
                marginTop: 18,
                display: "grid",
                gridTemplateColumns: "64px 1fr",
                gap: "7px 14px",
                ...mono,
                fontSize: 11,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#9a9388",
              }}
            >
              <span>Product</span>
              <span style={{ color: "#14130f" }}>{read.p}</span>
              <span>Radius</span>
              <span style={{ color: "#14130f" }}>{read.r}</span>
              <span>Case</span>
              <span style={{ color: "#14130f" }}>{read.c}</span>
              <span>Height</span>
              <span style={{ color: "#14130f" }}>{read.h}</span>
            </div>
            <p style={{ margin: "22px 0 0", fontSize: 14, lineHeight: 1.5, color: "#6f6a60" }}>{read.n}</p>
          </Reveal>
        </div>

        <PullQuote maxWidth={34} marginTop="clamp(48px,5.5vw,90px)">
          Nobody was wrong. Nobody had ever seen the twelve of them side by side.
        </PullQuote>
      </div>
    </section>
  );
}
