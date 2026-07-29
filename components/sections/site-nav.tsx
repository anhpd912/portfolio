"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { CONTACT_EMAIL } from "@/lib/projects";

const NAV_LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const navRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = navRef.current;
      if (!el) return;
      const t = Math.min(1, window.scrollY / 50);
      const blur = `blur(${Math.round(8 + 16 * t)}px)`;
      el.style.background = `rgba(255,255,255,${(0.02 + 0.06 * t).toFixed(3)})`;
      el.style.backdropFilter = blur;
      el.style.setProperty("-webkit-backdrop-filter", blur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav
        ref={navRef}
        aria-label="Main"
        className="pointer-events-auto w-full max-w-2xl border border-border-subtle bg-white/[0.02] px-3 py-2.5 pl-6 backdrop-blur-sm transition-[border-radius] duration-400"
        style={{ borderRadius: menuOpen ? "24px" : "9999px" }}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#top" className="font-display text-xl font-black tracking-tight">
            DUCANH<span className="text-accent-a">.</span>
          </a>
          <div className={`items-center gap-8 ${isMobile ? "hidden" : "flex"}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-no-repeat bg-bottom text-sm font-medium text-gray-300 transition-[background-size,color] duration-300 hover:bg-[length:100%_1px] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            {!isMobile && (
              <Button href={`mailto:${CONTACT_EMAIL}`}>Hire Me</Button>
            )}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              className={`h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-lg leading-none ${isMobile ? "flex" : "hidden"}`}
            >
              ☰
            </button>
          </div>
        </div>
        {isMobile && menuOpen && (
          <div className="flex flex-col gap-1 px-2 pb-2 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-semibold text-gray-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 justify-center text-center"
            >
              Hire Me
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
