import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "What Is Osteoporosis?",
  description:
    "A plain-English guide to osteoporosis — how it develops, why it's called the silent disease, and who is most at risk in Ireland.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can osteoporosis be reversed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Osteoporosis cannot be fully reversed, but treatment can significantly slow or stop further bone loss, and in some cases modestly increase bone density. Medication, calcium, Vitamin D, and exercise all play a role. Early treatment is most effective.",
      },
    },
    {
      "@type": "Question",
      name: "Does osteoporosis cause pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Osteoporosis itself does not cause pain — this is why it is called 'the silent disease'. Pain usually only occurs when a fracture happens. Vertebral (spinal) fractures can sometimes cause chronic back pain.",
      },
    },
    {
      "@type": "Question",
      name: "Is osteoporosis hereditary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, family history is a recognised risk factor. If a parent (especially a mother) had a hip fracture or was diagnosed with osteoporosis, your risk is higher. However, lifestyle factors also play a major role.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between osteoporosis and osteopenia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both refer to reduced bone density. Osteopenia means bone density is lower than normal but not low enough to be classified as osteoporosis. Osteopenia is diagnosed when your T-score is between -1.0 and -2.5; osteoporosis is diagnosed at -2.5 or below.",
      },
    },
  ],
};

export default function WhatIsOsteoporosisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageLayout
        breadcrumbs={[
          { label: "About Osteoporosis", href: "/about-osteoporosis" },
          { label: "What Is Osteoporosis?" },
        ]}
      >
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">What Is Osteoporosis?</h1>

        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          Osteoporosis is a condition in which bones lose density and become porous, fragile, and much more likely to
          break. The word comes from the Greek for &ldquo;porous bones&rdquo; — and that is exactly what happens.
          Healthy bones are dense and strong; osteoporotic bones, when viewed under a microscope, look like a
          honeycomb with larger holes than normal.
        </p>

        <div className="bg-[#F9F9F9] border border-slate-200 rounded-xl p-6 mb-8">
          <p className="text-slate-900 font-semibold text-base">
            In Ireland, an estimated 300,000 to 500,000 people have osteoporosis — yet most are undiagnosed because
            the condition causes no symptoms until a fracture occurs.
          </p>
        </div>

        <h2>How Does Bone Density Work?</h2>
        <p>
          Bone is not a static material — it is living tissue that is constantly being broken down and rebuilt in a
          process called remodelling. Specialised cells called <strong>osteoclasts</strong> break down old bone, while
          <strong> osteoblasts</strong> build new bone to replace it.
        </p>
        <p>
          In younger years, bone formation outpaces breakdown, and bone density increases. Most people reach their
          <strong> peak bone mass</strong> around the age of 25–30. After this, bone density gradually declines. In
          women, this decline accelerates significantly in the years following the menopause, when the protective
          effect of oestrogen is lost. In some women, up to 20% of bone density can be lost in the first five to ten
          years after menopause.
        </p>
        <p>
          Osteoporosis develops when bone is broken down faster than it is replaced, leaving bones increasingly weak
          and brittle over time.
        </p>

        <h2>Why Is It Called &ldquo;The Silent Disease&rdquo;?</h2>
        <p>
          Osteoporosis has no symptoms in its early stages. There is no pain, no visible changes, and no warning
          signs — until a bone breaks. This is why it is often called &ldquo;the silent disease&rdquo;. Many people
          only discover they have osteoporosis after they suffer a fracture from a surprisingly minor event, such as
          a gentle fall, a cough, or lifting a light object.
        </p>
        <p>
          This is also why bone density testing (a DXA scan) is so important for people with risk factors. It is the
          only reliable way to detect osteoporosis before a fracture occurs.
        </p>

        <h2>Who Is Most at Risk?</h2>
        <p>Osteoporosis can affect anyone, but it is most common in:</p>
        <ul>
          <li><strong>Post-menopausal women</strong> — the most commonly affected group, particularly in the first 10 years after menopause</li>
          <li><strong>Older adults</strong> — risk increases significantly after age 60 for women and 65 for men</li>
          <li><strong>People taking long-term corticosteroids</strong> (such as prednisolone) for conditions like asthma, rheumatoid arthritis, or IBD</li>
          <li><strong>People with certain medical conditions</strong> — including coeliac disease, inflammatory bowel disease, hyperthyroidism, and others</li>
          <li><strong>Men</strong> — often overlooked, but one in five men over 50 will have an osteoporosis-related fracture</li>
        </ul>
        <p>
          A full list of risk factors is available on our{" "}
          <a href="/about-osteoporosis/risk-factors">Risk Factors page</a>.
        </p>

        <h2>How Is Osteoporosis Diagnosed?</h2>
        <p>
          Osteoporosis is diagnosed using a <strong>DXA scan</strong> (Dual-energy X-ray Absorptiometry), which
          measures bone mineral density at the hip and spine. The result is given as a <strong>T-score</strong>,
          which compares your bone density to that of a healthy young adult.
        </p>
        <p>
          A T-score of -2.5 or below indicates osteoporosis. A score between -1.0 and -2.5 indicates osteopenia
          (lower than normal bone density, but not yet osteoporosis). You can learn more on our{" "}
          <a href="/bone-density-testing/understanding-your-results">Understanding Your Results page</a>.
        </p>

        <h2>Can Osteoporosis Be Treated?</h2>
        <p>
          Yes. While bone density cannot be fully restored to its youthful level, treatment can significantly slow
          or halt further bone loss, reduce fracture risk, and in some cases modestly increase bone density. Treatment
          options include medication (such as bisphosphonates), calcium and Vitamin D supplementation, and lifestyle
          changes including exercise.
        </p>
        <p>
          The most important thing is to be diagnosed early. If you think you may be at risk, speak to your GP about
          a bone density scan.
        </p>

        <h2>Frequently Asked Questions</h2>

        <div className="space-y-5 mt-4">
          {faqJsonLd.mainEntity.map((faq) => (
            <details
              key={faq.name}
              className="border border-slate-200 rounded-xl overflow-hidden group"
            >
              <summary className="flex items-center justify-between px-5 py-4 font-semibold text-slate-800 cursor-pointer hover:bg-[#F9F9F9] transition-colors list-none">
                {faq.name}
                <span className="text-slate-600 text-xl group-open:rotate-45 transition-transform shrink-0 ml-3">+</span>
              </summary>
              <div className="px-5 pb-4 pt-2 text-slate-600 text-sm leading-relaxed bg-slate-50">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
