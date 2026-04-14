"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader } from "lucide-react";

export default function QuestionEmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-start gap-4">
        <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-green-800 mb-1">Questions sent!</p>
          <p className="text-green-700 text-sm leading-relaxed">
            Check your inbox at <strong>{email}</strong>. The full list of questions is on its way —
            bring it to your next appointment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFBDF] border border-[#E7D549] rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-[#E7D549] flex items-center justify-center shrink-0">
          <Send className="w-4 h-4 text-[#1e293b]" />
        </div>
        <h3 className="font-bold text-[#1e293b] text-lg">Get the questions by email</h3>
      </div>
      <p className="text-[#555555] text-sm leading-relaxed mb-6">
        Enter your email and we&apos;ll send you the full list of questions above — formatted and ready to bring to your next appointment.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="flex-1 bg-white border border-[#d4c43e] text-[#1e293b] placeholder-[#aaaaaa] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#E7D549] focus:ring-2 focus:ring-[#E7D549]/40 transition-colors disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="inline-flex items-center justify-center gap-2 bg-[#1e293b] hover:bg-[#2d3f54] disabled:opacity-60 disabled:cursor-not-allowed text-[#E7D549] font-bold px-6 py-3 rounded-lg text-sm transition-colors shrink-0"
        >
          {status === "loading" ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send me the questions
            </>
          )}
        </button>
      </form>

      {status === "error" && (
        <div className="flex items-center gap-2 mt-3 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <p className="text-[#888888] text-xs mt-4">
        We don&apos;t store your email or send any further messages. One email only.
      </p>
    </div>
  );
}
