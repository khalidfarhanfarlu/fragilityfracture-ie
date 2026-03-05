import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "After a Fracture: What Next?",
  description:
    "What to do immediately after a fragility fracture, why secondary prevention is essential, and how to advocate for your bone health in Ireland.",
};

export default function AfterAFracturePage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Fragility Fractures", href: "/fragility-fractures" },
        { label: "After a Fracture: What Next?" },
      ]}
      gpCTAContext="After any fragility fracture, speak to your GP or hospital team about bone density assessment and secondary fracture prevention. Do not leave the hospital without asking about this."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">After a Fracture: What Next?</h1>

      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
        Experiencing a fragility fracture is a significant health event. Beyond treating the fracture itself,
        the most important thing to happen next is a thorough assessment of your bone health and a plan to prevent
        a second fracture. Unfortunately, this does not always happen automatically — so knowing what to ask for is
        essential.
      </p>

      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
        <p className="text-red-900 text-sm">
          <strong>Critical window:</strong> The period immediately following a fracture is associated with the highest
          risk of a second fracture — this has been termed the &ldquo;imminent fracture risk&rdquo; period. Research
          suggests that the risk of a subsequent fracture is highest in the first year after a fracture, and that
          early treatment intervention provides the greatest benefit in this window.
        </p>
      </div>

      <h2>Immediate Steps After a Fracture</h2>

      <div className="space-y-4 mt-4">
        {[
          {
            step: "1",
            title: "Get appropriate medical treatment for the fracture",
            detail: "Whether that is surgery (for hip fractures), a cast (for wrist fractures), or pain management and physiotherapy (for spinal fractures) — treating the fracture itself is the immediate priority.",
          },
          {
            step: "2",
            title: "Ask about bone density assessment",
            detail: "While in hospital or at your GP, ask: 'Was this fracture caused by osteoporosis? Should I have a bone density scan if I haven't had one?' A DXA scan should be arranged if it has not been done recently.",
          },
          {
            step: "3",
            title: "Ask about Fracture Liaison Service referral",
            detail: "Many Irish hospitals have a Fracture Liaison Service (FLS) — a specialist team that coordinates bone health assessment and secondary prevention after a fracture. Ask your hospital team or GP if an FLS is available and whether you can be referred.",
          },
          {
            step: "4",
            title: "Discuss bone-protective medication",
            detail: "If you have osteoporosis (confirmed or suspected), the evidence for starting bone-protective medication promptly after a fracture is strong. Treatment should ideally be started before hospital discharge or at the first GP visit afterwards.",
          },
          {
            step: "5",
            title: "Ensure calcium and Vitamin D",
            detail: "Adequate calcium and Vitamin D are essential alongside any medication. If you are not already taking these, discuss with your GP or hospital team.",
          },
          {
            step: "6",
            title: "Address fall risk",
            detail: "Ask for referral to a physiotherapist for rehabilitation and falls prevention. Consider an occupational therapy assessment of your home environment. See our Falls Prevention page for practical steps.",
          },
        ].map(({ step, title, detail }) => (
          <div key={step} className="flex gap-4 items-start">
            <div className="bg-slate-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
              {step}
            </div>
            <div>
              <p className="font-bold text-slate-800 text-base mb-1">{title}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>The Imminent Fracture Risk Period</h2>
      <p>
        One of the most important recent developments in osteoporosis management is the recognition of
        &ldquo;imminent fracture risk&rdquo; — the sharply elevated probability of a second fracture in the weeks
        and months immediately following an initial fracture. Research has shown that:
      </p>
      <ul>
        <li>Risk of a second fracture is highest in the first year after a first fracture</li>
        <li>Risk of a hip fracture is particularly elevated in the 3–6 months following a vertebral fracture</li>
        <li>Treatment started promptly after the first fracture provides the greatest reduction in subsequent fracture risk</li>
        <li>Some international guidelines now recommend starting anabolic (bone-building) therapy during this high-risk period rather than waiting for bisphosphonate effects</li>
      </ul>
      <p>
        This is why prompt action after a fracture matters so much — the sooner treatment begins, the greater the
        reduction in risk during this critical window.
      </p>

      <h2>Bone Density Testing After a Fracture</h2>
      <p>
        If you have had a fragility fracture and not previously had a DXA scan, one should be arranged. The DXA
        scan helps:
      </p>
      <ul>
        <li>Confirm the diagnosis of osteoporosis and its severity</li>
        <li>Provide a baseline for monitoring treatment response</li>
        <li>Help determine which treatment is most appropriate</li>
        <li>Provide information on whether other family members should be assessed</li>
      </ul>
      <p>
        If you have previously had a DXA scan that showed osteopenia but not osteoporosis, and you have now had a
        fragility fracture, the fracture itself changes your classification to &ldquo;established osteoporosis&rdquo;
        regardless of your T-score — and treatment is strongly recommended.
      </p>

      <h2>Advocating for Yourself</h2>
      <p>
        Studies consistently show that the majority of people who sustain fragility fractures do not receive
        appropriate bone health assessment or treatment afterwards. You may need to advocate for yourself or a
        family member. Key questions to ask:
      </p>
      <ul>
        <li>&ldquo;Is this a fragility fracture related to osteoporosis?&rdquo;</li>
        <li>&ldquo;Should I have a bone density scan?&rdquo;</li>
        <li>&ldquo;What medication should I take to prevent another fracture?&rdquo;</li>
        <li>&ldquo;Is there a Fracture Liaison Service I can be referred to?&rdquo;</li>
        <li>&ldquo;What falls prevention steps should I take?&rdquo;</li>
      </ul>
      <p>
        If you feel your concerns are not being addressed, it is appropriate to seek a second opinion, ask for a
        specialist referral (rheumatologist, endocrinologist, or metabolic bone disease clinic), or contact the
        Irish Osteoporosis Society for guidance.
      </p>
    </PageLayout>
  );
}
