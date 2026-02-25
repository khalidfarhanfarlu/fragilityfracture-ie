import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Lifestyle Factors & Bone Health",
  description:
    "How smoking, alcohol, body weight, and certain medications affect bone density. Practical lifestyle advice to protect your bones.",
};

export default function LifestylePage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Prevention", href: "/prevention" },
        { label: "Lifestyle Factors" },
      ]}
      gpCTAContext="If you are taking medications that affect bone health, do not stop them without speaking to your GP first. Your GP can advise on bone protection measures alongside your existing treatment."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Lifestyle Factors</h1>

      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
        Alongside nutrition and exercise, several lifestyle factors significantly influence bone density and fracture
        risk. The good news is that these are largely within your control.
      </p>

      <h2>Smoking</h2>
      <p>
        Smoking is one of the most harmful lifestyle factors for bone health. Research shows that:
      </p>
      <ul>
        <li>Smokers have significantly lower bone density than non-smokers of the same age and sex</li>
        <li>Smoking reduces blood supply to bones, impairing bone cell function</li>
        <li>It lowers oestrogen levels in women, accelerating bone loss</li>
        <li>Smokers have approximately double the hip fracture risk of non-smokers</li>
        <li>Smoking also increases fall risk by affecting balance and coordination</li>
      </ul>
      <p>
        The good news is that quitting smoking reduces fracture risk over time, though the damage already done to
        bone density cannot be fully reversed.
      </p>
      <p>
        If you would like support to quit smoking, the HSE&apos;s free service{" "}
        <a href="https://www.quit.ie" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">Quit.ie</a>{" "}
        offers online tools, a quitline, and text support.
      </p>

      <h2>Alcohol</h2>
      <p>
        Heavy alcohol consumption is a significant and independent risk factor for osteoporosis:
      </p>
      <ul>
        <li>Alcohol interferes directly with bone formation by suppressing osteoblast (bone-building cell) activity</li>
        <li>It reduces calcium absorption and increases urinary calcium loss</li>
        <li>Heavy drinkers are at significantly higher risk of falls and fractures</li>
        <li>Alcohol can also interfere with Vitamin D metabolism</li>
      </ul>
      <p>
        The Irish low-risk drinking guidelines recommend:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-1">Women</p>
          <p className="text-sm text-slate-600">No more than 11 standard drinks per week, with at least 2 alcohol-free days</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-1">Men</p>
          <p className="text-sm text-slate-600">No more than 17 standard drinks per week, with at least 2 alcohol-free days</p>
        </div>
      </div>
      <p className="text-sm text-slate-500">
        One standard drink in Ireland contains approximately 10g of alcohol — roughly half a pint of beer, a small
        glass of wine, or a pub measure of spirits.
      </p>
      <p>
        For bone health, moderate alcohol consumption (within the above limits) has a less clear impact, but
        exceeding 14 units/week significantly increases fracture risk. If you are already at high risk of
        osteoporosis, limiting alcohol consumption is advisable.
      </p>

      <h2>Body Weight</h2>
      <p>
        Being underweight is a significant risk factor for osteoporosis and fractures:
      </p>
      <ul>
        <li>A <strong>BMI below 18.5</strong> is associated with significantly lower bone density</li>
        <li>Low body weight means less mechanical loading on the skeleton (less stimulus for bone formation)</li>
        <li>Underweight individuals often have lower oestrogen, testosterone, and other hormones that support bone health</li>
        <li>Calorie restriction and disordered eating (anorexia nervosa in particular) are strongly associated with severe, early-onset osteoporosis</li>
      </ul>
      <p>
        Maintaining a healthy body weight is important — but being very overweight also increases fracture risk
        through increased falls risk, so the goal is a healthy BMI (18.5–25 ideally), achieved through balanced
        eating and regular activity.
      </p>

      <h2>Medications That Affect Bone Health</h2>
      <p>
        Several commonly prescribed medications can reduce bone density with long-term use. It is important to know
        about these — but <strong>never stop a prescribed medication without speaking to your GP</strong>. In most
        cases, the condition being treated poses a greater risk than the effect on bones, and bone protection
        strategies can be put in place.
      </p>

      <div className="space-y-4 my-5">
        {[
          {
            med: "Corticosteroids (e.g. prednisolone, dexamethasone)",
            detail: "The most significant medication-related risk. Taking oral corticosteroids for 3 months or more causes significant bone loss. People on long-term steroids should be assessed for bone protection (calcium, Vitamin D, and often a bisphosphonate). Inhaled steroids at standard doses carry much lower risk.",
          },
          {
            med: "Proton pump inhibitors (PPIs, e.g. omeprazole, lansoprazole)",
            detail: "Long-term use (over a year) has been associated with modest increases in fracture risk, possibly by reducing calcium absorption. Discuss with your GP whether ongoing PPI use is necessary and whether bone protection is appropriate.",
          },
          {
            med: "Anti-epileptic drugs (e.g. phenytoin, carbamazepine, valproate)",
            detail: "Some anti-epileptic medications affect Vitamin D metabolism and can lead to bone loss with long-term use. Bone density monitoring may be recommended.",
          },
          {
            med: "Aromatase inhibitors (e.g. anastrozole, letrozole)",
            detail: "Used in breast cancer treatment. Reducing oestrogen to very low levels has a significant negative effect on bone density. Women on these treatments should have bone density monitored and may need bone-protective medication.",
          },
          {
            med: "Androgen deprivation therapy (ADT, for prostate cancer)",
            detail: "Dramatically lowers testosterone, leading to significant bone loss. Men on ADT should have DXA monitoring and may need bone-protective treatment.",
          },
          {
            med: "Thyroxine (levothyroxine) at high doses",
            detail: "Overtreatment of hypothyroidism (supraphysiological doses) can cause bone loss. Dose should be regularly reviewed to ensure it is not excessive.",
          },
        ].map(({ med, detail }) => (
          <div key={med} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <p className="font-bold text-slate-800 text-sm mb-2">{med}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mt-4">
        <p className="text-teal-900 text-sm">
          <strong>Key message:</strong> If you are taking any of the medications above, ask your GP at your next
          appointment whether your bone health is being monitored and whether any preventive measures are in place.
          You should not have to wait for a fracture to find out.
        </p>
      </div>
    </PageLayout>
  );
}
