import { Reveal } from "@/components/ui/reveal";
import { ICON_MAP } from "@/components/ui/icons";
import { SERVICES } from "@/lib/skills";

export function SkillStackSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="lazy-section py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 max-w-xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-accent-a">
            What I do
          </div>
          <h2 id="skills-heading" className="m-0 text-[clamp(36px,5vw,60px)] font-black leading-tight tracking-tight">
            Skills built for real-world systems
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <Reveal key={service.title}>
                <div className="group relative min-h-60 overflow-hidden rounded-3xl border border-border-subtle bg-white/5 p-10 backdrop-blur-2xl transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-white/30">
                  <div className="absolute right-0 top-0 flex h-[110px] w-[110px] items-start justify-end rounded-bl-[110px] bg-gradient-to-br from-accent-a/[0.18] to-accent-b/[0.18] p-6 text-accent-a">
                    <Icon size={26} />
                  </div>
                  <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
                    0{service.num}
                  </div>
                  <h3 className="mb-3 text-[26px] font-extrabold tracking-tight">{service.title}</h3>
                  <p className="max-w-[380px] font-light leading-relaxed text-gray-400">{service.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
