import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-navy-50/40 pt-10 pb-24 sm:pt-14 sm:pb-28"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Career"
            title="Work Experience"
            description="A career spanning India, the Gulf, and Europe — sharpening modeling and coordination expertise across hotels, towers, and industrial projects."
          />
        </Reveal>

        <ol className="relative space-y-6 border-l border-dashed border-navy-200 pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.company}-${i}`} delay={i * 80}>
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[38px] top-3 grid h-5 w-5 place-items-center rounded-full border-2 border-navy-50 bg-accent shadow-soft sm:-left-[46px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>

                <div className="card p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-semibold text-navy-700">
                        {job.role}
                      </h3>
                      <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-600">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-navy-700">
                          <Briefcase size={13} />
                          {job.company}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-ink-400" />
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={13} />
                          {job.location}
                        </span>
                      </p>
                    </div>
                    {job.period && (
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-700">
                        {job.period}
                      </span>
                    )}
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-ink-700"
                      >
                        <span className="mt-[9px] h-1 w-1.5 flex-none rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
