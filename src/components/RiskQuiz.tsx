"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle, AlertCircle, AlertTriangle } from "lucide-react";

interface Option {
  label: string;
  score: number;
}

interface Question {
  id: string;
  text: string;
  subtext?: string;
  options: Option[];
}

const questions: Question[] = [
  {
    id: "age",
    text: "How old are you?",
    options: [
      { label: "Under 45", score: 0 },
      { label: "45 – 54", score: 1 },
      { label: "55 – 64", score: 2 },
      { label: "65 or older", score: 3 },
    ],
  },
  {
    id: "sex",
    text: "What is your biological sex?",
    subtext: "Biological sex is one of the key factors in assessing osteoporosis risk. Women have a higher lifetime risk due to bone loss after menopause.",
    options: [
      { label: "Male", score: 0 },
      { label: "Female", score: 1 },
    ],
  },
  {
    id: "menopause",
    text: "Have you gone through menopause, or had your ovaries removed?",
    subtext: "Select 'Not applicable' if you are male or have not yet reached menopause.",
    options: [
      { label: "Not applicable / No", score: 0 },
      { label: "Yes, at age 45 or older", score: 1 },
      { label: "Yes, before age 45", score: 2 },
    ],
  },
  {
    id: "fracture",
    text: "Have you broken a bone as an adult after a minor bump or fall?",
    subtext: "This is called a fragility fracture — a break caused by a force that wouldn't normally break a healthy bone, such as a fall from standing height.",
    options: [
      { label: "No", score: 0 },
      { label: "Yes", score: 3 },
    ],
  },
  {
    id: "family",
    text: "Has a parent ever been diagnosed with osteoporosis or broken their hip?",
    subtext: "A family history of osteoporosis, especially a parental hip fracture, increases your own risk.",
    options: [
      { label: "No", score: 0 },
      { label: "Not sure", score: 1 },
      { label: "Yes", score: 1 },
    ],
  },
  {
    id: "smoking",
    text: "Do you currently smoke, or have you smoked regularly in the past?",
    subtext: "Smoking directly harms bone-forming cells and is an independent risk factor for fractures.",
    options: [
      { label: "No, I have never smoked regularly", score: 0 },
      { label: "I used to smoke but have stopped", score: 1 },
      { label: "Yes, I currently smoke", score: 1 },
    ],
  },
  {
    id: "alcohol",
    text: "How many units of alcohol do you typically drink per week?",
    subtext: "One unit = a small glass of wine, half a pint of beer, or a single measure of spirits. More than 14 units per week significantly increases fracture risk.",
    options: [
      { label: "None, or fewer than 7 units", score: 0 },
      { label: "7 to 14 units", score: 1 },
      { label: "More than 14 units", score: 2 },
    ],
  },
  {
    id: "steroids",
    text: "Have you taken steroid tablets (such as prednisolone or cortisone) for more than 3 months?",
    subtext: "Long-term corticosteroid use is one of the most significant medication-related risk factors for osteoporosis.",
    options: [
      { label: "No", score: 0 },
      { label: "Yes", score: 2 },
    ],
  },
  {
    id: "weight",
    text: "How would you describe your body weight?",
    subtext: "A low body weight (BMI under 19) is an independent risk factor for osteoporosis, as there is less mechanical load on bones.",
    options: [
      { label: "Healthy weight or above", score: 0 },
      { label: "Slightly underweight", score: 1 },
      { label: "Noticeably underweight", score: 2 },
    ],
  },
  {
    id: "conditions",
    text: "Have you been diagnosed with any of the following conditions?",
    subtext: "Rheumatoid arthritis, coeliac disease, Crohn's disease, ulcerative colitis, overactive thyroid (hyperthyroidism), or Type 1 diabetes.",
    options: [
      { label: "None of these", score: 0 },
      { label: "Yes — one of these conditions", score: 2 },
      { label: "Yes — more than one", score: 3 },
    ],
  },
];

type RiskLevel = "low" | "moderate" | "high";

function getRiskLevel(score: number): RiskLevel {
  if (score <= 3) return "low";
  if (score <= 8) return "moderate";
  return "high";
}

