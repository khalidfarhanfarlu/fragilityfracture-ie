import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Osteopenia vs Osteoporosis",
  description:
    "What's the difference between osteopenia and osteoporosis? Learn what your T-score means and why osteopenia still requires attention.",
};

export default function OsteopeniaVsOsteoporosisPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "About Osteoporosis", href: "/about-osteoporosis" },
        { label: "Osteopenia vs Osteoporosis" },
      ]}
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Osteopenia vs Osteoporosis</h1>

      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
        Both osteopenia and osteoporosis refer to a reduction in bone density — but they describe different levels of
        severity. Understanding the difference can help you know what your DXA scan results mean and what action to take.
      </p>

      <h2>What Is Osteopenia?</h2>
      <p>
        <strong>Osteopenia</strong> means your bone density is lower than normal for a healthy young adult, but not
        low enough to be classified as osteoporosis. The term was introduced in the 1990s as a way of identifying
        people at increased risk of developing osteoporosis, so that preventive steps could be taken early.
      </p>
      <p>
        Having osteopenia does not mean you will necessarily develop osteoporosis. However, it does mean your fracture
        risk is higher than average, and it is a signal to pay close attention to bone health through nutrition,
        exercise, and lifestyle.
      </p>

      <h2>What Is Osteoporosis?</h2>
      <p>
        <strong>Osteoporosis</strong> means your bone density is significantly below normal, reaching a level at which
        fracture risk is substantially increased. At this level, bones may break from relatively minor stresses —
        what we call <a href="/about-osteoporosis/what-is-a-fragility-fracture">fragility fractures</a>.
      </p>

      <h2>Understanding Your T-score</h2>
      <p>
        Both conditions are defined using a measure called the <strong>T-score</strong>, which comes from a DXA scan.
        Your T-score compares your bone density to that of a healthy young adult (around age 30) of the same sex. It
        is expressed as the number of standard deviations above or below that reference value.
      </p>
      <p>The World Health Organization (WHO) defines the categories as follows:</p>

      {/* Visual T-score range */}
      <div className="my-8 rounded-2xl overflow-hidden border border-slate-200">
        <div className="grid grid-cols-1 sm:grid-cols-4">
          <div className="bg-emerald-500 p-5 text-white">
            <p className="font-bold text-lg mb-1">Normal</p>
            <p className="text-2xl font-extrabold mb-2">+1 to −1</p>
            <p className="text-sm text-emerald-100">Bone density is within the normal range for a healthy young adult.</p>
          </div>
          <div className="bg-yellow-400 p-5 text-yellow-900">
            <p className="font-bold text-lg mb-1">Osteopenia</p>
            <p className="text-2xl font-extrabold mb-2">−1 to −2.5</p>
            <p className="text-sm text-yellow-800">Bone density is lower than normal. Action recommended.</p>
          </div>
          <div className="bg-orange-500 p-5 text-white">
            <p className="font-bold text-lg mb-1">Osteoporosis</p>
            <p className="text-2xl font-extrabold mb-2">−2.5 or below</p>
            <p className="text-sm text-orange-100">Bone density is significantly reduced. Treatment recommended.</p>
          </div>
          <div className="bg-red-600 p-5 text-white">
            <p className="font-bold text-lg mb-1">Severe</p>
            <p className="text-2xl font-extrabold mb-2">Below −2.5</p>
            <p className="text-sm text-red-100">With one or more fragility fractures. Urgent treatment needed.</p>
          </div>
        </div>
      </div>

      <p>
        For example, a T-score of <strong>−1.8</strong> indicates osteopenia, while a T-score of{" "}
        <strong>−2.8</strong> indicates osteoporosis. A score of −2.8 with a previous fracture would be classified
        as severe osteoporosis.
      </p>

      <h2>What Is a Z-score?</h2>
      <p>
        Your DXA report may also include a <strong>Z-score</strong>. Unlike the T-score, the Z-score compares your
        bone density to others of your own age and sex. A very low Z-score (typically below −2.0) suggests your bone
        loss may be greater than expected for your age, which may prompt your GP to investigate for secondary causes
        of bone loss (such as coeliac disease, hyperparathyroidism, or medication side effects).
      </p>
      <p>
        For most adults over 50, the T-score is used to diagnose osteoporosis and guide treatment decisions. The
        Z-score is more commonly used in younger adults and children.
      </p>

      <h2>Why Osteopenia Should Not Be Ignored</h2>
      <p>
        A common misconception is that osteopenia is &ldquo;nothing to worry about&rdquo;. While it is less severe
        than osteoporosis, osteopenia still increases your fracture risk — and a significant proportion of
        osteoporotic fractures occur in people with osteopenia, simply because there are more people in that category.
      </p>
      <p>
        If you have been told you have osteopenia, you should:
      </p>
      <ul>
        <li>Ensure your <a href="/prevention/nutrition-and-calcium">calcium intake</a> is adequate</li>
        <li>Ensure your <a href="/prevention/vitamin-d">Vitamin D levels</a> are sufficient, especially important in Ireland</li>
        <li>Incorporate <a href="/prevention/exercise">weight-bearing and resistance exercise</a> into your routine</li>
        <li>Review modifiable lifestyle risk factors (smoking, alcohol, low body weight)</li>
        <li>Discuss with your GP whether medication may be appropriate in your case</li>
        <li>Arrange follow-up DXA scan (typically every 1–2 years, as advised by your GP)</li>
      </ul>

      <h2>What to Do After an Osteoporosis Diagnosis</h2>
      <p>
        An osteoporosis diagnosis is serious, but it is treatable. With the right combination of medication,
        nutrition, exercise, and falls prevention, most people can significantly reduce their fracture risk and
        maintain a good quality of life.
      </p>
      <p>
        Visit our <a href="/living-with-osteoporosis/treatment-options">Treatment Options page</a> for an overview
        of what your GP may recommend, and our{" "}
        <a href="/living-with-osteoporosis/talking-to-your-doctor">Talking to Your Doctor page</a> for help
        preparing for your appointment.
      </p>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mt-6">
        <p className="text-teal-900">
          <strong>Remember:</strong> Your T-score is just one part of the picture. Your GP will also consider your
          overall fracture risk using tools like the{" "}
          <a href="/bone-density-testing/frax-fracture-risk-tool" className="text-teal-700">FRAX tool</a>, your
          history of previous fractures, and your individual health circumstances before recommending any treatment.
        </p>
      </div>
    </PageLayout>
  );
}
