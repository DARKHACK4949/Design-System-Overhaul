import { latticeStyle } from "../styles/lattice";
import SectionIntro from "../components/SectionIntro";
import PullQuote from "../components/PullQuote";
import Reveal from "../components/Reveal";
import FlowFigure from "../components/FlowFigure";

const mono = { fontFamily: "'Geist Mono', monospace" };
const STEPS = ["01 Find", "02 Filter", "03 Open", "04 Act", "05 Confirm", "06 Return"];

const ROWS = [
  {
    name: "CRM & Leads",
    color: "#e74c21",
    text: "#f0a493",
    cells: ["Lead list", "Stage filter", "Lead card", "Move stage", "Toast", "Pipeline"],
  },
  {
    name: "Operations",
    color: "#b3452c",
    text: "#d1745c",
    cells: ["Request table", "Status + region", "Detail panel", "Assign tech", "Dialog", "Queue"],
  },
  {
    name: "AI Platform",
    color: "#e83fc8",
    text: "#ef8cdd",
    cells: ["Match list", "Selector chips", "Thread", "Ask / predict", "Response", "Chat home"],
  },
];

export default function OnePattern() {
  return (
    <section style={{ ...latticeStyle(true), color: "#f3f1ec", padding: "clamp(84px,10vw,168px) 0" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <SectionIntro
          dark
          index="04 / The recurring pattern"
          tag="Information architecture / core journeys"
          heading={<>One pattern<br />wearing three<br />costumes.</>}
          lead="Mapping the core journeys was supposed to show me three different products. It showed me one sequence, built three times. Find, filter, open, act, confirm, return. The words on the screen changed. The shape of the work did not."
        />

        <Reveal
          style={{ marginTop: "clamp(38px,4.4vw,68px)", overflowX: "auto" }}
          start="top 90%"
          y={0}
        >
          <div style={{ minWidth: 900 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "190px repeat(6, 1fr)",
                gap: 8,
                ...mono,
                fontSize: 10,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#7d766a",
                paddingBottom: 14,
                borderBottom: "1px solid #2b2823",
              }}
            >
              <span />
              {STEPS.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

            {ROWS.map((row, i) => (
              <Reveal
                key={row.name}
                clip={[100, 0]}
                y={0}
                start="top 92%"
                delay={i * 0.1}
                style={{
                  display: "grid",
                  gridTemplateColumns: "190px repeat(6, 1fr)",
                  gap: 8,
                  alignItems: "stretch",
                  marginTop: i === 0 ? 10 : 8,
                }}
              >
                <b style={{ fontSize: 17, fontWeight: 500, letterSpacing: "-.02em", alignSelf: "center", color: row.color }}>
                  {row.name}
                </b>
                {row.cells.map((c) => (
                  <span
                    key={c}
                    style={{
                      border: `1px solid ${row.color}`,
                      color: row.text,
                      minHeight: 62,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: 13,
                      fontWeight: 500,
                      padding: 10,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      <div
        style={{
          maxWidth: 1560,
          margin: "clamp(48px,5.5vw,96px) auto 0",
          padding: "0 clamp(22px,5.2vw,96px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(22px,2.6vw,42px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            alignItems: "baseline",
            ...mono,
            fontSize: 10,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "#7d766a",
            borderBottom: "1px solid #2b2823",
            paddingBottom: 14,
          }}
        >
          <span style={{ color: "#f3f1ec" }}>The evidence · Figma flow canvases, uncropped</span>
          <span>Each panel opens at full resolution</span>
        </div>

        <FlowFigure
          dot="#e74c21"
          label="Fig. 04.1 / CRM & Leads · role flows"
          meta="Website · Salesman · Surveyor mobile · Designer · PA"
          src="/assets/flowmap-crm.jpeg"
          alt="CRM role flow maps for website, salesman, surveyor mobile, designer and PA"
          minWidth={620}
        />
        <FlowFigure
          dot="#b3452c"
          label="Fig. 04.2 / Operations · flow library"
          meta="Nine modules, mapped master by master"
          src="/assets/flowmap-ops.jpeg"
          alt="Operations flow library covering product, resources, spare parts, service master, designations and membership master"
          minWidth={620}
        />
        <FlowFigure
          dot="#e83fc8"
          label="Fig. 04.3 / AI Platform · conversation IA"
          src="/assets/flowmap-ai.jpeg"
          alt="AI platform conversation information architecture, decision branches and states"
          minWidth={560}
          maxWidth={940}
        />
      </div>

      <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <PullQuote>That is not three features. That is one pattern, built three times.</PullQuote>
      </div>
    </section>
  );
}
