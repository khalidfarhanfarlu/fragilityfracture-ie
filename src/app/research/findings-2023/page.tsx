import type { Metadata } from "next";
import { Users, Beaker, Pill, Plus, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Osteoporosis Research Findings 2023 | FragilityFracture.ie",
  description:
    "Key findings from a 2023 survey of 600 Irish men and women aged over 40, exploring awareness of fragility fractures and nutritional supplementation for bone health.",
};

const tableData = [
  { stage: "31–50 yr (f)", caRda: "1,000", caUl: "2,500", dRda: "600",  dUl: "4,000" },
  { stage: "51–70 yr (f)", caRda: "1,200", caUl: "2,000", dRda: "600",  dUl: "4,000" },
  { stage: "51–70 yr (m)", caRda: "1,000", caUl: "2,000", dRda: "600",  dUl: "4,000" },
  { stage: "71+ yr (m & f)", caRda: "1,200", caUl: "2,000", dRda: "800", dUl: "4,000" },
];

export default function ResearchFindings2023() {
  return (
    <div className="min-h-screen bg-[#e8e4dd] flex items-start justify-center py-10 px-4">

      {/* ── DOCUMENT SHEET ─────────────────────────────────────────────── */}
      <div
        className="w-full max-w-4xl bg-white shadow-2xl shadow-black/25 flex flex-col md:flex-row"
        style={{ minHeight: "90vh" }}
      >

        {/* ════════════════════════════════════════════════════════════════
            LEFT SIDEBAR — dark panel matching original purple
        ════════════════════════════════════════════════════════════════ */}
        <div className="bg-[#1e293b] md:w-56 shrink-0 flex flex-col justify-between p-8 relative overflow-hidden">

          {/* subtle texture dots */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #E7D549 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />

          {/* Title block */}
          <div className="relative">
            <h1 className="text-white text-[1.65rem] font-extrabold leading-tight tracking-tight">
              Osteoporosis{" "}
              <span className="text-[#E7D549]">research</span>{" "}
              findings
            </h1>
            <p
              className="text-[#E7D549] font-extrabold tracking-tight leading-none mt-2"
              style={{ fontSize: "3.5rem" }}
            >
              2023
            </p>
          </div>

          {/* Athena attribution */}
          <div className="relative border-t border-white/10 pt-5">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-[#E7D549] flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#1e293b]" />
              </div>
              <span className="text-white font-bold text-sm tracking-tight">ATHENA</span>
            </div>
            <p className="text-slate-400 text-[10px] leading-relaxed">
              Research commissioned by Athena, conducted by Empathy Research
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            RIGHT CONTENT AREA
        ════════════════════════════════════════════════════════════════ */}
        <div className="flex-1 flex flex-col">

          {/* Intro paragraph */}
          <div className="px-8 pt-4 pb-6 border-b border-slate-200">
            <p className="text-[#1e293b] text-[0.95rem] leading-relaxed">
              600 Irish men and women aged over 40 were surveyed, to
              understand the occurrence of fragility fractures and awareness of
              appropriate nutritional supplementation for optimal bone health.
              <sup className="text-[#E7D549] font-bold text-[10px] ml-0.5">1</sup>
            </p>
          </div>

          {/* ── 2×2 STATS GRID with cross divider ─────────────────────── */}
          <div className="grid grid-cols-2 flex-1" style={{ borderBottom: "3px solid #1e293b" }}>

            {/* ── TOP-LEFT: 76% ─────────────────────── */}
            <div
              className="p-7 flex flex-col gap-3"
              style={{ borderRight: "3px solid #1e293b", borderBottom: "3px solid #1e293b" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center">
                <Beaker className="w-5 h-5 text-[#E7D549]" strokeWidth={1.8} />
              </div>
              <p
                className="font-extrabold text-[#E7D549] leading-none"
                style={{ fontSize: "3rem" }}
              >
                76%
              </p>
              <p className="text-[#334155] text-sm leading-snug">
                of men and women over the age of 40 don&apos;t consume the
                recommended amount of calcium in their diet
                <sup className="text-[#1e293b] font-bold text-[9px] ml-0.5">2</sup>
              </p>
            </div>

            {/* ── TOP-RIGHT: 1 in 2 / 1 in 5 ────────── */}
            <div
              className="p-7 flex flex-col gap-3"
              style={{ borderBottom: "3px solid #1e293b" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center">
                <Users className="w-5 h-5 text-[#E7D549]" strokeWidth={1.8} />
              </div>
              <p
                className="font-extrabold text-[#E7D549] leading-none"
                style={{ fontSize: "1.8rem", lineHeight: 1.15 }}
              >
                1 in 2 women<br />
                <span style={{ fontSize: "1rem" }} className="text-[#1e293b]">&amp;</span>{" "}
                1 in 5 men
              </p>
              <p className="text-[#334155] text-sm leading-snug">
                over the age of 50 are at risk from osteoporosis
                <sup className="text-[#1e293b] font-bold text-[9px] ml-0.5">2</sup>
              </p>
            </div>

            {/* ── BOTTOM-LEFT: 85% ──────────────────── */}
            <div
              className="p-7 flex flex-col gap-3"
              style={{ borderRight: "3px solid #1e293b" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center">
                <Pill className="w-5 h-5 text-[#E7D549]" strokeWidth={1.8} />
              </div>
              <p
                className="font-extrabold text-[#E7D549] leading-none"
                style={{ fontSize: "3rem" }}
              >
                85%
              </p>
              <p className="text-[#334155] text-sm leading-snug">
                of adults don&apos;t know how much Calcium or Vitamin D they
                should take daily for good bone health
                <sup className="text-[#1e293b] font-bold text-[9px] ml-0.5">2</sup>
              </p>
            </div>

            {/* ── BOTTOM-RIGHT: 62% ─────────────────── */}
            <div className="p-7 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center">
                <Plus className="w-5 h-5 text-[#E7D549]" strokeWidth={1.8} />
              </div>
              <p
                className="font-extrabold text-[#E7D549] leading-none"
                style={{ fontSize: "3rem" }}
              >
                62%
              </p>
              <p className="text-[#334155] text-sm leading-snug">
                of adults over 40 surveyed buy calcium and/or vitamin
                supplements, but 45% of those surveyed dose incorrectly, which
                may result in incorrect dosing
                <sup className="text-[#1e293b] font-bold text-[9px] ml-0.5">2</sup>
              </p>
            </div>
          </div>

          {/* ── TABLE SECTION ─────────────────────────────────────────── */}
          <div className="px-8 py-6 border-b border-slate-200">
            <p className="text-[#334155] text-[0.85rem] leading-relaxed mb-4">
              The recommended allowances, as defined by the Institute of
              Medicine, are outlined in the table below:
            </p>

            <p className="text-[11px] font-bold text-[#1e293b] uppercase tracking-wider mb-2">
              Table 1.{" "}
              <span className="font-normal normal-case tracking-normal text-[#334155]">
                Calcium and Vitamin D dietary reference intakes by life stage
                <sup className="text-[#E7D549] font-bold text-[9px] ml-0.5">3</sup>
              </span>
            </p>

            <table className="w-full text-[11px]">
              <thead>
                <tr className="bg-[#1e293b] text-white">
                  <th className="px-3 py-2 text-left font-semibold" rowSpan={2}>
                    Life-stage group
                  </th>
                  <th className="px-3 py-2 text-center font-bold border-l border-white/20" colSpan={2}>
                    CALCIUM
                  </th>
                  <th className="px-3 py-2 text-center font-bold border-l border-white/20" colSpan={2}>
                    VITAMIN D
                  </th>
                </tr>
                <tr className="bg-[#2d3f54] text-slate-300">
                  <th className="px-3 py-1.5 text-center font-medium border-l border-white/10">
                    RDA (mg/d)
                  </th>
                  <th className="px-3 py-1.5 text-center font-medium">
                    UL (mg/d)
                  </th>
                  <th className="px-3 py-1.5 text-center font-medium border-l border-white/10">
                    RDA (IU/d)
                  </th>
                  <th className="px-3 py-1.5 text-center font-medium">
                    UL (IU/d)
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-3 py-2 font-semibold text-[#1e293b] border border-slate-200">
                      {row.stage}
                    </td>
                    <td className="px-3 py-2 text-center text-[#1e293b] font-bold border border-slate-200">
                      {row.caRda}
                    </td>
                    <td className="px-3 py-2 text-center text-slate-500 border border-slate-200">
                      {row.caUl}
                    </td>
                    <td className="px-3 py-2 text-center text-[#1e293b] font-bold border border-slate-200">
                      {row.dRda}
                    </td>
                    <td className="px-3 py-2 text-center text-slate-500 border border-slate-200">
                      {row.dUl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── FOOTNOTES ─────────────────────────────────────────────── */}
          <div className="px-8 py-5 mt-auto">
            <ol className="space-y-1 list-none">
              {[
                "Research commissioned by Athena, conducted by Empathy Research, January 2023.",
                <>
                  <a
                    href="https://www.getthestandalone.ie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-[#1e293b] inline-flex items-center gap-1"
                  >
                    www.getthestandalone.ie
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>,
                "Institute of Medicine. Volume 96, Issue 1, January 2011.",
              ].map((note, i) => (
                <li key={i} className="flex gap-2 text-[10px] text-slate-400 leading-relaxed">
                  <span className="font-bold text-[#E7D549] shrink-0">{i + 1}</span>
                  <span>{note}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>{/* end right content */}
      </div>{/* end document sheet */}
    </div>
  );
}
