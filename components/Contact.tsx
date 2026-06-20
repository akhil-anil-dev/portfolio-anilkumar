import {
  Download,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-navy-700 pt-10 pb-24 text-white sm:pt-14 sm:pb-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blueprint-grid opacity-50"
      />
      <div
        aria-hidden
        className="absolute -top-32 right-0 -z-10 h-72 w-[700px] rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let's coordinate your next build."
                description="Available for MEP BIM coordination, modeling, and design support — remote or on-site. Send a brief about your project and I'll respond within one working day."
                light
              />

              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn-accent">
                  <Mail size={16} />
                  {profile.email}
                </a>
                <a href={profile.cvPath} download className="btn-ghost-dark">
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-9">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-300">
                Direct Channels
              </p>

              <ul className="mt-6 space-y-5">
                <ContactRow icon={Mail} label="Email">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-white transition hover:text-accent-300"
                  >
                    {profile.email}
                  </a>
                </ContactRow>

                {profile.phones.map((p) => (
                  <ContactRow
                    key={p.value}
                    icon={Phone}
                    label={`Phone — ${p.label}`}
                  >
                    <a
                      href={p.href}
                      className="text-white transition hover:text-accent-300"
                    >
                      {p.value}
                    </a>
                  </ContactRow>
                ))}

                <ContactRow icon={MapPin} label="Location">
                  <span className="text-white">{profile.location}</span>
                </ContactRow>

                <ContactRow icon={Linkedin} label="LinkedIn">
                  <a
                    href={profile.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition hover:text-accent-300"
                  >
                    {profile.linkedin.label}
                  </a>
                </ContactRow>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-300">
        <Icon size={16} />
      </div>
      <div className="min-w-0">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium">{children}</p>
      </div>
    </li>
  );
}
