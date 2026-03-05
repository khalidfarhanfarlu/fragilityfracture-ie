import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "News & Blog",
  description:
    "Articles on osteoporosis, bone health, nutrition, exercise, and treatment — written for people in Ireland.",
};

const articles = [
  {
    title: "Understanding Your DXA Scan Results",
    excerpt: "What your T-score and Z-score mean, how to interpret the categories, and what action to take after your bone density results.",
    href: "/bone-density-testing/understanding-your-results",
    category: "Testing",
    date: "February 2026",
  },
  {
    title: "Calcium & Vitamin D: Why Both Matter in Ireland",
    excerpt: "Ireland's northern latitude means most adults don't get enough Vitamin D from sunlight, especially October to March. Here's what the evidence says and what to do.",
    href: "/prevention/vitamin-d",
    category: "Nutrition",
    date: "February 2026",
  },
  {
    title: "Falls Prevention: Reducing Your Risk at Home",
    excerpt: "Most fragility fractures are caused by falls. Simple, practical home safety changes and balance exercises can significantly reduce your risk.",
    href: "/living-with-osteoporosis/falls-prevention",
    category: "Prevention",
    date: "January 2026",
  },
  {
    title: "The Fracture Liaison Service: What It Is and Why It Matters",
    excerpt: "Most people who suffer a fragility fracture are never assessed or treated for the underlying osteoporosis. Fracture Liaison Services aim to change that.",
    href: "/fragility-fractures/secondary-fracture-prevention",
    category: "Treatment",
    date: "January 2026",
  },
  {
    title: "Osteoporosis in Men: The Under-Diagnosed Group",
    excerpt: "One in five men over 50 will experience an osteoporosis-related fracture. Why are men so often missed — and what should change?",
    href: "/about-osteoporosis/osteoporosis-in-men",
    category: "Awareness",
    date: "December 2025",
  },
  {
    title: "Bone Health at Every Age: A Life-Course Approach",
    excerpt: "From peak bone mass in your twenties to falls prevention in your eighties, here's what you should be doing for your bones at every stage of life.",
    href: "/prevention/bone-health-at-every-age",
    category: "Prevention",
    date: "December 2025",
  },
];

const categoryColours: Record<string, string> = {
  Testing: "bg-blue-100 text-blue-700",
  Nutrition: "bg-emerald-100 text-emerald-700",
  Prevention: "bg-[#E7D549]/15 text-[#555555]",
  Treatment: "bg-violet-100 text-violet-700",
  Awareness: "bg-amber-100 text-amber-700",
  Research: "bg-rose-100 text-rose-700",
};

export default function NewsPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "News & Blog" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-4">News &amp; Blog</h1>
      <p className="text-lg text-[#666666] mb-10 leading-relaxed max-w-2xl">
        Articles and updates on osteoporosis, bone health, and related topics — written for people in Ireland and
        reviewed against current clinical guidelines.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map(({ title, excerpt, href, category, date }) => (
          <Link
            key={href}
            href={href}
            className="group bg-white border border-[#e0e0e0] rounded-2xl p-6 hover:border-[#E7D549] hover:shadow-md transition-all flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColours[category] || "bg-[#f0f0f0] text-[#666666]"}`}>
                {category}
              </span>
              <span className="text-xs text-[#999999]">{date}</span>
            </div>
            <h2 className="font-bold text-[#434343] text-lg mb-3 leading-snug group-hover:text-[#555555] transition-colors">
              {title}
            </h2>
            <p className="text-[#888888] text-sm leading-relaxed flex-1 mb-4">{excerpt}</p>
            <span className="inline-flex items-center gap-1.5 text-sm text-[#666666] font-semibold">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-[#F9F9F9] border border-[#e0e0e0] rounded-xl p-6">
        <p className="text-[#434343] text-sm">
          <strong>About our content:</strong> All articles on FragilityFracture.ie are written in plain English and
          reviewed against current clinical guidelines (HSE, NICE, International Osteoporosis Foundation). Content
          is reviewed and updated regularly. Each article displays a &ldquo;last reviewed&rdquo; date.
        </p>
      </div>
    </PageLayout>
  );
}
