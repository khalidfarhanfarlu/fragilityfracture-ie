import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Exercise & Physical Activity for Bone Health",
  description:
    "How weight-bearing and resistance exercise strengthen bones, reduce fall risk, and support bone health. Safe exercise guidance for people with osteoporosis.",
};

export default function ExercisePage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Prevention", href: "/prevention" },
        { label: "Exercise & Physical Activity" },
      ]}
      gpCTAContext="Before starting a new exercise programme, especially if you have been diagnosed with osteoporosis or have had a recent fracture, speak to your GP or physiotherapist. They can recommend the right exercises for your situation."
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Exercise &amp; Physical Activity</h1>

      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
        Exercise is one of the most powerful tools for protecting your bones. Regular physical activity stimulates
        bone formation, slows bone loss, strengthens muscles, and improves balance — all of which reduce your risk
        of fractures. It is never too early or too late to start.
      </p>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-8">
        <p className="text-teal-900 text-sm">
          <strong>Key message:</strong> Bones respond to the forces placed on them. Just as muscles grow stronger
          when exercised, bones become denser when subject to mechanical loading. This is sometimes called the
          &ldquo;use it or lose it&rdquo; principle.
        </p>
      </div>

      <h2>Types of Exercise That Benefit Bones</h2>

      <h3>Weight-Bearing Exercise</h3>
      <p>
        <strong>Weight-bearing exercise</strong> means activity where your bones support your body weight against
        gravity. This type of exercise is most effective for stimulating bone remodelling and maintaining density.
        Examples include:
      </p>
      <ul>
        <li>Brisk walking (outdoors or on a treadmill)</li>
        <li>Jogging and running</li>
        <li>Dancing</li>
        <li>Stair climbing</li>
        <li>Tennis, badminton, and racquet sports</li>
        <li>Step aerobics</li>
        <li>Hiking</li>
      </ul>
      <p>
        <strong>Note:</strong> Swimming and cycling are excellent for cardiovascular health and general fitness, but
        because the water or bike supports your body weight, they do not provide the same bone-building stimulus.
        They can be included in a fitness plan but should be complemented by land-based, weight-bearing activity.
      </p>

      <h3>Resistance (Strength) Training</h3>
      <p>
        Resistance or strength training uses muscles pulling against bones, creating mechanical loading that
        stimulates bone formation. It is particularly effective for the spine and hip — the most important fracture
        sites. Examples include:
      </p>
      <ul>
        <li>Free weights (dumbbells, barbells)</li>
        <li>Resistance bands</li>
        <li>Weight machines</li>
        <li>Body weight exercises (squats, lunges, step-ups, push-ups)</li>
      </ul>
      <p>
        Aim for at least <strong>two resistance training sessions per week</strong>, targeting the major muscle
        groups (legs, hips, core, back, arms). If you are new to strength training, a supervised programme with a
        physiotherapist or qualified exercise instructor is recommended, especially with an osteoporosis diagnosis.
      </p>

      <h3>Balance and Stability Training</h3>
      <p>
        Falls are the primary cause of fragility fractures. Improving your balance, coordination, and proprioception
        (body awareness) significantly reduces your risk of falling, and therefore your fracture risk. Good options
        include:
      </p>
      <ul>
        <li>Tai chi — particularly well evidenced for falls prevention in older adults</li>
        <li>Yoga (modified for people with osteoporosis — see cautions below)</li>
        <li>Pilates</li>
        <li>Single-leg standing exercises</li>
        <li>Heel-to-toe walking</li>
        <li>Balance boards</li>
      </ul>

      <h2>How Much Exercise Is Recommended?</h2>
      <p>
        The HSE and WHO recommend that adults aim for:
      </p>
      <ul>
        <li>At least <strong>150 minutes of moderate-intensity</strong> (or 75 minutes of vigorous-intensity) physical activity per week</li>
        <li>Plus muscle-strengthening activities (resistance training) on <strong>2 or more days per week</strong></li>
        <li>Balance and flexibility exercises on <strong>3 or more days per week</strong> for older adults</li>
      </ul>
      <p>
        Even if you cannot meet all of these targets, any activity is better than none. Starting with short daily walks
        and gradually building up is a perfectly reasonable approach.
      </p>

      <h2>Exercise and Osteoporosis: What to Approach with Caution</h2>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
        <p className="font-bold text-amber-900 mb-2">If you have been diagnosed with osteoporosis</p>
        <p className="text-amber-800 text-sm mb-3">
          Exercise is still strongly recommended and beneficial — but certain movements should be approached
          carefully or modified. Always discuss exercise plans with your GP or physiotherapist before starting.
        </p>
        <ul className="text-sm text-amber-800 space-y-1.5 list-disc pl-4">
          <li><strong>Forward spinal flexion under load</strong> — such as sit-ups, crunches, rowing with a rounded back, or heavy lifting with a bent spine — increases the risk of vertebral fractures and should generally be avoided</li>
          <li><strong>High-impact jumping</strong> — very high-impact activities may be risky if bone density is severely reduced; ask your physiotherapist for guidance</li>
          <li><strong>Twisting movements under load</strong> — rotation of the spine under resistance should be approached cautiously</li>
        </ul>
      </div>

      <p>
        Yoga and Pilates can both be excellent for people with osteoporosis, but some poses (deep forward folds,
        extreme twisting) should be avoided or modified. Look for yoga or Pilates classes specifically designed for
        bone health or people with osteoporosis.
      </p>

      <h2>Getting Started Safely</h2>
      <p>
        If you have not been active for a while, or if you have osteoporosis, consider the following:
      </p>
      <ul>
        <li>Start with gentle walking — 10–15 minutes per day and build up gradually</li>
        <li>Ask your GP for a referral to a physiotherapist for an individualised exercise plan</li>
        <li>Look for Sláintecare-supported exercise programmes through the HSE — some are specifically designed for older adults</li>
        <li>Check if your local leisure centre or sports partnership offers supervised classes for older adults or those with health conditions</li>
      </ul>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mt-6">
        <p className="text-teal-900 text-sm">
          <strong>Falls Prevention:</strong> Exercise for falls prevention is just as important as exercise for bone
          density. See our <a href="/living-with-osteoporosis/falls-prevention" className="text-teal-700 underline">Falls Prevention page</a>{" "}
          for more specific balance and strength exercises.
        </p>
      </div>
    </PageLayout>
  );
}
