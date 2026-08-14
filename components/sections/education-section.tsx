import { Reveal } from "@/components/ui/reveal";
import { TIMELINE } from "@/lib/education";

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-heading" className="lazy-section py-32">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 px-5 sm:px-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-24 lg:px-16">
        <Reveal className="lg:sticky lg:top-[120px] lg:self-start">
          <h2
            id="education-heading"
            className="m-0 text-[clamp(40px,5vw,64px)] font-bold leading-[0.95] tracking-tighter text-white"
          >
            THE
            <br />
            PATH<span className="text-accent-a">.</span>
          </h2>
          <p className="mt-6 mb-0 max-w-[38ch] text-[15px] leading-relaxed text-gray-400">
            From a physics team in Thái Bình, to software engineering at FPT University, to shipping
            Java services at FPT Software.
          </p>
        </Reveal>

        <div className="flex flex-col">
          {TIMELINE.map((entry, i) => (
            <Reveal
              key={entry.org}
              style={{ transitionDelay: `${i * 90}ms` }}
              className="relative border-l border-border-subtle pb-14 pl-8 last:pb-0 sm:pl-12"
            >
              <span
                className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                  entry.current
                    ? "bg-accent-a shadow-[0_0_0_4px_rgba(0,223,143,0.15)]"
                    : "border border-border-subtle bg-surface-base"
                }`}
                aria-hidden="true"
              />

              <div className="text-xs font-semibold tracking-[0.18em] text-gray-500">
                {entry.period}
              </div>

              <h3 className="m-0 mt-3 text-[clamp(21px,2.6vw,30px)] font-bold leading-tight tracking-tight text-white">
                {entry.role}
              </h3>

              <div className="mt-2 text-sm font-semibold text-accent-a">
                {entry.org}
                <span className="font-normal text-gray-500"> · {entry.meta}</span>
              </div>

              <p className="m-0 mt-4 max-w-[54ch] text-[15px] leading-relaxed text-gray-400">
                {entry.detail}
              </p>

              {entry.highlight ? (
                <div className="mt-5 inline-flex rounded-full border border-border-subtle px-[18px] py-2 text-[13px] text-gray-300 transition-colors hover:border-accent-a hover:text-accent-a">
                  {entry.highlight}
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
