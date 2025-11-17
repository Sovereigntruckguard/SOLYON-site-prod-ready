// src/app/sitemap.js

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.solyontechnologies.com";

/**
 * Sitemap nativo de Next.js (App Router)
 * Documentación: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap() {
  const routes = [
    "",
    "/ecosystem",
    "/technology",
    "/impact",
    "/about",
    "/store",
    "/investors",
    "/contact",
    "/press",
    "/legal",
    "/thankyou",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changefreq: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.7,
  }));
}
