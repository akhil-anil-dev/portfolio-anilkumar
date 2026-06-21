"use client";

import { useEffect, useState } from "react";
import { Building2, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

type Props = {
  /** Image paths under /public — e.g. "/projects/quad-malta/photos/quad-1.jpg" */
  photos: string[];
  /** ms between auto-advance */
  interval?: number;
  /** Aspect ratio class — e.g. "aspect-[16/10]", "aspect-[3/2]" */
  aspect?: string;
  /** Object-fit className */
  fit?: string;
  /** Alt text */
  alt?: string;
};

/**
 * Auto-rotating photo carousel with crossfade transitions.
 *
 * If photos are missing or 404, shows a polished empty state directing
 * the user where to drop the JPGs.
 */
export default function PhotoCarousel({
  photos,
  interval = 4500,
  aspect = "aspect-[16/10]",
  fit = "object-cover",
  alt = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const valid = photos.filter((p) => !failed[p]);

  useEffect(() => {
    if (valid.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % valid.length),
      interval
    );
    return () => clearInterval(id);
  }, [valid.length, interval]);

  // Reset index if it lands past the array after a failure.
  useEffect(() => {
    if (index >= valid.length && valid.length > 0) setIndex(0);
  }, [index, valid.length]);

  const allFailed =
    photos.length > 0 && photos.every((p) => failed[p]);
  const noPhotos = photos.length === 0;

  if (noPhotos || allFailed) {
    return <Placeholder aspect={aspect} />;
  }

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-ink-950`}
    >
      {photos.map((p, i) => (
        <img
          key={p}
          src={p}
          alt={alt}
          // First photo eager so it's prefetched + decoded ASAP; rest lazy.
          loading={i === 0 ? "eager" : "lazy"}
          decoding={i === 0 ? "sync" : "async"}
          fetchPriority={i === 0 ? "high" : "auto"}
          onError={() => setFailed((f) => ({ ...f, [p]: true }))}
          className={`absolute inset-0 h-full w-full ${fit} transition-opacity duration-500 ease-in-out ${
            valid[index] === p ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Subtle bottom gradient for caption legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/55 to-transparent"
      />

      {/* Manual controls (only if more than 1 photo) */}
      {valid.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() =>
              setIndex((i) => (i - 1 + valid.length) % valid.length)
            }
            className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-950/40 text-white opacity-0 backdrop-blur transition hover:bg-ink-950/70 group-hover:opacity-100"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => setIndex((i) => (i + 1) % valid.length)}
            className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-950/40 text-white opacity-0 backdrop-blur transition hover:bg-ink-950/70 group-hover:opacity-100"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {valid.map((p, i) => (
              <button
                key={p}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Placeholder({ aspect }: { aspect: string }) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-gradient-to-br from-paper-100 to-paper-50`}
    >
      <div className="absolute inset-0 blueprint-grid-light opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full border border-ink-900/10 bg-white shadow-soft">
          <Building2 size={22} className="text-ink-400" strokeWidth={1.5} />
        </div>
        <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-500">
          Project Photos · Coming Soon
        </p>
        <p className="mt-2 max-w-md text-xs leading-relaxed text-ink-500">
          Drop 3 images at{" "}
          <span className="font-mono text-ink-700">
            /public/projects/quad-malta/photos/
          </span>{" "}
          named <span className="font-mono text-ink-700">quad-1.jpg</span>,
          <span className="font-mono text-ink-700"> quad-2.jpg</span>,
          <span className="font-mono text-ink-700"> quad-3.jpg</span>
        </p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-ink-400">
          <ImageIcon size={12} /> They'll auto-rotate every 4.5 s with a
          crossfade.
        </p>
      </div>
    </div>
  );
}
