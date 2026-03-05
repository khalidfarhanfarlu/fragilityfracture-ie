import { ReactNode } from "react";
import MedicalDisclaimer from "./MedicalDisclaimer";
import TalkToGPCTA from "./TalkToGPCTA";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";

interface PageLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  showDisclaimer?: boolean;
  showGPCTA?: boolean;
  gpCTAContext?: string;
  lastReviewed?: string;
}

export default function PageLayout({
  children,
  breadcrumbs,
  showDisclaimer = true,
  showGPCTA = true,
  gpCTAContext,
  lastReviewed = "February 2026",
}: PageLayoutProps) {
  return (
    <main id="main-content" className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        {showDisclaimer && <MedicalDisclaimer />}
        <div className="content-body">{children}</div>
        {showGPCTA && <TalkToGPCTA context={gpCTAContext} />}
        <p className="text-xs text-[#999999] mt-6 text-right">
          Last reviewed: {lastReviewed} — FragilityFracture.ie Editorial Team
        </p>
      </div>
    </main>
  );
}
