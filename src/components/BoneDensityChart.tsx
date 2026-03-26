"use client";

import { useEffect, useRef, useState } from "react";

// ── Chart geometry ──────────────────────────────────────────────────────────
const W = 820;
const H = 420;
const PAD = { top: 40, right: 40, bottom: 65, left: 68 };
const CW = W - PAD.left - PAD.right;
const CH = H - PAD.top - PAD.bottom;

function sx(age: number) {
  return PAD.left + (age / 80) * CW;
}
function sy(density: number) {
  return PAD.top + CH - (density / 100) * CH;
}
function toPath(pts: [number, number][]): string {
  return pts.map(([a, d], i) => `${i === 0 ? "M" : "L"} ${sx(a)} ${sy(d)}`).join(" ");
}
function toAreaPath(pts: [number, number][]): string {
  const line = toPath(pts);
  return `${line} L ${sx(80)} ${sy(0)} L ${sx(0)} ${sy(0)} Z`;
}

// ── Bone density data: [age, relative density %] ───────────────────────────
// Modelled on: rise to peak 25-30, female steeper post-menopause decline
const FEMALE: [number, number][] = [
  [0, 18], [5, 30], [10, 46], [15, 60], [20, 80], [25, 95], [30, 97],
  [35, 92], [40, 87], [45, 82], [50, 73], [52, 62], [55, 52], [58, 46],
  [60, 43], [65, 37], [70, 31], [75, 26], [80, 21],
];
const MALE: [number, number][] = [
  [0, 18], [5, 30], [10, 46], [15, 60], [20, 80], [25, 94], [30, 97],
  [35, 93], [40, 89], [45, 85], [50, 80], [55, 74], [60, 67], [65, 60],
  [70, 53], [75, 46], [80, 39],
];

const FEMALE_PATH = toPath(FEMALE);
const MALE_PATH = toPath(MALE);
const FEMALE_AREA = toAreaPath(FEMALE);

// Approximate path lengths (SVG trick: big number for dash animation)
const DASH_LEN = 1400;

// ── Age annotations ─────────────────────────────────────────────────────────
const ANNOTATIONS = [
  { age: 27.5, label: "Peak (25–30)", color: "#22c55e", dy: -6 },
  { age: 50,   label: "Menopause",    color: "#E7D549", dy: -6 },
];

// ── Component ───────────────────────────────────────────────────────────────
export default function BoneDensityChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto select-none">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Chart showing bone density across age for women and men. Women experience a steeper decline around menopause at age 50."
      >
        {/* ── Y-axis grid lines ── */}
        {[0, 25, 50, 75, 100].map((v) => (
          <g key={v}>
            <line
              x1={PAD.left}
              y1={sy(v)}
              x2={W - PAD.right}
              y2={sy(v)}
              stroke={v === 0 ? "#cccccc" : "#eeeeee"}
              strokeWidth={v === 0 ? 1.5 : 1}
              strokeDasharray={v === 0 || v === 100 ? "0" : "5,4"}
            />
            <text
              x={PAD.left - 8}
              y={sy(v) + 4}
              textAnchor="end"
              fontSize={13}
              fill="#999999"
            >
              {v}%
            </text>
          </g>
        ))}

        {/* ── X-axis ticks & labels ── */}
        {[0, 10, 20, 30, 40, 50, 60, 70, 80].map((age) => (
          <g key={age}>
            <line
              x1={sx(age)}
              y1={sy(0)}
              x2={sx(age)}
              y2={sy(0) + 5}
              stroke="#cccccc"
              strokeWidth={1}
            />
            <text
              x={sx(age)}
              y={sy(0) + 18}
              textAnchor="middle"
              fontSize={13}
              fill="#888888"
            >
              {age}
            </text>
          </g>
        ))}

        {/* Axis labels */}
        <text
          x={PAD.left + CW / 2}
          y={H - 5}
          textAnchor="middle"
          fontSize={14}
          fill="#888888"
          fontWeight="500"
        >
          Age (years)
        </text>
        <text
          x={16}
          y={PAD.top + CH / 2}
          textAnchor="middle"
          fontSize={14}
          fill="#888888"
          fontWeight="500"
          transform={`rotate(-90, 16, ${PAD.top + CH / 2})`}
        >
          Bone Density (%)
        </text>

        {/* ── Risk zone shading (below 70%) ── */}
        <rect
          x={PAD.left}
          y={sy(70)}
          width={CW}
          height={sy(0) - sy(70)}
          fill="#ef4444"
          opacity={0.06}
        />
        <text
          x={PAD.left + 6}
          y={sy(70) - 5}
          fontSize={12}
          fill="#ef4444"
          opacity={0.7}
        >
          Osteopenia / osteoporosis risk zone
        </text>

        {/* ── Annotation verticals ── */}
        {ANNOTATIONS.map(({ age, label, color, dy }) => (
          <g key={age}>
            <line
              x1={sx(age)}
              y1={PAD.top + 14}
              x2={sx(age)}
              y2={sy(0)}
              stroke={color}
              strokeWidth={1}
              strokeDasharray="4,3"
              opacity={0.6}
            />
            <text
              x={sx(age)}
              y={PAD.top + 10 + dy}
              textAnchor="middle"
              fontSize={12}
              fill={color}
              fontWeight="600"
            >
              {label}
            </text>
          </g>
        ))}

        {/* ── Female shaded area ── */}
        <path d={FEMALE_AREA} fill="#ef4444" opacity={0.05} />

        {/* ── Female curve (animated) ── */}
        <path
          d={FEMALE_PATH}
          fill="none"
          stroke="#ef4444"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: DASH_LEN,
            strokeDashoffset: visible ? 0 : DASH_LEN,
            transition: visible ? "stroke-dashoffset 2s ease-in-out" : "none",
          }}
        />

        {/* ── Male curve (animated, slight delay) ── */}
        <path
          d={MALE_PATH}
          fill="none"
          stroke="#3b82f6"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: DASH_LEN,
            strokeDashoffset: visible ? 0 : DASH_LEN,
            transition: visible ? "stroke-dashoffset 2.4s ease-in-out 0.3s" : "none",
          }}
        />

        {/* ── Endpoint dots ── */}
        {visible && (
          <>
            {/* Female end dot */}
            <circle cx={sx(80)} cy={sy(21)} r={4} fill="#ef4444" opacity={0.9} />
            {/* Male end dot */}
            <circle cx={sx(80)} cy={sy(39)} r={4} fill="#3b82f6" opacity={0.9} />
          </>
        )}

        {/* ── Legend ── */}
        <g transform={`translate(${W - PAD.right - 140}, ${PAD.top + 8})`}>
          <rect x={0} y={0} width={130} height={56} rx={7} fill="white" stroke="#e0e0e0" strokeWidth={1} />
          <line x1={10} y1={18} x2={30} y2={18} stroke="#ef4444" strokeWidth={3} strokeLinecap="round" />
          <text x={36} y={22} fontSize={14} fill="#434343">Women</text>
          <line x1={10} y1={36} x2={30} y2={36} stroke="#3b82f6" strokeWidth={3} strokeLinecap="round" />
          <text x={36} y={40} fontSize={14} fill="#434343">Men</text>
        </g>
      </svg>

      {/* Source note */}
      <p className="text-center text-[11px] text-[#aaaaaa] mt-2">
        Illustrative model based on IOF &amp; IFLS-DB data. Women experience an accelerated decline around menopause.
      </p>
    </div>
  );
}
