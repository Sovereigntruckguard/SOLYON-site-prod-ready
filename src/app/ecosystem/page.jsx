"use client";

import Image from "next/image";
import Link from "next/link";
import DeeptechSystemVisual from "@/components/DeeptechSystemVisual";
import GooglePlayLink from "@/components/GooglePlayLink";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export default function EcosystemPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(230,188,104,0.12),transparent_34rem)]" />
        <div className="section-shell relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-7xl">{t.title}</h1>
            <p className="section-copy mt-7">{t.intro}</p>
          </div>
          <DeeptechSystemVisual compact />
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="eyebrow">{t.architectureEyebrow}</p>
          <h2 className="section-title mt-5">{t.architectureTitle}</h2>
          <p className="section-copy mt-7">{t.architectureBody}</p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {t.entities.map((item) => (
            <article key={item.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12]">
              <div className="relative h-52 overflow-hidden border-b border-white/10">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/60 backdrop-blur-lg">{item.asset}</span>
              </div>
              <div className="flex min-h-[360px] flex-col p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-[#E6BC68]">{item.type}</p>
                <h3 className="mt-5 text-2xl font-semibold">{item.name}</h3>
                <p className="mt-5 flex-1 text-sm leading-7 text-white/55">{item.body}</p>
                <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-6 text-[#E6BC68]">{item.status}</p>
                {item.name === "SOLYON Move" && <GooglePlayLink label={t.download} compact className="mt-5" />}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="eyebrow">{t.relationshipsEyebrow}</p>
            <h2 className="section-title mt-5">{t.relationshipsTitle}</h2>
            <p className="section-copy mt-7">{t.relationshipsBody}</p>
          </div>
          <div className="space-y-5">
            {t.relationships.map((item, index) => (
              <article key={item.title} className="system-card flex gap-5">
                <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.modulesEyebrow}</p>
            <h2 className="section-title mt-5">{t.modulesTitle}</h2>
            <p className="section-copy mt-7">{t.modulesBody}</p>
            <p className="mt-8 max-w-4xl text-xs leading-6 text-white/40">{t.modulesNote}</p>
            <Link href="/technology" className="mt-9 inline-flex rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e]">{t.modulesButton}</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.modules.map((module, index) => (
              <div key={module.title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.12em] text-white/35">{module.stage}</span>
                </div>
                <p className="mt-4 text-sm font-semibold text-white/82">{module.title}</p>
                <p className="mt-2 text-xs leading-5 text-white/42">{module.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "Ecosistema · Arquitectura empresarial",
  title: "Una compañía madre. Un proyecto central. Dos entornos de validación.",
  intro: "SOLYON organiza compañías, productos, operaciones y módulos según su función real. Esta estructura protege la tesis tecnológica, evita confundir validación con producto terminado y permite asignar recursos con disciplina.",
  architectureEyebrow: "Estructura",
  architectureTitle: "Cada pieza existe para cumplir una función distinta.",
  architectureBody: "SOLYON Technologies construye la capacidad. El sistema operativo de riesgo concentra la tesis tecnológica. Sovereign Truckguard y SOLYON Move someten esa capacidad a problemas reales en industrias diferentes.",
  download: "Descargar gratis en Google Play",
  entities: [
    { type: "Compañía madre y laboratorio", name: "SOLYON Technologies", image: "/visual/about-lab.png", alt: "Laboratorio y equipo de SOLYON Technologies en Medellín", asset: "ACTIVO EXISTENTE", body: "Desarrolla arquitectura tecnológica, IA aplicada, productos, conocimiento reutilizable y capacidades compartidas por el ecosistema.", status: "Centro tecnológico, organizacional y estratégico del ecosistema." },
    { type: "Operación de seguros y validación", name: "Sovereign Truckguard", image: "/visual/product-truckboss-quoting-mobile.png", alt: "Tecnología aplicada a Sovereign Truckguard", asset: "VISUAL DE PRODUCTO · VALIDAR REEMPLAZO", body: "Canal comercial y entorno real para aprender de adquisición, cotización, cumplimiento, servicio, documentación y renovación en trucking insurance.", status: "Agencia tecnológica; no insurer ni MGA actualmente." },
    { type: "Producto y validación institucional", name: "SOLYON Move", image: "/visual/solyon_move_institucional.png", alt: "SOLYON Move como producto de movilidad accesible", asset: "ACTIVO EXISTENTE · VALIDAR REEMPLAZO", body: "Aplicación y capa de gestión institucional que validan producto, CRM, personalización, QA, ejecución pública e integración futura de datos urbanos.", status: "Producto público gratuito y caso de validación institucional en Medellín." },
  ],
  relationshipsEyebrow: "Cómo se conectan",
  relationshipsTitle: "Evidencia, laboratorio y aplicación.",
  relationshipsBody: "La integración no significa que todas las iniciativas sean el mismo negocio. Significa que comparten conocimiento, capacidades y una disciplina común de construcción.",
  relationships: [
    { title: "La operación genera evidencia", body: "Sovereign Truckguard expone problemas, flujos, criterios y excepciones del mercado camionero y asegurador." },
    { title: "El laboratorio convierte evidencia en capacidad", body: "SOLYON estructura conocimiento y desarrolla herramientas, módulos, automatizaciones y sistemas con alcance definido." },
    { title: "Los productos prueban utilidad", body: "SOLYON Move y las capacidades aplicadas en Sovereign permiten observar desempeño bajo usuarios, instituciones y restricciones reales." },
    { title: "La evidencia vuelve al sistema", body: "Cada validación alimenta documentación, decisiones de producto, controles y nuevas iteraciones del laboratorio." },
  ],
  modulesEyebrow: "Módulos SOS",
  modulesTitle: "Capacidades interoperables, no negocios independientes.",
  modulesBody: "Los módulos resuelven partes concretas del sistema operativo y pueden compartir datos, reglas, agentes e infraestructura.",
  modulesButton: "Explorar la arquitectura tecnológica",
  modules: [
    { title: "Contactabilidad y CRM", stage: "Prioridad", body: "Gestión de leads, oportunidades, seguimientos y renovación." },
    { title: "Cotización y underwriting", stage: "En diseño", body: "Estructuración de datos, criterios y preparación de riesgos." },
    { title: "Cumplimiento y documentación", stage: "En validación", body: "Controles, archivos, trazabilidad y flujos regulatorios." },
    { title: "Certificados y servicio", stage: "En diseño", body: "Atención, solicitudes y coordinación documental." },
    { title: "Renovación y seguimiento", stage: "En validación", body: "Calendarios, contacto preventivo y continuidad comercial." },
    { title: "Formación y Academy", stage: "En desarrollo", body: "Conocimiento operativo convertido en aprendizaje estructurado." },
    { title: "Reporting y analítica", stage: "En construcción", body: "Visibilidad de operación, evidencia y métricas controladas." },
    { title: "Orquestación de agentes", stage: "En desarrollo", body: "Coordinación de tareas especializadas bajo reglas definidas." },
  ],
  modulesNote: "La presencia de un módulo no implica disponibilidad comercial, validación completa ni autonomía como unidad de negocio. Cada capacidad conserva su etapa real.",
};

const en = {
  eyebrow: "Ecosystem · Enterprise architecture",
  title: "One parent company. One central project. Two validation environments.",
  intro: "SOLYON organizes companies, products, operations and modules according to their actual function. This structure protects the technology thesis, prevents validation from being confused with finished product and supports disciplined resource allocation.",
  architectureEyebrow: "Structure",
  architectureTitle: "Every piece exists to perform a different function.",
  architectureBody: "SOLYON Technologies builds the capability. The risk operating system concentrates the technology thesis. Sovereign Truckguard and SOLYON Move submit that capability to real problems in different industries.",
  download: "Download free on Google Play",
  entities: [
    { type: "Parent company and laboratory", name: "SOLYON Technologies", image: "/visual/about-lab.png", alt: "SOLYON Technologies laboratory and team in Medellín", asset: "EXISTING ASSET", body: "Develops technology architecture, applied AI, products, reusable knowledge and capabilities shared throughout the ecosystem.", status: "Technology, organizational and strategic center of the ecosystem." },
    { type: "Insurance operation and validation", name: "Sovereign Truckguard", image: "/visual/product-truckboss-quoting-mobile.png", alt: "Technology applied to Sovereign Truckguard", asset: "PRODUCT VISUAL · REPLACEMENT REVIEW", body: "Commercial channel and real environment for learning from acquisition, quoting, compliance, service, documentation and renewal in trucking insurance.", status: "Technology-enabled agency; not currently an insurer or MGA." },
    { type: "Product and institutional validation", name: "SOLYON Move", image: "/visual/solyon_move_institucional.png", alt: "SOLYON Move accessible mobility product", asset: "EXISTING ASSET · REPLACEMENT REVIEW", body: "Application and institutional management layer validating product, CRM, personalization, QA, public execution and future urban-data integration.", status: "Free public product and institutional validation case in Medellín." },
  ],
  relationshipsEyebrow: "How they connect",
  relationshipsTitle: "Evidence, laboratory and application.",
  relationshipsBody: "Integration does not mean every initiative is the same business. It means they share knowledge, capabilities and a common construction discipline.",
  relationships: [
    { title: "Operations generate evidence", body: "Sovereign Truckguard exposes problems, workflows, criteria and exceptions in trucking and insurance." },
    { title: "The laboratory turns evidence into capability", body: "SOLYON structures knowledge and develops tools, modules, automations and systems with defined scope." },
    { title: "Products test utility", body: "SOLYON Move and capabilities applied through Sovereign show performance under real users, institutions and constraints." },
    { title: "Evidence returns to the system", body: "Each validation feeds documentation, product decisions, controls and new laboratory iterations." },
  ],
  modulesEyebrow: "SOS modules",
  modulesTitle: "Interoperable capabilities, not standalone businesses.",
  modulesBody: "Modules solve specific parts of the operating system and may share data, rules, agents and infrastructure.",
  modulesButton: "Explore the technology architecture",
  modules: [
    { title: "Contactability and CRM", stage: "Priority", body: "Lead, opportunity, follow-up and renewal management." },
    { title: "Quoting and underwriting", stage: "In design", body: "Data structuring, criteria and risk preparation." },
    { title: "Compliance and documentation", stage: "In validation", body: "Controls, files, traceability and regulatory workflows." },
    { title: "Certificates and service", stage: "In design", body: "Service, requests and document coordination." },
    { title: "Renewal and follow-up", stage: "In validation", body: "Calendars, preventive contact and commercial continuity." },
    { title: "Training and Academy", stage: "In development", body: "Operating knowledge converted into structured learning." },
    { title: "Reporting and analytics", stage: "In construction", body: "Visibility into operations, evidence and controlled metrics." },
    { title: "Agent orchestration", stage: "In development", body: "Coordination of specialized tasks under defined rules." },
  ],
  modulesNote: "A module's presence does not imply commercial availability, complete validation or autonomy as a business unit. Every capability retains its actual stage.",
};
