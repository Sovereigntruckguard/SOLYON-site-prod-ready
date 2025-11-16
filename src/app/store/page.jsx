"use client";

export default function StorePage() {
  const kitUrl = process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#";
  const donateUrl = process.env.NEXT_PUBLIC_WOMPI_DONATE_URL || "#";
  const circleUrl = process.env.NEXT_PUBLIC_WOMPI_CIRCLE_URL || "#";
  const arcanumPreviewUrl =
    process.env.NEXT_PUBLIC_WOMPI_ARCANUM_PREVIEW_URL || "#";

  return (
    <main className="space-y-24 pb-24">
      {/* HERO STORE */}
      <section className="section mt-10 md:mt-16 space-y-10 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h1 className="font-display text-4xl md:text-5xl gradient-gold">
              Tienda &amp; Apoyo SOLYON
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Este no es un e-commerce más. Es el corazón de financiamiento de
              SOLYON: un lugar donde cada compra y cada aporte se convierten en
              tecnología soberana, comunidad y oportunidades reales.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Estamos lanzando la primera versión pública del ecosistema. Si
              estás aquí hoy, haces parte de la primera ola que impulsa Arcanum,
              Nexus, TruckBoss, EL-VIA, Vita y SOLYON Foundation.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href={kitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-7 py-3 text-sm md:text-base"
              >
                Comprar Kit Digital
              </a>
              <a
                href={donateUrl}
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

          {/* Visual “motor de valor” */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-60 w-60">
              <div className="absolute inset-0 rounded-full border border-[#ffb6f0]/40" />
              <div className="absolute inset-6 rounded-full border border-[#FFD700]/40" />
              <div className="absolute inset-16 rounded-full border border-[#FFD700]/20" />
              <div className="absolute inset-[38%] rounded-full bg-gradient-to-tr from-[#ffb6f0] via-[#ffd700] to-[#ff9ecf] blur-sm opacity-90" />
            </div>
            <div className="absolute text-center space-y-1">
              <p className="font-display text-xl gradient-gold">
                Motor de valor
              </p>
              <p className="text-xs text-gray-300 max-w-xs">
                Productos y experiencias diseñados para financiar el crecimiento
                de SOLYON y multiplicar tu impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DESTACADA: APOYO AL LABORATORIO */}
      <section className="section space-y-8" id="apoyo">
        <div className="card p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            Apoya el laboratorio SOLYON
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Estamos construyendo una arquitectura cognitiva soberana desde LATAM
            para el mundo. Para sostener el desarrollo de Arcanum, Nexus,
            TruckBoss, Vita y el resto del ecosistema, necesitamos aliados que
            crean en esta visión.
          </p>
          <p className="text-gray-400 text-sm">
            Tu aporte se convierte en horas de desarrollo, infraestructura,
            acompañamiento a personas y becas gestionadas por SOLYON Foundation.
          </p>

          <div className="mt-4 grid md:grid-cols-4 gap-4 text-sm text-gray-200">
            <div className="card p-3 flex flex-col justify-between">
              <p className="font-display text-sm gradient-gold">
                Aporte semilla
              </p>
              <p className="text-gray-300 mt-1">Desde $20.000 COP</p>
              <p className="text-[0.75rem] text-gray-400 mt-1">
                Para quienes quieren dar su primer paso apoyando la visión.
              </p>
            </div>
            <div className="card p-3 flex flex-col justify-between">
              <p className="font-display text-sm gradient-gold">
                Impulso fundador
              </p>
              <p className="text-gray-300 mt-1">Desde $50.000 COP</p>
              <p className="text-[0.75rem] text-gray-400 mt-1">
                Financia sprints clave de desarrollo y validación.
              </p>
            </div>
            <div className="card p-3 flex flex-col justify-between">
              <p className="font-display text-sm gradient-gold">
                Aporte visionario
              </p>
              <p className="text-gray-300 mt-1">Desde $100.000 COP</p>
              <p className="text-[0.75rem] text-gray-400 mt-1">
                Impulso directo para nuevos módulos de Arcanum, Nexus y
                aplicaciones de impacto.
              </p>
            </div>
            <div className="card p-3 flex flex-col justify-between">
              <p className="font-display text-sm gradient-gold">
                Patrocinio estratégico
              </p>
              <p className="text-gray-300 mt-1">Desde $200.000+ COP</p>
              <p className="text-[0.75rem] text-gray-400 mt-1">
                Para aliados que buscan generar impacto profundo y visibilidad
                conjunta.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col md:flex-row gap-3 items-center">
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full md:w-auto px-8 py-3 text-sm md:text-base"
            >
              Apoyar ahora con Wompi
            </a>
            <p className="text-[0.75rem] text-gray-500">
              En Wompi podrás elegir el monto y el medio de pago: tarjeta,
              transferencia, Nequi, efectivo o crédito.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTOS PRINCIPALES */}
      <section className="section space-y-10" id="productos">
        <div className="space-y-4 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Productos y experiencias SOLYON
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Seleccionamos cada producto como si fuera una pieza de alta joyería
            tecnológica: diseñado para generar retorno, impacto y pertenencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Producto: Kit Digital */}
          <article className="card p-6 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[#FFD700]">
                Producto principal
              </p>
              <h3 className="font-display text-2xl gradient-gold">
                SOLYON Kit Digital
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                La guía definitiva para diseñar un proyecto DeepTech con impacto
                real: mapas de arquitectura, frameworks, prompts, guiones de
                pitch y material listo para presentar ante clientes, aliados o
                inversionistas.
              </p>
              <p className="text-gray-100 mt-4 text-lg font-semibold">
                $99.000 COP · Pago único vía Wompi
              </p>
              <p className="text-[0.7rem] text-gray-400 mt-1">
                Precio de lanzamiento. Disponible así solo durante esta primera
                fase pública del ecosistema.
              </p>
            </div>
            <div className="mt-4">
              <a
                href={kitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full text-sm md:text-base"
              >
                Comprar Kit Digital
              </a>
            </div>
          </article>

          {/* Producto: Membresía Círculo Interno */}
          <article className="card p-6 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[#ffb6f0]">
                Membresía
              </p>
              <h3 className="font-display text-2xl gradient-gold">
                Círculo Interno SOLYON
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Acceso a la cocina del ecosistema: reuniones privadas, avances
                exclusivos, decisiones estratégicas, mentorías grupales y
                prioridad en nuevas oportunidades.
              </p>
              <p className="text-gray-100 mt-4 text-lg font-semibold">
                Aporte inicial sugerido: $50.000 COP
              </p>
              <p className="text-[0.7rem] text-gray-400 mt-1">
                Cupos limitados a{" "}
                <span className="text-[#FFD700] font-semibold">
                  50 personas
                </span>{" "}
                en esta primera cohorte.
              </p>
            </div>
            <div className="mt-4">
              <a
                href={circleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full text-sm md:text-base"
              >
                Unirme al Círculo Interno
              </a>
            </div>
          </article>

          {/* Producto: Arcanum Preview Pack */}
          <article className="card p-6 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[#FFD700]">
                Experiencia avanzada
              </p>
              <h3 className="font-display text-2xl gradient-gold">
                Arcanum Preview Pack
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Acceso temprano y exclusivo a la visión de Arcanum: demos
                guiadas, prompts avanzados, mapas conceptuales y una sesión de
                preguntas &amp; respuestas sobre la arquitectura cognitiva de
                SOLYON.
              </p>
              <p className="text-gray-100 mt-4 text-lg font-semibold">
                $120.000 COP · Acceso anticipado
              </p>
              <p className="text-[0.7rem] text-gray-400 mt-1">
                Disponible solo para la primera generación de{" "}
                <span className="text-[#FFD700] font-semibold">
                  25 visionarios
                </span>{" "}
                que quieran co-crear el futuro de Arcanum.
              </p>
            </div>
            <div className="mt-4">
              <a
                href={arcanumPreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full text-sm md:text-base"
              >
                Obtener acceso anticipado
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* META DE LANZAMIENTO */}
      <section className="section text-center space-y-3">
        <h3 className="font-display text-2xl gradient-gold">
          Meta de lanzamiento: $20.000.000 COP en 10 días
        </h3>
        <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
          Somos un equipo de dos personas construyendo un ecosistema DeepTech
          que nace desde LATAM para el mundo. Cada compra y cada aporte nos
          acerca a sostener el laboratorio, pagar servidores y seguir
          desarrollando Arcanum, Nexus, TruckBoss, EL-VIA, Vita y SOLYON
          Foundation.
        </p>
        <p className="text-gray-400 text-xs max-w-3xl mx-auto">
          Compartiremos reportes de avance y resultados con nuestra comunidad
          y con todas las personas y empresas que nos apoyen en esta primera
          ola de lanzamiento.
        </p>
      </section>

      {/* CIERRE ESTRATÉGICO */}
      <section className="section space-y-8 text-center" id="cerrar">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Monetiza tu visión, impulsa la nuestra
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Cada vez que compras un producto SOLYON o apoyas el laboratorio,
            estás financiando horas de desarrollo, investigación y
            acompañamiento humano. No eres un cliente más: eres parte del
            equipo.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={kitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn px-8 py-3 text-sm md:text-base"
          >
            Comprar Kit Digital
          </a>
          <a
            href={circleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            Unirme al Círculo Interno
          </a>
          <a
            href={donateUrl}
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
            href="/contact"
            className="px-8 py-3 rounded-full border border-[#2A2A2A] text-sm md:text-base text-gray-300 hover:bg-[#111111] transition-colors"
          >
            Hablar con el equipo SOLYON
          </a>
        </div>

        <p className="text-[0.8rem] text-gray-500 max-w-3xl mx-auto">
          Nuestro objetivo inmediato es sostener el laboratorio y demostrar que
          desde la calle de LATAM también se pueden construir sistemas que
          compiten con los mejores del mundo. Gracias por decidir ser parte de
          esta historia.
        </p>
      </section>
    </main>
  );
}
