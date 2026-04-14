import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Calcium and Vitamin D for Bone Health",
  description:
    "How much calcium and Vitamin D do you need? Best food sources, supplements, and Irish dietary recommendations for bone health.",
};

const calciumSources = [
  { food: "Milk (full fat or low fat)", serving: "200ml (a small glass)", calcium: "~240 mg" },
  { food: "Yoghurt (natural or flavoured)", serving: "125g (a standard single pot)", calcium: "~200 mg" },
  { food: "Hard cheese (e.g. Cheddar)", serving: "30g (matchbox-sized piece)", calcium: "~220 mg" },
  { food: "Tinned sardines (with bones)", serving: "100g (about half a standard tin)", calcium: "~350 mg" },
  { food: "Tinned salmon (with bones)", serving: "100g (about half a standard tin)", calcium: "~250 mg" },
  { food: "Fortified plant milk (oat, soy, almond)", serving: "200ml (a small glass)", calcium: "~240 mg (if fortified)" },
  { food: "Tofu (set with calcium)", serving: "100g (a slice about the size of a deck of cards)", calcium: "~200–300 mg" },
  { food: "Broccoli (cooked)", serving: "100g (about 4–5 medium florets)", calcium: "~40 mg" },
  { food: "Kale (cooked)", serving: "100g (about ¾ cup cooked)", calcium: "~130 mg" },
  { food: "Almonds", serving: "30g (about a small handful)", calcium: "~75 mg" },
  { food: "White bread (fortified)", serving: "2 slices", calcium: "~100 mg" },
];

