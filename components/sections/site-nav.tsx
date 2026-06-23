import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/projects";

const NAV_ITEMS = [
  { href: "#hero", label: "Home", active: true },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#interests", label: "Interests" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b-2 border-current bg-surface-raised px-4 py-3 sm:px-8 sm:py-4"
    >
      <span className="border-2 border-current bg-accent-blue px-3 py-1 font-display text-lg font-bold text-text-on-raised">
        PDA
      </span>
      <div className="flex gap-2">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`min-h-11 border-2 px-3 py-2 font-display font-bold hover:underline active:translate-y-0.5 ${
              item.active
                ? "border-current bg-accent-green text-text-on-raised"
                : "border-transparent text-text-on-base"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
      <Button href={`mailto:${CONTACT_EMAIL}`} variant="yellow">
        Let&apos;s talk
      </Button>
    </nav>
  );
}
