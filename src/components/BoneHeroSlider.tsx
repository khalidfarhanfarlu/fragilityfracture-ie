"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ── Bone cross-section SVG (deterministic, no Math.random) ─────────────────
function BoneCrossSection({ stage }: { stage: "healthy" | "warning" | "danger" }) {
  const size = 160;
  const cx = 80, cy = 80, R = 62;

  type DotCfg = { spacing: number; dotR: number; opacity: number; color: string };
  const cfg: DotCfg =
    stage === "healthy"
      ? { spacing: 11, dotR: 3.5, opacity: 0.9, color: "#22c55e" }
      : stage === "warning"
      ? { spacing: 17, dotR: 5,   opacity: 0.75, color: "#E7D549" }
      : { spacing: 26, dotR: 7,   opacity: 0.55, color: "#ef4444" };

  const dots: { x: number; y: number }[] = [];
  let row = 0;
  for (let y = cy - R + cfg.spacing; y <= cy + R - cfg.spacing; y += cfg.spacing * 0.87) {
    const offsetX = row % 2 === 0 ? 0 : cfg.spacing / 2;
    for (let x = cx - R + cfg.spacing + offsetX; x <= cx + R - cfg.spacing; x += cfg.spacing) {
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      if (dist + cfg.dotR < R - 3) {
        dots.push({ x, y });
      }
    }
    row++;
  }

  // For danger stage, remove every 3rd dot to simulate structural breakdown
  const finalDots = stage === "danger" ? dots.filter((_, i) => i % 3 !== 1) : dots;
  const cortexWidth = stage === "healthy" ? 6 : stage === "warning" ? 4 : 2;
  const clipId = `bone-clip-${stage}`;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <circle cx={cx} cy={cy} r={R} />
        </clipPath>
      </defs>
      {/* Marrow background */}
      <circle cx={cx} cy={cy} r={R} fill="rgba(0,0,0,0.35)" />
      {/* Trabecular material (dots) */}
      {finalDots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={cfg.dotR}
          fill={cfg.color}
          opacity={cfg.opacity}
          clipPath={`url(#${clipId})`}
        />
      ))}
      {/* Cortical bone ring */}
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={cfg.color} strokeWidth={cortexWidth} />
      {/* Inner cortex ring */}
      <circle cx={cx} cy={cy} r={R - 10} fill="none" stroke={cfg.color} strokeWidth={1} opacity={0.25} />
    </svg>
  );
}

// ── Slide data ──────────────────────────────────────────────────────────────
const slides = [
  {
    id: 0,
    age: "Ages 20–30",
    label: "Peak Bone Mass",
    headline: ["Strong Bones", "Begin Here"],
    body: "Bone mass peaks between ages 25 and 30. The lifestyle choices you make now — calcium, Vitamin D, and weight-bearing exercise — lay the foundation your skeleton carries for the rest of your life.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80",
    alt: "Active older woman representing lifelong bone health",
    stage: "healthy" as const,
    stageColor: "#22c55e",
    stat: "Peak density reached",
    statSub: "Your bones at their strongest",
  },
  {
    id: 1,
    age: "Ages 35–55",
    label: "Silent Bone Loss",
    headline: ["Bones Begin", "to Thin"],
    body: "After 35, bone breakdown quietly outpaces formation. Women entering menopause can lose up to 20% of bone density in just 5–7 years — with no pain, no warning, no symptoms.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    alt: "Medical professional reviewing bone density scan results",
    stage: "warning" as const,
    stageColor: "#E7D549",
    stat: "Up to 20% density lost",
    statSub: "In 5–7 years post-menopause",
  },
  {
    id: 2,
    age: "Ages 60+",
    label: "Osteoporosis Risk",
    headline: ["When Bones", "Become Fragile"],
    body: "1 in 3 Irish women and 1 in 5 Irish men over 60 are at risk. Osteoporosis has no symptoms — a fragility fracture is often the first sign. Early testing and treatment change outcomes.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=80",
    alt: "Medical consultation about bone fracture risk",
    stage: "danger" as const,
    stageColor: "#ef4444",
    stat: "1 in 3 women affected",
    statSub: "Over age 60 in Ireland",
  },
] as const;

const SLIDE_DURATION = 5500;
const TICK_MS = 80;

