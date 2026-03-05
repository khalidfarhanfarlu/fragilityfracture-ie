import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, AlertCircle, BookOpen, FlaskConical, HeartPulse, Shield, Users, Bone, Clock, Calendar, Sun, Dumbbell, Salad } from "lucide-react";
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
  Prevention: "bg-yellow-100 text-yellow-800",
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
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
          aria-label="Hero"
        >
          {/* Dot pattern overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(231,213,73,0.4) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Large decorative circle — back layer */}
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full border border-white/5 bg-white/5"
          />
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 w-[420px] h-[420px] rounded-full border border-white/5"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* ── Left: copy ─────────────────── */}
              <div>
                <p className="inline-flex items-center gap-2 text-[#E7D549] font-semibold text-xs uppercase tracking-widest mb-5 bg-white/10 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E7D549] animate-pulse" aria-hidden="true" />
                  Ireland&apos;s Bone Health Resource
                </p>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-5">
                  Understanding<br />
                  <span className="text-[#E7D549]">Osteoporosis</span> &amp;<br />
                  Fragility Fractures
                </h1>

                <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg">
                  Plain-language information about bone density, fracture risk, and what you can do —
                  written for people in Ireland, their families, and their carers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link
                    href="/about-osteoporosis/risk-factors"
                    className="inline-flex items-center justify-center gap-2 bg-[#E7D549] text-slate-900 hover:bg-[#d4c43e] font-bold px-7 py-3.5 rounded-xl text-base transition-colors shadow-lg shadow-black/30"
                  >
                    Am I at Risk? <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/living-with-osteoporosis/treatment-options"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-7 py-3.5 rounded-xl text-base transition-colors"
                  >
                    I&apos;ve Been Diagnosed <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                  {["HSE guidelines", "IOF evidence-based", "Plain English", "Ireland-specific"].map((t) => (
                    <span key={t} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                      <span aria-hidden="true" className="text-[#E7D549]">✓</span> {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Right: hero image + floating stat cards ─── */}
              <div className="hidden lg:block relative h-[440px]" aria-hidden="true">
                {/* Hero photo */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                    alt="Active older woman walking outdoors"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 0px, 50vw"
                  />
                  {/* Dark overlay so cards are readable */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
                </div>

                {/* Large feature card */}
                <div className="absolute top-4 right-4 w-56 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-xl">
                  <p className="text-4xl font-extrabold text-white mb-1">500K+</p>
                  <p className="text-slate-300 text-sm leading-snug">
                    people in Ireland estimated to have osteoporosis
                  </p>
                  <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-[#E7D549] rounded-full" />
                  </div>
                  <p className="text-[#E7D549] text-xs mt-1.5">diagnosed vs undiagnosed</p>
                </div>

                {/* Middle left card */}
                <div className="absolute bottom-28 left-4 w-48 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl">
                  <p className="text-3xl font-extrabold text-white mb-1">1 in 2</p>
                  <p className="text-slate-300 text-sm leading-snug">women over 50 will have an osteoporosis fracture</p>
                </div>

                {/* Bottom right card */}
                <div className="absolute bottom-4 right-4 w-52 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl">
                  <p className="text-3xl font-extrabold text-white mb-1">1 in 5</p>
                  <p className="text-slate-300 text-sm leading-snug">men over 50 are also affected — often undiagnosed</p>
                </div>

                {/* T-score mini visual */}
                <div className="absolute top-36 left-4 w-40 bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg">
                  <p className="text-[#E7D549] text-xs font-semibold uppercase tracking-wide mb-3">T-score scale</p>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { label: "Normal", width: "w-full", colour: "bg-emerald-400" },
                      { label: "Osteopenia", width: "w-2/3", colour: "bg-[#E7D549]" },
                      { label: "Osteoporosis", width: "w-1/3", colour: "bg-red-400" },
                    ].map(({ label, width, colour }) => (
                      <div key={label} className="flex items-center gap-2">
                        <div className={`h-1.5 ${width} ${colour} rounded-full`} />
                        <span className="text-slate-300 shrink-0">{label}</span>
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
                <div key={stat} className="bg-[#F9F9F9] rounded-2xl p-6 border border-slate-200">
                  <p className="text-4xl font-extrabold text-slate-900 mb-2">{stat}</p>
                  <p className="text-slate-500 text-sm leading-snug">{label}</p>
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
                  colour: "bg-slate-800",
                },
                {
                  Icon: FlaskConical,
                  title: "Test for It",
                  desc: "Find out about DXA scans — what they involve, how to get referred in Ireland, and how to understand your T-score.",
                  href: "/bone-density-testing/what-is-a-dxa-scan",
                  cta: "Bone Density & Testing",
                  colour: "bg-emerald-700",
                },
                {
                  Icon: HeartPulse,
                  title: "Manage It",
                  desc: "From nutrition and exercise to treatment options and falls prevention — practical steps you can take today.",
                  href: "/prevention/nutrition-and-calcium",
                  cta: "Prevention & Living Well",
                  colour: "bg-slate-700",
                },
              ].map(({ Icon, title, desc, href, cta, colour }) => (
                <div key={title} className="relative flex flex-col bg-[#F9F9F9] rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <div className={`${colour} px-8 pt-8 pb-10`}>
                    <div className="bg-[#E7D549]/20 rounded-xl p-3.5 w-fit mb-4">
                      <Icon className="w-7 h-7 text-[#E7D549]" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                  </div>
                  <div className="flex flex-col flex-1 px-8 pt-6 pb-8 -mt-4">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-5 -mt-4">
                      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 text-slate-700 font-semibold text-sm hover:gap-2 hover:text-slate-900 transition-all mt-auto"
                    >
                      {cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BONE HEALTH VISUAL SECTION ────────────────────────── */}
        <section className="py-16 bg-[#F9F9F9] border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Why Bone Health Matters</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-base">
                Osteoporosis is a silent condition — bones weaken gradually with no symptoms until a fracture occurs.
                Early awareness and action make a real difference.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Image card 1: Bone density scan */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <div className="relative h-52">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                    alt="Medical professional reviewing bone density scan results"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">Bone Density Testing</p>
                    <p className="text-slate-300 text-xs mt-0.5">DXA scans detect bone loss before fractures occur</p>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <Link href="/bone-density-testing/what-is-a-dxa-scan" className="text-sm font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1">
                    Learn about DXA scans <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Image card 2: Calcium / nutrition */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <div className="relative h-52">
                  <Image
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80"
                    alt="Calcium-rich foods including dairy, leafy greens and nuts"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">Nutrition & Calcium</p>
                    <p className="text-slate-300 text-xs mt-0.5">Diet is the foundation of strong bones</p>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <Link href="/prevention/nutrition-and-calcium" className="text-sm font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1">
                    Calcium & bone nutrition <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Image card 3: Exercise / active living */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <div className="relative h-52">
                  <Image
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80"
                    alt="Older adults exercising and staying active for bone health"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">Exercise & Activity</p>
                    <p className="text-slate-300 text-xs mt-0.5">Weight-bearing exercise builds and maintains bone</p>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <Link href="/prevention/exercise" className="text-sm font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1">
                    Exercise for bone health <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FRAGILITY FRACTURE EXPLAINER ──────────────────────── */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#E7D549]/20 rounded-lg p-2.5">
                    <AlertCircle className="w-6 h-6 text-slate-700" aria-hidden="true" />
                  </div>
                  <span className="text-slate-600 font-semibold text-sm uppercase tracking-wide">What You Need to Know</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">What is a Fragility Fracture?</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  A fragility fracture is a broken bone caused by a force that would not normally break a healthy bone —
                  such as a minor fall, a bump, or even everyday activities like coughing or bending.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  They are most common at the hip, spine, and wrist, and are often the first visible sign of osteoporosis.
                  A first fracture increases the risk of a second by up to 86%.
                </p>
                <Link
                  href="/about-osteoporosis/what-is-a-fragility-fracture"
                  className="inline-flex items-center gap-2 bg-[#E7D549] hover:bg-[#d4c43e] text-slate-900 font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: image + quick links */}
              <div className="space-y-4">
                {/* Fracture image */}
                <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=700&q=80"
                    alt="Medical consultation about bone fracture risk"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold text-sm">Common fracture sites: hip, spine, wrist</p>
                  </div>
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
                      className="bg-[#F9F9F9] rounded-xl p-4 border border-slate-200 hover:border-[#E7D549] hover:shadow-sm transition-all"
                    >
                      <Icon className="w-5 h-5 text-slate-500 mb-2" aria-hidden="true" />
                      <p className="font-semibold text-slate-800 text-sm mb-0.5">{label}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VITAMIN D BANNER ────────────────────────────────── */}
        <section className="bg-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#E7D549]/20 rounded-lg p-2">
                    <Sun className="w-5 h-5 text-[#E7D549]" aria-hidden="true" />
                  </div>
                  <span className="text-[#E7D549] font-semibold text-xs uppercase tracking-widest">Vitamin D in Ireland</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Most Irish Adults Are Deficient in Vitamin D</h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  Ireland&apos;s latitude and climate means sunlight is often insufficient for adequate vitamin D synthesis.
                  Vitamin D is essential for calcium absorption and bone health — supplementation is recommended for most Irish adults.
                </p>
                <Link
                  href="/prevention/vitamin-d"
                  className="inline-flex items-center gap-2 bg-[#E7D549] hover:bg-[#d4c43e] text-slate-900 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  Vitamin D in Ireland <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative h-56 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1584467735871-8e69ad42f4d4?auto=format&fit=crop&w=700&q=80"
                  alt="Vitamin D supplements and sunlight - essential for bone health"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-slate-900/30" />
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
                { label: "Calcium & Nutrition", href: "/prevention/nutrition-and-calcium", desc: "Foods that build and maintain bone density", Icon: Salad },
                { label: "Vitamin D in Ireland", href: "/prevention/vitamin-d", desc: "Why supplementation is especially important here", Icon: Sun },
                { label: "Exercise for Bone Health", href: "/prevention/exercise", desc: "Weight-bearing activities that make a difference", Icon: Dumbbell },
                { label: "Understanding T-scores", href: "/bone-density-testing/understanding-your-results", desc: "What your DXA scan results mean", Icon: FlaskConical },
                { label: "Treatment Options", href: "/living-with-osteoporosis/treatment-options", desc: "Medication and non-medication approaches", Icon: HeartPulse },
                { label: "Falls Prevention", href: "/living-with-osteoporosis/falls-prevention", desc: "Home safety and balance tips", Icon: Shield },
                { label: "Fracture Liaison Services", href: "/living-with-osteoporosis/recovery-and-rehabilitation", desc: "How FLS helps after a fracture in Ireland", Icon: Users },
                { label: "Osteoporosis in Men", href: "/about-osteoporosis/osteoporosis-in-men", desc: "The under-diagnosed group", Icon: Users },
                { label: "Resources & Support", href: "/resources", desc: "Irish organisations and helpful links", Icon: BookOpen },
              ].map(({ label, href, desc, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-[#E7D549] hover:bg-[#F9F9F9] transition-all group"
                >
                  <div className="bg-[#E7D549]/15 rounded-lg p-2 shrink-0 mt-0.5 group-hover:bg-[#E7D549]/25 transition-colors">
                    <Icon className="w-4 h-4 text-slate-700" aria-hidden="true" />
                  </div>
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
        <section className="bg-gradient-to-b from-[#F9F9F9] to-white border-t border-slate-100 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-slate-500 font-semibold text-sm uppercase tracking-wide mb-1">From the Blog</p>
                <h2 className="text-2xl font-bold text-slate-900">Latest Articles</h2>
              </div>
              <Link href="/blog" className="text-sm text-slate-700 font-semibold hover:text-slate-900 flex items-center gap-1">
                All articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-[#E7D549] hover:shadow-lg transition-all overflow-hidden flex flex-col"
                >
                  {/* Coloured top bar */}
                  <div className="h-1.5 bg-gradient-to-r from-[#E7D549] to-[#c8b938]" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColours[post.category] ?? "bg-slate-100 text-slate-600"}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3 h-3" /> {post.readingTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2 leading-snug text-base group-hover:text-slate-900 transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="text-xs text-slate-700 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <div className="bg-[#F9F9F9] rounded-2xl p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-5">
                  <Users className="w-6 h-6 text-slate-600" aria-hidden="true" />
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
                    className="text-sm text-slate-700 font-medium underline hover:text-slate-900">
                    Irish Osteoporosis Society ↗
                  </a>
                  <a href="https://www.hse.ie" target="_blank" rel="noopener noreferrer"
                    className="text-sm text-slate-700 font-medium underline hover:text-slate-900">
                    HSE.ie ↗
                  </a>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Yellow accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E7D549]" />
                <h2 className="text-xl font-bold mb-3">Concerned about your bones?</h2>
                <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                  If you&apos;re worried about osteoporosis, have had a fracture, or have risk factors, your GP is your
                  first port of call. Bone density testing (a DXA scan) is the only way to diagnose osteoporosis.
                </p>
                <p className="text-slate-400 text-sm mb-5 italic">
                  &ldquo;Ask your GP about a bone density (DXA) scan.&rdquo;
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/living-with-osteoporosis/talking-to-your-doctor"
                    className="inline-flex items-center justify-center gap-2 bg-[#E7D549] text-slate-900 hover:bg-[#d4c43e] font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Questions to Ask Your Doctor
                  </Link>
                  <Link
                    href="/bone-density-testing/how-to-get-tested-in-ireland"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    How to Get Tested in Ireland
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER ───────────────────────────────────────── */}
        <div className="bg-[#F9F9F9] border-t border-slate-200 py-4">
          <p className="text-center text-xs text-slate-600 max-w-3xl mx-auto px-4">
            <strong>Medical Disclaimer:</strong> This site provides educational information only and does not constitute
            medical advice. Always consult your GP or qualified healthcare provider.
          </p>
        </div>
      </main>
    </>
  );
}
