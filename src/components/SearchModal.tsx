"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";

const pages = [
  { title: "What Is Osteoporosis?", href: "/about-osteoporosis/what-is-osteoporosis", desc: "How osteoporosis develops, symptoms, diagnosis, and who is most at risk in Ireland.", tags: "silent disease bone density fragility" },
  { title: "What Is a Fragility Fracture?", href: "/about-osteoporosis/what-is-a-fragility-fracture", desc: "What counts as a fragility fracture and why they happen with minimal force.", tags: "break hip spine wrist" },
  { title: "Osteopenia vs Osteoporosis", href: "/about-osteoporosis/osteopenia-vs-osteoporosis", desc: "The difference between osteopenia and osteoporosis, and what each diagnosis means.", tags: "T-score bone density scan" },
  { title: "Risk Factors", href: "/about-osteoporosis/risk-factors", desc: "Who is most at risk of osteoporosis — age, menopause, medications, lifestyle.", tags: "menopause steroids corticosteroids age family history" },
  { title: "Osteoporosis in Men", href: "/about-osteoporosis/osteoporosis-in-men", desc: "Osteoporosis is often overlooked in men — 1 in 5 men over 50 will be affected.", tags: "male testosterone secondary" },
  { title: "Nutrition for Bone Health", href: "/prevention/nutrition-and-calcium", desc: "How diet and nutrition support bone health. Foods that build and protect bone density.", tags: "food diet dairy vegetables protein" },
  { title: "Calcium and Vitamin D", href: "/prevention/calcium-and-vitamin-d", desc: "How much calcium and Vitamin D you need, food sources, and whether you need a supplement.", tags: "supplement calcium vitamin d deficiency sunlight ireland" },
  { title: "Exercise & Physical Activity", href: "/prevention/exercise", desc: "Weight-bearing and resistance exercises for bone health.", tags: "walking strength training gym activity falls" },
  { title: "Lifestyle Factors", href: "/prevention/lifestyle", desc: "How smoking, alcohol, and body weight affect bone density.", tags: "smoking alcohol bmi weight" },
  { title: "Bone Health at Every Age", href: "/prevention/bone-health-at-every-age", desc: "Building and maintaining bone density from childhood through older age.", tags: "children teens young adults older" },
  { title: "What Is a DXA Scan?", href: "/bone-density-testing/what-is-a-dxa-scan", desc: "How a DXA scan works, what to expect, and how it measures bone density.", tags: "dual energy xray dexa bone mineral density test" },
  { title: "Understanding Your DXA Results", href: "/bone-density-testing/understanding-your-results", desc: "What your T-score and Z-score mean, and what happens next.", tags: "T-score Z-score results osteoporosis osteopenia" },
  { title: "How to Get Tested in Ireland", href: "/bone-density-testing/how-to-get-tested-in-ireland", desc: "How to access a DXA scan through your GP or hospital in Ireland.", tags: "referral GP hospital scan Ireland public private" },
  { title: "FRAX Fracture Risk Tool", href: "/bone-density-testing/frax-fracture-risk-tool", desc: "The WHO FRAX tool calculates your 10-year fracture probability.", tags: "fracture risk probability FRAX WHO calculator" },
  { title: "Treatment Options", href: "/living-with-osteoporosis/treatment-options", desc: "Medications for osteoporosis — bisphosphonates, denosumab, and more.", tags: "bisphosphonates alendronate denosumab prolia medication drugs" },
  { title: "Falls Prevention", href: "/living-with-osteoporosis/falls-prevention", desc: "How to reduce fall risk at home and stay safe with osteoporosis.", tags: "fall home safety balance strength" },
  { title: "Recovery & Rehabilitation", href: "/living-with-osteoporosis/recovery-and-rehabilitation", desc: "Recovering after a fragility fracture — physiotherapy, pain management, and returning to activity.", tags: "physio recovery rehab fracture pain" },
  { title: "Mental Health & Wellbeing", href: "/living-with-osteoporosis/mental-health-and-wellbeing", desc: "The emotional impact of living with osteoporosis and how to manage it.", tags: "anxiety depression fear mental health support" },
  { title: "Talking to Your Doctor", href: "/living-with-osteoporosis/talking-to-your-doctor", desc: "Questions to ask your GP about bone health, DXA results, and treatment.", tags: "GP doctor questions appointment ask" },
  { title: "Hip Fractures", href: "/fragility-fractures/hip-fractures", desc: "Hip fractures are the most serious fragility fracture — outcomes, treatment, and recovery.", tags: "hip break fall hospital surgery" },
  { title: "Vertebral Fractures", href: "/fragility-fractures/vertebral-fractures", desc: "Spinal fractures from osteoporosis — often missed but serious.", tags: "spine back vertebra compression height loss" },
  { title: "Wrist Fractures", href: "/fragility-fractures/wrist-fractures", desc: "Wrist (Colles) fractures are often the first sign of osteoporosis.", tags: "wrist colles forearm fall" },
  { title: "After a Fracture: What Next?", href: "/fragility-fractures/after-a-fracture", desc: "Steps to take after a fragility fracture to prevent a second one.", tags: "after fracture next steps FLS liaison service" },
  { title: "Secondary Fracture Prevention", href: "/fragility-fractures/secondary-fracture-prevention", desc: "Preventing a second fracture after the first one.", tags: "FLS fracture liaison service secondary prevention treatment" },
  { title: "Resources & Support", href: "/resources", desc: "Irish and international organisations for people with osteoporosis.", tags: "IOS HSE IOF support helpline organisations" },
  { title: "Am I at Risk?", href: "/am-i-at-risk", desc: "Take the risk quiz to understand your personal osteoporosis risk.", tags: "quiz risk assessment check" },
  { title: "Blog", href: "/blog", desc: "Articles and guides on osteoporosis and bone health.", tags: "articles news" },
  { title: "Irish Research Findings 2023", href: "/research/findings-2023", desc: "Key findings from a 2023 survey of 600 Irish adults on osteoporosis awareness.", tags: "research survey ireland 2023 athena statistics" },
];

