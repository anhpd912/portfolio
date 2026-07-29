import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from "@/lib/projects";

const NAV_LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SOCIAL_ICONS = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: MailIcon,
  Phone: PhoneIcon,
} as const;

export function SiteFooter() {
  const cvHref = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/cv/${encodeURIComponent("Phan Duc Anh_CV.pdf")}`;

  return (
    <footer id="contact" className="lazy-section border-t border-border-subtle pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-24 flex flex-col items-start gap-8">
          <h2 className="m-0 text-balance text-[clamp(48px,7vw,96px)] font-black leading-[1.05] tracking-tight">
            Let&apos;s build
            <br />
            something <span className="gradient-text">solid.</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL} <MailIcon size={18} />
            </Button>
            <Button href={cvHref} variant="ghost" download>
              Download CV
            </Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="mb-4 text-[22px] font-black tracking-tight">
              DUCANH<span className="text-accent-a">.</span>
            </div>
            <p className="m-0 max-w-xs font-light leading-relaxed text-gray-400">
              Phan Đức Anh — Java Back-end Developer based in Tu Liem, Ha Noi. Open to fresher backend roles.
            </p>
            <p className="mt-3 text-sm text-gray-400">{CONTACT_PHONE}</p>
          </div>
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-gray-600">Navigation</div>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-[15px] text-gray-400 transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-gray-600">Connect</div>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICONS[link.label as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-gray-400 transition-[color,border-color,transform] hover:scale-105 hover:border-white/30 hover:text-white"
                  >
                    {Icon ? <Icon size={18} /> : link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-border-subtle py-7 text-[13px] text-gray-600">
          <span>© {new Date().getFullYear()} Phan Đức Anh. All rights reserved.</span>
          <span className="flex gap-6">
            <a href="https://anhpd912.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Live Portfolio v1
            </a>
            <a href="https://github.com/anhpd912" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              GitHub
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
