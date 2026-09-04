import { latticeStyle } from "../styles/lattice";
import SectionIntro from "../components/SectionIntro";
import Reveal from "../components/Reveal";

const mono = { fontFamily: "'Geist Mono', monospace" };

const COLUMNS = [
  {
    title: "CRM & Leads",
    status: "Complete",
    accent: "#e74c21",
    img: "/assets/spec-crm.jpeg",
    alt: "CRM button specification sheet",
    height: 480,
    bg: "#fff",
    caption: "Hierarchy, anatomy, four levels, three forms, three sizes, five states each.",
  },
  {
    title: "AI Platform",
    status: "Partial",
    accent: "#e83fc8",
    img: "/assets/spec-ai.jpeg",
    alt: "AI platform button specification sheet",
    height: 620,
    bg: "#000",
    caption: "Dark-mode hierarchy and pill variants documented. Tertiary and link levels never reached.",
  },
];

const OPS_SPEC = {
  title: "Operations",
  status: "Thin",
  accent: "#b3452c",
  img: "/assets/spec-ops.jpeg",
  alt: "Operations button specification sheet",
  caption: "Two levels, one form, no size scale. Enough to ship, not enough to reuse.",
};

const COVERAGE = [
  { name: "CRM & Leads", color: "#e74c21", levels: [1, 1, 1, 1], forms: [1, 1, 1], sizes: [1, 1, 1] },
  { name: "AI Platform", color: "#e83fc8", levels: [1, 1, 1, 0], forms: [1, 1, 0], sizes: [1, 1, 1] },
  { name: "Operations", color: "#b3452c", levels: [1, 1, 0, 0], forms: [1, 0, 0], sizes: [0, 0, 0] },
];

const STATES = [
  { label: "Default", bg: "#e74c21" },
  { label: "Hover", bg: "#c93d17" },
  { label: "Pressed", bg: "#a83112", press: true },
  { label: "Focus", bg: "#e74c21", focus: true },
  { label: "Disabled", bg: "#e0d9cc", color: "#9a9388" },
  { label: "Loading", bg: "#f2c0b0", color: "#a83112", text: "Saving…" },
];

function Chips({ values, color }) {
  return (
    <span style={{ display: "flex", gap: 6 }}>
      {values.map((v, i) => (
        <i
          key={i}
          style={{
            width: 13,
            height: 13,
            background: v ? color : "transparent",
            border: v ? undefined : "1px solid #cfc8ba",
          }}
        />
      ))}
    </span>
  );
}

