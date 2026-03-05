import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Hip Fractures",
  description:
    "Why hip fractures are the most serious fragility fracture, Irish statistics, surgical treatment, and the rehabilitation pathway.",
};

export default function HipFracturesPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Fragility Fractures", href: "/fragility-fractures" },
        { label: "Hip Fractures" },
      ]}
      gpCTAContext="If you or a family member have had a hip fracture, ensure that bone density assessment and secondary fracture prevention treatment are arranged before or after discharge. Ask the hospital team or your GP."
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-6">Hip Fractures</h1>

      <p className="text-lg text-[#666666] mb-6 leading-relaxed">
        A hip fracture is the most serious type of fragility fracture. It requires emergency surgery, carries
        significant risks, and can have a profound impact on independence and quality of life. In Ireland, hip
        fractures place a major burden on both individuals and the healthcare system.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { stat: "~3,600", label: "hip fractures in Ireland each year" },
          { stat: "20–30%", label: "of older adults die within 12 months of a hip fracture" },
          { stat: "50%", label: "of hip fracture survivors do not regain previous level of function" },
        ].map(({ stat, label }) => (
          <div key={label} className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
            <p className="text-3xl font-extrabold text-red-700 mb-1">{stat}</p>
            <p className="text-xs text-red-800 leading-snug">{label}</p>
          </div>
        ))}
      </div>

      <h2>Why Are Hip Fractures So Serious?</h2>
      <p>
        Unlike most fractures, hip fractures in older adults are associated with major systemic consequences:
      </p>
      <ul>
        <li><strong>Immediate complications:</strong> Blood clots (deep vein thrombosis, pulmonary embolism), pneumonia, urinary tract infections, pressure sores — all related to sudden immobility</li>
        <li><strong>High mortality:</strong> Up to 20–30% of older adults who sustain a hip fracture in Ireland die within the following 12 months. Men have a higher mortality rate than women.</li>
        <li><strong>Loss of independence:</strong> Many people who could live independently before their hip fracture are unable to return home afterwards, requiring ongoing residential or nursing home care</li>
        <li><strong>Pain and functional limitation:</strong> Even for those who recover well, chronic pain and reduced mobility are common</li>
      </ul>

      <h2>What Happens When Someone Has a Hip Fracture?</h2>
      <h3>Emergency Presentation</h3>
      <p>
        Hip fractures are medical emergencies. Symptoms include:
      </p>
      <ul>
        <li>Sudden, severe pain in the hip or groin after a fall</li>
        <li>Inability to bear weight on the affected leg</li>
        <li>The leg may appear shortened and rotated outward</li>
      </ul>
      <p>
        If you suspect someone has a hip fracture, call 999 / 112 immediately. Do not attempt to move the person.
      </p>

      <h3>Surgery</h3>
      <p>
        Almost all hip fractures in older adults require surgery. The type of surgery depends on the location and
        pattern of the fracture:
      </p>
      <ul>
        <li><strong>Internal fixation</strong> (using metal screws, plates, or nails) — used to hold the broken bone in place while it heals; typically for fractures that have not displaced significantly</li>
        <li><strong>Hemi-arthroplasty</strong> — replacement of the femoral head (ball of the hip joint) with a prosthesis; used when the blood supply to the bone head may be compromised</li>
        <li><strong>Total hip replacement</strong> — replacement of both the ball and socket; may be considered in certain fracture types, particularly in more active, younger older adults</li>
      </ul>
      <p>
        Irish and international guidelines recommend that surgery should take place within <strong>24–48 hours</strong> of
        admission to minimise complications. Delays to surgery are associated with higher mortality and worse outcomes.
      </p>

      <h3>Rehabilitation</h3>
      <p>
        Rehabilitation begins as soon as possible after surgery — typically the morning after:
      </p>
      <ol>
        <li><strong>Day 1 post-surgery:</strong> Physiotherapist helps the patient sit up and start to mobilise (stand/walk with support)</li>
        <li><strong>Hospital:</strong> Progressive walking, stair practice, exercises to restore strength and confidence</li>
        <li><strong>Discharge:</strong> May go home with community physiotherapy support, or to an inpatient rehabilitation facility or nursing home</li>
        <li><strong>Outpatient rehabilitation:</strong> Continues for weeks to months after discharge; goals include returning to independent walking, daily activities, and reducing fall risk</li>
      </ol>

      <h2>Secondary Prevention After Hip Fracture</h2>
      <p>
        After a hip fracture, it is essential that bone density is assessed and appropriate treatment started to
        prevent a second fracture. In Ireland, some hospitals have <strong>Fracture Liaison Services (FLS)</strong> to
        coordinate this automatically. If you are not referred, ask specifically:
      </p>
      <ul>
        <li>&ldquo;Has my bone density been assessed or will it be arranged?&rdquo;</li>
        <li>&ldquo;Should I be starting bone-protective medication?&rdquo;</li>
        <li>&ldquo;Will I receive a referral to a Fracture Liaison Service?&rdquo;</li>
      </ul>
      <p>
        Read more on our <a href="/fragility-fractures/secondary-fracture-prevention">Secondary Fracture Prevention page</a>.
      </p>

      <h2>For Family Members and Carers</h2>
      <p>
        If your family member has had a hip fracture, your role in their recovery is important:
      </p>
      <ul>
        <li>Attend rehabilitation sessions where possible — understanding the exercises helps you support them at home</li>
        <li>Help ensure the home is made safe before discharge (grab rails, removal of trip hazards, lighting)</li>
        <li>Ask the hospital social work team about any entitlement to home care support packages through the HSE</li>
        <li>Encourage and assist with prescribed exercises, but do not push beyond what has been recommended</li>
        <li>Monitor for signs of depression or excessive fear of activity, which are common after hip fractures</li>
      </ul>
    </PageLayout>
  );
}
