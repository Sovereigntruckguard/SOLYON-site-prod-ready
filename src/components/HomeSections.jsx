// src/components/HomeSections.jsx
"use client";

import { useLanguage } from "@/lib/language";

export default function HomeSections() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <>
      {/* Cintillo confianza */}
      <section className="section mt-4 mb-10 text-center">
        <div className="card py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-gray-400 max-w-xl text-left">
            {t.trust.line1}
          </p>
          <p className="text-[0.7rem] md:text-xs text-gray-500 max-w-xl text-left md:text-right">
            {t.trust.line2}
          </p>
        </div>
      </section>

      {/* Rutas maestras por tipo de usuario */}
      <section className="section">
        <div className="text-center space-y-2 max-w-2xl mx-auto mb-8">
          <h2 className="font-display text-xl md:text-2xl text-white">
            {t.entry.title}
          </h2>
          <p className="text-sm text-gray-300">{t.entry.subtitle}</p>
          <p className="text-xs text-gray-500">{t.entry.subtitle2}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Founders */}
          <PersonaCard
            title={t.entry.founders.title}
            role={t.entry.founders.role}
            desc={t.entry.founders.desc}
            href="/store#founders"
            cta={t.entry.founders.cta}
          />
          {/* Investors */}
          <PersonaCard
            title={t.entry.investors.title}
            role={t.entry.investors.role}
            desc={t.entry.investors.desc}
            href="/investors"
            cta={t.entry.investors.cta}
          />
          {/* Transporte */}
          <PersonaCard
            title={t.entry.transport.title}
            role={t.entry.transport.role}
            desc={t.entry.transport.desc}
            href="/ecosystem#transporte"
            cta={t.entry.transport.cta}
          />
        </div>
      </section>

      {/* Problema / SOLYON existe */}
      <section className="section">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-3">
            <h2 className="font-display text-lg text-white">
              {t.problem.title}
            </h2>
            <p className="text-sm text-gray-300">{t.problem.body}</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {t.problem.points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="font-display text-lg text-white">
              {t.solution.title}
            </h2>
            <p className="text-sm text-gray-300">{t.solution.body}</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {t.solution.points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Arquitectura */}
      <section className="section">
        <div className="space-y-2 text-center max-w-3xl mx-auto mb-6">
          <h2 className="font-display text-lg text-white">
            {t.arch.title}
          </h2>
          <p className="text-sm text-gray-300">{t.arch.body}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {t.arch.cards.map((card) => (
            <div key={card.title} className="card p-5 space-y-2">
              <h3 className="font-display text-base gradient-gold">
                {card.title}
              </h3>
              <ul className="text-sm text-gray-300 space-y-1">
                {card.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="section mt-12">
        <div className="card bg-gradient-to-r from-[#141414] to-black border border-[#323232] text-center py-8 px-6 max-w-4xl mx-auto">
          <h2 className="font-display text-lg text-white">
            {t.cta.title}
          </h2>
          <p className="mt-3 text-sm text-gray-300">{t.cta.body}</p>
          <p className="mt-1 text-xs text-gray-400">{t.cta.body2}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs">
            <a
              href="/store"
              className="btn-primary"
            >
              {t.cta.btnKit}
            </a>
            <a
              href="/store#circle"
              className="btn-outline-gold"
            >
              {t.cta.btnCircle}
            </a>
            <a
              href="/investors"
              className="btn-outline"
            >
              {t.cta.btnInvestors}
            </a>
          </div>
        </div>
      </section>

      {/* Footer (manteniendo tu estilo, pero controlado por idioma en texto clave) */}
      <footer className="section mt-24 border-t border-[#2A2A2A] pt-10 text-sm text-gray-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} SOLYON Technologies. {t.footer.rights}
          </p>
          <p>
            {t.footer.contact}: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
          </p>
        </div>
      </footer>
    </>
  );
}

function PersonaCard({ title, role, desc, href, cta }) {
  return (
    <a
      href={href}
      className="card p-5 flex flex-col justify-between hover:border-[#FFD700]/80 hover:bg-black/60 transition"
    >
      <div className="space-y-1">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gray-500">
          {role}
        </p>
        <h3 className="font-display text-sm text-white">{title}</h3>
        <p className="text-xs text-gray-300 mt-1">{desc}</p>
      </div>
      <span className="mt-3 text-[0.7rem] font-semibold text-[#FFD700]">
        {cta} →
      </span>
    </a>
  );
}

/* ===== Textos ES / EN ===== */

const es = {
  trust: {
    line1:
      "SOLYON está siendo visibilizado y validado dentro del ecosistema de innovación y ciencia en Colombia.",
    line2:
      "Registro en Cámara de Comercio, procesos con MinCiencias y la SIC, e invitaciones a premios y espacios DeepTech.",
  },
  entry: {
    title: "Elige tu puerta de entrada al ecosistema SOLYON",
    subtitle:
      "SOLYON no es una sola app. Es un sistema para founders, inversionistas y personas del transporte.",
    subtitle2: "Elige desde dónde quieres entrar y te guiamos.",
    founders: {
      role: "Founders & Makers",
      title: "Construye con SOLYON",
      desc: "Arquitectura, kit digital y mapas cognitivos para que construyas tu propio proyecto con IA soberana.",
      cta: "Entrar como founder",
    },
    investors: {
      role: "Inversionistas & Aliados",
      title: "Investors Room",
      desc: "Tesis de inversión, IP, roadmap y acceso directo al fundador para rondas y alianzas estratégicas.",
      cta: "Entrar como inversor",
    },
    transport: {
      role: "Transporte & Seguros",
      title: "Transporte soberano",
      desc: "TruckBoss, Sovereign TruckGuard y EL-VIA para camioneros latinos y empresas de transporte.",
      cta: "Ver soluciones de transporte",
    },
  },
  problem: {
    title: "El problema que estamos enfrentando",
    body:
      "América Latina está llena de talento, resiliencia y creatividad, pero la mayoría de las personas no tienen acceso a DeepTech real. La infraestructura, las herramientas y los modelos avanzados siguen concentrados en manos de gigantes globales, lejos de los barrios, las calles y los emprendimientos que necesitan esa tecnología para sobrevivir y crecer.",
    points: [
      "Desigualdad en acceso a IA y tecnología de élite.",
      "Dependencia total de infraestructuras externas.",
      "Talento subutilizado sin puentes reales hacia DeepTech.",
    ],
  },
  solution: {
    title: "Nuestra respuesta: arquitectura cognitiva soberana",
    body:
      "SOLYON no es una app. Es una casa DeepTech que diseña su propia arquitectura: Arcanum como cerebro cognitivo, Nexus como sistema nervioso y un ecosistema de aplicaciones soberanas que convierten IA en negocio e impacto real.",
    points: [
      "IA diseñada desde LATAM para LATAM y el mundo.",
      "Propiedad intelectual propia en memoria fractal, anti-alucinación y autoaprendizaje.",
      "Enfoque radical en vidas reales: camioneros, founders, estudiantes y comunidades.",
    ],
  },
  arch: {
    title: "Arquitectura del sistema SOLYON",
    body:
      "Imagina SOLYON como un organismo vivo: Arcanum como cerebro, Nexus como sistema nervioso y una red de aplicaciones soberanas operando sobre transporte, seguros, educación, hábitos e impacto social.",
    cards: [
      {
        title: "Capa 1 · Inteligencia",
        items: ["Arcanum · Motor cognitivo", "Nexus · Orquestador multi-agente"],
      },
      {
        title: "Capa 2 · Negocio",
        items: ["Azoth CRM", "TruckBoss", "Sovereign TruckGuard"],
      },
      {
        title: "Capa 3 · Personas",
        items: ["EL-VIA DOT Express", "Vita", "SOLYON Foundation"],
      },
    ],
  },
  cta: {
    title: "Únete a la primera ola de SOLYON",
    body:
      "Cada Kit Digital, cada miembro del Círculo Interno y cada alianza estratégica financia horas de desarrollo, infraestructura y becas para talento latino que merece acceso a IA soberana.",
    body2:
      "Estamos construyendo DeepTech de lujo desde la calle, para que la próxima generación de innovación también nazca en español.",
    btnKit: "Comprar Kit Digital",
    btnCircle: "Unirme al Círculo Interno",
    btnInvestors: "Hablar como inversor / aliado",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    contact: "Contacto",
  },
};

const en = {
  trust: {
    line1:
      "SOLYON is being showcased and validated within Colombia’s innovation and science ecosystem.",
    line2:
      "Chamber of Commerce registration, ongoing processes with MinCiencias and the IP office, and invitations to awards and DeepTech spaces.",
  },
  entry: {
    title: "Choose your entry door into the SOLYON ecosystem",
    subtitle:
      "SOLYON is not a single app. It’s a system for founders, investors and people in transport.",
    subtitle2: "Choose how you want to enter and we’ll guide you.",
    founders: {
      role: "Founders & Makers",
      title: "Build with SOLYON",
      desc: "Architecture, digital kit and cognitive maps so you can build your own project with sovereign AI.",
      cta: "Enter as founder",
    },
    investors: {
      role: "Investors & Partners",
      title: "Investors Room",
      desc: "Investment thesis, IP, roadmap and direct access to the founder for funding rounds and strategic partnerships.",
      cta: "Enter as investor",
    },
    transport: {
      role: "Transport & Insurance",
      title: "Sovereign transport",
      desc: "TruckBoss, Sovereign TruckGuard and EL-VIA for Latino truckers and transport companies.",
      cta: "See transport solutions",
    },
  },
  problem: {
    title: "The problem we are facing",
    body:
      "Latin America is full of talent, resilience and creativity, but most people do not have access to real DeepTech. Infrastructure, tools and advanced models remain concentrated in a few global giants, far from the neighborhoods, streets and businesses that need this technology to survive and grow.",
    points: [
      "Unequal access to AI and high-end technology.",
      "Full dependency on external infrastructures.",
      "Underused talent with no real bridge to DeepTech.",
    ],
  },
  solution: {
    title: "Our answer: sovereign cognitive architecture",
    body:
      "SOLYON is not an app. It’s a DeepTech house designing its own architecture: Arcanum as the cognitive brain, Nexus as the nervous system and a sovereign app ecosystem that turns AI into real business and impact.",
    points: [
      "AI designed from LATAM for LATAM and the world.",
      "Proprietary IP on fractal memory, anti-hallucination and self-learning.",
      "Radical focus on real lives: truckers, founders, students and communities.",
    ],
  },
  arch: {
    title: "SOLYON system architecture",
    body:
      "Imagine SOLYON as a living organism: Arcanum as the brain, Nexus as the nervous system and a network of sovereign applications operating across transport, insurance, education, habits and social impact.",
    cards: [
      {
        title: "Layer 1 · Intelligence",
        items: ["Arcanum · Cognitive engine", "Nexus · Multi-agent orchestrator"],
      },
      {
        title: "Layer 2 · Business",
        items: ["Azoth CRM", "TruckBoss", "Sovereign TruckGuard"],
      },
      {
        title: "Layer 3 · People",
        items: ["EL-VIA DOT Express", "Vita", "SOLYON Foundation"],
      },
    ],
  },
  cta: {
    title: "Join the first wave of SOLYON",
    body:
      "Every Digital Kit, every Inner Circle member and every strategic partner funds development hours, infrastructure and scholarships for Latin American talent that deserves access to sovereign AI.",
    body2:
      "We are building luxury DeepTech from the street, so the next generation of innovation is also born in Spanish.",
    btnKit: "Buy Digital Kit",
    btnCircle: "Join the Inner Circle",
    btnInvestors: "Talk as investor / partner",
  },
  footer: {
    rights: "All rights reserved.",
    contact: "Contact",
  },
};
