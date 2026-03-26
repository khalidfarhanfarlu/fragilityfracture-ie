import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Understanding Your DXA Scan Results",
  description:
    "What do your T-score and Z-score mean? A plain-language guide to understanding bone density results and what to do next.",
};

export default function UnderstandingResultsPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Bone Density & Testing", href: "/bone-density-testing" },
        { label: "Understanding Your Results" },
      ]}
      gpCTAContext="Always discuss your DXA results with your doctor. They will consider your full clinical picture — including your age, risk factors, and fracture history — to decide whether treatment or lifestyle changes are needed."
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-6">Understanding Your DXA Scan Results</h1>

      <p className="text-lg text-[#666666] mb-6 leading-relaxed">
        Receiving your DXA scan results can be confusing — especially if you&apos;re not sure what the numbers mean.
        This page explains T-scores, Z-scores, and the categories of bone density in plain English.
      </p>

      <h2>What Is a T-score?</h2>
      <p>
        Your T-score is the key number in your DXA report. It compares your bone density to that of a healthy young
        adult (around age 30) of the same sex. It is expressed as a number of <strong>standard deviations</strong>{" "}
        above or below that reference point. A score of 0 means your bone density is exactly average for a healthy
        young adult; negative numbers indicate lower bone density.
      </p>

      {/* T-score visual */}
      <div className="my-8 overflow-hidden rounded-2xl border border-[#e0e0e0]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#555555] text-white">
              <th className="px-5 py-3 text-left font-semibold">Category</th>
              <th className="px-5 py-3 text-left font-semibold">T-score Range</th>
              <th className="px-5 py-3 text-left font-semibold">What It Means</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-emerald-50">
              <td className="px-5 py-4 font-bold text-emerald-800">Normal</td>
              <td className="px-5 py-4 font-mono text-emerald-700">+1 to −1.0</td>
              <td className="px-5 py-4 text-[#555555]">Bone density is within the normal range. Maintain bone health with good nutrition and exercise.</td>
            </tr>
            <tr className="bg-yellow-50">
              <td className="px-5 py-4 font-bold text-yellow-800">Osteopenia</td>
              <td className="px-5 py-4 font-mono text-yellow-700">−1.0 to −2.5</td>
              <td className="px-5 py-4 text-[#555555]">Bone density is below normal but not classified as osteoporosis. Lifestyle measures and monitoring are recommended.</td>
            </tr>
            <tr className="bg-orange-50">
              <td className="px-5 py-4 font-bold text-orange-800">Osteoporosis</td>
              <td className="px-5 py-4 font-mono text-orange-700">−2.5 or below</td>
              <td className="px-5 py-4 text-[#555555]">Bone density is significantly reduced. Treatment is usually recommended. Your doctor will advise.</td>
            </tr>
            <tr className="bg-red-50">
              <td className="px-5 py-4 font-bold text-red-800">Severe Osteoporosis</td>
              <td className="px-5 py-4 font-mono text-red-700">Below −2.5 + fracture</td>
              <td className="px-5 py-4 text-[#555555]">Osteoporosis with one or more fragility fractures. Prompt treatment and secondary prevention are essential.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-blue-900 text-sm">
          <strong>Example:</strong> A T-score of <strong>−1.8</strong> at the hip would be classified as{" "}
          <strong>osteopenia</strong>. A T-score of <strong>−2.7</strong> would be classified as{" "}
          <strong>osteoporosis</strong>.
        </p>
      </div>

      <h2>What Is a Z-score?</h2>
      <p>
        Your report may also include a <strong>Z-score</strong>. Unlike the T-score, the Z-score compares your bone
        density to others of your own age and sex. A Z-score of 0 means you have the bone density expected for your
        age group.
      </p>
      <p>
        A Z-score below <strong>−2.0</strong> suggests your bone loss may be greater than expected for your age. This
        can prompt your doctor to investigate for <strong>secondary causes</strong> of bone loss — such as coeliac
        disease, thyroid problems, vitamin D deficiency, or medication side effects.
      </p>
      <p>
        For most adults over 50, the <strong>T-score</strong> is used to diagnose osteoporosis and guide treatment.
        The Z-score is more relevant in younger adults.
      </p>

      <h2>What Does &ldquo;Normal&rdquo; Actually Mean?</h2>
      <p>
        A &ldquo;normal&rdquo; T-score does not mean there is nothing to be aware of. Bone density is only one piece
        of the picture. Your fracture risk also depends on your age, fall history, other medical conditions, and other
        factors. This is why the{" "}
        <a href="/bone-density-testing/frax-fracture-risk-tool">FRAX tool</a> is often used alongside the DXA scan to
        give a more complete picture of your 10-year fracture risk.
      </p>

      <h2>What Should I Do After My Results?</h2>

      <h3>If Your Result Is Normal</h3>
      <p>
        Continue to maintain good bone health through adequate calcium and Vitamin D, regular weight-bearing exercise,
        and a healthy lifestyle. Your doctor may recommend a repeat DXA scan in 2–5 years depending on your risk factors.
      </p>

      <h3>If Your Result Shows Osteopenia</h3>
      <ul>
        <li>Discuss your lifestyle and diet with your doctor</li>
        <li>Ensure adequate calcium (from food, and supplementation if needed) and Vitamin D</li>
        <li>Increase weight-bearing and resistance exercise</li>
        <li>Address any modifiable risk factors (smoking, alcohol, low body weight)</li>
        <li>Ask about a repeat DXA scan — typically recommended every 1–2 years</li>
        <li>Your doctor may calculate your FRAX score to assess whether medication is appropriate</li>
      </ul>

      <h3>If Your Result Shows Osteoporosis</h3>
      <ul>
        <li>Your doctor will discuss treatment options, which will likely include medication</li>
        <li>Ensure adequate calcium and Vitamin D intake (your doctor may recommend supplements)</li>
        <li>Review your falls risk and home safety</li>
        <li>Start or continue appropriate exercise</li>
        <li>Read our <a href="/living-with-osteoporosis/treatment-options">Treatment Options page</a> for an overview of what may be offered</li>
      </ul>

      <div className="bg-[#F9F9F9] border border-[#e0e0e0] rounded-xl p-6 mt-6">
        <p className="text-[#434343] text-sm">
          <strong>Important:</strong> Your results should always be interpreted by your doctor in the context of your full
          medical history. A number on a report only tells part of the story. Never change medication or start new
          supplements without speaking to your doctor or pharmacist first.
        </p>
      </div>
    </PageLayout>
  );
}
