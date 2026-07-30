"use client";

import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const EMAIL = "sergio@solyontechnologies.com";
const WHATSAPP = "https://wa.me/573147903517";

function ContactRoute({ route }) {
  const subject = encodeURIComponent(route.subject);
  const body = encodeURIComponent(route.bodyTemplate);

  return (
    <article className="group rounded-[1.75rem] border border-white/10 bg-[#0b0e12] p-7 transition hover:border-[#E6BC68]/35 hover:bg-white/[0.035]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">{route.label}</p>
          <h3 className="mt-4 text-2xl font-semibold">{route.title}</h3>
        </div>
        <span className="text-2xl text-white/20 transition group-hover:text-[#E6BC68]">↗</span>
      </div>
      <p className="mt-5 text-sm leading-7 text-white/55">{route.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {route.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[0.66rem] text-white/42">{tag}</span>
        ))}
      </div>
      <a
        href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}
        className="mt-7 inline-flex text-sm font-semibold text-[#E6BC68] transition hover:text-[#F0CA7E]"
      >
        {route.button} →
      </a>
    </article>
  );
}

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(230,188,104,0.13),transparent_34rem)]" />
        <div className="section-shell relative grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-7xl">{t.title}</h1>
            <p className="section-copy mt-7">{t.intro}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.generalSubject)}`} className="inline-flex justify-center rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]">{t.emailButton}</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">{t.whatsappButton}</a>
            </div>
            <p className="mt-5 text-xs leading-5 text-white/38">{t.location}</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0b0e12] p-7 shadow-[0_35px_100px_rgba(0,0,0,0.55)] md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6BC68]">{t.directEyebrow}</p>
            <h2 className="mt-5 text-3xl font-semibold">{t.directTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-white/55">{t.directBody}</p>
            <div className="mt-8 space-y-4">
              <a href={`mailto:${EMAIL}`} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm text-white/70 transition hover:border-[#E6BC68]/35 hover:text-white">
                <span>{EMAIL}</span><span>↗</span>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm text-white/70 transition hover:border-[#E6BC68]/35 hover:text-white">
                <span>+57 314 790 3517</span><span>↗</span>
              </a>
              <a href="https://www.linkedin.com/company/solyon-technologies/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm text-white/70 transition hover:border-[#E6BC68]/35 hover:text-white">
                <span>LinkedIn · SOLYON Technologies</span><span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="eyebrow">{t.routesEyebrow}</p>
          <h2 className="section-title mt-5">{t.routesTitle}</h2>
          <p className="section-copy mt-6">{t.routesBody}</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {t.routes.map((route) => <ContactRoute key={route.title} route={route} />)}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">{t.prepareEyebrow}</p>
            <h2 className="section-title mt-5">{t.prepareTitle}</h2>
            <p className="section-copy mt-6">{t.prepareBody}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.prepareItems.map((item, index) => (
              <article key={item.title} className="system-card">
                <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] to-[#0b0e12] p-8 md:p-12">
            <p className="eyebrow">{t.investorEyebrow}</p>
            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">{t.investorTitle}</h2>
            <p className="mt-6 text-sm leading-7 text-white/55">{t.investorBody}</p>
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.investorSubject)}`} className="mt-8 inline-flex rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]">{t.investorButton}</a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0b0e12] p-8 md:p-12">
            <p className="eyebrow">SOLYON Move</p>
            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">{t.moveTitle}</h2>
            <p className="mt-6 text-sm leading-7 text-white/55">{t.moveBody}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <GooglePlayLink label={t.moveButton} />
              <Link href="/solyon-move" className="inline-flex justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">{t.moveCaseButton}</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "Contacto · Inversión · Alianzas · Tecnología",
  title: "Conectemos alrededor de un problema real y una ruta concreta de colaboración.",
  intro: "SOLYON conversa con organizaciones, instituciones, inversionistas y equipos tecnológicos que buscan construir capacidad verificable en riesgo, seguros, automatización, movilidad, datos e inteligencia aplicada.",
  emailButton: "Escribir por correo",
  whatsappButton: "Conversar por WhatsApp",
  location: "Medellín, Colombia · Operación y validación entre Colombia y Estados Unidos",
  generalSubject: "Conversación estratégica con SOLYON Technologies",
  directEyebrow: "Contacto directo",
  directTitle: "Una ruta simple, humana y verificable.",
  directBody: "Mientras implementamos un sistema de contacto con trazabilidad completa, utilizamos canales directos que garantizan recepción y permiten iniciar la conversación con contexto.",
  routesEyebrow: "Rutas de colaboración",
  routesTitle: "Elige el contexto correcto para iniciar.",
  routesBody: "Cada ruta abre un correo preestructurado para reducir fricción y permitir una primera evaluación precisa.",
  routes: [
    {
      label: "Capital y estrategia",
      title: "Inversionistas y fondos",
      description: "Conversaciones sobre la ronda, tesis DeepTech, infraestructura tecnológica, mercado, gobernanza y escalamiento responsable.",
      tags: ["Seed", "DeepTech", "Risk intelligence", "LatAm → USA"],
      subject: "Interés de inversión en SOLYON Technologies",
      bodyTemplate: "Hola Sergio,\n\nOrganización / fondo:\nTesis o enfoque de inversión:\nMotivo del interés en SOLYON:\nEtapa o tipo de conversación propuesta:\n\nSaludos,",
      button: "Iniciar conversación de inversión",
    },
    {
      label: "Industria y mercado",
      title: "Aseguradoras, brokers y operadores",
      description: "Problemas de riesgo, distribución, contactabilidad, cotización, documentación, cumplimiento, servicio y renovación en trucking.",
      tags: ["Insurance", "Trucking", "Operations", "Distribution"],
      subject: "Colaboración de industria con SOLYON Technologies",
      bodyTemplate: "Hola Sergio,\n\nEmpresa:\nProblema operativo o de riesgo:\nUsuarios afectados:\nEvidencia o datos disponibles:\nResultado esperado:\n\nSaludos,",
      button: "Explorar colaboración de industria",
    },
    {
      label: "Ciudad e impacto",
      title: "Instituciones, universidades y organizaciones",
      description: "Pilotos, investigación aplicada, movilidad, accesibilidad, datos urbanos y fortalecimiento de capacidad tecnológica desde Medellín.",
      tags: ["Ciudad", "Movilidad", "Accesibilidad", "Investigación"],
      subject: "Colaboración institucional con SOLYON Technologies",
      bodyTemplate: "Hola Sergio,\n\nInstitución:\nReto o programa:\nPoblación o usuarios involucrados:\nAlcance propuesto:\nResultado esperado:\n\nSaludos,",
      button: "Iniciar conversación institucional",
    },
    {
      label: "Tecnología e infraestructura",
      title: "Cloud, IA, datos e integraciones",
      description: "Infraestructura cloud, agentes especializados, automatización, conectores, observabilidad y colaboración técnica para sistemas aplicados.",
      tags: ["Cloud", "AI agents", "Data", "Integrations"],
      subject: "Colaboración tecnológica con SOLYON Technologies",
      bodyTemplate: "Hola Sergio,\n\nEmpresa / equipo:\nCapacidad tecnológica ofrecida:\nCaso de uso potencial:\nModelo de colaboración:\nSiguiente paso propuesto:\n\nSaludos,",
      button: "Explorar colaboración tecnológica",
    },
  ],
  prepareEyebrow: "Contexto útil",
  prepareTitle: "Tres elementos permiten avanzar más rápido.",
  prepareBody: "Una primera conversación de calidad debe distinguir claramente entre problema, evidencia y resultado esperado.",
  prepareItems: [
    { title: "Problema y usuario", body: "Qué proceso requiere intervención y quién experimenta la fricción." },
    { title: "Alcance y evidencia", body: "Qué información existe, qué ha sido probado y qué permanece como hipótesis." },
    { title: "Resultado esperado", body: "Qué decisión, piloto, integración, inversión o alianza se busca iniciar." },
  ],
  investorEyebrow: "Ronda y escalamiento",
  investorTitle: "Construimos infraestructura, no una colección de funciones.",
  investorBody: "La conversación de inversión debe comenzar por la tesis central: transformar conocimiento operativo latinoamericano en inteligencia de riesgo, sistemas y capacidad tecnológica escalable.",
  investorSubject: "Solicitud de conversación de inversión — SOLYON Technologies",
  investorButton: "Solicitar conversación de inversión",
  moveTitle: "Conoce una validación pública del laboratorio.",
  moveBody: "SOLYON Move está disponible gratuitamente en Google Play y demuestra capacidad real de producto, publicación, experiencia de usuario y ejecución institucional.",
  moveButton: "Descargar SOLYON Move gratis",
  moveCaseButton: "Conocer el caso completo",
};

