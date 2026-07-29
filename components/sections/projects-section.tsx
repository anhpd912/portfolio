"use client";

import { useState } from "react";
import { ArrowIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { projects } from "@/lib/projects";

const EASE = "cubic-bezier(0.25, 1, 0.5, 1)";

export function ProjectsSection() {
  const [active, setActive] = useState(0);
  const isMobile = useIsMobile();

  return (
    <section id="projects" aria-labelledby="projects-heading" className="lazy-section py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-accent-a">
              Selected projects
            </div>
            <h2 id="projects-heading" className="m-0 text-[clamp(36px,5vw,60px)] font-black leading-tight tracking-tight">
              My Works
            </h2>
          </div>
          <a
            href="https://github.com/anhpd912"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white"
          >
            View GitHub Profile <ArrowIcon size={16} />
          </a>
        </Reveal>

        <Reveal
          className={`flex gap-4 ${isMobile ? "flex-col" : "flex-row"}`}
          onMouseLeave={isMobile ? undefined : () => setActive(0)}
        >
          {projects.map((project, i) => {
            const isActive = active === i;
            const linkHref = project.repo ?? project.href;
            const linkLabel = project.repo ? "View on GitHub" : "View Live Site";

            return (
              <div
                key={project.id}
                role={isMobile ? "button" : undefined}
                tabIndex={isMobile ? 0 : undefined}
                onMouseEnter={isMobile ? undefined : () => setActive(i)}
                onClick={isMobile ? () => setActive(isActive ? -1 : i) : undefined}
                onKeyDown={
                  isMobile
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActive(isActive ? -1 : i);
                        }
                      }
                    : undefined
                }
                className="relative cursor-pointer overflow-hidden rounded-3xl border border-border-subtle"
                style={{
                  height: isMobile ? undefined : "420px",
                  minHeight: isMobile ? (isActive ? "380px" : "84px") : undefined,
                  flex: isMobile ? undefined : `${isActive ? 4 : 0.8} 1 0%`,
                  minWidth: 0,
                  transition: isMobile ? `min-height 0.6s ${EASE}` : `flex 0.6s ${EASE}`,
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-1000"
                  style={{ background: project.gradient, transform: `scale(${isActive ? 1.05 : 1})` }}
                >
                  <span className="select-none text-[220px] font-black leading-none tracking-tighter text-white/[0.06]">
                    {project.letter}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 [background-position:0_40%]" />
                <div className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-bold tracking-[0.2em] text-white/70 backdrop-blur-sm">
                  0{i + 1}
                </div>
                <div
                  className="absolute inset-x-6 bottom-6 transition-[opacity,transform] duration-500"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: `translateY(${isActive ? 0 : 12}px)`,
                    pointerEvents: isActive ? "auto" : "none",
                    transitionDelay: "0.15s",
                  }}
                >
                  <div className="mb-2 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.25em] text-accent-a">
                    {project.category}
                  </div>
                  <div className="mb-1.5 whitespace-nowrap text-[26px] font-extrabold tracking-tight">
                    {project.title}
                  </div>
                  <p className="mb-3 max-w-[460px] text-sm font-light leading-relaxed text-gray-300">
                    {project.description}
                  </p>
                  <div className="mb-3.5 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="whitespace-nowrap rounded-full border border-border-subtle px-2.5 py-1 text-[11px] font-semibold text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {linkHref && (
                    <a
                      href={linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-4.5 py-2 text-[13px] font-bold text-black transition-transform hover:scale-105 active:scale-95"
                    >
                      {linkLabel} <ArrowIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
