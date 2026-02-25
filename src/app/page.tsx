import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertCircle, BookOpen, FlaskConical, HeartPulse, Shield, Users, Bone, Clock, Calendar } from "lucide-react";
import { getAllPostMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "FragilityFracture.ie — Osteoporosis & Bone Health Education Ireland",
  description:
    "Ireland's plain-language guide to osteoporosis, bone density, and fragility fractures. Understand your risk, learn about DXA scans, and find Irish support resources.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "FragilityFracture.ie",
  description: "Educational website about osteoporosis, bone density, and fragility fractures for the Irish public.",
  url: "https://fragilityfracture.ie",
  inLanguage: "en-IE",
  audience: { "@type": "Patient", audienceType: "General public, patients with osteoporosis, carers" },
  publisher: { "@type": "Organization", name: "FragilityFracture.ie", url: "https://fragilityfracture.ie" },
};

const categoryColours: Record<string, string> = {
  Awareness: "bg-amber-100 text-amber-700",
  Nutrition: "bg-emerald-100 text-emerald-700",
  Prevention: "bg-teal-100 text-teal-700",
  Treatment: "bg-violet-100 text-violet-700",
  Research: "bg-blue-100 text-blue-700",
  "Patient Stories": "bg-rose-100 text-rose-700",
};

