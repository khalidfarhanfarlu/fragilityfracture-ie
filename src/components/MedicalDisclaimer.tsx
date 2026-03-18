import { Info } from "lucide-react";

export default function MedicalDisclaimer() {
  return (
    <div
      role="note"
      aria-label="Medical disclaimer"
      className="flex gap-3 items-start bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-8 text-sm text-amber-900"
    >
      <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
      <p>
        <strong>Important:</strong> This page provides general information only. It is not a substitute for
        professional medical advice, diagnosis, or treatment. If you have concerns about your bone health, please
        speak to your HCP.
      </p>
    </div>
  );
}