// ── Main component ──────────────────────────────────────────────────────────
export default function BoneHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const increment = (100 / SLIDE_DURATION) * TICK_MS;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p + increment >= 100) {
          // schedule next slide outside the state updater
          setTimeout(() => {
            setCurrent((c) => (c + 1) % slides.length);
            setProgress(0);
          }, 0);
          return 100;
        }
        return p + increment;
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, [isPaused, current]);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden bg-[#111111] text-white"
      style={{ minHeight: "600px" }}
      aria-label="Bone health journey — interactive slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background images cross-fade ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.1s ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}
          aria-hidden="true"
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/92 via-[#111111]/65 to-[#111111]/30" />
        </div>
      ))}

      {/* Subtle dot overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(231,213,73,0.6) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          zIndex: 2,
        }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24" style={{ zIndex: 3 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div>
            {/* Stage badge */}
            <div className="mb-5">
              <span
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full"
                style={{
                  backgroundColor: `${slide.stageColor}22`,
                  color: slide.stageColor,
                  border: `1px solid ${slide.stageColor}44`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: slide.stageColor }}
                />
                {slide.age} &nbsp;·&nbsp; {slide.label}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.05] mb-5">
              <span
                className="block"
                style={{
                  color: slide.stageColor,
                  transition: "color 0.8s ease",
                }}
              >
                {slide.headline[0]}
              </span>
              <span className="block text-white">{slide.headline[1]}</span>
            </h1>

            <p className="text-[#cccccc] text-base md:text-[1.05rem] leading-relaxed mb-8 max-w-lg">
              {slide.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/am-i-at-risk"
                className="inline-flex items-center justify-center gap-2 bg-[#E7D549] text-[#434343] hover:bg-[#d4c43e] font-bold px-7 py-3.5 rounded-xl text-base transition-colors shadow-lg shadow-black/30"
              >
                Am I at Risk? <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about-osteoporosis/what-is-osteoporosis"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/25 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl text-base transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Slide indicators */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors text-sm"
              >
                ‹
              </button>
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.label}`}
                  aria-current={i === current ? "true" : undefined}
                  className="rounded-full transition-all duration-400"
                  style={{
                    width: i === current ? "28px" : "8px",
                    height: "8px",
                    backgroundColor:
                      i === current ? slide.stageColor : "rgba(255,255,255,0.25)",
                  }}
                />
              ))}
              <button
                onClick={next}
                aria-label="Next slide"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors text-sm"
              >
                ›
              </button>
            </div>
          </div>

          {/* Right: bone visualisation panel */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-5" aria-hidden="true">
            <div className="text-center">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-0.5"
                style={{ color: slide.stageColor, transition: "color 0.8s" }}
              >
                Bone Microstructure
              </p>
              <p className="text-white/40 text-xs">{slide.age}</p>
            </div>

            {/* Three cross-sections: dimmed on either side, full in centre */}
            <div className="flex items-center gap-4">
              {slides.map((s, i) => {
                const isCurrent = i === current;
                return (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    aria-label={`View ${s.label} bone cross-section`}
                    className="outline-none"
                    style={{
                      transform: isCurrent ? "scale(1)" : "scale(0.55)",
                      opacity: isCurrent ? 1 : 0.28,
                      transition: "transform 0.7s ease, opacity 0.7s ease",
                    }}
                  >
                    <BoneCrossSection stage={s.stage} />
                    {isCurrent && (
                      <p
                        className="text-center text-[11px] mt-2 font-semibold"
                        style={{ color: s.stageColor }}
                      >
                        {s.label}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Density bar */}
            <div className="w-52">
              <div className="flex justify-between text-xs text-white/40 mb-1.5">
                <span>Bone Density</span>
                <span style={{ color: slide.stageColor }}>
                  {slide.stage === "healthy" ? "High" : slide.stage === "warning" ? "Moderate" : "Low"}
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width:
                      slide.stage === "healthy"
                        ? "92%"
                        : slide.stage === "warning"
                        ? "55%"
                        : "20%",
                    backgroundColor: slide.stageColor,
                    transition: "width 0.8s ease, background-color 0.8s ease",
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-white/25 mt-1">
                <span>Osteoporotic</span>
                <span>Peak</span>
              </div>
            </div>

            {/* Stat card */}
            <div
              className="rounded-xl px-5 py-4 text-center w-52 border"
              style={{
                backgroundColor: `${slide.stageColor}12`,
                borderColor: `${slide.stageColor}30`,
              }}
            >
              <p className="text-white font-bold text-lg leading-tight">{slide.stat}</p>
              <p className="text-white/50 text-xs mt-1">{slide.statSub}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10"
        style={{ zIndex: 4 }}
        aria-hidden="true"
      >
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            backgroundColor: slide.stageColor,
            transition: `width ${TICK_MS}ms linear`,
          }}
        />
      </div>

      {/* Wave */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0" style={{ zIndex: 4 }}>
        <svg viewBox="0 0 1440 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 52 L0 26 Q360 0 720 26 Q1080 52 1440 26 L1440 52 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
