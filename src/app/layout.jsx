import "./../styles/globals.css";
import { LanguageProvider } from "@/lib/language";
import MainHeader from "@/components/MainHeader";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.solyontechnologies.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SOLYON Technologies | DeepTech e IA aplicada desde Medellín",
    template: "%s | SOLYON Technologies",
  },
  description:
    "Compañía DeepTech y laboratorio de inteligencia artificial aplicada en Medellín. Construimos tecnología para riesgo, seguros de trucking, automatización y movilidad accesible.",
  applicationName: "SOLYON Technologies",
  category: "technology",
  keywords: [
    "SOLYON Technologies",
    "DeepTech Medellín",
    "inteligencia artificial Medellín",
    "startup DeepTech Colombia",
    "laboratorio de inteligencia artificial Colombia",
    "tecnología de seguros trucking",
    "truck insurance technology",
    "Latin truckers insurance technology",
    "risk intelligence",
    "operational intelligence",
    "SOLYON Move",
    "movilidad accesible Medellín",
    "tecnología accesibilidad Colombia",
    "Ruta N Toyota Mobility Foundation",
    "applied AI Latin America",
  ],
  authors: [{ name: "SOLYON Technologies S.A.S.", url: SITE_URL }],
  creator: "SOLYON Technologies S.A.S.",
  publisher: "SOLYON Technologies S.A.S.",
  openGraph: {
    title: "SOLYON Technologies | DeepTech e IA aplicada desde Medellín",
    description:
      "Transformamos conocimiento operativo y evidencia en sistemas de IA aplicada para riesgo, trucking, seguros y movilidad accesible.",
    url: SITE_URL,
    siteName: "SOLYON Technologies",
    type: "website",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "SOLYON Technologies, DeepTech e inteligencia artificial aplicada desde Medellín",
      },
    ],
    locale: "es_CO",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLYON Technologies | DeepTech desde Medellín",
    description:
      "IA aplicada para riesgo, seguros de trucking y movilidad accesible, construida desde evidencia operativa real.",
    images: ["/og-cover.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/",
      "en-US": "/?lang=en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const sameAs = [
    "https://www.linkedin.com/company/solyon-technologies/",
    "https://www.facebook.com/profile.php?id=61584609184819",
    "https://www.instagram.com/solyontechnologies/",
    "https://www.youtube.com/watch?v=0SyayXeU42g",
  ];

  const graphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "SOLYON Technologies S.A.S.",
        alternateName: "SOLYON Technologies",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/og-cover.jpg`,
        description:
          "DeepTech and applied artificial intelligence company based in Medellín, Colombia, building technology for risk, trucking insurance and accessible mobility.",
        foundingLocation: {
          "@type": "Place",
          name: "Medellín, Colombia",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Medellín",
          addressRegion: "Antioquia",
          addressCountry: "CO",
        },
        email: "sergio@solyontechnologies.com",
        sameAs,
        knowsAbout: [
          "Applied artificial intelligence",
          "Deep technology",
          "Risk intelligence",
          "Commercial trucking insurance technology",
          "Accessible mobility",
          "Operational automation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "SOLYON Technologies",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["es-CO", "en-US"],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/solyon-move/#software`,
        name: "SOLYON Move",
        applicationCategory: "TravelApplication",
        operatingSystem: "Android",
        description:
          "Accessible mobility technology developed in Medellín to support personalized and safer trip planning for people with reduced mobility.",
        creator: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/solyon-move`,
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }} />
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
