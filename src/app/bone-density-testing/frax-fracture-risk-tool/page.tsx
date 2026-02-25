import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "FRAX Fracture Risk Tool",
  description:
    "The FRAX tool calculates your 10-year probability of a major fracture. Learn how it works, what inputs it uses, and how to interpret your score.",
};

export default function FraxToolPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Bone Density & Testing", href: "/bone-density-testing" },
        { label: "FRAX Fracture Risk Tool" },
      ]}
      gpCTAContext="Your FRAX score should be interpreted by your GP alongside other clinical information. Discuss your result at your next appointment."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">The FRAX Fracture Risk Tool</h1>

      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
        The FRAX tool is a free, online calculator developed by the World Health Organization (WHO) at the University
        of Sheffield. It estimates your <strong>10-year probability</strong> of sustaining a major osteoporotic
        fracture (hip, spine, wrist, or shoulder) based on a combination of risk factors.
      </p>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-8 flex items-start gap-4">
        <ExternalLink className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="font-bold text-teal-900 mb-1">Access the FRAX Tool</p>
          <p className="text-teal-800 text-sm mb-3">
            The official FRAX tool is freely available online. Select &ldquo;Ireland&rdquo; as your country for the
            most relevant fracture probability data.
          </p>
          <a
            href="https://www.sheffield.ac.uk/FRAX/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Open FRAX Calculator <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <h2>What Does FRAX Calculate?</h2>
      <p>FRAX provides two probability estimates:</p>
      <ul>
        <li><strong>10-year probability of a major osteoporotic fracture</strong> — covering hip, clinical spine, wrist, or shoulder fractures</li>
        <li><strong>10-year probability of a hip fracture</strong> — the most clinically significant individual fracture site</li>
      </ul>
      <p>
        These are expressed as percentages. For example, a 10-year hip fracture probability of 8% means that, based
        on your risk factors, approximately 8 out of 100 people like you would be expected to have a hip fracture in
        the next 10 years.
      </p>

      <h2>What Information Does FRAX Use?</h2>
      <p>FRAX takes the following inputs:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
        {[
          { label: "Age", note: "Risk increases significantly with age" },
          { label: "Sex", note: "Male or female" },
          { label: "Weight & height", note: "Low body weight increases risk" },
          { label: "Previous fracture", note: "Any prior adult fracture, even minor" },
          { label: "Parent hip fracture", note: "Family history of hip fracture" },
          { label: "Smoking", note: "Current smoking increases risk" },
          { label: "Glucocorticoids", note: "Current or previous use of corticosteroids" },
          { label: "Rheumatoid arthritis", note: "An independent risk factor for fracture" },
          { label: "Secondary osteoporosis", note: "Conditions causing bone loss (coeliac, etc.)" },
          { label: "Alcohol", note: "3+ units/day increases risk" },
          { label: "Femoral neck BMD", note: "Optional but improves accuracy if DXA available" },
        ].map(({ label, note }) => (
          <div key={label} className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-sm">
            <p className="font-semibold text-slate-800">{label}</p>
            <p className="text-slate-500 text-xs mt-0.5">{note}</p>
          </div>
        ))}
      </div>

      <p>
        If you have had a DXA scan, entering your femoral neck (hip) bone density result will make the FRAX
        calculation more accurate. However, FRAX can still provide useful estimates without a DXA result.
      </p>

      <h2>How to Use the FRAX Tool</h2>
      <ol>
        <li>Go to <a href="https://www.sheffield.ac.uk/FRAX/" target="_blank" rel="noopener noreferrer">www.sheffield.ac.uk/FRAX/</a></li>
        <li>Select <strong>Ireland</strong> from the country list</li>
        <li>Enter your details — age, sex, weight, height, and answer the yes/no questions about risk factors</li>
        <li>If you have a DXA result, enter your femoral neck BMD (the radiographer&apos;s report will include this number)</li>
        <li>Click &ldquo;Calculate&rdquo; — your results appear immediately</li>
      </ol>
      <p>
        Print or save your results and bring them to your next GP appointment. Your GP can use your FRAX score
        alongside other clinical factors to decide whether treatment is recommended.
      </p>

      <h2>How Do GPs Interpret FRAX Scores?</h2>
      <p>
        GPs use national and international guidelines to determine at what FRAX threshold treatment should be
        considered. In general:
      </p>
      <ul>
        <li>A <strong>high FRAX score</strong> (above the intervention threshold for your age) typically indicates that medication should be strongly considered, even without a DXA scan</li>
        <li>An <strong>intermediate score</strong> may prompt a DXA scan to refine the risk estimate before deciding on treatment</li>
        <li>A <strong>low score</strong> may mean treatment is not currently recommended, but lifestyle measures and monitoring continue</li>
      </ul>
      <p>
        The exact thresholds vary by country and guideline. In Ireland, the FRAX tool is used with Irish-specific
        fracture probability data and is interpreted against the guidance issued by the Irish Osteoporosis Society and
        the Royal College of Physicians of Ireland.
      </p>

      <h2>FRAX Has Limitations</h2>
      <p>
        FRAX is a useful tool but it has limitations:
      </p>
      <ul>
        <li>It does not capture how many falls a person has, which is an important risk factor</li>
        <li>It does not account for the dose of steroids (any current use is treated the same)</li>
        <li>It may underestimate risk in people who have had multiple vertebral fractures</li>
        <li>It is designed for untreated patients and should not be used to assess treatment response</li>
      </ul>
      <p>
        FRAX complements but does <strong>not replace</strong> a DXA scan. Used together, they give your GP the most
        complete picture of your fracture risk.
      </p>
    </PageLayout>
  );
}
