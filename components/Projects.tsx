"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectPlaceholder from "./ProjectPlaceholder";
import PhotoCarousel from "./PhotoCarousel";
import ProjectPanel from "./ProjectPanel";
import { projects, type Project } from "@/lib/data";

export default function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-white pt-10 pb-24 sm:pt-14 sm:pb-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects"
            description="A selection of hotels, towers, residences, and industrial developments delivered as MEP modeler and coordinator."
          />
        </Reveal>

        {/* Featured projects — full-width hero cards, stacked with breathing room */}
        <div className="space-y-8 sm:space-y-10">
          {featured.map((p) => (
            <Reveal key={p.name}>
              <FeaturedCard project={p} onOpen={() => setOpenProject(p)} />
            </Reveal>
          ))}
        </div>

        {/* Other projects — existing grid */}
        {rest.length > 0 && (
          <>
            <div className="mt-16 mb-8 flex items-center gap-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-500">
                Other Work
              </p>
              <span className="h-px flex-1 bg-navy-100" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <Reveal key={p.name} delay={(i % 3) * 80}>
                  <article className="card group flex h-full flex-col overflow-hidden p-0">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <ProjectPlaceholder seed={p.name} label={p.location} />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-semibold leading-snug text-navy-700">
                        {p.name}
                      </h3>

                      <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-ink-600">
                        <MapPin size={12} />
                        {p.location}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-600">
                        {p.client && (
                          <span>
                            <span className="font-medium text-navy-700">
                              Client:
                            </span>{" "}
                            {p.client}
                          </span>
                        )}
                        {p.consultant && (
                          <span>
                            <span className="font-medium text-navy-700">
                              Consultant:
                            </span>{" "}
                            {p.consultant}
                          </span>
                        )}
                      </div>

                      <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-700">
                        {p.role}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                        {p.overview}
                      </p>

                      <div className="mt-auto pt-5">
                        <div className="flex flex-wrap gap-1.5">
                          {p.tools.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-navy-100 bg-navy-50/50 px-2 py-1 font-mono text-[11px] font-medium text-navy-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Slide-in panel for the featured project */}
      {openProject && (
        <ProjectPanel
          project={openProject}
          photosBase={`/projects/${openProject.slug}/photos`}
          diagramsBase={`/projects/${openProject.slug}/diagrams`}
          coordinationBase={`/projects/${openProject.slug}/coordination`}
          open
          onClose={() => setOpenProject(null)}
        />
      )}
    </section>
  );
}

function FeaturedCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const photos = (project.photos ?? []).map(
    (p) => `/projects/${project.slug}/photos/${p}`
  );

  return (
    <article className="group card overflow-hidden p-0">
      <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
        {/* Auto-rotating photo carousel */}
        <div className="relative">
          <PhotoCarousel
            photos={photos}
            aspect="aspect-[16/10] lg:aspect-auto lg:h-full"
            alt={project.name}
          />
        </div>

        {/* Meta + CTA */}
        <div className="flex flex-col justify-between p-7 sm:p-9">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-600">
              {project.role}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-navy-700 sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-600">
              <MapPin size={13} />
              {project.location}
              {project.consultant && (
                <>
                  <span className="mx-1.5 h-1 w-1 rounded-full bg-ink-400" />
                  <span>Consultant: {project.consultant}</span>
                </>
              )}
            </p>

            <p className="mt-5 text-base leading-relaxed text-ink-700">
              {project.overview}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-navy-100 bg-navy-50/50 px-2 py-1 font-mono text-[11px] font-medium text-navy-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="mt-7 inline-flex w-full items-center justify-between gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-card sm:w-auto"
          >
            <span className="inline-flex items-center gap-2">
              View Project
              <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-white/70">
                · {project.diagrams?.length ?? 0} drawings
              </span>
            </span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
