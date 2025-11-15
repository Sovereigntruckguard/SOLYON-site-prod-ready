"use client";

export default function InvestorsPage() {
  return (
    <main className="space-y-24 pb-24">
      {/* HERO INVESTORS */}
      <section className="section mt-10 md:mt-16 space-y-10 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texto principal */}
          <div className="space-y-5">
            <h1 className="font-display text-4xl md:text-5xl gradient-gold">
              Investors &amp; Strategic Partners
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              SOLYON está construyendo un ecosistema DeepTech soberano que
              combina IP propia, productos reales y una narrativa de impacto
              social clara. Este es un llamado para aliados que quieran estar
              en la mesa desde el inicio.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              No somos una promesa vacía. Somos una casa DeepTech en ejecución,
              diseñada desde LATAM para el mundo, con una visión de largo plazo
              y una estructura lista para escalar.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="/contact"
                className="btn px-7 py-3 text-sm md:text-base"
              >
                Agendar reunión con el fundador
              </a>
              <a
                href="/docs/solyon-investor-brief.pdf"
                className="px-7 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
              >
                Descargar Investment Brief (PDF)
              </a>
            </div>
          </div>

          {/* Visual minimal, sin caja fea */}
          <div className="relative flex items-center justify-center md:justify-end">
            <div className="relative h-56 w-56">
              {/* halo externo */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_65%)]" />
              {/* anillos */}
              <div className="absolute inset-3 rounded-full border border-[#ffb6f0]/40" />
              <div className="absolute inset-9 rounded-full border border-[#FFD700]/55" />
              <div className="absolute inset-[40%] rounded-full bg-gradient-to-br from-[#ffb6f0] via-[#ffd700] to-[#ff9ecf] blur-sm opacity-90" />
              {/* texto dentro */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <p className="font-display text-sm gradient-gold">
                  IP · Productos · Impacto
                </p>
                <p className="text-[0.7rem] text-gray-300 mt-1">
                  Arquitectura cognitiva propia, ecosistema de productos y una
                  historia social que solo puede nacer en LATAM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESIS DE INVERSIÓN */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            Tesis de inversión
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            SOLYON se construye sobre tres pilares: IP propia, enfoque en
            problemas reales de LATAM y un modelo de negocio multiplataforma
            con margen alto y potencial global.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-200 mt-4">
            <div>
              <h3 className="font-display text-base gradient-gold">
                IP &amp; Arquitectura
              </h3>
              <p className="mt-1 text-gray-300">
                Motor cognitivo (Arcanum) con memoria fractal y
                anti-alucinación, orquestador multi-agente (Nexus) y una
                arquitectura propietaria en proceso de Patent Pending.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base gradient-gold">
                Mercado &amp; Timing
              </h3>
              <p className="mt-1 text-gray-300">
                Ola de adopción de IA en sectores de alto margen (seguros,
                transporte, educación, salud mental), con un vacío claro de
                soluciones pensadas para LATAM y sus contextos.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base gradient-gold">
                Modelo de negocio
              </h3>
              <p className="mt-1 text-gray-300">
                Ecosistema de productos: SaaS B2B y B2C, consultoría
                estratégica, membresías y un brazo de impacto (Foundation) que
                abre puertas a grants y fondos de impacto social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ AHORA? */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            ¿Por qué ahora?
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            El mundo está entrando en una era donde la IA será la infraestructura
            central de la economía. Las regiones que no construyan sus propios
            sistemas quedarán atrapadas en modelos importados que no reflejan su
            realidad ni sus valores.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-200 mt-4">
            <div>
              <h3 className="font-display text-base gradient-gold">
                LATAM en el mapa
              </h3>
              <p className="mt-1 text-gray-300">
                650M+ personas, alto talento, alta adopción tecnológica, pero
                infraestructura cognitiva dominada por actores externos.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base gradient-gold">
                Ventana de oportunidad
              </h3>
              <p className="mt-1 text-gray-300">
                La ventana para construir arquitecturas soberanas de IA se está
                cerrando. SOLYON ya empezó desde 2025.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base gradient-gold">
                Tracción temprana
              </h3>
              <p className="mt-1 text-gray-300">
                Desarrollo avanzado de Arcanum &amp; Nexus, lanzamiento de
                productos como TruckBoss y Vita, invitación a Premios Cinco
                Días y procesos en marcha ante MinCiencias y SIC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARQUITECTURA QUE CREA VALOR */}
      <section className="section space-y-8 text-center">
        <div className="space-y-3 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Arquitectura que crea valor
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            SOLYON no es una sola app, sino una arquitectura cognitiva con un
            motor de pensamiento (Arcanum), un orquestador (Nexus) y una red de
            apps verticales listas para el mercado.
          </p>
        </div>

        <div className="max-w-5xl mx-auto card p-8">
          <div className="grid md:grid-cols-3 gap-6 items-start text-left text-gray-200 text-sm">
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                Arcanum · Motor cognitivo
              </h3>
              <p>
                Memoria fractal jerárquica, capa anti-alucinación, capacidad de
                aprender de interacciones reales. Diseñado para operar 24/7 en
                nubes modernas como Azure.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                Nexus · Orquestador
              </h3>
              <p>
                Coordina agentes, flujos y productos. Convierte insights de
                Arcanum en workflows concretos para seguros, logística,
                educación, hábitos y más.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                Apps &amp; Ecosistema
              </h3>
              <p>
                Azoth, TruckBoss, Sovereign TruckGuard, EL-VIA, Vita, SOLYON
                Foundation y nuevos módulos conectados a la misma base
                cognitiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IP & PROTECCIÓN */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            IP &amp; protección
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Nuestra apuesta central es la propiedad intelectual: tecnologías,
            metodologías y arquitecturas que nos diferencian y protegen en el
            largo plazo.
          </p>
          <ul className="text-sm text-gray-200 space-y-2 list-disc list-inside mt-2">
            <li>
              Arquitectura de memoria fractal jerárquica para modelos
              lingüísticos y sistemas cognitivos.
            </li>
            <li>
              Método de anti-alucinación y validación contextual en tiempo real.
            </li>
            <li>
              Diseño de orquestadores multi-agente para ecosistemas
              empresariales (Nexus).
            </li>
            <li>
              Protección en proceso:{" "}
              <span className="text-[#FFD700] font-semibold">Patent Pending</span>{" "}
              en jurisdicciones clave.
            </li>
          </ul>
        </div>
      </section>

      {/* TRACCIÓN & VALIDACIÓN */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            Tracción &amp; validación temprana
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            En pocos meses, SOLYON ha logrado hitos que para muchas empresas
            toman años. Esto es lo que ya está en pie:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-200 mt-4">
            <div>
              <h3 className="font-display text-base gradient-gold">
                Productos en marcha
              </h3>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Arcanum (motor cognitivo en desarrollo avanzado).</li>
                <li>TruckBoss (MVP funcional para camioneros en EE.UU.).</li>
                <li>Vita (plataforma de transformación personal en pruebas).</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-base gradient-gold">
                Estructura y ecosistema
              </h3>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Cámara de Comercio y estructura legal en orden.</li>
                <li>
                  Procesos activos con MinCiencias y SIC para registro de
                  innovación.
                </li>
                <li>
                  Tienda digital activa con Kit Digital, membresías y productos
                  de acceso temprano.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-base gradient-gold">
                Reconocimiento &amp; visibilidad
              </h3>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>
                  Invitación a la ceremonia de los Premios Cinco Días como
                  propuesta innovadora.
                </li>
                <li>
                  Acercamientos con actores clave del sector tecnológico como
                  Apple, Intel y otros.
                </li>
                <li>
                  Comunidad en crecimiento interesada en IA, transformación y
                  emprendimiento.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ESTRUCTURA DE INVERSIÓN */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            Estructura de inversión &amp; uso de fondos
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Buscamos aliados que entiendan que construir un ecosistema de esta
            magnitud requiere visión, paciencia y ejecución constante.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-200 mt-4">
            <div>
              <h3 className="font-display text-base gradient-gold">
                Tickets &amp; términos
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Rango objetivo de tickets: <b>$50M – $500M COP</b> (ángeles,
                  micro VCs, fondos de impacto, corporate ventures).
                </li>
                <li>
                  Estructuras posibles: SAFE, equity directo, revenue-sharing
                  en productos específicos.
                </li>
                <li>
                  Derechos de información, participación en comité asesor y
                  acceso prioritario a nuevos productos.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-base gradient-gold">
                Uso estratégico de fondos
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Aceleración de desarrollo de Arcanum &amp; Nexus (equipo
                  técnico senior).
                </li>
                <li>
                  Go-to-market de TruckBoss, Azoth y Vita con campañas digitales
                  y alianzas estratégicas.
                </li>
                <li>
                  Fondo de becas y acompañamiento a comunidades objetivo a
                  través de SOLYON Foundation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section space-y-8 text-center">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Hablemos de construir el futuro
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Si eres inversionista, fondo o socio estratégico y ves en SOLYON la
            combinación correcta de IP, propósito y ejecución, queremos
            conversar contigo.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:alliances@solyontechnologies.com?subject=Inter%C3%A9s%20de%20inversi%C3%B3n%20en%20SOLYON"
            className="btn px-8 py-3 text-sm md:text-base"
          >
            Escribir al equipo de alianzas
          </a>
          <a
            href="/docs/solyon-investor-brief.pdf"
            className="px-8 py-3 rounded-full border border-[#FFD700] text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            Descargar Investment Brief
          </a>
          <a
            href="/store"
            className="px-8 py-3 rounded-full border border-[#2A2A2A] text-sm md:text-base text-gray-300 hover:bg-[#111111] transition-colors"
          >
            Explorar productos &amp; apoyar hoy
          </a>
        </div>

        <p className="text-[0.8rem] text-gray-500 max-w-3xl mx-auto">
          Creemos que las mejores alianzas se construyen cuando las historias se
          encuentran. Trae tu experiencia, tu capital y tu visión. Nosotros
          ponemos la tecnología, la ejecución y el propósito.
        </p>
      </section>
    </main>
  );
}
