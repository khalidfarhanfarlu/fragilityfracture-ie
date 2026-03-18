"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

// ── Pre-defined pore positions (within the bone shape bounds) ───────────────
const PORES = [
  { cx: 80, cy: 108, rx: 9,  ry: 7  },
  { cx: 66, cy: 128, rx: 6,  ry: 8  },
  { cx: 95, cy: 135, rx: 10, ry: 7  },
  { cx: 74, cy: 156, rx: 8,  ry: 6  },
  { cx: 88, cy: 172, rx: 7,  ry: 9  },
  { cx: 63, cy: 150, rx: 5,  ry: 4  },
  { cx: 80,  cy: 55, rx: 13, ry: 11 },
  { cx: 63,  cy: 44, rx: 7,  ry: 6  },
  { cx: 97,  cy: 50, rx: 8,  ry: 7  },
  { cx: 80, cy: 226, rx: 11, ry: 8  },
  { cx: 62, cy: 237, rx: 8,  ry: 6  },
  { cx: 98, cy: 231, rx: 9,  ry: 7  },
  { cx: 76, cy: 190, rx: 6,  ry: 5  },
  { cx: 84, cy: 115, rx: 5,  ry: 4  },
];

// Dense dot positions for healthy trabecular bone
const HEALTHY_DOTS = [
  [80,108],[68,118],[92,118],[74,132],[86,132],[65,145],[95,145],
  [77,158],[83,158],[70,170],[90,170],[80,182],[72,145],[88,145],
  [80, 58],[68, 52],[92, 52],[74, 65],[86, 65],
  [80,222],[66,228],[94,228],[73,215],[87,215],[80,195],[80,55],
];

const CYCLE_MS = 11_000;

// ── Healthy bone (static, always looks strong) ──────────────────────────────
function HealthyBone() {
  return (
    <svg viewBox="0 0 160 280" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="hg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </radialGradient>
        <filter id="hs">
          <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#22c55e" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Ambient glow */}
      <ellipse cx="80" cy="140" rx="88" ry="138" fill="url(#hg)" />

      {/* ── Bone shape ── */}
      {/* Top epiphysis */}
      <ellipse cx="80" cy="48" rx="40" ry="42" fill="#f0ebe0" filter="url(#hs)" />
      {/* Shaft */}
      <rect x="59" y="78" width="42" height="142" rx="19" fill="#f0ebe0" filter="url(#hs)" />
      {/* Bottom epiphysis */}
      <ellipse cx="80" cy="232" rx="48" ry="30" fill="#f0ebe0" filter="url(#hs)" />

      {/* Inner shading (medullary canal) */}
      <ellipse cx="80" cy="48" rx="27" ry="29" fill="#e0d8c0" opacity="0.55" />
      <rect x="67" y="80" width="26" height="138" rx="11" fill="#e0d8c0" opacity="0.55" />
      <ellipse cx="80" cy="232" rx="33" ry="20" fill="#e0d8c0" opacity="0.55" />

      {/* Dense trabeculae dots */}
      {HEALTHY_DOTS.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={3.5} fill="#b8a860" opacity={0.65} />
      ))}

      {/* Cortex outlines */}
      <ellipse cx="80" cy="48" rx="40" ry="42" fill="none" stroke="#cfc070" strokeWidth="3" opacity="0.45" />
      <ellipse cx="80" cy="232" rx="48" ry="30" fill="none" stroke="#cfc070" strokeWidth="3" opacity="0.45" />
    </svg>
  );
}

// ── Sick bone (animated deterioration) ─────────────────────────────────────
function SickBone({ d }: { d: number }) {
  // Colour: cream → pale → washed-out reddish
  const r = Math.round(240 + d * 14);
  const g = Math.round(235 - d * 118);
  const b = Math.round(220 - d * 140);
  const fill   = `rgb(${r},${g},${b})`;
  const inner  = `rgb(${Math.round(r * 0.87)},${Math.round(g * 0.87)},${Math.round(b * 0.87)})`;
  const dotR   = Math.max(0.3, 3.5 - d * 3.0);
  const dotOp  = Math.max(0.04, 0.62 - d * 0.55);
  const bodyOp = Math.max(0.55, 0.9 - d * 0.3);

  return (
    <svg viewBox="0 0 160 280" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="sg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={fill} stopOpacity="0.12" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="80" cy="140" rx="88" ry="138" fill="url(#sg)" />

      {/* Bone shape */}
      <ellipse cx="80" cy="48" rx="40" ry="42" fill={fill} opacity={bodyOp} />
      <rect x="59" y="78" width="42" height="142" rx="19" fill={fill} opacity={bodyOp} />
      <ellipse cx="80" cy="232" rx="48" ry="30" fill={fill} opacity={bodyOp} />

      {/* Inner shading */}
      <ellipse cx="80" cy="48" rx="27" ry="29" fill={inner} opacity="0.45" />
      <rect x="67" y="80" width="26" height="138" rx="11" fill={inner} opacity="0.45" />
      <ellipse cx="80" cy="232" rx="33" ry="20" fill={inner} opacity="0.45" />

      {/* Thinning trabeculae dots */}
      {HEALTHY_DOTS.slice(0, 8).map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={dotR} fill={fill} opacity={dotOp} />
      ))}

      {/* Growing pores — the main "Swiss cheese" effect */}
      {PORES.map((p, i) => (
        <ellipse
          key={i}
          cx={p.cx}
          cy={p.cy}
          rx={p.rx * d}
          ry={p.ry * d}
          fill="#09090f"
          opacity={Math.min(0.95, d * 1.6)}
        />
      ))}

      {/* Cracks — appear late */}
      {d > 0.68 && (
        <g opacity={(d - 0.68) / 0.32} stroke={`rgb(${Math.round(r*0.45)},${Math.round(g*0.2)},${Math.round(b*0.2)})`} strokeLinecap="round" fill="none">
          <polyline points="70,118 63,135 68,145" strokeWidth="1.8" />
          <polyline points="90,155 98,168 94,179" strokeWidth="1.6" />
          <line x1="76" y1="172" x2="70" y2="184" strokeWidth="1.2" />
        </g>
      )}

      {/* Cortex rings (thinning) */}
      <ellipse cx="80" cy="48" rx="40" ry="42" fill="none" stroke={fill} strokeWidth={Math.max(0.8, 3 - d * 2.2)} opacity={0.35} />
      <ellipse cx="80" cy="232" rx="48" ry="30" fill="none" stroke={fill} strokeWidth={Math.max(0.8, 3 - d * 2.2)} opacity={0.35} />
    </svg>
  );
}

