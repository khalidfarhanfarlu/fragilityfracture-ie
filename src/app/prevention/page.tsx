import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Prevention — Bone Health",
  description:
    "How to protect your bone health through nutrition, Vitamin D, exercise, and lifestyle choices. Evidence-based prevention advice for people in Ireland.",
};

const pages = [
  { title: "Nutrition & Calcium", desc: "Which foods are richest in calcium and how much you need at each life stage.", href: "/prevention/nutrition-and-calcium" },
  { title: "Vitamin D", desc: "Why Ireland's northern latitude makes supplementation especially important — and how much to take.", href: "/prevention/vitamin-d" },
  { title: "Exercise & Physical Activity", desc: "Weight-bearing and resistance exercise to strengthen bones and reduce fall risk.", href: "/prevention/exercise" },
  { title: "Lifestyle Factors", desc: "How smoking, alcohol, body weight, and certain medications affect your bones.", href: "/prevention/lifestyle" },
  { title: "Bone Health at Every Age", desc: "What you should be doing for your bones at each stage of life — from childhood to older age.", href: "/prevention/bone-health-at-every-age" },
];

export default function PreventionPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Prevention" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Prevention</h1>
      <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
        While some risk factors for osteoporosis cannot be changed, many can. The right nutrition, regular
        exercise, and healthy lifestyle choices can make a real difference to your bone density and fracture risk —
        at any age.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group flex flex-col gap-3 p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#E7D549] hover:shadow-md transition-all"
          >
            <h2 className="text-lg font-bold text-slate-800 group-hover:text-slate-700 transition-colors">{page.title}</h2>
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{page.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm text-slate-600 font-semibold">
              Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
