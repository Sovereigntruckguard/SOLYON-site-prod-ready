"use client";

const PROJECTS = [
  {
    id: "arcanum",
    name: "Arcanum",
    logo: "/logos/arcanum.svg",
    role: "Cerebro cognitivo",
    tagline: "Memoria fractal, anti-alucinación y autoaprendizaje.",
    description:
      "Motor cognitivo propietario que entiende contexto profundo, reduce al mínimo las alucinaciones y aprende de cada interacción. Es la base de la inteligencia de todo el ecosistema.",
    audience: "Empresas, gobiernos, proyectos DeepTech.",
    monetization: "Licenciamiento de motor, pilots a medida, consultoría cognitiva."
  },
  {
    id: "nexus",
    name: "Nexus",
    logo: "/logos/nexus.svg",
    role: "Sistema nervioso",
    tagline: "Orquestador del ecosistema y nervio operacional.",
    description:
      "Coordina agentes, datos y flujos en tiempo real. Conecta Arcanum con cada app y proceso de negocio, garantizando coherencia y trazabilidad.",
    audience: "Equipos de operaciones, CTOs, integradores.",
    monetization: "Suscripciones B2B, implementación de flujos y automatización."
  },
  {
    id: "azoth",
    name: "Azoth",
    logo: "/logos/azoth.svg",
    role: "CRM soberano",
    tagline: "Operación, ventas y servicio postventa de lujo.",
    description:
      "CRM diseñado para agencias y empresas que necesitan control total de datos, procesos de ventas, soporte y cumplimiento sin depender de plataformas externas.",
    audience: "Agencias, empresas de servicios, brokers.",
    monetization: "SaaS por usuario, set-up fees y módulos avanzados."
  },
  {
    id: "truckboss",
    name: "TruckBoss",
    logo: "/logos/truckboss.svg",
    role: "App para camioneros",
    tagline: "Cotizador, comunidad y PRO para camioneros latinos.",
    description:
      "Aplicación premium para camioneros en EE.UU. con cotizador inteligente, gestión de pólizas, comunidad y herramientas PRO para tomar mejores decisiones financieras.",
    audience: "Propietarios-operadores, pequeñas flotas, despachos.",
    monetization: "Suscripción PRO, servicios de valor agregado y referidos."
  },
  {
    id: "sovereign-truckguard",
    name: "Sovereign TruckGuard LLC",
    logo: "/logos/sovereign-truckguard.svg",
    role: "Agencia de seguros de lujo",
    tagline: "Protección total para transporte en EE.UU.",
    description:
      "Agencia de seguros de lujo para transporte comercial, construida sobre Azoth, TruckBoss y Arcanum para ofrecer cotizaciones precisas, servicio humano y experiencia premium.",
    audience: "Propietarios de camión, pequeñas y medianas flotas.",
    monetization: "Comisión de pólizas, fees de servicio y productos complementarios."
  },
  {
    id: "elvia",
    name: "EL-VIA DOT Express",
    logo: "/logos/elvia-dot-express.svg",
    role: "Educación y cumplimiento",
    tagline: "Inglés + cumplimiento DOT para camioneros latinos.",
    description:
      "Plataforma educativa que traduce el mundo regulatorio y el idioma del sistema a un lenguaje claro, práctico y accionable para camioneros hispanos.",
    audience: "Camioneros latinos, despachos, academias de conducción.",
    monetization: "Cursos, membresías y alianzas con escuelas / empresas."
  },
  {
    id: "vita",
    name: "Vita",
    logo: "/logos/vita.svg",
    role: "Transformación integral",
    tagline: "Hábitos, energía, foco y productividad.",
    description:
      "Sistema de transformación personal que combina ciencia del comportamiento, espiritualidad práctica e IA para acompañar procesos de cambio profundo.",
    audience: "Emprendedores, líderes, personas en procesos de cambio.",
    monetization: "Suscripción freemium/PRO, programas guiados y licencias B2B."
  },
  {
    id: "foundation",
    name: "SOLYON Foundation",
    logo: "/logos/solyon-foundation.png",
    role: "Impacto y becas",
    tagline: "Educación, investigación y becas de alto impacto para LATAM.",
    description:
      "Brazo de impacto social del ecosistema. Conecta recursos, becas y programas de investigación con talento que, de otra forma, quedaría por fuera de la revolución DeepTech.",
    audience: "Estudiantes, investigadores, comunidades vulnerables.",
    monetization: "Grants, donaciones recurrentes, alianzas con fundaciones."
  }
];

