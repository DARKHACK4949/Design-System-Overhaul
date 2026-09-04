import { latticeStyle } from "../styles/lattice";
import SectionIntro from "../components/SectionIntro";
import Reveal from "../components/Reveal";
import GrowBar from "../components/GrowBar";

const mono = { fontFamily: "'Geist Mono', monospace" };

const CONTRAST_CARDS = [
  {
    label: "Save changes",
    swatch: "#e74c21",
    textColor: "#ffd9cd",
    tag: "CRM primary",
    before: "3.85",
    after: "4.61",
    width: "62%",
    note: "Label moved to Flame/600",
  },
  {
    label: "Predict",
    swatch: "#e83fc8",
    textColor: "#ffe0f8",
    tag: "AI primary",
    before: "3.37",
    after: "6.23",
    width: "84%",
    note: "Black label on the same magenta",
  },
  {
    label: "View details",
    swatch: "#b8aaa7",
    textColor: "#a4948f",
    tag: "Ops secondary",
    before: "1.27",
    after: "7.83",
    width: "100%",
    note: "Text moved onto a solid surface",
  },
];

const FOCUS_STATES = [
  { radius: 999, bg: "#e74c21", color: "#fff", ring: "#f2734f", label: "6.42:1 · CRM & Leads" },
  { radius: 4, bg: "#b3452c", color: "#fff", ring: "#d1745c", label: "5.08:1 · Operations" },
  { radius: 999, bg: "#e83fc8", color: "#14130f", ring: "#ef8cdd", label: "11.4:1 · AI Platform" },
];

export default function Accessibility() {
  return (
    <section style={{ ...latticeStyle(true), color: "#f3f1ec", padding: "clamp(84px,10vw,168px) 0" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <SectionIntro
          dark
          index="07 / Quality in the manual"
          tag="Contrast & focus"
          heading={<>Three real<br />failures, fixed<br />without touching<br />the brand.</>}
          lead="The audit surfaced three contrast failures on primary actions, the buttons users press most often. Every repair used a value that already existed inside that product's own ramp, so no brand colour changed. The work was applying the ramp deliberately instead of by eye."
        />
      </div>

      <div
        style={{
          maxWidth: 1560,
          margin: "clamp(38px,4.4vw,66px) auto 0",
          padding: "0 clamp(22px,5.2vw,96px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(280px,100%),1fr))",
          gap: "clamp(20px,2.4vw,34px)",
        }}
      >
        {CONTRAST_CARDS.map((c, i) => (
          <Reveal key={c.tag} y={30} scale={0.985} start="top 92%" delay={i * 0.08} style={{ border: "1px solid #2b2823" }}>
            <div style={{ height: 150, background: c.swatch, display: "flex", alignItems: "center", justifyContent: "center", color: c.textColor, fontSize: 21, fontWeight: 600 }}>
              {c.label}
            </div>
            <div style={{ padding: 24 }}>
              <span style={{ ...mono, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "#7d766a" }}>{c.tag}</span>
              <div style={{ marginTop: 14, display: "flex", alignItems: "baseline", gap: 12, fontSize: "clamp(30px,2.8vw,44px)", letterSpacing: "-.05em", fontWeight: 500 }}>
                <span style={{ color: "#ff7d72" }}>{c.before}</span>
                <span style={{ color: "#7d766a", fontSize: 20 }}>→</span>
                <span style={{ color: "#52d387" }}>{c.after}</span>
              </div>
              <div style={{ marginTop: 16 }}>
                <GrowBar widthPct={c.width} color="#52d387" />
              </div>
              <p style={{ margin: "16px 0 0", ...mono, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#7d766a", lineHeight: 1.9 }}>
                {c.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div style={{ maxWidth: 1560, margin: "clamp(48px,5.5vw,92px) auto 0", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <Reveal
          as="h3"
          y={14}
          start="top 90%"
          style={{ margin: 0, fontSize: "clamp(24px,2.4vw,40px)", lineHeight: 1.1, letterSpacing: "-.038em", fontWeight: 500, maxWidth: "30ch" }}
        >
          All three specs were documented. None of them had a focus state.
        </Reveal>
        <Reveal
          as="p"
          y={14}
          start="top 88%"
          style={{ margin: "18px 0 0", maxWidth: "58ch", fontSize: "clamp(16px,1.18vw,20px)", lineHeight: 1.55, color: "#a8a19a" }}
        >
          One mechanism, expressed three times: a 2px surface-coloured offset, then a 2px ring drawn from that
          product's own ramp. Keyboard users get the same affordance in all three products without any of them
          looking borrowed.
        </Reveal>

        <Reveal
          y={0}
          start="top 92%"
          style={{ marginTop: 34, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px,100%),1fr))", gap: "clamp(16px,2vw,28px)" }}
        >
          {FOCUS_STATES.map((f) => (
            <div key={f.label} style={{ border: "1px solid #2b2823", padding: "34px 24px", textAlign: "center" }}>
              <div
                style={{
                  height: 56,
                  borderRadius: f.radius,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: f.color,
                  background: f.bg,
                  outline: "2px solid #0c0b09",
                  outlineOffset: 2,
                  boxShadow: `0 0 0 4px ${f.ring}`,
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Continue
              </div>
              <p style={{ margin: "24px 0 0", ...mono, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "#52d387" }}>{f.label}</p>
            </div>
          ))}
        </Reveal>
        <p style={{ margin: "22px 0 0", ...mono, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "#7d766a" }}>
          WCAG AA requires 4.5:1 for body text, 3:1 for large text and non-text indicators
        </p>
      </div>
    </section>
  );
}
