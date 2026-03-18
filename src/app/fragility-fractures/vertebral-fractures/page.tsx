import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Vertebral (Spinal) Fractures",
  description:
    "Vertebral fractures are the most common osteoporotic fracture, yet are often missed. Learn the symptoms, diagnosis, and what to do.",
};

export default function VertebralFracturesPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Fragility Fractures", href: "/fragility-fractures" },
        { label: "Vertebral Fractures" },
      ]}
      gpCTAContext="If you have persistent back pain, loss of height, or a stooped posture — especially if you have risk factors for osteoporosis — speak to your HCP. You may have a vertebral fracture that has not been diagnosed."
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-6">Vertebral (Spinal) Fractures</h1>

      <p className="text-lg text-[#666666] mb-6 leading-relaxed">
        Vertebral fractures — fractures of the bones of the spine (vertebrae) — are the most common type of
        osteoporotic fracture. Yet they are also the most frequently missed, because they can occur without obvious
        trauma and their symptoms are often attributed to normal ageing or general back pain.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="text-amber-900 text-sm">
          <strong>Key fact:</strong> It is estimated that approximately two-thirds of vertebral fractures are never
          diagnosed. They may present as mild or moderate back pain that patients and doctors attribute to
          musculoskeletal problems, arthritis, or general age-related changes.
        </p>
      </div>

      <h2>What Is a Vertebral Fracture?</h2>
      <p>
        Vertebral fractures occur when one or more of the vertebrae — the individual bones that make up the spine —
        collapse or become compressed due to weakened bone. The most common type is a <strong>compression fracture</strong>,
        where the front of the vertebra collapses, giving it a wedge shape. Multiple compression fractures can lead
        to progressive loss of height and forward curvature of the spine.
      </p>
      <p>
        Vertebral fractures most commonly occur in the thoracic (mid-back) and lumbar (lower back) regions of the
        spine.
      </p>

      <h2>How Do Vertebral Fractures Happen?</h2>
      <p>
        In people with osteoporosis, vertebral fractures can occur:
      </p>
      <ul>
        <li>After a fall</li>
        <li>After lifting a heavy object</li>
        <li>After a forward bending movement (like bending to make a bed)</li>
        <li>Without any obvious precipitating event — the vertebra may simply collapse under the weight of the body</li>
      </ul>

      <h2>Symptoms to Watch For</h2>
      <p>
        The presentation of vertebral fractures varies considerably:
      </p>
      <ul>
        <li><strong>Sudden back pain:</strong> Can be severe, particularly if the fracture is acute. Pain is typically localised to the fracture site and may radiate around the chest or abdomen.</li>
        <li><strong>Persistent or chronic back pain:</strong> Back pain lasting weeks or months, particularly in the middle or lower back</li>
        <li><strong>Loss of height:</strong> A person may notice they are shorter than they used to be. Significant height loss (more than 2 cm, or 1 inch) is associated with vertebral fractures.</li>
        <li><strong>Stooped or rounded posture (kyphosis):</strong> Gradual forward curvature of the upper back — sometimes called a &ldquo;dowager&apos;s hump&rdquo; — is caused by multiple compressed vertebrae</li>
        <li><strong>In severe cases:</strong> Reduced space in the chest cavity can affect breathing; the abdomen may protrude as the torso shortens</li>
        <li><strong>No symptoms at all:</strong> Many vertebral fractures are discovered incidentally on chest X-rays or scans done for other reasons</li>
      </ul>

      <h2>Diagnosis</h2>
      <p>
        Vertebral fractures are diagnosed using imaging:
      </p>
      <ul>
        <li><strong>Plain X-ray</strong> of the spine — can identify obvious collapse or deformity</li>
        <li><strong>Vertebral fracture assessment (VFA)</strong> — a low-dose X-ray done as part of a DXA scan; specifically designed to screen for vertebral fractures</li>
        <li><strong>MRI</strong> — used to determine whether a fracture is acute (recent) or chronic (older), and to assess for any nerve or spinal cord involvement</li>
        <li><strong>CT scan</strong> — may be used for detailed fracture assessment</li>
      </ul>
      <p>
        If your HCP suspects a vertebral fracture, they will arrange appropriate imaging. If you are having a DXA scan,
        ask whether a vertebral fracture assessment can be included.
      </p>

      <h2>Treatment</h2>
      <p>
        Most vertebral fractures are managed conservatively:
      </p>
      <ul>
        <li><strong>Pain management:</strong> Paracetamol, anti-inflammatory medications, and in some cases short-term stronger analgesia. Rest in the acute phase, but prolonged bed rest is discouraged.</li>
        <li><strong>Physiotherapy:</strong> To maintain and restore mobility, strengthen supporting muscles, and address postural changes</li>
        <li><strong>Bracing:</strong> Back braces or corsets may provide short-term pain relief in some cases</li>
        <li><strong>Bone-protective medication:</strong> Crucial to prevent further fractures — starting treatment promptly is essential</li>
      </ul>

      <h3>Vertebroplasty and Kyphoplasty</h3>
      <p>
        For some painful acute vertebral fractures that do not respond to conservative management, two minimally
        invasive procedures may be considered:
      </p>
      <ul>
        <li><strong>Vertebroplasty:</strong> Bone cement is injected into the fractured vertebra to stabilise it</li>
        <li><strong>Kyphoplasty (balloon kyphoplasty):</strong> A balloon is first inflated in the vertebra to restore height, then cement is injected</li>
      </ul>
      <p>
        These procedures are not suitable for everyone and are considered on a case-by-case basis. Your consultant
        will discuss whether they are appropriate for your situation.
      </p>

      <h2>The Importance of Diagnosis</h2>
      <p>
        Even a single vertebral fracture dramatically increases the risk of future fractures — including a second
        vertebral fracture (approximately 5 times higher risk in the following year) and hip fractures. This is why
        diagnosis matters so much: once identified, treatment can begin and the fracture cascade can be interrupted.
      </p>
      <p>
        If you have persistent back pain, have noticed a loss of height, or have a stooped posture, please raise
        this with your HCP — particularly if you have known osteoporosis or risk factors.
      </p>
    </PageLayout>
  );
}
