import { latticeStyle } from "../styles/lattice";
import SectionIntro from "../components/SectionIntro";
import Reveal from "../components/Reveal";

const mono = { fontFamily: "'Geist Mono', monospace" };

function Figcaption({ dot, label, meta }) {
  return (
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
  );
}

function HaloFigure({ dot, label, meta, src, alt, caption, shadow }) {
  return (
    <Reveal as="figure" y={30} start="top 90%" style={{ margin: 0, border: "1px solid #2b2823", background: "#050504" }}>
      <Figcaption dot={dot} label={label} meta={meta} />
      <div style={{ padding: "clamp(14px,1.6vw,26px)" }}>
        <div style={{ position: "relative" }}>
          <img
            src={src}
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(38px) saturate(1.5)",
              opacity: 0.5,
              transform: "scale(.94) translateY(14px)",
              pointerEvents: "none",
            }}
          />
          <img
            src={src}
            alt={alt}
            style={{ position: "relative", display: "block", width: "100%", height: "auto", border: "1px solid #2b2823", boxShadow: `0 30px 70px -30px ${shadow}` }}
          />
        </div>
      </div>
      <p style={{ margin: 0, padding: "0 clamp(14px,1.6vw,26px) clamp(16px,1.8vw,26px)", fontSize: 14, lineHeight: 1.55, color: "#7d766a" }}>
        {caption}
      </p>
    </Reveal>
  );
}

export default function Screens() {
  return (
    <section style={{ ...latticeStyle(false), padding: "clamp(64px,8vw,132px) 0" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <SectionIntro
          index="08 / The screens"
          tag="Rebuilt against the systems"
          heading={<>What the<br />systems<br />produced.</>}
          lead="Each system was only worth building if it held up in production screens. These are the flows and interfaces drawn against the finished libraries. Every state, every hover, every empty view comes out of the documented components rather than being decided again on the spot."
        />
      </div>

      <div style={{ maxWidth: 1560, margin: "clamp(40px,4.6vw,72px) auto 0", padding: "0 clamp(22px,5.2vw,96px)", display: "flex", flexDirection: "column", gap: "clamp(26px,3vw,48px)" }}>
        <Reveal as="figure" y={30} start="top 90%" style={{ margin: 0, border: "1px solid #2b2823", background: "#050504" }}>
          <Figcaption
            dot="#e74c21"
            label="Fig. 08.1 / CRM & Leads · screen flows"
            meta="Assign lead · Lead detail · Edit · Estimate · Meeting · Search · Graph · Add form · Notifications"
          />
          <div style={{ padding: "clamp(14px,1.6vw,26px)" }}>
            <img
              src="/assets/screens-crm.png"
              alt="CRM and lead management screen flows covering assign lead, lead detail page, edit lead, estimate budget, schedule meeting, search bar, graph, add form and notifications"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <p style={{ margin: 0, padding: "0 clamp(14px,1.6vw,26px) clamp(16px,1.8vw,26px)", fontSize: 14, lineHeight: 1.55, color: "#7d766a", maxWidth: "78ch" }}>
            Nine annotated flows, each step labelled with the interaction that triggers it. The board doubles as the
            handover document: a developer reads the trigger, the resulting state and the component it is built
            from without opening the file.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px,100%),1fr))", gap: "clamp(26px,3vw,48px)" }}>
          <HaloFigure
            dot="#e83fc8"
            label="Fig. 08.2 / AI Platform · applied"
            meta="Sign in · Select match"
            src="/assets/screens-ai.png"
            alt="AI platform sign in and select match screens built against the dark design system"
            shadow="rgba(232,63,200,.55)"
            caption="The conversation surface drawn from the dark library: one prompt field, chips for league and match, and a single accent reserved for the active thread."
          />
          <HaloFigure
            dot="#b3452c"
            label="Fig. 08.3 / Operations · before and after"
            meta="Technician record"
            src="/assets/screens-ops-compare.png"
            alt="Operations technician record shown before the design system and after, with a consistent field pattern, labelled values and a single card rhythm"
            shadow="rgba(179,69,44,.5)"
            caption="Same record, same data. The rebuild gives every field a label above its value, puts the cards on one rhythm, and moves navigation into a single row instead of two competing ones."
          />
        </div>
      </div>
    </section>
  );
}
