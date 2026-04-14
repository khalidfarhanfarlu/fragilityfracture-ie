import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const questions = [
  {
    title: "At Your First Appointment (Bone Health Discussion)",
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

function buildEmailHtml(email: string): string {
  const sections = questions
    .map(
      ({ title, questions: qs }) => `
    <div style="margin-bottom:24px;">
      <h2 style="font-size:16px;font-weight:700;color:#1e293b;margin:0 0 12px 0;padding-bottom:8px;border-bottom:2px solid #E7D549;">${title}</h2>
      <ul style="margin:0;padding-left:20px;">
        ${qs.map((q) => `<li style="margin-bottom:8px;color:#334155;font-size:14px;line-height:1.6;">${q}</li>`).join("")}
      </ul>
    </div>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px 24px;background:#ffffff;">
  <div style="background:#1e293b;padding:24px;border-radius:12px;margin-bottom:28px;">
    <p style="color:#E7D549;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 8px 0;">FragilityFracture.ie</p>
    <h1 style="color:#ffffff;font-size:22px;font-weight:700;margin:0;line-height:1.3;">Your Doctor Questions — Bone Health</h1>
  </div>

  <p style="color:#555555;font-size:14px;line-height:1.7;margin-bottom:24px;">
    Here are your questions for your doctor appointment. We recommend printing this email or keeping it on your phone so you can refer to it during your consultation.
  </p>

  ${sections}

  <div style="background:#f8f8f8;border-radius:8px;padding:16px;margin-top:24px;border-left:4px solid #E7D549;">
    <p style="color:#555555;font-size:13px;margin:0;line-height:1.6;">
      <strong>Tip:</strong> Write down your questions before your appointment. If you have a lot of concerns, let the receptionist know when booking so a longer appointment can be arranged. You can also bring a family member or carer for support.
    </p>
  </div>

  <hr style="border:none;border-top:1px solid #eeeeee;margin:28px 0;">
  <p style="color:#aaaaaa;font-size:11px;text-align:center;margin:0;">
    Sent to ${email} by <a href="https://www.fragilityfracture.ie" style="color:#888888;">FragilityFracture.ie</a> — Ireland's bone health education resource.
    <br>This email does not constitute medical advice. Always consult your doctor.
  </p>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "FragilityFracture.ie <questions@fragilityfracture.ie>",
      to: email,
      subject: "Your Doctor Questions — Bone Health | FragilityFracture.ie",
      html: buildEmailHtml(email),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
