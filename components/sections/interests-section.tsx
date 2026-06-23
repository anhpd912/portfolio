import { SectionPanel } from "@/components/ui/section-panel";

type Interest = {
  label: string;
  accent: "yellow" | "blue" | "orange" | "red" | "green";
  span?: "wide" | "tall";
};

const INTERESTS: Interest[] = [
  { label: "Football", accent: "green", span: "wide" },
  { label: "Singing", accent: "red" },
  { label: "Walking", accent: "blue" },
  { label: "Running", accent: "yellow", span: "tall" },
  { label: "Coffee", accent: "orange", span: "wide" },
];

const ACCENT_BORDER: Record<Interest["accent"], string> = {
  yellow: "border-b-accent-yellow",
  blue: "border-b-accent-blue",
  orange: "border-b-accent-orange",
  red: "border-b-accent-red",
  green: "border-b-accent-green",
};

export function InterestsSection() {
  return (
    <section id="interests" aria-labelledby="interests-heading" className="lazy-section flex flex-col px-4 py-10 sm:px-8 sm:py-12">
      <SectionPanel className="flex flex-col gap-8">
        <h2 id="interests-heading" className="font-display text-3xl font-bold text-text-on-raised">
          Outside of Code
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {INTERESTS.map((interest) => (
            <div
              key={interest.label}
              className={`flex min-h-32 items-end border-2 border-b-8 bg-surface-base p-8 shadow-hard transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 ${ACCENT_BORDER[interest.accent]} ${interest.span === "wide" ? "sm:col-span-2" : ""} ${interest.span === "tall" ? "sm:row-span-2 sm:min-h-full" : ""}`}
            >
              <span className="font-display text-2xl font-bold text-text-on-base">
                {interest.label}
              </span>
            </div>
          ))}
        </div>
      </SectionPanel>
    </section>
  );
}
