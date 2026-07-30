import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getCopy } from "@/lib/content";
import { isLocale, SITE_URL } from "@/lib/site";
import "@/styles/globals.css";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Solyon Technologies",
    template: "%s | Solyon Technologies",
  },
  description:
    "Risk intelligence infrastructure for commercial trucking, built in Medellín.",
  applicationName: "Solyon Technologies",
  authors: [{ name: "Solyon Technologies S.A.S." }],
  category: "technology",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "Solyon Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function LocaleLayout(props) {
  const params = await props.params;

  const {
    children
  } = props;

  const { locale } = params;
  if (!isLocale(locale)) notFound();

  const copy = getCopy(locale);
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Solyon Technologies S.A.S.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      locale === "es"
        ? "Infraestructura de inteligencia de riesgo e IA aplicada para trucking comercial, construida desde Medellín."
        : "Applied AI and risk intelligence infrastructure for commercial trucking, built in Medellín.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
  };

  return (
    <html
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      lang={locale}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
          type="application/ld+json"
        />
        <SiteHeader copy={copy} locale={locale} />
        <main id="main-content">{children}</main>
        <SiteFooter copy={copy} locale={locale} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
