import { Compass, Layers, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: Layers,
    title: "Precision Modeling",
    body: "Built to LOD 300–500 — accurate geometries, schedules, and families that survive the journey from design to as-built.",
  },
  {
    icon: Workflow,
    title: "Clash-Free Coordination",
    body: "Federated reviews and Navisworks workflows that surface conflicts early and drive resolution with consultants and contractors.",
  },
  {
    icon: Compass,
    title: "Constructable Outcomes",
    body: "Layouts that respect ceiling voids, shaft constraints, and installation sequence — making sites smoother and reviews shorter.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white pt-10 pb-24 sm:pt-14 sm:pb-28"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Building precision into every system."
            description="I'm a BIM coordinator focused on the mechanical, electrical, and plumbing layer of modern construction. From boutique hotels in Malta to towers in Riyadh and Doha, I bring models, drawings, and teams into alignment — so the building gets built, on paper and on site."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="card h-full p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent-600">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy-700">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-700">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
