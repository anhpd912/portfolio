import { ProjectCard } from "@/components/ui/project-card";
import { SectionPanel } from "@/components/ui/section-panel";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="lazy-section flex flex-col px-4 py-10 sm:px-8 sm:py-12">
      <SectionPanel className="flex flex-col gap-8">
        <h2 id="projects-heading" className="font-display text-3xl font-bold text-text-on-raised">
          Projects
        </h2>
        {projects.length === 0 ? (
          <p className="text-text-on-raised">More projects coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </SectionPanel>
    </section>
  );
}
