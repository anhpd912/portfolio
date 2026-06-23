type TagAccent = "raised" | "yellow" | "blue" | "orange" | "red" | "green";

const ACCENT_BG: Record<TagAccent, string> = {
  raised: "bg-surface-raised",
  yellow: "bg-accent-yellow",
  blue: "bg-accent-blue",
  orange: "bg-accent-orange",
  red: "bg-accent-red",
  green: "bg-accent-green",
};

const ROTATION: TagAccent[] = ["yellow", "blue", "green", "orange", "red"];

export function TechTag({ label, index }: { label: string; index?: number }) {
  const accent = index === undefined ? "raised" : ROTATION[index % ROTATION.length];

  return (
    <span
      className={`border-2 border-current px-2 py-1 text-xs font-bold text-text-on-raised ${ACCENT_BG[accent]}`}
    >
      {label}
    </span>
  );
}
