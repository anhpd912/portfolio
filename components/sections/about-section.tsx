import { SectionPanel } from "@/components/ui/section-panel";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="lazy-section flex flex-col px-4 py-10 sm:px-8 sm:py-12">
      <SectionPanel className="flex flex-col gap-6">
        <h2 id="about-heading" className="font-display text-3xl font-bold text-text-on-raised">
          About
        </h2>
        <p className="max-w-4xl text-text-on-raised">
          Fresher backend developer with hands-on experience building RESTful
          APIs and basic caching with Redis. Bachelor of Software Engineering
          from FPT University, Hanoi (Korean Software Engineering
          Specialization). Comfortable working across the stack — PostgreSQL
          and MySQL for data, Docker for packaging, CI/CD for shipping. Still
          early in my career and eager to learn from a strong backend team.
          Open to backend and platform engineering roles — remote or hybrid.
        </p>
      </SectionPanel>
    </section>
  );
}
