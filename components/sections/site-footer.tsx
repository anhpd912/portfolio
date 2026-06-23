import { SOCIAL_LINKS } from "@/lib/projects";

export function SiteFooter() {
  return (
    <footer className="lazy-section flex flex-col gap-6 border-t-2 border-current bg-accent-yellow px-4 py-8 sm:px-8">
      <h2 className="font-display text-5xl font-bold text-text-on-raised sm:text-6xl">
        PHANDUCANH.DEV
      </h2>
      <ul className="flex flex-wrap gap-4">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center border-2 border-current px-4 py-2 font-display font-bold text-text-on-raised hover:underline active:translate-y-0.5"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-sm font-bold text-text-on-raised">
        © {new Date().getFullYear()} Phan Duc Anh — built with Next.js
      </p>
    </footer>
  );
}
