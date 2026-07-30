"use client";

import { scrollToSection, scrollToTop } from "@/lib/scroll-to-section";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-[88px] items-center justify-between border-b border-border-subtle bg-surface-base/80 px-5 backdrop-blur-md sm:px-10 lg:px-16">
      <button
        type="button"
        onClick={scrollToTop}
        className="font-display text-xl font-bold tracking-tight text-white"
      >
        DUCANH<span className="text-accent-a">.</span>
      </button>
      <div className="flex items-center gap-3 sm:gap-8">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollToSection(link.id)}
            className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-300 transition-colors hover:text-accent-a sm:text-xs sm:tracking-[0.2em]"
          >
            {link.label}
          </button>
        ))}
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle">
          <div className="h-2 w-2 animate-[pulse-dot_2s_infinite] rounded-full bg-accent-a" />
        </div>
      </div>
    </nav>
  );
}
