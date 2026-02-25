import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Fragility Fractures",
  description:
    "Information on the types, causes, consequences, and prevention of fragility fractures — including hip, spinal, and wrist fractures.",
};

const pages = [
  { title: "Types of Fragility Fractures", desc: "An overview of the four most common fracture sites and what makes them fragility fractures.", href: "/fragility-fractures/types" },
  { title: "Hip Fractures", desc: "Why hip fractures are the most serious fragility fracture and what recovery looks like.", href: "/fragility-fractures/hip-fractures" },
  { title: "Vertebral (Spinal) Fractures", desc: "Why spinal fractures are often missed, and what symptoms to watch for.", href: "/fragility-fractures/vertebral-fractures" },
  { title: "Wrist Fractures", desc: "Often the first fragility fracture — and an important warning sign to take seriously.", href: "/fragility-fractures/wrist-fractures" },
  { title: "After a Fracture: What Next?", desc: "Immediate steps after a fracture and why secondary prevention is so important.", href: "/fragility-fractures/after-a-fracture" },
  { title: "Secondary Fracture Prevention", desc: "How to reduce your risk of a second fracture — and what a Fracture Liaison Service does.", href: "/fragility-fractures/secondary-fracture-prevention" },
];

export default function FragilityFracturesPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Fragility Fractures" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Fragility Fractures</h1>
      <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
        A fragility fracture is a serious medical event — often the first visible sign of osteoporosis. Understanding
        the different types of fragility fractures, their consequences, and how to prevent a second one can make a
        real difference to your health and independence.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group flex flex-col gap-3 p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all"
          >
            <h2 className="text-lg font-bold text-slate-800 group-hover:text-teal-700 transition-colors">{page.title}</h2>
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{page.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm text-teal-600 font-semibold">
              Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
