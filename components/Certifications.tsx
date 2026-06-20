import { Award, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certifications, education } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="education"
      className="bg-navy-50/40 pt-10 pb-24 sm:pt-14 sm:pb-28"
    >
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionHeading eyebrow="Credentials" title="Certifications" />
          </Reveal>
          <ul className="space-y-3">
            {certifications.map((c, i) => (
              <Reveal as="li" key={c.name} delay={i * 70}>
                <div className="card flex items-start gap-4 p-5 sm:p-6">
                  <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-accent/10 text-accent-600">
                    <Award size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-navy-700">{c.name}</p>
                    <p className="mt-0.5 text-sm text-ink-600">
                      {c.issuer && <span>{c.issuer}</span>}
                      {c.issuer && c.year && <span> · </span>}
                      {c.year && <span>{c.year}</span>}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <Reveal>
            <SectionHeading eyebrow="Background" title="Education" />
          </Reveal>
          <ul className="space-y-3">
            {education.map((e, i) => (
              <Reveal as="li" key={e.degree} delay={i * 70}>
                <div className="card flex items-start gap-4 p-5 sm:p-6">
                  <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-navy-100 text-navy-700">
                    <GraduationCap size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-navy-700">{e.degree}</p>
                    <p className="mt-0.5 text-sm text-ink-600">
                      {e.institution}
                      {e.period && <span> · {e.period}</span>}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
