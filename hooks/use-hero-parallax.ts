"use client";

import { useEffect, useRef } from "react";

/**
 * Drives the hero's scroll-linked circle-reveal: as the 300vh hero section
 * scrolls past, the second background layer clips in via a growing circle
 * and both layers scale up slightly (parallax zoom).
 */
export function useHeroParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const total = section.offsetHeight - window.innerHeight;
      const passed = Math.min(Math.max(-section.getBoundingClientRect().top, 0), total);
      const progress = total > 0 ? passed / total : 1;

      if (revealRef.current) {
        revealRef.current.style.clipPath = `circle(${(progress * 150).toFixed(1)}% at 50% 50%)`;
      }
      const scale = `scale(${(1 + 0.15 * progress).toFixed(4)})`;
      if (bg1Ref.current) bg1Ref.current.style.transform = scale;
      if (bg2Ref.current) bg2Ref.current.style.transform = scale;
      if (chevronRef.current) {
        chevronRef.current.style.opacity = Math.max(0, 1 - progress * 4).toFixed(2);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { sectionRef, revealRef, bg1Ref, bg2Ref, chevronRef };
}
