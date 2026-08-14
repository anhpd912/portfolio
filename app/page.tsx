import { SiteNav } from "@/components/sections/site-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorkSection } from "@/components/sections/work-section";
import { ProcessSection } from "@/components/sections/process-section";
import { EducationSection } from "@/components/sections/education-section";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProcessSection />
        <EducationSection />
      </main>
      <SiteFooter />
    </>
  );
}
