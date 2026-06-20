const items = [
  "EMAAR",
  "Hyatt",
  "Park Hyatt",
  "Ritz-Carlton",
  "Diriyah Company",
  "Lusail Real Estate",
  "Mekanika",
  "Anel MEP",
  "ECL Consultants",
  "CKR",
  "B.Nell",
  "Gulftech",
];

export default function Marquee() {
  const list = [...items, ...items];
  return (
    <section
      aria-label="Selected clients and consultants"
      className="border-y border-navy-100 bg-navy-50/60 py-7"
    >
      <p className="container-page mb-5 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-navy-500">
        Worked With · Clients & Consultants
      </p>
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-50 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-50 to-transparent"
        />
        <div className="flex w-max animate-marquee items-center gap-12 pr-12">
          {list.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-xl font-semibold text-navy-700/45 sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
