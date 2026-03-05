import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "What Is a DXA Scan?",
  description:
    "DXA (Dual-energy X-ray Absorptiometry) scans measure bone density. Learn what to expect, who should be referred, and what the scan involves.",
};

export default function WhatIsADxaScanPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Bone Density & Testing", href: "/bone-density-testing" },
        { label: "What Is a DXA Scan?" },
      ]}
      gpCTAContext="If you think you may benefit from a DXA scan, speak to your GP. They can assess whether a referral is appropriate based on your risk factors."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">What Is a DXA Scan?</h1>

      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
        A DXA scan is the standard medical test used to measure bone density. It is the only way to reliably diagnose
        osteoporosis and is used to assess fracture risk and monitor the response to treatment over time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "No needles", detail: "Completely non-invasive — you simply lie on a table." },
          { label: "Very low radiation", detail: "Less radiation than a chest X-ray or transatlantic flight." },
          { label: "10–20 minutes", detail: "Quick and straightforward. Usually done as an outpatient." },
        ].map(({ label, detail }) => (
          <div key={label} className="bg-[#F9F9F9] border border-slate-200 rounded-xl p-5 text-center">
            <p className="font-bold text-slate-800 mb-1">{label}</p>
            <p className="text-xs text-slate-700">{detail}</p>
          </div>
        ))}
      </div>

      <h2>What Does DXA Stand For?</h2>
      <p>
        DXA stands for <strong>Dual-energy X-ray Absorptiometry</strong>. You may also see it written as DEXA. The
        scan uses two low-energy X-ray beams of different energies to measure how much energy the bone absorbs. The
        denser the bone, the more energy is absorbed. This gives a precise measurement of bone mineral density (BMD).
      </p>

      <h2>What Does a DXA Scan Measure?</h2>
      <p>
        A DXA scan measures <strong>bone mineral density (BMD)</strong> — the amount of mineral (primarily calcium
        and phosphate) in a given area of bone. It is typically performed at two sites:
      </p>
      <ul>
        <li><strong>The hip</strong> (femoral neck and total hip) — the most clinically significant site for fracture risk</li>
        <li><strong>The lumbar spine</strong> (lower back, typically L1–L4) — useful for detecting early bone loss</li>
      </ul>
      <p>
        In some cases, the wrist (distal radius) may also be scanned, particularly if the hip or spine results cannot
        be used (e.g., due to previous surgery or severe arthritis).
      </p>

      <h2>What to Expect on the Day</h2>
      <p>
        A DXA scan is straightforward and comfortable. Here is what typically happens:
      </p>
      <ol>
        <li><strong>Arrival:</strong> You check in at the radiology or bone density department. In public hospitals, this is usually as an outpatient.</li>
        <li><strong>Clothing:</strong> You will be asked to remove any metal-containing clothing or items from the scan area (such as belts, jewellery, or clothing with metal zips). In some cases, you may be given a gown. Loose, comfortable clothing without metal fastenings is ideal.</li>
        <li><strong>The scan:</strong> You lie flat on a padded scanning table. The scanner arm passes over your body — you do not go inside a tunnel (unlike an MRI). You need to remain still for a few minutes.</li>
        <li><strong>Hip scan:</strong> Your leg is positioned in a special brace to hold it at the correct angle. This is not painful.</li>
        <li><strong>Spine scan:</strong> A foam block is placed under your knees to flatten the lower spine against the table.</li>
        <li><strong>Duration:</strong> The full scan takes around 10–20 minutes including set-up time.</li>
        <li><strong>After the scan:</strong> You can leave immediately. There is no recovery time needed.</li>
      </ol>

      <h2>What Can Affect the Results?</h2>
      <p>
        Some factors can affect DXA scan accuracy or interpretation, including:
      </p>
      <ul>
        <li>Previous spinal fractures or severe spinal arthritis (can falsely elevate spine BMD readings)</li>
        <li>Hip replacements (that hip cannot be assessed)</li>
        <li>Very high or very low body weight</li>
        <li>Barium or contrast agents (if you have had certain medical tests recently)</li>
      </ul>
      <p>
        The radiographer or reporting doctor will note these factors when interpreting your results.
      </p>

      <h2>Who Should Have a DXA Scan?</h2>
      <p>Your GP may refer you for a DXA scan if you:</p>
      <ul>
        <li>Have had a fragility fracture (broken bone from a low-energy impact)</li>
        <li>Are a post-menopausal woman, particularly under 65 with additional risk factors</li>
        <li>Are a woman aged 65 or over</li>
        <li>Are a man aged 65 or over with risk factors</li>
        <li>Are on long-term oral corticosteroid therapy (such as prednisolone)</li>
        <li>Are receiving treatments that affect bone density (e.g., androgen deprivation therapy for prostate cancer, aromatase inhibitors for breast cancer)</li>
        <li>Have a medical condition associated with bone loss (e.g., coeliac disease, inflammatory bowel disease, hyperthyroidism)</li>
        <li>Have a FRAX score above certain intervention thresholds</li>
      </ul>

      <h2>Results and Follow-Up</h2>
      <p>
        Results are typically sent to your referring GP within 1–2 weeks. Your GP will explain the findings and
        discuss next steps. Results are given as a <strong>T-score</strong> (and sometimes a Z-score).
      </p>
      <p>
        Learn more about what these scores mean on our{" "}
        <a href="/bone-density-testing/understanding-your-results">Understanding Your Results page</a>.
      </p>
    </PageLayout>
  );
}
