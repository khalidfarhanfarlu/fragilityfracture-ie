import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, AlertCircle, BookOpen, FlaskConical, HeartPulse,
  Shield, Users, Bone, Clock, Calendar, Sun, Dumbbell, Salad,
  TrendingDown, Activity,
} from "lucide-react";
import { getAllPostMeta } from "@/lib/posts";
import BoneHeroSlider from "@/components/BoneHeroSlider";
import BoneDensityChart from "@/components/BoneDensityChart";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BoneMicroscopyAnimation from "@/components/BoneMicroscopyAnimation";
import ImpactStats from "@/components/ImpactStats";

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

        {/* ── HERO SLIDER ───────────────────────────────────────────────── */}
        <BoneHeroSlider />

        {/* ── KEY STATISTICS STRIP ──────────────────────────────────────── */}
        <ImpactStats />

        {/* ── BONE MICROSCOPY ANIMATION ─────────────────────────────────── */}
        <BoneMicroscopyAnimation />

        {/* ── THREE PILLARS ─────────────────────────────────────────────── */}
        <section className="py-16 bg-white border-t border-[#eeeeee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#434343] mb-3">Your guide to better bone health</h2>
                <p className="text-[#888888] max-w-xl mx-auto">
                  Whether you want to take preventative action or have just been diagnosed, start here.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  Icon: BookOpen,
                  title: "Understand It",
                  desc: "Learn what osteoporosis is, how bone density changes with age, and what puts you at higher risk.",
                  href: "/about-osteoporosis/what-is-osteoporosis",
                  cta: "About Osteoporosis",
                  colour: "bg-[#434343]",
                  img: "/couple-walking.png",
                  imgAlt: "Couple walking together — staying active for bone health",
                  delay: 0,
                },
                {
                  Icon: FlaskConical,
                  title: "Test for It",
                  desc: "Find out about DXA scans — what they involve, how to get referred in Ireland, and how to understand your T-score.",
                  href: "/bone-density-testing/what-is-a-dxa-scan",
                  cta: "Bone Density & Testing",
                  colour: "bg-emerald-700",
                  img: "/dxa-scan.png",
                  imgAlt: "DXA bone density scan being performed",
                  delay: 100,
                },
                {
                  Icon: HeartPulse,
                  title: "Manage It",
                  desc: "From nutrition and exercise to treatment options and falls prevention — practical steps you can take today.",
                  href: "/prevention/nutrition-and-calcium",
                  cta: "Prevention & Living Well",
                  colour: "bg-[#555555]",
                  img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
                  imgAlt: "Older adults exercising for bone health",
                  delay: 200,
                },
              ].map(({ Icon, title, desc, href, cta, colour, img, imgAlt, delay }) => (
                <AnimateOnScroll key={title} delay={delay} direction="up">
                  <div className="relative flex flex-col bg-[#F9F9F9] rounded-2xl border border-[#e0e0e0] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group h-full">
                    {/* Image header */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={img}
                        alt={imgAlt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-600"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className={`absolute inset-0 ${colour} opacity-70`} />
                      <div className="absolute inset-0 flex items-end px-6 pb-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#E7D549]/20 rounded-xl p-2.5">
                            <Icon className="w-6 h-6 text-[#E7D549]" aria-hidden="true" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
                      <p className="text-[#666666] text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                      <Link
                        href={href}
                        className="inline-flex items-center gap-1.5 text-[#555555] font-semibold text-sm hover:gap-2.5 hover:text-[#434343] transition-all mt-auto"
                      >
                        {cta} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── BONE LIFECYCLE CHART ──────────────────────────────────────── */}
        <section className="py-16 bg-[#F9F9F9] border-y border-[#e0e0e0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left: explanation */}
              <AnimateOnScroll direction="left">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#E7D549]/20 rounded-lg p-2.5">
                      <TrendingDown className="w-5 h-5 text-[#555555]" aria-hidden="true" />
                    </div>
                    <span className="text-[#666666] font-semibold text-xs uppercase tracking-wider">The Bone Lifecycle</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#434343] mb-4">
                    How Bone Density Changes Over Your Lifetime
                  </h2>
                  <p className="text-[#666666] leading-relaxed mb-4">
                    Bone is living tissue, constantly being broken down and rebuilt. Mass peaks between ages
                    25–30, then gradually declines. For women, menopause triggers a steeper, faster loss —
                    up to <strong>20% in the first 5–7 years</strong>.
                  </p>
                  <p className="text-[#666666] leading-relaxed mb-6">
                    The chart shows why <strong>early action matters</strong>: the higher your peak bone mass
                    and the slower your rate of loss, the lower your lifetime fracture risk.
                  </p>
                  <div className="space-y-3">
                    {[
                      { color: "#22c55e", label: "Peak bone mass (age 25–30)", desc: "The ceiling you're protecting against future loss" },
                      { color: "#E7D549", label: "Menopause (age ~50)", desc: "Oestrogen drop accelerates bone loss in women" },
                      { color: "#ef4444", label: "Osteoporosis risk zone", desc: "Below 70% — where fracture risk rises sharply" },
                    ].map(({ color, label, desc }) => (
                      <div key={label} className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full mt-1 shrink-0" style={{ backgroundColor: color }} />
                        <div>
                          <p className="text-sm font-semibold text-[#434343]">{label}</p>
                          <p className="text-xs text-[#888888]">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/about-osteoporosis/what-is-osteoporosis"
                    className="inline-flex items-center gap-2 bg-[#E7D549] hover:bg-[#d4c43e] text-[#434343] font-semibold px-5 py-2.5 rounded-lg transition-colors mt-6"
                  >
                    About Osteoporosis <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateOnScroll>

              {/* Right: animated chart */}
              <AnimateOnScroll direction="right">
                <div className="bg-white rounded-2xl border border-[#e0e0e0] p-5 shadow-sm">
                  <BoneDensityChart />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── HEALTHY vs OSTEOPOROTIC BONE ─────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll direction="up">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-[#434343] mb-3">What Happens Inside the Bone</h2>
                <p className="text-[#888888] max-w-2xl mx-auto text-base">
                  Osteoporosis is a structural disease. Under a microscope, the difference between healthy
                  and osteoporotic bone is striking — and irreversible without intervention.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Healthy bone card */}
              <AnimateOnScroll direction="left">
                <div className="rounded-2xl overflow-hidden border border-[#e0e0e0] shadow-sm group">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
                      alt="Older adults exercising to maintain healthy bone density"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a1a]/80 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Healthy Bone
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-sm">Dense, well-connected trabecular structure</p>
                      <p className="text-green-300 text-xs mt-0.5">Strong lattice — resists everyday forces</p>
                    </div>
                  </div>
                  <div className="bg-white p-5">
                    <ul className="space-y-2 text-sm text-[#666666]">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" /> Thick cortical outer shell</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" /> Dense trabecular (spongy) network</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" /> Adequate calcium mineralisation</li>
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Osteoporotic bone card */}
              <AnimateOnScroll direction="right">
                <div className="rounded-2xl overflow-hidden border border-[#e0e0e0] shadow-sm group">
                  <div className="relative h-64">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1677507322117-0a3ff1132626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=800"
                      alt="Three anatomical views of human bones showing osteoporotic changes"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3a1a1a]/80 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Osteoporotic Bone
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-sm">Porous structure with weakened connections</p>
                      <p className="text-red-300 text-xs mt-0.5">Fragile lattice — fractures from minor forces</p>
                    </div>
                  </div>
                  <div className="bg-white p-5">
                    <ul className="space-y-2 text-sm text-[#666666]">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" /> Thinned cortical shell</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" /> Sparse, disconnected trabeculae</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" /> Reduced calcium and bone mineral density</li>
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* CTA strip */}
            <AnimateOnScroll direction="up" delay={100}>
              <div className="mt-8 bg-[#F9F9F9] rounded-2xl border border-[#e0e0e0] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Activity className="w-8 h-8 text-[#E7D549] shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-[#434343]">74% of patients with non-hip fractures were not on treatment at time of fracture</p>
                    <p className="text-[#888888] text-sm mt-0.5">IFLS-DB, 2024 — Ireland</p>
                  </div>
                </div>
                <Link
                  href="/fragility-fractures/secondary-fracture-prevention"
                  className="inline-flex items-center gap-2 bg-[#E7D549] hover:bg-[#d4c43e] text-[#434343] font-semibold px-5 py-2.5 rounded-lg transition-colors shrink-0"
                >
                  Secondary Prevention <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── BONE HEALTH VISUAL SECTION ────────────────────────────────── */}
        <section className="py-16 bg-[#F9F9F9] border-y border-[#e0e0e0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll direction="up">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-[#434343] mb-3">Why Bone Health Matters</h2>
                <p className="text-[#888888] max-w-2xl mx-auto text-base">
                  Osteoporosis is a silent condition — bones weaken gradually with no symptoms until a fracture occurs.
                  Early awareness and action make a real difference.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
                  alt: "Medical professional reviewing bone density scan results",
                  title: "Bone Density Testing",
                  sub: "DXA scans detect bone loss before fractures occur",
                  href: "/bone-density-testing/what-is-a-dxa-scan",
                  cta: "Learn about DXA scans",
                  delay: 0,
                },
                {
                  src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
                  alt: "Calcium-rich foods including dairy, leafy greens and nuts",
                  title: "Nutrition & Calcium",
                  sub: "Diet is the foundation of strong bones",
                  href: "/prevention/nutrition-and-calcium",
                  cta: "Calcium & bone nutrition",
                  delay: 100,
                },
                {
                  src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
                  alt: "Older adults exercising and staying active for bone health",
                  title: "Exercise & Activity",
                  sub: "Weight-bearing exercise builds and maintains bone",
                  href: "/prevention/exercise",
                  cta: "Exercise for bone health",
                  delay: 200,
                },
              ].map(({ src, alt, title, sub, href, cta, delay }) => (
                <AnimateOnScroll key={title} delay={delay} direction="up">
                  <div className="rounded-2xl overflow-hidden border border-[#e0e0e0] shadow-sm group hover:shadow-md transition-shadow">
                    <div className="relative h-52">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d]/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-bold text-sm">{title}</p>
                        <p className="text-[#bbbbbb] text-xs mt-0.5">{sub}</p>
                      </div>
                    </div>
                    <div className="bg-white p-4">
                      <Link href={href} className="text-sm font-semibold text-[#555555] hover:text-[#434343] flex items-center gap-1 group-hover:gap-2 transition-all">
                        {cta} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── FRAGILITY FRACTURE EXPLAINER ──────────────────────────────── */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll direction="left">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#E7D549]/20 rounded-lg p-2.5">
                      <AlertCircle className="w-6 h-6 text-[#555555]" aria-hidden="true" />
                    </div>
                    <span className="text-[#666666] font-semibold text-sm uppercase tracking-wide">What You Need to Know</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#434343] mb-4">What is a Fragility Fracture?</h2>
                  <p className="text-[#666666] mb-4 leading-relaxed">
                    A fragility fracture is a broken bone caused by a force that would not normally break a healthy bone —
                    such as a minor fall, a bump, or even everyday activities like coughing or bending.
                  </p>
                  <p className="text-[#666666] mb-6 leading-relaxed">
                    They are most common at the hip, spine, and wrist, and are often the first visible sign of osteoporosis.
                    <strong> Sustaining a fragility fracture doubles your future fracture risk.</strong>
                  </p>

                  {/* Ireland stat callout */}
                  <div className="bg-[#F9F9F9] rounded-xl border border-[#e0e0e0] p-4 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#888888] mb-2">Ireland Statistics</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { n: "30,000", label: "fractures per year in Ireland" },
                        { n: "74%", label: "of patients not on treatment at first fracture" },
                      ].map(({ n, label }) => (
                        <div key={n}>
                          <p className="text-2xl font-extrabold text-[#434343]">{n}</p>
                          <p className="text-xs text-[#888888] leading-tight">{label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-[#aaaaaa] mt-2">Source: IFLS-DB 2024</p>
                  </div>

                  <Link
                    href="/about-osteoporosis/what-is-a-fragility-fracture"
                    className="inline-flex items-center gap-2 bg-[#E7D549] hover:bg-[#d4c43e] text-[#434343] font-semibold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateOnScroll>

              {/* Right: image + quick links */}
              <AnimateOnScroll direction="right">
                <div className="space-y-4">
                  <div className="relative h-56 rounded-2xl overflow-hidden border border-[#e0e0e0]">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1763572177492-c0fa332c7ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=700"
                      alt="X-ray of human torso and arms showing common osteoporosis fracture sites"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2d2d2d]/60 to-transparent" />
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
                        className="bg-[#F9F9F9] rounded-xl p-4 border border-[#e0e0e0] hover:border-[#E7D549] hover:shadow-sm transition-all group"
                      >
                        <Icon className="w-5 h-5 text-[#888888] mb-2 group-hover:text-[#434343] transition-colors" aria-hidden="true" />
                        <p className="font-semibold text-[#434343] text-sm mb-0.5">{label}</p>
                        <p className="text-xs text-[#888888] leading-relaxed">{desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── VITAMIN D BANNER ───────────────────────────────────────────── */}
        <section className="bg-[#434343] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <AnimateOnScroll direction="left">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#E7D549]/20 rounded-lg p-2">
                      <Sun className="w-5 h-5 text-[#E7D549]" aria-hidden="true" />
                    </div>
                    <span className="text-[#E7D549] font-semibold text-xs uppercase tracking-widest">Vitamin D in Ireland</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">Most Irish Adults Are Deficient in Vitamin D</h2>
                  <p className="text-[#bbbbbb] text-sm leading-relaxed mb-4">
                    Ireland&apos;s latitude and climate means sunlight is often insufficient for adequate Vitamin D synthesis.
                    Studies show the average Vitamin D level in Irish elderly adults is <strong className="text-white">37.1 nmol/L</strong> — well
                    below the 50 nmol/L sufficiency threshold.
                  </p>
                  <p className="text-[#bbbbbb] text-sm leading-relaxed mb-5">
                    Vitamin D is essential for calcium absorption and bone mineralisation. Supplementation is
                    recommended for most Irish adults, especially from October to April.
                  </p>
                  <Link
                    href="/prevention/vitamin-d"
                    className="inline-flex items-center gap-2 bg-[#E7D549] hover:bg-[#d4c43e] text-[#434343] font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    Vitamin D in Ireland <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&w=700&q=80"
                    alt="Vitamin D supplements and sunlight — essential for bone health"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#434343]/30" />
                  {/* Floating fact card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="text-[#E7D549] text-xs font-bold uppercase tracking-wide mb-1">Key Fact</p>
                    <p className="text-white text-sm font-semibold">Older skin produces 4× less Vitamin D from sunlight</p>
                    <p className="text-white/60 text-xs mt-0.5">Supplementation fills the gap year-round</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── CALCIUM HIGHLIGHT ─────────────────────────────────────────── */}
        <section className="py-14 bg-white border-b border-[#eeeeee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <AnimateOnScroll direction="left">
                <div className="relative h-72 rounded-2xl overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
                    alt="Calcium-rich foods: dairy, leafy greens, nuts and seeds"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-600"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Calcium data overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm mb-2">Recommended daily calcium (adults 50+)</p>
                    <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-white/80 text-xs">Target</span>
                        <span className="text-[#E7D549] font-bold text-sm">1,200 mg/day</span>
                      </div>
                      <div className="h-1.5 bg-white/20 rounded-full">
                        <div className="h-full w-[54%] bg-red-400 rounded-full" />
                      </div>
                      <p className="text-white/60 text-xs mt-1.5">Average intake: 600–700 mg/day — only 54% of target</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll direction="right">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#E7D549]/20 rounded-lg p-2.5">
                      <Salad className="w-5 h-5 text-[#555555]" aria-hidden="true" />
                    </div>
                    <span className="text-[#666666] font-semibold text-xs uppercase tracking-wider">Calcium & Nutrition</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#434343] mb-4">The Calcium Gap in Irish Adults</h2>
                  <p className="text-[#666666] leading-relaxed mb-4">
                    The skeleton stores <strong>99% of the body&apos;s calcium</strong>. When dietary intake falls short,
                    the body extracts calcium from bone — directly accelerating bone loss.
                  </p>
                  <p className="text-[#666666] leading-relaxed mb-5">
                    Studies show most Irish adults aged 50+ consume only <strong>600–700 mg/day</strong>, well below
                    the recommended 1,000–1,200 mg/day. Bridging this gap through diet and supplementation
                    is one of the most effective steps you can take.
                  </p>

                  {/* Calcium intake table */}
                  <div className="bg-[#F9F9F9] rounded-xl border border-[#e0e0e0] overflow-hidden mb-5">
                    <div className="px-4 py-2 bg-[#434343]">
                      <p className="text-xs font-bold text-[#E7D549] uppercase tracking-wide">Daily Calcium Targets (IOF 2025)</p>
                    </div>
                    <div className="divide-y divide-[#eeeeee]">
                      {[
                        { group: "Ages 9–18", amount: "1,300 mg" },
                        { group: "Adults 19–50", amount: "1,000 mg" },
                        { group: "Women 51–70", amount: "1,200 mg" },
                        { group: "Adults 70+", amount: "1,200 mg" },
                      ].map(({ group, amount }) => (
                        <div key={group} className="flex justify-between px-4 py-2 text-sm">
                          <span className="text-[#666666]">{group}</span>
                          <span className="font-semibold text-[#434343]">{amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/prevention/nutrition-and-calcium"
                    className="inline-flex items-center gap-2 bg-[#E7D549] hover:bg-[#d4c43e] text-[#434343] font-semibold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Calcium & Bone Nutrition <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── TOPIC QUICK LINKS ─────────────────────────────────────────── */}
        <section className="py-14 bg-[#F9F9F9] border-b border-[#eeeeee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll direction="up">
              <h2 className="text-2xl font-bold text-[#434343] mb-8">Explore by topic</h2>
            </AnimateOnScroll>
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
              ].map(({ label, href, desc, Icon }, i) => (
                <AnimateOnScroll key={label} delay={Math.floor(i / 3) * 80} direction="up">
                  <Link
                    href={href}
                    className="flex items-start gap-3 p-4 rounded-xl border border-[#e0e0e0] bg-white hover:border-[#E7D549] hover:bg-[#fdfdf5] hover:shadow-sm transition-all group"
                  >
                    <div className="bg-[#E7D549]/15 rounded-lg p-2 shrink-0 mt-0.5 group-hover:bg-[#E7D549]/30 transition-colors">
                      <Icon className="w-4 h-4 text-[#555555]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#434343] text-sm">{label}</p>
                      <p className="text-xs text-[#888888] mt-0.5">{desc}</p>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG / LATEST ARTICLES ────────────────────────────────────── */}
        <section className="bg-white border-t border-[#eeeeee] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll direction="up">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-[#888888] font-semibold text-sm uppercase tracking-wide mb-1">From the Blog</p>
                  <h2 className="text-2xl font-bold text-[#434343]">Latest Articles</h2>
                </div>
                <Link href="/blog" className="text-sm text-[#555555] font-semibold hover:text-[#434343] flex items-center gap-1">
                  All articles <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <AnimateOnScroll key={post.slug} delay={i * 100} direction="up">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl border border-[#e0e0e0] hover:border-[#E7D549] hover:shadow-lg transition-all overflow-hidden flex flex-col h-full"
                  >
                    <div className="h-1.5 bg-gradient-to-r from-[#E7D549] to-[#c8b938]" />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColours[post.category] ?? "bg-[#f0f0f0] text-[#666666]"}`}>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#999999]">
                          <Clock className="w-3 h-3" /> {post.readingTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#434343] mb-2 leading-snug text-base flex-1">{post.title}</h3>
                      <p className="text-[#888888] text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#eeeeee] mt-auto">
                        <span className="flex items-center gap-1.5 text-xs text-[#999999]">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="text-xs text-[#555555] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST + doctor CTA ───────────────────────────────────────────── */}
        <section className="py-14 bg-[#F9F9F9] border-t border-[#eeeeee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <AnimateOnScroll direction="left">
                <div className="bg-white rounded-2xl p-8 border border-[#e0e0e0] h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <Users className="w-6 h-6 text-[#666666]" aria-hidden="true" />
                    <h2 className="text-xl font-bold text-[#434343]">About This Resource</h2>
                  </div>
                  <p className="text-[#666666] text-sm mb-4 leading-relaxed">
                    FragilityFracture.ie is an independent educational resource for people in Ireland. All content is
                    written in plain English and reviewed against current clinical guidelines (HSE, NICE, International
                    Osteoporosis Foundation).
                  </p>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    We are not affiliated with any pharmaceutical company and do not recommend specific products or brands.
                    This site does not provide medical advice — always speak to your doctor.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-5">
                    <a href="https://www.irishosteoporosis.ie" target="_blank" rel="noopener noreferrer"
                      className="text-sm text-[#555555] font-medium underline hover:text-[#434343]">
                      Irish Osteoporosis Society ↗
                    </a>
                    <a href="https://www.hse.ie" target="_blank" rel="noopener noreferrer"
                      className="text-sm text-[#555555] font-medium underline hover:text-[#434343]">
                      HSE.ie ↗
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll direction="right">
                <div className="bg-[#434343] rounded-2xl p-8 text-white relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#E7D549]" />
                  <h2 className="text-xl font-bold mb-3">Concerned about your bones?</h2>
                  <p className="text-[#bbbbbb] mb-4 leading-relaxed text-sm">
                    If you&apos;re worried about osteoporosis, have had a fracture, or have risk factors, your doctor is your
                    first port of call. Bone density testing (a DXA scan) is the only way to diagnose osteoporosis.
                  </p>
                  <p className="text-[#999999] text-sm mb-5 italic">
                    &ldquo;Ask your doctor about a bone density (DXA) scan.&rdquo;
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/living-with-osteoporosis/talking-to-your-doctor"
                      className="inline-flex items-center justify-center gap-2 bg-[#E7D549] text-[#434343] hover:bg-[#d4c43e] font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
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
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER ───────────────────────────────────────────────── */}
        <div className="bg-[#F9F9F9] border-t border-[#e0e0e0] py-4">
          <p className="text-center text-xs text-[#666666] max-w-3xl mx-auto px-4">
            <strong>Medical Disclaimer:</strong> This site provides educational information only and does not constitute
            medical advice. Always consult your doctor or qualified healthcare provider.
          </p>
        </div>
      </main>
    </>
  );
}
