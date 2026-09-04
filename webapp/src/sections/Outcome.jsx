import { latticeStyle } from "../styles/lattice";
import SectionIntro from "../components/SectionIntro";
import Reveal from "../components/Reveal";

const mono = { fontFamily: "'Geist Mono', monospace" };

const ROWS = [
  { measure: "Products with a design system", before: "0 of 3", after: "3 of 3, built from zero" },
  { measure: "Documented user flows", before: "None", after: "Every core journey, all three" },
  { measure: "Token naming grammars", before: "None", after: "1, reused in all three systems" },
  { measure: "Design variables", before: "0", after: "268, six collections per system" },
  { measure: "Spacing scales", before: "3 ad hoc", after: "A 4px base in each" },
  { measure: "Documented focus states", before: "0 of 3", after: "3 of 3" },
];

const STATS = [
  { value: "3", label: "Systems, one per product" },
  { value: "268", label: "Variables per system" },
  { value: "6", label: "States, every variant" },
  { value: "0", label: "Brand colours changed", accent: true },
];

export default function Outcome() {
  return (
    <section style={{ ...latticeStyle(false), padding: "clamp(84px,10vw,168px) 0" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <SectionIntro
          index="09 / What changed"
          tag="From nothing documented to three documented systems"
          heading={<>Infrastructure<br />was the<br />outcome.</>}
          lead="Six months earlier none of this existed: not a system, not a flow diagram, not a page of documentation. The comparison below is the honest one: not a redesign, not a velocity claim, just the difference between three products improvising and three products with a documented system each."
        />

        <Reveal y={0} start="top 92%" style={{ marginTop: "clamp(38px,4.4vw,64px)", borderTop: "1px solid #14130f" }}>
          <div
            className="outcome-row"
              style={{
              padding: "15px 0",
              borderBottom: "1px solid #ddd7ca",
              ...mono,
              fontSize: 10,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#9a9388",
            }}
          >
            <span>Measure</span>
            <span>Before</span>
            <span>After</span>
          </div>
          {ROWS.map((r) => (
            <div key={r.measure} className="outcome-row" style={{ padding: "22px 0", borderBottom: "1px solid #ddd7ca" }}>
              <b style={{ fontSize: "clamp(16px,1.2vw,20px)", fontWeight: 500 }}>{r.measure}</b>
              <span style={{ ...mono, fontSize: 14, color: "#a08d88" }}>{r.before}</span>
              <span style={{ ...mono, fontSize: 14, color: "#1b9b60" }}>{r.after}</span>
            </div>
          ))}
        </Reveal>

        <div style={{ marginTop: "clamp(40px,4.6vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(160px,100%),1fr))", gap: "clamp(18px,2vw,30px)" }}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} y={16} start="top 94%" delay={i * 0.06} style={{ borderLeft: "1px solid #ddd7ca", paddingLeft: 20 }}>
              <b style={{ display: "block", fontSize: "clamp(42px,4vw,64px)", lineHeight: 1, letterSpacing: "-.06em", fontWeight: 500, color: s.accent ? "#e74c21" : undefined }}>
                {s.value}
              </b>
              <span style={{ display: "block", marginTop: 14, ...mono, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "#6f6a60" }}>
                {s.label}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal
          y={20}
          start="top 90%"
          style={{
            marginTop: "clamp(48px,5.5vw,90px)",
            border: "1px solid #14130f",
            padding: "clamp(26px,3vw,46px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px,100%),1fr))",
            gap: "clamp(24px,3vw,50px)",
          }}
        >
          <div>
            <span style={{ ...mono, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "#e74c21" }}>What I cannot claim</span>
            <h3 style={{ margin: "20px 0 0", fontSize: "clamp(24px,2.2vw,36px)", lineHeight: 1.08, letterSpacing: "-.04em", fontWeight: 500 }}>
              No baseline, no percentage.
            </h3>
          </div>
          <p style={{ margin: 0, fontSize: "clamp(15px,1.1vw,18px)", lineHeight: 1.6, color: "#504c46" }}>
            I did not capture delivery times before the work started, so I have no honest way to claim a speed
            improvement. Implementation stayed with engineering too, so adoption metrics are not mine to report
            either. What I can show is the architecture, the specifications and the documentation that three
            product teams now build against. Capturing a baseline is the first thing I will do differently.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
