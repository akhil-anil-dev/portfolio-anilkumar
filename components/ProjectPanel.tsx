"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, ImageIcon, MapPin, X } from "lucide-react";
import type { Project } from "@/lib/data";
import PhotoCarousel from "./PhotoCarousel";
import DiagramViewer from "./DiagramViewer";

type Props = {
  project: Project;
  /** Base URL for the project's photos folder (e.g. /projects/quad-malta/photos) */
  photosBase: string;
  /** Base URL for the diagrams folder (e.g. /projects/quad-malta/diagrams) */
  diagramsBase: string;
  /** Base URL for the coordination highlights folder (optional) */
  coordinationBase?: string;
  open: boolean;
  onClose: () => void;
};

export default function ProjectPanel({
  project,
  photosBase,
  diagramsBase,
  coordinationBase,
  open,
  onClose,
}: Props) {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  // Lock scroll while the panel is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Esc to close (only when no diagram viewer is open — the viewer has its own handler)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && viewerIndex === null) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, viewerIndex, onClose]);

  if (!open) return null;

  const photos = (project.photos ?? []).map((p) => `${photosBase}/${p}`);
  const diagrams = (project.diagrams ?? []).map((d) => ({
    src: `${diagramsBase}/${d.src}`,
    label: d.label,
    discipline: d.discipline,
  }));
  const coordination = (project.coordination ?? []).map((c) => ({
    ...c,
    src: coordinationBase ? `${coordinationBase}/${c.src}` : c.src,
  }));

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex justify-end bg-ink-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative flex h-full w-full max-w-4xl flex-col bg-navy-50 shadow-card animate-fade-up"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-ink-900/[0.08] bg-navy-50/90 px-6 py-5 backdrop-blur sm:px-8">
            <div className="min-w-0">
              {project.sector && (
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-600">
                  {project.sector}
                </p>
              )}
              <h2 className="mt-1.5 font-display text-2xl font-semibold leading-tight text-navy-700 sm:text-3xl">
                {project.name}
              </h2>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-600">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} />
                  {project.location}
                </span>
                {project.client && (
                  <span>
                    <span className="text-ink-400">Client:</span>{" "}
                    {project.client}
                  </span>
                )}
                {project.consultant && (
                  <span>
                    <span className="text-ink-400">Consultant:</span>{" "}
                    {project.consultant}
                  </span>
                )}
              </div>
            </div>

            <button
              type="button"
              aria-label="Close panel"
              onClick={onClose}
              className="grid h-10 w-10 flex-none place-items-center rounded-md border border-ink-900/15 bg-white text-ink-700 transition hover:border-ink-900/30 hover:text-navy-700"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8 sm:py-10">
            {/* Photo carousel */}
            <div className="group">
              <PhotoCarousel photos={photos} alt={project.name} />
            </div>

            {/* Overview + meta */}
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-700">
                  {project.role}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-navy-700">
                  Overview
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-700">
                  {project.overview}
                </p>
                {project.learnings && (
                  <>
                    <h3 className="mt-6 font-display text-xl font-semibold text-navy-700">
                      Key Learnings
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-700">
                      {project.learnings}
                    </p>
                  </>
                )}
              </div>

              <aside className="rounded-2xl border border-ink-900/[0.08] bg-white p-5">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-500">
                  Project Sheet
                </p>
                <dl className="mt-4 space-y-3 text-sm">
                  <Row label="Discipline" value="MEP" />
                  <Row label="LOD" value="300 – 500" />
                  <Row label="Stages" value="IFA · IFC · As-Built" />
                  <Row label="Diagrams" value={`${diagrams.length} sheets`} />
                </dl>
                <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-500">
                  Tools
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-ink-900/10 bg-navy-50 px-2 py-1 font-mono text-[11px] font-medium text-ink-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </aside>
            </div>

            {/* Key Responsibilities & Contributions */}
            {project.responsibilities && project.responsibilities.length > 0 && (
              <div className="mt-12">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-700">
                  On this project
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy-700">
                  Key Responsibilities & Contributions
                </h3>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-3 rounded-xl border border-ink-900/[0.07] bg-white p-4 text-sm leading-relaxed text-ink-700"
                    >
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent/15 text-accent-600">
                        <CheckCircle2 size={13} strokeWidth={2.4} />
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* BIM Coordination Highlights */}
            {coordination.length > 0 && (
              <div className="mt-12">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-700">
                  Coordination Highlights
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy-700">
                  BIM Model & Installation
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  3D MEP coordination model alongside the as-built services on
                  site.
                </p>

                <ul className="mt-6 grid gap-6">
                  {coordination.map((c, i) => (
                    <li key={c.src}>
                      <CoordinationFigure src={c.src} alt={c.alt} caption={c.caption} index={i} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Diagram gallery */}
            {diagrams.length > 0 && (
              <div className="mt-12">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-700">
                      Drawings
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-navy-700">
                      Engineering Diagrams
                    </h3>
                    <p className="mt-1 text-sm text-ink-500">
                      Click any sheet for the full view. Watermarked for portfolio
                      display — originals unchanged.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {diagrams.map((d, i) => (
                    <li key={d.src}>
                      <button
                        type="button"
                        onClick={() => setViewerIndex(i)}
                        className="group/diagram block w-full overflow-hidden rounded-xl border border-ink-900/[0.08] bg-white text-left shadow-soft transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-navy-100">
                          <img
                            src={d.src}
                            alt={d.label}
                            loading="lazy"
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                            className="absolute inset-0 h-full w-full select-none object-cover transition-transform duration-500 ease-out group-hover/diagram:scale-[1.04]"
                          />
                          {/* small watermark tile on thumbnail */}
                          <ThumbWatermark text="ANILKUMAR  N  J" />
                          <span className="absolute right-2 top-2 rounded-md border border-ink-900/10 bg-white/95 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-700 backdrop-blur">
                            {d.discipline}
                          </span>
                        </div>
                        <div className="p-3.5">
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                            Sheet {String(i + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-1 text-sm font-semibold leading-snug text-navy-700">
                            {d.label}
                          </p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="h-6" />
          </div>
        </div>
      </div>

      {/* Fullscreen diagram viewer */}
      {viewerIndex !== null && (
        <DiagramViewer
          diagrams={diagrams}
          index={viewerIndex}
          onClose={() => setViewerIndex(null)}
          onIndexChange={setViewerIndex}
        />
      )}
    </>
  );
}

function CoordinationFigure({
  src,
  alt,
  caption,
  index,
}: {
  src: string;
  alt: string;
  caption?: string;
  index: number;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-white">
      <div className="relative bg-navy-100">
        {!failed ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onError={() => setFailed(true)}
            className="block max-h-[80vh] w-full select-none object-contain"
          />
        ) : (
          <div className="relative flex aspect-[3/4] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-navy-100 to-navy-50 p-8 text-center">
            <div className="absolute inset-0 blueprint-grid-light opacity-50" />
            <div className="relative grid h-14 w-14 place-items-center rounded-full border border-ink-900/10 bg-white shadow-soft">
              <ImageIcon size={20} className="text-ink-400" strokeWidth={1.6} />
            </div>
            <p className="relative mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-500">
              Coordination Image · Coming Soon
            </p>
            <p className="relative mt-2 max-w-md text-xs leading-relaxed text-ink-500">
              Drop the collage at{" "}
              <span className="font-mono text-ink-700">
                /public/projects/quad-malta/coordination/bim-coordination.jpg
              </span>
            </p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="border-t border-ink-900/[0.06] bg-navy-50 px-5 py-3">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-500">
            Highlight · {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink-700">{caption}</p>
        </figcaption>
      )}
    </figure>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-ink-500">{label}</dt>
      <dd className="font-medium text-navy-700">{value}</dd>
    </div>
  );
}

function ThumbWatermark({ text }: { text: string }) {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='240' height='130'>
      <text x='50%' y='50%' fill='rgba(15,23,42,0.18)' font-family='ui-monospace,monospace' font-size='12' font-weight='600' letter-spacing='3' text-anchor='middle' transform='rotate(-28, 120, 65)'>${text}</text>
    </svg>`;
  const url = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 mix-blend-multiply"
      style={{
        backgroundImage: url,
        backgroundRepeat: "repeat",
        backgroundSize: "240px 130px",
      }}
    />
  );
}