export default function CalciumAndVitaminDPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Prevention", href: "/prevention" },
        { label: "Calcium and Vitamin D" },
      ]}
      gpCTAContext="If you are unsure whether your calcium or Vitamin D intake is adequate, or whether you need a supplement, speak to your doctor or a registered dietitian."
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-6">Calcium and Vitamin D</h1>

      <p className="text-lg text-[#666666] mb-6 leading-relaxed">
        Calcium and Vitamin D work together as the two most important nutrients for bone health. Calcium provides
        the structural building blocks of bone, while Vitamin D is essential for your body to absorb and use that
        calcium effectively. Getting adequate amounts of both throughout life is one of the most effective things
        you can do to protect your bones.
      </p>

      {/* ── CALCIUM SECTION ─────────────────────────────────────────── */}
      <div className="bg-[#F9F9F9] border border-[#e0e0e0] rounded-xl p-5 mb-8 flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-[#E7D549] mt-2 shrink-0" />
        <p className="text-[#434343] text-sm leading-relaxed">
          About 99% of the body&apos;s calcium is stored in bones and teeth. Without enough calcium, the body draws
          it from your bones — reducing bone density over time.
        </p>
      </div>

      <h2>Why Is Calcium So Important for Bones?</h2>
      <p>
        Bone is constantly being broken down and rebuilt — a process called remodelling. If you do not get enough
        calcium in your diet, your body will draw calcium from your bones to maintain blood calcium levels. Over time,
        this leads to reduced bone density and increased fracture risk.
      </p>
      <p>
        Calcium also requires adequate Vitamin D to be properly absorbed from the gut. Without enough Vitamin D,
        even a calcium-rich diet will not be fully effective.
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
        Based on FSAI (Food Safety Authority of Ireland) and European Food Safety Authority recommendations.
      </p>

      <h2>Best Food Sources of Calcium</h2>
      <p>
        Dairy products are the richest and most bioavailable sources of calcium in the Irish diet. However, many
        non-dairy foods also contain useful amounts.
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
        Try to meet your calcium needs through food first. Dietary calcium is generally better absorbed and comes
        with other beneficial nutrients. Supplements may be recommended if you cannot meet requirements through
        diet, have been diagnosed with osteoporosis, or are taking bone medications that require it alongside.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-2 mb-8">
        <p className="text-amber-900 text-sm">
          <strong>Important:</strong> Excessive calcium supplementation (more than 2,000 mg total per day from
          food and supplements combined) is not recommended. Never exceed recommended amounts without discussing
          with your doctor.
        </p>
      </div>

      {/* ── VITAMIN D SECTION ───────────────────────────────────────── */}
      <div className="border-t border-[#e0e0e0] pt-10 mt-10">
        <h2 className="text-2xl font-bold text-[#434343] mb-4">Vitamin D</h2>

        <p className="text-lg text-[#666666] mb-6 leading-relaxed">
          Vitamin D is essential for calcium absorption. Without it, your body cannot properly use the calcium you
          consume. In Ireland, Vitamin D deficiency is very common due to our northern latitude and limited sunlight
          for much of the year.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <p className="font-bold text-amber-900 mb-1">An Irish Public Health Issue</p>
          <p className="text-amber-800 text-sm">
            The TILDA study (The Irish Longitudinal Study on Ageing) found that over a quarter of older adults in
            Ireland are Vitamin D deficient. Supplementation is particularly important for people living in Ireland,
            especially from October to March.
          </p>
        </div>

        <h2>Why Does Vitamin D Matter for Bones?</h2>
        <p>
          Vitamin D promotes the absorption of calcium from the intestine. Without adequate Vitamin D, only 10–15%
          of dietary calcium is absorbed, compared to 30–40% when levels are sufficient. Low Vitamin D also causes
          increased secretion of parathyroid hormone (PTH), which draws calcium out of bones — accelerating bone loss.
        </p>
        <p>
          Vitamin D deficiency has also been linked to increased fall risk, as it plays a role in muscle strength
          and neuromuscular function.
        </p>

        <h2>How Much Vitamin D Do You Need?</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#434343] text-white">
                <th className="px-4 py-3 text-left">Group</th>
                <th className="px-4 py-3 text-left">Recommended Daily Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["General adult population (19–64)", "10 micrograms (400 IU)/day"],
                ["Adults 65 and over", "15–20 micrograms (600–800 IU)/day — discuss with your doctor"],
                ["People at high risk of deficiency", "May need higher amounts — doctor assessment recommended"],
                ["Pregnant/breastfeeding women", "10 micrograms (400 IU)/day minimum"],
              ].map(([group, amount], i) => (
                <tr key={group} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 border-b border-[#eeeeee]">{group}</td>
                  <td className="px-4 py-3 border-b border-[#eeeeee] font-semibold text-[#555555]">{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Food Sources of Vitamin D</h2>
        <p>Very few foods naturally contain significant amounts of Vitamin D. Those that do include:</p>
        <ul>
          <li><strong>Oily fish</strong> — salmon, mackerel, sardines, herring, trout (highest natural sources)</li>
          <li><strong>Egg yolks</strong> — modest amounts (approximately 1–2 micrograms per yolk)</li>
          <li><strong>Liver</strong> — a good source, but not recommended in large amounts for pregnant women</li>
          <li><strong>Fortified foods</strong> — some margarines, cereals, and plant milks; check the label</li>
        </ul>

        <h2>Should I Take a Vitamin D Supplement?</h2>
        <p>
          For most people in Ireland, yes — at least from October to March. The FSAI recommends:
        </p>
        <ul>
          <li>A daily supplement of 10 micrograms (400 IU) of Vitamin D3 for the general adult population</li>
          <li>Older adults (65+) may need 15–20 micrograms (600–800 IU) daily</li>
          <li>People taking bone medication are almost always prescribed Vitamin D alongside calcium supplementation</li>
        </ul>

        <h3>Vitamin D3 vs D2</h3>
        <p>
          <strong>D3 (cholecalciferol)</strong> is more effective at raising and maintaining blood Vitamin D levels
          than D2. Most supplements available in Ireland contain D3.
        </p>

        <h2>The Irish Sunlight Problem</h2>
        <ul>
          <li>UVB radiation is <strong>insufficient for Vitamin D synthesis from approximately October to March</strong> in Ireland</li>
          <li>Even in summer, cloudy weather can prevent adequate synthesis</li>
          <li>Older skin is less efficient at producing Vitamin D from sunlight</li>
        </ul>
        <p>
          During summer (May–August), aim for approximately 10–15 minutes of midday sun on arms and face without
          sunscreen. After this short period, apply sun protection as usual.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mt-6">
          <p className="text-red-900 text-sm">
            <strong>Caution:</strong> Very high doses of Vitamin D (above 100 micrograms / 4,000 IU per day for
            extended periods) can be toxic. Do not take high-dose supplements without medical supervision.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
