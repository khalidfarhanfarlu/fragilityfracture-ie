import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "FragilityFracture.ie privacy policy — how we collect, use, and protect your personal data under GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Privacy Policy" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-slate-400 mb-8">Last updated: February 2026</p>

      <h2>1. Who We Are</h2>
      <p>
        FragilityFracture.ie (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an independent Irish
        educational website providing information about osteoporosis, bone density, and fragility fractures.
        We are the data controller for the purposes of the General Data Protection Regulation (GDPR) and the
        Data Protection Acts 1988–2018.
      </p>

      <h2>2. What Personal Data We Collect</h2>
      <p>We collect personal data in the following circumstances:</p>
      <h3>Contact Form</h3>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>The content of your message</li>
        <li>Date and time of submission</li>
      </ul>
      <h3>Analytics Data (with consent)</h3>
      <ul>
        <li>Anonymous usage data collected via Google Analytics 4 (if you accept analytics cookies)</li>
        <li>This includes: pages visited, time on page, browser type, approximate geographic location (country/region level), device type</li>
        <li>No personally identifiable information is collected through analytics</li>
        <li>IP addresses are anonymised</li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>We use personal data only for the purposes for which it was collected:</p>
      <ul>
        <li><strong>Contact form data:</strong> To respond to your enquiry. We do not use contact form data for marketing.</li>
        <li><strong>Analytics data:</strong> To understand how the site is used and to improve its content and usability. Data is aggregated and anonymous.</li>
      </ul>

      <h2>4. Legal Basis for Processing</h2>
      <ul>
        <li><strong>Contact form:</strong> Consent (Article 6(1)(a) GDPR) — you consent to us processing your data by submitting the form and ticking the consent checkbox.</li>
        <li><strong>Analytics:</strong> Consent — analytics cookies are only set if you accept them via the cookie consent banner.</li>
      </ul>

      <h2>5. Data Retention</h2>
      <ul>
        <li><strong>Contact form submissions:</strong> Retained for 12 months, then securely deleted, unless an ongoing correspondence requires longer retention.</li>
        <li><strong>Analytics data:</strong> Google Analytics data retention is set to 14 months. Aggregated data may be retained longer.</li>
      </ul>

      <h2>6. Third-Party Services</h2>
      <ul>
        <li><strong>Google Analytics 4:</strong> Used to analyse site traffic. Governed by Google&apos;s privacy policy at google.com/policies/privacy. We have configured GA4 with IP anonymisation enabled.</li>
        <li><strong>Vercel:</strong> Our hosting provider. May process request metadata for operational purposes.</li>
      </ul>
      <p>
        We do not sell, rent, or share your personal data with third parties for marketing purposes.
      </p>

      <h2>7. Your Rights Under GDPR</h2>
      <p>You have the following rights in relation to your personal data:</p>
      <ul>
        <li><strong>Right to access:</strong> Request a copy of the data we hold about you</li>
        <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
        <li><strong>Right to erasure:</strong> Request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
        <li><strong>Right to restriction:</strong> Request that we restrict processing of your data</li>
        <li><strong>Right to data portability:</strong> Receive your data in a structured, machine-readable format</li>
        <li><strong>Right to object:</strong> Object to processing based on legitimate interests</li>
        <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time (this does not affect processing before withdrawal)</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us via the <a href="/contact">contact form</a>. We will
        respond within one month of receiving your request.
      </p>

      <h2>8. Cookies</h2>
      <p>
        For full information on the cookies used on this site, please see our{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>9. Complaints</h2>
      <p>
        If you are not satisfied with how we handle your personal data, you have the right to lodge a complaint
        with the Irish Data Protection Commission:
      </p>
      <ul>
        <li>Website: <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer">dataprotection.ie</a></li>
        <li>Address: Data Protection Commission, 21 Fitzwilliam Square South, Dublin 2, D02 RD28</li>
        <li>Phone: 01 765 0100</li>
      </ul>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this privacy policy from time to time. The &ldquo;last updated&rdquo; date at the top of this
        page will reflect any changes. Continued use of the site after changes constitutes acceptance.
      </p>
    </PageLayout>
  );
}
