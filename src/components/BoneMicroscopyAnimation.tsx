"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

const SECTION_BG = "#e8e8e8";
const CYCLE_MS   = 11_000;

// ── Organic trabecular holes scattered through each region ────────────────────
// [cx, cy, rx, ry, rotateDeg]
const TRAB_SHAFT: [number,number,number,number,number][] = [
  [98,125,3.0,2.4,12],[111,122,2.6,2.0,-8],[95,135,3.5,2.6,28],[108,138,3.0,2.3,-5],
  [97,148,3.2,2.6,-18],[114,144,2.6,2.3,8],[91,157,3.5,2.6,32],[106,160,3.0,2.3,-12],
  [118,152,2.6,2.3,5],[98,170,3.5,2.8,22],[111,167,3.0,2.3,-22],[92,180,3.2,2.6,14],
  [115,175,2.6,2.3,0],[99,188,3.5,2.8,-8],[113,190,3.0,2.3,20],[90,198,3.5,2.6,32],
  [106,199,3.0,2.3,-14],[118,195,2.6,2.3,6],[96,210,3.5,2.8,26],[110,212,3.0,2.3,-18],
  [91,221,3.2,2.6,15],[115,218,2.6,2.3,0],[99,229,3.5,2.8,-10],[112,231,3.0,2.3,22],
  [90,240,3.5,2.6,32],[105,242,3.0,2.3,-12],[118,236,2.6,2.3,5],[96,252,3.5,2.8,28],
  [110,254,3.0,2.3,-18],[91,263,3.2,2.6,16],[114,259,2.6,2.3,0],[99,271,3.5,2.8,-8],
  [112,273,3.0,2.3,20],[91,282,3.5,2.6,30],[105,284,3.0,2.3,-14],[117,278,2.6,2.3,6],
  [96,293,3.5,2.8,25],[110,295,3.0,2.3,-20],[93,302,3.2,2.6,12],
];
const TRAB_HEAD: [number,number,number,number,number][] = [
  [40,50,3.0,2.6,10],[54,46,2.8,2.3,-15],[64,54,3.2,2.6,20],
  [36,62,3.5,2.8,-5],[51,58,3.0,2.6,25],[64,67,2.8,2.3,0],
  [38,72,3.5,2.8,16],[52,71,3.0,2.3,-20],[62,76,3.2,2.6,10],
  [43,80,3.0,2.3,-10],[56,80,3.5,2.8,5],
];
const TRAB_CONDYLE: [number,number,number,number,number][] = [
  [84,314,3.0,2.2,10],[96,312,3.2,2.4,-14],[108,314,3.0,2.2,20],[118,312,2.8,2.4,0],
  [79,323,3.5,2.2,-8],[91,325,3.2,2.4,24],[103,323,3.0,2.4,6],[116,325,2.8,2.2,-20],
  [86,334,3.0,2.2,15],[100,334,3.2,2.4,0],
];

// ── Growing pores for sick bone ───────────────────────────────────────────────
const PORES = [
  {cx:98, cy:133,rx:13,ry:10},{cx:113,cy:156,rx:10,ry:12},{cx:91, cy:178,rx:14,ry:11},
  {cx:113,cy:200,rx:11,ry:10},{cx:94, cy:222,rx:13,ry:13},{cx:112,cy:244,rx:10,ry:11},
  {cx:93, cy:265,rx:12,ry: 9},{cx:90, cy:145,rx: 7,ry: 6},{cx:114,cy:169,rx: 7,ry: 8},
  {cx:93, cy:211,rx: 8,ry: 7},{cx:111,cy:232,rx: 6,ry: 6},
  {cx:50, cy:48, rx:15,ry:13},{cx:34, cy:66, rx: 9,ry: 8},{cx:64, cy:65, rx:11,ry: 9},{cx:50, cy:75, rx: 7,ry: 6},
  {cx:90, cy:315,rx:12,ry: 7},{cx:118,cy:319,rx:10,ry: 6},{cx:78, cy:326,rx: 8,ry: 6},
];

// ── Helper: scattered trabecular holes ───────────────────────────────────────
function Trabeculae({
  holes, fill, opacity = 1,
}: { holes:[number,number,number,number,number][]; fill:string; opacity?:number }) {
  return (
    <g opacity={opacity}>
      {holes.map(([cx,cy,rx,ry,rot],i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry}
          fill={fill} transform={`rotate(${rot} ${cx} ${cy})`} />
      ))}
    </g>
  );
}

