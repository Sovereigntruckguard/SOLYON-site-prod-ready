"use client";

import { useLanguage } from "@/lib/language";

const APPS = [
  "Azoth CRM",
  "TruckBoss",
  "Sovereign TruckGuard LLC",
  "EL-VIA DOT Express",
  "Vita",
  "SOLYON Foundation",
];

function FractalBrain() {
  return (
    <div className="relative h-40 w-40 md:h-56 md:w-56 mx-auto md:mx-0">
      {/* halo */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.16),transparent_60%)] blur-sm" />
      {/* anillos */}
      <div className="absolute inset-4 rounded-full border border-[#ffb6f0]/40" />
      <div className="absolute inset-10 rounded-full border border-[#FFD700]/70" />
      <div className="absolute inset-16 rounded-full border border-[#ffb6f0]/30" />
      {/* “neuronas” */}
      <div className="absolute inset-0 flex items-center justify-center animate-[spin_18s_linear_infinite]">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const r = 32;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          return (
            <div
              key={i}
              className="absolute h-3 w-3 rounded-full bg-[#FFD700]"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                boxShadow: "0 0 18px rgba(255,215,0,0.8)",
              }}
            />
          );
        })}
        <div className="h-5 w-5 rounded-full bg-[#ffb6f0] shadow-[0_0_22px_rgba(255,182,240,0.9)]" />
      </div>
    </div>
  );
}

