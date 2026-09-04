import { latticeStyle } from "../styles/lattice";
import Reveal from "../components/Reveal";

const mono = { fontFamily: "'Geist Mono', monospace" };

const LESSONS = [
  { n: "01", title: "Finish the audit first.", body: "The audit is what made every token decision defensible. It should have been complete before the first variable existed." },
  { n: "02", title: "Put the flows on one wall sooner.", body: "The shared pattern was obvious the moment the three journeys could be read side by side. That should have been week one." },
  { n: "03", title: "Specify focus first.", body: "The state nobody requests belongs in the first specification, not the last. Three teams proved that independently." },
  { n: "04", title: "Measure before you start.", body: "Without a baseline I can describe an infrastructure change but not prove an efficiency gain. Cheap to capture, impossible to reconstruct." },
];

export default function Reflection() {
  return (
    <section style={{ ...latticeStyle(true), color: "#f3f1ec", padding: "clamp(84px,10vw,168px) 0 0" }}>
      <div style={{ maxWidth: 1560, margin: "0 auto", padding: "0 clamp(22px,5.2vw,96px)" }}>
        <div
          style={{
            borderTop: "1px solid #2b2823",
            paddingTop: 26,
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            justifyContent: "space-between",
            ...mono,
            fontSize: 11,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "#7d766a",
          }}
        >
          <span style={{ color: "#e74c21" }}>10 / Reflection</span>
          <span>What the work changed in my practice</span>
        </div>

        <Reveal
          as="h2"
          y={30}
          start="top 92%"
          style={{ margin: "clamp(30px,3.6vw,58px) 0 0", fontSize: "clamp(34px,4.2vw,70px)", lineHeight: 1, letterSpacing: "-.045em", fontWeight: 500, maxWidth: "24ch" }}
        >
          The work was clearer because the constraints were real.
        </Reveal>

        <div style={{ marginTop: "clamp(38px,4.4vw,64px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px,100%),1fr))", gap: 1, background: "#2b2823", border: "1px solid #2b2823" }}>
          {LESSONS.map((l) => (
            <div key={l.n} style={{ background: "#0c0b09", padding: "clamp(24px,2.6vw,38px)", minHeight: 210 }}>
              <span style={{ ...mono, fontSize: 10, color: "#7d766a" }}>{l.n}</span>
              <h3 style={{ margin: "18px 0 0", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.03em", fontWeight: 500 }}>{l.title}</h3>
              <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.55, color: "#7d766a" }}>{l.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "clamp(70px,8vw,140px)", borderTop: "1px solid #2b2823" }}>
        <div
          style={{
            maxWidth: 1560,
            margin: "0 auto",
            padding: "clamp(50px,6vw,100px) clamp(22px,5.2vw,96px) clamp(32px,4vw,60px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px,100%),1fr))",
            gap: "clamp(30px,4vw,72px)",
            alignItems: "end",
          }}
        >
          <div>
            <span style={{ ...mono, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "#7d766a" }}>Three products, three systems</span>
            <h2 style={{ margin: "22px 0 0", fontSize: "clamp(34px,4.4vw,76px)", lineHeight: 0.95, letterSpacing: "-.05em", fontWeight: 500 }}>
              A system in motion.
              <br />
              <span style={{ color: "#e74c21" }}>Aligned by craft.</span>
            </h2>
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: "clamp(22px,1.8vw,30px)", letterSpacing: "-.03em", fontWeight: 500 }}>Sanyam Sharma</h3>
            <p style={{ margin: "8px 0 0", fontSize: 17, color: "#a8a19a" }}>UX/UI Designer · Design Systems</p>
            <div style={{ marginTop: 26, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="https://sanyam.space" target="_blank" rel="noopener noreferrer" className="pill-link-primary">
                Portfolio ↗
              </a>
              <a href="https://linkedin.com/in/sanyamsharma98" target="_blank" rel="noopener noreferrer" className="pill-link-ghost">
                LinkedIn ↗
              </a>
            </div>
            <p style={{ margin: "26px 0 0", ...mono, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#7d766a", lineHeight: 2.1 }}>
              Worked with one senior designer
              <br />
              Implementation owned by engineering
              <br />
              Product views shown with permission
            </p>
          </div>
        </div>
        <div
          style={{
            maxWidth: 1560,
            margin: "0 auto",
            padding: "20px clamp(22px,5.2vw,96px) 30px",
            borderTop: "1px solid #2b2823",
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            ...mono,
            fontSize: 10,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "#55504a",
          }}
        >
          <span>Designed with honesty. Built for change.</span>
          <a
            href="#top"
            className="back-to-top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            ↑ Back to top
          </a>
          <span>09 / 09</span>
        </div>
      </div>
    </section>
  );
}
