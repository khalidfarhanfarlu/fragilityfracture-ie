"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "About Osteoporosis",
    href: "/about-osteoporosis",
    children: [
      { label: "What Is Osteoporosis?", href: "/about-osteoporosis/what-is-osteoporosis" },
      { label: "What Is a Fragility Fracture?", href: "/about-osteoporosis/what-is-a-fragility-fracture" },
      { label: "Osteopenia vs Osteoporosis", href: "/about-osteoporosis/osteopenia-vs-osteoporosis" },
      { label: "Risk Factors", href: "/about-osteoporosis/risk-factors" },
      { label: "Osteoporosis in Men", href: "/about-osteoporosis/osteoporosis-in-men" },
    ],
  },
  {
    label: "Bone Density & Testing",
    href: "/bone-density-testing",
    children: [
      { label: "What Is a DXA Scan?", href: "/bone-density-testing/what-is-a-dxa-scan" },
      { label: "Understanding Your Results", href: "/bone-density-testing/understanding-your-results" },
      { label: "How to Get Tested in Ireland", href: "/bone-density-testing/how-to-get-tested-in-ireland" },
      { label: "FRAX Fracture Risk Tool", href: "/bone-density-testing/frax-fracture-risk-tool" },
    ],
  },
  {
    label: "Prevention",
    href: "/prevention",
    children: [
      { label: "Nutrition & Calcium", href: "/prevention/nutrition-and-calcium" },
      { label: "Vitamin D", href: "/prevention/vitamin-d" },
      { label: "Exercise & Physical Activity", href: "/prevention/exercise" },
      { label: "Lifestyle Factors", href: "/prevention/lifestyle" },
      { label: "Bone Health at Every Age", href: "/prevention/bone-health-at-every-age" },
    ],
  },
  {
    label: "Living With Osteoporosis",
    href: "/living-with-osteoporosis",
    children: [
      { label: "Treatment Options", href: "/living-with-osteoporosis/treatment-options" },
      { label: "Falls Prevention", href: "/living-with-osteoporosis/falls-prevention" },
      { label: "Recovery & Rehabilitation", href: "/living-with-osteoporosis/recovery-and-rehabilitation" },
      { label: "Mental Health & Wellbeing", href: "/living-with-osteoporosis/mental-health-and-wellbeing" },
      { label: "Talking to Your Doctor", href: "/living-with-osteoporosis/talking-to-your-doctor" },
    ],
  },
  {
    label: "Fragility Fractures",
    href: "/fragility-fractures",
    children: [
      { label: "Types of Fragility Fractures", href: "/fragility-fractures/types" },
      { label: "Hip Fractures", href: "/fragility-fractures/hip-fractures" },
      { label: "Vertebral Fractures", href: "/fragility-fractures/vertebral-fractures" },
      { label: "Wrist Fractures", href: "/fragility-fractures/wrist-fractures" },
      { label: "After a Fracture: What Next?", href: "/fragility-fractures/after-a-fracture" },
      { label: "Secondary Fracture Prevention", href: "/fragility-fractures/secondary-fracture-prevention" },
    ],
  },
  {
    label: "Resources & Support",
    href: "/resources",
    children: [],
  },
  {
    label: "Blog",
    href: "/blog",
    children: [],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm border-b border-[#e0e0e0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[#434343] font-bold text-lg md:text-xl shrink-0"
            aria-label="FragilityFracture.ie — Home"
          >
            <span className="bg-[#E7D549] text-[#434343] rounded-lg px-2 py-1 text-sm font-bold tracking-tight">FF</span>
            <span className="hidden sm:inline">FragilityFracture<span className="text-[#c8a800]">.ie</span></span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-[#555555] hover:text-[#434343] hover:bg-[#F9F9F9] transition-colors"
                  aria-expanded={openDropdown === item.href}
                >
                  {item.label}
                  {item.children.length > 0 && <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />}
                </Link>
                {item.children.length > 0 && openDropdown === item.href && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-[#e0e0e0] py-2 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[#555555] hover:bg-[#F9F9F9] hover:text-[#434343] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile button */}
          <div className="flex items-center gap-3">
            <Link
              href="/am-i-at-risk"
              className="hidden md:inline-flex items-center gap-2 bg-[#E7D549] hover:bg-[#d4c43e] text-[#434343] font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Am I at Risk?
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-[#666666] hover:text-[#434343] hover:bg-[#F9F9F9] transition-colors"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-[#e0e0e0]">
          <nav aria-label="Mobile navigation" className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="flex-1 py-2 text-base font-semibold text-[#434343] hover:text-[#434343]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children.length > 0 && (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.href ? null : item.href)}
                      className="p-2 text-[#888888]"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileExpanded === item.href ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {item.children.length > 0 && mobileExpanded === item.href && (
                  <div className="pl-4 space-y-1 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-[#666666] hover:text-[#434343]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-[#e0e0e0]">
              <Link
                href="/am-i-at-risk"
                className="block w-full text-center bg-[#E7D549] hover:bg-[#d4c43e] text-[#434343] font-semibold px-4 py-3 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Am I at Risk?
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
