import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "What Is a Fragility Fracture?",
  description:
    "A fragility fracture is a broken bone caused by a low-energy impact. Learn about the most common sites, why they're serious, and how they relate to osteoporosis.",
};

export default function WhatIsAFragilityFracturePage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "About Osteoporosis", href: "/about-osteoporosis" },
        { label: "What Is a Fragility Fracture?" },
      ]}
      gpCTAContext="If you have had a fracture from a low-energy impact, talk to your doctor. It may be the first sign of osteoporosis, and getting tested and treated promptly can prevent future fractures."
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-6">What Is a Fragility Fracture?</h1>

      <p className="text-lg text-[#666666] mb-6 leading-relaxed">
        A <strong>fragility fracture</strong> is a broken bone that results from an impact that would not normally
        break a healthy bone. It might be a fall from standing height, a trip, a minor bump — or in some cases, no
        obvious injury at all, such as a fracture that occurs simply from coughing, sneezing, or bending forward.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <p className="text-amber-900 font-semibold">
          In Ireland, approximately 20,000 osteoporotic fractures occur each year. A fragility fracture is often the
          first visible sign that someone has osteoporosis — yet many people are not assessed for bone density after
          their fracture.
        </p>
      </div>

      <h2>The Most Common Sites</h2>
      <p>
        Fragility fractures can occur anywhere in the body, but they are most common at four sites:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {[
          {
            site: "Hip",
            detail: "The most serious type. Hip fractures almost always require surgery and can lead to significant loss of independence. In Ireland, around 3,600 hip fractures occur each year.",
            href: "/fragility-fractures/hip-fractures",
          },
          {
            site: "Spine (Vertebrae)",
            detail: "Vertebral fractures are the most common type of osteoporotic fracture, but are often not diagnosed — they may appear as persistent back pain or a gradual stooping of posture.",
            href: "/fragility-fractures/vertebral-fractures",
          },
          {
            site: "Wrist (Distal Radius)",
            detail: "Often the first fragility fracture to occur. A wrist fracture in a person over 50 should always trigger an assessment of bone density.",
            href: "/fragility-fractures/wrist-fractures",
          },
          {
            site: "Shoulder (Humerus)",
            detail: "Less common than hip, spine, or wrist fractures, but shoulder fractures are also associated with osteoporosis in older adults.",
            href: "#",
          },
        ].map(({ site, detail, href }) => (
          <div key={site} className="bg-slate-50 rounded-xl p-5 border border-[#e0e0e0]">
            <h3 className="font-bold text-[#434343] mb-2">{site}</h3>
            <p className="text-sm text-[#666666] leading-relaxed mb-3">{detail}</p>
            {href !== "#" && (
              <a href={href} className="text-xs text-[#666666] font-semibold hover:text-[#434343]">
                Read more →
              </a>
            )}
          </div>
        ))}
      </div>

      <h2>How Do Fragility Fractures Relate to Osteoporosis?</h2>
      <p>
        Fragility fractures are a direct consequence of osteoporosis — bones that have lost density and strength are
        far more likely to break under forces that a healthy bone would withstand. In many cases, a fragility fracture
        is the first indication that a person has osteoporosis.
      </p>
      <p>
        Importantly, <strong>a first fragility fracture dramatically increases the risk of a second</strong>. Research
        shows that someone who has had one vertebral fracture has a five-fold increased risk of another vertebral
        fracture within the following year. A wrist fracture approximately doubles the risk of a subsequent hip
        fracture. This is sometimes called the &ldquo;fracture cascade&rdquo;.
      </p>
      <p>
        This is why every fragility fracture should be taken seriously as a medical event — not just treated in
        isolation, but used as a prompt to assess bone density and start appropriate treatment or prevention.
      </p>

      <h2>Why Are Fragility Fractures Serious?</h2>
      <p>
        The consequences of fragility fractures go far beyond the fracture itself:
      </p>
      <ul>
        <li><strong>Loss of independence:</strong> Hip fractures, in particular, can result in permanent loss of mobility and the ability to live independently.</li>
        <li><strong>Mortality:</strong> In Ireland, up to 20–30% of people who sustain a hip fracture die within 12 months of their fracture.</li>
        <li><strong>Chronic pain:</strong> Vertebral fractures often result in persistent back pain and can cause a stooped posture (kyphosis).</li>
        <li><strong>Fear of falling:</strong> After a fracture, many people become fearful of falling, which leads to reduced activity, further muscle weakness, and even higher fall risk.</li>
        <li><strong>Hospital and care costs:</strong> Osteoporotic fractures are a major burden on the Irish healthcare system, with hip fractures alone requiring lengthy hospital stays and rehabilitation.</li>
      </ul>

      <h2>When Should I Seek Help?</h2>
      <p>
        You should see your doctor promptly if:
      </p>
      <ul>
        <li>You have had a fracture from a low-energy impact (a fall from standing height or less)</li>
        <li>You are over 50 and have broken your wrist, hip, or spine</li>
        <li>You have persistent back pain, especially if you have noticed a loss of height or a stooped posture</li>
        <li>You have several risk factors for osteoporosis and have never had a bone density test</li>
      </ul>
      <p>
        Your doctor can arrange a <a href="/bone-density-testing/what-is-a-dxa-scan">DXA scan</a> to assess your bone
        density and advise on treatment or prevention.
      </p>

      <h2>Secondary Fracture Prevention</h2>
      <p>
        After a fragility fracture, the priority is to prevent a second one. In Ireland, <strong>Fracture Liaison
        Services (FLS)</strong> exist in many hospitals to identify people who have had fractures and ensure they
        receive appropriate assessment and treatment. If you have had a fracture, ask your hospital team or doctor whether
        a Fracture Liaison Service is available to you.
      </p>
      <p>
        More information is available on our{" "}
        <a href="/fragility-fractures/secondary-fracture-prevention">Secondary Fracture Prevention page</a>.
      </p>
    </PageLayout>
  );
}
