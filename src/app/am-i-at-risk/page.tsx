import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Clock, FileText } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import RiskQuiz from "@/components/RiskQuiz";

export const metadata: Metadata = {
  title: "Am I at Risk of Osteoporosis?",
  description:
    "Take our free 10-question osteoporosis risk quiz. Based on established clinical risk factors, it takes under 3 minutes and helps you decide whether to speak to your GP.",
  openGraph: {
    title: "Am I at Risk of Osteoporosis? — Free Quiz",
    description:
      "Answer 10 quick questions based on established risk factors to get a personalised risk indication. Not a diagnosis — a starting point for a GP conversation.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Osteoporosis Risk Quiz",
  description:
    "A free educational quiz to help Irish adults understand their osteoporosis risk profile, based on established clinical risk factors.",
  url: "https://fragilityfracture.ie/am-i-at-risk",
  inLanguage: "en-IE",
  audience: { "@type": "Patient" },
  publisher: {
    "@type": "Organization",
    name: "FragilityFracture.ie",
    url: "https://fragilityfracture.ie",
  },
};

export default function AmIAtRiskPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className="min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
            <div className="flex flex-wrap gap-4 mb-5">
              <span className="flex items-center gap-1.5 bg-white/15 text-white text-sm px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4" aria-hidden="true" /> Under 3 minutes
              </span>
              <span className="flex items-center gap-1.5 bg-white/15 text-white text-sm px-3 py-1.5 rounded-full">
                <FileText className="w-4 h-4" aria-hidden="true" /> 10 questions
              </span>
              <span className="flex items-center gap-1.5 bg-white/15 text-white text-sm px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" /> No data stored
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Am I at Risk of Osteoporosis?
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Answer 10 quick questions based on the same risk factors used by GPs in clinical
              practice. Your answers stay on your device — nothing is sent or stored.
            </p>
            <p className="text-[#E7D549] text-sm mt-4 italic">
              This quiz provides an educational indication only. It is not a medical diagnosis.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumb items={[{ label: "Am I at Risk?" }]} />

          {/* What this quiz is based on */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 max-w-2xl mx-auto">
            <p className="text-blue-900 text-sm leading-relaxed">
              <strong>Based on established clinical risk factors.</strong> The questions in this
              quiz are drawn from the same risk factors used in the{" "}
              <Link
                href="/bone-density-testing/frax-fracture-risk-tool"
                className="underline hover:text-blue-700"
              >
                FRAX fracture risk tool
              </Link>{" "}
              — a WHO-developed assessment used by GPs worldwide. It is not a replacement for
              a professional assessment.
            </p>
          </div>

          {/* Quiz */}
          <RiskQuiz />

          {/* Bottom info strip */}
          <div className="mt-12 pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
            <div>
              <p className="text-2xl font-extrabold text-slate-700 mb-1">500,000+</p>
              <p className="text-sm text-slate-600">people in Ireland have osteoporosis</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-slate-700 mb-1">1 in 2</p>
              <p className="text-sm text-slate-600">women over 50 will have a fracture</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-slate-700 mb-1">1 in 5</p>
              <p className="text-sm text-slate-600">men over 50 will have a fracture</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
