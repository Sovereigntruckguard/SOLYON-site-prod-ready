"use client";

import Link from "next/link";
import DynamicHero from "@/components/DynamicHero";
import { useLanguage } from "@/lib/language";

export default function Page() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      <DynamicHero />

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <p className="eyebrow">{t.companyEyebrow}</p>
          <div>
            <h2 className="section-title">{t.companyTitle}</h2>
            <p className="section-copy mt-6">{t.companyBody}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">{t.thesisEyebrow}</p>
            <h2 className="section-title mt-5">{t.thesisTitle}</h2>
            <p className="section-copy mt-6">{t.thesisBody}</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {t.thesisCards.map((card, index) => (
              <article key={card.title} className="system-card">
                <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
                <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow">{t.architectureEyebrow}</p>
          <h2 className="section-title mt-5">{t.architectureTitle}</h2>
          <p className="section-copy mt-6">{t.architectureBody}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.architecture.map((item) => (
            <article key={item.name} className="system-card flex min-h-[310px] flex-col">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">{item.type}</p>
              <h3 className="mt-5 text-2xl font-semibold">{item.name}</h3>
              <p className="mt-5 flex-1 text-sm leading-7 text-white/55">{item.body}</p>
              <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-6 text-[#E6BC68]">
                {item.status}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">{t.evidenceEyebrow}</p>
            <h2 className="section-title mt-5">{t.evidenceTitle}</h2>
            <p className="section-copy mt-6">{t.evidenceBody}</p>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {t.evidenceItems.map((item) => (
              <div key={item.label} className="bg-[#0b0e12] p-7">
                <p className="text-2xl font-semibold text-white md:text-3xl">{item.value}</p>
                <p className="mt-3 text-xs leading-5 text-white/45">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="rounded-3xl border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] to-[#0b0e12] p-8 md:p-14">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">{t.ctaEyebrow}</p>
              <h2 className="section-title mt-5">{t.ctaTitle}</h2>
              <p className="section-copy mt-6">{t.ctaBody}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]"
            >
              {t.ctaButton}
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="section-shell grid gap-8 py-12 text-xs text-white/45 md:grid-cols-3">
          <div>
            <p className="font-semibold text-white/75">SOLYON Technologies S.A.S.</p>
            <p className="mt-2">Medellin, Colombia</p>
          </div>
          <div>
            <p>sergio@solyontechnologies.com</p>
            <p className="mt-2">+57 314 790 3517</p>
          </div>
          <div className="md:text-right">
            <p>© {new Date().getFullYear()} SOLYON Technologies S.A.S.</p>
            <p className="mt-2">{t.footer}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const es = {
  companyEyebrow: "Compañía",
  companyTitle: "Un laboratorio tecnológico construido desde la operación real.",
  companyBody:
    "SOLYON Technologies es la compañía madre y laboratorio de inteligencia artificial del ecosistema. Su función es convertir conocimiento operativo, documentación y datos de campo en sistemas tecnológicos aplicables, auditables y escalables.",
  thesisEyebrow: "Método",
  thesisTitle: "No empezamos con una aplicación. Empezamos con el problema.",
  thesisBody:
    "Nuestra arquitectura parte de procesos de alta fricción que ya conocemos desde dentro. Documentamos el sistema, estructuramos la evidencia y construimos tecnología para intervenirlo con mayor precisión.",
  thesisCards: [
    { title: "Evidencia operativa", body: "Experiencia, procesos, documentos y casos reales antes de definir la solución tecnológica." },
    { title: "Arquitectura de riesgo", body: "Modelamos decisiones, dependencias, controles y flujos en lugar de automatizar tareas aisladas." },
    { title: "Validación aplicada", body: "Probamos capacidades dentro de entornos operativos e institucionales con usuarios y restricciones reales." },
  ],
  architectureEyebrow: "Arquitectura empresarial",
  architectureTitle: "Una compañía, un proyecto central y entornos diferenciados de aplicación.",
  architectureBody:
    "Cada componente cumple una función específica. No presentamos módulos como negocios independientes ni confundimos visión regulatoria futura con condición actual.",
  architecture: [
    {
      type: "Proyecto central",
      name: "Intelligence Latin Truck Risk Operating System",
      body: "Arquitectura tecnológica y tesis de riesgo para organizar inteligencia operativa, automatización y toma de decisiones alrededor del camionero latino en Estados Unidos.",
      status: "En construcción y validación por capacidades.",
    },
    {
      type: "Operación y entorno de validación",
      name: "Sovereign Truckguard",
      body: "Canal comercial y operación de seguros donde el conocimiento del mercado, los flujos y los datos permiten validar tecnología aplicada al trucking.",
      status: "No se presenta actualmente como insurer ni MGA.",
    },
    {
      type: "Producto independiente",
      name: "SOLYON Move",
      body: "Tecnología de movilidad y accesibilidad desarrollada para personas con movilidad reducida y contextos urbanos, con trayectoria institucional propia.",
      status: "Proyecto separado de la tesis de trucking.",
    },
  ],
  evidenceEyebrow: "Base de conocimiento",
  evidenceTitle: "La tecnología se apoya en un corpus operativo construido durante años.",
  evidenceBody:
    "La documentación histórica no se publica completa: se convierte en procesos, modelos, criterios de producto y propiedad intelectual protegible.",
  evidenceItems: [
    { value: "8 años", label: "de experiencia acumulada en operaciones vinculadas al trucking en Estados Unidos" },
    { value: "17", label: "cuadernos manuscritos que registran decisiones, procesos y aprendizaje operativo" },
    { value: "89 GB", label: "de documentación operativa organizada como fuente de conocimiento empresarial" },
    { value: "2 países", label: "laboratorio tecnológico en Colombia y entorno operativo en Estados Unidos" },
  ],
  ctaEyebrow: "Colaboración",
  ctaTitle: "Construimos con organizaciones que enfrentan problemas operativos reales.",
  ctaBody:
    "Conversamos con instituciones, compañías, investigadores, aseguradoras, operadores e inversionistas estratégicos cuando existe un problema verificable y una ruta clara de validación.",
  ctaButton: "Contacto institucional",
  footer: "Todos los derechos reservados.",
};

const en = {
  companyEyebrow: "Company",
  companyTitle: "A technology laboratory built from real operations.",
  companyBody:
    "SOLYON Technologies is the parent company and artificial intelligence laboratory of the ecosystem. Its role is to transform operating knowledge, documentation and field data into applicable, auditable and scalable systems.",
  thesisEyebrow: "Method",
  thesisTitle: "We do not start with an app. We start with the problem.",
  thesisBody:
    "Our architecture begins with high-friction processes we know from the inside. We document the system, structure the evidence and build technology to intervene with greater precision.",
  thesisCards: [
    { title: "Operational evidence", body: "Experience, processes, documents and real cases before defining the technology solution." },
    { title: "Risk architecture", body: "We model decisions, dependencies, controls and workflows instead of automating isolated tasks." },
    { title: "Applied validation", body: "We test capabilities in operating and institutional environments with real users and constraints." },
  ],
  architectureEyebrow: "Enterprise architecture",
  architectureTitle: "One company, one central project and distinct application environments.",
  architectureBody:
    "Each component has a defined role. We do not present modules as standalone businesses or confuse long-term regulatory vision with current status.",
  architecture: [
    {
      type: "Central project",
      name: "Intelligence Latin Truck Risk Operating System",
      body: "Technology architecture and risk thesis designed to organize operational intelligence, automation and decision-making around Latin truckers in the United States.",
      status: "Under construction and capability-level validation.",
    },
    {
      type: "Operation and validation environment",
      name: "Sovereign Truckguard",
      body: "Commercial channel and insurance operation where market knowledge, workflows and data support validation of technology applied to trucking.",
      status: "Not currently presented as an insurer or MGA.",
    },
    {
      type: "Independent product",
      name: "SOLYON Move",
      body: "Mobility and accessibility technology developed for people with reduced mobility and urban environments, with its own institutional trajectory.",
      status: "Separate from the trucking thesis.",
    },
  ],
  evidenceEyebrow: "Knowledge base",
  evidenceTitle: "The technology is grounded in an operating corpus built over years.",
  evidenceBody:
    "The historical documentation is not published in full. It is transformed into processes, models, product criteria and protectable intellectual property.",
  evidenceItems: [
    { value: "8 years", label: "of accumulated experience in operations connected to US trucking" },
    { value: "17", label: "handwritten notebooks documenting decisions, processes and operating lessons" },
    { value: "89 GB", label: "of operating documentation organized as a source of enterprise knowledge" },
    { value: "2 countries", label: "technology laboratory in Colombia and operating environment in the United States" },
  ],
  ctaEyebrow: "Collaboration",
  ctaTitle: "We build with organizations facing real operational problems.",
  ctaBody:
    "We engage institutions, companies, researchers, insurers, operators and strategic investors when there is a verifiable problem and a clear validation path.",
  ctaButton: "Institutional contact",
  footer: "All rights reserved.",
};
