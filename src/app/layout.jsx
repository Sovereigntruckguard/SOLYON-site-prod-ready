import "./../styles/globals.css";
import { LanguageProvider } from "@/lib/language";
import MainHeader from "@/components/MainHeader";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.solyontechnologies.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SOLYON Technologies | Applied AI for complex operations",
    template: "%s | SOLYON Technologies",
  },
  description:
    "Technology company and applied AI laboratory based in Medellin, building operating systems for complex, regulated and high-friction environments.",
  keywords: [
    "SOLYON Technologies",
    "applied artificial intelligence",
    "deep technology Colombia",
    "operating systems",
    "commercial trucking technology",
    "risk intelligence",
    "accessible mobility",
    "Medellin technology company",
  ],
  openGraph: {
    title: "SOLYON Technologies | Applied AI for complex operations",
    description:
      "We transform operational evidence into applied AI systems for trucking risk, insurance operations and accessible mobility.",
    url: SITE_URL,
    siteName: "SOLYON Technologies",
    type: "website",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "SOLYON Technologies",
      },
    ],
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLYON Technologies | Applied AI for complex operations",
    description:
      "Applied AI, operational intelligence and technology built from real-world evidence.",
    images: ["/og-cover.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/",
      "en-US": "/?lang=en",
    },
  },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SOLYON Technologies S.A.S.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Technology company and applied AI laboratory based in Medellin, Colombia.",
    foundingLocation: {
      "@type": "Place",
      name: "Medellin, Colombia",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellin",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    email: "sergio@solyontechnologies.com",
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="bg-[#07090c] text-gray-100 antialiased">
        <LanguageProvider>
          <MainHeader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
