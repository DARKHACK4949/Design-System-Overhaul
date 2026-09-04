import { Fragment } from "react";
import { latticeStyle } from "../styles/lattice";
import SectionIntro from "../components/SectionIntro";
import PullQuote from "../components/PullQuote";
import Reveal from "../components/Reveal";

const mono = { fontFamily: "'Geist Mono', monospace" };

const PRODUCTS = [
  {
    accent: "#e74c21",
    img: "/assets/product-crm.jpeg",
    alt: "CRM and Leads dashboard",
    title: "CRM & Leads",
    rows: [
      ["User", "Salesman"],
      ["Type", "Poppins"],
      ["Density", "Medium"],
      ["Shape", "Pill"],
      ["Status", "Live", "#e74c21"],
    ],
  },
  {
    accent: "#b3452c",
    img: "/assets/product-ops.jpeg",
    alt: "Operations dashboard",
    title: "Operations",
    rows: [
      ["User", "Service master"],
      ["Type", "Lexend Deca"],
      ["Density", "Compact"],
      ["Shape", "Rect"],
      ["Status", "Live", "#d1745c"],
    ],
  },
  {
    accent: "#e83fc8",
    img: "/assets/product-ai.jpeg",
    alt: "AI platform interface",
    title: "AI Platform",
    rows: [
      ["User", "Prediction"],
      ["Type", "Gilroy"],
      ["Density", "Roomy, dark"],
      ["Shape", "Pill"],
      ["Status", "Designed, not launched", "#e83fc8"],
    ],
  },
];

export default function Specimens() {
  return (
    <section style={{ ...latticeStyle(true), color: "#f3f1ec", padding: "clamp(84px,10vw,168px) 0" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <SectionIntro
          dark
          index="01 / The specimens"
          tag="Two live · one in development"
          heading={<>Three ways<br />of working.</>}
          lead="These products were not inconsistent by accident. A salesman working a pipeline needs different affordances than a service master triaging a queue, which is different again from a prediction interface built for conversation. Different users, different densities, different visual histories. Different enough that forcing them into one shared system would have been the wrong answer. Each one needed its own. What none of them had was any system at all."
        />
      </div>

      <div
        style={{
          maxWidth: 1560,
          margin: "clamp(52px,6vw,96px) auto 0",
          padding: "0 clamp(22px,5.2vw,96px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(300px,100%),1fr))",
          gap: "clamp(20px,2.4vw,36px)",
        }}
      >
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.title} as="article" y={40} scale={0.985} start="top 92%" delay={i * 0.08}>
            <div style={{ height: 4, background: p.accent }} />
            <img
              src={p.img}
              alt={p.alt}
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", background: "#000" }}
            />
            <h3 style={{ margin: "20px 0 0", fontSize: "clamp(22px,1.7vw,28px)", letterSpacing: "-.03em", fontWeight: 500 }}>
              {p.title}
            </h3>
            <div
              style={{
                marginTop: 16,
                display: "grid",
                gridTemplateColumns: "74px 1fr",
                gap: "8px 14px",
                ...mono,
                fontSize: 11,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#7d766a",
              }}
            >
              {p.rows.map(([k, v, color]) => (
                <Fragment key={k}>
                  <span>{k}</span>
                  <span style={{ color: color || "#d6d1c9" }}>{v}</span>
                </Fragment>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <PullQuote>
          They did not need one shared system. They needed one way of making decisions, applied three times.
        </PullQuote>
      </div>
    </section>
  );
}
