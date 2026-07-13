import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionPanel } from "@/components/ui/section-panel";
import { CONTACT_EMAIL } from "@/lib/projects";

const STATS: { label: string; value: string; accent: "orange" | "red" | "green" | "yellow" }[] = [
  { label: "projects", value: "2+", accent: "orange" },
  { label: "tech stack", value: "5+", accent: "red" },
  { label: "languages", value: "4", accent: "green" },
  { label: "github repos", value: "10+", accent: "yellow" },
];

const STAT_BG: Record<(typeof STATS)[number]["accent"], string> = {
  orange: "bg-accent-orange",
  red: "bg-accent-red",
  green: "bg-accent-green",
  yellow: "bg-accent-yellow",
};

export function HeroSection() {
  return (
    <section id="hero" className="flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-8">
      <SectionPanel className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
        <div className="h-40 w-40 shrink-0 overflow-hidden border-4 border-current shadow-hard">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/me/me.jpg`}
            alt="Phan Duc Anh"
            width={160}
            height={160}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-6">
          <h1 className="font-display text-4xl font-bold text-text-on-raised">Phan Duc Anh</h1>
          <p className="max-w-3xl text-text-on-raised">
            Fresher backend developer from Hanoi, Vietnam, building scalable
            distributed systems and high-throughput services. I work mainly with
            RESTful APIs, relational databases like PostgreSQL and MySQL, and
            basic caching with Redis, deployed through Docker and CI/CD
            pipelines. Bachelor of Software Engineering from FPT University
            (Korean Software Engineering Specialization). Still early in my
            career, hungry to learn, and looking for a backend or platform
            engineering team to grow with — remote or hybrid.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#projects" variant="yellow">
              View Projects
            </Button>
            <Button href={`mailto:${CONTACT_EMAIL}`} variant="ghost">
              Get in Touch
            </Button>
            <Button
              href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/cv/${encodeURIComponent("Phan Duc Anh_CV.pdf")}`}
              variant="blue"
              download
            >
              Download CV
            </Button>
          </div>
          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-1 border-2 border-current p-4 text-text-on-raised shadow-hard ${STAT_BG[stat.accent]}`}
              >
                <span className="font-display text-2xl font-bold">{stat.value}</span>
                <span className="text-xs font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionPanel>
    </section>
  );
}
