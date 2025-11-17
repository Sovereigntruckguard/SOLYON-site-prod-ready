"use client";

import { useLanguage } from "@/lib/language";

const PROJECTS_ES = [
  {
    id: "arcanum",
    name: "Arcanum",
    logo: "/logos/arcanum.svg",
    role: "Cerebro cognitivo",
    tagline: "Memoria fractal, anti-alucinación y autoaprendizaje.",
    description:
      "Motor cognitivo propietario que entiende contexto profundo, reduce al mínimo las alucinaciones y aprende de cada interacción. Es la base de la inteligencia de todo el ecosistema.",
    audience: "Empresas, gobiernos, proyectos DeepTech.",
    monetization:
      "Licenciamiento de motor, pilots a medida, consultoría cognitiva.",
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
    monetization:
      "Suscripciones B2B, implementación de flujos y automatización.",
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
    monetization: "SaaS por usuario, set-up fees y módulos avanzados.",
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
    monetization:
      "Suscripción PRO, servicios de valor agregado y referidos.",
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
    monetization:
      "Comisión de pólizas, fees de servicio y productos complementarios.",
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
    monetization: "Cursos, membresías y alianzas con escuelas / empresas.",
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
    monetization:
      "Suscripción freemium/PRO, programas guiados y licencias B2B.",
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
    monetization: "Grants, donaciones recurrentes, alianzas con fundaciones.",
  },
];

const PROJECTS_EN = [
  {
    id: "arcanum",
    name: "Arcanum",
    logo: "/logos/arcanum.svg",
    role: "Cognitive brain",
    tagline: "Fractal memory, anti-hallucination and self-learning.",
    description:
      "Proprietary cognitive engine that understands deep context, minimizes hallucinations and learns from every interaction. It is the intelligence core of the entire ecosystem.",
    audience: "Companies, governments, DeepTech projects.",
    monetization:
      "Engine licensing, bespoke pilots, cognitive consulting.",
  },
  {
    id: "nexus",
    name: "Nexus",
    logo: "/logos/nexus.svg",
    role: "Nervous system",
    tagline: "Ecosystem orchestrator and operational nerve.",
    description:
      "Coordinates agents, data and flows in real time. Connects Arcanum with every app and business process, ensuring coherence and traceability.",
    audience: "Operations teams, CTOs, integrators.",
    monetization:
      "B2B subscriptions, flow implementation and automation.",
  },
  {
    id: "azoth",
    name: "Azoth",
    logo: "/logos/azoth.svg",
    role: "Sovereign CRM",
    tagline: "Operations, sales and luxury after-sales service.",
    description:
      "CRM designed for agencies and companies that need full control over data, sales processes, support and compliance without depending on external platforms.",
    audience: "Agencies, service companies, brokers.",
    monetization: "Per-user SaaS, set-up fees and advanced modules.",
  },
  {
    id: "truckboss",
    name: "TruckBoss",
    logo: "/logos/truckboss.svg",
    role: "App for truckers",
    tagline: "Quoting, community and PRO tools for Latino truckers.",
    description:
      "Premium app for truckers in the U.S. with an intelligent quoting engine, policy management, community and PRO tools to make better financial decisions.",
    audience: "Owner-operators, small fleets, dispatchers.",
    monetization:
      "PRO subscription, value-added services and referrals.",
  },
  {
    id: "sovereign-truckguard",
    name: "Sovereign TruckGuard LLC",
    logo: "/logos/sovereign-truckguard.svg",
    role: "Luxury insurance agency",
    tagline: "Full protection for transport in the U.S.",
    description:
      "Luxury insurance agency for commercial transport, built on Azoth, TruckBoss and Arcanum to deliver precise quotes, human service and a premium experience.",
    audience: "Truck owners, small and mid-sized fleets.",
    monetization:
      "Policy commissions, service fees and complementary products.",
  },
  {
    id: "elvia",
    name: "EL-VIA DOT Express",
    logo: "/logos/elvia-dot-express.svg",
    role: "Education & compliance",
    tagline: "English + DOT compliance for Latino truckers.",
    description:
      "Educational platform that translates the regulatory world and system language into clear, practical and actionable content for Spanish-speaking truckers.",
    audience: "Latino truckers, dispatchers, driving schools.",
    monetization: "Courses, memberships and partnerships with schools/companies.",
  },
  {
    id: "vita",
    name: "Vita",
    logo: "/logos/vita.svg",
    role: "Integral transformation",
    tagline: "Habits, energy, focus and productivity.",
    description:
      "Personal transformation system combining behavioral science, practical spirituality and AI to accompany deep change processes.",
    audience: "Entrepreneurs, leaders, people in transformation.",
    monetization:
      "Freemium/PRO subscription, guided programs and B2B licenses.",
  },
  {
    id: "foundation",
    name: "SOLYON Foundation",
    logo: "/logos/solyon-foundation.png",
    role: "Impact & scholarships",
    tagline: "Education, research and high-impact scholarships for LATAM.",
    description:
      "Social impact arm of the ecosystem. Connects resources, scholarships and research programs with talent that would otherwise be left out of the DeepTech revolution.",
    audience: "Students, researchers, vulnerable communities.",
    monetization: "Grants, recurring donations, partnerships with foundations.",
  },
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
        <p className="text-[0.8rem] text-gray-400">{/* rol se muestra fuera */}</p>
      </div>
    </div>
  );
}

