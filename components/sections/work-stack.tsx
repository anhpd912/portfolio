"use client";

import { useState } from "react";
import { ArrowIcon } from "@/components/ui/icons";
import { projects } from "@/lib/projects";

export function WorkStack() {
  const [active, setActive] = useState(0);
  const n = projects.length;
  const activeWork = projects[active];
  const linkHref = activeWork.repo ?? activeWork.href;
  const linkLabel = activeWork.repo ? "View on GitHub" : "View Live Site";

  return (
    <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
      <div>
        <div className="relative h-[min(480px,64vw)]" style={{ perspective: "1200px" }}>
          {projects.map((project, i) => {
            const diff = (i - active + n) % n;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActive(diff === 0 ? (active + 1) % n : i)}
                className="absolute inset-0 overflow-hidden rounded-[20px] border border-border-subtle text-left transition-[transform,opacity] duration-700"
                style={{
                  transformOrigin: "top center",
                  transform: `translateY(${diff * 35}px) scale(${1 - diff * 0.05}) rotateX(${diff * 2}deg)`,
                  zIndex: n - diff,
                  opacity: diff > 2 ? 0 : 1,
                  background: project.gradient,
                }}
              >
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center select-none text-[220px] font-bold leading-none tracking-tighter text-white/[0.06]">
                  {project.letter}
                </span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-base/90" />
                <div className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.2em] text-gray-300">
                  {project.category}
                </div>
              </button>
            );
          })}
        </div>
        <div className="mt-7 flex justify-center gap-2.5">
          {projects.map((project, i) => {
            const diff = (i - active + n) % n;
            return (
              <button
                key={project.id}
                type="button"
                aria-label={`Show ${project.title}`}
                onClick={() => setActive(i)}
                className="h-2 rounded-full transition-all duration-400"
                style={{
                  width: diff === 0 ? 28 : 8,
                  background: diff === 0 ? "var(--color-accent-a)" : "rgba(255,255,255,0.2)",
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="min-h-[380px]">
        <div key={active} className="flex flex-col items-start gap-5">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-a">
            {activeWork.category}
          </div>
          <h3 className="m-0 text-[clamp(28px,3vw,42px)] font-bold leading-[1.05] tracking-tight text-white">
            {activeWork.title}
          </h3>
          <p className="m-0 text-[15px] leading-relaxed text-gray-400">{activeWork.description}</p>
          <div className="flex flex-wrap gap-2">
            {activeWork.tech.map((tag) => (
              <div key={tag} className="rounded-full border border-border-subtle px-3.5 py-1.5 text-xs text-gray-400">
                {tag}
              </div>
            ))}
          </div>
          {linkHref && (
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent-a to-accent-b px-7 py-3.5 text-sm font-bold text-surface-base transition-transform hover:scale-105"
            >
              {linkLabel} <ArrowIcon size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
