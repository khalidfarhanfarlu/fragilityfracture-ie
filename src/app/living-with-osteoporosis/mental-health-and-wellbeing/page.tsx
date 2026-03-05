import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Mental Health & Wellbeing with Osteoporosis",
  description:
    "Managing the emotional impact of osteoporosis — fear of falling, loss of confidence, and finding support in Ireland.",
};

export default function MentalHealthPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Living With Osteoporosis", href: "/living-with-osteoporosis" },
        { label: "Mental Health & Wellbeing" },
      ]}
      gpCTAContext="If you are feeling anxious, depressed, or isolated because of osteoporosis, speak to your GP. They can provide support, refer you to a counsellor or psychologist, or connect you with appropriate services."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Mental Health &amp; Wellbeing</h1>

      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
        Living with osteoporosis — especially after a fracture — can affect your emotional wellbeing as well as your
        physical health. Fear of falling, anxiety about activity, and concerns about independence are all common
        and understandable responses. Addressing these emotional aspects is an important part of living well with
        osteoporosis.
      </p>

      <h2>Fear of Falling (Kinesiophobia)</h2>
      <p>
        Fear of falling is extremely common after a fracture and in people with osteoporosis. Technically known as
        &ldquo;kinesiophobia&rdquo; (fear of movement or activity due to anticipated pain or injury), this fear can
        lead to:
      </p>
      <ul>
        <li>Avoidance of physical activity, social situations, and going outdoors</li>
        <li>Further deconditioning (weakening of muscles from inactivity)</li>
        <li>Increased isolation and loneliness</li>
        <li>Paradoxically, greater fall risk — because muscle weakness and reduced balance increase with inactivity</li>
        <li>Depression and anxiety</li>
      </ul>
      <p>
        Fear of falling is not irrational — fractures are serious and the fear of another one is understandable.
        But when fear starts limiting daily life significantly, it is important to address it actively.
      </p>

      <h3>What can help?</h3>
      <ul>
        <li><strong>Physiotherapy:</strong> A physiotherapist can work with you to gradually and safely build your activity and confidence, addressing specific movement fears</li>
        <li><strong>Structured falls prevention programmes:</strong> Group programmes (many available through the HSE and local authority sports partnerships) build balance and confidence alongside peers</li>
        <li><strong>Cognitive behavioural therapy (CBT):</strong> CBT techniques can help challenge and reframe unhelpful thoughts about falling and activity</li>
        <li><strong>Tai chi:</strong> Has been shown not only to reduce falls but also to reduce fear of falling in older adults</li>
        <li><strong>Personal alarm systems:</strong> Knowing you can summon help if needed can give confidence to be more active</li>
      </ul>

      <h2>The Emotional Impact of Diagnosis</h2>
      <p>
        Receiving a diagnosis of osteoporosis, or being told you have had a fragility fracture, can bring a range of
        emotions: shock, anxiety, sadness, anger, or a sense of vulnerability. Some people feel that their body
        has &ldquo;let them down&rdquo;, or worry about becoming a burden on family members.
      </p>
      <p>
        These responses are completely normal. It is important to give yourself time to process the diagnosis.
        Some things that can help include:
      </p>
      <ul>
        <li>Talking to someone you trust about how you are feeling — a family member, friend, or GP</li>
        <li>Learning more about osteoporosis (as you are doing now) — understanding the condition can reduce fear of the unknown</li>
        <li>Focusing on what you <em>can</em> do to help yourself, rather than what you cannot control</li>
        <li>Connecting with others who have similar experiences — peer support can be invaluable</li>
      </ul>

      <h2>Maintaining Independence and Confidence</h2>
      <p>
        Osteoporosis does not have to mean giving up the activities you enjoy. Many people with osteoporosis continue
        to live fully active, independent lives. Some adjustments may be needed — especially if you have had a
        fracture — but the goal is always to find ways to do as much as possible safely.
      </p>
      <ul>
        <li>Work with your physiotherapist and GP to identify activities that are safe for you</li>
        <li>Make home adaptations early, before a crisis — proactive safety measures can prevent falls that would otherwise limit independence</li>
        <li>Use assistive devices (walking sticks, grab rails) as tools that extend your independence, not signs of weakness</li>
        <li>Stay socially connected — social engagement is associated with better mental and physical health outcomes</li>
      </ul>

      <h2>Support in Ireland</h2>
      <div className="space-y-4 mt-4">
        {[
          {
            org: "Irish Osteoporosis Society",
            desc: "Provides a helpline, information, and peer support for people with osteoporosis in Ireland. A key resource for connecting with others who understand what you are going through.",
            href: "https://www.irishosteoporosis.ie",
          },
          {
            org: "HSE Mental Health Services",
            desc: "Your GP can refer you to HSE counselling or psychology services. Free psychotherapy may be available through primary care psychology in your area.",
            href: "https://www.hse.ie/eng/services/list/4/mental-health-services/",
          },
          {
            org: "Aware",
            desc: "A leading Irish mental health charity providing support groups, education, and online resources for people experiencing depression and anxiety.",
            href: "https://www.aware.ie",
          },
          {
            org: "Age Action Ireland",
            desc: "Provides practical supports and advocacy for older adults in Ireland, including information on home care, community services, and benefits.",
            href: "https://www.ageaction.ie",
          },
        ].map(({ org, desc, href }) => (
          <div key={org} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-slate-800 text-base mb-1">{org}</h3>
            <p className="text-sm text-slate-600 mb-2">{desc}</p>
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-600 font-semibold hover:text-slate-800">
              {href} ↗
            </a>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-6">
        <p className="text-blue-900 text-sm">
          <strong>If you are in crisis:</strong> If you are feeling very low or having thoughts of self-harm, please
          contact your GP, go to your nearest emergency department, or call the Samaritans on{" "}
          <strong>116 123</strong> (free, 24/7). You are not alone.
        </p>
      </div>
    </PageLayout>
  );
}
