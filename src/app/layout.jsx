import "./../styles/globals.css";

export const metadata = {
  title: "SOLYON Technologies – DeepTech de lujo",
  description: "Casa DeepTech de lujo: inteligencia cognitiva, sistemas autónomos y experiencias humanas elevadas.",
  openGraph: {
    title: "SOLYON Technologies",
    description: "DeepTech de lujo para empoderar a la comunidad latina. Arcanum, Nexus, Azoth, TruckBoss y más.",
    images: ["/og-cover.jpg"],
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://solyontechnologies.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLYON Technologies",
    description: "DeepTech de lujo: donde la tecnología se convierte en conciencia.",
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
        {/* HEADER GLOBAL */}
        <header className="section py-4 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#2A2A2A]">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="SOLYON"
              className="w-10 h-10 object-contain drop-shadow-xl"
            />
            <div>
              <div className="font-display text-xl md:text-2xl">
                <span className="gradient-gold">SOLYON</span> Technologies
              </div>
              <div className="text-xs text-gray-400">
                No buscamos cambiar el mundo, expandimos la forma de verlo.
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-gray-200">
            <a href="/" className="hover:text-white">Inicio</a>
            <a href="/ecosystem" className="hover:text-white">Ecosistema</a>
            <a href="/technology" className="hover:text-white">Tecnología</a>
            <a href="/impact" className="hover:text-white">Impacto</a>
            <a href="/about" className="hover:text-white">Nosotros</a>
            <a href="/store" className="hover:text-white">Store</a>
            <a href="/investors" className="hover:text-white">Investors</a>
            <a href="/contact" className="hover:text-white">Contacto</a>
          </nav>
        </header>

        {/* AQUÍ SE RENDERIZA CADA PÁGINA */}
        {children}
      </body>
    </html>
  );
}