const en = {
  eyebrow: "Contact · Investment · Partnerships · Technology",
  title: "Let us connect around a real problem and a concrete path to collaboration.",
  intro: "SOLYON engages organizations, institutions, investors and technology teams seeking to build verifiable capability in risk, insurance, automation, mobility, data and applied intelligence.",
  emailButton: "Send an email",
  whatsappButton: "Chat on WhatsApp",
  location: "Medellín, Colombia · Operations and validation across Colombia and the United States",
  generalSubject: "Strategic conversation with SOLYON Technologies",
  directEyebrow: "Direct contact",
  directTitle: "A simple, human and verifiable route.",
  directBody: "While we implement a fully traceable contact system, we use direct channels that guarantee receipt and allow the conversation to begin with context.",
  routesEyebrow: "Collaboration routes",
  routesTitle: "Choose the right context to begin.",
  routesBody: "Each route opens a prestructured email to reduce friction and support a precise first assessment.",
  routes: [
    {
      label: "Capital and strategy",
      title: "Investors and funds",
      description: "Conversations about the round, DeepTech thesis, technology infrastructure, market, governance and responsible scaling.",
      tags: ["Seed", "DeepTech", "Risk intelligence", "LatAm → USA"],
      subject: "Investment interest in SOLYON Technologies",
      bodyTemplate: "Hello Sergio,\n\nOrganization / fund:\nInvestment thesis or focus:\nReason for interest in SOLYON:\nProposed stage or conversation type:\n\nRegards,",
      button: "Start an investment conversation",
    },
    {
      label: "Industry and market",
      title: "Insurers, brokers and operators",
      description: "Risk, distribution, contactability, quoting, documentation, compliance, service and renewal problems in trucking.",
      tags: ["Insurance", "Trucking", "Operations", "Distribution"],
      subject: "Industry collaboration with SOLYON Technologies",
      bodyTemplate: "Hello Sergio,\n\nCompany:\nOperating or risk problem:\nAffected users:\nAvailable evidence or data:\nExpected outcome:\n\nRegards,",
      button: "Explore industry collaboration",
    },
    {
      label: "City and impact",
      title: "Institutions, universities and organizations",
      description: "Pilots, applied research, mobility, accessibility, urban data and technology capability development from Medellín.",
      tags: ["City", "Mobility", "Accessibility", "Research"],
      subject: "Institutional collaboration with SOLYON Technologies",
      bodyTemplate: "Hello Sergio,\n\nInstitution:\nChallenge or program:\nPopulation or users involved:\nProposed scope:\nExpected outcome:\n\nRegards,",
      button: "Start an institutional conversation",
    },
    {
      label: "Technology and infrastructure",
      title: "Cloud, AI, data and integrations",
      description: "Cloud infrastructure, specialized agents, automation, connectors, observability and technical collaboration for applied systems.",
      tags: ["Cloud", "AI agents", "Data", "Integrations"],
      subject: "Technology collaboration with SOLYON Technologies",
      bodyTemplate: "Hello Sergio,\n\nCompany / team:\nTechnology capability offered:\nPotential use case:\nCollaboration model:\nProposed next step:\n\nRegards,",
      button: "Explore technology collaboration",
    },
  ],
  prepareEyebrow: "Useful context",
  prepareTitle: "Three elements help move faster.",
  prepareBody: "A high-quality first conversation should clearly distinguish the problem, evidence and expected outcome.",
  prepareItems: [
    { title: "Problem and user", body: "Which process requires intervention and who experiences the friction." },
    { title: "Scope and evidence", body: "What information exists, what has been tested and what remains a hypothesis." },
    { title: "Expected outcome", body: "Which decision, pilot, integration, investment or partnership should begin." },
  ],
  investorEyebrow: "Round and scale",
  investorTitle: "We build infrastructure, not a collection of features.",
  investorBody: "The investment conversation should begin with the central thesis: turning Latin American operating knowledge into scalable risk intelligence, systems and technology capability.",
  investorSubject: "Investment conversation request — SOLYON Technologies",
  investorButton: "Request an investment conversation",
  moveTitle: "Explore a public validation of the laboratory.",
  moveBody: "SOLYON Move is available free on Google Play and demonstrates real product, publishing, user-experience and institutional execution capability.",
  moveButton: "Download SOLYON Move free",
  moveCaseButton: "Explore the full case",
};
