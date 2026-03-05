import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Secondary Fracture Prevention",
  description:
    "How to reduce your risk of a second fracture — the role of Fracture Liaison Services, treatment, and self-advocacy in Ireland.",
};

export default function SecondaryFracturePreventionPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Fragility Fractures", href: "/fragility-fractures" },
        { label: "Secondary Fracture Prevention" },
      ]}
      gpCTAContext="After a fracture, speak to your GP about secondary fracture prevention. Ask for a referral to a Fracture Liaison Service if one is available. Treatment can significantly reduce your risk of a second fracture."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Secondary Fracture Prevention</h1>

      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
        Secondary fracture prevention refers to all the steps taken after an initial fragility fracture to prevent a
        second one. It is one of the most important and unfortunately one of the most neglected areas of
        osteoporosis care — but you can take an active role in making sure it happens for you.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <p className="text-slate-700 text-sm">
          <strong>The gap in care:</strong> International data consistently shows that only around 20% of people who
          have a fragility fracture go on to receive appropriate assessment and treatment for their underlying
          osteoporosis. The goal of secondary fracture prevention programmes is to close this &ldquo;care gap&rdquo;.
        </p>
      </div>

      <h2>Why Is a Second Fracture So Likely?</h2>
      <p>
        A first fracture is a clear signal that bone density is sufficiently reduced to allow a low-energy impact to
        break a bone. Without intervention:
      </p>
      <ul>
        <li>The underlying osteoporosis continues to progress</li>
        <li>Fall risk remains or increases</li>
        <li>The individual is now in the highest-risk category for a second fracture</li>
      </ul>
      <p>
        The probability of a subsequent fracture after the first is high:
      </p>
      <ul>
        <li>A vertebral fracture increases the risk of a second vertebral fracture by <strong>5 times</strong> in the following 12 months</li>
        <li>Any major fragility fracture approximately <strong>doubles</strong> subsequent fracture risk overall</li>
        <li>A hip fracture is associated with a 10% risk of a second hip fracture within 2 years</li>
      </ul>

      <h2>What Is a Fracture Liaison Service (FLS)?</h2>
      <p>
        A Fracture Liaison Service (FLS) is a systematic, coordinator-led service that identifies people who have
        had a fragility fracture and ensures they receive appropriate bone health assessment and treatment. FLS models
        have been shown to significantly increase the proportion of fracture patients who receive osteoporosis
        treatment and subsequent DXA scanning.
      </p>

      <div className="bg-[#F9F9F9] border border-slate-200 rounded-xl p-6 my-6">
        <h3 className="text-slate-800 font-bold text-base mb-3 mt-0">What a well-functioning FLS provides:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Systematic identification of all fragility fracture patients",
            "Bone density assessment (DXA scan)",
            "Falls risk assessment",
            "Initiation of bone-protective medication",
            "Calcium and Vitamin D assessment and supplementation",
            "Patient education about osteoporosis",
            "Communication with GP for ongoing monitoring",
            "Follow-up to ensure treatment compliance",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-slate-900">
              <span className="text-slate-500 mt-0.5 shrink-0">&#x2714;</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <h2>FLS in Ireland</h2>
      <p>
        Fracture Liaison Services in Ireland are growing but not yet universally available. Many major acute
        hospitals now have FLS programmes, primarily co-ordinated by specialist nurses working within orthopaedic
        or rheumatology departments.
      </p>
      <p>
        The Irish Osteoporosis Society has been a strong advocate for the expansion of FLS services across Ireland.
        The International Osteoporosis Foundation (IOF) &ldquo;Capture the Fracture&rdquo; initiative
        recognises hospitals that have achieved best-practice FLS standards.
      </p>

      <h3>If Your Hospital Doesn&apos;t Have an FLS</h3>
      <p>
        If an FLS is not available at your hospital, the following steps should still happen — and you may need to
        initiate them:
      </p>
      <ol>
        <li>Ask the orthopaedic team before discharge about bone health assessment</li>
        <li>Follow up with your GP after discharge specifically to discuss osteoporosis assessment and treatment</li>
        <li>Ask for a DXA scan if one has not been done recently</li>
        <li>Ask for a FRAX score calculation to assess your 10-year fracture risk</li>
        <li>Ask about starting bone-protective medication</li>
        <li>Ask for referral to a rheumatologist or endocrinologist if your GP is unsure about management</li>
      </ol>

      <h2>Components of Secondary Prevention</h2>
      <p>
        Comprehensive secondary fracture prevention includes all of the following:
      </p>
      <ul>
        <li><strong>Bone-protective medication:</strong> Started promptly after fracture — bisphosphonates, denosumab, or anabolic agents depending on clinical assessment</li>
        <li><strong>Calcium and Vitamin D:</strong> Essential adjuncts to any medical treatment</li>
        <li><strong>Falls prevention:</strong> Physiotherapy for balance and strength; home safety assessment; medication review; vision check</li>
        <li><strong>Ongoing monitoring:</strong> DXA scan at 18–24 months after starting treatment to assess response</li>
        <li><strong>Lifestyle:</strong> Weight-bearing exercise, adequate protein, smoking cessation, limited alcohol</li>
      </ul>

      <h2>Long-Term Follow-Up</h2>
      <p>
        Osteoporosis management is lifelong. Once treatment is started, regular follow-up with your GP is important to:
      </p>
      <ul>
        <li>Monitor treatment compliance and side effects</li>
        <li>Reassess bone density (DXA scan, typically every 1–2 years)</li>
        <li>Review medication — some medications are given for defined periods, then changed or paused</li>
        <li>Continue monitoring fall risk factors</li>
        <li>Adjust treatment if fractures occur despite therapy</li>
      </ul>
      <p>
        Do not stop osteoporosis medication without discussing it with your GP. Treatment works — but only while
        you are taking it.
      </p>
    </PageLayout>
  );
}
