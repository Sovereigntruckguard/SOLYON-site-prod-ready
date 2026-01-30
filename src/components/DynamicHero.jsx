import Link from "next/link";

export default function DynamicHero() {
  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero/hero-solyon.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 flex items-center min-h-[88vh]">
        <div className="w-full text-center">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/70">
            Laboratorio Tecnológico • Medellín, Colombia
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            SOLYON Technologies
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Construimos sistemas de IA aplicada y plataformas operativas para el ecosistema camionero en EE. UU.
            y soluciones de movilidad para ciudad con socios institucionales.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ecosystem"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition"
            >
              Explorar Ecosistema
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium border border-white/30 text-white hover:bg-white/10 transition"
            >
              Contacto Institucional
            </Link>
          </div>

          <p className="mt-10 text-sm text-white/55 max-w-4xl mx-auto">
            SOLYON distribuye y aplica tecnología en EE. UU. a través de Sovereign TruckGuard LLC.
            SOLYON Move impulsa soluciones de movilidad e inclusión urbana con aliados públicos y privados.
          </p>
        </div>
      </div>
    </section>
  );
}