export default function EcosystemPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? TEXT_ES : TEXT_EN;
  const projects = lang === "es" ? PROJECTS_ES : PROJECTS_EN;
  const transportId = lang === "es" ? "transporte" : "transport";

  return (
    <main className="space-y-24 pb-24">
      {/* HERO ECOSISTEMA */}
      <section className="section mt-10 md:mt-16 space-y-8 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl gradient-gold">
            {t.hero.title}
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            {t.hero.subtitle}
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {t.hero.body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-sm text-gray-200">
          <div className="card p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              {t.hero.stats[0].label}
            </p>
            <p className="mt-1 text-lg font-semibold">
              {t.hero.stats[0].value}
            </p>
            <p className="mt-1 text-gray-300 text-sm">
              {t.hero.stats[0].desc}
            </p>
          </div>
          <div className="card p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              {t.hero.stats[1].label}
            </p>
            <p className="mt-1 text-lg font-semibold">
              {t.hero.stats[1].value}
            </p>
            <p className="mt-1 text-gray-300 text-sm">
              {t.hero.stats[1].desc}
            </p>
          </div>
          <div className="card p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              {t.hero.stats[2].label}
            </p>
            <p className="mt-1 text-lg font-semibold">
              {t.hero.stats[2].value}
            </p>
            <p className="mt-1 text-gray-300 text-sm">
              {t.hero.stats[2].desc}
            </p>
          </div>
        </div>
      </section>

      {/* GRID DE PROYECTOS (ANCLA TRANSPORTE/TRANSPORT) */}
      <section className="section space-y-8" id={transportId}>
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            {t.map.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.map.body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
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
                    {t.map.labels.for}{" "}
                  </span>
                  {project.audience}
                </p>
                <p>
                  <span className="font-semibold text-gray-200">
                    {t.map.labels.monetization}{" "}
                  </span>
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
            {t.layers.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.layers.body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
          {t.layers.cards.map((card) => (
            <div key={card.title} className="card p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                {card.kicker}
              </p>
              <h3 className="font-display text-xl gradient-gold">
                {card.title}
              </h3>
              <p className="text-gray-300">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIAGRAMA DEL ECOSISTEMA */}
      <section className="section space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            {t.diagram.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.diagram.body}
          </p>
        </div>

        <div className="card p-6 md:p-8 space-y-6 text-sm text-gray-200">
          {/* Fila 1 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <div className="px-4 py-2 rounded-full bg-[#111111] border border-[#FFD700]/60">
              <span className="font-display text-sm gradient-gold">
                {t.diagram.row1.left}
              </span>
            </div>
            <span className="hidden md:inline text-[#FFD700] text-lg">➜</span>
            <div className="px-4 py-2 rounded-full bg-[#111111] border border-[#ffb6f0]/60">
              <span className="font-display text-sm gradient-gold">
                {t.diagram.row1.right}
              </span>
            </div>
          </div>

          {/* Fila 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
              {t.diagram.row2.label}
            </span>
            {t.diagram.row2.items.map((item) => (
              <div
                key={item}
                className="px-3 py-1 rounded-full bg-[#151515] border border-[#FFD700]/40"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Fila 3 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
              {t.diagram.row3.label}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {t.diagram.row3.items.map((item) => (
              <div
                key={item}
                className="px-3 py-1 rounded-full bg-[#151515] border border-[#ffb6f0]/40"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELOS DE INGRESO */}
      <section className="section space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            {t.revenue.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.revenue.body}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-200">
          {t.revenue.cards.map((card) => (
            <div key={card.title} className="card p-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                {card.kicker}
              </p>
              <h3 className="font-display text-lg gradient-gold">
                {card.title}
              </h3>
              <p className="text-gray-300">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL: CÓMO SUMARTE */}
      <section className="section space-y-8 text-center">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            {t.cta.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.cta.body}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-4 md:gap-6">
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn px-8 py-3 text-sm md:text-base"
          >
            {t.cta.buttons.kit}
          </a>
          <a
            href="/circle"
            className="px-8 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            {t.cta.buttons.circle}
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_DONATE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#111111] border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center justify-center gap-1"
          >
            {t.cta.buttons.donate}
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.65rem] text-black">
              ♥
            </span>
          </a>
          <a
            href="/alliances"
            className="px-8 py-3 rounded-full bg-[#111111] border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors"
          >
            {t.cta.buttons.alliances}
          </a>
        </div>

        <p className="text-[0.8rem] text-gray-500 max-w-3xl mx-auto">
          {t.cta.footer}
        </p>
      </section>
    </main>
  );
}

/* =========================
   TEXTOS ES / EN
   ========================= */

const TEXT_ES = {
  hero: {
    title: "Ecosistema SOLYON",
    subtitle:
      "Un único ecosistema cognitivo que conecta DeepTech, seguros, logística, educación y transformación humana en una arquitectura viva y soberana.",
    body:
      "Lo que ves aquí no son “proyectos sueltos”, sino piezas de un mismo sistema: Arcanum como cerebro, Nexus como sistema nervioso y una red de aplicaciones soberanas que convierten la tecnología en negocio, impacto y legado.",
    stats: [
      {
        label: "Alcance",
        value: "+10.000 vidas a impactar",
        desc:
          "Entre camioneros, founders, estudiantes y equipos que usarán las herramientas SOLYON en los próximos años.",
      },
      {
        label: "Profundidad",
        value: "8 módulos interconectados",
        desc:
          "Desde el motor cognitivo y el orquestador, hasta apps de negocio y una foundation de impacto social.",
      },
      {
        label: "Monetización",
        value: "Múltiples fuentes de ingreso",
        desc:
          "Licenciamiento, SaaS, comisiones, suscripciones PRO, programas educativos y grants.",
      },
    ],
  },
  map: {
    title: "Mapa del ecosistema",
    body:
      "Cada módulo tiene un rol claro dentro del sistema y un modelo de monetización asociado. Juntos, crean una máquina de valor para usuarios, aliados e inversionistas.",
    labels: {
      for: "Para quién:",
      monetization: "Monetización:",
    },
  },
  layers: {
    title: "Cómo se conectan las piezas",
    body:
      "SOLYON está diseñado como un sistema en capas. Esta arquitectura es lo que nos permite escalar a nuevos sectores sin perder control ni propósito.",
    cards: [
      {
        kicker: "Capa 1 · Inteligencia",
        title: "Núcleo cognitivo",
        body:
          "Arcanum y Nexus forman el cerebro y el sistema nervioso del ecosistema. Aquí viven la memoria fractal, la anti-alucinación y la orquestación multi-agente.",
      },
      {
        kicker: "Capa 2 · Negocio y operación",
        title: "Herramientas de negocio",
        body:
          "Azoth, TruckBoss y Sovereign TruckGuard transforman industrias concretas (seguros, logística, transporte) mediante tecnología soberana y servicios de lujo.",
      },
      {
        kicker: "Capa 3 · Personas e impacto",
        title: "Educación & transformación",
        body:
          "EL-VIA, Vita y SOLYON Foundation llevan la tecnología al terreno humano: idioma, hábitos, formación y becas para quienes históricamente quedaron por fuera.",
      },
    ],
  },
  diagram: {
    title: "Diagrama del ecosistema SOLYON",
    body:
      "Una vista simplificada de cómo fluye la inteligencia dentro del ecosistema: desde el núcleo cognitivo hasta las aplicaciones que tocan la vida real de las personas.",
    row1: {
      left: "Arcanum · Motor cognitivo",
      right: "Nexus · Orquestador",
    },
    row2: {
      label: "Capa de negocio",
      items: ["Azoth CRM", "TruckBoss", "Sovereign TruckGuard"],
    },
    row3: {
      label: "Capa humana & social",
      items: ["EL-VIA DOT Express", "Vita", "SOLYON Foundation"],
    },
  },
  revenue: {
    title: "Modelos de ingreso del ecosistema",
    body:
      "Más que un producto único, SOLYON es una matriz de ingresos complementarios que se refuerzan entre sí. Esto nos permite construir un negocio sostenible y con fuerte upside para aliados.",
    cards: [
      {
        kicker: "DeepTech",
        title: "Licencias & pilots",
        body:
          "Licenciamiento de Arcanum y Nexus, pilotos a medida y consultorías para empresas y gobiernos.",
      },
      {
        kicker: "B2B & B2C",
        title: "SaaS & PRO",
        body:
          "Suscripciones a Azoth, TruckBoss PRO y Vita, con capas freemium y módulos avanzados.",
      },
      {
        kicker: "Servicios",
        title: "Comisiones & fees",
        body:
          "Ingresos por pólizas de Sovereign TruckGuard, servicios de consultoría y fees de implementación.",
      },
      {
        kicker: "Impacto",
        title: "Grants & donaciones",
        body:
          "Grants, becas y donaciones canalizadas a través de SOLYON Foundation y el laboratorio.",
      },
    ],
  },
  cta: {
    title: "Cómo puedes entrar al ecosistema",
    body:
      "Tanto si eres camionero, founder, inversionista o parte de una institución, hay una puerta de entrada clara para ti.",
    buttons: {
      kit: "Comprar Kit Digital",
      circle: "Unirme al Círculo Interno",
      donate: "Apoyar el ecosistema",
      alliances: "Explorar alianzas & grants",
    },
    footer:
      "SOLYON es un ecosistema construido desde la calle hacia el DeepTech. Si este mapa resuena contigo, hay un lugar para ti dentro de este universo.",
  },
};

const TEXT_EN = {
  hero: {
    title: "SOLYON ecosystem",
    subtitle:
      "A single cognitive ecosystem that connects DeepTech, insurance, logistics, education and human transformation in a living, sovereign architecture.",
    body:
      "What you see here are not “isolated projects”, but pieces of the same system: Arcanum as the brain, Nexus as the nervous system and a network of sovereign applications that turn technology into business, impact and legacy.",
    stats: [
      {
        label: "Reach",
        value: "+10,000 lives to impact",
        desc:
          "Truckers, founders, students and teams that will use SOLYON tools in the coming years.",
      },
      {
        label: "Depth",
        value: "8 interconnected modules",
        desc:
          "From the cognitive engine and orchestrator to business apps and a social impact foundation.",
      },
      {
        label: "Monetization",
        value: "Multiple revenue sources",
        desc:
          "Licensing, SaaS, commissions, PRO subscriptions, educational programs and grants.",
      },
    ],
  },
  map: {
    title: "Ecosystem map",
    body:
      "Each module has a clear role within the system and an associated monetization model. Together, they create a value engine for users, partners and investors.",
    labels: {
      for: "For:",
      monetization: "Monetization:",
    },
  },
  layers: {
    title: "How the pieces connect",
    body:
      "SOLYON is designed as a layered system. This architecture allows us to scale into new sectors without losing control or purpose.",
    cards: [
      {
        kicker: "Layer 1 · Intelligence",
        title: "Cognitive core",
        body:
          "Arcanum and Nexus form the brain and nervous system of the ecosystem. Fractal memory, anti-hallucination and multi-agent orchestration live here.",
      },
      {
        kicker: "Layer 2 · Business & operations",
        title: "Business tools",
        body:
          "Azoth, TruckBoss and Sovereign TruckGuard transform concrete industries (insurance, logistics, transport) through sovereign technology and luxury services.",
      },
      {
        kicker: "Layer 3 · People & impact",
        title: "Education & transformation",
        body:
          "EL-VIA, Vita and the SOLYON Foundation bring technology to the human layer: language, habits, learning and scholarships for those historically left out.",
      },
    ],
  },
  diagram: {
    title: "SOLYON ecosystem diagram",
    body:
      "A simplified view of how intelligence flows through the ecosystem: from the cognitive core to the applications that touch real lives.",
    row1: {
      left: "Arcanum · Cognitive engine",
      right: "Nexus · Orchestrator",
    },
    row2: {
      label: "Business layer",
      items: ["Azoth CRM", "TruckBoss", "Sovereign TruckGuard"],
    },
    row3: {
      label: "Human & social layer",
      items: ["EL-VIA DOT Express", "Vita", "SOLYON Foundation"],
    },
  },
  revenue: {
    title: "Ecosystem revenue models",
    body:
      "More than a single product, SOLYON is a matrix of complementary revenue streams that reinforce each other. This allows us to build a sustainable business with strong upside for partners.",
    cards: [
      {
        kicker: "DeepTech",
        title: "Licenses & pilots",
        body:
          "Licensing Arcanum and Nexus, bespoke pilots and consulting for companies and governments.",
      },
      {
        kicker: "B2B & B2C",
        title: "SaaS & PRO",
        body:
          "Subscriptions to Azoth, TruckBoss PRO and Vita, with freemium tiers and advanced modules.",
      },
      {
        kicker: "Services",
        title: "Commissions & fees",
        body:
          "Revenue from Sovereign TruckGuard policies, consulting services and implementation fees.",
      },
      {
        kicker: "Impact",
        title: "Grants & donations",
        body:
          "Grants, scholarships and donations channeled through SOLYON Foundation and the lab.",
      },
    ],
  },
  cta: {
    title: "How you can enter the ecosystem",
    body:
      "Whether you are a trucker, founder, investor or institution, there is a clear entry door for you.",
    buttons: {
      kit: "Buy Digital Kit",
      circle: "Join the Inner Circle",
      donate: "Support the ecosystem",
      alliances: "Explore alliances & grants",
    },
    footer:
      "SOLYON is an ecosystem built from the street towards DeepTech. If this map resonates with you, there is a place for you inside this universe.",
  },
};
