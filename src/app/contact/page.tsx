import type { Metadata } from "next";
import { AlertCircle, Phone, Mail } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FragilityFracture.ie — for general enquiries, content feedback, or media requests. We cannot provide medical advice.",
};

export default function ContactPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Contact" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
      <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
        We welcome general enquiries, content feedback, and media requests. Please note that we are not a medical
        service and cannot provide individual medical advice.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-sm text-amber-900">
          <p className="font-bold mb-1">We cannot provide medical advice</p>
          <p>
            This form is for general enquiries only. Please do not use it to seek medical guidance about your
            condition, medications, or symptoms. For medical concerns, contact your GP or, in an emergency, call
            999 / 112.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Send a Message</h2>
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-5">Other Ways to Get Help</h2>

            <div className="space-y-4">
              <div className="bg-[#F9F9F9] border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-slate-600" />
                  <p className="font-bold text-slate-800 text-sm">Irish Osteoporosis Society Helpline</p>
                </div>
                <p className="text-sm text-slate-700 mb-1">
                  For personal support and information about osteoporosis in Ireland.
                </p>
                <a href="tel:016375050" className="text-slate-700 font-bold text-sm">01 637 5050</a>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <p className="font-bold text-slate-700 text-sm">Response Time</p>
                </div>
                <p className="text-sm text-slate-600">
                  We aim to respond to all messages within 3–5 business days.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-700 text-sm mb-2">Emergency</p>
                <p className="text-sm text-slate-600">
                  If you are experiencing a medical emergency, call <strong>999</strong> or <strong>112</strong>{" "}
                  or go to your nearest Emergency Department immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
