import { SectionPanel } from "@/components/ui/section-panel";

type SkillGroup = {
  title: string;
  bg: string;
  skills: string[];
};

const GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    bg: "bg-accent-blue/30",
    skills: ["Java", "Python", "TypeScript", "JavaScript"],
  },
  {
    title: "Data & Infra",
    bg: "bg-accent-green/30",
    skills: ["PostgreSQL", "Redis", "MySQL", "Docker", "Nginx", "CI/CD"],
  },
  {
    title: "Tools",
    bg: "bg-accent-yellow/30",
    skills: ["Git/GitHub", "Postman", "Grafana", "Prometheus"],
  },
];

export function SkillStackSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="lazy-section flex flex-col px-4 py-10 sm:px-8 sm:py-12">
      <SectionPanel className="flex flex-col gap-8">
        <h2 id="skills-heading" className="font-display text-3xl font-bold text-text-on-raised">
          Tools and Technologies I Work With
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className={`flex flex-col gap-3 border-2 border-current p-6 shadow-hard ${group.bg}`}
            >
              <h3 className="font-display text-lg font-bold text-text-on-raised">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border-2 border-current bg-surface-raised px-2 py-1 text-xs font-bold text-text-on-raised"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionPanel>
    </section>
  );
}
