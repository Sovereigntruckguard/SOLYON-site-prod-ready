import Link from "next/link";
import DonateButton from "./DonateButton";

export default function Hero() {
  return (
    <header className="section pt-24 pb-12">
      <div className="flex flex-col items-center text-center gap-6">
        {/* LOGO CENTRAL MÁS GRANDE */}
        <img
          src="/logo.png"
          alt="SOLYON"
          className="w-32 h-32 object-contain drop-shadow-[0_0_40px_rgba(255,215,0,0.35)]"
        />

        <h1 className="font-display text-5xl md:text-6xl leading-tight">
          <span className="gradient-gold">SOLYON Technologies</span>
        </h1>

        <p className="max-w-2xl text-gray-200 text-lg md:text-xl">
          En SOLYON no buscamos cambiar el mundo,{" "}
          <span className="gradient-gold">expandimos la forma de verlo.</span>{" "}
          Convertimos la tecnología en conciencia, el negocio en legado y la
          innovación en libertad.
        </p>

        {/* BLOQUE DE CTAs PRINCIPALES PARA MONETIZACIÓN */}
        <div className="flex flex-wrap gap-3 mt-4 justify-center">
          {/* 1. CTA MAIN: COMPRA DEL KIT (INGRESO DIRECTO) */}
          <Link href="/store" className="btn px-6 py-3 text-sm md:text-base">
            Comprar Kit Premium
          </Link>

          {/* 2. CTA SECUNDARIO: DESCUBRIR EL ECOSISTEMA (TOP OF FUNNEL) */}
          <Link
            href="/ecosystem"
            className="btn px-6 py-3 text-sm md:text-base"
            style={{
              background: "#2D2D2D",
              color: "#FFFFFF",
              border: "1px solid #3a3a3a"
            }}
          >
            Conocer ecosistema
          </Link>

          {/* 3. CTA MONETIZACIÓN DONACIONES */}
          <DonateButton />

          {/* 4. CTA HIGH-TICKET: ALIANZAS / INVESTORS */}
          <Link
            href="/investors"
            className="px-6 py-3 text-sm md:text-base rounded-2xl border border-[#FFD700] text-[#FFD700] hover:bg-[#2D2D2D]"
          >
            Alianzas &amp; Investors
          </Link>
        </div>
      </div>
    </header>
  );
}
