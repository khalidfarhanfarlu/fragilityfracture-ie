import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#434343] text-[#bbbbbb]">
      {/* Medical disclaimer strip */}
      <div className="bg-[#2d2d2d] border-b border-[#555555]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-sm text-[#bbbbbb] text-center">
            <strong className="text-white">Medical Disclaimer:</strong> The information on this site is for educational
            purposes only and does not constitute medical advice. Always consult your doctor or qualified healthcare
            provider.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white font-bold text-lg"
              aria-label="FragilityFracture.ie — Home"
            >
              <span className="bg-[#E7D549] text-[#434343] rounded-lg px-2 py-1 text-sm font-bold">FF</span>
              FragilityFracture<span className="text-[#E7D549]">.ie</span>
            </Link>
            <div className="mt-3 mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#777777] mb-2">Supported By</p>
              <Image
                src="/athena-pharm-logo-white.png"
                alt="Athena Pharma"
                width={120}
                height={40}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-sm text-[#999999] leading-relaxed">
              Ireland&apos;s plain-language guide to osteoporosis, bone density, and fragility fractures.
            </p>
            <p className="text-xs text-[#888888] mt-3">Last site review: February 2026</p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">About Osteoporosis</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-osteoporosis/what-is-osteoporosis" className="hover:text-[#E7D549] transition-colors">What Is Osteoporosis?</Link></li>
              <li><Link href="/about-osteoporosis/what-is-a-fragility-fracture" className="hover:text-[#E7D549] transition-colors">What Is a Fragility Fracture?</Link></li>
              <li><Link href="/about-osteoporosis/osteopenia-vs-osteoporosis" className="hover:text-[#E7D549] transition-colors">Osteopenia vs Osteoporosis</Link></li>
              <li><Link href="/about-osteoporosis/risk-factors" className="hover:text-[#E7D549] transition-colors">Risk Factors</Link></li>
              <li><Link href="/bone-density-testing/what-is-a-dxa-scan" className="hover:text-[#E7D549] transition-colors">What Is a DXA Scan?</Link></li>
              <li><Link href="/bone-density-testing/understanding-your-results" className="hover:text-[#E7D549] transition-colors">Understanding Your Results</Link></li>
            </ul>
          </div>

          {/* Prevention & Living */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Prevention & Living</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/prevention/nutrition-and-calcium" className="hover:text-[#E7D549] transition-colors">Nutrition & Calcium</Link></li>
              <li><Link href="/prevention/vitamin-d" className="hover:text-[#E7D549] transition-colors">Vitamin D</Link></li>
              <li><Link href="/prevention/exercise" className="hover:text-[#E7D549] transition-colors">Exercise & Activity</Link></li>
              <li><Link href="/living-with-osteoporosis/treatment-options" className="hover:text-[#E7D549] transition-colors">Treatment Options</Link></li>
              <li><Link href="/living-with-osteoporosis/falls-prevention" className="hover:text-[#E7D549] transition-colors">Falls Prevention</Link></li>
              <li><Link href="/fragility-fractures/after-a-fracture" className="hover:text-[#E7D549] transition-colors">After a Fracture</Link></li>
            </ul>
          </div>

          {/* Site */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Site</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources" className="hover:text-[#E7D549] transition-colors">Resources & Support</Link></li>
              <li><Link href="/blog" className="hover:text-[#E7D549] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#E7D549] transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#E7D549] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-[#E7D549] transition-colors">Cookie Policy</Link></li>
              <li><Link href="/accessibility-statement" className="hover:text-[#E7D549] transition-colors">Accessibility Statement</Link></li>
              <li><Link href="/medical-disclaimer" className="hover:text-[#E7D549] transition-colors">Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#555555] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#888888]">
            &copy; {currentYear} FragilityFracture.ie — All content is for general educational information only.
          </p>
          <p className="text-xs text-[#888888]">
            Not a substitute for professional medical advice. Always consult your doctor.
          </p>
        </div>
      </div>
    </footer>
  );
}
