"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ── Animated count-up hook ──────────────────────────────────────────────────
function useCountUp(target: number, duration = 2200, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    function frame(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }, [target, duration, active]);
  return count;
}

// ── "1 in 3" SVG people icons ───────────────────────────────────────────────
function OneInThreeIcon() {
  const figures = [
    { x: 18, highlighted: true },
    { x: 58, highlighted: false },
    { x: 98, highlighted: false },
  ];
  return (
    <svg width="136" height="52" viewBox="0 0 136 52" aria-label="1 in 3 women illustrated" role="img">
      {figures.map(({ x, highlighted }) => {
        const color = highlighted ? "#E7D549" : "rgba(255,255,255,0.28)";
        return (
          <g key={x}>
            {/* Head */}
            <circle cx={x} cy={11} r={9} fill={color} />
            {/* Body */}
            <ellipse cx={x} cy={35} rx={11} ry={14} fill={color} />
          </g>
        );
      })}
      {/* "1" label above first figure */}
      <text x="18" y="52" textAnchor="middle" fontSize="9" fontWeight="700" fill="#E7D549">1 in 3</text>
    </svg>
  );
}

// ── Fracture icon (simple X-ray style crack) ────────────────────────────────
function FractureIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
      <ellipse cx="24" cy="24" rx="18" ry="22" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="11" ry="14" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <polyline points="22,10 18,22 26,22 20,38" stroke="#E7D549" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// ── Ireland map silhouette (simple path) ────────────────────────────────────
function IrelandIcon() {
  return (
    <svg width="42" height="48" viewBox="0 0 42 48" aria-hidden="true">
      {/* Rough Ireland outline — simplified polygon */}
      <path
        d="M20,2 L26,4 L32,8 L36,14 L38,22 L36,30 L32,36 L28,40 L22,44 L16,42 L10,38 L6,32 L4,24 L6,16 L10,10 Z"
        fill="rgba(231,213,73,0.18)"
        stroke="#E7D549"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="24" r="3" fill="#E7D549" />
    </svg>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
export default function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const fractures = useCountUp(30000, 2400, visible);

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

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-4 pb-10"
      aria-label="Key osteoporosis statistics for Ireland"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-xl border border-[#e0e0e0]">

          {/* ── Card 1: 300K–500K people ── */}
          <div className="relative overflow-hidden group" style={{ minHeight: "360px" }}>
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80"
              alt="Active older woman representing the Irish population affected by osteoporosis"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            {/* Gradient overlay — stronger at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-[#111111]/20" />

            {/* Top badge */}
            <div className="absolute top-4 left-4">
              <IrelandIcon />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p
                className="text-5xl font-extrabold text-[#E7D549] leading-none mb-2"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(16px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
              >
                300K–500K
              </p>
              <p className="text-white/80 text-sm leading-snug">
                people in Ireland estimated to have osteoporosis
              </p>
              <div className="mt-3 h-1 bg-white/15 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#E7D549]"
                  style={{
                    width: visible ? "72%" : "0%",
                    transition: "width 1.8s ease 0.3s",
                  }}
                />
              </div>
              <p className="text-[#E7D549]/70 text-[10px] mt-1">
                Many undiagnosed — often discovered after a fracture
              </p>
            </div>
          </div>

          {/* ── Card 2: 1 in 3 women ── */}
          <div className="relative overflow-hidden group sm:border-x border-y sm:border-y-0 border-[#e0e0e0]" style={{ minHeight: "360px" }}>
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=700&q=80"
              alt="Medical consultation representing the risk of fracture for Irish women"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/65 to-[#111111]/25" />

            {/* Top: person icons */}
            <div className="absolute top-5 left-0 right-0 flex justify-center">
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(-10px)",
                  transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
                }}
              >
                <OneInThreeIcon />
              </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p
                className="text-5xl font-extrabold text-[#E7D549] leading-none mb-2"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(16px)",
                  transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
                }}
              >
                1 in 3
              </p>
              <p className="text-white/80 text-sm leading-snug">
                Irish women over 50 will experience an osteoporosis-related fracture
              </p>
              <div className="mt-3 flex gap-1.5">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="flex-1 h-1 rounded-full"
                    style={{
                      backgroundColor: n === 1 ? "#E7D549" : "rgba(255,255,255,0.2)",
                      opacity: visible ? 1 : 0,
                      transition: `opacity 0.5s ease ${0.4 + n * 0.15}s`,
                    }}
                  />
                ))}
              </div>
              <p className="text-[#E7D549]/70 text-[10px] mt-1">
                1 in 5 men over 50 are also affected
              </p>
            </div>
          </div>

          {/* ── Card 3: 30,000+ fractures ── */}
          <div className="relative overflow-hidden group" style={{ minHeight: "360px" }}>
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80"
              alt="Medical imaging representing the thousands of fractures each year in Ireland"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-[#111111]/20" />

            {/* Top badge */}
            <div className="absolute top-5 left-0 right-0 flex justify-center">
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.8s ease 0.4s",
                }}
              >
                <FractureIcon />
              </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p
                className="text-5xl font-extrabold text-[#E7D549] leading-none mb-2 tabular-nums"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(16px)",
                  transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
                }}
              >
                {visible ? fractures.toLocaleString() : "0"}+
              </p>
              <p className="text-white/80 text-sm leading-snug">
                osteoporotic fractures occur in Ireland every year
              </p>
              <div className="mt-3 h-1 bg-white/15 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#E7D549]"
                  style={{
                    width: visible ? "100%" : "0%",
                    transition: "width 2.4s ease 0.3s",
                  }}
                />
              </div>
              <p className="text-[#E7D549]/70 text-[10px] mt-1">
                Many preventable with early diagnosis &amp; treatment
              </p>
            </div>
          </div>

        </div>

        {/* Source line */}
        <p className="text-center text-[11px] text-[#aaaaaa] mt-3">
          Source: Irish Fracture Liaison Service Database (IFLS-DB) 2024 &amp; International Osteoporosis Foundation
        </p>
      </div>
    </section>
  );
}
