import { MetadataRoute } from "next";
import { getAllPostMeta } from "@/lib/posts";

const baseUrl = "https://fragilityfracture.ie";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    // About Osteoporosis
    { url: "/about-osteoporosis", priority: 0.9, changeFrequency: "monthly" },
    { url: "/about-osteoporosis/what-is-osteoporosis", priority: 0.9, changeFrequency: "monthly" },
    { url: "/about-osteoporosis/what-is-a-fragility-fracture", priority: 0.9, changeFrequency: "monthly" },
    { url: "/about-osteoporosis/osteopenia-vs-osteoporosis", priority: 0.8, changeFrequency: "monthly" },
    { url: "/about-osteoporosis/risk-factors", priority: 0.9, changeFrequency: "monthly" },
    { url: "/about-osteoporosis/osteoporosis-in-men", priority: 0.8, changeFrequency: "monthly" },
    // Bone Density & Testing
    { url: "/bone-density-testing", priority: 0.9, changeFrequency: "monthly" },
    { url: "/bone-density-testing/what-is-a-dxa-scan", priority: 0.9, changeFrequency: "monthly" },
    { url: "/bone-density-testing/understanding-your-results", priority: 0.9, changeFrequency: "monthly" },
    { url: "/bone-density-testing/how-to-get-tested-in-ireland", priority: 0.9, changeFrequency: "monthly" },
    { url: "/bone-density-testing/frax-fracture-risk-tool", priority: 0.8, changeFrequency: "monthly" },
    // Prevention
    { url: "/prevention", priority: 0.8, changeFrequency: "monthly" },
    { url: "/prevention/nutrition-and-calcium", priority: 0.8, changeFrequency: "monthly" },
    { url: "/prevention/vitamin-d", priority: 0.9, changeFrequency: "monthly" },
    { url: "/prevention/exercise", priority: 0.8, changeFrequency: "monthly" },
    { url: "/prevention/lifestyle", priority: 0.8, changeFrequency: "monthly" },
    { url: "/prevention/bone-health-at-every-age", priority: 0.7, changeFrequency: "monthly" },
    // Living With Osteoporosis
    { url: "/living-with-osteoporosis", priority: 0.8, changeFrequency: "monthly" },
    { url: "/living-with-osteoporosis/treatment-options", priority: 0.9, changeFrequency: "monthly" },
    { url: "/living-with-osteoporosis/falls-prevention", priority: 0.9, changeFrequency: "monthly" },
    { url: "/living-with-osteoporosis/recovery-and-rehabilitation", priority: 0.8, changeFrequency: "monthly" },
    { url: "/living-with-osteoporosis/mental-health-and-wellbeing", priority: 0.7, changeFrequency: "monthly" },
    { url: "/living-with-osteoporosis/talking-to-your-doctor", priority: 0.8, changeFrequency: "monthly" },
    // Fragility Fractures
    { url: "/fragility-fractures", priority: 0.8, changeFrequency: "monthly" },
    { url: "/fragility-fractures/types", priority: 0.8, changeFrequency: "monthly" },
    { url: "/fragility-fractures/hip-fractures", priority: 0.9, changeFrequency: "monthly" },
    { url: "/fragility-fractures/vertebral-fractures", priority: 0.8, changeFrequency: "monthly" },
    { url: "/fragility-fractures/wrist-fractures", priority: 0.8, changeFrequency: "monthly" },
    { url: "/fragility-fractures/after-a-fracture", priority: 0.8, changeFrequency: "monthly" },
    { url: "/fragility-fractures/secondary-fracture-prevention", priority: 0.8, changeFrequency: "monthly" },
    // Other
    { url: "/am-i-at-risk", priority: 0.9, changeFrequency: "monthly" },
    { url: "/resources", priority: 0.7, changeFrequency: "monthly" },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { url: "/contact", priority: 0.5, changeFrequency: "yearly" },
    { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { url: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
    { url: "/accessibility-statement", priority: 0.3, changeFrequency: "yearly" },
    { url: "/medical-disclaimer", priority: 0.4, changeFrequency: "yearly" },
  ] as const;

  const staticEntries = pages.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogEntries = getAllPostMeta().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
