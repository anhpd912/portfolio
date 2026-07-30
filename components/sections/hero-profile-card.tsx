"use client";

import { useDraggableCard } from "@/hooks/use-draggable-card";

const IMG_SRC = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/me/me.jpg`;

export function HeroProfileCard() {
  const { x, y, transition, handlers } = useDraggableCard();

  return (
    <div className="relative flex justify-center" style={{ perspective: "1000px" }}>
      <div
        {...handlers}
        className="relative touch-none"
        style={{ cursor: "grab", transform: `translate(${x}px, ${y}px)`, transition }}
      >
        <div
          className="absolute bottom-full left-1/2 h-[40vh] w-11 -translate-x-1/2 rounded-b-lg"
          style={{ background: "linear-gradient(180deg, transparent, var(--color-surface-panel))" }}
          aria-hidden="true"
        />
        <div className="animate-[float-card_6s_ease-in-out_infinite]">
          <div className="w-[min(320px,80vw)] rounded-3xl border border-border-subtle bg-surface-panel p-3 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
            <div className="flex justify-center py-3.5">
              <div className="h-2.5 w-14 rounded-full border border-border-subtle bg-surface-base" />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border-subtle">
              <img
                src={IMG_SRC}
                alt="Phan Đức Anh"
                draggable={false}
                className="block aspect-[4/5] w-full select-none object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-base/95 [background-position:0_55%]" />
              <div className="absolute bottom-[18px] left-5">
                <div className="text-2xl font-bold tracking-tight text-white">
                  Đức Anh<span className="text-accent-a">.</span>
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-400">
                  Java Back-end Developer
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-2.5 py-3.5 pb-1.5">
              <div className="text-[10px] tracking-[0.2em] text-gray-500">FPT UNIVERSITY · HN</div>
              <div className="h-2 w-2 rounded-full bg-accent-a" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
