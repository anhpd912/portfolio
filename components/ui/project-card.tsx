import type { Project } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { TechTag } from "@/components/ui/tech-tag";

const ACCENT_BG: Record<NonNullable<Project["accent"]>, string> = {
  yellow: "bg-accent-yellow",
  blue: "bg-accent-blue",
  orange: "bg-accent-orange",
  red: "bg-accent-red",
  green: "bg-accent-green",
  raised: "bg-surface-raised",
};

export function ProjectCard({ project }: { project: Project }) {
  const accent = project.accent ?? "raised";
  const meta = [project.role, project.period].filter(Boolean).join(" · ");

  return (
    <article
      className={`flex flex-col gap-4 border-4 border-current p-6 text-text-on-raised shadow-hard transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 ${ACCENT_BG[accent]}`}
    >
      <header className="flex flex-col gap-1">
        <h3 className="font-display text-xl font-bold">{project.title}</h3>
        {meta && <p className="text-xs font-bold uppercase tracking-wide text-text-secondary">{meta}</p>}
      </header>

      <p className="text-sm text-text-secondary">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="flex flex-col gap-2">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-text-on-raised">
              <span aria-hidden className="mt-2 h-2 w-2 shrink-0 border-2 border-current bg-surface-raised" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tech.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.href && (
          <Button href={project.href} variant="ghost" external>
            Live
          </Button>
        )}
        {project.repo && (
          <Button href={project.repo} variant="ghost" external>
            Repo
          </Button>
        )}
      </div>
    </article>
  );
}
