import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Osteoporosis Treatment Options",
  description:
    "An overview of osteoporosis treatment — including bisphosphonates, denosumab, HRT, and anabolic agents — in plain English. Always discuss with your GP.",
};

export default function TreatmentOptionsPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Living With Osteoporosis", href: "/living-with-osteoporosis" },
        { label: "Treatment Options" },
      ]}
      gpCTAContext="All treatment decisions must be made with your GP or specialist. This page provides general information only. If you have been diagnosed with osteoporosis, ask your GP what treatment options are right for you."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Treatment Options</h1>

      <p className="text-lg text-slate-600 mb-4 leading-relaxed">
        Osteoporosis is a treatable condition. While bone density cannot be fully restored to its original level,
        effective treatments can significantly slow or halt bone loss, reduce fracture risk, and in some cases
        modestly increase bone density.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="text-amber-900 text-sm">
          <strong>Important:</strong> This page provides a general overview for educational purposes only. It does not
          include dosage information or recommendations. All treatment decisions must be made in consultation with your
          GP or specialist, taking into account your individual circumstances, medical history, and test results.
        </p>
      </div>

      <h2>The Foundation: Calcium, Vitamin D, and Exercise</h2>
      <p>
        Regardless of which medication (if any) your GP recommends, the following are considered essential for
        everyone with osteoporosis:
      </p>
      <ul>
        <li><strong>Adequate calcium</strong> — ideally through diet; supplements may be added if dietary intake is insufficient</li>
        <li><strong>Adequate Vitamin D</strong> — supplementation is almost always recommended in Ireland due to limited sunlight; GPs typically prescribe this alongside medication</li>
        <li><strong>Regular weight-bearing and resistance exercise</strong> — see our <a href="/prevention/exercise">Exercise page</a></li>
        <li><strong>Falls prevention</strong> — addressing fall risk is as important as treating bone density; see our <a href="/living-with-osteoporosis/falls-prevention">Falls Prevention page</a></li>
      </ul>
      <p>
        These measures form the foundation of osteoporosis management for everyone — with or without additional
        medication.
      </p>

      <h2>Medication Classes</h2>
      <p>
        Your GP or specialist will decide whether medication is appropriate based on your bone density results,
        fracture history, fracture risk score, age, and other health factors. The most commonly used medication
        classes are:
      </p>

      <div className="space-y-5 mt-4">
        {[
          {
            name: "Bisphosphonates",
            examples: "Alendronate (Fosamax), risedronate, ibandronate, zoledronic acid",
            how: "Bisphosphonates are the most widely prescribed first-line treatment for osteoporosis worldwide. They work by slowing down the breakdown of bone (reducing osteoclast activity), which allows bone-building to keep pace with bone breakdown, increasing bone density over time.",
            notes: "They are available as weekly oral tablets, monthly oral tablets, or annual infusions (zoledronic acid). The oral forms should be taken on an empty stomach with a full glass of water, and you should stay upright for at least 30 minutes afterwards. Rare side effects (jaw problems, atypical fractures) should be discussed with your GP — the benefits significantly outweigh the risks for most people. Treatment breaks (drug holidays) may be considered after 5 years on oral bisphosphonates.",
          },
          {
            name: "Denosumab",
            examples: "Prolia (brand name)",
            how: "Denosumab is a monoclonal antibody — a biological medicine — that blocks RANK ligand, a protein essential to osteoclast (bone breakdown cell) function. By blocking this protein, it significantly reduces bone breakdown and increases bone density.",
            notes: "Given as a subcutaneous injection every 6 months, usually at a GP surgery or hospital clinic. It is effective for both post-menopausal osteoporosis and for bone loss in men on androgen deprivation therapy. It is important not to miss or delay injections, as stopping denosumab without a transition plan can lead to a rapid increase in fracture risk.",
          },
          {
            name: "Hormone Replacement Therapy (HRT)",
            examples: "Various forms of oestrogen (with or without progestogen for women with a uterus)",
            how: "Oestrogen plays a key role in maintaining bone density in women. HRT replaces the oestrogen lost at menopause and has been shown to reduce fracture risk. It is often used for women who need treatment for menopausal symptoms (hot flushes, night sweats, etc.) and who also have osteoporosis or are at high risk.",
            notes: "HRT is not a one-size-fits-all treatment. Your GP will discuss the benefits and risks of HRT in relation to your individual medical history. Modern HRT (particularly transdermal forms) is considered much safer than older formulations in most women. Bone protective effect is maintained while HRT is being taken.",
          },
          {
            name: "Anabolic Agents (Bone Builders)",
            examples: "Teriparatide (Forsteo), abaloparatide, romosozumab (Evenity)",
            how: "Unlike bisphosphonates and denosumab, which primarily slow bone breakdown, anabolic agents actively stimulate bone formation. They work by activating parathyroid hormone receptors (teriparatide) or blocking sclerostin, a protein that inhibits bone formation (romosozumab).",
            notes: "Anabolic agents are generally reserved for people with severe osteoporosis, very high fracture risk, or those who have not responded to other treatments. They are given as daily or monthly injections and are typically used for a defined period (e.g. 18–24 months for teriparatide), after which a bone-protective agent is prescribed to maintain the gains.",
          },
          {
            name: "Selective Oestrogen Receptor Modulators (SERMs)",
            examples: "Raloxifene (Evista)",
            how: "SERMs mimic oestrogen's beneficial effects on bone without the same effects on breast or uterine tissue. Raloxifene reduces the risk of vertebral fractures and is sometimes used in post-menopausal women who cannot take or are reluctant to take bisphosphonates.",
            notes: "Less effective than bisphosphonates for hip fracture prevention. Associated with increased risk of deep vein thrombosis (blood clots) — not suitable for those with a history of DVT.",
          },
        ].map(({ name, examples, how, notes }) => (
          <div key={name} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="bg-teal-700 px-6 py-4">
              <h3 className="text-white font-bold text-lg m-0">{name}</h3>
              <p className="text-teal-200 text-sm mt-1"><em>Examples: {examples}</em></p>
            </div>
            <div className="px-6 py-5 space-y-3">
              <div>
                <p className="font-semibold text-slate-700 text-sm mb-1">How it works:</p>
                <p className="text-sm text-slate-600 leading-relaxed">{how}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 text-sm mb-1">What you should know:</p>
                <p className="text-sm text-slate-600 leading-relaxed">{notes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>How Long Is Treatment?</h2>
      <p>
        Osteoporosis treatment is typically long-term — often years rather than months. However, treatment is not
        necessarily lifelong. Your GP will monitor your bone density periodically (usually every 1–2 years) and
        reassess whether treatment should continue, be changed, or include a treatment break.
      </p>
      <p>
        Do not stop any osteoporosis medication without discussing it with your GP first. Stopping some treatments
        abruptly (particularly denosumab) can have significant effects on bone density.
      </p>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mt-4">
        <p className="text-teal-900 text-sm">
          For a guide on how to talk to your GP about these options, including questions to ask about any recommended
          medication, visit our{" "}
          <a href="/living-with-osteoporosis/talking-to-your-doctor" className="text-teal-700 underline">
            Talking to Your Doctor page
          </a>.
        </p>
      </div>
    </PageLayout>
  );
}
