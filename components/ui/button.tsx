type ButtonVariant = "yellow" | "blue" | "outline" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  yellow: "bg-accent-yellow text-text-on-raised border-current",
  blue: "bg-accent-blue text-text-on-raised border-current",
  // for dark (surface-base) backgrounds, e.g. Hero
  outline: "bg-transparent text-text-on-base border-current",
  // for light/colored (surface-raised, accent) backgrounds, e.g. ProjectCard
  ghost: "bg-transparent text-text-on-raised border-current",
};

const BASE_CLASSES =
  "inline-flex min-h-11 items-center justify-center gap-2 border-2 px-6 py-3 font-display text-md font-bold " +
  "shadow-hard transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 " +
  "active:translate-x-0 active:translate-y-0 active:shadow-flat";

export function Button({ children, variant = "yellow", href, external }: ButtonProps) {
  const className = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return <button type="button" className={className}>{children}</button>;
}
