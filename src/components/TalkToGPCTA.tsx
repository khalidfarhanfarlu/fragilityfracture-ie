import Link from "next/link";
import { Stethoscope } from "lucide-react";

interface TalkToGPCTAProps {
  context?: string;
}

export default function TalkToGPCTA({ context }: TalkToGPCTAProps) {
  return (
    <div className="bg-teal-700 rounded-2xl p-8 mt-10 text-white">
      <div className="flex items-start gap-4">
        <div className="bg-teal-600 rounded-xl p-3 shrink-0">
          <Stethoscope className="w-7 h-7 text-white" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Talk to Your GP</h2>
          <p className="text-teal-100 mb-4 text-base">
            {context ||
              "If you have concerns about your bone health, don't wait. Your GP can assess your risk, arrange a bone density (DXA) scan, and discuss next steps with you."}
          </p>
          <p className="text-teal-100 mb-4 text-sm font-medium">
            You can say: <em className="text-white">&ldquo;I&apos;d like to discuss my bone health and whether I should have a DXA scan.&rdquo;</em>
          </p>
          <Link
            href="/living-with-osteoporosis/talking-to-your-doctor"
            className="inline-flex items-center gap-2 bg-white text-teal-700 hover:bg-teal-50 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Questions to Ask Your Doctor
          </Link>
        </div>
      </div>
    </div>
  );
}
