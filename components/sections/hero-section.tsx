"use client";

import { useHeroParallax } from "@/hooks/use-hero-parallax";
import { ChevronIcon } from "@/components/ui/icons";

const HERO_BG_1 =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_outline_fzg37d.jpg";
const HERO_BG_2 =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_iglhwn.jpg";

export function HeroSection() {
  const { sectionRef, revealRef, bg1Ref, bg2Ref, chevronRef } = useHeroParallax();

  return (
    <section id="top" ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={bg1Ref}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_BG_1}')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
            Phan Đức Anh — Java Back-end Developer
          </div>
          <h1 className="m-0 text-[clamp(48px,8vw,120px)] font-black leading-[1.1] tracking-tighter">
            Imagine the Product
          </h1>
        </div>

        <div ref={revealRef} className="absolute inset-0" style={{ clipPath: "circle(0% at 50% 50%)" }}>
          <div
            ref={bg2Ref}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_BG_2}')` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-gray-300">
              Java · Spring Boot · AI &amp; RAG Systems
            </div>
            <div className="gradient-text text-[clamp(48px,8vw,120px)] font-black leading-[1.1] tracking-tighter">
              I Build the Backend
            </div>
          </div>
        </div>

        <div
          ref={chevronRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[chevron-bounce_2s_ease-in-out_infinite] text-gray-400"
        >
          <ChevronIcon size={32} />
        </div>
      </div>
    </section>
  );
}
