import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { software } from "@/lib/data";

const levelStyles: Record<string, string> = {
  Expert: "bg-navy-700 text-white",
  Advanced: "bg-accent/15 text-accent-700",
  Proficient: "bg-navy-50 text-navy-700",
};

// Brand colour for each tool — matches the Hero software-icon row.
const brandClass: Record<string, string> = {
  "Autodesk Revit": "bg-brand-revit",
  "Navisworks Manage": "bg-brand-navisworks",
  Dynamo: "bg-brand-dynamo",
  AutoCAD: "bg-brand-autocad",
  "BIM 360 / ACC": "bg-brand-bim360",
  "Carrier HAP": "bg-navy-600",
};

function ToolMark({ name }: { name: string }) {
  const initials = name
    .replace(/[^a-zA-Z\s]/g, "")
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const bg = brandClass[name] ?? "bg-navy-600";
  return (
    <span
      className={`grid h-14 w-14 flex-none place-items-center rounded-xl ${bg} font-display text-xl font-extrabold text-white shadow-soft`}
    >
      {initials}
    </span>
  );
}

export default function Software() {
  return (
    <section id="software" className="bg-white pt-10 pb-24 sm:pt-14 sm:pb-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Tools of the Trade"
            title="Software Expertise"
            description="Daily-driver stack across modeling, coordination, drafting, and load calculations — chosen for their fit to MEP BIM workflows."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {software.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div className="card flex h-full items-start gap-4 p-6">
                <ToolMark name={s.name} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-navy-700">
                      {s.name}
                    </h3>
                    <span
                      className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        levelStyles[s.level]
                      }`}
                    >
                      {s.level}
                    </span>
                  </div>
                  {s.note && (
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">
                      {s.note}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
