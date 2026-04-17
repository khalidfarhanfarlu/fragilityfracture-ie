import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://fragilityfracture.ie"),
  title: {
    default: "FragilityFracture.ie — Osteoporosis & Bone Health Education",
    template: "%s | FragilityFracture.ie",
  },
  description:
    "Ireland's trusted, plain-language guide to osteoporosis, bone density, and fragility fractures. Understand your risk, learn about DXA scans, and find Irish support services.",
  keywords: [
    "osteoporosis Ireland",
    "fragility fracture",
    "bone density",
    "DXA scan Ireland",
    "bone health",
    "osteopenia",
    "fracture prevention",
  ],
  authors: [{ name: "FragilityFracture.ie Editorial Team" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://fragilityfracture.ie",
    siteName: "FragilityFracture.ie",
    title: "FragilityFracture.ie — Osteoporosis & Bone Health Education",
    description:
      "Ireland's trusted, plain-language guide to osteoporosis, bone density, and fragility fractures.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FragilityFracture.ie — Osteoporosis & Bone Health Education",
    description:
      "Ireland's trusted, plain-language guide to osteoporosis, bone density, and fragility fractures.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "6_HBtc8l6n_mLm5xHcLYD4guGyljFzzYalkbep2hJYs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE">
      <body className="antialiased bg-white text-[#434343]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
