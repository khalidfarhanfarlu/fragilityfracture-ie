import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Nutrition for Bone Health",
  description:
    "How diet and nutrition support bone health throughout life. Foods that help build and protect bone density in Ireland.",
};

const calciumSources = [
  { food: "Milk (full fat or low fat)", serving: "200ml (a small glass)", calcium: "~240 mg" },
  { food: "Yoghurt (natural or flavoured)", serving: "125g (a standard single pot)", calcium: "~200 mg" },
  { food: "Hard cheese (e.g. Cheddar)", serving: "30g (about 2 tablespoons grated, or a matchbox-sized piece)", calcium: "~220 mg" },
  { food: "Tinned sardines (with bones)", serving: "100g (about half a standard tin)", calcium: "~350 mg" },
  { food: "Tinned salmon (with bones)", serving: "100g (about half a standard tin)", calcium: "~250 mg" },
  { food: "Fortified plant milk (e.g. oat, soy, almond)", serving: "200ml (a small glass)", calcium: "~240 mg (if fortified)" },
  { food: "Tofu (set with calcium)", serving: "100g (a slice about the size of a deck of cards)", calcium: "~200–300 mg" },
  { food: "Broccoli (cooked)", serving: "100g (about 4–5 medium florets or ½ cup)", calcium: "~40 mg" },
  { food: "Kale (cooked)", serving: "100g (about ¾ cup cooked, roughly a large handful raw)", calcium: "~130 mg" },
  { food: "Almonds", serving: "30g (about a small handful, roughly 20–25 nuts)", calcium: "~75 mg" },
  { food: "White bread (fortified)", serving: "2 slices", calcium: "~100 mg" },
];

export default function NutritionAndCalciumPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Prevention", href: "/prevention" },
        { label: "Nutrition" },
      ]}
      gpCTAContext="If you are unsure whether your calcium intake is adequate, or whether you need a supplement, speak to your doctor or a registered dietitian."
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-6">Nutrition for Bone Health</h1>

      <p className="text-lg text-[#666666] mb-6 leading-relaxed">
        Calcium is the most important mineral for bone health. About 99% of the body&apos;s calcium is stored in
        the bones and teeth. Getting enough calcium throughout life — especially in childhood, adolescence, and
        after menopause — is one of the most effective things you can do to protect your bones.
      </p>

      <h2>Why Is Calcium So Important for Bones?</h2>
      <p>
        Bone is constantly being broken down and rebuilt — a process called remodelling. If you do not get enough
        calcium in your diet, your body will draw calcium from your bones to maintain blood calcium levels. Over time,
        this leads to reduced bone density and increased fracture risk.
      </p>
      <p>
        Calcium also requires adequate <a href="/prevention/vitamin-d">Vitamin D</a> to be properly absorbed from
        the gut. Without enough Vitamin D, even a calcium-rich diet will not be fully effective.
      </p>

      <h2>How Much Calcium Do You Need?</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#434343] text-white">
              <th className="px-4 py-3 text-left">Life Stage</th>
              <th className="px-4 py-3 text-left">Recommended Daily Calcium</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Adults 19–50", "700–1,000 mg/day"],
              ["Women 51 and over", "1,200 mg/day"],
              ["Men 51–70", "1,000 mg/day"],
              ["Men 71 and over", "1,200 mg/day"],
              ["Pregnant/breastfeeding women", "1,000–1,200 mg/day"],
            ].map(([stage, amount], i) => (
              <tr key={stage} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-3 border-b border-[#eeeeee]">{stage}</td>
                <td className="px-4 py-3 border-b border-[#eeeeee] font-semibold text-[#555555]">{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#888888]">
        Based on FSAI (Food Safety Authority of Ireland) and European Food Safety Authority recommendations. Always
        discuss your personal requirements with your doctor or dietitian.
      </p>

      <h2>Best Food Sources of Calcium</h2>
      <p>
        Dairy products are the richest and most bioavailable sources of calcium in the Irish diet. However, many
        non-dairy foods also contain useful amounts, which is important for people who are lactose intolerant, vegan,
        or avoiding dairy for other reasons.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#555555] text-white">
              <th className="px-4 py-3 text-left">Food</th>
              <th className="px-4 py-3 text-left">Serving</th>
              <th className="px-4 py-3 text-left">Approx. Calcium</th>
            </tr>
          </thead>
          <tbody>
            {calciumSources.map(({ food, serving, calcium }, i) => (
              <tr key={food} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-3 border-b border-[#eeeeee]">{food}</td>
                <td className="px-4 py-3 border-b border-[#eeeeee] text-[#666666]">{serving}</td>
                <td className="px-4 py-3 border-b border-[#eeeeee] font-semibold text-[#555555]">{calcium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#888888]">Values are approximate. Check food labels for exact figures, especially for fortified products.</p>

      <h2>Do I Need a Calcium Supplement?</h2>
      <p>
        The first step is always to try to meet your calcium needs through food. Dietary calcium is generally better
        absorbed and comes with other nutrients (protein, phosphorus, vitamins) that also benefit bones.
      </p>
      <p>
        Supplements may be recommended by your doctor if you:
      </p>
      <ul>
        <li>Cannot meet your requirements through diet (e.g. due to lactose intolerance, dairy-free diet, or poor appetite)</li>
        <li>Have been diagnosed with osteoporosis and your diet is insufficient</li>
        <li>Are taking certain bone medications that require calcium supplementation alongside them</li>
      </ul>

      <h3>Tips for taking calcium supplements</h3>
      <ul>
        <li>Do not exceed the recommended total daily intake — more is not always better</li>
        <li>Calcium supplements can interact with some medications (e.g. certain antibiotics, thyroid medication) — take them at different times</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-5">
        <p className="text-amber-900 text-sm">
          <strong>Important:</strong> Excessive calcium supplementation (more than 2,000 mg total per day, from food
          and supplements combined) is not recommended and may have risks. Never exceed recommended amounts without
          discussing with your doctor. Always check that any supplement contains Vitamin D alongside calcium, as they
          work together.
        </p>
      </div>

      <h2>Foods That Can Affect Calcium Absorption</h2>
      <p>
        Some dietary factors can reduce the absorption of calcium from food. These are not reasons to avoid these
        foods entirely — they are healthy foods — but they are worth knowing about in the context of calcium intake:
      </p>
      <ul>
        <li><strong>High oxalate foods</strong> (spinach, rhubarb) — bind calcium in the gut, reducing absorption from those specific foods (does not affect calcium from other foods eaten at the same time)</li>
        <li><strong>Very high salt (sodium) intake</strong> — increases urinary calcium loss</li>
        <li><strong>Excess caffeine</strong> — more than 4 cups of strong coffee per day may slightly reduce calcium absorption; this effect is modest for most people</li>
        <li><strong>Phytates</strong> (in bran, whole grains) — can reduce calcium absorption slightly; again, the effect in the context of a balanced diet is modest</li>
      </ul>
    </PageLayout>
  );
}
