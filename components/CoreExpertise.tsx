import {
  Boxes,
  ClipboardCheck,
  FileSpreadsheet,
  GitMerge,
  Layers3,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";

const expertise = [
  { icon: Layers3, lines: ["BIM Modeling", "(Arch, Str & MEP)"] },
  { icon: GitMerge, lines: ["Multidisciplinary", "Coordination"] },
  { icon: ShieldCheck, lines: ["Clash Detection", "& Resolution"] },
  { icon: MessagesSquare, lines: ["RFI Management &", "Coordination Meetings"] },
  { icon: ClipboardCheck, lines: ["Shop Drawings &", "Working Drawings"] },
  { icon: Boxes, lines: ["3D Modeling, Sections,", "Elevations & Details"] },
  { icon: FileSpreadsheet, lines: ["Schedules &", "Documentation"] },
];

export default function CoreExpertise() {
  return (
    <section
      id="expertise"
      className="relative isolate overflow-hidden bg-navy-700 text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blueprint-grid opacity-40"
      />

      <div className="container-page py-10 sm:py-12">
        <Reveal>
          <p className="eyebrow-dark">Core Expertise</p>
        </Reveal>

        {/* Single row of 7 columns with vertical dividers */}
        <ul className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-7 lg:gap-y-0">
          {expertise.map(({ icon: Icon, lines }, i) => (
            <Reveal as="li" key={lines.join(" ")} delay={(i % 7) * 50}>
              <div
                className={`group flex h-full flex-col items-center px-3 text-center transition lg:px-2 ${
                  // vertical separator between columns on desktop
                  i > 0 ? "lg:border-l lg:border-white/10" : ""
                }`}
              >
                <div className="grid h-12 w-12 place-items-center text-accent-300 transition group-hover:text-accent-200 sm:h-14 sm:w-14">
                  <Icon size={32} strokeWidth={1.4} />
                </div>
                <h3 className="mt-3 font-display text-[11px] font-bold uppercase leading-tight tracking-[0.08em] text-white sm:text-xs">
                  {lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </h3>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
