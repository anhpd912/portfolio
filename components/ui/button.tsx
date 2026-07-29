type ButtonVariant = "primary" | "ghost";

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
    "border border-border-subtle text-white hover:border-white/30 hover:scale-105 active:scale-95",
};

const BASE_CLASSES =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-bold " +
  "transition-transform duration-200";

export function Button({ children, variant = "primary", href, external, download, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: "" } : {})}
    >
      {children}
    </a>
  );
}
