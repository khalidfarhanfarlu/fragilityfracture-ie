import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Falls Prevention",
  description:
    "Why falls cause most fragility fractures — and practical steps to reduce your risk at home and outdoors in Ireland.",
};

const homeChecklist = [
  { area: "Bathroom", items: ["Install grab rails beside the toilet and bath/shower", "Use a non-slip mat in the bath or shower", "Consider a shower seat if balance is affected", "Ensure good lighting — especially at night"] },
  { area: "Stairs", items: ["Ensure handrails are secure and extend the full length of the stairs", "Avoid carrying items that block your view of steps", "Keep stairs clear of clutter and trailing cables", "Consider a stair lift if stairs are a significant challenge"] },
  { area: "Living areas", items: ["Remove or secure loose rugs (a major fall hazard)", "Arrange furniture so there are clear pathways", "Ensure all areas are well lit; use night lights", "Keep frequently used items at waist height to avoid bending or reaching"] },
  { area: "Bedroom", items: ["Keep a lamp within easy reach of the bed", "Consider a bed rail if you have difficulty getting in or out of bed", "Ensure the path to the bathroom is well lit at night", "Wear non-slip slippers rather than socks when getting up at night"] },
  { area: "Outdoors", items: ["Wear supportive, flat, non-slip footwear outdoors", "Use a walking stick or frame if recommended by your GP or physio", "Be especially careful on wet, icy, or uneven surfaces", "Carry a mobile phone when going out alone"] },
];

export default function FallsPreventionPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Living With Osteoporosis", href: "/living-with-osteoporosis" },
        { label: "Falls Prevention" },
      ]}
      gpCTAContext="If you are worried about your risk of falling, ask your GP for a falls assessment. They may refer you to a physiotherapist, occupational therapist, or a structured falls prevention programme."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Falls Prevention</h1>

      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
        The vast majority of fragility fractures are caused by falls. Preventing falls is therefore just as important
        as treating bone density when it comes to reducing fracture risk. The good news is that many falls are
        preventable, and simple changes can make a significant difference.
      </p>

      <div className="bg-[#F9F9F9] border border-slate-200 rounded-xl p-5 mb-8">
        <p className="text-slate-900 text-sm">
          <strong>Key fact:</strong> A person with osteoporosis who falls has a significantly higher probability of
          fracturing than someone with normal bone density who falls in the same way. Reducing fall risk and
          maintaining bone strength together provide the greatest protection.
        </p>
      </div>

      <h2>Why Do Falls Lead to Fractures?</h2>
      <p>
        When bones are weakened by osteoporosis, the force from even a simple fall — from standing height, for
        example — can be enough to break them. The most vulnerable sites are the hip (from a sideways fall), the
        wrist (from an outstretched hand to break a fall), and the spine (from sudden compression).
      </p>
      <p>
        Falls become more common as we age for a number of reasons, including reduced muscle strength, impaired
        balance, slower reactions, vision problems, dizziness from medications, and home hazards. Addressing these
        factors is central to falls prevention.
      </p>

      <h2>Exercise for Falls Prevention</h2>
      <p>
        Regular exercise specifically targeting balance, strength, and coordination is one of the most effective
        falls prevention strategies. Evidence-based options include:
      </p>
      <ul>
        <li><strong>Tai chi</strong> — particularly well supported by research for reducing falls in older adults</li>
        <li><strong>Balance exercises</strong> — standing on one leg (holding a support), heel-to-toe walking, stepping exercises</li>
        <li><strong>Strength training</strong> — leg and core strength are particularly important for balance</li>
        <li><strong>Functional exercises</strong> — practice getting up from a chair without using hands; step practice</li>
      </ul>
      <p>
        Aim for at least three sessions of balance-focused exercise per week. Your GP can refer you to a
        physiotherapist for an individualised programme.
      </p>

      <h2>Home Safety Checklist</h2>
      <p>
        Many falls happen at home. Going through the following checklist room by room can help identify and remove
        hazards:
      </p>

      <div className="space-y-5 mt-5">
        {homeChecklist.map(({ area, items }) => (
          <div key={area} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-100 px-5 py-3 border-b border-slate-200">
              <h3 className="font-bold text-slate-800 m-0">{area}</h3>
            </div>
            <div className="px-5 py-4 space-y-2">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2>Footwear</h2>
      <p>
        Footwear is a frequently underestimated falls risk. For safety indoors and outdoors:
      </p>
      <ul>
        <li>Wear shoes or slippers with a good grip sole and closed heel</li>
        <li>Avoid loose slippers, flip-flops, or high heels</li>
        <li>Ensure shoes fit well — loose footwear increases trip risk</li>
        <li>Consider asking your GP for a referral to a podiatrist if you have foot problems affecting your gait or balance</li>
      </ul>

      <h2>Vision</h2>
      <p>
        Good vision is critical for detecting hazards and maintaining balance. If you have not had an eye test
        recently, arrange one — deteriorating vision significantly increases fall risk. The HSE recommends an eye
        test at least every two years for adults over 60.
      </p>
      <p>
        If you wear multifocal glasses, be aware that these can sometimes cause difficulty judging step heights.
        Your optometrist can advise on the best lens type for everyday use and outdoor activities.
      </p>

      <h2>Medication Review</h2>
      <p>
        Some medications can affect blood pressure, balance, coordination, or cause dizziness — all of which
        increase fall risk. These include:
      </p>
      <ul>
        <li>Blood pressure medications (especially if the dose is too high, causing lightheadedness)</li>
        <li>Sedatives, sleep aids, and some antidepressants</li>
        <li>Diuretics (water tablets) — can cause urgency rushing to the toilet, leading to falls</li>
        <li>Some antihistamines (particularly older-type ones causing drowsiness)</li>
        <li>Parkinson&apos;s medications</li>
      </ul>
      <p>
        Ask your GP or pharmacist to review your medications to identify any that may be contributing to falls risk.
        Never stop a prescribed medication without medical advice, but do raise the question.
      </p>

      <h2>What to Do If You Fall</h2>
      <p>
        If you fall but do not think you are injured:
      </p>
      <ol>
        <li>Stay calm. Do not rush to get up</li>
        <li>Check if you are injured by moving each limb gently</li>
        <li>If on the floor, try to roll onto your side, push yourself up to hands and knees, and crawl to a sturdy piece of furniture</li>
        <li>Use the furniture to help push yourself to standing</li>
        <li>If you cannot get up or are in pain, call for help or use a personal alarm if you have one</li>
      </ol>
      <p>
        If you have a fall and experience pain, particularly in your hip, back, or wrist — even if you can walk —
        seek medical attention promptly. Fragility fractures are not always immediately obvious.
      </p>
    </PageLayout>
  );
}
