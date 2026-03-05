import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { getAllPostMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "In-depth articles on osteoporosis, bone health, fracture prevention, and living well with bone conditions — written for people in Ireland.",
};

const categoryColours: Record<string, string> = {
  Awareness: "bg-amber-100 text-amber-700",
  Nutrition: "bg-emerald-100 text-emerald-700",
  Prevention: "bg-[#E7D549]/15 text-[#555555]",
  Treatment: "bg-violet-100 text-violet-700",
  Research: "bg-blue-100 text-blue-700",
  "Patient Stories": "bg-rose-100 text-rose-700",
};

export default function BlogPage() {
  const posts = getAllPostMeta();

  return (
    <PageLayout
      breadcrumbs={[{ label: "Blog" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-3">Blog</h1>
      <p className="text-lg text-[#666666] mb-10 leading-relaxed max-w-2xl">
        In-depth articles on osteoporosis, bone health, and fracture prevention — written in plain English for
        people in Ireland. A new post every month.
      </p>

      <div className="space-y-6">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col sm:flex-row gap-6 bg-white border border-[#e0e0e0] rounded-2xl p-6 hover:border-[#E7D549] hover:shadow-md transition-all"
          >
            {/* Number */}
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-[#F9F9F9] text-[#555555] font-extrabold text-xl shrink-0">
              {String(posts.length - i).padStart(2, "0")}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColours[post.category] ?? "bg-[#f0f0f0] text-[#666666]"}`}>
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#999999]">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#999999]">
                  <Clock className="w-3 h-3" /> {post.readingTime}
                </span>
              </div>

              <h2 className="font-bold text-[#434343] text-xl mb-2 leading-snug group-hover:text-[#555555] transition-colors">
                {post.title}
              </h2>
              <p className="text-[#888888] text-sm leading-relaxed mb-4">{post.excerpt}</p>

              <span className="inline-flex items-center gap-1.5 text-sm text-[#666666] font-semibold">
                Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-[#F9F9F9] border border-[#e0e0e0] rounded-2xl p-6">
        <h2 className="font-bold text-[#434343] text-base mb-2">A new post every month</h2>
        <p className="text-[#555555] text-sm leading-relaxed">
          We publish one new in-depth article each month on osteoporosis, bone health, and fracture prevention.
          All content is reviewed against current HSE and International Osteoporosis Foundation guidelines and
          marked with a &ldquo;last reviewed&rdquo; date.
        </p>
      </div>
    </PageLayout>
  );
}
