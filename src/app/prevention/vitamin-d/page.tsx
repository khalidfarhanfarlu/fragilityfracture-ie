import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Vitamin D & Bone Health in Ireland",
  description:
    "Why Vitamin D is especially important in Ireland, how to get enough, and whether you need a supplement. Ireland-specific guidance.",
};

export default function VitaminDPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Prevention", href: "/prevention" },
        { label: "Vitamin D" },
      ]}
      gpCTAContext="If you are unsure whether you are getting enough Vitamin D, or if you think you may be deficient, speak to your doctor. A simple blood test can measure your Vitamin D level."
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-6">Vitamin D</h1>

      <p className="text-lg text-[#666666] mb-6 leading-relaxed">
        Vitamin D is essential for bone health — without it, your body cannot properly absorb calcium, no matter how
        much you consume. In Ireland, Vitamin D deficiency is common due to our northern latitude and limited sunlight
        for much of the year.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <p className="font-bold text-amber-900 mb-1">An Irish Public Health Issue</p>
        <p className="text-amber-800 text-sm">
          Studies have found that a significant proportion of Irish adults — and a majority in winter — have
          insufficient Vitamin D levels. The TILDA study (The Irish Longitudinal Study on Ageing) found that over
          a quarter of older adults in Ireland are Vitamin D deficient. This makes supplementation particularly
          important for people in Ireland.
        </p>
      </div>

      <h2>Why Does Vitamin D Matter for Bones?</h2>
      <p>
        Vitamin D promotes the absorption of calcium from the intestine. Without adequate Vitamin D, only 10–15%
        of dietary calcium is absorbed, compared to 30–40% when Vitamin D levels are sufficient. Low Vitamin D
        also causes the body to increase secretion of parathyroid hormone (PTH), which draws calcium out of the
        bones — accelerating bone loss.
      </p>
      <p>
        Vitamin D deficiency has also been linked to increased fall risk, as it plays a role in muscle strength
        and neuromuscular function. This adds to its importance for fragility fracture prevention.
      </p>

      <h2>The Irish Sunlight Problem</h2>
      <p>
        The main natural source of Vitamin D is sunlight — specifically, UVB radiation triggers Vitamin D synthesis
        in the skin. Ireland is located at latitudes between 51°N and 55°N. At these latitudes:
      </p>
      <ul>
        <li>UVB radiation is <strong>insufficient for Vitamin D synthesis from approximately October to March</strong></li>
        <li>Even in summer, cloudy or overcast weather (very common in Ireland) can prevent adequate synthesis</li>
        <li>Vitamin D produced in the skin during summer months is stored in fat tissue, but this may not be sufficient to last through winter for many people</li>
        <li>Older skin is less efficient at producing Vitamin D from sunlight</li>
      </ul>
      <p>
        This is why dietary intake and supplementation are critically important for people living in Ireland.
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
      <p className="text-xs text-[#888888]">
        Based on FSAI recommendations. Higher doses may be recommended for people with osteoporosis, those with
        confirmed deficiency, or those on bone-protective medications — always discuss with your doctor.
      </p>

      <h2>Food Sources of Vitamin D</h2>
      <p>
        Very few foods naturally contain significant amounts of Vitamin D. Those that do include:
      </p>
      <ul>
        <li><strong>Oily fish</strong> — salmon, mackerel, sardines, herring, trout (highest natural sources; 85g salmon provides approximately 15–20 micrograms)</li>
        <li><strong>Egg yolks</strong> — modest amounts (approximately 1–2 micrograms per yolk)</li>
        <li><strong>Liver</strong> — a good source, but not recommended in large amounts for pregnant women due to Vitamin A content</li>
        <li><strong>Fortified foods</strong> — some margarines, cereals, and plant milks are fortified with Vitamin D; check the label</li>
      </ul>
      <p>
        Food sources alone are rarely sufficient to meet Irish adults&apos; Vitamin D needs, particularly in winter.
      </p>

      <h2>Should I Take a Supplement?</h2>
      <p>
        The short answer, for most people in Ireland, is <strong>yes</strong> — at least from October to March.
        Many Irish GPs and the FSAI recommend:
      </p>
      <ul>
        <li>A daily supplement of 10 micrograms (400 IU) of Vitamin D3 for the general adult population, year-round or at minimum October–March</li>
        <li>Older adults (65+) may need 15–20 micrograms (600–800 IU) daily</li>
        <li>People with osteoporosis who are taking bone medication are almost always prescribed Vitamin D (and calcium) supplementation alongside it</li>
      </ul>

      <h3>Vitamin D3 vs D2</h3>
      <p>
        There are two main forms of Vitamin D in supplements: <strong>D3 (cholecalciferol)</strong> and{" "}
        <strong>D2 (ergocalciferol)</strong>. Vitamin D3 is more effective at raising and maintaining blood Vitamin D
        levels and is the preferred form. Most supplements available in Ireland contain D3.
      </p>

      <h2>Who Is at Particular Risk of Vitamin D Deficiency?</h2>
      <p>The following groups should pay particular attention to Vitamin D:</p>
      <ul>
        <li><strong>Older adults</strong> — skin becomes less efficient at producing Vitamin D with age; older adults may also spend less time outdoors</li>
        <li><strong>Housebound individuals or those in care</strong> — little or no outdoor exposure</li>
        <li><strong>People who cover their skin</strong> for cultural or religious reasons</li>
        <li><strong>People with darker skin tones</strong> — more melanin means lower Vitamin D synthesis from the same sun exposure</li>
        <li><strong>People with obesity</strong> — Vitamin D is fat-soluble and can be sequestered in fat tissue, reducing circulating levels</li>
        <li><strong>People with malabsorption conditions</strong> (coeliac disease, IBD, following bariatric surgery)</li>
      </ul>

      <h2>Sun Exposure: A Practical Guide</h2>
      <p>
        During the Irish summer months (approximately April to September, particularly May to August on clear days),
        short periods of sun exposure can contribute to Vitamin D production:
      </p>
      <ul>
        <li>Aim for approximately 10–15 minutes of midday sun (11am–3pm) on <strong>arms and face</strong>, without sunscreen</li>
        <li>This should be enough for most fair-skinned people to produce a useful amount of Vitamin D</li>
        <li>After this short exposure period, apply sun protection as usual to protect against skin cancer</li>
        <li>Do not burn — burning increases skin cancer risk without additional Vitamin D benefit</li>
      </ul>
      <p>
        Remember: even in summer, cloudy Irish weather means sun exposure is often inadequate. Do not rely on sun
        alone to meet your Vitamin D needs throughout the year.
      </p>

      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mt-6">
        <p className="text-red-900 text-sm">
          <strong>Caution:</strong> Very high doses of Vitamin D (above 100 micrograms / 4,000 IU per day for
          extended periods) can be toxic. Do not take high-dose supplements without medical supervision. The body
          safely regulates Vitamin D produced from sunlight, but not from oral supplements at very high doses.
        </p>
      </div>
    </PageLayout>
  );
}