// The complete femur outline path (single organic shape, no rect/circle compositing)
// Traced to match the reference image proportions
const FEMUR_PATH = `
  M 110,54
  C 126,40 148,50 152,72
  C 156,92 146,108 128,116
  C 124,162 122,228 122,295
  C 124,308 138,320 148,340
  C 158,358 148,374 132,368
  C 120,362 110,368 103,374
  C 97,380 86,368 70,368
  C 54,374 44,358 52,340
  C 62,320 76,308 78,295
  C 78,228 76,162 72,116
  C 54,108 36,90 22,68
  C 10,46 10,22 24,10
  C 38,-2 58,-2 70,10
  C 82,22 88,42 96,54
  C 102,56 108,54 110,54
  Z
`;

// Inner medullary canal path (inset ~9px from cortex)
const CANAL_SHAFT = `M 92,118 C 90,162 89,228 90,300 L 108,300 C 109,228 109,162 107,118 Z`;
const CANAL_COND  = `M 80,300 C 74,310 60,318 56,334 C 52,348 62,358 76,354 C 88,350 96,356 100,362 C 104,356 112,350 124,354 C 138,358 148,348 144,334 C 140,318 126,310 120,300 Z`;

// ── Healthy bone ──────────────────────────────────────────────────────────────
function HealthyBone() {
  return (
    <svg viewBox="0 0 200 380" className="w-full h-full" aria-hidden="true">
      <defs>
        {/* Cylindrical shaft gradient — strong 3D lighting from upper-left */}
        <linearGradient id="h-shaft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#f4e098" />
          <stop offset="15%"  stopColor="#e4c060" />
          <stop offset="38%"  stopColor="#cc9838" />
          <stop offset="65%"  stopColor="#a07220" />
          <stop offset="85%"  stopColor="#7c5010" />
          <stop offset="100%" stopColor="#5c3808" />
        </linearGradient>
        {/* Spherical head gradient — highlight upper-left, dark lower-right */}
        <radialGradient id="h-head-g" cx="34%" cy="28%" r="66%">
          <stop offset="0%"   stopColor="#faf0b0" />
          <stop offset="22%"  stopColor="#e8c868" />
          <stop offset="50%"  stopColor="#c49038" />
          <stop offset="78%"  stopColor="#9a6a18" />
          <stop offset="100%" stopColor="#5c3808" />
        </radialGradient>
        {/* Inner trabecular base */}
        <radialGradient id="h-inner" cx="40%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#c8922a" />
          <stop offset="100%" stopColor="#8c5e10" />
        </radialGradient>
        {/* Drop shadow for depth */}
        <filter id="h-drop" x="-12%" y="-6%" width="124%" height="118%">
          <feDropShadow dx="4" dy="6" stdDeviation="6" floodColor="#4a2e06" floodOpacity="0.42" />
        </filter>
        {/* Clip: inner shaft canal */}
        <clipPath id="hc-shaft"><path d={CANAL_SHAFT} /></clipPath>
        {/* Clip: inner head */}
        <clipPath id="hc-head"><circle cx="48" cy="60" r="26" /></clipPath>
        {/* Clip: condyle inner */}
        <clipPath id="hc-cond"><path d={CANAL_COND} /></clipPath>
      </defs>

      {/* ── Outer cortex — single organic path ── */}
      <path d={FEMUR_PATH} fill="url(#h-shaft)" filter="url(#h-drop)" />

      {/* ── Head overlay for spherical shading ── */}
      {/* The head in the main path uses shaft gradient; overlay circle for proper sphere shading */}
      <clipPath id="hc-head-outer"><circle cx="48" cy="60" r="37" /></clipPath>
      <g clipPath="url(#hc-head-outer)">
        <circle cx="48" cy="60" r="37" fill="url(#h-head-g)" />
      </g>

      {/* ── Inner trabecular regions ── */}
      <g clipPath="url(#hc-shaft)">
        <path d={CANAL_SHAFT} fill="url(#h-inner)" />
        <Trabeculae holes={TRAB_SHAFT} fill={SECTION_BG} />
      </g>
      <g clipPath="url(#hc-head)">
        <circle cx="48" cy="60" r="26" fill="#a87020" />
        <Trabeculae holes={TRAB_HEAD} fill={SECTION_BG} />
      </g>
      <g clipPath="url(#hc-cond)">
        <path d={CANAL_COND} fill="url(#h-inner)" />
        <Trabeculae holes={TRAB_CONDYLE} fill={SECTION_BG} />
      </g>

      {/* ── Surface highlights for 3D gloss ── */}
      {/* Left-edge light rim */}
      <path
        d={FEMUR_PATH}
        fill="none"
        stroke="#f8eaa0"
        strokeWidth="1.4"
        opacity="0.28"
      />
      {/* Specular spot on head */}
      <ellipse cx="36" cy="44" rx="10" ry="8" fill="white" opacity="0.12"
        transform="rotate(-20 36 44)" />
    </svg>
  );
}

