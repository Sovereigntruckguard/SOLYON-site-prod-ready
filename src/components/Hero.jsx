import Link from "next/link";

export default function Hero() {
  return (
    <header className="section pt-20 pb-10">
      <div className="flex flex-col items-center text-center gap-6">
        <img
          src="/logo.png"
          alt="SOLYON"
          className="w-24 h-24 object-contain drop-shadow-xl"
        />
        <h1 className="font-display text-4xl md:text-6xl leading-tight">
          <span className="gradient-gold">SOLYON Technologies</span>
        </h1>
        <p className="max-w-2xl text-gray-200 text-lg md:text-xl">
          En SOLYON no buscamos cambiar el mundo,{" "}
          <span className="gradient-gold">expandimos la forma de verlo.</span>
        </p>

        <div className="flex flex-wrap gap-3 mt-2 justify-center">
          {/* Ir a Ecosistema */}
          <Link href="/ecosystem" className="btn">
            Conocer ecosistema
          </Link>

          {/* Ir a Tecnología */}
          <Link
            href="/technology"
            className="btn"
            style={{
              background: "#2D2D2D",
              color: "#FFFFFF",
              border: "1px solid #3a3a3a"
            }}
          >
            Ver tecnología & IP
          </Link>

          {/* Ir directo a Tienda */}
          <Link
            href="/store"
            className="btn"
            style={{
              background: "linear-gradient(135deg,#FFD700,#E8A0B0)"
            }}
          >
            Monetiza hoy
          </Link>

          {/* Ir a Investors / Grants */}
          <Link
            href="/investors"
            className="btn"
            style={{
              background: "transparent",
              border: "1px solid #FFD700",
              color: "#FFD700"
            }}
          >
            Alianzas & Investors
          </Link>
        </div>
      </div>
    </header>
  );
}