function score(page: typeof pages[0], query: string): number {
  const q = query.toLowerCase();
  const title = page.title.toLowerCase();
  const desc = page.desc.toLowerCase();
  const tags = page.tags.toLowerCase();
  if (title.includes(q)) return 3;
  if (desc.includes(q)) return 2;
  if (tags.includes(q)) return 1;
  const words = q.split(" ").filter(Boolean);
  return words.some((w) => title.includes(w) || desc.includes(w) || tags.includes(w)) ? 0.5 : 0;
}

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim().length >= 2
    ? pages
        .map((p) => ({ ...p, score: score(p, query.trim()) }))
        .filter((p) => p.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
    : [];

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen(true); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 text-sm text-[#888888] border border-[#e0e0e0] rounded-lg px-3 py-1.5 hover:border-[#E7D549] hover:text-[#555555] transition-colors bg-[#F9F9F9]"
        aria-label="Search site"
      >
        <Search className="w-3.5 h-3.5" />
        <span>Search…</span>
        <kbd className="text-[10px] bg-white border border-[#e0e0e0] rounded px-1 py-0.5 text-[#aaaaaa]">⌘K</kbd>
      </button>

      {/* Mobile icon */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 rounded-md text-[#666666] hover:text-[#434343] hover:bg-[#F9F9F9] transition-colors"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input row */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#eeeeee]">
              <Search className="w-5 h-5 text-[#888888] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search topics, symptoms, treatments…"
                className="flex-1 text-[#434343] text-sm outline-none placeholder-[#aaaaaa]"
              />
              <button onClick={() => setOpen(false)} className="text-[#aaaaaa] hover:text-[#666666] transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results */}
            {results.length > 0 ? (
              <ul className="max-h-80 overflow-y-auto divide-y divide-[#f5f5f5]">
                {results.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      onClick={() => { setOpen(false); setQuery(""); }}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-[#F9F9F9] transition-colors group"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#434343] group-hover:text-[#1e293b]">{page.title}</p>
                        <p className="text-xs text-[#888888] mt-0.5 line-clamp-1">{page.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#cccccc] group-hover:text-[#E7D549] shrink-0 mt-0.5 transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : query.trim().length >= 2 ? (
              <div className="px-4 py-8 text-center text-sm text-[#888888]">
                No results for <strong>&ldquo;{query}&rdquo;</strong>
              </div>
            ) : (
              <div className="px-4 py-6 text-center text-xs text-[#aaaaaa]">
                Start typing to search across all topics…
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
