"use client";

import { scrollToSection } from "@/lib/scroll-to-section";

type ButtonVariant = "primary" | "ghost" | "accent";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href: string;
  external?: boolean;
  download?: boolean;
  className?: string;
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95",
  ghost:
    "border border-border-subtle bg-surface-panel text-white hover:border-accent-a hover:scale-105 active:scale-95",
  accent:
    "bg-gradient-to-br from-accent-a to-accent-b text-surface-base hover:scale-105 active:scale-95",
};

const BASE_CLASSES =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-bold " +
  "transition-transform duration-200";

export function Button({ children, variant = "primary", href, external, download, className = "" }: ButtonProps) {
  const isInPageAnchor = href.startsWith("#");

  return (
    <a
      href={href}
      className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`}
      onClick={
        isInPageAnchor
          ? (e) => {
              e.preventDefault();
              scrollToSection(href.slice(1));
            }
          : undefined
      }
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: "" } : {})}
    >
      {children}
    </a>
  );
}
