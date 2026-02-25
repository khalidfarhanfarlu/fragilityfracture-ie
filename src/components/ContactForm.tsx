"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(20, "Please enter at least 20 characters").max(2000, "Message too long (2000 characters max)"),
  consent: z.boolean().refine((v) => v === true, "You must agree to the privacy policy to send a message"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // In production, POST to /api/contact or a form service
    await new Promise((r) => setTimeout(r, 800));
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-emerald-800 mb-2">Message Sent</h2>
        <p className="text-emerald-700 text-sm">
          Thank you for getting in touch. We aim to respond within 3–5 business days. Please note that we cannot
          provide medical advice by email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Full Name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register("name")}
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-red-600 text-xs mt-1.5">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Email Address <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-600 text-xs mt-1.5">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Subject <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          {...register("subject")}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
          aria-describedby={errors.subject ? "subject-error" : undefined}
          aria-invalid={!!errors.subject}
        >
          <option value="">Select a subject...</option>
          <option value="general">General enquiry</option>
          <option value="content">Content feedback or correction</option>
          <option value="resources">Resources and support</option>
          <option value="media">Media or press enquiry</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && (
          <p id="subject-error" role="alert" className="text-red-600 text-xs mt-1.5">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-y"
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          aria-invalid={!!errors.message}
        />
        <p id="message-hint" className="text-xs text-slate-400 mt-1">Maximum 2,000 characters</p>
        {errors.message && (
          <p id="message-error" role="alert" className="text-red-600 text-xs mt-1.5">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          {...register("consent")}
          className="mt-0.5 w-4 h-4 accent-teal-600 cursor-pointer"
          aria-describedby={errors.consent ? "consent-error" : undefined}
          aria-invalid={!!errors.consent}
        />
        <div>
          <label htmlFor="consent" className="text-sm text-slate-600 cursor-pointer">
            I agree to the processing of my personal data in accordance with the{" "}
            <a href="/privacy-policy" className="text-teal-600 underline hover:text-teal-800">
              Privacy Policy
            </a>
            . <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          {errors.consent && (
            <p id="consent-error" role="alert" className="text-red-600 text-xs mt-1">
              {errors.consent.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 disabled:bg-teal-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
      >
        {isSubmitting ? (
          <>Sending...</>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
