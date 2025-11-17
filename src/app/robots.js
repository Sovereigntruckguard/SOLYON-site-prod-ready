// src/app/robots.js

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.solyontechnologies.com";

/**
 * Robots de Next.js (App Router)
 * Documentación: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/api/*"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
