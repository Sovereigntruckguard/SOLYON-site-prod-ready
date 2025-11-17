// src/app/layout.jsx
import "./../styles/globals.css";
import { LanguageProvider } from "@/lib/language";
import MainHeader from "@/components/MainHeader";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.solyontechnologies.com";

/**
 * SEO global & social
 * Asegura:
 * - metadataBase (elimina warnings de Next)
 * - Open Graph / Twitter
 * - Canonical y alternates para ES/EN
 */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SOLYON Technologies – DeepTech de lujo desde LATAM",
  description:
    "Casa DeepTech soberana: Arcanum, Nexus y un ecosistema de aplicaciones de lujo que expanden la conciencia y transforman negocios reales.",
  keywords: [
    "SOLYON",
    "DeepTech",
    "inteligencia artificial",
    "Arcanum",
    "Nexus",
    "IA soberana",
    "ecosistema cognitivo",
    "LATAM",
    "tecnología de lujo",
  ],
  openGraph: {
    title: "SOLYON Technologies – DeepTech soberana desde LATAM",
    description:
      "Ecosistema cognitivo con Arcanum, Nexus y aplicaciones soberanas como TruckBoss, Azoth y Sovereign TruckGuard.",
    url: SITE_URL,
    siteName: "SOLYON Technologies",
    type: "website",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "SOLYON Technologies – DeepTech de lujo",
      },
    ],
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLYON Technologies – DeepTech de lujo",
    description:
      "Casa DeepTech soberana: inteligencia cognitiva, sistemas autónomos y experiencias humanas elevadas.",
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

/**
 * Layout raíz de la App
 */
export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SOLYON Technologies",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-solyon.svg`,
    description:
      "Casa DeepTech soberana que construye un ecosistema cognitivo de lujo desde LATAM para el mundo.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    sameAs: [
      // Agrega tus redes reales cuando las tengas:
      // "https://www.linkedin.com/company/XXXX",
      // "https://twitter.com/XXXX",
    ],
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
        {/* Schema.org para Organization (mejora presencia en Google) */}
        <script
          type="application/ld+json"
          // No uses hooks aquí; es server component
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="bg-black text-gray-100 antialiased">
        {/* CONTEXTO DE IDIOMA GLOBAL (ES / EN + autodetección en el cliente) */}
        <LanguageProvider>
          {/* HEADER GLOBAL CON NAV + SELECTOR ES/EN */}
          <MainHeader />

          {/* CONTENIDO DE CADA PÁGINA */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
