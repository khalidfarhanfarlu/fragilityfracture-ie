import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Recovery & Rehabilitation After a Fragility Fracture",
  description:
    "What to expect after a fragility fracture, the role of physiotherapy, and how Fracture Liaison Services work in Ireland.",
};

export default function RecoveryRehabPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Living With Osteoporosis", href: "/living-with-osteoporosis" },
        { label: "Recovery & Rehabilitation" },
      ]}
      gpCTAContext="After a fragility fracture, ask your hospital team or doctor about referral to a Fracture Liaison Service. Getting assessed and treated promptly can significantly reduce your risk of a second fracture."
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-6">Recovery &amp; Rehabilitation</h1>

      <p className="text-lg text-[#666666] mb-6 leading-relaxed">
        Recovering from a fragility fracture takes time, patience, and the right support. But recovery is possible —
        and with appropriate rehabilitation, many people return to their previous levels of activity. Equally
        important is ensuring that treatment is started to prevent a second fracture.
      </p>

      <h2>What to Expect After a Fracture</h2>
      <p>
        The immediate aftermath of a fragility fracture will depend on the type and severity of the fracture. In
        general:
      </p>
      <ul>
        <li><strong>Hip fractures</strong> typically require surgery (usually within 24–48 hours of admission) and a hospital stay of around 1–2 weeks, followed by inpatient or outpatient rehabilitation</li>
        <li><strong>Wrist fractures</strong> may be treated with a cast and outpatient physiotherapy, though some require surgery</li>
        <li><strong>Vertebral fractures</strong> are often managed conservatively (rest, pain management, physiotherapy) unless there is neurological involvement; some are treated with vertebroplasty or kyphoplasty procedures</li>
      </ul>
      <p>
        Pain management is a key part of early recovery. Adequate pain control allows earlier mobilisation, which
        is important for preventing complications and supporting rehabilitation.
      </p>

      <h2>The Role of Physiotherapy</h2>
      <p>
        Physiotherapy is central to recovery from a fragility fracture. A physiotherapist can:
      </p>
      <ul>
        <li>Assess your strength, balance, and mobility</li>
        <li>Design a safe, progressive exercise programme tailored to your fracture type and fitness level</li>
        <li>Teach safe movement techniques to avoid further fractures</li>
        <li>Help with mobility aids (walking frames, crutches, sticks) and advice on their use</li>
        <li>Address fear of movement (kinesiophobia), which is common after fractures</li>
        <li>Guide you through specific exercises to regain function in the affected area</li>
      </ul>
      <p>
        Ask your doctor or hospital team for a referral to physiotherapy as soon as possible after your fracture. In many
        hospitals, physiotherapy begins within days of a hip fracture surgery.
      </p>

      <h2>Returning to Activity Safely</h2>
      <p>
        It is natural to feel cautious about activity after a fracture. However, gradually increasing activity is
        important for:
      </p>
      <ul>
        <li>Maintaining and rebuilding muscle strength (which reduces future fall risk)</li>
        <li>Preventing deconditioning and loss of function</li>
        <li>Improving mood and mental wellbeing</li>
        <li>Stimulating bone remodelling and healing</li>
      </ul>
      <p>
        Your physiotherapist will advise on a safe and gradual return to activities. In general:
      </p>
      <ul>
        <li>Start with gentle, supported movement and gradually progress</li>
        <li>Avoid high-impact activities until cleared by your physiotherapist or consultant</li>
        <li>For vertebral fractures specifically, avoid forward bending of the spine under load</li>
        <li>Walking is usually safe and beneficial at all stages of recovery</li>
      </ul>

      <h2>Fracture Liaison Services (FLS) in Ireland</h2>
      <p>
        A <strong>Fracture Liaison Service (FLS)</strong> is a specialist service that identifies people who have
        had a fragility fracture, assesses their bone health, and ensures they receive appropriate treatment to
        prevent a second fracture. FLS is a &ldquo;secondary fracture prevention&rdquo; initiative.
      </p>

      <div className="bg-[#F9F9F9] border border-[#e0e0e0] rounded-xl p-6 my-6">
        <h3 className="text-[#434343] font-bold text-base mb-3">What an FLS typically does:</h3>
        <ul className="space-y-2 text-sm text-[#434343]">
          <li>&#x2714;&nbsp; Identifies patients who have had a fragility fracture</li>
          <li>&#x2714;&nbsp; Arranges or reviews a DXA bone density scan</li>
          <li>&#x2714;&nbsp; Assesses fall risk factors</li>
          <li>&#x2714;&nbsp; Initiates or recommends bone-protective medication</li>
          <li>&#x2714;&nbsp; Ensures calcium and Vitamin D supplementation</li>
          <li>&#x2714;&nbsp; Provides education on osteoporosis and prevention</li>
          <li>&#x2714;&nbsp; Coordinates with doctor for ongoing monitoring</li>
        </ul>
      </div>

      <p>
        FLS availability in Ireland is growing but not yet universal. In hospitals where an FLS exists, it is
        usually led by a specialist nurse or coordinator working with an orthopaedic or rheumatology team.
      </p>

      <h3>If an FLS is not available to you</h3>
      <p>
        If your hospital does not have an FLS, or if you have not been referred to one after a fracture, you can
        advocate for yourself:
      </p>
      <ul>
        <li>Ask the orthopaedic team before you are discharged: &ldquo;Have I been assessed for osteoporosis and referred for secondary fracture prevention?&rdquo;</li>
        <li>Contact your doctor after discharge to arrange a bone density assessment and discuss osteoporosis treatment</li>
        <li>Ask for a referral to a rheumatologist or metabolic bone clinic if your fracture risk is complex</li>
      </ul>
      <p>
        More information on secondary fracture prevention is available on our{" "}
        <a href="/fragility-fractures/secondary-fracture-prevention">Secondary Fracture Prevention page</a>.
      </p>

      <h2>Occupational Therapy</h2>
      <p>
        An occupational therapist (OT) can assess your home environment and daily activities, and recommend
        adaptations or aids to help you manage safely and independently during and after recovery. This may include:
      </p>
      <ul>
        <li>Home safety assessment and recommendations for adaptations (grab rails, raised toilet seats, etc.)</li>
        <li>Advice on managing daily tasks (dressing, cooking, bathing) with limited mobility</li>
        <li>Assistive equipment recommendations</li>
      </ul>
      <p>
        OT referrals can be arranged through your doctor or hospital team. In Ireland, occupational therapy services are
        available through the HSE in both hospital and community settings.
      </p>
    </PageLayout>
  );
}
