"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Diagram = {
  src: string;
  label: string;
  discipline: string;
};

type Props = {
  diagrams: Diagram[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  /** Watermark text rendered diagonally across the image. */
  watermark?: string;
};

/**
 * Fullscreen diagram viewer with a non-destructive watermark overlay.
 * The original image/PDF on disk is unchanged — the watermark is a
 * CSS pattern rendered above it (pointer-events: none).
 */
export default function DiagramViewer({
  diagrams,
  index,
  onClose,
  onIndexChange,
  watermark = "ANILKUMAR  N  J",
}: Props) {
  const d = diagrams[index];

  // Keyboard nav: Esc to close, ← / → to navigate
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        onIndexChange((index - 1 + diagrams.length) % diagrams.length);
      if (e.key === "ArrowRight")
        onIndexChange((index + 1) % diagrams.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, diagrams.length, onClose, onIndexChange]);

  // Lock body scroll while viewer is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (!d) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-ink-950/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={d.label}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between border-b border-white/10 bg-ink-950/60 px-5 py-3 text-white sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-300">
            {d.discipline} · {index + 1} / {diagrams.length}
          </p>
          <p className="mt-1 truncate font-display text-sm font-semibold sm:text-base">
            {d.label}
          </p>
        </div>
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="grid h-9 w-9 flex-none place-items-center rounded-md border border-white/10 bg-white/[0.04] text-white transition hover:border-white/30 hover:bg-white/[0.08]"
        >
          <X size={16} />
        </button>
      </div>

      {/* Diagram + watermark */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-full max-w-full">
          <img
            src={d.src}
            alt={d.label}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="block max-h-[calc(100vh-160px)] w-auto max-w-full select-none rounded-lg bg-white object-contain shadow-card"
          />

          {/* Watermark — diagonal repeating text grid, sits ABOVE image, doesn't modify file. */}
          <WatermarkOverlay text={watermark} />
        </div>

        {/* Prev / Next */}
        {diagrams.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous diagram"
              onClick={() =>
                onIndexChange((index - 1 + diagrams.length) % diagrams.length)
              }
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-950/70 text-white backdrop-blur transition hover:bg-ink-950 sm:left-6"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next diagram"
              onClick={() =>
                onIndexChange((index + 1) % diagrams.length)
              }
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-950/70 text-white backdrop-blur transition hover:bg-ink-950 sm:right-6"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      <div
        className="border-t border-white/10 bg-ink-950/60 px-3 py-3 sm:px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2 overflow-x-auto pb-1">
          {diagrams.map((dx, i) => (
            <button
              key={dx.src}
              type="button"
              onClick={() => onIndexChange(i)}
              className={`relative h-14 w-20 flex-none overflow-hidden rounded-md border transition ${
                i === index
                  ? "border-accent ring-1 ring-accent/60"
                  : "border-white/10 opacity-70 hover:opacity-100"
              }`}
              aria-label={dx.label}
              title={dx.label}
            >
              <img
                src={dx.src}
                alt=""
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="absolute inset-0 h-full w-full select-none object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Pattern of "ANILKUMAR N J" repeated diagonally.
 * Rendered via an inline SVG `background-image` so it scales with the
 * diagram without modifying the original raster file.
 */
function WatermarkOverlay({ text }: { text: string }) {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='360' height='200'>
      <text x='50%' y='50%' fill='rgba(15,23,42,0.16)' font-family='ui-monospace,monospace' font-size='15' font-weight='600' letter-spacing='4' text-anchor='middle' transform='rotate(-28, 180, 100)'>${text}</text>
    </svg>`;
  const url = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 mix-blend-multiply"
      style={{
        backgroundImage: url,
        backgroundRepeat: "repeat",
        backgroundSize: "360px 200px",
      }}
    />
  );
}
