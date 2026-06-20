import { existsSync } from "fs";
import path from "path";
import { AlertCircle, Building2, Layers3, Network, Ruler } from "lucide-react";
import Reveal from "./Reveal";

type Category = {
  label: string;
  icon: typeof Building2;
  /** Filename inside /public/showcase/ — falls back to a procedural SVG if the file is absent. */
  photo: string;
  accent: string;
  description: string;
  highlight?: boolean;
};

const categories: Category[] = [
  {
    label: "Architectural Model",
    icon: Building2,
    photo: "/showcase/architectural-model.jpg",
    accent: "from-navy-600 to-navy-800",
    description: "Building envelopes & spatial layouts",
  },
  {
    label: "Structural Model",
    icon: Layers3,
    photo: "/showcase/structural-model.jpg",
    accent: "from-accent-700 to-navy-800",
    description: "Frames, slabs, columns & connections",
  },
  {
    label: "MEP Model",
    icon: Network,
    photo: "/showcase/mep-model.jpg",
    accent: "from-navy-500 to-navy-900",
    description: "Mechanical · Electrical · Plumbing",
  },
  {
    label: "MEP Coordination",
    icon: AlertCircle,
    photo: "/showcase/mep-coordination.jpg",
    accent: "from-accent-600 to-navy-800",
    description: "Multidisciplinary clash detection",
    highlight: true,
  },
  {
    label: "Shop Drawing / Detail",
    icon: Ruler,
    photo: "/showcase/shop-drawing.jpg",
    accent: "from-navy-700 to-navy-950",
    description: "Sections, elevations & install details",
  },
];

/**
 * Server component — checks file existence at render time so missing
 * /public/showcase/*.jpg files don't trigger 404 image requests in the browser.
 *
 * When all 5 files are added and the page is rebuilt (or dev HMR triggers
 * a re-render) the procedural SVG fallback automatically swaps to the photo.
 */
