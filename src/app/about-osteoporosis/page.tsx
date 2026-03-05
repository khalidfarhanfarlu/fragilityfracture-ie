import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "About Osteoporosis",
  description:
    "Learn about osteoporosis, fragility fractures, risk factors, and bone density in plain language. Comprehensive Irish bone health information.",
};

const pages = [
  {
    title: "What Is Osteoporosis?",
    desc: "A plain-English explanation of how bones become weak and why osteoporosis is called 'the silent disease'.",
    href: "/about-osteoporosis/what-is-osteoporosis",
  },
  {
    title: "What Is a Fragility Fracture?",
    desc: "How a minor fall or bump can cause a serious fracture — and why it matters so much.",
    href: "/about-osteoporosis/what-is-a-fragility-fracture",
  },
  {
    title: "Osteopenia vs Osteoporosis",
    desc: "Understanding the difference between low bone density and osteoporosis, and what your T-score means.",
    href: "/about-osteoporosis/osteopenia-vs-osteoporosis",
  },
  {
    title: "Risk Factors",
    desc: "Which factors increase your risk — and which ones you can change.",
    href: "/about-osteoporosis/risk-factors",
  },
  {
    title: "Osteoporosis in Men",
    desc: "One in five men over 50 will have an osteoporosis-related fracture. Why men are under-diagnosed and what to do about it.",
    href: "/about-osteoporosis/osteoporosis-in-men",
  },
];

export default function AboutOsteoporosisPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "About Osteoporosis" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-4">About Osteoporosis</h1>
      <p className="text-lg text-[#666666] mb-10 leading-relaxed max-w-2xl">
        Osteoporosis is a common condition that weakens bones, making them fragile and more likely to break. This section
        explains what it is, how it develops, who is at risk, and what the warning signs are — all in plain English.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group flex flex-col gap-3 p-6 bg-white rounded-2xl border border-[#e0e0e0] hover:border-[#E7D549] hover:shadow-md transition-all"
          >
            <h2 className="text-lg font-bold text-[#434343] group-hover:text-[#555555] transition-colors">
              {page.title}
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed flex-1">{page.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm text-[#666666] font-semibold">
              Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
