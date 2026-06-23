const TRAITS = ["Builder", "Analytical", "Scalable", "Reliable", "Adaptable", "Problem-solver"];

function TraitRow() {
  return (
    <span className="flex shrink-0 items-center gap-3 px-3">
      {TRAITS.map((trait) => (
        <span key={trait} className="flex items-center gap-3 font-display text-lg font-bold">
          <span aria-hidden="true">★</span>
          {trait}
        </span>
      ))}
    </span>
  );
}

export function TraitMarquee() {
  return (
    <div className="overflow-hidden border-y-2 border-black bg-black py-3 text-white">
      <div className="flex w-max animate-[marquee_20s_linear_infinite]">
        <TraitRow />
        <TraitRow />
      </div>
    </div>
  );
}
