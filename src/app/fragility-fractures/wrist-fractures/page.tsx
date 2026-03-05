import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Wrist Fractures & Osteoporosis",
  description:
    "A wrist fracture after age 50 is often the first sign of osteoporosis. Why it matters, what to do, and how to prevent a second fracture.",
};

export default function WristFracturesPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Fragility Fractures", href: "/fragility-fractures" },
        { label: "Wrist Fractures" },
      ]}
      gpCTAContext="If you have broken your wrist after a fall, talk to your GP about having a bone density assessment. A wrist fracture is an important warning sign and should not be treated in isolation."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Wrist Fractures</h1>

      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
        A wrist fracture — specifically a fracture of the distal radius, the lower end of the larger forearm bone —
        is one of the most common fragility fractures. It is often the first fracture a person with osteoporosis
        experiences, and it should be taken seriously as a warning sign of underlying bone fragility.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="text-amber-900 text-sm">
          <strong>Warning sign:</strong> A wrist fracture in a person over 50, caused by a fall from standing height
          or less, should prompt a full bone health assessment including a DXA scan. Unfortunately, studies show that
          the majority of people who break their wrist are not assessed for osteoporosis despite clear guidelines
          recommending they should be.
        </p>
      </div>

      <h2>How Wrist Fractures Happen</h2>
      <p>
        The most common mechanism of a distal radius fracture is falling on an outstretched hand — an instinctive
        reaction to a fall where the hand is put out to break the impact. The force travels up through the wrist and
        fractures the distal radius.
      </p>
      <p>
        In a young person with healthy bones, this force would rarely cause a fracture. In someone with osteoporotic
        bone, the weakened structure cannot withstand the impact, and the bone breaks.
      </p>

      <h2>Symptoms</h2>
      <p>
        After a fall, symptoms of a wrist fracture include:
      </p>
      <ul>
        <li>Immediate pain in the wrist, which may be severe</li>
        <li>Swelling and bruising</li>
        <li>Visible deformity (the wrist may appear bent out of shape)</li>
        <li>Difficulty or inability to use the hand normally</li>
        <li>Tenderness when the wrist is touched</li>
      </ul>
      <p>
        X-ray is used to confirm the fracture and assess whether the bones have shifted (displaced) or remain in
        alignment.
      </p>

      <h2>Treatment</h2>
      <p>
        Treatment depends on the severity and displacement of the fracture:
      </p>
      <ul>
        <li><strong>Cast (plaster or synthetic):</strong> Used for non-displaced or minimally displaced fractures. Typically worn for 4–6 weeks.</li>
        <li><strong>Surgery:</strong> Required for significantly displaced fractures; usually involves the insertion of a metal plate and screws to hold the bones in the correct position. Recovery is generally faster with surgery in younger, more active patients.</li>
        <li><strong>Physiotherapy:</strong> Recommended after cast removal to restore strength, flexibility, and function in the wrist and hand.</li>
      </ul>

      <h2>Recovery</h2>
      <p>
        Most people recover reasonable wrist function after a distal radius fracture, though full recovery can take
        several months. Some residual stiffness or weakness may persist, particularly in older adults.
      </p>
      <p>
        Activities like driving, writing, and fine motor tasks will be limited during the early weeks. Occupational
        therapy advice may be helpful if daily activities are significantly affected.
      </p>

      <h2>The Critical Next Step: Bone Health Assessment</h2>
      <p>
        A wrist fracture over the age of 50 is classified as a fragility fracture and should trigger an automatic
        assessment of bone density. Research consistently shows that people who fracture a wrist are at significantly
        elevated risk of a subsequent hip or vertebral fracture — often within the next few years.
      </p>
      <p>
        Specifically, a wrist fracture approximately:
      </p>
      <ul>
        <li>Doubles the risk of a subsequent hip fracture</li>
        <li>Significantly increases the risk of a vertebral fracture</li>
      </ul>
      <p>
        Despite this, large-scale studies show that less than 20% of people who sustain a wrist fracture go on to
        have a DXA scan, and very few are started on bone-protective treatment.
      </p>
      <p>
        If you have had a wrist fracture and have not been assessed for osteoporosis, please raise this with your GP.
        This gap in care is preventable — and the consequences of a subsequent hip fracture can be devastating.
      </p>

      <div className="bg-[#F9F9F9] border border-slate-200 rounded-xl p-5 mt-4">
        <p className="text-slate-900 text-sm">
          <strong>What to say to your GP:</strong> &ldquo;I broke my wrist in a fall and I haven&apos;t been assessed
          for osteoporosis. Could I be referred for a bone density (DXA) scan?&rdquo;
        </p>
      </div>

      <h2>Secondary Fracture Prevention</h2>
      <p>
        After a wrist fracture, secondary prevention involves:
      </p>
      <ul>
        <li>DXA scan to assess bone density</li>
        <li>FRAX score to assess 10-year fracture risk</li>
        <li>Starting bone-protective medication if appropriate</li>
        <li>Ensuring adequate calcium and Vitamin D</li>
        <li>Exercise programme to maintain and build bone strength</li>
        <li>Falls prevention assessment and measures</li>
      </ul>
      <p>
        More information on the steps after a fracture is available on our{" "}
        <a href="/fragility-fractures/after-a-fracture">After a Fracture: What Next?</a> page.
      </p>
    </PageLayout>
  );
}
