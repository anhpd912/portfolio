import { SiteNav } from "@/components/sections/site-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { TraitMarquee } from "@/components/sections/trait-marquee";
import { SkillStackSection } from "@/components/sections/skill-stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AboutSection } from "@/components/sections/about-section";
import { InterestsSection } from "@/components/sections/interests-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <TraitMarquee />
        <SkillStackSection />
        <ProjectsSection />
        <AboutSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
