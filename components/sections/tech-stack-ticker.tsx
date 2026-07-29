import { ICON_MAP } from "@/components/ui/icons";
import { TECH_STACK } from "@/lib/skills";

function TickerRow() {
  return (
    <div className="flex w-max">
      {TECH_STACK.map((item, i) => {
        const Icon = ICON_MAP[item.icon];
        return (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap px-11 text-lg font-bold tracking-wide text-gray-400"
          >
            <Icon size={26} />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export function TechStackTicker() {
  return (
    <section className="py-24">
      <div className="mb-12 flex flex-col items-center gap-4 px-6 text-center">
        <span className="rounded-full border border-border-subtle px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-accent-a">
          Tech Stack
        </span>
        <h2 className="m-0 text-[clamp(24px,3vw,36px)] font-black leading-tight tracking-tight">
          Powered by a modern backend stack
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-[ticker_40s_linear_infinite]">
          <TickerRow />
          <TickerRow />
        </div>
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-surface-base to-transparent" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-surface-base to-transparent" />
      </div>
    </section>
  );
}
