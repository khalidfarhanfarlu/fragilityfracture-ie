import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "How to Get a Bone Density Test in Ireland",
  description:
    "A guide to accessing DXA bone density scanning in Ireland — GP referrals, public and private pathways, medical cards, and what to expect.",
};

export default function HowToGetTestedPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Bone Density & Testing", href: "/bone-density-testing" },
        { label: "How to Get Tested in Ireland" },
      ]}
      gpCTAContext="Start with your GP. Tell them you are concerned about your bone health and would like to discuss whether a DXA scan is appropriate for you."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">How to Get Tested in Ireland</h1>

      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
        Getting a bone density (DXA) scan in Ireland requires either a GP referral into the public system, or
        self-referral to a private clinic. This page explains both pathways and what to expect.
      </p>

      <h2>Step 1 — Talk to Your GP</h2>
      <p>
        The most common route to a DXA scan in Ireland is through your <strong>GP</strong>. Your GP will:
      </p>
      <ul>
        <li>Review your risk factors for osteoporosis (age, family history, menopause status, medical history, medications)</li>
        <li>May calculate a FRAX score to estimate your 10-year fracture risk</li>
        <li>Decide whether a DXA scan is clinically appropriate</li>
        <li>Write a referral letter to a hospital radiology department or bone density clinic</li>
      </ul>
      <p>
        It helps to go prepared. You can use our{" "}
        <a href="/living-with-osteoporosis/talking-to-your-doctor">Questions to Ask Your Doctor</a> guide before your
        appointment.
      </p>

      <h2>The Public (HSE) Pathway</h2>
      <p>
        If you are referred through the public system, your GP will send a referral to a DXA service at a public
        hospital. DXA scanning is available at most large public hospitals in Ireland.
      </p>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
        <ul className="space-y-2 text-sm text-slate-700">
          <li>&#x2714;&nbsp; No upfront cost for public patients with a valid referral</li>
          <li>&#x2714;&nbsp; Medical card holders are entitled to public hospital services free of charge</li>
          <li>&#x26A0;&nbsp; Waiting times can vary — typically weeks to a few months depending on location and urgency</li>
          <li>&#x2139;&nbsp; Urgent referrals (e.g., after a fragility fracture) are generally prioritised</li>
        </ul>
      </div>
      <p>
        To find your nearest HSE radiology service, visit{" "}
        <a href="https://www.hse.ie" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">
          hse.ie
        </a>{" "}
        and search for bone density or DXA services in your area.
      </p>

      <h2>Private Pathway</h2>
      <p>
        DXA scans are available privately at many private hospitals and independent diagnostic imaging centres across
        Ireland. Advantages of the private route include:
      </p>
      <ul>
        <li>Shorter waiting times — often within days</li>
        <li>Some private centres accept self-referral (no GP letter required)</li>
        <li>Flexible appointment times</li>
      </ul>
      <p>
        The cost of a private DXA scan in Ireland typically ranges from approximately €80–€150, though this varies by
        provider and location. No specific commercial providers are recommended here — search for &ldquo;DXA scan
        Ireland&rdquo; or &ldquo;bone density scan [your county]&rdquo; for local options.
      </p>

      <h3>Private Health Insurance</h3>
      <p>
        Many private health insurance plans in Ireland cover DXA scans, particularly for people over 50 or those with
        risk factors. Check with your insurer (VHI, Irish Life Health, Laya Healthcare, etc.) before your appointment
        to confirm coverage and any pre-authorisation requirements.
      </p>

      <h2>Medical Card Holders</h2>
      <p>
        If you have a medical card, you are entitled to public hospital services, including DXA scanning, free of
        charge with a valid GP referral. There is no separate application required — your medical card number and GP
        referral letter are sufficient.
      </p>
      <p>
        If you are a GP visit card holder (but not a full medical card holder), charges may apply for hospital
        outpatient services. Check with your GP and the relevant hospital before attending.
      </p>

      <h2>What to Bring</h2>
      <ul>
        <li>Your GP referral letter (for public or private scan)</li>
        <li>Your medical card or private health insurance details (if applicable)</li>
        <li>A list of your current medications (some medications are noted on the report)</li>
        <li>Any previous DXA scan results, if you have them</li>
        <li>Comfortable, loose-fitting clothing without metal zips or fastenings if possible</li>
      </ul>
      <p>
        Women should inform the scanning team if there is any possibility of pregnancy, as X-rays are generally
        avoided during pregnancy (though DXA radiation is very low).
      </p>

      <h2>After the Scan</h2>
      <p>
        Results are typically sent to your referring GP within 1–2 weeks. Your GP will then contact you to discuss
        the results and next steps. If you have not heard within two weeks of your scan, contact your GP&apos;s
        surgery to follow up.
      </p>
      <p>
        For help understanding your results, see our{" "}
        <a href="/bone-density-testing/understanding-your-results">Understanding Your Results page</a>.
      </p>
    </PageLayout>
  );
}