export default function Specs() {
  return (
    <section style={{ ...latticeStyle(false), padding: "clamp(84px,10vw,168px) 0" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <SectionIntro
          index="06 / The shared language"
          tag="Component specification & states"
          heading={<>Three specs.<br />Three stopping<br />points.</>}
          lead="Three teams had documented the same component to three different depths. That is not sloppiness. It is what happens when three people finish the same job at the point where it stops being urgent. The columns below are the real spec files, scaled to true relative length. The height of each column is how far that team got."
        />
      </div>

      <div
        style={{
          maxWidth: 1560,
          margin: "clamp(38px,4.4vw,66px) auto 0",
          padding: "0 clamp(22px,5.2vw,96px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(250px,100%),1fr))",
          gap: "clamp(20px,2.4vw,34px)",
        }}
      >
        {COLUMNS.map((c, i) => (
          <Reveal key={c.title} y={30} scale={0.985} start="top 92%" delay={i * 0.08}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                paddingBottom: 12,
                borderBottom: `3px solid ${c.accent}`,
                ...mono,
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
              }}
            >
              <span>{c.title}</span>
              <span style={{ color: "#6f6a60" }}>{c.status}</span>
            </div>
            <div style={{ position: "relative", height: c.height, overflow: "hidden", marginTop: 16, background: c.bg }}>
              <img src={c.img} alt={c.alt} style={{ width: "100%", height: "auto" }} />
              <div style={{ position: "absolute", inset: "auto 0 0 0", height: 180, background: "linear-gradient(to top, #f6f4ef, rgba(246,244,239,0))" }} />
            </div>
            <p style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.5, color: "#6f6a60" }}>{c.caption}</p>
          </Reveal>
        ))}

        <Reveal y={30} scale={0.985} start="top 92%">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              paddingBottom: 12,
              borderBottom: `3px solid ${OPS_SPEC.accent}`,
              ...mono,
              fontSize: 11,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            <span>{OPS_SPEC.title}</span>
            <span style={{ color: "#6f6a60" }}>{OPS_SPEC.status}</span>
          </div>
          <div style={{ position: "relative", marginTop: 16, background: "#fff" }}>
            <img src={OPS_SPEC.img} alt={OPS_SPEC.alt} style={{ width: "100%", height: "auto" }} />
          </div>
          <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 12, ...mono, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: OPS_SPEC.accent }}>
            <span style={{ flex: "0 0 26px", height: 1, background: OPS_SPEC.accent }} />
            <span>Sheet ends here</span>
          </div>
          <p style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.5, color: "#6f6a60" }}>{OPS_SPEC.caption}</p>
        </Reveal>
      </div>

      <div style={{ maxWidth: 1560, margin: "clamp(48px,5.5vw,90px) auto 0", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <div style={{ borderTop: "1px solid #14130f" }}>
          <div
            className="coverage-row"
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
            <span>Coverage before</span>
            <span>Levels</span>
            <span>Forms</span>
            <span>Sizes</span>
          </div>
          {COVERAGE.map((row) => (
            <div
              key={row.name}
              className="coverage-row"
                style={{
                padding: "17px 0",
                borderBottom: "1px solid #ddd7ca",
                alignItems: "center",
              }}
            >
              <b style={{ fontSize: 17, fontWeight: 500 }}>{row.name}</b>
              <Chips values={row.levels} color={row.color} />
              <Chips values={row.forms} color={row.color} />
              <Chips values={row.sizes} color={row.color} />
            </div>
          ))}
        </div>

        <Reveal
          as="h3"
          y={14}
          start="top 90%"
          style={{
            margin: "clamp(48px,5.5vw,88px) 0 0",
            fontSize: "clamp(24px,2.4vw,40px)",
            lineHeight: 1.1,
            letterSpacing: "-.038em",
            fontWeight: 500,
            maxWidth: "26ch",
          }}
        >
          The replacement: the same six-state model, filled in completely in all three systems.
        </Reveal>

        <Reveal
          y={0}
          start="top 92%"
          style={{
            marginTop: 30,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(150px,100%),1fr))",
            gap: 1,
            background: "#ddd7ca",
            border: "1px solid #ddd7ca",
          }}
        >
          {STATES.map((s) => (
            <div key={s.label} style={{ background: "#f6f4ef", padding: "26px 16px", textAlign: "center" }}>
              <span
                style={{
                  display: "block",
                  background: s.bg,
                  color: s.color || "#fff",
                  borderRadius: 999,
                  padding: "13px 8px",
                  fontSize: 15,
                  fontWeight: 600,
                  transform: s.press ? "translateY(1px)" : undefined,
                  outline: s.focus ? "2px solid #14130f" : undefined,
                  outlineOffset: s.focus ? 3 : undefined,
                }}
              >
                {s.text || "Save"}
              </span>
              <span style={{ display: "block", marginTop: 18, ...mono, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: s.focus ? "#14130f" : "#6f6a60" }}>
                {s.label}
              </span>
            </div>
          ))}
        </Reveal>

        <p style={{ margin: "22px 0 0", ...mono, fontSize: 11, letterSpacing: ".13em", textTransform: "uppercase", color: "#9a9388", maxWidth: "70ch", lineHeight: 1.9 }}>
          Fill, radius and height change from product to product. States, names and behaviour do not.
        </p>
      </div>

      <Reveal
        y={20}
        scale={0.99}
        start="top 92%"
        style={{ maxWidth: 1560, margin: "clamp(44px,5vw,80px) auto 0", padding: "0 clamp(22px,5.2vw,96px)" }}
      >
        <img src="/assets/figma-anatomy.jpeg" alt="Button hierarchy and anatomy documentation in Figma" style={{ width: "100%", height: "auto", border: "1px solid #ddd7ca" }} />
        <div style={{ marginTop: 12, ...mono, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a9388" }}>
          Fig. 06.1 / Hierarchy and anatomy, documented to the same depth in each system
        </div>
      </Reveal>
    </section>
  );
}
