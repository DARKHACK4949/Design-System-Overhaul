import Reveal from "./Reveal";

export default function PullQuote({ children, accent = "#e74c21", maxWidth = 30, marginTop = "clamp(56px,7vw,120px)" }) {
  return (
    <Reveal
      as="p"
      y={20}
      start="top 88%"
      style={{
        margin: `${marginTop} 0 0`,
        maxWidth: `${maxWidth}ch`,
        fontSize: "clamp(26px,3.1vw,54px)",
        lineHeight: 1.06,
        letterSpacing: "-.038em",
        fontWeight: 500,
        borderLeft: `3px solid ${accent}`,
        paddingLeft: "clamp(20px,2.4vw,38px)",
      }}
    >
      {children}
    </Reveal>
  );
}
