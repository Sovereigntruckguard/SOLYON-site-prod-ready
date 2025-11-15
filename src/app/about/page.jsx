"use client";

export default function AboutPage() {
  return (
    <main className="space-y-24 pb-24">
      {/* HERO ACERCA DE SOLYON */}
      <section className="section mt-10 md:mt-16 space-y-10 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h1 className="font-display text-4xl md:text-5xl gradient-gold">
              Acerca de SOLYON
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              SOLYON Technologies es una casa DeepTech de lujo creada para
              diseñar inteligencia cognitiva soberana, con raíces en LATAM y
              visión global.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              No buscamos cambiar el mundo. Buscamos expandir la forma de verlo:
              que más personas, empresas y comunidades tengan acceso a
              tecnología de alto nivel sin perder su identidad, su libertad ni
              su propósito.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="/contact"
                className="btn px-7 py-3 text-sm md:text-base"
              >
                Solicitar demo empresarial
              </a>
              <a
                href={process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
              >
                Comprar Kit Digital
              </a>
              <a
                href={process.env.NEXT_PUBLIC_WOMPI_DONATE_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center gap-2"
              >
                Apoyar el laboratorio
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.7rem] text-black">
                  ♥
                </span>
              </a>
            </div>
          </div>

          {/* Visual simple: anillos de propósito */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-56 w-56">
              <div className="absolute inset-0 rounded-full border border-[#FFD700]/40" />
              <div className="absolute inset-6 rounded-full border border-[#ffb6f0]/40" />
              <div className="absolute inset-12 rounded-full border border-[#FFD700]/20" />
              <div className="absolute inset-[40%] rounded-full bg-gradient-to-br from-[#ffb6f0] to-[#FFD700] blur-sm opacity-80" />
            </div>
            <div className="absolute text-center space-y-1">
              <p class patented="font-display text-xl gradient-gold">Casa DeepTech</p>
              <p className="text-xs text-gray-300 max-w-xs">
                Donde la ciencia cognitiva, la calle y el lujo se encuentran
                para construir sistemas que cuidan a las personas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGEN Y PROPÓSITO */}
      <section className="section space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-3 text-left">
            <h2 className="font-display text-2xl gradient-gold">Origen</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              SOLYON nace de la experiencia de vida de su fundador, que convirtió
              adversidad, calle y resiliencia en una arquitectura tecnológica al
              servicio de quienes no tuvieron un camino fácil.
            </p>
            <p className="text-gray-400 text-sm">
              De un joven que vio de cerca la violencia y la escasez, a una
              visión de mundo donde la tecnología no es un lujo para pocos, sino
              una herramienta de supervivencia y expansión para muchos.
            </p>
          </div>

          <div className="card p-6 space-y-3 text-left">
            <h2 className="font-display text-2xl gradient-gold">Propósito</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Empoderar a la comunidad latina y a los creadores independientes
              con tecnología soberana, ayudándoles a construir empresas de alto
              rendimiento y vidas con propósito.
            </p>
            <p className="text-gray-400 text-sm">
              Creemos que el talento está distribuido por igual, pero las
              oportunidades no. Nuestra misión es cerrar esa brecha usando IA,
              diseño y acompañamiento humano.
            </p>
          </div>
        </div>
      </section>

      {/* FUNDADORES */}
      <section className="section space-y-8">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Fundadores de SOLYON
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Detrás de la tecnología hay personas que decidieron apostarlo todo
            por una idea y por la gente a la que sirve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Sergio */}
          <div className="card p-6 space-y-4 text-left">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#ffb6f0] to-[#ffd700] flex items-center justify-center text-[#050505] font-bold text-xl">
                S
              </div>
              <div>
                <h3 className="font-display text-xl gradient-gold">
                  Sergio Andrés Murillo
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Fundador · Arquitecto Cognitivo & CEO
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              De la calle al DeepTech. Sergio es un ex peleador, líder de barra
              y emprendedor que decidió transformar su historia de adversidad en
              una misión: demostrar que la tecnología de élite también puede
              nacer desde los barrios de LATAM.
            </p>
            <p className="text-gray-400 text-sm">
              Su visión mezcla disciplina, calle, ciencia de datos y una
              obsesión por construir sistemas que cuiden a quienes casi nadie
              está mirando.
            </p>
          </div>

          {/* Elizabeth */}
          <div className="card p-6 space-y-4 text-left">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#ffb6f0] to-[#ffd700] flex items-center justify-center text-[#050505] font-bold text-xl">
                E
              </div>
              <div>
                <h3 className="font-display text-xl gradient-gold">
                  Elizabeth Tamayo Londoño
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Cofundadora · Operaciones & Impacto
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Elizabeth es la columna vertebral operativa de SOLYON. Con una
              historia de resiliencia propia, ha sostenido y empujado el
              proyecto cuando no había recursos, solo fe y determinación.
            </p>
            <p className="text-gray-400 text-sm">
              Su liderazgo combina cuidado profundo por las personas, visión
              estratégica y una capacidad única para convertir ideas complejas
              en procesos claros, equipos alineados y resultados medibles.
            </p>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA Y PRINCIPIOS */}
      <section className="section space-y-8">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Filosofía SOLYON
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            No construimos productos por construir. Diseñamos experiencias que
            honran a quienes confían en nosotros, desde un lugar de respeto y
            excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-lg gradient-gold">
              Soberanía primero
            </h3>
            <p className="text-gray-300">
              La tecnología debe servir a las personas y a los proyectos, no
              controlarlos. Diseñamos sistemas que ponen el poder en manos de
              quienes los usan.
            </p>
          </div>
          <div className="card pizz-6 text-left space-y-3">
            <h3 className="font-display text-lg gradient-gold">
              Lujo consciente
            </h3>
            <p className="text-gray-300">
              El lujo no es ostentación, es cuidado extremo por los detalles.
              Cada interfaz, cada experiencia y cada interacción se diseña con
              respeto, estética y utilidad.
            </p>
          </div>
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-lg gradient-gold">
              Coevolución humano · IA
            </h3>
            <p className="text-gray-300">
              No creemos en una IA que reemplace humanos, sino en una que les
              dé más claridad, mejores decisiones y una vida más plena.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS CON ALIADOS */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            Cómo trabajamos con empresas y aliados
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Construimos relaciones de largo plazo basadas en transparencia,
            evidencia y resultados. No vendemos promesas vacías, co-creamos
            soluciones reales.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-200 mt-2">
            <div>
              <h3 className="font-display text-base gradient-gold">
                Diagnóstico profundo
              </h3>
              <p className="mt-1 text-gray-300">
                Entendemos tu contexto, tus datos y tus procesos antes de
                proponer cualquier integración. La tecnología debe adaptarse a
                tu realidad, no al revés.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base gradient-gold">
                Co-diseño con tu equipo
              </h3>
              <p className="mt-1 text-gray-300">
                Diseñamos soluciones junto a tus líderes y equipos, para que la
                tecnología se viva como una herramienta propia, no como un
                sistema impuesto.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base gradient-gold">
                Impacto medible
              </h3>
              <p className="mt-1 text-gray-300">
                Establecemos métricas claras de impacto y las conectamos a tu
                realidad: menos fricción, más ingresos, más tiempo disponible,
                más personas beneficiadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section space-y-8 text-center">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            ¿Te ves construyendo el futuro con nosotros?
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Si algo en esta historia te resonó, probablemente no es casualidad.
            Puedes ser cliente, aliado, mentor, inversor o parte del equipo.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="btn px-8 py-3 text-sm md:text-base"
          >
            Hablar con el equipo
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            Comprar Kit Digital
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_DONATE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center gap-2"
          >
            Apoyar el laboratorio
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.7rem] text-black">
              ♥
            </span>
          </a>
          <a
            href="/circle"
            className="px-8 py-3 rounded-full border border-[#2A2A2A] text-sm md:text-base text-gray-300 hover:bg-[#111111] transition-colors"
          >
            Unirme al Círculo Interno
          </a>
        </div>

        <p className="text-[0.8rem] text-gray-500 max-w-3xl mx-auto">
          Esta página es una invitación abierta: a quienes sienten que su historia
          no encaja en los moldes tradicionales. En SOLYON creemos que justamente
          ahí nacen las ideas que cambian la percepción del mundo.
        </p>
      </section>
    </main>
  );
}
