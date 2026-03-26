import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Living With Osteoporosis",
  description:
    "Practical guidance for people diagnosed with osteoporosis — treatment options, falls prevention, rehabilitation, mental health, and talking to your doctor.",
};

const pages = [
  { title: "Treatment Options", desc: "An overview of medication classes and non-medication approaches used to treat osteoporosis.", href: "/living-with-osteoporosis/treatment-options" },
  { title: "Falls Prevention", desc: "Why falls cause most fractures — and practical steps to reduce your risk at home and outdoors.", href: "/living-with-osteoporosis/falls-prevention" },
  { title: "Recovery & Rehabilitation", desc: "What to expect after a fragility fracture, and how Fracture Liaison Services can help.", href: "/living-with-osteoporosis/recovery-and-rehabilitation" },
  { title: "Mental Health & Wellbeing", desc: "Managing fear of falling, maintaining confidence, and finding support in Ireland.", href: "/living-with-osteoporosis/mental-health-and-wellbeing" },
  { title: "Talking to Your Doctor", desc: "Questions to ask your doctor about diagnosis, DXA results, and treatment — so you get the most from every appointment.", href: "/living-with-osteoporosis/talking-to-your-doctor" },
];

export default function LivingWithOsteoporosisPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Living With Osteoporosis" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-4">Living With Osteoporosis</h1>
      <p className="text-lg text-[#666666] mb-10 leading-relaxed max-w-2xl">
        Being diagnosed with osteoporosis can feel daunting. But with the right treatment, lifestyle adjustments,
        and support, most people with osteoporosis can live well and significantly reduce their fracture risk.
        This section covers everything you need to know.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group flex flex-col gap-3 p-6 bg-white rounded-2xl border border-[#e0e0e0] hover:border-[#E7D549] hover:shadow-md transition-all"
          >
            <h2 className="text-lg font-bold text-[#434343] group-hover:text-[#555555] transition-colors">{page.title}</h2>
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
