import { Reveal } from "@/components/ui/reveal";
import { ArrowIcon } from "@/components/ui/icons";
import { WorkStack } from "@/components/sections/work-stack";

export function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="lazy-section py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10 lg:px-16">
        <Reveal className="mb-[72px] flex flex-wrap items-end justify-between gap-6">
          <h2
            id="work-heading"
            className="m-0 text-[clamp(40px,5vw,64px)] font-bold leading-[0.95] tracking-tighter text-white"
          >
            RECENT
            <br />
            WORKS<span className="text-accent-a">.</span>
          </h2>
          <a
            href="https://github.com/anhpd912"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-a hover:text-accent-a"
          >
            All Projects on GitHub <ArrowIcon size={16} />
          </a>
        </Reveal>
        <Reveal>
          <WorkStack />
        </Reveal>
      </div>
    </section>
  );
}
