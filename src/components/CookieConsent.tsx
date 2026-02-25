"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ analytics: true, marketing: false, necessary: true, timestamp: Date.now() }));
    setVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ analytics: false, marketing: false, necessary: true, timestamp: Date.now() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex-1 text-sm text-slate-600">
            <p>
              We use cookies to improve your experience and analyse site traffic. We do not use advertising cookies.
              See our{" "}
              <Link href="/cookie-policy" className="text-teal-700 underline font-medium hover:text-teal-800">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-teal-700 underline font-medium hover:text-teal-800">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={acceptNecessary}
              className="text-sm text-slate-600 hover:text-slate-800 underline px-2 py-1"
            >
              Necessary only
            </button>
            <button
              onClick={accept}
              className="bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Accept all
            </button>
            <button
              onClick={acceptNecessary}
              aria-label="Dismiss cookie banner"
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
