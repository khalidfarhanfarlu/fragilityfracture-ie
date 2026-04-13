"use client";

import { useEffect, useRef, useState } from "react";

// ── Animated count-up hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2200, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    function frame(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }, [target, duration, active]);
  return count;
}

export default function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const population = useCountUp(400000, 2400, visible); // 0 → 400,000
  const fractures = useCountUp(30000, 2400, visible);
  const womenDenom = useCountUp(3, 1200, visible);    // 0 → 3
  const menDenom   = useCountUp(5, 1600, visible);    // 0 → 5
  const cost       = useCountUp(460, 2000, visible);  // 0 → 460

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const stats = [
    {
      label: "People in Ireland",
      value: visible ? population.toLocaleString() : "0",
      note: "estimated to have osteoporosis",
      sub: "Many undiagnosed — often found after a fracture",
    },
    {
      label: "Irish women over 50",
      value: `1 in ${visible ? womenDenom : 0}`,
      note: "will experience an osteoporosis-related fracture",
      sub: `1 in ${visible ? menDenom : 0} men over 50 are also affected`,
    },
    {
      label: "Fractures every year",
      value: `${visible ? fractures.toLocaleString() : "0"}+`,
      note: "osteoporotic fractures in Ireland annually",
      sub: "Many preventable with early diagnosis",
    },
    {
      label: "Economic cost per year",
      value: `€${visible ? cost : 0}m`,
      note: "annual cost of treating fragility fractures",
      sub: "To the Irish economy",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white border-b border-[#eeeeee] py-10"
      aria-label="Key osteoporosis statistics for Ireland"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#eeeeee]">
          {stats.map(({ label, value, note, sub }, i) => (
            <div
              key={i}
              className="px-6 py-6 sm:py-3 flex flex-col items-center text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(10px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#aaaaaa] mb-3">
                {label}
              </p>
              <p className="text-[2.4rem] font-extrabold text-[#434343] tabular-nums leading-none mb-3">
                {value}
              </p>
              <div className="w-8 h-0.5 bg-[#E7D549] rounded-full mb-3" />
              <p className="text-[#666666] text-sm leading-snug mb-1">{note}</p>
              <p className="text-[#aaaaaa] text-xs">{sub}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[11px] text-[#cccccc] mt-8">
          Source: Irish Fracture Liaison Service Database (IFLS-DB) 2024 &amp; International Osteoporosis Foundation
        </p>
      </div>
    </section>
  );
}
