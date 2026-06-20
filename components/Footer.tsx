import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-800 text-white/70">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-accent text-white shadow-soft">
            <span className="font-display text-sm font-extrabold">NJ</span>
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-white">
              {profile.shortName}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
              {profile.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-accent/40 hover:text-accent-300"
          >
            <Mail size={15} />
          </a>
          <a
            href={profile.linkedin.href}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-accent/40 hover:text-accent-300"
          >
            <Linkedin size={15} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-[11px] text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Built with Next.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
