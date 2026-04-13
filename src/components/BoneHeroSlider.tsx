"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ── Video background hero ────────────────────────────────────────────────────
// VIDEO: Place an MP4 exercise video at /public/videos/hero-exercise.mp4
// Recommended free source: https://www.pexels.com/video/an-older-man-lifting-weights-in-a-gym-3191884/
// Download the HD version and save it to /public/videos/hero-exercise.mp4

export default function BoneHeroSlider() {
  return (
    <section
      className="relative overflow-hidden bg-[#111111] text-white"
      style={{ minHeight: "600px" }}
      aria-label="Osteoporosis and bone health education hero"
    >
      {/* ── Background video ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
        poster="https://plus.unsplash.com/premium_photo-1661284949517-758f7dba7da6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400"
      >
        <source src="/videos/hero-exercise.mp4" type="video/mp4" />
      </video>

      {/* ── Dark gradient overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/70 to-[#111111]/40"
      />

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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 flex flex-col justify-center" style={{ zIndex: 3, minHeight: "600px" }}>
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="mb-5">
            <span
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full"
              style={{
                backgroundColor: "rgba(231,213,73,0.15)",
                color: "#E7D549",
                border: "1px solid rgba(231,213,73,0.3)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#E7D549]" />
              Ireland&apos;s Bone Health Resource
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.05] mb-5">
            <span className="block text-[#E7D549]">Osteoporosis:</span>
            <span className="block text-white">Ireland&apos;s Silent Epidemic</span>
          </h1>

          <p className="text-[#cccccc] text-base md:text-[1.05rem] leading-relaxed mb-8 max-w-xl">
            1 in 3 Irish women and 1 in 5 Irish men over 60 are at risk. Most don&apos;t know it.
            Osteoporosis has no symptoms — a fragility fracture is often the first sign.
            Early testing and treatment change outcomes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/am-i-at-risk"
              className="inline-flex items-center justify-center gap-2 bg-[#E7D549] text-[#434343] hover:bg-[#d4c43e] font-bold px-7 py-3.5 rounded-xl text-base transition-colors shadow-lg shadow-black/30"
            >
              Check Your Risk <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about-osteoporosis/what-is-osteoporosis"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl text-base transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/research/findings-2023"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#E7D549]/50 bg-[#E7D549]/10 hover:bg-[#E7D549]/20 text-[#E7D549] font-bold px-7 py-3.5 rounded-xl text-base transition-colors"
            >
              Irish Research Findings
            </Link>
          </div>
        </div>
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
