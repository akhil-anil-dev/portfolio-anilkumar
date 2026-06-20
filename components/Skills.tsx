import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { coreSkills, technicalSkills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-navy-50/40 pt-10 pb-24 sm:pt-14 sm:pb-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Core & Technical Skills"
            description="A balance of BIM craft, coordination habits, and engineering judgement — built across hundreds of hours in models and meetings."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="card h-full p-7 sm:p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-600">
                  Core Skills
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                  Self-Assessed
                </span>
              </div>
              <ul className="mt-6 space-y-5">
                {coreSkills.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-navy-700">
                        {s.name}
                      </span>
                      <span className="font-mono text-xs text-ink-500">
                        {s.level}/5
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-navy-600 to-accent"
                        style={{ width: `${(s.level / 5) * 100}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="card h-full p-7 sm:p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-600">
                  Technical Skills
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                  Day-to-Day
                </span>
              </div>
              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {technicalSkills.map((t) => (
                  <li
                    key={t}
                    className="group flex items-center gap-3 rounded-lg border border-navy-100 bg-white px-3.5 py-3 text-sm text-ink-700 transition hover:border-accent/30 hover:bg-accent/[0.04]"
                  >
                    <span className="grid h-5 w-5 flex-none place-items-center rounded-md bg-accent/15 text-accent-600 transition group-hover:bg-accent group-hover:text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
