"use client";

import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: "up" | "left" | "right" | "none";
}

/**
 * Wraps children in a div that fades+slides into view when it enters the viewport.
 * Uses IntersectionObserver — no dependencies.
 */
export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("aos-visible");
          }, delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const dirClass =
    direction === "up"
      ? "aos-up"
      : direction === "left"
      ? "aos-left"
      : direction === "right"
      ? "aos-right"
      : "aos-none";

  return (
    <div ref={ref} className={`aos-base ${dirClass} ${className}`}>
      {children}
    </div>
  );
}