function ArcanumNexusMap({ t }) {
  return (
    <div className="card p-6 md:p-8 space-y-6">
      <div className="text-center md:text-left space-y-2">
        <h2 className="font-display text-2xl md:text-3xl gradient-gold">
          {t.map.title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base">
          {t.map.body}
        </p>
      </div>

      <div className="grid md:grid-cols-[1.2fr_1.4fr_1.8fr] gap-6 items-stretch text-sm text-gray-200">
        {/* Arcanum */}
        <div className="rounded-2xl bg-[#0f0f0f] border border-[#2A2A2A] p-4 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              {t.map.layer1.kicker}
            </p>
            <h3 className="font-display text-lg gradient-gold">
              {t.map.layer1.title}
            </h3>
            <p className="mt-2 text-gray-300 text-xs md:text-sm">
              {t.map.layer1.body}
            </p>
          </div>
          <p className="mt-3 text-[0.7rem] text-gray-500">
            {t.map.layer1.footer}
          </p>
        </div>

        {/* Nexus */}
        <div className="rounded-2xl bg-[#0f0f0f] border border-[#2A2A2A] p-4 flex flex-col justify-between relative">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              {t.map.layer2.kicker}
            </p>
            <h3 className="font-display text-lg gradient-gold">
              {t.map.layer2.title}
            </h3>
            <p className="mt-2 text-gray-300 text-xs md:text-sm">
              {t.map.layer2.body}
            </p>
          </div>
          <p className="mt-3 text-[0.7rem] text-gray-500">
            {t.map.layer2.footer}
          </p>
          <div className="pointer-events-none absolute inset-y-1/2 -right-4 hidden md:flex items-center">
            <span className="text-[#FFD700] text-xl">➜</span>
          </div>
        </div>

        {/* Apps */}
        <div className="rounded-2xl bg-[#0f0f0f] border border-[#2A2A2A] p-4 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              {t.map.layer3.kicker}
            </p>
            <h3 className="font-display text-lg gradient-gold">
              {t.map.layer3.title}
            </h3>
            <p className="mt-2 text-gray-300 text-xs md:text-sm">
              {t.map.layer3.body}
            </p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[0.7rem]">
            {APPS.map((app) => (
              <div
                key={app}
                className="rounded-xl border border-[#FFD700]/30 bg-[#151515] px-2 py-1 text-[#FFD700]/90 text-center"
              >
                {app}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TechnologyPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? TEXT_ES : TEXT_EN;

  return (
    <main className="space-y-24 pb-24">
      {/* HERO TECNOLOGÍA */}
      <section className="section mt-10 md:mt-16 space-y-10">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div className="space-y-6">
            <h1 className="font-display text-4xl md:text-5xl gradient-gold">
              {t.hero.title}
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              {t.hero.subtitle}
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {t.hero.body}
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="/contact"
                className="btn px-8 py-3 text-sm md:text-base"
              >
                {t.hero.buttons.demo}
              </a>
              <a
                href={process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
              >
                {t.hero.buttons.kit}
              </a>
              <a
                href={process.env.NEXT_PUBLIC_WOMPI_DONATE_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-[#111111] border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center justify-center gap-1"
              >
                {t.hero.buttons.donate}
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.65rem] text-black">
                  ♥
                </span>
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <FractalBrain />
          </div>
        </div>
      </section>

      {/* ARCANUM & NEXUS */}
      <section className="section space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            {t.core.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.core.body}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-200">
          <div className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              {t.core.arcanum.kicker}
            </p>
            <h3 className="font-display text-xl gradient-gold">
              {t.core.arcanum.title1}
            </h3>
            <p className="text-gray-300">
              {t.core.arcanum.body1}
            </p>
            <h3 className="font-display text-xl gradient-gold mt-4">
              {t.core.arcanum.title2}
            </h3>
            <p className="text-gray-300">
              {t.core.arcanum.body2}
            </p>
            <h3 className="font-display text-xl gradient-gold mt-4">
              {t.core.arcanum.title3}
            </h3>
            <p className="text-gray-300">
              {t.core.arcanum.body3}
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              {t.core.nexus.kicker}
            </p>
            <h3 className="font-display text-xl gradient-gold">
              {t.core.nexus.title1}
            </h3>
            <p className="text-gray-300">
              {t.core.nexus.body1}
            </p>
            <h3 className="font-display text-xl gradient-gold mt-4">
              {t.core.nexus.title2}
            </h3>
            <p className="text-gray-300">
              {t.core.nexus.body2}
            </p>
            <h3 className="font-display text-xl gradient-gold mt-4">
              {t.core.nexus.title3}
            </h3>
            <p className="text-gray-300">
              {t.core.nexus.body3}
            </p>
          </div>
        </div>
      </section>

      {/* PROPIEDAD INTELECTUAL */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            {t.ip.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.ip.body}
          </p>
          <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
            {t.ip.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-[#FFD700] font-semibold text-sm">
            {t.ip.status}
          </p>
        </div>
      </section>

      {/* MAPA COGNITIVO */}
      <section className="section space-y-8">
        <ArcanumNexusMap t={t} />
      </section>

      {/* SEGURIDAD & SOBERANÍA */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            {t.security.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.security.body}
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            {t.security.cards.map((card) => (
              <div key={card.title}>
                <h3 className="font-display text-base gradient-gold">
                  {card.title}
                </h3>
                <p className="mt-1 text-gray-300">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
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
            href="/contact"
            className="btn px-8 py-3 text-sm md:text-base"
          >
            {t.cta.buttons.demo}
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            {t.cta.buttons.kit}
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
    title: "Tecnología & Propiedad Intelectual",
    subtitle:
      "SOLYON desarrolla arquitecturas cognitivas propias para minimizar alucinaciones, retener contexto de forma soberana y orquestar agentes en tiempo real sobre infraestructuras modernas como Azure.",
    body:
      "Arcanum y Nexus forman el núcleo de nuestra tecnología: un motor cognitivo con memoria fractal y un orquestador multi-agente que convierte decisiones en acciones concretas, trazables y alineadas con el propósito del ecosistema.",
    buttons: {
      demo: "Solicitar demo Arcanum + Nexus",
      kit: "Comprar Kit Digital",
      donate: "Apoyar el laboratorio",
    },
  },
  core: {
    title: "Arcanum & Nexus: núcleo cognitivo soberano",
    body:
      "Nuestra tecnología no es una sola herramienta, sino una arquitectura completa que separa pensamiento, orquestación y acción en capas bien definidas.",
    arcanum: {
      kicker: "Arcanum · Motor cognitivo",
      title1: "Memoria fractal jerárquica",
      body1:
        "Modelo de memoria que organiza el conocimiento en niveles, permitiendo recordar lo esencial en grandes contextos sin perder precisión ni velocidad.",
      title2: "Anti-alucinación",
      body2:
        "Capas de verificación, recuperación de contexto y trazabilidad de fuentes diseñadas para reducir al mínimo las respuestas inventadas o inestables.",
      title3: "Autoaprendizaje",
      body3:
        "Refinamiento continuo basado en interacciones reales, manteniendo un histórico de patrones, errores y correcciones sin exponer datos sensibles.",
    },
    nexus: {
      kicker: "Nexus · Orquestador multi-agente",
      title1: "Coordinación en tiempo real",
      body1:
        "Asigna tareas a agentes especializados, decide qué flujo se ejecuta primero y qué datos se usan en cada paso, manteniendo un log completo de la decisión.",
      title2: "Integraciones soberanas",
      body2:
        "Diseñado para conectarse con APIs, CRMs, ERPs, sistemas de logística y plataformas educativas sin sacrificar la soberanía sobre datos y modelos.",
      title3: "Escalabilidad",
      body3:
        "Arquitectura preparada para operar en múltiples nubes, iniciando en Azure y extendible a entornos híbridos u on-premise según requisitos regulatorios.",
    },
  },
  ip: {
    title: "Propiedad intelectual & estado legal",
    body:
      "El núcleo tecnológico de SOLYON está en proceso de protección formal, asegurando que la innovación se mantenga soberana y se pueda escalar de forma estratégica.",
    items: [
      "Fórmula anti-alucinación aplicada a modelos generativos y motores cognitivos.",
      "Memoria fractal jerárquica para retención y recuperación de contexto en sistemas de IA.",
      "Arquitectura de orquestación multi-agente (Nexus) como capa central de decisión.",
      "Ecosistema cognitivo soberano diseñado para LATAM con posibilidad de escalar globalmente.",
    ],
    status: "Estado actual: Patent Pending.",
  },
  map: {
    title: "Mapa cognitivo: Arcanum → Nexus → Apps",
    body:
      "Toda la tecnología de SOLYON se organiza en un flujo simple: el motor cognitivo (Arcanum) entiende el contexto, Nexus orquesta agentes y tareas, y las apps llevan ese poder a la vida real.",
    layer1: {
      kicker: "Capa 1",
      title: "Arcanum · Motor cognitivo",
      body:
        "Memoria fractal jerárquica, anti-alucinación y autoaprendizaje continuo. Procesa señales, contexto y datos históricos 24/7 sobre Azure.",
      footer: "Entrada: datos, texto, eventos, señales de negocio.",
    },
    layer2: {
      kicker: "Capa 2",
      title: "Nexus · Orquestador multi-agente",
      body:
        "Convierte decisiones de Arcanum en flujos concretos: qué agente actúa, en qué sistema, con qué prioridad y bajo qué reglas soberanas.",
      footer:
        "Proceso: enrutamiento inteligente, trazabilidad, coordinación de tareas.",
    },
    layer3: {
      kicker: "Capa 3",
      title: "Apps soberanas",
      body:
        "Cada módulo del ecosistema recibe instrucciones de Nexus y las traduce en acciones reales: cotizar, asegurar, educar, acompañar, transformar.",
    },
  },
  security: {
    title: "Seguridad, soberanía & ética",
    body:
      "Creemos que la verdadera innovación en IA no es solo una cuestión de potencia, sino de soberanía, trazabilidad y respeto por las personas que usan y son afectadas por la tecnología.",
    cards: [
      {
        title: "IA soberana",
        body:
          "Diseñamos tecnología pensando primero en LATAM: regulaciones, realidades económicas y contextos sociales que suelen ignorarse en los grandes centros de poder tecnológico.",
      },
      {
        title: "Datos protegidos",
        body:
          "Nos enfocamos en mantener el control sobre datos críticos, evitando dependencias innecesarias de infraestructuras externas y priorizando anonimización y trazabilidad.",
      },
      {
        title: "Ética en capas",
        body:
          "Cada decisión técnica se cruza con un principio: que la tecnología mejore la vida de quienes históricamente han sido ignorados por el sistema, no que los reemplace.",
      },
    ],
  },
  cta: {
    title: "Construyamos tecnología soberana juntos",
    body:
      "Tanto si buscas potenciar tus sistemas actuales, construir tu propia plataforma DeepTech o apoyar el laboratorio SOLYON, esta tecnología está diseñada para trabajar contigo, no contra ti.",
    buttons: {
      demo: "Solicitar demo empresarial",
      kit: "Comprar Kit Digital",
      donate: "Apoyar el ecosistema",
    },
    footer:
      "SOLYON es el punto de encuentro entre ciencia, propósito y tecnología soberana. Lo que hoy ves como arquitectura, mañana será la base de sistemas reales que protegen, educan y empoderan a millones.",
  },
};

const TEXT_EN = {
  hero: {
    title: "Technology & Intellectual Property",
    subtitle:
      "SOLYON develops its own cognitive architectures to minimize hallucinations, retain context in a sovereign way and orchestrate agents in real time on modern infrastructures such as Azure.",
    body:
      "Arcanum and Nexus form the core of our technology: a cognitive engine with fractal memory and a multi-agent orchestrator that turns decisions into concrete, traceable actions aligned with the ecosystem’s purpose.",
    buttons: {
      demo: "Request Arcanum + Nexus demo",
      kit: "Buy Digital Kit",
      donate: "Support the lab",
    },
  },
  core: {
    title: "Arcanum & Nexus: sovereign cognitive core",
    body:
      "Our technology is not a single tool but a full architecture that separates thinking, orchestration and action into well-defined layers.",
    arcanum: {
      kicker: "Arcanum · Cognitive engine",
      title1: "Hierarchical fractal memory",
      body1:
        "Memory model that organizes knowledge into levels, allowing it to recall what matters in large contexts without losing precision or speed.",
      title2: "Anti-hallucination",
      body2:
        "Layers of verification, context retrieval and source traceability designed to minimize invented or unstable answers.",
      title3: "Self-learning",
      body3:
        "Continuous refinement based on real interactions, keeping a history of patterns, errors and corrections without exposing sensitive data.",
    },
    nexus: {
      kicker: "Nexus · Multi-agent orchestrator",
      title1: "Real-time coordination",
      body1:
        "Assigns tasks to specialized agents, decides which flow runs first and which data is used at each step, keeping a complete decision log.",
      title2: "Sovereign integrations",
      body2:
        "Designed to connect with APIs, CRMs, ERPs, logistics systems and educational platforms without sacrificing data and model sovereignty.",
      title3: "Scalability",
      body3:
        "Architecture prepared to operate across multiple clouds, starting on Azure and extendable to hybrid or on-premise environments according to regulatory needs.",
    },
  },
  ip: {
    title: "Intellectual property & legal status",
    body:
      "SOLYON’s technological core is undergoing formal protection, ensuring the innovation remains sovereign and can be scaled strategically.",
    items: [
      "Anti-hallucination formula applied to generative models and cognitive engines.",
      "Hierarchical fractal memory for context retention and retrieval in AI systems.",
      "Multi-agent orchestration architecture (Nexus) as the central decision layer.",
      "Sovereign cognitive ecosystem designed for LATAM with global scalability.",
    ],
    status: "Current status: Patent Pending.",
  },
  map: {
    title: "Cognitive map: Arcanum → Nexus → Apps",
    body:
      "All SOLYON technology is organized into a simple flow: the cognitive engine (Arcanum) understands context, Nexus orchestrates agents and tasks, and the apps bring that power into real life.",
    layer1: {
      kicker: "Layer 1",
      title: "Arcanum · Cognitive engine",
      body:
        "Hierarchical fractal memory, anti-hallucination and continuous self-learning. It processes signals, context and historical data 24/7 on Azure.",
      footer: "Input: data, text, events, business signals.",
    },
    layer2: {
      kicker: "Layer 2",
      title: "Nexus · Multi-agent orchestrator",
      body:
        "Turns Arcanum’s decisions into concrete flows: which agent acts, in which system, with what priority and under which sovereign rules.",
      footer:
        "Process: intelligent routing, traceability, task coordination.",
    },
    layer3: {
      kicker: "Layer 3",
      title: "Sovereign apps",
      body:
        "Each ecosystem module receives instructions from Nexus and translates them into real actions: quoting, insuring, teaching, guiding, transforming.",
    },
  },
  security: {
    title: "Security, sovereignty & ethics",
    body:
      "We believe true innovation in AI is not only about power but about sovereignty, traceability and respect for the people who use and are affected by the technology.",
    cards: [
      {
        title: "Sovereign AI",
        body:
          "We design technology with LATAM first: regulations, economic realities and social contexts that are often ignored in the major tech power centers.",
      },
      {
        title: "Protected data",
        body:
          "We focus on keeping control over critical data, avoiding unnecessary dependence on external infrastructures and prioritizing anonymization and traceability.",
      },
      {
        title: "Layered ethics",
        body:
          "Every technical decision passes through a principle: technology should improve the lives of those historically ignored by the system, not replace them.",
      },
    ],
  },
  cta: {
    title: "Let’s build sovereign technology together",
    body:
      "Whether you want to enhance your current systems, build your own DeepTech platform or support the SOLYON lab, this technology is designed to work with you, not against you.",
    buttons: {
      demo: "Request enterprise demo",
      kit: "Buy Digital Kit",
      donate: "Support the ecosystem",
    },
    footer:
      "SOLYON is the meeting point between science, purpose and sovereign technology. What you see today as architecture will become the base of real systems that protect, educate and empower millions.",
  },
};
