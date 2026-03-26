"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

const SECTION_BG = "#e8e8e8";

// ── Section ───────────────────────────────────────────────────────────────────
export default function BoneMicroscopyAnimation() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: SECTION_BG }}
      aria-label="Comparison of healthy bone versus osteoporotic bone"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor:"rgba(67,67,67,0.09)", color:"#434343", border:"1px solid rgba(67,67,67,0.18)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7D549]" aria-hidden="true" />
            What Happens Inside the Bone
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e293b] leading-tight mb-3">
            The Difference Calcium &amp; Vitamin D Makes
          </h2>
          <p className="text-[#555555] text-sm md:text-base max-w-xl mx-auto">
            Osteoporosis develops silently over decades. These images show how bone structure changes
            when the body lacks calcium and Vitamin D over time.
          </p>
        </div>

        {/* Two bones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 items-start max-w-2xl mx-auto">

          {/* Healthy */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0" aria-hidden="true" />
              <span className="text-green-700 font-bold text-sm">With enough calcium &amp; Vitamin D</span>
            </div>
            <div className="w-full aspect-square relative rounded-xl overflow-hidden border border-[#d0d0d0]">
              <Image
                src="/healthy-bone.png"
                alt="Microscopy image of healthy bone showing dense, well-structured trabecular lattice"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80vw, 300px"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-[#1e293b] font-bold text-base mb-1">Healthy Bone</p>
              <p className="text-[#666666] text-xs leading-snug max-w-[180px]">
                Dense structure — can withstand everyday forces without breaking
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 text-left w-full max-w-[200px]">
              {["Thick cortical shell","Dense inner lattice","Strong & resilient"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-xs text-[#555555]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Osteoporotic */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-red-500 shrink-0" aria-hidden="true" />
              <span className="text-red-700 font-bold text-sm">Lacking calcium &amp; Vitamin D</span>
            </div>
            <div className="w-full aspect-square relative rounded-xl overflow-hidden border border-[#d0d0d0]">
              <Image
                src="/osteo-bone.png"
                alt="Microscopy image of osteoporotic bone showing large gaps and thinned, weakened structure"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80vw, 300px"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-[#1e293b] font-bold text-base mb-1">Osteoporotic Bone</p>
              <p className="text-[#666666] text-xs leading-snug max-w-[180px]">
                Porous, fragile — may break from a minor fall or bump
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 text-left w-full max-w-[200px]">
              {["Thin, weakened shell","Large holes form throughout","Fracture risk greatly increased"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-xs text-[#555555]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
          <Link href="/prevention/nutrition-and-calcium"
            className="inline-flex items-center justify-center gap-2 bg-[#E7D549] hover:bg-[#d4c43e] text-[#434343] font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-md">
            How to Get Enough Calcium <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/prevention/vitamin-d"
            className="inline-flex items-center justify-center gap-2 border border-[#43434340] bg-white/70 hover:bg-white text-[#434343] font-bold px-6 py-3 rounded-xl text-sm transition-colors">
            Vitamin D in Ireland
          </Link>
        </div>
      </div>
    </section>
  );
}
