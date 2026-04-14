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
        <h1 className="text-4xl font-extrabold text-[#434343] mb-6">What Is Osteoporosis?</h1>

        <p className="text-lg text-[#666666] mb-6 leading-relaxed">
          Osteoporosis is a condition where bones become weak, thin, and fragile, making them much more likely to
          break (fracture). It happens when the body loses too much bone, makes too little bone, or both. Over time
          the internal structure of the bone becomes porous (full of holes) and less dense.
        </p>

        <div className="bg-[#F9F9F9] border border-[#e0e0e0] rounded-xl p-6 mb-8">
          <p className="text-[#434343] font-semibold text-base">
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
        <h2>Symptoms</h2>
        <p>
          There often are no symptoms in the early stages of bone loss. But once osteoporosis weakens your bones,
          you might have symptoms of a fracture that include:
        </p>
        <ul>
          <li>Back pain caused by a broken or collapsed bone in the spine.</li>
          <li>Loss of height over time.</li>
          <li>A stooped posture.</li>
          <li>A bone that breaks much more easily than expected.</li>
        </ul>

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
          The most important thing is to be diagnosed early. If you think you may be at risk, speak to your doctor about
          a bone density scan.
        </p>

        {/* ── VENN DIAGRAM ─────────────────────────────────────────── */}
        <h2>Three Things to Improve Your Osteoporosis</h2>
        <p>
          While osteoporosis cannot be fully reversed, three lifestyle changes have strong evidence behind them
          for improving bone health and reducing fracture risk. Together, their effect is greater than any one alone.
        </p>

        <div className="my-8 flex flex-col items-center">
          <svg
            viewBox="0 0 520 460"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-lg"
            aria-label="Venn diagram: stopping smoking, regular exercise, and healthy eating all intersect at better bone health"
            role="img"
          >
            {/* ── Circles ── */}
            <circle cx="260" cy="158" r="138" fill="#1e293b" fillOpacity="0.82" stroke="#E7D549" strokeWidth="2" strokeOpacity="0.4" />
            <circle cx="155" cy="322" r="138" fill="#1e293b" fillOpacity="0.72" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.4" />
            <circle cx="365" cy="322" r="138" fill="#1e293b" fillOpacity="0.72" stroke="#4ade80" strokeWidth="2" strokeOpacity="0.4" />

            {/* ── Icon: No Smoking (top circle) ── */}
            {/* Cigarette body */}
            <rect x="236" y="75" width="48" height="10" rx="3" fill="#E7D549" opacity="0.9" />
            <rect x="276" y="75" width="8" height="10" rx="1" fill="#f59e0b" opacity="0.9" />
            {/* Smoke wisps */}
            <path d="M258 72 Q256 62 260 55 Q264 48 262 40" stroke="#E7D549" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
            <path d="M268 72 Q270 62 266 55 Q262 48 264 40" stroke="#E7D549" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
            {/* Red cross-out */}
            <line x1="228" y1="68" x2="292" y2="92" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />

            {/* ── Label: Stop Smoking (top) ── */}
            <text x="260" y="116" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.3">STOP</text>
            <text x="260" y="133" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.3">SMOKING</text>

            {/* ── Icon: Running figure (bottom-left) ── */}
            {/* Head */}
            <circle cx="131" cy="252" r="9" fill="#60a5fa" opacity="0.9" />
            {/* Body */}
            <line x1="131" y1="261" x2="128" y2="283" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
            {/* Arms */}
            <line x1="128" y1="268" x2="118" y2="262" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="128" y1="268" x2="140" y2="273" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
            {/* Legs */}
            <line x1="128" y1="283" x2="119" y2="298" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="128" y1="283" x2="138" y2="296" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
            {/* Shoe (front foot) */}
            <line x1="119" y1="298" x2="112" y2="298" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />

            {/* ── Label: Regular Exercise (bottom-left) ── */}
            <text x="155" y="326" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.3">REGULAR</text>
            <text x="155" y="343" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.3">EXERCISE</text>

            {/* ── Icon: Leaf / healthy food (bottom-right) ── */}
            <path d="M365 252 Q378 242 385 255 Q390 265 378 272 Q368 278 360 268 Q354 258 365 252Z" fill="#4ade80" opacity="0.9" />
            <line x1="365" y1="252" x2="372" y2="272" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            {/* Fork */}
            <line x1="352" y1="248" x2="352" y2="270" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
            <line x1="348" y1="248" x2="348" y2="258" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="356" y1="248" x2="356" y2="258" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" />

            {/* ── Label: Healthy Eating (bottom-right) ── */}
            <text x="365" y="326" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.3">HEALTHY</text>
            <text x="365" y="343" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.3">EATING</text>

            {/* ── Centre: Better Bone Health ── */}
            <text x="260" y="248" textAnchor="middle" fill="#E7D549" fontSize="13" fontWeight="900" fontFamily="system-ui,sans-serif">Better</text>
            <text x="260" y="264" textAnchor="middle" fill="#E7D549" fontSize="13" fontWeight="900" fontFamily="system-ui,sans-serif">Bone</text>
            <text x="260" y="280" textAnchor="middle" fill="#E7D549" fontSize="13" fontWeight="900" fontFamily="system-ui,sans-serif">Health</text>
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Stopping Smoking", desc: "Smoking reduces bone density and impairs the body's ability to absorb calcium. Quitting at any age helps slow further bone loss." },
            { label: "Regular Exercise", desc: "Weight-bearing and resistance exercises stimulate bone formation. Activities like walking, dancing, and strength training are particularly beneficial." },
            { label: "Healthy Eating", desc: "A diet rich in calcium, Vitamin D, protein, and vegetables provides the building blocks your bones need to stay strong throughout life." },
          ].map(({ label, desc }) => (
            <div key={label} className="bg-[#F9F9F9] border border-[#e0e0e0] rounded-xl p-5">
              <div className="w-3 h-3 rounded-full bg-[#E7D549] mb-3" />
              <p className="font-bold text-[#434343] text-sm mb-2">{label}</p>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <h2>Frequently Asked Questions</h2>

        <div className="space-y-5 mt-4">
          {faqJsonLd.mainEntity.map((faq) => (
            <details
              key={faq.name}
              className="border border-[#e0e0e0] rounded-xl overflow-hidden group"
            >
              <summary className="flex items-center justify-between px-5 py-4 font-semibold text-[#434343] cursor-pointer hover:bg-[#F9F9F9] transition-colors list-none">
                {faq.name}
                <span className="text-[#666666] text-xl group-open:rotate-45 transition-transform shrink-0 ml-3">+</span>
              </summary>
              <div className="px-5 pb-4 pt-2 text-[#666666] text-sm leading-relaxed bg-slate-50">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