export default function ProjectShowcase() {
  return (
    <section
      id="showcase"
      aria-label="Deliverables showcase"
      className="relative isolate overflow-hidden bg-navy-800"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blueprint-grid opacity-50"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((c, i) => {
          const hasPhoto = existsSync(
            path.join(process.cwd(), "public", c.photo)
          );
          return (
            <Reveal key={c.label} delay={i * 60}>
              <ShowcaseTile category={c} index={i} hasPhoto={hasPhoto} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ShowcaseTile({
  category,
  index,
  hasPhoto,
}: {
  category: Category;
  index: number;
  hasPhoto: boolean;
}) {
  const { icon: Icon, label, photo, accent, description, highlight } = category;

  return (
    <article className="group relative flex h-full flex-col border-b border-white/10 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:[&:not(:last-child)]:border-r">
      {/* Top label badge — fixed height so all 5 tiles stay aligned */}
      <div className="flex h-11 flex-none items-center justify-between gap-2 border-b border-white/10 bg-navy-900/40 px-4">
        <p className="truncate whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
          {label}
        </p>
        <span className="flex-none font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
          0{index + 1}
        </span>
      </div>

      {/* Visual tile */}
      <div
        className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${accent}`}
      >
        {hasPhoto ? (
          <img
            src={photo}
            alt={label}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 h-full w-full select-none object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <>
            <ShowcaseGraphic kind={index} />
            {highlight && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border border-red-500/60 bg-red-500/15 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-red-300 shadow-[0_0_24px_rgba(239,68,68,0.45)] backdrop-blur">
                ● Clash Detected
              </div>
            )}
          </>
        )}

        {/* Hover icon */}
        <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-md border border-white/20 bg-navy-950/50 text-white/90 backdrop-blur transition group-hover:border-accent/60 group-hover:bg-accent/20 group-hover:text-accent-200">
          <Icon size={16} strokeWidth={1.7} />
        </div>

        {/* Drawing number */}
        <div className="absolute bottom-2 right-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">
          DWG · {String((index + 1) * 102).padStart(4, "0")}
        </div>
      </div>

      {/* Tile description */}
      <p className="px-4 py-3 text-xs leading-relaxed text-white/70">
        {description}
      </p>
    </article>
  );
}

/** Procedural fallback — only rendered when the matching /public/showcase/*.jpg is missing. */
function ShowcaseGraphic({ kind }: { kind: number }) {
  switch (kind) {
    case 0:
      return (
        <svg
          viewBox="0 0 320 240"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <rect
            x="60"
            y="40"
            width="200"
            height="180"
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(255,255,255,0.35)"
          />
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 4 }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={75 + c * 45}
                y={55 + r * 32}
                width="30"
                height="20"
                fill="rgba(96,165,250,0.35)"
                stroke="rgba(255,255,255,0.4)"
              />
            ))
          )}
          <line
            x1="0"
            y1="220"
            x2="320"
            y2="220"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
          />
        </svg>
      );
    case 1:
      return (
        <svg
          viewBox="0 0 320 240"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <line
                x1={80 + i * 30}
                y1={60 + i * 14}
                x2={80 + i * 30}
                y2={200 + i * 14}
                stroke="rgba(96,165,250,0.6)"
              />
              <line
                x1={80 + i * 30}
                y1={60 + i * 14}
                x2={200 + i * 30}
                y2={60 + i * 14}
                stroke="rgba(96,165,250,0.6)"
              />
              <line
                x1={200 + i * 30}
                y1={60 + i * 14}
                x2={200 + i * 30}
                y2={200 + i * 14}
                stroke="rgba(96,165,250,0.6)"
              />
              <line
                x1={80 + i * 30}
                y1={200 + i * 14}
                x2={200 + i * 30}
                y2={200 + i * 14}
                stroke="rgba(96,165,250,0.6)"
              />
              <line
                x1={80 + i * 30}
                y1={60 + i * 14}
                x2={200 + i * 30}
                y2={200 + i * 14}
                stroke="rgba(96,165,250,0.3)"
              />
              <line
                x1={200 + i * 30}
                y1={60 + i * 14}
                x2={80 + i * 30}
                y2={200 + i * 14}
                stroke="rgba(96,165,250,0.3)"
              />
            </g>
          ))}
        </svg>
      );
    case 2:
      return (
        <svg
          viewBox="0 0 320 240"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <line x1="0" y1="90" x2="320" y2="90" stroke="#FB923C" strokeWidth="6" />
          <line x1="0" y1="120" x2="320" y2="120" stroke="#60A5FA" strokeWidth="4" />
          <line x1="0" y1="150" x2="320" y2="150" stroke="#34D399" strokeWidth="5" />
          <line x1="0" y1="180" x2="320" y2="180" stroke="#F87171" strokeWidth="3" />
          <line x1="120" y1="90" x2="120" y2="220" stroke="#FB923C" strokeWidth="3" />
          <line x1="220" y1="120" x2="220" y2="220" stroke="#60A5FA" strokeWidth="3" />
          <circle cx="120" cy="90" r="4" fill="#FB923C" />
          <circle cx="220" cy="120" r="4" fill="#60A5FA" />
        </svg>
      );
    case 3:
      return (
        <svg
          viewBox="0 0 320 240"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <line x1="0" y1="110" x2="320" y2="110" stroke="#60A5FA" strokeWidth="8" />
          <line x1="0" y1="130" x2="320" y2="130" stroke="#34D399" strokeWidth="6" />
          <line x1="160" y1="40" x2="160" y2="220" stroke="#FB923C" strokeWidth="6" />
          <line x1="220" y1="40" x2="220" y2="220" stroke="#A78BFA" strokeWidth="5" />
          <circle
            cx="160"
            cy="120"
            r="18"
            fill="none"
            stroke="#EF4444"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
        </svg>
      );
    case 4:
      return (
        <svg
          viewBox="0 0 320 240"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <rect
            x="60"
            y="60"
            width="200"
            height="120"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
          />
          <line x1="60" y1="100" x2="260" y2="100" stroke="rgba(255,255,255,0.3)" />
          <line x1="60" y1="140" x2="260" y2="140" stroke="rgba(255,255,255,0.3)" />
          <line x1="120" y1="60" x2="120" y2="180" stroke="rgba(255,255,255,0.3)" />
          <line x1="200" y1="60" x2="200" y2="180" stroke="rgba(255,255,255,0.3)" />
          <line x1="60" y1="200" x2="260" y2="200" stroke="rgba(96,165,250,0.6)" />
          <line x1="60" y1="195" x2="60" y2="205" stroke="rgba(96,165,250,0.6)" />
          <line x1="260" y1="195" x2="260" y2="205" stroke="rgba(96,165,250,0.6)" />
          <text
            x="160"
            y="216"
            fontSize="10"
            fill="rgba(96,165,250,0.8)"
            textAnchor="middle"
            fontFamily="ui-monospace"
          >
            2400
          </text>
        </svg>
      );
    default:
      return null;
  }
}
