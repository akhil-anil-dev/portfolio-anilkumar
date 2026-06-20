/**
 * Procedural SVG placeholder — navy + accent-blue palette.
 * Swap to a real <img /> once project photos are added.
 */
export default function ProjectPlaceholder({
  seed,
  label,
}: {
  seed: string;
  label: string;
}) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  const r = (n: number) => {
    const x = Math.sin(h + n) * 10000;
    return x - Math.floor(x);
  };
  const id = `g-${Math.abs(h).toString(36)}`;

  const bars = Array.from({ length: 9 }, (_, i) => ({
    x: 24 + i * 32,
    h: 30 + Math.floor(r(i) * 90),
  }));

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900">
      <div className="absolute inset-0 blueprint-grid opacity-80" />

      <svg
        viewBox="0 0 320 200"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {bars.map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={200 - b.h}
              width="22"
              height={b.h}
              fill={`url(#${id})`}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.8"
            />
            {Array.from({ length: Math.floor(b.h / 14) }).map((_, j) => (
              <circle
                key={j}
                cx={b.x + 6 + (j % 2) * 10}
                cy={200 - b.h + 8 + j * 14}
                r="1.2"
                fill="rgba(191, 219, 254, 0.7)"
              />
            ))}
          </g>
        ))}

        <line
          x1="0"
          y1="40"
          x2="320"
          y2="40"
          stroke="rgba(59,130,246,0.6)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="0"
          y1="58"
          x2="320"
          y2="58"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />

        <line
          x1="0"
          y1="200"
          x2="320"
          y2="200"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
        />
      </svg>

      <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[0.06] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
        {label}
      </div>

      <div className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
        DWG · {String(Math.abs(h) % 9999).padStart(4, "0")}
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"
      />
    </div>
  );
}
