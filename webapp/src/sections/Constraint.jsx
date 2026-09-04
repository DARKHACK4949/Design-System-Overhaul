import { latticeStyle } from "../styles/lattice";
import SectionIntro from "../components/SectionIntro";
import Reveal from "../components/Reveal";

const mono = { fontFamily: "'Geist Mono', monospace" };

const STEPS = [
  {
    n: "01",
    title: "Read backwards",
    body: "Start from finished screens, not a hypothetical system. Whatever shipped is the real specification.",
  },
  {
    n: "02",
    title: "Compare on one wall",
    body: "Nothing looks inconsistent until it sits next to its alternatives in the same frame.",
  },
  {
    n: "03",
    title: "Only durable rules",
    body: "Write down the structure all three products can share. Leave every value to each product's own system.",
  },
];

export default function Constraint() {
  return (
    <section style={{ ...latticeStyle(false), padding: "clamp(84px,10vw,168px) 0" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <SectionIntro
          index="02 / The window"
          tag="No system, no flows, no documentation"
          heading={<>Nobody asked<br />for a system.</>}
          lead="There was no design system, no user flow documentation, and no written record of a single decision. I argued for a window to build all three, on one condition: shipping could not slow down. That constraint decided the order of everything that followed. I could not invent a system and then ask teams to adopt it. I had to recover the one already implied by the screens, in fragments, across products already in production."
        />
      </div>

      <div
        style={{
          maxWidth: 1560,
          margin: "clamp(48px,5.5vw,90px) auto 0",
          padding: "0 clamp(22px,5.2vw,96px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(300px,100%),1fr))",
          gap: "clamp(20px,2.4vw,34px)",
        }}
      >
        <Reveal
          y={20}
          start="top 92%"
          style={{
            border: "1px solid #14130f",
            padding: "clamp(24px,2.4vw,34px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 300,
          }}
        >
          <span style={{ ...mono, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "#6f6a60" }}>
            Operating constraint
          </span>
          <strong
            style={{
              display: "block",
              fontSize: "clamp(26px,2.3vw,38px)",
              lineHeight: 1.04,
              letterSpacing: "-.04em",
              fontWeight: 500,
              margin: "28px 0",
            }}
          >
            Make the invisible visible. Do not stop the machine.
          </strong>
          <span style={{ ...mono, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", lineHeight: 2.1, color: "#6f6a60" }}>
            Ownership → Research → Audit → User flows → Tokens → Component specs → Attached screens → Documentation
            → <span style={{ color: "#b3452c" }}>Engineering</span>
          </span>
        </Reveal>

        <Reveal
          y={20}
          start="top 92%"
          className="constraint-steps"
          style={{
            display: "grid",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: 1,
            background: "#ddd7ca",
            border: "1px solid #ddd7ca",
            minHeight: 300,
          }}
        >
          {STEPS.map((s) => (
            <div
              key={s.n}
              style={{
                background: "#f6f4ef",
                padding: "clamp(22px,2.2vw,32px)",
                display: "grid",
                gridTemplateColumns: "46px 1fr",
                gap: 18,
                alignItems: "baseline",
              }}
            >
              <span style={{ ...mono, fontSize: 12, color: "#e74c21" }}>{s.n}</span>
              <div>
                <b style={{ fontSize: "clamp(18px,1.4vw,23px)", letterSpacing: "-.02em", fontWeight: 500 }}>{s.title}</b>
                <p style={{ margin: "9px 0 0", fontSize: 15, lineHeight: 1.5, color: "#6f6a60", maxWidth: "58ch" }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
