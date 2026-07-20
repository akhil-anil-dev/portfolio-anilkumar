"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { profile } from "@/lib/data";

/**
 * Profile photo with light zoom + gradient on hover.
 *
 * To use the real photo: save the image as `/public/profile.jpg` (or .webp / .png).
 * The component auto-detects and swaps the placeholder for the real photo.
 */
export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-navy-100 bg-navy-50 shadow-soft transition-shadow duration-500 hover:shadow-card">
      {/* Zooming layer — wraps both the placeholder and the <img>. */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
        {!failed ? (
          <img
            src="/profile.jpg"
            alt={profile.name}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onError={() => setFailed(true)}
            className="h-full w-full select-none object-cover"
          />
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-navy-100 to-white p-6 text-center">
            <div className="absolute inset-0 blueprint-grid-light opacity-50" />
            <div className="relative grid h-14 w-14 place-items-center rounded-full border border-navy-100 bg-white shadow-soft">
              <ImageIcon size={20} className="text-navy-400" strokeWidth={1.6} />
            </div>
            <p className="relative mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-600">
              Portrait · Coming Soon
            </p>
            <p className="relative mt-2 max-w-[220px] text-xs leading-relaxed text-navy-500">
              Save the photo at{" "}
              <span className="font-mono text-navy-700">/public/profile.jpg</span>
            </p>
          </div>
        )}
      </div>

      {/* Hover gradient — rises from the bottom on hover. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/45 via-navy-950/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Top-right corner marker. */}
      <span className="pointer-events-none absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500 transition-colors duration-500 group-hover:text-white/80">
        Portrait · 4:5
      </span>

      {/* Bottom-left caption — fades in on hover. */}
      <figcaption className="pointer-events-none absolute bottom-4 left-4 z-10 flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
          Anilkumar N J
        </span>
      </figcaption>
    </figure>
  );
}
