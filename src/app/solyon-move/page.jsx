"use client";

import Image from "next/image";
import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import MoveCRMVisual from "@/components/MoveCRMVisual";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export default function SolyonMovePage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.14),transparent_32rem)]" />
        <div className="section-shell relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-7xl">{t.title}</h1>
            <p className="section-copy mt-7">{t.body}</p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-sm leading-7 text-white/58">
              <strong className="text-white/85">{t.roleLabel}</strong> {t.roleBody}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <GooglePlayLink label={t.download} />
              <Link href="/ecosystem" className="inline-flex justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white">{t.primary}</Link>
              <a href="https://www.youtube.com/watch?v=0SyayXeU42g" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white">{t.video}</a>
            </div>
            <p className="mt-4 text-xs leading-5 text-white/42">{t.downloadNote}</p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
            <Image src="/visual/solyon_move_institucional.png" alt={t.heroAlt} width={1200} height={820} priority sizes="(max-width: 1024px) 100vw, 55vw" className="w-full rounded-[1.45rem] object-cover" />
            <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65 backdrop-blur-lg">{t.assetLabel}</span>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="eyebrow">{t.problemEyebrow}</p>
          <h2 className="section-title mt-5">{t.problemTitle}</h2>
          <p className="section-copy mt-6">{t.problemBody}</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.problemCards.map((item) => (
            <article key={item.title} className="system-card">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="eyebrow">{t.productEyebrow}</p>
              <h2 className="section-title mt-5">{t.productTitle}</h2>
            </div>
            <p className="section-copy">{t.productBody}</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-[#0b0e12] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">{t.appLabel}</p>
              <h3 className="mt-5 text-3xl font-semibold">{t.appTitle}</h3>
              <p className="mt-5 text-sm leading-7 text-white/55">{t.appBody}</p>
              <div className="mt-7 space-y-3">
                {t.appItems.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-white/55">{item}</div>)}
              </div>
              <GooglePlayLink label={t.download} className="mt-8" />
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-[#0b0e12] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">{t.crmLabel}</p>
              <h3 className="mt-5 text-3xl font-semibold">{t.crmTitle}</h3>
              <p className="mt-5 text-sm leading-7 text-white/55">{t.crmBody}</p>
              <div className="mt-7 space-y-3">
                {t.crmItems.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-white/55">{item}</div>)}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="eyebrow">{t.crmVisualEyebrow}</p>
          <h2 className="section-title mt-5">{t.crmVisualTitle}</h2>
          <p className="section-copy mt-6">{t.crmVisualBody}</p>
        </div>
        <div className="mt-12">
          <MoveCRMVisual />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3">
            <Image src="/visual/impact-institutional.png" alt={t.institutionalAlt} width={1100} height={760} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full rounded-[1.45rem] object-cover" />
            <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65 backdrop-blur-lg">{t.assetLabel}</span>
          </div>
          <div>
            <p className="eyebrow">{t.validationEyebrow}</p>
            <h2 className="section-title mt-5">{t.validationTitle}</h2>
            <p className="section-copy mt-6">{t.validationBody}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.validationItems.map((item) => <div key={item.title} className="rounded-xl border border-white/10 bg-[#0b0e12] p-5"><p className="text-sm font-semibold text-white/82">{item.title}</p><p className="mt-2 text-xs leading-5 text-white/42">{item.body}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="eyebrow">{t.techEyebrow}</p>
          <h2 className="section-title mt-5">{t.techTitle}</h2>
          <p className="section-copy mt-6">{t.techBody}</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.techCards.map((item) => (
            <article key={item.title} className="system-card">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">{item.label}</p>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-24 md:pb-32">
        <div className="rounded-3xl border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] to-[#0b0e12] p-8 md:p-14">
          <p className="eyebrow">{t.ctaEyebrow}</p>
          <h2 className="section-title mt-5">{t.ctaTitle}</h2>
          <p className="section-copy mt-6">{t.ctaBody}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <GooglePlayLink label={t.download} />
            <Link href="/contact" className="inline-flex justify-center rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e]">{t.ctaButton}</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "Caso de validación · Movilidad accesible · Medellín",
  title: "SOLYON Move demuestra cómo el laboratorio convierte un reto urbano en producto y sistema.",
  body: "SOLYON Move combina una aplicación orientada al usuario con una capa de gestión institucional para apoyar movilidad accesible, seguimiento operativo y aprendizaje de ciudad.",
  roleLabel: "Papel dentro del ecosistema:",
  roleBody: "no es el centro de SOLYON Technologies. Es un entorno de validación que demuestra capacidad de producto, CRM, personalización, ejecución institucional e integración de datos urbanos.",
  primary: "Entender el ecosistema completo",
  video: "Ver video del proyecto",
  download: "Descargar gratis en Google Play",
  downloadNote: "La aplicación está publicada oficialmente y disponible sin costo para dispositivos Android.",
  heroAlt: "SOLYON Move como solución de movilidad accesible desarrollada en Medellín",
  assetLabel: "ACTIVO EXISTENTE · VALIDAR REEMPLAZO",
  problemEyebrow: "Problema urbano",
  problemTitle: "La accesibilidad depende de variables que un mapa tradicional no comprende.",
  problemBody: "Pendientes, superficies, clima, barreras físicas y características personales pueden transformar un trayecto aparentemente viable en una experiencia difícil o riesgosa. El reto no es únicamente calcular una ruta: es comprender a la persona y el contexto.",
  problemCards: [
    { title: "Información incompleta", body: "Los mapas convencionales no describen todas las condiciones relevantes para una persona con movilidad reducida." },
    { title: "Poca personalización", body: "Tipo de movilidad, edad, peso y capacidad funcional cambian el esfuerzo y el riesgo de un trayecto." },
    { title: "Gestión fragmentada", body: "Las instituciones necesitan una capa para observar usuarios, casos, barreras, alertas y evolución del programa." },
  ],
  productEyebrow: "Dos capas de valor",
  productTitle: "Experiencia para el usuario y capacidad de gestión para la ciudad.",
  productBody: "La propuesta de SOLYON Move no termina en la pantalla del teléfono. Su arquitectura conecta una experiencia personalizada con una capa institucional que permite administrar, hacer seguimiento y aprender de la operación.",
  appLabel: "Capa 01 · Usuario",
  appTitle: "Aplicación de movilidad accesible",
  appBody: "Apoya la planificación del viaje considerando variables personales y condiciones del entorno.",
  appItems: ["Perfil y tipo de movilidad", "Personalización por edad y peso", "Condiciones de superficie y ruta", "Alertas climáticas y de contexto"],
  crmLabel: "Capa 02 · Institución",
  crmTitle: "CRM y gestión operativa",
  crmBody: "Organiza la relación entre usuarios, programas, incidencias, rutas, acompañamiento e información útil para la toma de decisiones.",
  crmItems: ["Seguimiento de usuarios y casos", "Gestión de programas y actores", "Visualización de barreras y alertas", "Base para analítica e inteligencia urbana"],
  crmVisualEyebrow: "Visual funcional",
  crmVisualTitle: "El CRM convierte interacción individual en capacidad institucional.",
  crmVisualBody: "La siguiente visual es un mockup conceptual, claramente marcado. Representa la función del CRM mientras se seleccionan y aprueban las capturas reales disponibles en el archivo de SOLYON.",
  institutionalAlt: "Proceso institucional y valor de ciudad generado por SOLYON Move",
  validationEyebrow: "Incubación y validación",
  validationTitle: "Una solución construida dentro del ecosistema de innovación de Medellín.",
  validationBody: "SOLYON Move reúne aprendizaje empresarial, desarrollo tecnológico y ejecución institucional. Este recorrido es evidencia de la capacidad de SOLYON para trabajar con actores de ciudad y convertir acompañamiento en producto verificable.",
  validationItems: [
    { title: "Distrito CTI de Medellín", body: "Incubación y fortalecimiento dentro del ecosistema local de ciencia, tecnología e innovación." },
    { title: "Créame y UPB", body: "Acompañamiento durante la estructuración empresarial y tecnológica." },
    { title: "Ruta N", body: "Articulación institucional, seguimiento y ejecución del piloto en Medellín." },
    { title: "Toyota Mobility Foundation", body: "Marco internacional de innovación orientado a movilidad e impacto." },
  ],
  techEyebrow: "Capacidades validadas",
  techTitle: "SOLYON Move valida más que movilidad.",
  techBody: "El proyecto permite probar componentes reutilizables por el laboratorio en otros contextos: personalización, CRM, flujos, reporting, QA, integración de datos y ejecución con múltiples actores.",
  techCards: [
    { label: "01", title: "Personalización", body: "Modelado de recomendaciones a partir de características individuales y contexto." },
    { label: "02", title: "CRM institucional", body: "Seguimiento, coordinación y control operativo de programas y usuarios." },
    { label: "03", title: "Datos urbanos", body: "Hoja de ruta para integrar señales de ciudad y fuentes como SIATA." },
    { label: "04", title: "Ejecución verificable", body: "Producto, QA, publicación, documentación y aprendizaje institucional." },
  ],
  ctaEyebrow: "Escalamiento responsable",
  ctaTitle: "El siguiente paso es ampliar datos, validación y capacidad institucional.",
  ctaBody: "SOLYON busca aliados de ciudad, universidades, organizaciones de discapacidad, operadores y fondos de impacto para evolucionar SOLYON Move sin separarlo de la tesis tecnológica general del laboratorio.",
  ctaButton: "Conversar con SOLYON",
};

const en = {
  eyebrow: "Validation case · Accessible mobility · Medellín",
  title: "SOLYON Move shows how the laboratory turns an urban challenge into a product and system.",
  body: "SOLYON Move combines a user-facing application with an institutional management layer supporting accessible mobility, operating monitoring and city learning.",
  roleLabel: "Role within the ecosystem:",
  roleBody: "it is not the center of SOLYON Technologies. It is a validation environment demonstrating product, CRM, personalization, institutional execution and urban-data integration capabilities.",
  primary: "Understand the complete ecosystem",
  video: "Watch the project video",
  download: "Download free on Google Play",
  downloadNote: "The application is officially published and available at no cost for Android devices.",
  heroAlt: "SOLYON Move accessible mobility solution developed in Medellín",
  assetLabel: "EXISTING ASSET · REPLACEMENT REVIEW",
  problemEyebrow: "Urban problem",
  problemTitle: "Accessibility depends on variables a traditional map does not understand.",
  problemBody: "Slopes, surfaces, weather, physical barriers and personal characteristics can turn an apparently viable route into a difficult or risky experience. The challenge is not merely calculating a route. It is understanding the person and context.",
  problemCards: [
    { title: "Incomplete information", body: "Conventional maps do not describe every condition relevant to a person with reduced mobility." },
    { title: "Limited personalization", body: "Mobility type, age, weight and functional capacity alter the effort and risk of a journey." },
    { title: "Fragmented management", body: "Institutions need a layer for observing users, cases, barriers, alerts and program evolution." },
  ],
  productEyebrow: "Two layers of value",
  productTitle: "A user experience and management capability for the city.",
  productBody: "The SOLYON Move proposition does not end on the phone screen. Its architecture connects a personalized experience with an institutional layer used to manage, monitor and learn from operations.",
  appLabel: "Layer 01 · User",
  appTitle: "Accessible mobility application",
  appBody: "Supports trip planning while considering personal variables and environmental conditions.",
  appItems: ["Mobility profile and type", "Personalization by age and weight", "Surface and route conditions", "Weather and contextual alerts"],
  crmLabel: "Layer 02 · Institution",
  crmTitle: "CRM and operating management",
  crmBody: "Organizes the relationship among users, programs, incidents, routes, support and information useful for decision-making.",
  crmItems: ["User and case monitoring", "Program and stakeholder management", "Barrier and alert visualization", "Foundation for analytics and urban intelligence"],
  crmVisualEyebrow: "Functional visual",
  crmVisualTitle: "The CRM turns individual interaction into institutional capability.",
  crmVisualBody: "The following visual is a clearly labeled conceptual mockup. It represents the CRM function while real screenshots from SOLYON's archive are selected and approved.",
  institutionalAlt: "Institutional process and city value generated by SOLYON Move",
  validationEyebrow: "Incubation and validation",
  validationTitle: "A solution built within Medellín's innovation ecosystem.",
  validationBody: "SOLYON Move combines business learning, technology development and institutional execution. This journey is evidence of SOLYON's ability to work with city stakeholders and turn support into a verifiable product.",
  validationItems: [
    { title: "Medellín CTI District", body: "Incubation and strengthening within the local science, technology and innovation ecosystem." },
    { title: "Créame and UPB", body: "Support during business and technology structuring." },
    { title: "Ruta N", body: "Institutional articulation, monitoring and pilot execution in Medellín." },
    { title: "Toyota Mobility Foundation", body: "International innovation framework focused on mobility and impact." },
  ],
  techEyebrow: "Validated capabilities",
  techTitle: "SOLYON Move validates more than mobility.",
  techBody: "The project tests components reusable by the laboratory in other contexts: personalization, CRM, workflows, reporting, QA, data integration and multi-stakeholder execution.",
  techCards: [
    { label: "01", title: "Personalization", body: "Recommendation modeling based on individual characteristics and context." },
    { label: "02", title: "Institutional CRM", body: "Monitoring, coordination and operating control for programs and users." },
    { label: "03", title: "Urban data", body: "Roadmap for incorporating city signals and sources such as SIATA." },
    { label: "04", title: "Verifiable execution", body: "Product, QA, publication, documentation and institutional learning." },
  ],
  ctaEyebrow: "Responsible scale",
  ctaTitle: "The next step is expanding data, validation and institutional capability.",
  ctaBody: "SOLYON seeks city partners, universities, disability organizations, operators and impact funds to evolve SOLYON Move without separating it from the laboratory's broader technology thesis.",
  ctaButton: "Talk with SOLYON",
};
