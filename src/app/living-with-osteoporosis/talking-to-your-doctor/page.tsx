import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import QuestionEmailForm from "@/components/QuestionEmailForm";

export const metadata: Metadata = {
  title: "Talking to Your Doctor About Osteoporosis",
  description:
    "Questions to ask your doctor about bone health, DXA results, and treatment options. A guide to getting the most from your appointments.",
};

const questionSets = [
  {
    title: "At Your First Appointment (Bone Health Discussion)",
    colour: "bg-[#F9F9F9] border-[#e0e0e0]",
    questions: [
      "Based on my age, medical history, and risk factors, am I at risk of osteoporosis?",
      "Should I have a bone density (DXA) scan? If not, why not?",
      "My mother/father had a hip fracture — does this affect my own risk?",
      "I am taking [medication] — could this be affecting my bone density?",
      "What can I do now to protect my bone health?",
      "How much calcium and Vitamin D should I be taking each day?",
    ],
  },
  {
    title: "After Receiving Your DXA Scan Results",
    colour: "bg-blue-50 border-blue-200",
    questions: [
      "What is my T-score and what does it mean for me specifically?",
      "What is my 10-year fracture risk? (FRAX score)",
      "Do I have osteoporosis or osteopenia?",
      "Do I need medication, or is lifestyle management sufficient at this stage?",
      "When should I have another DXA scan?",
      "Should I see a specialist — a rheumatologist or endocrinologist?",
    ],
  },
  {
    title: "About Treatment Options",
    colour: "bg-violet-50 border-violet-200",
    questions: [
      "Why are you recommending [this particular medication] for me?",
      "How does this medication work, and how effective is it?",
      "What are the most common side effects, and what should I watch out for?",
      "Are there any serious risks I should be aware of?",
      "How long will I need to take this medication?",
      "How will we know if the medication is working?",
      "Are there any interactions with my other medications?",
      "What happens if I stop the medication?",
    ],
  },
  {
    title: "After a Fragility Fracture",
    colour: "bg-amber-50 border-amber-200",
    questions: [
      "Was this fracture related to osteoporosis?",
      "Should I have a bone density scan if I haven't had one?",
      "Should I be referred to a Fracture Liaison Service?",
      "What treatment will reduce my risk of another fracture?",
      "Will I need physiotherapy, and can you arrange a referral?",
      "Are there any exercises I should avoid during recovery?",
      "When can I expect to return to normal activities?",
    ],
  },
];

export default function TalkingToYourDoctorPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Living With Osteoporosis", href: "/living-with-osteoporosis" },
        { label: "Talking to Your Doctor" },
      ]}
      showGPCTA={false}
    >
      <h1 className="text-4xl font-extrabold text-[#434343] mb-6">Talking to Your Doctor</h1>

      <p className="text-lg text-[#666666] mb-6 leading-relaxed">
        Appointments with your doctor can feel short, and it is easy to forget important questions in the moment. Coming prepared
        with the right questions can help you get the information you need and take an active role in your bone health.
        Below are questions grouped by situation — pick the ones that are most relevant to you.
      </p>

      <div className="bg-[#F9F9F9] border border-[#e0e0e0] rounded-xl p-5 mb-8">
        <p className="text-[#434343] text-sm">
          <strong>Tip:</strong> Write down your questions before your appointment. If you have a lot of concerns, let
          the receptionist know when booking so a longer appointment can be arranged. You can also bring a family
          member or carer for support.
        </p>
      </div>

      <div className="space-y-6">
        {questionSets.map(({ title, colour, questions }) => (
          <div key={title} className={`rounded-2xl border p-6 ${colour}`}>
            <h2 className="text-lg font-bold text-[#434343] mt-0 mb-4">{title}</h2>
            <ul className="space-y-3">
              {questions.map((q) => (
                <li key={q} className="flex items-start gap-3 text-sm text-[#555555]">
                  <span className="text-[#666666] font-bold mt-0.5 shrink-0">Q:</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>General Tips for Doctor Appointments</h2>
      <ul>
        <li><strong>Bring a list of all your medications</strong> — including over-the-counter drugs and supplements. Some interactions are relevant to osteoporosis treatment.</li>
        <li><strong>Bring previous scan results</strong> — if you have had a previous DXA scan elsewhere, bring the report so your doctor can compare results.</li>
        <li><strong>Be honest about lifestyle factors</strong> — your doctor needs accurate information about smoking, alcohol, and activity levels to assess your risk properly. There is no judgment; it helps them help you.</li>
        <li><strong>Follow up</strong> — if you were told you would be referred somewhere, or that a letter would be sent, check in with the surgery if you have not heard within a few weeks.</li>
      </ul>

      <div className="mt-8">
        <QuestionEmailForm />
      </div>
    </PageLayout>
  );
}
