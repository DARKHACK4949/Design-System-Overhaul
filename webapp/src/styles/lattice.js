// The continuous 74px lattice background that runs beneath every section.
// Light sections carry dark marks, dark sections carry light marks — same
// geometry throughout so the page reads as one surface, not stacked blocks.
export function latticeStyle(dark) {
  const dot = dark ? "rgba(243,241,236,.07)" : "rgba(20,19,15,.055)";
  const line = dark ? "rgba(243,241,236,.022)" : "rgba(20,19,15,.018)";
  return {
    backgroundColor: dark ? "#0c0b09" : "#f6f4ef",
    backgroundImage: `radial-gradient(circle, ${dot} 1.2px, transparent 1.3px), linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
    backgroundSize: "74px 74px",
    backgroundPosition: "0 0, 37px 37px, 37px 37px",
  };
}

export const COLORS = {
  flame: "#e74c21",
  maroon: "#8a2b1a",
  maroonMid: "#b3452c",
  magenta: "#e83fc8",
  bone: "#f6f4ef",
  ink: "#14130f",
  night: "#0c0b09",
  paper: "#f3f1ec",
};
