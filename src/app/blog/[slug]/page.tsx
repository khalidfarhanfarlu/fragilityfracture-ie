import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import Breadcrumb from "@/components/Breadcrumb";
import { getPostBySlug, getAllPostMeta } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPostMeta();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

const categoryColours: Record<string, string> = {
  Awareness: "bg-amber-100 text-amber-700",
  Nutrition: "bg-emerald-100 text-emerald-700",
  Prevention: "bg-[#E7D549]/15 text-[#555555]",
  Treatment: "bg-violet-100 text-violet-700",
  Research: "bg-blue-100 text-blue-700",
  "Patient Stories": "bg-rose-100 text-rose-700",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allMeta = getAllPostMeta();
  const currentIndex = allMeta.findIndex((p) => p.slug === slug);
  const prev = currentIndex < allMeta.length - 1 ? allMeta[currentIndex + 1] : null;
  const next = currentIndex > 0 ? allMeta[currentIndex - 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "FragilityFracture.ie", url: "https://fragilityfracture.ie" },
    inLanguage: "en-IE",
    url: `https://fragilityfracture.ie/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main id="main-content" className="min-h-screen">
        {/* Hero banner */}
        <div className="bg-gradient-to-br from-slate-800 to-[#2d2d2d] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColours[post.category] ?? "bg-white/20 text-white"}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-[#E7D549] text-sm">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span className="flex items-center gap-1 text-[#E7D549] text-sm">
                <Clock className="w-3.5 h-3.5" /> {post.readingTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">{post.title}</h1>
            <p className="text-[#bbbbbb] text-lg leading-relaxed max-w-2xl">{post.excerpt}</p>
            <p className="text-[#E7D549] text-sm mt-4">By {post.author}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

          <MedicalDisclaimer />

          <article className="content-body">
            <post.Content />
          </article>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-[#f0f0f0] text-[#666666] text-xs font-medium px-3 py-1.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* HCP CTA */}
          <div className="bg-[#434343] rounded-2xl p-8 mt-10 text-white">
            <h2 className="text-xl font-bold mb-2">Talk to Your HCP</h2>
            <p className="text-[#cccccc] mb-4 text-base">
              If this article has raised concerns about your bone health, don&apos;t wait. Your HCP can assess
              your risk and discuss whether a DXA scan is appropriate for you.
            </p>
            <p className="text-[#bbbbbb] text-sm mb-4 italic">
              &ldquo;Ask your HCP about a bone density (DXA) scan.&rdquo;
            </p>
            <Link
              href="/living-with-osteoporosis/talking-to-your-doctor"
              className="inline-flex items-center gap-2 bg-white text-[#555555] hover:bg-[#F9F9F9] font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Questions to Ask Your Doctor
            </Link>
          </div>

          {/* Prev / Next */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 border-t border-[#e0e0e0] pt-8">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex items-start gap-3 p-4 rounded-xl border border-[#e0e0e0] hover:border-[#E7D549] hover:bg-[#F9F9F9] transition-all"
              >
                <ArrowLeft className="w-4 h-4 text-[#999999] mt-1 shrink-0 group-hover:text-[#666666]" />
                <div>
                  <p className="text-xs text-[#999999] mb-1">Previous article</p>
                  <p className="text-sm font-semibold text-[#555555] group-hover:text-[#555555] leading-snug">{prev.title}</p>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex items-start gap-3 p-4 rounded-xl border border-[#e0e0e0] hover:border-[#E7D549] hover:bg-[#F9F9F9] transition-all sm:text-right sm:flex-row-reverse"
              >
                <ArrowRight className="w-4 h-4 text-[#999999] mt-1 shrink-0 group-hover:text-[#666666]" />
                <div>
                  <p className="text-xs text-[#999999] mb-1">Next article</p>
                  <p className="text-sm font-semibold text-[#555555] group-hover:text-[#555555] leading-snug">{next.title}</p>
                </div>
              </Link>
            ) : <div />}
          </div>

          <p className="text-xs text-[#999999] mt-6 text-right">
            Last reviewed: {post.date} — {post.author}
          </p>
        </div>
      </main>
    </>
  );
}