export default function Home() {
  const posts = getAllPostMeta().slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main id="main-content">

        {/* ── HERO ───────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white"
          aria-label="Hero"
        >
          {/* Dot pattern overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Large decorative circle — back layer */}
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full border border-white/10 bg-white/5"
          />
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 w-[420px] h-[420px] rounded-full border border-white/10"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* ── Left: copy ─────────────────── */}
              <div>
                <p className="inline-flex items-center gap-2 text-teal-300 font-semibold text-xs uppercase tracking-widest mb-5 bg-white/10 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse" aria-hidden="true" />
                  Ireland&apos;s Bone Health Resource
                </p>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-5">
                  Understanding<br />
                  <span className="text-teal-300">Osteoporosis</span> &amp;<br />
                  Fragility Fractures
                </h1>

                <p className="text-teal-100 text-lg mb-8 leading-relaxed max-w-lg">
                  Plain-language information about bone density, fracture risk, and what you can do —
                  written for people in Ireland, their families, and their carers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link
                    href="/about-osteoporosis/risk-factors"
                    className="inline-flex items-center justify-center gap-2 bg-white text-teal-800 hover:bg-teal-50 font-bold px-7 py-3.5 rounded-xl text-base transition-colors shadow-lg shadow-teal-900/30"
                  >
                    Am I at Risk? <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/living-with-osteoporosis/treatment-options"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-7 py-3.5 rounded-xl text-base transition-colors"
                  >
                    I&apos;ve Been Diagnosed <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-3 text-xs text-teal-300">
                  {["HSE guidelines", "IOF evidence-based", "Plain English", "Ireland-specific"].map((t) => (
                    <span key={t} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                      <span aria-hidden="true">✓</span> {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Right: floating stat cards ─── */}
              <div className="hidden lg:block relative h-96" aria-hidden="true">

                {/* Large feature card */}
                <div className="absolute top-0 right-0 w-64 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
                  <p className="text-5xl font-extrabold text-white mb-1">500K+</p>
                  <p className="text-teal-200 text-sm leading-snug">
                    people in Ireland estimated to have osteoporosis
                  </p>
                  <div className="mt-4 h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-teal-300 rounded-full" />
                  </div>
                  <p className="text-teal-300 text-xs mt-1.5">diagnosed vs undiagnosed</p>
                </div>

                {/* Middle left card */}
                <div className="absolute top-44 left-0 w-52 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-extrabold text-white mb-1">1 in 2</p>
                  <p className="text-teal-200 text-sm leading-snug">women over 50 will have an osteoporosis fracture</p>
                </div>

                {/* Bottom right card */}
                <div className="absolute bottom-0 right-8 w-56 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-extrabold text-white mb-1">1 in 5</p>
                  <p className="text-teal-200 text-sm leading-snug">men over 50 are also affected — often undiagnosed</p>
                </div>

                {/* Bone density mini visual */}
                <div className="absolute top-36 right-4 w-44 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-lg">
                  <p className="text-teal-300 text-xs font-semibold uppercase tracking-wide mb-3">T-score scale</p>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { label: "Normal", width: "w-full", colour: "bg-emerald-400" },
                      { label: "Osteopenia", width: "w-2/3", colour: "bg-yellow-400" },
                      { label: "Osteoporosis", width: "w-1/3", colour: "bg-red-400" },
                    ].map(({ label, width, colour }) => (
                      <div key={label} className="flex items-center gap-2">
                        <div className={`h-1.5 ${width} ${colour} rounded-full`} />
                        <span className="text-teal-200 shrink-0">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <div aria-hidden="true" className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ── KEY STATISTICS STRIP ──────────────────────────────── */}
        <section className="bg-white pt-6 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { stat: "500,000+", label: "people in Ireland estimated to have osteoporosis" },
                { stat: "1 in 2", label: "women over 50 will experience an osteoporosis-related fracture" },
                { stat: "20,000+", label: "osteoporotic fractures occur in Ireland every year" },
              ].map(({ stat, label }) => (
                <div key={stat} className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                  <p className="text-4xl font-extrabold text-teal-700 mb-2">{stat}</p>
                  <p className="text-slate-600 text-sm leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THREE PILLARS ────────────────────────────────────── */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Your guide to better bone health</h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Whether you&apos;ve just been diagnosed or want to take preventive action, start here.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  Icon: BookOpen,
                  title: "Understand It",
                  desc: "Learn what osteoporosis is, how bone density changes with age, and what puts you at higher risk — in plain English.",
                  href: "/about-osteoporosis/what-is-osteoporosis",
                  cta: "About Osteoporosis",
                  colour: "bg-teal-600",
                },
                {
                  Icon: FlaskConical,
                  title: "Test for It",
                  desc: "Find out about DXA scans — what they involve, how to get referred in Ireland, and how to understand your T-score.",
                  href: "/bone-density-testing/what-is-a-dxa-scan",
                  cta: "Bone Density & Testing",
                  colour: "bg-emerald-600",
                },
                {
                  Icon: HeartPulse,
                  title: "Manage It",
                  desc: "From nutrition and exercise to treatment options and falls prevention — practical steps you can take today.",
                  href: "/prevention/nutrition-and-calcium",
                  cta: "Prevention & Living Well",
                  colour: "bg-cyan-600",
                },
              ].map(({ Icon, title, desc, href, cta, colour }) => (
                <div key={title} className="relative flex flex-col bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <div className={`${colour} px-8 pt-8 pb-10`}>
                    <div className="bg-white/20 rounded-xl p-3.5 w-fit mb-4">
                      <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                  </div>
                  <div className="flex flex-col flex-1 px-8 pt-6 pb-8 -mt-4">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-5 -mt-4">
                      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 text-teal-700 font-semibold text-sm hover:gap-2 transition-all mt-auto"
                    >
                      {cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FRAGILITY FRACTURE EXPLAINER ──────────────────────── */}
        <section className="bg-slate-50 border-y border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-100 rounded-lg p-2.5">
                    <AlertCircle className="w-6 h-6 text-amber-600" aria-hidden="true" />
                  </div>
                  <span className="text-amber-700 font-semibold text-sm uppercase tracking-wide">What You Need to Know</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">What is a Fragility Fracture?</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  A fragility fracture is a broken bone caused by a force that would not normally break a healthy bone —
                  such as a minor fall, a bump, or even everyday activities like coughing or bending.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  They are most common at the hip, spine, and wrist, and are often the first visible sign of osteoporosis.
                  A first fracture increases the risk of a second by up to 86%.
                </p>
                <Link
                  href="/about-osteoporosis/what-is-a-fragility-fracture"
                  className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { Icon: Bone, label: "Hip Fractures", desc: "Most serious; high risk of complications", href: "/fragility-fractures/hip-fractures" },
                  { Icon: Bone, label: "Spinal Fractures", desc: "Often missed or misattributed to back pain", href: "/fragility-fractures/vertebral-fractures" },
                  { Icon: Bone, label: "Wrist Fractures", desc: "Often the first warning sign of osteoporosis", href: "/fragility-fractures/wrist-fractures" },
                  { Icon: Shield, label: "Prevention", desc: "Steps to reduce your fracture risk", href: "/prevention/exercise" },
                ].map(({ Icon, label, desc, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="bg-white rounded-xl p-5 border border-slate-200 hover:border-teal-300 hover:shadow-sm transition-all"
                  >
                    <Icon className="w-6 h-6 text-teal-600 mb-3" aria-hidden="true" />
                    <p className="font-semibold text-slate-800 text-sm mb-1">{label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TOPIC QUICK LINKS ────────────────────────────────── */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Explore by topic</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Calcium & Nutrition", href: "/prevention/nutrition-and-calcium", desc: "Foods that build and maintain bone density" },
                { label: "Vitamin D in Ireland", href: "/prevention/vitamin-d", desc: "Why supplementation is especially important here" },
                { label: "Exercise for Bone Health", href: "/prevention/exercise", desc: "Weight-bearing activities that make a difference" },
                { label: "Understanding T-scores", href: "/bone-density-testing/understanding-your-results", desc: "What your DXA scan results mean" },
                { label: "Treatment Options", href: "/living-with-osteoporosis/treatment-options", desc: "Medication and non-medication approaches" },
                { label: "Falls Prevention", href: "/living-with-osteoporosis/falls-prevention", desc: "Home safety and balance tips" },
                { label: "Fracture Liaison Services", href: "/living-with-osteoporosis/recovery-and-rehabilitation", desc: "How FLS helps after a fracture in Ireland" },
                { label: "Osteoporosis in Men", href: "/about-osteoporosis/osteoporosis-in-men", desc: "The under-diagnosed group" },
                { label: "Resources & Support", href: "/resources", desc: "Irish organisations and helpful links" },
              ].map(({ label, href, desc }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-all group"
                >
                  <ArrowRight className="w-4 h-4 text-teal-500 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG / LATEST ARTICLES ───────────────────────────── */}
        <section className="bg-gradient-to-b from-teal-50 to-white border-t border-teal-100 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-teal-600 font-semibold text-sm uppercase tracking-wide mb-1">From the Blog</p>
                <h2 className="text-2xl font-bold text-slate-900">Latest Articles</h2>
              </div>
              <Link href="/blog" className="text-sm text-teal-700 font-semibold hover:text-teal-800 flex items-center gap-1">
                All articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all overflow-hidden flex flex-col"
                >
                  {/* Coloured top bar */}
                  <div className="h-1.5 bg-gradient-to-r from-teal-500 to-emerald-400" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColours[post.category] ?? "bg-slate-100 text-slate-600"}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3 h-3" /> {post.readingTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2 leading-snug text-base group-hover:text-teal-700 transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="text-xs text-teal-600 font-semibold group-hover:gap-2 flex items-center gap-1">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST + GP CTA ───────────────────────────────────── */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-5">
                  <Users className="w-6 h-6 text-teal-600" aria-hidden="true" />
                  <h2 className="text-xl font-bold text-slate-800">About This Resource</h2>
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  FragilityFracture.ie is an independent educational resource for people in Ireland. All content is
                  written in plain English and reviewed against current clinical guidelines (HSE, NICE, International
                  Osteoporosis Foundation).
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We are not affiliated with any pharmaceutical company and do not recommend specific products or brands.
                  This site does not provide medical advice — always speak to your GP.
                </p>
                <div className="flex flex-wrap gap-4 mt-5">
                  <a href="https://www.irishosteoporosis.ie" target="_blank" rel="noopener noreferrer"
                    className="text-sm text-teal-700 font-medium underline hover:text-teal-800">
                    Irish Osteoporosis Society ↗
                  </a>
                  <a href="https://www.hse.ie" target="_blank" rel="noopener noreferrer"
                    className="text-sm text-teal-700 font-medium underline hover:text-teal-800">
                    HSE.ie ↗
                  </a>
                </div>
              </div>

              <div className="bg-teal-700 rounded-2xl p-8 text-white">
                <h2 className="text-xl font-bold mb-3">Concerned about your bones?</h2>
                <p className="text-teal-100 mb-4 leading-relaxed text-sm">
                  If you&apos;re worried about osteoporosis, have had a fracture, or have risk factors, your GP is your
                  first port of call. Bone density testing (a DXA scan) is the only way to diagnose osteoporosis.
                </p>
                <p className="text-teal-200 text-sm mb-5 italic">
                  &ldquo;Ask your GP about a bone density (DXA) scan.&rdquo;
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/living-with-osteoporosis/talking-to-your-doctor"
                    className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 hover:bg-teal-50 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Questions to Ask Your Doctor
                  </Link>
                  <Link
                    href="/bone-density-testing/how-to-get-tested-in-ireland"
                    className="inline-flex items-center justify-center gap-2 border border-white/50 text-white hover:bg-white/10 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    How to Get Tested in Ireland
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER ───────────────────────────────────────── */}
        <div className="bg-amber-50 border-t border-amber-100 py-4">
          <p className="text-center text-xs text-amber-800 max-w-3xl mx-auto px-4">
            <strong>Medical Disclaimer:</strong> This site provides educational information only and does not constitute
            medical advice. Always consult your GP or qualified healthcare provider.
          </p>
        </div>
      </main>
    </>
  );
}