function ProjectLogo({ logo, name }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-14 w-14 rounded-2xl bg-[#111111] border border-[#2A2A2A] flex items-center justify-center overflow-hidden">
        <img
          src={logo}
          alt={name}
          className="h-10 w-10 object-contain"
          onError={(e) => {
            // Fallback simple si falta el logo
            e.currentTarget.style.display = "none";
            const parent = e.currentTarget.parentElement;
            if (parent && !parent.querySelector("span")) {
              const span = document.createElement("span");
              span.textContent = name.charAt(0);
              span.className =
                "text-[#FFD700] font-bold text-xl flex items-center justify-center w-full h-full";
              parent.appendChild(span);
            }
          }}
        />
      </div>
      <div>
        <p className="font-display text-lg gradient-gold">{name}</p>
        <p className="text-[0.8rem] text-gray-400">{/* rol se pinta fuera */}</p>
      </div>
    </div>
  );
}

export default function EcosystemPage() {
  return (
    <main className="space-y-24 pb-24">
      {/* HERO ECOSISTEMA */}
      <section className="section space-y-8 text-center">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl gradient-gold">
            Ecosistema SOLYON
          </h1>
          <p className="text-gray-200 text-lg">
            Un único ecosistema cognitivo que conecta DeepTech, seguros,
            logística, educación y transformación humana en una arquitectura
            viva y soberana.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Lo que ves aquí no son “proyectos sueltos”, sino piezas de un mismo
            sistema: Arcanum como cerebro, Nexus como sistema nervioso y una
            red de aplicaciones soberanas que convierten la tecnología en
            negocio, impacto y legado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-sm text-gray-200">
          <div className="card p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Alcance
            </p>
            <p className="mt-1 text-lg font-semibold">
              +10.000 vidas a impactar
            </p>
            <p className="mt-1 text-gray-300 text-sm">
              Entre camioneros, founders, estudiantes y equipos que usarán las
              herramientas SOLYON en los próximos años.
            </p>
          </div>
          <div className="card p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Profundidad
            </p>
            <p className="mt-1 text-lg font-semibold">
              8 módulos interconectados
            </p>
            <p className="mt-1 text-gray-300 text-sm">
              Desde el motor cognitivo y el orquestador, hasta apps de negocio
              y una foundation de impacto social.
            </p>
          </div>
          <div className="card p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Monetización
            </p>
            <p className="mt-1 text-lg font-semibold">
              Múltiples fuentes de ingreso
            </p>
            <p className="mt-1 text-gray-300 text-sm">
              Licenciamiento, SaaS, comisiones, suscripciones PRO, programas
              educativos y grants.
            </p>
          </div>
        </div>
      </section>

      {/* GRID DE PROYECTOS */}
      <section className="section space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Mapa del ecosistema
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Cada módulo tiene un rol claro dentro del sistema y un modelo de
            monetización asociado. Juntos, crean una máquina de valor para
            usuarios, aliados e inversionistas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article key={project.id} className="card p-6 flex flex-col">
              <ProjectLogo logo={project.logo} name={project.name} />
              <p className="text-xs uppercase tracking-[0.2em] text-[#FFD700]/80 mb-1">
                {project.role}
              </p>
              <p className="text-gray-300 text-sm mb-2">{project.tagline}</p>
              <p className="text-gray-300 text-sm flex-1">
                {project.description}
              </p>
              <div className="mt-4 space-y-1 text-[0.75rem] text-gray-400">
                <p>
                  <span className="font-semibold text-gray-200">
                    Para quién:
                  </span>{" "}
                  {project.audience}
                </p>
                <p>
                  <span className="font-semibold text-gray-200">
                    Monetización:
                  </span>{" "}
                  {project.monetization}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CAPAS DEL SISTEMA */}
      <section className="section space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Cómo se conectan las piezas
          </h2>
        <p className="text-gray-300 text-sm md:text-base">
            SOLYON está diseñado como un sistema en capas. Esta arquitectura es
            lo que nos permite escalar a nuevos sectores sin perder control ni
            propósito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
          <div className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Capa 1 · Inteligencia
            </p>
            <h3 className="font-display text-xl gradient-gold">Núcleo cognitivo</h3>
            <p className="text-gray-300">
              Arcanum y Nexus forman el cerebro y el sistema nervioso del
              ecosistema. Aquí viven la memoria fractal, la anti-alucinación y
              la orquestación multi-agente.
            </p>
          </div>
          <div className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Capa 2 · Negocio y operación
            </p>
            <h3 className="font-display text-xl gradient-gold">
              Herramientas de negocio
            </h3>
            <p className="text-gray-300">
              Azoth, TruckBoss y Sovereign TruckGuard transforman industrias
              concretas (seguros, logística, transporte) mediante tecnología
              soberana y servicios de lujo.
            </p>
          </div>
          <div className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Capa 3 · Personas e impacto
            </p>
            <h3 className="font-display text-xl gradient-gold">
              Educación & transformación
            </h3>
            <p className="text-gray-300">
              EL-VIA, Vita y SOLYON Foundation llevan la tecnología al terreno
              humano: idioma, hábitos, formación y becas para quienes históricamente
              quedaron por fuera.
            </p>
          </div>
        </div>
      </section>

      {/* MODELOS DE INGRESO */}
      <section className="section space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Modelos de ingreso del ecosistema
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Más que un producto único, SOLYON es una matriz de ingresos
            complementarios que se refuerzan entre sí. Esto nos permite
            construir un negocio sostenible y con fuerte upside para aliados.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-200">
          <div className="card p-5 space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              DeepTech
            </p>
            <h3 className="font-display text-lg gradient-gold">
              Licencias & pilotos
            </h3>
            <p className="text-gray-300">
              Licenciamiento de Arcanum y Nexus, pilotos a medida y consultorías
              para empresas y gobiernos.
            </p>
          </div>
          <div className="card p-5 space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              B2B & B2C
            </p>
            <h3 className="font-display text-lg gradient-gold">SaaS & PRO</h3>
            <p className="text-gray-300">
              Suscripciones a Azoth, TruckBoss PRO y Vita, con capas freemium y
              módulos avanzados.
            </p>
          </div>
          <div className="card p-5 space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Servicios
            </p>
            <h3 className="font-display text-lg gradient-gold">
              Comisiones & fees
            </h3>
            <p className="text-gray-300">
              Ingresos por pólizas de Sovereign TruckGuard, servicios de
              consultoría y fees de implementación.
            </p>
          </div>
          <div className="card p-5 space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Impacto
            </p>
            <h3 className="font-display text-lg gradient-gold">
              Grants & donaciones
            </h3>
            <p className="text-gray-300">
              Grants, becas y donaciones canalizadas a través de SOLYON
              Foundation y el laboratorio.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL: CÓMO SUMARTE */}
      <section className="section space-y-8 text-center">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Cómo puedes entrar al ecosistema
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Tanto si eres camionero, founder, inversionista o parte de una
            institución, hay una puerta de entrada clara para ti.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-4 md:gap-6">
          <a
            href="/#acceso"
            className="btn px-8 py-3 text-sm md:text-base"
          >
            Comprar Kit Digital
          </a>
          <a
            href="/#circulo-interno"
            className="px-8 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            Unirme al círculo interno
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_DONATE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#111111] border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center justify-center gap-1"
          >
            Apoyar el ecosistema
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.65rem] text-black">
              ♥
            </span>
          </a>
          <a
            href="/#alianzas"
            className="px-8 py-3 rounded-full bg-[#111111] border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors"
          >
            Explorar alianzas &amp; grants
          </a>
        </div>

        <p className="text-[0.8rem] text-gray-500 max-w-3xl mx-auto">
          SOLYON es un ecosistema construido desde la calle hacia el DeepTech.
          Si este mapa resuena contigo, hay un lugar para ti dentro de este
          universo.
        </p>
      </section>
    </main>
  );
}