// ── Sick / deteriorating bone ─────────────────────────────────────────────────
function SickBone({ d }: { d: number }) {
  const rC = Math.round(196 + d * 58);
  const gC = Math.round(152 + d * 64);
  const bC = Math.round(78  + d * 112);
  const boneCol  = `rgb(${rC},${gC},${bC})`;
  const lightCol = `rgb(${Math.min(255,Math.round(rC*1.24))},${Math.min(255,Math.round(gC*1.18))},${Math.min(255,Math.round(bC*1.15))})`;
  const darkCol  = `rgb(${Math.round(rC*0.58)},${Math.round(gC*0.54)},${Math.round(bC*0.42)})`;
  const innerCol = `rgb(${Math.round(rC*0.78)},${Math.round(gC*0.74)},${Math.round(bC*0.58)})`;
  const bodyOp  = Math.max(0.50, 0.95 - d * 0.36);
  const trabOp  = Math.max(0, 1 - d * 2.0);

  return (
    <svg viewBox="0 0 200 380" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="s-shaft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor={lightCol} />
          <stop offset="22%"  stopColor={boneCol}  />
          <stop offset="52%"  stopColor={innerCol} />
          <stop offset="80%"  stopColor={darkCol}  />
          <stop offset="100%" stopColor={`rgb(${Math.round(rC*0.45)},${Math.round(gC*0.4)},${Math.round(bC*0.3)})`} />
        </linearGradient>
        <radialGradient id="s-head-g" cx="34%" cy="28%" r="66%">
          <stop offset="0%"   stopColor={lightCol} />
          <stop offset="38%"  stopColor={boneCol}  />
          <stop offset="75%"  stopColor={innerCol} />
          <stop offset="100%" stopColor={darkCol}  />
        </radialGradient>
        <clipPath id="sc-shaft"><path d={CANAL_SHAFT} /></clipPath>
        <clipPath id="sc-head"><circle cx="48" cy="60" r="26" /></clipPath>
        <clipPath id="sc-head-outer"><circle cx="48" cy="60" r="37" /></clipPath>
        <clipPath id="sc-cond"><path d={CANAL_COND} /></clipPath>
      </defs>

      {/* Outer cortex */}
      <path d={FEMUR_PATH} fill="url(#s-shaft)" opacity={bodyOp} />

      {/* Head spherical shading */}
      <g clipPath="url(#sc-head-outer)">
        <circle cx="48" cy="60" r="37" fill="url(#s-head-g)" opacity={bodyOp} />
      </g>

      {/* Inner canal — fades as large pores grow */}
      <g clipPath="url(#sc-shaft)">
        <path d={CANAL_SHAFT} fill={innerCol} opacity={bodyOp} />
        <Trabeculae holes={TRAB_SHAFT} fill={SECTION_BG} opacity={trabOp} />
      </g>
      <g clipPath="url(#sc-head)">
        <circle cx="48" cy="60" r="26" fill={innerCol} opacity={bodyOp} />
        <Trabeculae holes={TRAB_HEAD} fill={SECTION_BG} opacity={trabOp} />
      </g>
      <g clipPath="url(#sc-cond)">
        <path d={CANAL_COND} fill={innerCol} opacity={bodyOp} />
        <Trabeculae holes={TRAB_CONDYLE} fill={SECTION_BG} opacity={trabOp} />
      </g>

      {/* Growing large pores */}
      {PORES.map((p,i) => (
        <ellipse key={i} cx={p.cx} cy={p.cy} rx={p.rx*d} ry={p.ry*d}
          fill={SECTION_BG} opacity={Math.min(0.96, d*1.8)} />
      ))}

      {/* Thinning cortex edge */}
      <path d={FEMUR_PATH} fill="none" stroke={darkCol}
        strokeWidth={Math.max(0.4, 2.0 - d*1.8)} opacity={0.45} />

      {/* Stress cracks — late stage */}
      {d > 0.68 && (
        <g opacity={(d-0.68)/0.32} stroke={darkCol} strokeLinecap="round" fill="none">
          <polyline points="94,138 87,155 92,166" strokeWidth="2" />
          <polyline points="111,184 119,198 114,209" strokeWidth="1.8" />
          <line x1="94" y1="226" x2="87" y2="238" strokeWidth="1.4" />
        </g>
      )}
    </svg>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function BoneMicroscopyAnimation() {
  const [d, setD] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let id: number;
    function tick(now: number) {
      const rawT = ((now - start) % CYCLE_MS) / CYCLE_MS;
      let val: number;
      if      (rawT < 0.18) val = 0;
      else if (rawT < 0.75) val = (rawT - 0.18) / 0.57;
      else if (rawT < 0.90) val = 1;
      else                  val = 1 - (rawT - 0.90) / 0.10;
      setD(Math.max(0, Math.min(1, val)));
      id = requestAnimationFrame(tick);
    }
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  const ageLabel =
    d < 0.08 ? "Age 25–35"
    : d < 0.35 ? "Age 40–50"
    : d < 0.70 ? "Age 55–65"
    : "Age 65+";

  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: SECTION_BG }}
      aria-label="Animation comparing healthy bone to osteoporotic bone"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor:"rgba(67,67,67,0.09)", color:"#434343", border:"1px solid rgba(67,67,67,0.18)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7D549] animate-pulse" aria-hidden="true" />
            Animation · What Happens to Your Bones
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e293b] leading-tight mb-3">
            The Difference Calcium &amp; Vitamin D Makes
          </h2>
          <p className="text-[#555555] text-sm md:text-base max-w-xl mx-auto">
            Watch what happens to bone over the years — when the body gets enough calcium and Vitamin D,
            versus when it does not.
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
            <div className="w-44 h-[330px] relative">
              <HealthyBone />
            </div>
            <div className="mt-4 text-center">
              <p className="text-[#1e293b] font-bold text-base mb-1">Healthy Bone</p>
              <p className="text-[#666666] text-xs leading-snug max-w-[160px]">
                Dense structure — can withstand everyday forces without breaking
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 text-left w-full max-w-[180px]">
              {["Thick cortical shell","Dense inner lattice","Strong & resilient"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-xs text-[#555555]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Deteriorating */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-red-500 shrink-0" aria-hidden="true" />
              <span className="text-red-700 font-bold text-sm">Lacking calcium &amp; Vitamin D</span>
            </div>
            <div className="w-44 h-[330px] relative">
              <SickBone d={d} />
              <div className="absolute top-0 right-0 text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: d<0.1?"rgba(34,197,94,0.18)":d<0.6?"rgba(202,165,10,0.22)":"rgba(220,38,38,0.18)",
                  color:           d<0.1?"#166534"             :d<0.6?"#92400e"              :"#991b1b",
                  border:`1px solid ${d<0.1?"rgba(34,197,94,0.35)":d<0.6?"rgba(202,165,10,0.45)":"rgba(220,38,38,0.35)"}`,
                }}>
                {ageLabel}
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-[#1e293b] font-bold text-base mb-1">Osteoporotic Bone</p>
              <p className="text-[#666666] text-xs leading-snug max-w-[160px]">
                Porous, fragile — may break from a minor fall or bump
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 text-left w-full max-w-[180px]">
              {["Thin, weakened shell","Large holes form throughout","Fracture risk greatly increased"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-xs text-[#555555]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Progress timeline */}
        <div className="mt-10 max-w-md mx-auto">
          <div className="flex justify-between text-[10px] text-[#888888] mb-1.5">
            <span>Age 25</span><span>Age 45</span><span>Age 65+</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor:"rgba(0,0,0,0.12)" }}>
            <div className="h-full rounded-full" style={{
              width:`${d*100}%`,
              backgroundColor: d<0.3?"#22c55e":d<0.65?"#ca8a04":"#ef4444",
              transition:"background-color 0.5s",
            }} />
          </div>
          <p className="text-center text-[#888888] text-[10px] mt-1.5">
            Years of inadequate calcium &amp; Vitamin D passing
          </p>
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
