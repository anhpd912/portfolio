"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/projects";
import { scrollToSection } from "@/lib/scroll-to-section";

const MENU_LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
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
    <footer
      id="contact"
      className="lazy-section relative overflow-hidden border-t border-border-subtle px-5 pb-10 pt-32 sm:px-10 lg:px-16"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-[4vw] text-center leading-[0.8]"
        aria-hidden="true"
      >
        <div className="whitespace-nowrap text-[25vw] font-bold tracking-tighter text-white/5">CONTACT</div>
      </div>

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-16 sm:grid-cols-[2fr_1fr_1fr]">
        <Reveal className="flex flex-col items-start gap-6 sm:col-span-3 lg:col-span-1">
          <h2 className="m-0 text-[clamp(36px,5vw,60px)] font-bold leading-[0.95] tracking-tighter text-white">
            HOW CAN
            <br />
            I HELP<span className="text-accent-a">?</span>
          </h2>
          <p className="m-0 max-w-[420px] text-[15px] leading-relaxed text-gray-400">
            Open to Java Backend roles in Ha Noi. Let&apos;s talk about Spring Boot, RAG systems, or
            your next backend.
          </p>
          <Button href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL} <MailIcon size={18} />
          </Button>
        </Reveal>

        <div>
          <div className="mb-5 text-xs uppercase tracking-[0.25em] text-gray-600">Menu</div>
          <div className="flex flex-col gap-3.5">
            {MENU_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-left text-[15px] text-gray-400 transition-colors hover:text-accent-a"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 text-xs uppercase tracking-[0.25em] text-gray-600">Socials</div>
          <div className="flex flex-col gap-3.5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[15px] text-gray-400 transition-colors hover:text-accent-a"
              >
                {(() => {
                  const Icon = SOCIAL_ICONS[link.label as keyof typeof SOCIAL_ICONS];
                  return Icon ? <Icon size={16} /> : null;
                })()}
                {link.label}
              </a>
            ))}
            <a href={cvHref} download className="text-[15px] text-gray-400 transition-colors hover:text-accent-a">
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-24 flex max-w-[1280px] flex-wrap justify-between gap-3 border-t border-white/[0.08] pt-6 text-[13px] text-gray-600">
        <div>© {new Date().getFullYear()} Phan Đức Anh. All rights reserved.</div>
        <div>Tu Liem · Ha Noi, Vietnam</div>
      </div>
    </footer>
  );
}
