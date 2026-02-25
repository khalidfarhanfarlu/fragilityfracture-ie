import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "FragilityFracture.ie accessibility statement — our commitment to WCAG 2.1 AA compliance.",
};

export default function AccessibilityStatementPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Accessibility Statement" }]}
      showGPCTA={false}
      showDisclaimer={false}
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Accessibility Statement</h1>
      <p className="text-sm text-slate-400 mb-8">Last updated: February 2026</p>

      <p className="text-slate-600 mb-6">
        FragilityFracture.ie is committed to making this website accessible to everyone, including people with
        disabilities. We aim to meet the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>.
      </p>

      <h2>Our Commitment</h2>
      <p>
        We believe that everyone should have equal access to health information, regardless of their ability or
        the technology they use. Our target audience includes older adults who may have visual impairments,
        reduced dexterity, or use assistive technology. We have designed this site with these users in mind.
      </p>

      <h2>Accessibility Features</h2>
      <p>This website includes the following accessibility features:</p>
      <ul>
        <li><strong>Skip to main content link:</strong> Available at the top of every page for keyboard users</li>
        <li><strong>Keyboard navigation:</strong> All interactive elements (links, buttons, forms) are accessible via keyboard</li>
        <li><strong>Screen reader compatibility:</strong> Semantic HTML, ARIA labels, and descriptive link text are used throughout</li>
        <li><strong>Minimum font size:</strong> Body text is set at 18px minimum</li>
        <li><strong>Colour contrast:</strong> Text and interactive elements meet the minimum 4.5:1 contrast ratio required by WCAG 2.1 AA</li>
        <li><strong>Focus indicators:</strong> Visible focus rings are displayed on all interactive elements</li>
        <li><strong>Alt text:</strong> All informational images include descriptive alt text</li>
        <li><strong>No colour alone:</strong> We do not rely on colour alone to convey information</li>
        <li><strong>Responsive design:</strong> The site works on all screen sizes, from small smartphones to large desktop monitors</li>
        <li><strong>Plain English:</strong> All content is written in clear, plain language with medical terms explained</li>
        <li><strong>No flashing content:</strong> We do not use flashing or strobing content that could trigger photosensitive seizures</li>
        <li><strong>Language declaration:</strong> The HTML language attribute is set to &ldquo;en-IE&rdquo; to assist screen readers</li>
        <li><strong>Form labels:</strong> All form inputs have associated labels and error messages are clearly communicated</li>
      </ul>

      <h2>Known Limitations</h2>
      <p>
        While we strive for full WCAG 2.1 AA compliance, there may be areas where we fall short. If you encounter
        any accessibility barriers, please let us know via the <a href="/contact">contact form</a> and we will
        work to address them promptly.
      </p>

      <h2>Testing</h2>
      <p>
        We test accessibility using:
      </p>
      <ul>
        <li>Lighthouse accessibility audits in Chrome DevTools</li>
        <li>Manual keyboard navigation testing</li>
        <li>axe browser extension for automated accessibility checking</li>
        <li>Testing with screen reader software</li>
      </ul>

      <h2>Text Resizing</h2>
      <p>
        You can resize text in your browser without loss of content or functionality. In most browsers, this can be
        done by pressing <kbd>Ctrl</kbd> + <kbd>+</kbd> (Windows/Linux) or <kbd>Cmd</kbd> + <kbd>+</kbd> (Mac) to
        increase text size.
      </p>

      <h2>Contact Us About Accessibility</h2>
      <p>
        If you experience any accessibility issues on FragilityFracture.ie, or if you need information in an
        alternative format, please contact us:
      </p>
      <ul>
        <li>Via our <a href="/contact">contact form</a></li>
        <li>Please describe the issue in as much detail as possible, including the page URL and what assistive technology you are using</li>
      </ul>
      <p>
        We aim to respond to accessibility queries within 5 business days.
      </p>

      <h2>Technical Information</h2>
      <p>
        FragilityFracture.ie relies on the following technologies for conformance with WCAG 2.1 Level AA:
      </p>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (with progressive enhancement)</li>
        <li>WAI-ARIA 1.1</li>
      </ul>

      <h2>Formal Complaints</h2>
      <p>
        If you are not satisfied with our response to an accessibility complaint, you may wish to contact the{" "}
        <a href="https://www.ihrec.ie" target="_blank" rel="noopener noreferrer">
          Irish Human Rights and Equality Commission (IHREC)
        </a>.
      </p>
    </PageLayout>
  );
}
