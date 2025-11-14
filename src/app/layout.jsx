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
      <body className="bg-[#181818] text-white">
        {/* HEADER FIJO */}
        <header className="sticky top-0 z-40 border-b border-[#2A2A2A] bg-[#181818]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
            {/* LOGO IZQUIERDA, MÁS GRANDE */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/logo.png"
                alt="SOLYON"
                className="w-10 h-10 object-contain drop-shadow-lg"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl tracking-[0.2em] text-[#F2B45C]">
                  SOLYON
                </span>
                <span className="text-sm text-gray-300 tracking-[0.2em] uppercase">
                  Technologies
                </span>
              </span>
            </Link>

            {/* NAVEGACIÓN DESKTOP */}
            <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-200">
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

            {/* BOTONES DERECHA */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/store" className="btn text-sm px-5 py-2">
                Comprar Kit
              </Link>
              <Link
                href="/investors"
                className="text-sm px-5 py-2 rounded-2xl border border-[#FFD700]/70 bg-[#2D2D2D] text-[#FFD700]"
              >
                Alianzas &amp; Grants
              </Link>
            </div>

            {/* BOTÓN MENÚ MÓVIL (placeholder simple) */}
            <div className="flex lg:hidden">
              <span className="text-xs text-gray-300 uppercase tracking-[0.2em]">
                MENU
              </span>
            </div>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        {children}
      </body>
    </html>
  );
}
