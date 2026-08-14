import { Button } from "@/components/ui/button";
import { HeroProfileCard } from "@/components/sections/hero-profile-card";

export function HeroSection() {
  return (
    <section id="top" className="grid-bg relative flex min-h-screen items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="whitespace-nowrap text-[20vw] font-bold leading-none tracking-tighter text-white/[0.02]">
          BACKEND
        </div>
      </div>
      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-5 pb-20 pt-[140px] sm:px-10 lg:grid-cols-2 lg:px-16">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-accent-a" />
            <div className="text-xs font-semibold tracking-[0.25em] text-gray-400">
              JAVA BACK-END DEVELOPER
            </div>
          </div>
          <h1 className="m-0 text-[clamp(52px,8vw,104px)] font-bold leading-[0.92] tracking-tighter text-white">
            SCALABLE
            <br />
            <span className="stroke-text">SYSTEMS</span>
            <span className="text-accent-a">.</span>
          </h1>
          <p className="m-0 max-w-[480px] text-base leading-relaxed text-gray-400">
            I&apos;m Phan Đức Anh, a Java backend developer with 1 year of experience building
            AI-powered backends with Spring Boot, RAG pipelines, and event-driven architecture.
          </p>
          <div className="mt-2 flex flex-wrap gap-4">
            <Button href="#work" variant="accent">
              View My Work <span className="text-lg">→</span>
            </Button>
            <Button href="#contact" variant="ghost">
              <span className="h-2 w-2 rounded-full bg-accent-a" /> Contact Me
            </Button>
          </div>
        </div>
        <HeroProfileCard />
      </div>
    </section>
  );
}
