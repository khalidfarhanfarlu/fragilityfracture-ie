import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Resources & Support",
  description:
    "Useful resources and support organisations for people with osteoporosis in Ireland — including the Irish Osteoporosis Society, HSE, and international resources.",
};

const resources = [
  {
    category: "Irish Organisations",
    items: [
      {
        name: "Irish Osteoporosis Society",
        desc: "The leading Irish charity for people with osteoporosis. Provides a helpline, patient information, and advocacy for better osteoporosis services in Ireland.",
        url: "https://www.irishosteoporosis.ie",
        note: "Helpline: 01 637 5050",
      },
      {
        name: "HSE — Health Service Executive",
        desc: "The HSE website provides information on accessing bone density testing, doctor services, specialist referrals, and public hospital services across Ireland.",
        url: "https://www.hse.ie",
      },
      {
        name: "FSAI — Food Safety Authority of Ireland",
        desc: "Provides Irish dietary reference values for calcium, Vitamin D, and other nutrients relevant to bone health.",
        url: "https://www.fsai.ie",
      },
      {
        name: "Quit.ie",
        desc: "Free HSE smoking cessation service. Smoking is a significant risk factor for osteoporosis — quitting helps protect your bones.",
        url: "https://www.quit.ie",
      },
      {
        name: "Exwell Ireland",
        desc: "Irish exercise and wellness programme supporting older adults. Regular physical activity is one of the most effective ways to maintain bone density and reduce fall risk.",
        url: "https://www.exwell.ie",
      },
    ],
  },
  {
    category: "International Resources",
    items: [
      {
        name: "International Osteoporosis Foundation (IOF)",
        desc: "The world's leading non-governmental organisation dedicated to osteoporosis prevention. Provides extensive patient education resources.",
        url: "https://www.osteoporosis.foundation",
      },
      {
        name: "Bone Health & Osteoporosis Foundation (BHOF)",
        desc: "US-based organisation with comprehensive patient education resources on osteoporosis, treatment, and nutrition.",
        url: "https://www.bonehealthandosteoporosis.org",
      },
      {
        name: "FRAX — Fracture Risk Assessment Tool",
        desc: "WHO fracture risk assessment tool. Calculate your 10-year fracture probability. Select Ireland as your country.",
        url: "https://www.sheffield.ac.uk/FRAX/",
      },
      {
        name: "National Osteoporosis Society (UK)",
        desc: "Provides high-quality patient information resources, including guides to DXA scans, medication, and living with osteoporosis.",
        url: "https://theros.org.uk",
      },
      {
        name: "Osteoporosis Canada",
        desc: "Canada's leading osteoporosis organisation, with comprehensive patient education, clinical guidelines, and resources on diagnosis, treatment, and fracture prevention.",
        url: "https://osteoporosis.ca",
      },
      {
        name: "Mayo Clinic — Osteoporosis",
        desc: "Trusted, evidence-based patient information on osteoporosis from one of the world's leading medical centres. Covers symptoms, causes, diagnosis, and treatment.",
        url: "https://www.mayoclinic.org/diseases-conditions/osteoporosis/symptoms-causes/syc-20351968",
      },
    ],
  },
  {
    category: "Mental Health & Wellbeing",
    items: [
      {
        name: "Aware",
        desc: "Irish mental health charity providing support for depression and anxiety, which can accompany a chronic condition like osteoporosis.",
        url: "https://www.aware.ie",
      },
      {
        name: "Age Action Ireland",
        desc: "Information and advocacy for older people in Ireland, including advice on home care, benefits, and community support.",
        url: "https://www.ageaction.ie",
      },
      {
        name: "Samaritans Ireland",
        desc: "Free, confidential emotional support available 24/7. Call 116 123.",
        url: "https://www.samaritans.org/ireland/",
        note: "Freephone: 116 123 (24/7)",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Resources & Support" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-4">Resources &amp; Support</h1>
      <p className="text-lg text-[#666666] mb-10 leading-relaxed max-w-2xl">
        A curated list of trustworthy organisations, tools, and services for people with osteoporosis and their
        families in Ireland. We are not affiliated with any of these organisations.
      </p>

      <div className="space-y-10">
        {resources.map(({ category, items }) => (
          <div key={category}>
            <h2 className="text-xl font-bold text-[#434343] mb-5">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map(({ name, desc, url, note }) => (
                <div key={name} className="bg-white border border-[#e0e0e0] rounded-xl p-5 hover:border-[#E7D549] hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-[#434343] text-base">{name}</h3>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${name} website (opens in new tab)`}
                      className="text-[#666666] hover:text-[#434343] shrink-0 mt-0.5"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-[#666666] leading-relaxed mb-2">{desc}</p>
                  {note && <p className="text-xs font-semibold text-[#555555]">{note}</p>}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#999999] hover:text-[#666666] break-all"
                  >
                    {url}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 border border-[#e0e0e0] rounded-xl p-6 mt-10">
        <p className="text-[#666666] text-sm">
          <strong>Note:</strong> FragilityFracture.ie is an independent educational resource and is not affiliated
          with or endorsed by any of the organisations listed above. Links are provided as a convenience to
          visitors. We cannot be responsible for the content of external websites.
        </p>
      </div>
    </PageLayout>
  );
}
