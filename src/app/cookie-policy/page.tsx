import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Information about the cookies used on FragilityFracture.ie and how to manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Cookie Policy" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Cookie Policy</h1>
      <p className="text-sm text-slate-400 mb-8">Last updated: February 2026</p>

      <p className="text-slate-600 mb-6">
        This Cookie Policy explains what cookies are, which cookies FragilityFracture.ie uses, and how you can
        manage your preferences.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files that are stored on your device (computer, tablet, or phone) when you visit
        a website. They help websites remember your preferences and understand how you use the site. Cookies do
        not contain personal information such as your name or email address.
      </p>

      <h2>Types of Cookies We Use</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Name / Provider</th>
              <th className="px-4 py-3 text-left">Purpose</th>
              <th className="px-4 py-3 text-left">Duration</th>
              <th className="px-4 py-3 text-left">Consent Required</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Necessary", "cookie-consent (first-party)", "Stores your cookie consent preferences so the banner is not shown on every visit", "1 year", "No (necessary)"],
              ["Analytics", "_ga (Google Analytics)", "Used to distinguish users for analytical purposes", "2 years", "Yes"],
              ["Analytics", "_ga_[ID] (Google Analytics)", "Used to persist session state", "2 years", "Yes"],
              ["Analytics", "_gid (Google Analytics)", "Used to distinguish users", "24 hours", "Yes"],
            ].map(([cat, name, purpose, duration, consent], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-3 border-b border-slate-100 font-semibold text-slate-700">{cat}</td>
                <td className="px-4 py-3 border-b border-slate-100 font-mono text-xs">{name}</td>
                <td className="px-4 py-3 border-b border-slate-100 text-slate-600">{purpose}</td>
                <td className="px-4 py-3 border-b border-slate-100 text-slate-500">{duration}</td>
                <td className="px-4 py-3 border-b border-slate-100">{consent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Necessary Cookies</h2>
      <p>
        Necessary cookies are required for the website to function properly. They do not require your consent.
        These cookies do not collect any personally identifiable information.
      </p>

      <h2>Analytics Cookies (Optional)</h2>
      <p>
        Analytics cookies help us understand how visitors use the site — for example, which pages are most visited
        and how long people spend on the site. This information helps us improve the quality and usefulness of our
        content.
      </p>
      <p>
        We use <strong>Google Analytics 4</strong> for this purpose. All analytics data is aggregated and anonymous.
        IP addresses are anonymised. We do not use analytics data to identify individual users.
      </p>
      <p>
        Analytics cookies are only set if you accept them via the cookie consent banner when you first visit the
        site.
      </p>

      <h2>What We Do Not Use</h2>
      <ul>
        <li>We do <strong>not</strong> use advertising or marketing cookies</li>
        <li>We do <strong>not</strong> use social media tracking cookies</li>
        <li>We do <strong>not</strong> share cookie data with third parties for commercial purposes</li>
      </ul>

      <h2>Managing Your Cookie Preferences</h2>
      <p>
        When you first visit FragilityFracture.ie, a cookie consent banner is displayed. You can choose to:
      </p>
      <ul>
        <li><strong>Accept all cookies</strong> — enables both necessary and analytics cookies</li>
        <li><strong>Necessary only</strong> — only essential cookies are set; analytics cookies are not activated</li>
      </ul>
      <p>
        You can change your preferences at any time by clearing your browser cookies and refreshing the page. The
        consent banner will re-appear on your next visit.
      </p>

      <h3>Browser Settings</h3>
      <p>
        You can also control cookies through your browser settings. Most browsers allow you to:
      </p>
      <ul>
        <li>View and delete cookies that have been set</li>
        <li>Block cookies from specific sites</li>
        <li>Block third-party cookies</li>
        <li>Block all cookies (note: this may affect site functionality)</li>
      </ul>
      <p>
        For instructions on managing cookies in your specific browser, search for your browser name plus
        &ldquo;manage cookies&rdquo; in your preferred search engine.
      </p>

      <h2>More Information</h2>
      <p>
        For more information about how we handle your personal data, see our{" "}
        <a href="/privacy-policy">Privacy Policy</a>. For further information about cookies in general, visit
        the Data Protection Commission website at{" "}
        <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer">
          dataprotection.ie
        </a>.
      </p>
    </PageLayout>
  );
}
