"use client";

import { useLanguage } from "@/lib/language";

export default function InvestorsPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? TEXT_ES : TEXT_EN;

  return (
    <main className="space-y-24 pb-24">
      {/* HERO INVESTORS */}
      <section className="section mt-10 md:mt-16 space-y-10 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texto principal */}
          <div className="space-y-5">
            <h1 className="font-display text-4xl md:text-5xl gradient-gold">
              {t.hero.title}
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              {t.hero.subtitle}
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {t.hero.body}
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="/contact"
                className="btn px-7 py-3 text-sm md:text-base"
              >
                {t.hero.buttons.meeting}
              </a>
              <a
                href="/docs/solyon-investor-brief.pdf"
                className="px-7 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
              >
                {t.hero.buttons.brief}
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
                  {t.hero.visual.title}
                </p>
                <p className="text-[0.7rem] text-gray-300 mt-1">
                  {t.hero.visual.body}
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
            {t.thesis.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.thesis.body}
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-200 mt-4">
            {t.thesis.blocks.map((block) => (
              <div key={block.title}>
                <h3 className="font-display text-base gradient-gold">
                  {block.title}
                </h3>
                <p className="mt-1 text-gray-300">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ AHORA? */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            {t.whyNow.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.whyNow.body}
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-200 mt-4">
            {t.whyNow.blocks.map((block) => (
              <div key={block.title}>
                <h3 className="font-display text-base gradient-gold">
                  {block.title}
                </h3>
                <p className="mt-1 text-gray-300">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARQUITECTURA QUE CREA VALOR */}
      <section className="section space-y-8 text-center">
        <div className="space-y-3 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            {t.arch.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.arch.body}
          </p>
        </div>

        <div className="max-w-5xl mx-auto card p-8">
          <div className="grid md:grid-cols-3 gap-6 items-start text-left text-gray-200 text-sm">
            {t.arch.blocks.map((block) => (
              <div key={block.title} className="space-y-2">
                <h3 className="font-display text-base gradient-gold">
                  {block.title}
                </h3>
                <p>{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP & PROTECCIÓN */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            {t.ip.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.ip.body}
          </p>
          <ul className="text-sm text-gray-200 space-y-2 list-disc list-inside mt-2">
            {t.ip.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRACCIÓN & VALIDACIÓN */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            {t.traction.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.traction.body}
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-200 mt-4">
            {t.traction.blocks.map((block) => (
              <div key={block.title}>
                <h3 className="font-display text-base gradient-gold">
                  {block.title}
                </h3>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRUCTURA DE INVERSIÓN */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            {t.structure.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.structure.body}
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-200 mt-4">
            {t.structure.blocks.map((block) => (
              <div key={block.title}>
                <h3 className="font-display text-base gradient-gold">
                  {block.title}
                </h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section space-y-8 text-center">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            {t.cta.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.cta.body}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={t.cta.buttons.mailto}
            className="btn px-8 py-3 text-sm md:text-base"
          >
            {t.cta.buttons.contact}
          </a>
          <a
            href="/docs/solyon-investor-brief.pdf"
            className="px-8 py-3 rounded-full border border-[#FFD700] text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            {t.cta.buttons.brief}
          </a>
          <a
            href="/store"
            className="px-8 py-3 rounded-full border border-[#2A2A2A] text-sm md:text-base text-gray-300 hover:bg-[#111111] transition-colors"
          >
            {t.cta.buttons.store}
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
    title: "Investors & Strategic Partners",
    subtitle:
      "SOLYON está construyendo un ecosistema DeepTech soberano que combina IP propia, productos reales y una narrativa de impacto social clara. Este es un llamado para aliados que quieran estar en la mesa desde el inicio.",
    body:
      "No somos una promesa vacía. Somos una casa DeepTech en ejecución, diseñada desde LATAM para el mundo, con una visión de largo plazo y una estructura lista para escalar.",
    buttons: {
      meeting: "Agendar reunión con el fundador",
      brief: "Descargar Investment Brief (PDF)",
    },
    visual: {
      title: "IP · Productos · Impacto",
      body:
        "Arquitectura cognitiva propia, ecosistema de productos y una historia social que solo puede nacer en LATAM.",
    },
  },
  thesis: {
    title: "Tesis de inversión",
    body:
      "SOLYON se construye sobre tres pilares: IP propia, enfoque en problemas reales de LATAM y un modelo de negocio multiplataforma con margen alto y potencial global.",
    blocks: [
      {
        title: "IP & Arquitectura",
        body:
          "Motor cognitivo (Arcanum) con memoria fractal y anti-alucinación, orquestador multi-agente (Nexus) y una arquitectura propietaria en proceso de Patent Pending.",
      },
      {
        title: "Mercado & Timing",
        body:
          "Ola de adopción de IA en sectores de alto margen (seguros, transporte, educación, salud mental), con un vacío claro de soluciones pensadas para LATAM y sus contextos.",
      },
      {
        title: "Modelo de negocio",
        body:
          "Ecosistema de productos: SaaS B2B y B2C, consultoría estratégica, membresías y un brazo de impacto (Foundation) que abre puertas a grants y fondos de impacto social.",
      },
    ],
  },
  whyNow: {
    title: "¿Por qué ahora?",
    body:
      "El mundo está entrando en una era donde la IA será la infraestructura central de la economía. Las regiones que no construyan sus propios sistemas quedarán atrapadas en modelos importados que no reflejan su realidad ni sus valores.",
    blocks: [
      {
        title: "LATAM en el mapa",
        body:
          "650M+ personas, alto talento, alta adopción tecnológica, pero infraestructura cognitiva dominada por actores externos.",
      },
      {
        title: "Ventana de oportunidad",
        body:
          "La ventana para construir arquitecturas soberanas de IA se está cerrando. SOLYON ya empezó desde 2025.",
      },
      {
        title: "Tracción temprana",
        body:
          "Desarrollo avanzado de Arcanum & Nexus, lanzamiento de productos como TruckBoss y Vita, invitación a Premios Cinco Días y procesos en marcha ante MinCiencias y SIC.",
      },
    ],
  },
  arch: {
    title: "Arquitectura que crea valor",
    body:
      "SOLYON no es una sola app, sino una arquitectura cognitiva con un motor de pensamiento (Arcanum), un orquestador (Nexus) y una red de apps verticales listas para el mercado.",
    blocks: [
      {
        title: "Arcanum · Motor cognitivo",
        body:
          "Memoria fractal jerárquica, capa anti-alucinación, capacidad de aprender de interacciones reales. Diseñado para operar 24/7 en nubes modernas como Azure.",
      },
      {
        title: "Nexus · Orquestador",
        body:
          "Coordina agentes, flujos y productos. Convierte insights de Arcanum en workflows concretos para seguros, logística, educación, hábitos y más.",
      },
      {
        title: "Apps & Ecosistema",
        body:
          "Azoth, TruckBoss, Sovereign TruckGuard, EL-VIA, Vita, SOLYON Foundation y nuevos módulos conectados a la misma base cognitiva.",
      },
    ],
  },
  ip: {
    title: "IP & protección",
    body:
      "Nuestra apuesta central es la propiedad intelectual: tecnologías, metodologías y arquitecturas que nos diferencian y protegen en el largo plazo.",
    items: [
      "Arquitectura de memoria fractal jerárquica para modelos lingüísticos y sistemas cognitivos.",
      "Método de anti-alucinación y validación contextual en tiempo real.",
      "Diseño de orquestadores multi-agente para ecosistemas empresariales (Nexus).",
      "Protección en proceso: Patent Pending en jurisdicciones clave.",
    ],
  },
  traction: {
    title: "Tracción & validación temprana",
    body:
      "En pocos meses, SOLYON ha logrado hitos que para muchas empresas toman años. Esto es lo que ya está en pie:",
    blocks: [
      {
        title: "Productos en marcha",
        items: [
          "Arcanum (motor cognitivo en desarrollo avanzado).",
          "TruckBoss (MVP funcional para camioneros en EE.UU.).",
          "Vita (plataforma de transformación personal en pruebas).",
        ],
      },
      {
        title: "Estructura y ecosistema",
        items: [
          "Cámara de Comercio y estructura legal en orden.",
          "Procesos activos con MinCiencias y SIC para registro de innovación.",
          "Tienda digital activa con Kit Digital, membresías y productos de acceso temprano.",
        ],
      },
      {
        title: "Reconocimiento & visibilidad",
        items: [
          "Invitación a la ceremonia de los Premios Cinco Días como propuesta innovadora.",
          "Acercamientos con actores clave del sector tecnológico como Apple, Intel y otros.",
          "Comunidad en crecimiento interesada en IA, transformación y emprendimiento.",
        ],
      },
    ],
  },
  structure: {
    title: "Estructura de inversión & uso de fondos",
    body:
      "Buscamos aliados que entiendan que construir un ecosistema de esta magnitud requiere visión, paciencia y ejecución constante.",
    blocks: [
      {
        title: "Tickets & términos",
        items: [
          "Rango objetivo de tickets: $50M – $500M COP (ángeles, micro VCs, fondos de impacto, corporate ventures).",
          "Estructuras posibles: SAFE, equity directo, revenue-sharing en productos específicos.",
          "Derechos de información, participación en comité asesor y acceso prioritario a nuevos productos.",
        ],
      },
      {
        title: "Uso estratégico de fondos",
        items: [
          "Aceleración de desarrollo de Arcanum & Nexus (equipo técnico senior).",
          "Go-to-market de TruckBoss, Azoth y Vita con campañas digitales y alianzas estratégicas.",
          "Fondo de becas y acompañamiento a comunidades objetivo a través de SOLYON Foundation.",
        ],
      },
    ],
  },
  cta: {
    title: "Hablemos de construir el futuro",
    body:
      "Si eres inversionista, fondo o socio estratégico y ves en SOLYON la combinación correcta de IP, propósito y ejecución, queremos conversar contigo.",
    buttons: {
      mailto:
        "mailto:alliances@solyontechnologies.com?subject=Inter%C3%A9s%20de%20inversi%C3%B3n%20en%20SOLYON",
      contact: "Escribir al equipo de alianzas",
      brief: "Descargar Investment Brief",
      store: "Explorar productos & apoyar hoy",
    },
    footer:
      "Creemos que las mejores alianzas se construyen cuando las historias se encuentran. Trae tu experiencia, tu capital y tu visión. Nosotros ponemos la tecnología, la ejecución y el propósito.",
  },
};

const TEXT_EN = {
  hero: {
    title: "Investors & Strategic Partners",
    subtitle:
      "SOLYON is building a sovereign DeepTech ecosystem that combines proprietary IP, real products and a clear social impact narrative. This is a call for allies who want to be at the table from the beginning.",
    body:
      "We are not an empty promise. We are a DeepTech house in execution, designed from LATAM for the world, with a long-term vision and a structure ready to scale.",
    buttons: {
      meeting: "Schedule a meeting with the founder",
      brief: "Download Investment Brief (PDF)",
    },
    visual: {
      title: "IP · Products · Impact",
      body:
        "Proprietary cognitive architecture, product ecosystem and a social story that could only be born in LATAM.",
    },
  },
  thesis: {
    title: "Investment thesis",
    body:
      "SOLYON is built on three pillars: proprietary IP, focus on real LATAM problems and a multi-platform business model with high margins and global potential.",
    blocks: [
      {
        title: "IP & Architecture",
        body:
          "Cognitive engine (Arcanum) with fractal memory and anti-hallucination, multi-agent orchestrator (Nexus) and proprietary architecture in Patent Pending process.",
      },
      {
        title: "Market & Timing",
        body:
          "AI adoption wave in high-margin sectors (insurance, transport, education, mental health), with a clear gap of solutions designed for LATAM contexts.",
      },
      {
        title: "Business model",
        body:
          "Ecosystem of products: B2B and B2C SaaS, strategic consulting, memberships and an impact arm (Foundation) that unlocks grants and social impact funds.",
      },
    ],
  },
  whyNow: {
    title: "Why now?",
    body:
      "The world is entering an era where AI will be the core infrastructure of the economy. Regions that don’t build their own systems will be trapped in imported models that don’t reflect their reality or values.",
    blocks: [
      {
        title: "LATAM on the map",
        body:
          "650M+ people, high talent, high tech adoption, but cognitive infrastructure dominated by external actors.",
      },
      {
        title: "Window of opportunity",
        body:
          "The window to build sovereign AI architectures is closing. SOLYON started already in 2025.",
      },
      {
        title: "Early traction",
        body:
          "Advanced development of Arcanum & Nexus, product launches like TruckBoss and Vita, invitation to Cinco Días Awards and ongoing processes with MinCiencias and SIC.",
      },
    ],
  },
  arch: {
    title: "Architecture that creates value",
    body:
      "SOLYON is not a single app, but a cognitive architecture with a thinking engine (Arcanum), an orchestrator (Nexus) and a network of vertical apps ready for the market.",
    blocks: [
      {
        title: "Arcanum · Cognitive engine",
        body:
          "Hierarchical fractal memory, anti-hallucination layer, ability to learn from real interactions. Designed to operate 24/7 on modern clouds like Azure.",
      },
      {
        title: "Nexus · Orchestrator",
        body:
          "Coordinates agents, flows and products. Turns Arcanum’s insights into concrete workflows for insurance, logistics, education, habits and more.",
      },
      {
        title: "Apps & Ecosystem",
        body:
          "Azoth, TruckBoss, Sovereign TruckGuard, EL-VIA, Vita, SOLYON Foundation and new modules connected to the same cognitive base.",
      },
    ],
  },
  ip: {
    title: "IP & protection",
    body:
      "Our central bet is intellectual property: technologies, methodologies and architectures that differentiate and protect us in the long term.",
    items: [
      "Hierarchical fractal memory architecture for language models and cognitive systems.",
      "Anti-hallucination and real-time contextual validation method.",
      "Multi-agent orchestrator design for enterprise ecosystems (Nexus).",
      "Protection in progress: Patent Pending in key jurisdictions.",
    ],
  },
  traction: {
    title: "Early traction & validation",
    body:
      "In a few months, SOLYON has achieved milestones that take many companies years. This is what is already in place:",
    blocks: [
      {
        title: "Products in motion",
        items: [
          "Arcanum (cognitive engine in advanced development).",
          "TruckBoss (functional MVP for truckers in the U.S.).",
          "Vita (personal transformation platform in testing).",
        ],
      },
      {
        title: "Structure & ecosystem",
        items: [
          "Chamber of Commerce and legal structure in order.",
          "Active processes with MinCiencias and SIC for innovation registration.",
          "Digital store active with Digital Kit, memberships and early access products.",
        ],
      },
      {
        title: "Recognition & visibility",
        items: [
          "Invitation to the Cinco Días Awards ceremony as an innovative proposal.",
          "Approaches to key tech players such as Apple, Intel and others.",
          "Growing community interested in AI, transformation and entrepreneurship.",
        ],
      },
    ],
  },
  structure: {
    title: "Investment structure & use of funds",
    body:
      "We are looking for allies that understand building an ecosystem of this magnitude requires vision, patience and constant execution.",
    blocks: [
      {
        title: "Tickets & terms",
        items: [
          "Target ticket range: $50M – $500M COP (angels, micro VCs, impact funds, corporate ventures).",
          "Possible structures: SAFE, direct equity, revenue-sharing on specific products.",
          "Information rights, advisory board participation and priority access to new products.",
        ],
      },
      {
        title: "Strategic use of funds",
        items: [
          "Acceleration of Arcanum & Nexus development (senior technical team).",
          "Go-to-market of TruckBoss, Azoth and Vita with digital campaigns and strategic alliances.",
          "Scholarship and support fund for target communities through SOLYON Foundation.",
        ],
      },
    ],
  },
  cta: {
    title: "Let’s talk about building the future",
    body:
      "If you are an investor, fund or strategic partner and you see in SOLYON the right combination of IP, purpose and execution, we want to talk to you.",
    buttons: {
      mailto:
        "mailto:alliances@solyontechnologies.com?subject=Investment%20interest%20in%20SOLYON",
      contact: "Write to the alliances team",
      brief: "Download Investment Brief",
      store: "Explore products & support today",
    },
    footer:
      "We believe the best alliances are built when stories meet. Bring your experience, capital and vision. We bring the technology, execution and purpose.",
  },
};
