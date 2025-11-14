import "./../styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "SOLYON Technologies – DeepTech de lujo",
  description:
    "SOLYON es una casa DeepTech de lujo: inteligencia cognitiva, sistemas autónomos y experiencias humanas elevadas.",
  openGraph: {
    title: "SOLYON Technologies",
    description:
      "DeepTech de lujo para empoderar a la comunidad latina. Arcanum, Nexus, Azoth, TruckBoss y más.",
    images: ["/og-cover.jpg"],
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://solyontechnologies.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLYON Technologies",
    description:
      "DeepTech de lujo: donde la tecnología se convierte en conciencia.",
    images: ["/og-cover.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script src="https://checkout.wompi.co/widget.js" async></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* HEADER FIJO */}
        <header className="sticky top-0 z-40 border-b border-[#2A2A2A] bg-[#181818]/85 backdrop-blur">
          <div className="section flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="SOLYON"
                className="w-8 h-8 object-contain"
              />
              <span className="font-display text-lg text-white">
                <span className="gradient-gold">SOLYON</span>{" "}
                <span className="text-gray-200">Technologies</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
              <Link href="/ecosystem" className="hover:text-white">
                Ecosistema
              </Link>
              <Link href="/technology" className="hover:text-white">
                Tecnología
              </Link>
              <Link href="/impact" className="hover:text-white">
                Impacto
              </Link>
              <Link href="/about" className="hover:text-white">
                Acerca de
              </Link>
              <Link href="/press" className="hover:text-white">
                Prensa
              </Link>
              <Link href="/store" className="hover:text-white">
                Tienda
              </Link>
              <Link href="/investors" className="hover:text-white">
                Investors
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contacto
              </Link>
            </nav>

            <div className="hidden md:flex gap-2">
              <Link href="/store" className="btn text-sm">
                Comprar Kit
              </Link>
              <Link
                href="/investors"
                className="btn text-sm"
                style={{ background: "#2D2D2D", color: "#FFFFFF", border: "1px solid #3a3a3a" }}
              >
                Alianzas & Grants
              </Link>
            </div>
          </div>
        </header>

        {/* CONTENIDO */}
        {children}
      </body>
    </html>
  );
}
