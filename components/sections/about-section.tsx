import { Reveal } from "@/components/ui/reveal";
import { ABOUT_PARAGRAPHS, STATS } from "@/lib/about";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="lazy-section relative overflow-hidden py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 sm:grid-cols-2">
        <Reveal>
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-accent-a">About me</div>
          <h2
            id="about-heading"
            className="m-0 text-balance text-[clamp(36px,4.5vw,56px)] font-black leading-tight tracking-tight"
          >
            Backend is not just code. <span className="gradient-text">It&apos;s systems that scale.</span>
          </h2>
        </Reveal>
        <Reveal className="flex flex-col gap-7">
          {ABOUT_PARAGRAPHS.map((paragraph, i) => (
            <p
              key={paragraph.slice(0, 24)}
              className={`m-0 font-light leading-relaxed ${i === 0 ? "text-lg text-gray-300" : "text-gray-400"}`}
            >
              {paragraph}
            </p>
          ))}
          <div className="flex flex-wrap gap-12 border-t border-border-subtle pt-7">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-[44px] font-black leading-none tracking-tight">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