const resultConfig = {
  low: {
    label: "Lower Risk Profile",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800",
    iconColour: "text-emerald-500",
    textColour: "text-emerald-800",
    Icon: CheckCircle,
    summary:
      "Your answers suggest a lower risk profile for osteoporosis based on the factors you've shared.",
    advice:
      "This is reassuring, but bone health matters at every age. A diet rich in calcium, adequate vitamin D (especially important in Ireland), regular weight-bearing exercise, and avoiding smoking all help protect your bones long-term.",
    cta: "If your circumstances change or you have any concerns, speak to your GP about your bone health.",
  },
  moderate: {
    label: "Moderate Risk — Worth Discussing with Your GP",
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-800",
    iconColour: "text-amber-500",
    textColour: "text-amber-800",
    Icon: AlertCircle,
    summary:
      "Your answers suggest you have some risk factors associated with osteoporosis.",
    advice:
      "While this quiz is not a diagnosis, a moderate number of risk factors means it would be worth raising the topic with your GP. They can assess your full picture and, if appropriate, arrange a DXA bone density scan — a quick, painless X-ray that measures bone strength.",
    cta: "We recommend mentioning your bone health to your GP at your next visit, or sooner if you are concerned.",
  },
  high: {
    label: "Higher Risk — Please Speak to Your GP",
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-800",
    iconColour: "text-red-500",
    textColour: "text-red-800",
    Icon: AlertTriangle,
    summary:
      "Your answers suggest several significant risk factors for osteoporosis.",
    advice:
      "This quiz is not a medical diagnosis, but your responses indicate that a conversation with your GP about bone health is strongly recommended. A DXA scan can give a definitive picture of your bone density, and effective treatments are available if needed. Early detection makes a real difference.",
    cta: "Please speak to your GP about bone density testing. Don't wait for a fracture to find out.",
  },
};

export default function RiskQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({}); // questionId -> option index
  const [selected, setSelected] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  const question = questions[currentQ];

  const totalScore = questions.reduce((sum, q) => {
    const idx = answers[q.id];
    if (idx === undefined) return sum;
    return sum + q.options[idx].score;
  }, 0);

  const riskLevel = getRiskLevel(totalScore);
  const result = resultConfig[riskLevel];
  const { Icon } = result;

  const progress = (currentQ / questions.length) * 100;

  function handleSelect(optionIdx: number) {
    setSelected(optionIdx);
  }

  function handleNext() {
    if (selected === null) return;
    setAnswers((prev) => ({ ...prev, [question.id]: selected }));
    setSelected(null);
    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  }

  function handleBack() {
    if (currentQ === 0) return;
    const prevQ = questions[currentQ - 1];
    const prevIdx = answers[prevQ.id] ?? null;
    setSelected(prevIdx);
    setCurrentQ((prev) => prev - 1);
  }

  function handleRetake() {
    setCurrentQ(0);
    setAnswers({});
    setSelected(null);
    setCompleted(false);
  }

  if (completed) {
    return (
      <div className="max-w-2xl mx-auto">
        {/* Result card */}
        <div className={`rounded-2xl border-2 p-8 mb-6 ${result.bg} ${result.border}`}>
          <div className="flex items-start gap-4">
            <Icon className={`w-10 h-10 shrink-0 mt-0.5 ${result.iconColour}`} aria-hidden="true" />
            <div>
              <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${result.badge}`}>
                {result.label}
              </span>
              <p className={`text-lg font-semibold mb-3 ${result.textColour}`}>{result.summary}</p>
              <p className="text-slate-700 leading-relaxed mb-4">{result.advice}</p>
              <p className="text-slate-800 font-semibold">{result.cta}</p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <Link
            href="/living-with-osteoporosis/talking-to-your-doctor"
            className="flex-1 text-center bg-slate-800 hover:bg-slate-900 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Questions to Ask Your GP
          </Link>
          <Link
            href="/bone-density-testing/what-is-a-dxa-scan"
            className="flex-1 text-center bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-200 transition-colors"
          >
            About DXA Scans
          </Link>
          <button
            onClick={handleRetake}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium transition-colors"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            Retake Quiz
          </button>
        </div>

        {/* Disclaimer */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-700 mb-1">Important Note</p>
          <p>
            This quiz provides a general educational indication only — it is{" "}
            <strong>not a medical diagnosis</strong>. It is based on established
            osteoporosis risk factors used in clinical practice but cannot account for
            your full medical history, current medications, or all relevant clinical
            factors. Always consult your GP or a qualified healthcare professional for
            personalised advice.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-slate-500 mb-2">
          <span>Question {currentQ + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-slate-700 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={currentQ + 1}
            aria-valuemin={1}
            aria-valuemax={questions.length}
            aria-label={`Question ${currentQ + 1} of ${questions.length}`}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-2">{question.text}</h2>
        {question.subtext && (
          <p className="text-sm text-slate-500 leading-relaxed mb-6">{question.subtext}</p>
        )}
        {!question.subtext && <div className="mb-6" />}

        <div className="space-y-3" role="group" aria-label={question.text}>
          {question.options.map((option, idx) => {
            const isSelected = selected === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all font-medium text-base ${
                  isSelected
                    ? "border-[#E7D549] bg-[#F9F9F9] text-slate-800"
                    : "border-slate-200 text-slate-700 hover:border-[#E7D549] hover:bg-[#F9F9F9]/50"
                }`}
                aria-pressed={isSelected}
              >
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full border-2 mr-3 shrink-0 align-middle transition-all ${
                  isSelected ? "border-[#E7D549] bg-slate-700" : "border-slate-300"
                }`}>
                  {isSelected && (
                    <span className="block w-2 h-2 rounded-full bg-white" />
                  )}
                </span>
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={currentQ === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed font-medium transition-colors"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={selected === null}
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
        >
          {currentQ === questions.length - 1 ? "See My Result" : "Next"}
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
