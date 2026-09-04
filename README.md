# The Working Manual

A scroll-driven case study on reverse-engineering design systems for three
enterprise products: a CRM and lead pipeline, an operations platform, and an
AI prediction interface.

**Live:** https://design-system-overhaul.vercel.app

---

## About the work

Two live enterprise products and one in development, with no design system, no
documented user flows and no written record of a single decision. The case
study covers reading all three backwards from screens that had already shipped,
auditing every component, type scale and spacing decision, and delivering
research, user flows, a design system per product, and screens rebuilt against
them, while regular delivery continued.

Ten sections, from the component audit (twelve different primary buttons
solving one problem) through token architecture, accessibility repairs and the
outcome.

**Sanyam Sharma** — UX/UI Designer, Design Systems
[sanyam.space](https://sanyam.space) · [LinkedIn](https://linkedin.com/in/sanyamsharma98)

---

## Stack

| | |
|---|---|
| **Framework** | React 18 + Vite |
| **Motion** | GSAP ScrollTrigger (scroll reveals), Lenis (smooth scroll) |
| **Graphics** | Canvas 2D, driven by `gsap.ticker` |
| **Type** | Archivo + Geist Mono |
| **Hosting** | Vercel |

### Motion notes

Scroll reveals fire once on entry rather than scrubbing to scroll position, so
a mismeasured trigger can never strand content at `opacity: 0`; a failsafe
shows anything still hidden once the page settles.

Two canvas pieces carry the argument rather than decorating it. The cover
animates a scattered field of marks resolving onto the page's own 74px lattice.
Section 05 draws three parallel token pipelines descending five shared layers,
looping only while on screen via an `IntersectionObserver`.

### Responsive

Grid tracks are clamped with `minmax(min(Npx, 100%), 1fr)` so no layout can
overflow a narrow viewport. The component audit board and the constraint panel
stack below 900px, and the comparison tables move their row label onto its own
line below 720px.

---

## Running locally

The app lives in `webapp/`.

```bash
cd webapp
npm install
npm run dev        # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # serve the production build
```

## Deploying

Vercel deploys this repo with one non-default setting:

| Setting | Value |
|---|---|
| **Root Directory** | `webapp` |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

No environment variables — the output is fully static.

## Structure

```
webapp/
  index.html
  public/
    assets/            product screenshots, flow maps, spec sheets
    favicon.svg        three product lanes crossed by one shared rule
  src/
    sections/          the ten case study sections, one file each
    components/        Reveal, SectionIntro, PullQuote, GrowBar, FlowFigure
    hooks/             smooth scroll, canvas animations, parallax
    data/              the component audit dataset
    styles/            the shared lattice background
    lib/               GSAP registration, canvas sizing helpers
```

---

Product views are shown with permission. Implementation of the underlying
products was owned by engineering.
