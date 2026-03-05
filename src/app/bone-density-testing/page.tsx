import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Bone Density & Testing",
  description:
    "Learn about DXA scans, how to get tested in Ireland, how to understand your results, and the FRAX fracture risk tool.",
};

const pages = [
  {
    title: "What Is a DXA Scan?",
    desc: "How the scan works, what to expect on the day, and who should be referred for one.",
    href: "/bone-density-testing/what-is-a-dxa-scan",
  },
  {
    title: "Understanding Your Results",
    desc: "What your T-score and Z-score mean, and what action to take after your results.",
    href: "/bone-density-testing/understanding-your-results",
  },
  {
    title: "How to Get Tested in Ireland",
    desc: "GP referral pathways, public and private options, and what to bring to your appointment.",
    href: "/bone-density-testing/how-to-get-tested-in-ireland",
  },
  {
    title: "FRAX Fracture Risk Tool",
    desc: "How this WHO tool calculates your 10-year fracture probability and how to use it.",
    href: "/bone-density-testing/frax-fracture-risk-tool",
  },
];

export default function BoneDensityTestingPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Bone Density & Testing" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Bone Density &amp; Testing</h1>
      <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
        The only reliable way to diagnose osteoporosis is with a bone density test — specifically a DXA scan. This
        section explains everything you need to know about getting tested, understanding your results, and assessing
        your fracture risk.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group flex flex-col gap-3 p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#E7D549] hover:shadow-md transition-all"
          >
            <h2 className="text-lg font-bold text-slate-800 group-hover:text-slate-700 transition-colors">
              {page.title}
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{page.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm text-slate-600 font-semibold">
              Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-[#F9F9F9] border border-slate-200 rounded-xl p-6">
        <p className="text-slate-900 text-sm">
          <strong>Not sure if you should be tested?</strong> Check our{" "}
          <Link href="/about-osteoporosis/risk-factors" className="text-slate-700 underline">
            Risk Factors page
          </Link>{" "}
          to see which factors might make a DXA scan worthwhile for you, then speak to your GP.
        </p>
      </div>
    </PageLayout>
  );
}
