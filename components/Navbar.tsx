"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-100 bg-white/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-navy-700 text-white shadow-soft transition group-hover:bg-accent">
            <span className="font-display text-sm font-extrabold">NJ</span>
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-navy-700 sm:inline">
            {profile.shortName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 transition hover:text-navy-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-accent-700 lg:inline-flex"
        >
          Get in touch
          <ArrowRight size={14} />
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-navy-700 transition hover:bg-navy-50 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-ink-700 transition hover:bg-navy-50 hover:text-navy-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-accent px-3 py-2.5 text-sm font-semibold text-white"
            >
              Get in touch
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
