import { getInsights } from "@/lib/insights";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const routes = [
    "",
    "/truck-risk-os",
    "/sovereign-truckguard",
    "/solyon-move",
    "/evidence",
    "/technology",
    "/company",
    "/insights",
    "/investors",
    "/contact",
    "/privacy",
  ];
  const lastModified = new Date("2026-07-30T00:00:00.000Z");
  const pages = routes.flatMap((route) =>
    ["en", "es"].map((locale) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified,
      changeFrequency:
        route === "" || route === "/insights" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/privacy" ? 0.3 : 0.75,
      alternates: {
        languages: {
          en: `${SITE_URL}/en${route}`,
          es: `${SITE_URL}/es${route}`,
        },
      },
    })),
  );
  const enInsights = getInsights("en");
  const esInsights = getInsights("es");
  const articles = enInsights.flatMap((article, index) => {
    const spanish = esInsights[index];
    return [
      {
        url: `${SITE_URL}/en/insights/${article.slug}`,
        lastModified: new Date(`${article.date}T00:00:00.000Z`),
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: {
          languages: {
            en: `${SITE_URL}/en/insights/${article.slug}`,
            es: `${SITE_URL}/es/insights/${spanish.slug}`,
          },
        },
      },
      {
        url: `${SITE_URL}/es/insights/${spanish.slug}`,
        lastModified: new Date(`${spanish.date}T00:00:00.000Z`),
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: {
          languages: {
            en: `${SITE_URL}/en/insights/${article.slug}`,
            es: `${SITE_URL}/es/insights/${spanish.slug}`,
          },
        },
      },
    ];
  });

  return [...pages, ...articles];
}
