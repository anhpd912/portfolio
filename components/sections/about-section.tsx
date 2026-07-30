import { Reveal } from "@/components/ui/reveal";
import { ABOUT_PARAGRAPHS, STATS } from "@/lib/about";
import { TOOLKIT_SKILLS } from "@/lib/skills";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="lazy-section py-32">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-16 px-5 sm:px-10 lg:grid-cols-2 lg:px-16">
        <Reveal className="flex flex-col gap-7">
          <h2
            id="about-heading"
            className="m-0 text-[clamp(40px,5vw,64px)] font-bold leading-[0.95] tracking-tighter text-white"
          >
            ENGINEERING WITH PURPOSE<span className="text-accent-a">.</span>
          </h2>
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="m-0 text-base leading-relaxed text-gray-400">
              {paragraph}
            </p>
          ))}
          <div className="mt-2 flex flex-wrap gap-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-accent-a">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="rounded-3xl border border-border-subtle bg-white/5 p-9 backdrop-blur-md">
          <div className="mb-6 text-xs font-semibold tracking-[0.25em] text-gray-400">MY TOOLKIT</div>
          <div className="flex flex-wrap gap-2.5">
            {TOOLKIT_SKILLS.map((skill) => (
              <div
                key={skill}
                className="rounded-full border border-border-subtle px-[18px] py-2.5 text-sm text-gray-300 transition-all hover:border-accent-a hover:text-accent-a hover:shadow-[0_0_15px_rgba(0,223,143,0.3)]"
              >
                {skill}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
