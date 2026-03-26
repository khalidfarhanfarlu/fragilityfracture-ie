import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "FragilityFracture.ie medical disclaimer — this site provides educational information only, not medical advice.",
};

export default function MedicalDisclaimerPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Medical Disclaimer" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-6">Medical Disclaimer</h1>
      <p className="text-sm text-[#999999] mb-8">Last updated: February 2026</p>

      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-6 mb-8">
        <p className="font-bold text-amber-900 text-lg mb-2">Important: Please Read</p>
        <p className="text-amber-800">
          The information on FragilityFracture.ie is provided for <strong>general educational purposes only</strong>.
          It is not intended to be, and should not be used as, a substitute for professional medical advice,
          diagnosis, or treatment. Always seek the advice of your doctor or another qualified healthcare provider with
          any questions you may have regarding your health.
        </p>
      </div>

      <h2>Educational Information Only</h2>
      <p>
        All content on this website — including text, graphics, images, and other material — is provided for general
        informational and educational purposes. FragilityFracture.ie is not a medical service and the information
        presented here does not constitute:
      </p>
      <ul>
        <li>Medical advice</li>
        <li>A diagnosis of any condition</li>
        <li>A recommendation for any specific treatment, medication, or procedure</li>
        <li>A substitute for consultation with a qualified healthcare professional</li>
      </ul>

      <h2>Individual Circumstances Vary</h2>
      <p>
        Medical information that is appropriate for one person may not be appropriate for another. Osteoporosis
        treatment decisions depend on many individual factors including age, sex, medical history, bone density
        results, medications, fracture risk score, and other health conditions. Only a healthcare professional
        who knows your full medical history can provide guidance specific to your situation.
      </p>

      <h2>Content Accuracy</h2>
      <p>
        We make every effort to ensure the information on this site is accurate, up-to-date, and consistent with
        current clinical guidelines from reputable sources including:
      </p>
      <ul>
        <li>Health Service Executive (HSE), Ireland</li>
        <li>National Institute for Health and Care Excellence (NICE), UK</li>
        <li>International Osteoporosis Foundation (IOF)</li>
        <li>Irish Osteoporosis Society</li>
      </ul>
      <p>
        However, medical knowledge evolves rapidly. We cannot guarantee that all information is current at the time
        of reading. Guidelines and recommendations may have changed. Always check with your healthcare provider
        or consult up-to-date clinical resources.
      </p>

      <h2>No Doctor–Patient Relationship</h2>
      <p>
        Use of this website does not create a doctor–patient or healthcare provider–patient relationship. We
        cannot respond to enquiries about specific medical conditions, symptoms, diagnoses, or treatments for
        individual users.
      </p>

      <h2>Emergency Situations</h2>
      <p>
        If you believe you are experiencing a medical emergency — including a fall with suspected fracture, sudden
        severe pain, or any other serious medical issue — please call <strong>999</strong> or <strong>112</strong>{" "}
        immediately, or go to your nearest Emergency Department. Do not use this website to seek emergency guidance.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        This website contains links to external websites for the convenience of users. We are not responsible for
        the content, accuracy, or practices of any third-party websites, and linking to them does not constitute
        endorsement of their content.
      </p>

      <h2>Contact Your Doctor</h2>
      <p>
        If you have any concerns about your bone health, have experienced a fracture, or have questions about
        osteoporosis, the most important thing you can do is speak to your doctor. A brief doctor consultation is the
        first step to getting a proper assessment of your individual situation.
      </p>
    </PageLayout>
  );
}
