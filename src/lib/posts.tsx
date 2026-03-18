import Link from "next/link";

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateISO: string;
  readingTime: string;
  author: string;
  tags: string[];
};

export type Post = PostMeta & {
  Content: () => React.ReactElement;
};

export const posts: Post[] = [
  {
    slug: "the-silent-disease-why-so-many-irish-people-dont-know-they-have-osteoporosis",
    title: "The Silent Disease: Why So Many Irish People Don't Know They Have Osteoporosis",
    excerpt:
      "Osteoporosis causes no pain, no visible signs, and no warning — until a bone breaks. We look at why it remains so under-diagnosed in Ireland, and what needs to change.",
    category: "Awareness",
    date: "February 2026",
    dateISO: "2026-02-01",
    readingTime: "7 min read",
    author: "FragilityFracture.ie Editorial Team",
    tags: ["osteoporosis", "diagnosis", "Ireland", "awareness"],
    Content: () => (
      <>
        <p>
          Every year in Ireland, tens of thousands of fragility fractures occur — bones broken not by accidents or
          significant trauma, but by the kind of minor falls or bumps that a healthy skeleton should easily withstand.
          Behind nearly every one of these fractures is a condition called osteoporosis: silent, invisible, and
          extraordinarily common.
        </p>
        <p>
          And yet, the vast majority of the estimated 300,000 to 500,000 people in Ireland who have osteoporosis
          do not know they have it. They have never had a bone density scan. They have never discussed their fracture
          risk with an HCP. They are, in the language of public health, &ldquo;undetected cases&rdquo; — people
          carrying a serious condition without a diagnosis, without treatment, and without the opportunity to prevent
          the fractures that will eventually, for many of them, change the course of their lives.
        </p>

        <h2>Why Does Osteoporosis Go Undetected?</h2>
        <p>
          The answer starts with the nature of the disease itself. Osteoporosis is, by definition, asymptomatic.
          There is no pain. There is no visible change. There is nothing that feels wrong until a bone breaks —
          and even then, the fracture may be misattributed to the fall rather than to the underlying fragility of
          the bone.
        </p>
        <p>
          This distinguishes osteoporosis from most other serious chronic conditions. Heart disease announces
          itself through chest pain and breathlessness. Diabetes triggers thirst and fatigue. High blood pressure,
          another &ldquo;silent&rdquo; condition, is routinely screened in HCP surgeries without patients needing
          to request it. Osteoporosis, by contrast, requires a specific referral for a specific scan — and that
          referral only happens if someone thinks to ask, and if the HCP judges it appropriate.
        </p>
        <p>
          In many cases, neither the patient nor the HCP raises bone health as a priority. Patients do not know
          they are at risk. GPs, under enormous time pressure in a primary care system that is chronically under-resourced,
          cannot proactively screen every patient who might benefit. And so the disease progresses, silently, until
          a fracture reveals what the absence of symptoms concealed.
        </p>

        <h2>Who Is Falling Through the Gaps?</h2>
        <p>
          The under-diagnosis of osteoporosis is not evenly distributed. It concentrates in certain groups:
        </p>
        <p>
          <strong>Men</strong> are dramatically under-screened. While post-menopausal women are increasingly — if
          still insufficiently — associated with osteoporosis in clinical and public awareness, men remain largely
          invisible in the narrative. Yet one in five men over 50 will experience an osteoporosis-related fracture
          in their lifetime, and when they do, their outcomes are often worse than women&apos;s. Men who suffer
          hip fractures have a higher one-year mortality rate. They are less likely to be assessed after their
          fracture, less likely to receive treatment, and more likely to sustain a second fracture as a result.
        </p>
        <p>
          <strong>Younger post-menopausal women</strong> — those in their early fifties who have recently gone
          through menopause — are in the period of most rapid bone loss, yet are often not referred for scanning
          unless they have additional risk factors. The decade immediately following menopause is, paradoxically,
          the window in which intervention is most effective and most frequently missed.
        </p>
        <p>
          <strong>People on long-term corticosteroids</strong> — prescribed for conditions like asthma, rheumatoid
          arthritis, inflammatory bowel disease, and COPD — face significantly elevated fracture risk from their
          medication, yet bone protective measures are not always initiated automatically.
        </p>

        <h2>The First Fracture That Should Have Prompted Action</h2>
        <p>
          Perhaps the most preventable failure in the care of osteoporosis is what happens — or rather, what does
          not happen — after a first fragility fracture. A wrist fracture treated in an Emergency Department,
          cast applied, patient discharged. A vertebral fracture managed with painkillers and rest. A hip fracture
          repaired with surgery, patient rehabilitated and sent home. In each case, the fracture itself is treated.
          But the underlying osteoporosis — the reason the bone broke in the first place — goes unaddressed.
        </p>
        <p>
          Research consistently shows that fewer than one in five people who sustain a fragility fracture receive
          a bone density scan afterwards. Fewer than one in ten are started on bone-protective medication. The
          evidence base for secondary fracture prevention is strong, the interventions are available, and yet
          the gap between what should happen and what does happen remains striking.
        </p>
        <p>
          The consequence is a &ldquo;fracture cascade&rdquo;: a first fracture dramatically increases the risk
          of a second, which increases the risk of a third, each one typically more serious than the last. A wrist
          fracture that should have triggered bone density assessment and treatment instead becomes the first in
          a sequence that eventually includes a hip fracture — and all the mortality, loss of independence, and
          cost that follows.
        </p>

        <h2>What Needs to Change</h2>
        <p>
          At a systems level, the solution is well understood. <strong>Fracture Liaison Services (FLS)</strong>{" "}
          — specialist-coordinated programmes that automatically identify, assess, and treat fragility fracture
          patients — have been shown to dramatically increase the proportion of patients who receive appropriate
          bone health management after a fracture. Countries and healthcare systems with universal FLS coverage
          have significantly lower rates of secondary fractures. Ireland is expanding its FLS provision, but
          coverage remains incomplete.
        </p>
        <p>
          At an individual level, the most important change is awareness. People need to know what osteoporosis
          is, what their risk factors are, and what to ask their HCP. The evidence is clear: awareness drives
          earlier diagnosis, earlier diagnosis drives earlier treatment, and earlier treatment prevents fractures.
        </p>

        <h2>What You Can Do Now</h2>
        <p>
          If you are over 50 — or younger with significant risk factors — we would encourage you to speak to
          your HCP about your bone health. Ask specifically whether a DXA scan (bone density test) would be
          appropriate for you. You can use our{" "}
          <Link href="/about-osteoporosis/risk-factors">Risk Factors page</Link> to understand which factors
          apply to your situation.
        </p>
        <p>
          If you have already had a fracture — even a wrist fracture that seemed minor — ask whether you have
          been assessed for osteoporosis. If not, ask for a referral. It is a reasonable and medically justified
          request. The fracture that seemed like a minor inconvenience may be telling you something important.
        </p>
        <p>
          Osteoporosis is called the silent disease. But its consequences are anything but quiet. Earlier
          diagnosis and treatment can prevent those consequences — and it starts with a conversation.
        </p>
      </>
    ),
  },

  {
    slug: "what-happens-after-a-wrist-fracture",
    title: "What Happens After a Wrist Fracture? Why Your Bone Health Needs Attention Now",
    excerpt:
      "A broken wrist can feel like a minor inconvenience. But for people over 50, it may be the first warning sign of osteoporosis — and a critical moment to act.",
    category: "Patient Stories",
    date: "January 2026",
    dateISO: "2026-01-15",
    readingTime: "6 min read",
    author: "FragilityFracture.ie Editorial Team",
    tags: ["wrist fracture", "fragility fracture", "osteoporosis", "secondary prevention"],
    Content: () => (
      <>
        <p>
          It happens in a split second. You trip on a footpath, or slip on a wet step, or simply lose your
          footing getting out of the car. Your hand goes out instinctively to break the fall. You hear or feel
          a crack. And then you are sitting in the Emergency Department, waiting for an X-ray, wondering how
          long you&apos;ll need to wear a cast.
        </p>
        <p>
          For most people, a wrist fracture — technically a fracture of the distal radius, the lower end of
          the forearm bone — feels like a painful but relatively minor event. Six weeks in a cast, some
          physiotherapy, back to normal. Compared to a hip fracture or a spinal fracture, a wrist injury
          can feel trivial.
        </p>
        <p>
          But if you are over 50, and particularly if the fall that caused your fracture was not particularly
          dramatic — a stumble from standing height, nothing more — your broken wrist may be the most
          important medical warning sign you have ever received.
        </p>

        <h2>The Warning That Is Too Often Ignored</h2>
        <p>
          In orthopaedic medicine, a wrist fracture in someone over 50 caused by a low-energy fall is
          classified as a <strong>fragility fracture</strong>. This is not just a description — it is a
          clinical signal. A fragility fracture means that the force of a normal, everyday fall was sufficient
          to break a bone. In a skeleton with normal density, that should not happen.
        </p>
        <p>
          International guidelines are unambiguous: every person over 50 who sustains a fragility fracture
          should be assessed for osteoporosis. The wrist fracture itself is not the problem — it is the
          symptom of a problem: bone that is weaker than it should be.
        </p>
        <p>
          And yet study after study shows that the majority of people who break their wrist are discharged
          from Emergency Departments, or sent home from fracture clinics, without any formal assessment of
          their bone density. They receive excellent care for their wrist. But the underlying vulnerability
          of their skeleton goes unexamined.
        </p>

        <h2>The Fracture You Don&apos;t Want to Have Next</h2>
        <p>
          A wrist fracture approximately doubles the risk of a subsequent hip fracture. Let that settle for
          a moment. A hip fracture is one of the most serious injuries an older adult can sustain. In Ireland,
          up to 20–30% of people who suffer a hip fracture die within 12 months. The majority of survivors
          never return to their previous level of independence.
        </p>
        <p>
          A wrist fracture, in this context, is not just an inconvenience to be managed and forgotten. It is
          a window of opportunity — a moment in which treatment can be initiated, bone density improved or
          stabilised, and fall risk reduced. Treated properly, it is a chance to prevent the fracture that
          really does change everything.
        </p>

        <h2>What Should Happen After a Wrist Fracture</h2>
        <p>
          In an ideal healthcare pathway, a fragility wrist fracture in someone over 50 should automatically
          trigger the following:
        </p>
        <ul>
          <li>Referral to a <strong>Fracture Liaison Service</strong> (where available) for systematic bone health assessment</li>
          <li>A <strong>DXA scan</strong> (bone density test) to determine whether osteoporosis is present</li>
          <li>A <strong>FRAX score</strong> to calculate 10-year fracture probability</li>
          <li>Assessment of calcium and Vitamin D status, with supplementation if needed</li>
          <li>Discussion of bone-protective medication if the bone density and risk profile indicate it</li>
          <li>A falls risk assessment and appropriate prevention measures</li>
        </ul>
        <p>
          In practice, this pathway is followed inconsistently. Some hospitals have excellent Fracture Liaison
          Services that capture most patients. Others do not have FLS, and patients are discharged having been
          told only to return to their HCP &ldquo;if needed&rdquo;.
        </p>

        <h2>If This Has Happened to You</h2>
        <p>
          If you have had a wrist fracture — recently or in the past few years — and you have not had a bone
          density scan or a discussion about osteoporosis with your HCP, please take this as your prompt to
          act. You can ask your HCP specifically:
        </p>
        <ul>
          <li>&ldquo;My wrist fracture was from a fall — could this be a fragility fracture?&rdquo;</li>
          <li>&ldquo;Should I have a bone density (DXA) scan?&rdquo;</li>
          <li>&ldquo;Is there a Fracture Liaison Service I should be referred to?&rdquo;</li>
          <li>&ldquo;What can I do to reduce my risk of another fracture?&rdquo;</li>
        </ul>
        <p>
          These are entirely legitimate questions. They are based on clinical evidence. And asking them could
          make a significant difference to your health over the coming years.
        </p>

        <h2>It Is Not Too Late</h2>
        <p>
          Effective treatments for osteoporosis are available, accessible, and evidence-based. Medication,
          alongside adequate calcium and Vitamin D, exercise, and falls prevention measures, can significantly
          reduce fracture risk — even in people who have already had one fragility fracture.
        </p>
        <p>
          A wrist fracture may be the most important warning sign you have received. Do not let it be ignored.
          Use it. Ask the questions. Start the conversation with your HCP. Give yourself the chance to prevent
          the fractures that matter most.
        </p>
        <p>
          For more information, see our pages on{" "}
          <Link href="/fragility-fractures/wrist-fractures">Wrist Fractures</Link>,{" "}
          <Link href="/fragility-fractures/secondary-fracture-prevention">Secondary Fracture Prevention</Link>,
          and <Link href="/living-with-osteoporosis/talking-to-your-doctor">Talking to Your HCP</Link>.
        </p>
      </>
    ),
  },

  {
    slug: "vitamin-d-in-ireland-what-you-need-to-know",
    title: "Vitamin D in Ireland: What the Experts Say and What You Should Do",
    excerpt:
      "Ireland's climate means most of us are deficient in Vitamin D for half the year or more. Here's the latest guidance on supplements, sun exposure, and bone health.",
    category: "Nutrition",
    date: "February 2026",
    dateISO: "2026-02-15",
    readingTime: "5 min read",
    author: "FragilityFracture.ie Editorial Team",
    tags: ["vitamin D", "nutrition", "supplements", "Ireland", "bone health"],
    Content: () => (
      <>
        <p>
          Ask an Irish HCP what single nutritional supplement they most commonly recommend, and the answer,
          overwhelmingly, is Vitamin D. Ask an Irish dietitian the same question, and you will likely get the
          same answer. It is not a trend or a fad — it is a response to a clear and well-documented public
          health reality: Ireland does not get enough sunlight for most of its population to produce adequate
          Vitamin D, for much of the year, from sunlight alone.
        </p>
        <p>
          For bone health specifically, Vitamin D is not optional. Without it, the body cannot properly absorb
          calcium from the gut — regardless of how much calcium you eat. And without adequate calcium
          absorption, bone density declines. It is a straightforward chain of consequences with a
          straightforward prevention.
        </p>

        <h2>Why Ireland Is Different</h2>
        <p>
          The body produces Vitamin D through a photochemical reaction in the skin triggered by UVB radiation
          from sunlight. This mechanism works well in countries closer to the equator, where the sun is high
          in the sky and UVB rays reach the surface reliably for most of the year.
        </p>
        <p>
          Ireland, situated between 51°N and 55°N, is at a latitude where UVB radiation is insufficient for
          meaningful Vitamin D synthesis from approximately <strong>October to March</strong>. During these
          months — which account for roughly half the year — the sun is too low in the sky for the relevant
          wavelengths to reach Earth&apos;s surface in Ireland. No amount of time outdoors will generate
          Vitamin D production during this period.
        </p>
        <p>
          Even during the spring and summer months (April to September), Ireland&apos;s famously cloudy
          weather means that on many days, UVB levels are insufficient for adequate synthesis. The TILDA study
          — the Irish Longitudinal Study on Ageing, one of the most comprehensive studies of health in older
          Irish adults — found that over a quarter of adults aged 50 and over in Ireland were Vitamin D
          deficient, and a much higher proportion had insufficient (rather than optimal) levels.
        </p>

        <h2>What the Evidence Says About Supplementation</h2>
        <p>
          The evidence for Vitamin D supplementation in the prevention of fractures is clearest in older
          adults, particularly those who are deficient or at risk of deficiency. Large meta-analyses of
          randomised trials have shown that combined Vitamin D and calcium supplementation reduces fracture
          risk — particularly in institutionalised older adults and those with documented deficiency.
        </p>
        <p>
          The evidence is more nuanced for the general population without confirmed deficiency. Some more
          recent large trials (including the VITAL trial in the US) found that high-dose Vitamin D
          supplementation in people who were not already deficient did not significantly reduce fracture risk.
          This suggests that supplementation is most important for people who are actually deficient — which,
          in Ireland, is a substantial proportion of the adult population.
        </p>
        <p>
          The practical implication for people in Ireland: <strong>routine supplementation of 10 micrograms
          (400 IU) per day is reasonable and recommended for most adults</strong>, particularly October to
          March. For older adults, people who are housebound, and those with osteoporosis, higher amounts
          (15–20 micrograms, or 600–800 IU) are often recommended by GPs — always discuss with your own
          doctor.
        </p>

        <h2>Food Sources: Helpful but Not Enough</h2>
        <p>
          Vitamin D is found in a relatively small number of foods. The best natural sources are oily fish
          — salmon, mackerel, herring, sardines — which can provide meaningful amounts per serving. Egg yolks
          and liver also contain Vitamin D, in smaller quantities. Some foods in Ireland (certain margarines,
          breakfast cereals, and plant milks) are fortified with Vitamin D, which is worth checking on food
          labels.
        </p>
        <p>
          But even a diet rich in these foods is unlikely to provide the 10–15 micrograms per day that most
          adults need in winter. A 100g serving of Atlantic salmon might provide around 15–20 micrograms —
          close to a full day&apos;s requirement — but most people do not eat oily fish daily. For most
          Irish adults, supplementation is the practical solution to a structural dietary shortfall.
        </p>

        <h2>Sun Exposure: A Summer Strategy Only</h2>
        <p>
          During the Irish summer — primarily May to August on clear or partly cloudy days — short periods
          of direct sun exposure can contribute to Vitamin D production. Around 10–15 minutes of midday sun
          on the arms and face, without sunscreen, on a reasonably sunny day, can generate useful amounts
          for fair-skinned people.
        </p>
        <p>
          After this brief period, it is sensible to apply sun protection. Importantly, the body cannot
          store UV exposure as &ldquo;banked&rdquo; Vitamin D for winter — the conversion happens in
          real time, and once made, Vitamin D is stored in fat tissue for weeks or months, but not
          indefinitely. This is why consistent supplementation throughout the winter months is more reliable
          than relying on summer sun.
        </p>

        <h2>A Simple Recommendation</h2>
        <p>
          If you live in Ireland, are an adult over 18, and do not have a medical condition that affects
          Vitamin D metabolism, the following is broadly consistent with current Irish guidance:
        </p>
        <ul>
          <li>Take a daily supplement of <strong>10 micrograms (400 IU) of Vitamin D3</strong></li>
          <li>Take it year-round, or at minimum October to March</li>
          <li>If you are over 65, housebound, or have osteoporosis, discuss whether a higher dose is appropriate with your HCP</li>
          <li>Do not take more than 100 micrograms (4,000 IU) per day without medical supervision</li>
        </ul>
        <p>
          For the majority of people, this is a safe, cheap, and evidence-supported step. Combined with
          adequate calcium from diet (and supplementation where needed), regular weight-bearing exercise,
          and — if appropriate — bone-protective medication, it forms an important part of maintaining
          bone health in the Irish climate.
        </p>
        <p>
          For full guidance, see our dedicated{" "}
          <Link href="/prevention/vitamin-d">Vitamin D page</Link> and{" "}
          <Link href="/prevention/nutrition-and-calcium">Nutrition &amp; Calcium page</Link>.
        </p>
      </>
    ),
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostMeta(): PostMeta[] {
  return posts.map(({ Content: _, ...meta }) => meta);
}
