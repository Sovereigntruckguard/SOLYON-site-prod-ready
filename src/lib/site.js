export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.solyontechnologies.com";

export const LOCALES = ["en", "es"];
export const DEFAULT_LOCALE = "en";

export const routeMap = {
  home: "",
  os: "/truck-risk-os",
  sovereign: "/sovereign-truckguard",
  move: "/solyon-move",
  evidence: "/evidence",
  technology: "/technology",
  company: "/company",
  insights: "/insights",
  investors: "/investors",
  contact: "/contact",
  privacy: "/privacy",
};

export function isLocale(value) {
  return LOCALES.includes(value);
}

export function localizedPath(locale, path = "") {
  return `/${locale}${path}`;
}

export function absoluteUrl(locale, path = "") {
  return `${SITE_URL}${localizedPath(locale, path)}`;
}

export function alternateLanguages(path = "") {
  return {
    "en-US": localizedPath("en", path),
    "es-CO": localizedPath("es", path),
    "x-default": localizedPath(DEFAULT_LOCALE, path),
  };
}
export function pageMetadata(locale, path, title, description) {
  const canonical = localizedPath(locale, path);
  const isSpanish = locale === "es";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: alternateLanguages(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(locale, path),
      siteName: "Solyon Technologies",
      locale: isSpanish ? "es_CO" : "en_US",
      alternateLocale: isSpanish ? ["en_US"] : ["es_CO"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
