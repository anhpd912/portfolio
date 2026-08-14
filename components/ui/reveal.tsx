"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCE_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

const getReducedMotion = () => window.matchMedia(REDUCE_QUERY).matches;
const getReducedMotionServer = () => false;

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function Reveal({ children, className = "", style, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionServer,
  );

  useEffect(() => {
    if (reduced) return;

    const el = ref.current;
    if (!el) return;

    if (el.getBoundingClientRect().top <= window.innerHeight * 0.85) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "-100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  const shown = visible || reduced;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: reduced ? undefined : shown ? "translateY(0)" : "translateY(20px)",
        transition: reduced ? "none" : "opacity 0.8s ease, transform 0.8s ease",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
