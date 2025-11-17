import "./../styles/globals.css";
import { LanguageProvider } from "@/lib/language";
import MainHeader from "@/components/MainHeader";

export const metadata = {
  title: "SOLYON Technologies – DeepTech de lujo",
  description:
    "Casa DeepTech de lujo: inteligencia cognitiva, sistemas autónomos y experiencias humanas elevadas.",
  openGraph: {
    title: "SOLYON Technologies",
    description:
      "DeepTech de lujo para empoderar a la comunidad latina. Arcanum, Nexus, Azoth, TruckBoss y más.",
    images: ["/og-cover.jpg"],
    type: "website",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://solyontechnologies.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLYON Technologies",
    description:
      "DeepTech de lujo: donde la tecnología se convierte en conciencia.",
    images: ["/og-cover.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Script Wompi se mantiene igual */}
        <script src="https://checkout.wompi.co/widget.js" async></script>

        {/* Fuentes originales */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-gray-100 antialiased">
        {/* CONTEXTO DE IDIOMA GLOBAL (ES / EN + autodetección) */}
        <LanguageProvider>
          {/* HEADER GLOBAL CON BANDERAS (reemplaza al header inline anterior) */}
          <MainHeader />

          {/* AQUÍ SE RENDERIZA CADA PÁGINA */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
