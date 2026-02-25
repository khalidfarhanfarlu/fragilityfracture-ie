import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Bone Health at Every Age",
  description:
    "What you should do for your bones at each stage of life — from childhood through to older age. A life-course approach to bone health.",
};

const stages = [
  {
    age: "Childhood & Adolescence (0–20)",
    colour: "bg-emerald-50 border-emerald-200",
    headerColour: "text-emerald-800",
    content: [
      "Up to 90% of peak bone mass is achieved by the age of 18. The bones built during childhood and adolescence largely determine lifetime fracture risk.",
      "Adequate calcium and Vitamin D intake during these years is critical. Children should eat calcium-rich foods (dairy, fortified foods) and spend time outdoors for Vitamin D.",
      "Physical activity — especially jumping, running, and sports — provides the mechanical stimulation needed for strong bone formation.",
      "Growth spurts in early adolescence are a particularly important window for bone building.",
      "Conditions like anorexia nervosa in teenagers can have severe, long-lasting effects on bone density.",
    ],
    actions: ["Calcium-rich foods at every meal", "Daily physical activity", "Vitamin D supplement (especially October–March)", "Limit fizzy drinks (high phosphoric acid)"],
  },
  {
    age: "20s & 30s — Building and Reaching Peak",
    colour: "bg-blue-50 border-blue-200",
    headerColour: "text-blue-800",
    content: [
      "Peak bone mass is typically reached between age 25 and 30. The habits established in your twenties and thirties help determine your bone bank for later life.",
      "Weight-bearing exercise and strength training are particularly effective during this period.",
      "Adequate calcium and Vitamin D remain important. Smoking and heavy drinking at this stage can permanently reduce the peak bone mass you achieve.",
      "Women planning pregnancy should ensure good nutritional status before and during pregnancy.",
    ],
    actions: ["Regular weight-bearing exercise", "Maintain healthy diet with adequate calcium", "Vitamin D supplementation", "Avoid smoking; limit alcohol"],
  },
  {
    age: "40s — Maintenance",
    colour: "bg-violet-50 border-violet-200",
    headerColour: "text-violet-800",
    content: [
      "In your forties, bone density begins to slowly decline. This is a normal part of ageing, but lifestyle choices can significantly affect the rate of decline.",
      "Women approaching perimenopause (typically 45–55) may start to notice early symptoms of hormonal change. Bone density can begin to decrease more rapidly in perimenopause even before periods stop.",
      "This is a good decade to review lifestyle risk factors, optimise nutrition, and consider whether a baseline DXA scan might be appropriate — particularly if you have multiple risk factors.",
    ],
    actions: ["Continue or increase exercise", "Review calcium and Vitamin D intake", "Discuss bone health at GP check-ups", "Be aware of perimenopausal changes"],
  },
  {
    age: "50s & Menopause — The Critical Window",
    colour: "bg-amber-50 border-amber-200",
    headerColour: "text-amber-800",
    content: [
      "Menopause marks the most significant period of bone loss for women. In the first 5–10 years following menopause, some women can lose 10–20% of their bone density.",
      "The loss of oestrogen at menopause removes a protective effect on bone. This is why post-menopausal women have a much higher risk of osteoporosis than men of the same age.",
      "A DXA scan should be discussed with your GP, particularly if you have additional risk factors or have experienced early menopause.",
      "Hormone replacement therapy (HRT) is protective for bone density and is sometimes used for this purpose, as well as for managing menopausal symptoms — discuss with your GP.",
      "This is also the time when wrist fractures most commonly occur — often a first signal of underlying bone density issues.",
    ],
    actions: ["Discuss DXA scan with GP", "Consider HRT discussion with GP", "Intensify exercise, especially strength training", "Optimise calcium and Vitamin D", "Review family history and risk factors"],
  },
  {
    age: "60s & 70s — Prevention and Monitoring",
    colour: "bg-orange-50 border-orange-200",
    headerColour: "text-orange-800",
    content: [
      "By the 60s and 70s, fracture risk is increasingly influenced by both bone density and fall risk. Falls prevention becomes as important as bone density itself.",
      "Regular DXA monitoring is recommended. If you have not had a DXA scan by your mid-60s, ask your GP.",
      "If you are on osteoporosis treatment, you should have regular monitoring of bone density and medication reviews.",
      "Balance exercises, home safety assessments, and medication reviews (some medications affect balance and coordination) are all important at this stage.",
      "Adequate protein intake becomes more important for muscle maintenance — which in turn supports falls prevention.",
    ],
    actions: ["DXA scan if not yet done", "Falls prevention measures at home", "Balance training (tai chi, yoga)", "Medication review for fall risk", "Adequate protein alongside calcium"],
  },
  {
    age: "80s and Beyond",
    colour: "bg-slate-50 border-slate-200",
    headerColour: "text-slate-800",
    content: [
      "In the oldest age groups, falls prevention is the single most important focus. Even a small reduction in fall risk can significantly reduce hip fractures.",
      "Maintaining mobility and muscle strength through gentle exercise (chair-based if needed) remains beneficial.",
      "Nutrition remains important — appetite often decreases with age, making supplementation more likely to be needed.",
      "If you are in residential care, ensure staff are aware of your bone health status and that you are receiving appropriate Vitamin D supplementation.",
      "Hip protector garments may be considered for those at very high fall risk — discuss with your GP or physio.",
    ],
    actions: ["Focus on fall prevention above all", "Gentle exercise: walking, chair-based exercises", "Ensure Vitamin D supplementation", "Home and care environment safety assessment"],
  },
];

export default function BoneHealthAtEveryAgePage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Prevention", href: "/prevention" },
        { label: "Bone Health at Every Age" },
      ]}
      showGPCTA={true}
      gpCTAContext="Whatever your age, it is never too early or too late to discuss your bone health with your GP. Book an appointment to talk about your individual risk and what you can do."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Bone Health at Every Age</h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Bone health is a lifelong concern — not just something to worry about in older age. The habits you build
        early in life, and the steps you take at each stage, all contribute to your bone strength and fracture risk
        later on. It is never too early to start — and never too late to make a difference.
      </p>

      <div className="space-y-6">
        {stages.map(({ age, colour, headerColour, content, actions }) => (
          <div key={age} className={`rounded-2xl border p-6 ${colour}`}>
            <h2 className={`text-xl font-bold mb-4 mt-0 ${headerColour}`}>{age}</h2>
            {content.map((para, i) => (
              <p key={i} className="text-sm text-slate-700 leading-relaxed mb-3">{para}</p>
            ))}
            <div className="mt-4 pt-4 border-t border-black/10">
              <p className="font-semibold text-slate-800 text-sm mb-2">Key actions at this stage:</p>
              <ul className="space-y-1">
                {actions.map((a) => (
                  <li key={a} className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-teal-600 mt-0.5">&#x2714;</span> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
