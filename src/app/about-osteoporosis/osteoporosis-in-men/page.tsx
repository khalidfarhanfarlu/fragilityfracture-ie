import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Osteoporosis in Men",
  description:
    "Osteoporosis in men is under-diagnosed and under-treated. One in five men over 50 will have an osteoporosis-related fracture. Learn the risk factors and what to do.",
};

export default function OsteoporosisInMenPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "About Osteoporosis", href: "/about-osteoporosis" },
        { label: "Osteoporosis in Men" },
      ]}
      gpCTAContext="If you are a man over 50 with risk factors for osteoporosis, speak to your doctor. Ask whether a bone density (DXA) scan would be appropriate. Osteoporosis in men is treatable — but only if it is diagnosed."
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-6">Osteoporosis in Men</h1>

      <p className="text-lg text-[#666666] mb-6 leading-relaxed">
        Osteoporosis is often thought of as a &ldquo;women&apos;s disease&rdquo; — but this is a dangerous
        misconception. One in five men over the age of 50 will experience an osteoporosis-related fracture in their
        lifetime. In Ireland, men account for approximately 25% of all hip fractures, and their outcomes are often
        worse than women&apos;s.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <p className="font-bold text-amber-900 mb-1">Men face greater consequences after hip fracture</p>
        <p className="text-amber-800 text-sm">
          Studies show that men who sustain a hip fracture have a higher one-year mortality rate than women — up to
          37% in some studies. Despite this, men are far less likely to be assessed for osteoporosis after a fracture,
          and far less likely to receive treatment.
        </p>
      </div>

      <h2>Why Is Osteoporosis Under-Diagnosed in Men?</h2>
      <p>
        Several factors contribute to the under-diagnosis of osteoporosis in men:
      </p>
      <ul>
        <li><strong>Lack of awareness:</strong> Both men and their healthcare providers often do not consider osteoporosis as a possibility in men, leading to missed opportunities for diagnosis and prevention.</li>
        <li><strong>No clear &ldquo;trigger event&rdquo;:</strong> Women have menopause — a well-recognised point of accelerated bone loss. Men have no equivalent clear signal, so bone loss tends to be more gradual and less noticed.</li>
        <li><strong>Later screening thresholds:</strong> Guidelines generally recommend DXA scanning for men at older ages (typically 65+, or earlier with risk factors) compared to women (50+). This means men may go undetected for longer.</li>
        <li><strong>Stigma:</strong> Some men may be reluctant to seek help for conditions they perceive as not affecting them.</li>
      </ul>

      <h2>Male-Specific Risk Factors</h2>
      <p>
        As well as the general risk factors that apply to everyone, men have some specific factors to be aware of:
      </p>

      <div className="space-y-4 my-5">
        {[
          {
            title: "Low testosterone (hypogonadism)",
            desc: "Testosterone plays a role in maintaining bone density in men. Low testosterone — whether from ageing, medical treatment, or other causes — is associated with accelerated bone loss. Conditions such as Klinefelter syndrome or pituitary problems can cause low testosterone.",
          },
          {
            title: "Prostate cancer treatment",
            desc: "Androgen deprivation therapy (ADT), used to treat prostate cancer, dramatically lowers testosterone levels and leads to significant bone loss. Men receiving ADT should have bone density monitored and may need bone-protective treatment.",
          },
          {
            title: "Heavy alcohol use",
            desc: "Excess alcohol is both more common in men and has a direct toxic effect on bone-forming cells. It also increases the risk of falls.",
          },
          {
            title: "Smoking",
            desc: "Smoking accelerates bone loss and is more strongly associated with hip fracture in men than in women.",
          },
          {
            title: "Long-term corticosteroid use",
            desc: "Men on long-term steroids (for conditions like asthma, IBD, or rheumatoid arthritis) have a significantly increased fracture risk and should be offered bone protection.",
          },
          {
            title: "Underweight",
            desc: "A BMI below 20 is associated with significantly higher fracture risk in men.",
          },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-slate-50 rounded-xl p-5 border border-[#e0e0e0]">
            <h3 className="font-bold text-[#434343] text-base mb-2">{title}</h3>
            <p className="text-sm text-[#666666] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <h2>When Should Men Be Tested?</h2>
      <p>Irish and international guidelines recommend that men consider a bone density (DXA) scan if they:</p>
      <ul>
        <li>Are aged 65 or older</li>
        <li>Have had a fragility fracture at any age</li>
        <li>Are on or have been on long-term corticosteroid treatment</li>
        <li>Are receiving androgen deprivation therapy for prostate cancer</li>
        <li>Have low testosterone</li>
        <li>Have other significant risk factors (alcohol excess, underweight, family history)</li>
        <li>Have a condition associated with bone loss (coeliac disease, IBD, etc.)</li>
      </ul>
      <p>
        If you are a man and recognise any of these factors, speak to your doctor. A bone density test is painless, quick,
        and can provide important information about your fracture risk.
      </p>

      <h2>Treatment Works for Men Too</h2>
      <p>
        The good news is that osteoporosis in men can be effectively treated. The same classes of medication used
        in women — including bisphosphonates — are effective in men. Calcium and Vitamin D supplementation,
        exercise, and falls prevention are equally important.
      </p>
      <p>
        If testosterone deficiency is identified as a contributing factor, testosterone replacement therapy may
        also be considered alongside bone-protective treatment.
      </p>
      <p>
        You can read more about treatment options on our{" "}
        <a href="/living-with-osteoporosis/treatment-options">Treatment Options page</a>.
      </p>
    </PageLayout>
  );
}