// ── Section ─────────────────────────────────────────────────────────────────
export default function BoneMicroscopyAnimation() {
  const [d, setD] = useState(0); // deterioration 0..1

  useEffect(() => {
    const start = performance.now();
    let id: number;

    function tick(now: number) {
      const rawT = ((now - start) % CYCLE_MS) / CYCLE_MS;

      // 0–0.18: hold healthy | 0.18–0.75: degrade | 0.75–0.90: hold sick | 0.90–1.0: quick reset
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

  // Human-readable age/phase label
  const ageLabel =
    d < 0.08 ? "Age 25–35"
    : d < 0.35 ? "Age 40–50"
    : d < 0.70 ? "Age 55–65"
    : "Age 65+";

  return (
    <section
      className="bg-[#0d0d18] py-16 md:py-20"
      aria-label="Animation comparing healthy bone to osteoporotic bone"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#E7D549] border border-[#E7D549]/30 bg-[#E7D549]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7D549] animate-pulse" aria-hidden="true" />
            Animation · What Happens to Your Bones
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
            The Difference Calcium &amp; Vitamin D Makes
          </h2>
          <p className="text-white/55 text-sm md:text-base max-w-xl mx-auto">
            Watch what happens to bone over the years — when the body gets enough calcium and Vitamin D,
            versus when it does not.
          </p>
        </div>

        {/* Two bones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 items-start max-w-2xl mx-auto">

          {/* ── Healthy bone ── */}
          <div className="flex flex-col items-center">
            {/* Label row */}
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0" aria-hidden="true" />
              <span className="text-green-400 font-bold text-sm">With enough calcium &amp; Vitamin D</span>
            </div>

            {/* Bone */}
            <div className="w-36 h-64 relative">
              <HealthyBone />
            </div>

            {/* Description */}
            <div className="mt-4 text-center">
              <p className="text-white font-bold text-base mb-1">Healthy Bone</p>
              <p className="text-white/50 text-xs leading-snug max-w-[160px]">
                Dense structure — can withstand everyday forces without breaking
              </p>
            </div>

            {/* Checklist */}
            <ul className="mt-4 space-y-1.5 text-left w-full max-w-[180px]">
              {["Thick outer wall","Dense inner lattice","Strong & resilient"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-xs text-white/65">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Deteriorating bone ── */}
          <div className="flex flex-col items-center">
            {/* Label row */}
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-red-400 shrink-0" aria-hidden="true" />
              <span className="text-red-400 font-bold text-sm">Lacking calcium &amp; Vitamin D</span>
            </div>

            {/* Bone + age ticker */}
            <div className="w-36 h-64 relative">
              <SickBone d={d} />
              {/* Age label floating on bone */}
              <div
                className="absolute top-0 right-0 text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: d < 0.1 ? "rgba(34,197,94,0.25)" : d < 0.6 ? "rgba(231,213,73,0.25)" : "rgba(239,68,68,0.25)",
                  color:           d < 0.1 ? "#4ade80"               : d < 0.6 ? "#E7D549"               : "#f87171",
                  border: `1px solid ${d < 0.1 ? "rgba(34,197,94,0.4)" : d < 0.6 ? "rgba(231,213,73,0.4)" : "rgba(239,68,68,0.4)"}`,
                }}
              >
                {ageLabel}
              </div>
            </div>

            {/* Description */}
            <div className="mt-4 text-center">
              <p className="text-white font-bold text-base mb-1">Osteoporotic Bone</p>
              <p className="text-white/50 text-xs leading-snug max-w-[160px]">
                Porous, fragile — may break from a minor fall or bump
              </p>
            </div>

            {/* Checklist */}
            <ul className="mt-4 space-y-1.5 text-left w-full max-w-[180px]">
              {["Thin, weakened wall","Large holes (pores) form","Fracture risk greatly increased"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-xs text-white/65">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Progress timeline bar */}
        <div className="mt-10 max-w-md mx-auto">
          <div className="flex justify-between text-[10px] text-white/35 mb-1.5">
            <span>Age 25</span>
            <span>Age 45</span>
            <span>Age 65+</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${d * 100}%`,
                backgroundColor:
                  d < 0.3 ? "#22c55e" : d < 0.65 ? "#E7D549" : "#ef4444",
                transition: "background-color 0.5s",
              }}
            />
          </div>
          <p className="text-center text-white/35 text-[10px] mt-1.5">
            Years of inadequate calcium &amp; Vitamin D passing
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
          <Link
            href="/prevention/nutrition-and-calcium"
            className="inline-flex items-center justify-center gap-2 bg-[#E7D549] hover:bg-[#d4c43e] text-[#434343] font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-lg shadow-black/30"
          >
            How to Get Enough Calcium <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/prevention/vitamin-d"
            className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
          >
            Vitamin D in Ireland
          </Link>
        </div>
      </div>
    </section>
  );
}
