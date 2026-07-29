import { SiteNav } from "@/components/sections/site-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { TechStackTicker } from "@/components/sections/tech-stack-ticker";
import { SkillStackSection } from "@/components/sections/skill-stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AboutSection } from "@/components/sections/about-section";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <TechStackTicker />
        <SkillStackSection />
        <ProjectsSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}
