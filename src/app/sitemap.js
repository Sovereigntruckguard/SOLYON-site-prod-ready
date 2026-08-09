const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.solyontechnologies.com";

export default function sitemap() {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/solyon-move", priority: 0.9, changeFrequency: "monthly" },
    { path: "/technology", priority: 0.85, changeFrequency: "monthly" },
    { path: "/ecosystem", priority: 0.85, changeFrequency: "monthly" },
    { path: "/impact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.75, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
