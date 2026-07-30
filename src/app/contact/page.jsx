"use client";

import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      <section className="section-shell py-24 md:py-32">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="section-title mt-5">{t.title}</h1>
        <p className="section-copy mt-7">{t.intro}</p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">{t.directEyebrow}</p>
            <h2 className="section-title mt-5">{t.directTitle}</h2>
            <p className="section-copy mt-7">{t.directBody}</p>

            <div className="mt-10 space-y-4 text-sm text-white/65">
              <a href="mailto:sergio@solyontechnologies.com" className="block transition hover:text-white">
                sergio@solyontechnologies.com
              </a>
              <a
                href="https://wa.me/573147903517"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-white"
              >
                +57 314 790 3517
              </a>
              <p>Medellín, Colombia</p>
            </div>
          </div>

          <div className="system-card">
            <p className="text-xs uppercase tracking-[0.18em] text-[#E6BC68]">{t.routesEyebrow}</p>
            <h3 className="mt-5 text-2xl font-semibold">{t.routesTitle}</h3>
            <div className="mt-8 space-y-5">
              {t.routes.map((route) => (
                <div key={route.title} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <p className="font-semibold text-white/85">{route.title}</p>
                  <p className="mt-2 text-sm leading-7 text-white/50">{route.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow">{t.prepareEyebrow}</p>
          <h2 className="section-title mt-5">{t.prepareTitle}</h2>
          <p className="section-copy mt-7">{t.prepareBody}</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.prepareItems.map((item, index) => (
            <article key={item.title} className="system-card">
              <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "Contacto institucional",
  title: "Conversemos cuando exista un problema real y una ruta clara de colaboración.",
  intro: "SOLYON conversa con organizaciones que buscan inteligencia aplicada, automatización, tecnología de riesgo o colaboración institucional. Priorizamos oportunidades con alcance, usuario y criterio de validación definidos.",
  directEyebrow: "Contacto directo",
  directTitle: "Una conversación precisa desde el inicio",
  directBody: "El formulario anterior no tenía una integración verificable de envío. Por eso esta V1 utiliza canales directos hasta implementar y probar un flujo de contacto con recepción confirmada, privacidad y seguimiento.",
  routesEyebrow: "Tipos de conversación",
  routesTitle: "Dónde puede existir ajuste estratégico",
  routes: [
    { title: "Aseguradoras, brokers y operadores", body: "Problemas de riesgo, distribución, documentación, servicio, cumplimiento y operación dentro de trucking." },
    { title: "Instituciones y ciudades", body: "Pilotos, investigación aplicada, movilidad, accesibilidad y desarrollo de capacidad tecnológica." },
    { title: "Fondos e inversionistas estratégicos", body: "Conversaciones de largo plazo sobre deeptech aplicada, infraestructura, datos y escalamiento responsable." },
    { title: "Equipos tecnológicos", body: "Infraestructura cloud, agentes de IA, automatización, integraciones y colaboración técnica." },
  ],
  prepareEyebrow: "Antes de escribir",
  prepareTitle: "La información que permite avanzar más rápido",
  prepareBody: "Un mensaje útil debe permitir distinguir oportunidad, experimento y compromiso real.",
  prepareItems: [
    { title: "Problema y usuario", body: "Qué proceso requiere intervención y quién experimenta la fricción." },
    { title: "Alcance y evidencia", body: "Qué información existe, qué ha sido probado y qué permanece como hipótesis." },
    { title: "Resultado esperado", body: "Qué decisión, piloto, integración o conversación se busca iniciar." },
  ],
};

const en = {
  eyebrow: "Institutional contact",
  title: "Let us talk when there is a real problem and a clear path to collaboration.",
  intro: "SOLYON engages organizations seeking applied intelligence, automation, risk technology or institutional collaboration. We prioritize opportunities with defined scope, users and validation criteria.",
  directEyebrow: "Direct contact",
  directTitle: "A precise conversation from the beginning",
  directBody: "The previous form did not have a verifiable delivery integration. This V1 therefore uses direct channels until a contact workflow with confirmed receipt, privacy and follow-up is implemented and tested.",
  routesEyebrow: "Conversation types",
  routesTitle: "Where strategic fit may exist",
  routes: [
    { title: "Insurers, brokers and operators", body: "Problems involving risk, distribution, documentation, service, compliance and trucking operations." },
    { title: "Institutions and cities", body: "Pilots, applied research, mobility, accessibility and technology capability development." },
    { title: "Funds and strategic investors", body: "Long-term conversations about applied deeptech, infrastructure, data and responsible scaling." },
    { title: "Technology teams", body: "Cloud infrastructure, AI agents, automation, integrations and technical collaboration." },
  ],
  prepareEyebrow: "Before reaching out",
  prepareTitle: "The information that helps move faster",
  prepareBody: "A useful message should make it possible to distinguish opportunity, experiment and real commitment.",
  prepareItems: [
    { title: "Problem and user", body: "Which process requires intervention and who experiences the friction." },
    { title: "Scope and evidence", body: "What information exists, what has been tested and what remains a hypothesis." },
    { title: "Expected outcome", body: "Which decision, pilot, integration or conversation should begin." },
  ],
};
