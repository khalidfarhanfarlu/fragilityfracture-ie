import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { AlertCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Osteoporosis Risk Factors",
  description:
    "Which factors increase your risk of osteoporosis and fragility fractures? Learn about modifiable and non-modifiable risk factors in an Irish context.",
};

const nonModifiable = [
  { factor: "Age", detail: "Bone density naturally declines with age. Risk increases significantly after 60." },
  { factor: "Female sex", detail: "Women have lower peak bone mass than men and lose bone rapidly after menopause." },
  { factor: "Early menopause", detail: "Menopause before age 45, whether natural or surgical, significantly increases risk due to earlier oestrogen loss." },
  { factor: "Family history", detail: "A parent (especially a mother) with osteoporosis or a history of hip fracture increases your risk." },
  { factor: "Body frame", detail: "Small body frame (low body weight) means less bone mass to begin with." },
  { factor: "Ethnicity", detail: "People of Caucasian or Asian ethnicity have higher risk, though osteoporosis affects all ethnicities." },
];

const modifiable = [
  { factor: "Low calcium diet", detail: "Calcium is the primary mineral in bone. Consistently low intake reduces bone density over time." },
  { factor: "Vitamin D deficiency", detail: "Essential for calcium absorption. Very common in Ireland due to limited sunlight, particularly October to March." },
  { factor: "Physical inactivity", detail: "Weight-bearing and resistance exercise stimulate bone formation. A sedentary lifestyle accelerates bone loss." },
  { factor: "Smoking", detail: "Smoking directly harms bone-forming cells and reduces oestrogen levels. It doubles the risk of fracture." },
  { factor: "Excess alcohol", detail: "More than 14 units per week interferes with bone formation and increases fall risk." },
  { factor: "Low body weight", detail: "BMI below 18.5 is a significant independent risk factor for osteoporosis." },
  { factor: "Long-term corticosteroid use", detail: "Medicines like prednisolone, taken for 3+ months, significantly reduce bone density. Never stop without GP advice." },
];

const medicalConditions = [
  "Coeliac disease (untreated)",
  "Inflammatory bowel disease (Crohn's, ulcerative colitis)",
  "Rheumatoid arthritis",
  "Hyperthyroidism (overactive thyroid)",
  "Hypogonadism (low sex hormone levels in men)",
  "Type 1 diabetes",
  "Chronic kidney disease",
  "Primary hyperparathyroidism",
  "Anorexia nervosa",
  "Premature ovarian insufficiency",
];

export default function RiskFactorsPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "About Osteoporosis", href: "/about-osteoporosis" },
        { label: "Risk Factors" },
      ]}
      gpCTAContext="If you recognise several risk factors that apply to you, speak to your GP. They can assess your risk and arrange a bone density (DXA) scan if appropriate."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Osteoporosis Risk Factors</h1>

      <p className="text-lg text-slate-600 mb-4 leading-relaxed">
        Several factors influence your risk of developing osteoporosis and sustaining a fragility fracture. Some of
        these you cannot change (non-modifiable), but many others you can actively address. Understanding your risk
        is the first step.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <p className="text-blue-900 text-sm">
          <strong>Important:</strong> Having risk factors does not mean you will definitely develop osteoporosis —
          it means your risk is higher than average. A DXA scan is the only way to know your actual bone density.
          Talk to your GP if you are concerned.
        </p>
      </div>

      <h2>Non-Modifiable Risk Factors</h2>
      <p>These are factors you cannot change, but knowing about them helps you and your GP assess your overall risk.</p>

      <div className="space-y-3 my-5">
        {nonModifiable.map(({ factor, detail }) => (
          <div key={factor} className="flex gap-3 items-start bg-slate-50 rounded-xl p-4 border border-slate-200">
            <AlertCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-slate-800 text-sm">{factor}</p>
              <p className="text-sm text-slate-600 mt-0.5">{detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Modifiable Risk Factors</h2>
      <p>
        These are factors within your control — addressing them can meaningfully reduce your risk of osteoporosis and
        fractures, even if you already have some non-modifiable risk factors.
      </p>

      <div className="space-y-3 my-5">
        {modifiable.map(({ factor, detail }) => (
          <div key={factor} className="flex gap-3 items-start bg-[#F9F9F9] rounded-xl p-4 border border-slate-200">
            <CheckCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-slate-800 text-sm">{factor}</p>
              <p className="text-sm text-slate-600 mt-0.5">{detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Medical Conditions That Increase Risk</h2>
      <p>
        A number of underlying health conditions are associated with lower bone density. If you have any of the
        following, make sure your GP is aware and discuss whether bone density monitoring is appropriate for you:
      </p>
      <ul>
        {medicalConditions.map((c) => <li key={c}>{c}</li>)}
      </ul>
      <p>
        Certain medications beyond corticosteroids can also affect bone density — including some anti-epileptic drugs,
        aromatase inhibitors (used in breast cancer treatment), and proton pump inhibitors (PPIs) when used long-term.
        If you take any of these, do not stop without speaking to your GP, but do ask about bone health monitoring.
      </p>

      <h2>The FRAX Tool</h2>
      <p>
        The <strong>FRAX fracture risk assessment tool</strong> (developed by the University of Sheffield for the WHO)
        combines several of these risk factors to calculate your 10-year probability of a hip fracture or major
        osteoporotic fracture. Your GP may use it alongside a DXA scan to guide decisions about treatment.
      </p>
      <p>
        You can learn more on our <a href="/bone-density-testing/frax-fracture-risk-tool">FRAX Fracture Risk Tool page</a>.
      </p>
    </PageLayout>
  );
}
