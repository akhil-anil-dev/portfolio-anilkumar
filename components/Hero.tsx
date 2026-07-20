"use client";

import { useState } from "react";
import { ArrowRight, Download, HardHat, MapPin, User } from "lucide-react";
import { profile } from "@/lib/data";
import SoftwareLogo from "./SoftwareLogo";

const softwareIcons = [
  "Revit",
  "AutoCAD",
  "Navisworks",
  "Dynamo",
  "BIM 360 / ACC",
];

// Sharper trapezoid — diagonal cut from 28% across the top down to 32% of the height on the left.
// Matching pair, with the mat using a slightly wider notch so navy peeks out on the left edge.
const PHOTO_CLIP = "polygon(28% 0, 100% 0, 100% 100%, 0 100%, 0 32%)";
const MAT_CLIP   = "polygon(24% 0, 100% 0, 100% 100%, 0 100%, 0 28%)";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white pt-20 sm:pt-24"
    >
      {/* 3D building wireframe — sits in the upper-right of the LEFT column, behind the text */}
      <BuildingWireframe />

      <div className="container-page relative grid items-start gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
        {/* ─── Left column ─── */}
        <div className="animate-fade-up relative z-10">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-navy-500">
            Portfolio
          </p>

          <h1 className="mt-2 whitespace-nowrap font-display text-[2.5rem] font-extrabold leading-[0.95] tracking-tightest text-navy-700 sm:text-[3.25rem] lg:text-[4.25rem]">
            ANILKUMAR N J
          </h1>

          <div className="mt-3 h-1 w-20 rounded-full bg-accent" />

          <p className="mt-3 font-display text-base font-bold tracking-wide text-navy-700 sm:text-lg">
            MEP BIM COORDINATOR
          </p>
          <p className="mt-2 max-w-xl text-sm leading-snug text-ink-700 sm:text-[15px]">
            {profile.summary}
          </p>

          <div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-navy-100 bg-white/85 px-3 py-2 backdrop-blur">
            <div className="grid h-9 w-9 flex-none place-items-center rounded-full bg-navy-700 text-white shadow-soft">
              <HardHat size={16} strokeWidth={1.8} />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-lg font-extrabold leading-none text-navy-700">
                  7+
                </span>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-600">
                  Years of experience
                </span>
              </div>
              <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-500">
                In BIM modeling & coordination
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-500">
              Software Proficiency
            </p>
            <ul className="mt-2 flex flex-wrap items-end gap-3">
              {softwareIcons.map((name) => (
                <li key={name} className="flex flex-col items-center gap-1">
                  <SoftwareLogo
                    name={name}
                    size={40}
                    className="rounded-lg shadow-soft"
                  />
                  <span className="text-[10px] font-medium text-ink-700">
                    {name === "BIM 360 / ACC" ? "BIM 360 / ACC" : name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-accent">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href={profile.cvPath} download className="btn-outline">
              <Download size={16} />
              Download CV
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-ink-600">
              <MapPin size={14} />
              {profile.location}
            </span>
          </div>
        </div>

        {/* ─── Right column — large angled portrait ─── */}
        <HeroPortrait />
      </div>

      <div className="mt-4 border-t border-navy-100 sm:mt-5" />
    </section>
  );
}

function HeroPortrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative">
      <div className="relative h-[400px] sm:h-[440px] lg:h-[520px]">
        {/* Navy mat behind the photo — fills the diagonal cut-away, slightly larger so navy peeks out */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-navy-600 via-navy-700 to-navy-900 shadow-card"
          style={{ clipPath: MAT_CLIP }}
        />

        {/* Photo on top — slightly smaller trapezoid, sitting inside the mat */}
        <div
          className="absolute inset-0 overflow-hidden bg-navy-100"
          style={{ clipPath: PHOTO_CLIP }}
        >
          {!failed ? (
            <img
              src="/profile.jpg"
              alt={profile.name}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onError={() => setFailed(true)}
              className="absolute inset-0 h-full w-full select-none object-cover"
            />
          ) : (
            <PortraitPlaceholder />
          )}

          <div className="pointer-events-none absolute bottom-4 right-4 rounded-md border border-white/20 bg-navy-900/70 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
            MEP · BIM
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Isometric 3D building wireframe — sits behind the hero content, fading toward
 * the centre so the typography on the left and the photo on the right both
 * have clean stage. Roughly anchored to the middle/right of the container.
 */
function BuildingWireframe() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 800"
      className="pointer-events-none absolute left-1/2 top-12 hidden h-[640px] w-[760px] -translate-x-[58%] text-navy-300/55 lg:block"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <defs>
        <linearGradient id="wireframe-fade" x1="0" x2="1">
          <stop offset="0" stopColor="#1B3268" stopOpacity="0" />
          <stop offset="0.45" stopColor="#1B3268" stopOpacity="1" />
          <stop offset="1" stopColor="#1B3268" stopOpacity="0.85" />
        </linearGradient>
        <mask id="wireframe-mask">
          <rect width="1200" height="800" fill="url(#wireframe-fade)" />
        </mask>
      </defs>

      <g mask="url(#wireframe-mask)">
        {/* outer shell — axonometric building */}
        {/* front face */}
        <path d="M280 720 L280 220 L640 130 L640 660 Z" />
        {/* right face */}
        <path d="M640 130 L900 200 L900 700 L640 660 Z" />
        {/* top face */}
        <path d="M280 220 L640 130 L900 200 L540 295 Z" />

        {/* horizontal floor lines on front face — 10 floors */}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`fl-${i}`}
            x1="280"
            y1={250 + i * 41}
            x2="640"
            y2={160 + i * 41}
          />
        ))}
        {/* floor lines on right face */}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`fr-${i}`}
            x1="640"
            y1={160 + i * 41}
            x2="900"
            y2={230 + i * 41}
          />
        ))}

        {/* vertical columns on front face */}
        {Array.from({ length: 5 }).map((_, i) => {
          const x = 280 + (i + 1) * 60;
          const yTop = 220 - i * 0; // approximate
          return (
            <line
              key={`vf-${i}`}
              x1={x}
              y1={220 - (i + 1) * 22.5}
              x2={x}
              y2={720 - (i + 1) * 22.5}
            />
          );
        })}
        {/* vertical columns on right face */}
        {Array.from({ length: 4 }).map((_, i) => {
          const x = 640 + (i + 1) * 52;
          return (
            <line
              key={`vr-${i}`}
              x1={x}
              y1={130 + (i + 1) * 17.5}
              x2={x}
              y2={660 + (i + 1) * 17.5}
            />
          );
        })}

        {/* small antenna / roof masts */}
        <line x1="460" y1="170" x2="460" y2="130" />
        <line x1="450" y1="140" x2="470" y2="140" />

        {/* ground line */}
        <line x1="80" y1="730" x2="980" y2="730" />
        <line x1="80" y1="745" x2="980" y2="745" strokeDasharray="6 4" />
      </g>
    </svg>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-600 to-navy-800 p-8 text-center text-white">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="relative grid h-16 w-16 place-items-center rounded-full border border-white/20 bg-white/[0.08] backdrop-blur">
        <User size={26} className="text-white/80" strokeWidth={1.5} />
      </div>
      <p className="relative mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
        Portrait · Coming Soon
      </p>
      <p className="relative mt-2 max-w-[260px] text-xs leading-relaxed text-white/70">
        Drop the photo at{" "}
        <span className="font-mono text-white">/public/profile.jpg</span>
      </p>
    </div>
  );
}
