"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { PROCESS_STEPS } from "@/lib/skills";

export function ProcessSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section aria-labelledby="process-heading" className="lazy-section mx-auto max-w-4xl px-5 py-32 sm:px-10">
      <h2
        id="process-heading"
        className="m-0 mb-16 text-center text-[clamp(34px,4.5vw,56px)] font-bold leading-none tracking-tighter text-white"
      >
        HOW I SHIP <span className="stroke-text">BACKENDS</span>
      </h2>
      <div className="flex flex-col">
        {PROCESS_STEPS.map((step, i) => {
          const open = openIdx === i;
          return (
            <Reveal key={step.title} className="border-t border-border-subtle">
              <button
                type="button"
                onClick={() => setOpenIdx(open ? -1 : i)}
                aria-expanded={open}
                className="flex w-full items-center gap-7 px-2 py-7 text-left"
              >
                <span className="w-8 text-sm font-semibold text-accent-a">0{i + 1}</span>
                <span
                  className={`flex-1 text-[clamp(20px,3vw,32px)] font-bold tracking-tight transition-colors ${
                    open ? "text-accent-a" : "text-white"
                  }`}
                >
                  {step.title}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle text-lg text-accent-a">
                  {open ? "−" : "+"}
                </span>
              </button>
              <div
                className="overflow-hidden transition-[max-height] duration-500"
                style={{ maxHeight: open ? "200px" : "0px" }}
              >
                <p className="m-0 max-w-[640px] px-2 pb-7 pl-[60px] text-[15px] leading-relaxed text-gray-400">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
        <div className="border-t border-border-subtle" />
      </div>
    </section>
  );
}
