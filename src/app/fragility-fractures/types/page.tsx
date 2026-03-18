import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Types of Fragility Fractures",
  description:
    "An overview of the four most common types of fragility fractures — hip, vertebral, wrist, and shoulder — and why each matters.",
};

const types = [
  {
    name: "Hip Fractures",
    description: "The most serious type of fragility fracture. Hip fractures almost always require surgery and carry significant risks of complications, loss of independence, and mortality. In Ireland, approximately 3,600 hip fractures occur each year. Men have a higher one-year mortality rate after hip fracture than women.",
    urgency: "Emergency — requires immediate hospital admission",
    urgencyColour: "bg-red-100 text-red-800",
    href: "/fragility-fractures/hip-fractures",
  },
  {
    name: "Vertebral (Spinal) Fractures",
    description: "The most common type of osteoporotic fracture overall, but frequently undiagnosed because they may be misattributed to general back pain. They can cause persistent pain, loss of height, and a stooped posture (kyphosis). Some vertebral fractures occur without any significant trauma.",
    urgency: "Often missed — seek assessment if you have back pain and risk factors",
    urgencyColour: "bg-amber-100 text-amber-800",
    href: "/fragility-fractures/vertebral-fractures",
  },
  {
    name: "Wrist (Distal Radius) Fractures",
    description: "Often the first fragility fracture to occur, typically when someone falls and puts their hand out to break the fall. A wrist fracture in a person over 50 should always prompt a bone density assessment — it is a warning sign that should not be ignored.",
    urgency: "Important warning sign — should trigger bone density assessment",
    urgencyColour: "bg-yellow-100 text-yellow-800",
    href: "/fragility-fractures/wrist-fractures",
  },
  {
    name: "Shoulder (Proximal Humerus) Fractures",
    description: "Fractures of the upper arm bone near the shoulder joint. Less common than hip, spine, or wrist fractures, but still associated with osteoporosis in older adults. Treatment may be conservative (sling) or surgical depending on the severity and displacement of the fracture.",
    urgency: "Requires orthopaedic assessment",
    urgencyColour: "bg-blue-100 text-blue-800",
    href: "#",
  },
];

export default function TypesOfFragilityFracturesPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Fragility Fractures", href: "/fragility-fractures" },
        { label: "Types of Fragility Fractures" },
      ]}
      gpCTAContext="If you have had any fracture from a low-energy impact, please discuss this with your HCP — it should prompt an assessment of your bone density regardless of your age."
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-6">Types of Fragility Fractures</h1>

      <p className="text-lg text-[#666666] mb-6 leading-relaxed">
        A <strong>fragility fracture</strong> is a broken bone that results from a force that would not normally break
        a healthy bone — such as a fall from standing height, a minor bump, or in some cases, no obvious impact at
        all. Fragility fractures can occur at many sites in the body, but four are particularly common in people
        with osteoporosis.
      </p>

      <div className="bg-slate-50 border border-[#e0e0e0] rounded-xl p-5 mb-8">
        <p className="text-[#555555] text-sm">
          <strong>Important:</strong> In Ireland, an estimated 20,000 osteoporotic fractures occur each year. A first
          fracture significantly increases the risk of a second — research shows that someone who has had one vertebral
          fracture has a five-fold increased risk of another within the next year. Every fragility fracture should
          trigger an assessment of bone density and fracture risk.
        </p>
      </div>

      <div className="space-y-6 mt-4">
        {types.map(({ name, description, urgency, urgencyColour, href }) => (
          <div key={name} className="bg-white border border-[#e0e0e0] rounded-2xl overflow-hidden">
            <div className="bg-[#434343] px-6 py-4">
              <h2 className="text-white font-bold text-xl m-0">{name}</h2>
            </div>
            <div className="px-6 py-5">
              <p className="text-[#666666] text-sm leading-relaxed mb-4">{description}</p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${urgencyColour}`}>
                  {urgency}
                </span>
                {href !== "#" && (
                  <Link
                    href={href}
                    className="text-sm text-[#666666] font-semibold hover:text-[#434343] transition-colors"
                  >
                    Read more →
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>The Fracture Cascade</h2>
      <p>
        One of the most important things to understand about fragility fractures is the concept of the{" "}
        <strong>fracture cascade</strong>. A first fracture dramatically increases the risk of a subsequent fracture:
      </p>
      <ul>
        <li>A vertebral fracture increases the risk of a second vertebral fracture by approximately <strong>5 times</strong> in the following year</li>
        <li>A wrist fracture approximately <strong>doubles</strong> the risk of a subsequent hip fracture</li>
        <li>Any major fragility fracture approximately doubles the risk of another fracture overall</li>
      </ul>
      <p>
        This is why every fragility fracture must be taken seriously as a medical event — not just treated and
        forgotten, but used as a clear signal to assess bone density and begin or intensify bone-protective treatment.
        See our{" "}
        <Link href="/fragility-fractures/secondary-fracture-prevention">Secondary Fracture Prevention page</Link> for
        more on what should happen after a fracture.
      </p>
    </PageLayout>
  );
}
