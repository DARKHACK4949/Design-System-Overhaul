import Reveal from "./Reveal";

const mono = { fontFamily: "'Geist Mono', monospace" };

export default function SectionIntro({ dark, index, tag, heading, lead, leadColor, maxWidth = 56 }) {
  const border = dark ? "#2b2823" : "#ddd7ca";
  const labelColor = dark ? "#7d766a" : "#9a9388";
  const lc = leadColor || (dark ? "#a8a19a" : "#504c46");

  return (
    <>
      <div
        style={{
          borderTop: `1px solid ${border}`,
          paddingTop: 26,
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "space-between",
          ...mono,
          fontSize: 11,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: labelColor,
        }}
      >
        <span style={{ color: "#e74c21" }}>{index}</span>
        <span>{tag}</span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(330px,100%),1fr))",
          gap: "clamp(28px,4vw,72px)",
          marginTop: "clamp(30px,3.6vw,58px)",
          alignItems: "start",
        }}
      >
        <Reveal
          as="h2"
          y={30}
          start="top 92%"
          style={{
            margin: 0,
            fontSize: "clamp(38px,4.6vw,78px)",
            lineHeight: 0.93,
            letterSpacing: "-.045em",
            fontWeight: 500,
          }}
        >
          {heading}
        </Reveal>
        <Reveal
          as="p"
          y={14}
          start="top 90%"
          style={{
            margin: 0,
            maxWidth: `${maxWidth}ch`,
            fontSize: "clamp(16px,1.18vw,20px)",
            lineHeight: 1.55,
            color: lc,
          }}
        >
          {lead}
        </Reveal>
      </div>
    </>
  );
}
