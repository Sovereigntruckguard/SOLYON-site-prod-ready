"use client";

import Image from "next/image";
import Link from "next/link";
import DeeptechSystemVisual from "@/components/DeeptechSystemVisual";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export default function TechnologyPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(230,188,104,0.13),transparent_34rem)]" />
        <div className="section-shell relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-7xl">{t.title}</h1>
            <p className="section-copy mt-7">{t.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              {t.heroTags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs text-white/55">{tag}</span>)}
            </div>
          </div>
          <DeeptechSystemVisual />
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.coreEyebrow}</p>
            <h2 className="section-title mt-5">Intelligence Latin Truck Risk Operating System</h2>
            <p className="section-copy mt-7">{t.coreBody}</p>
            <p className="mt-6 rounded-xl border border-[#E6BC68]/20 bg-[#E6BC68]/5 p-4 text-sm leading-7 text-[#E6BC68]">{t.coreStatus}</p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3">
            <Image src="/visual/visual-arcanum-nexus.png" alt={t.coreAlt} width={1300} height={850} sizes="(max-width: 1024px) 100vw, 55vw" className="w-full rounded-[1.45rem] object-cover" />
            <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65 backdrop-blur-lg">{t.visualLabel}</span>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.layers.map((layer, index) => (
            <article key={layer.title} className="system-card">
              <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
              <h3 className="mt-5 text-xl font-semibold">{layer.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{layer.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">{t.capabilitiesEyebrow}</p>
            <h2 className="section-title mt-5">{t.capabilitiesTitle}</h2>
            <p className="section-copy mt-7">{t.capabilitiesBody}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.capabilities.map((item) => (
              <article key={item.title} className="system-card">
                <p className="text-xs uppercase tracking-[0.18em] text-[#E6BC68]">{item.stage}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-xs leading-6 text-white/40">{t.disclaimer}</p>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="eyebrow">{t.methodEyebrow}</p>
            <h2 className="section-title mt-5">{t.methodTitle}</h2>
            <p className="section-copy mt-7">{t.methodBody}</p>
            <Link href="/ecosystem" className="mt-9 inline-flex rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e]">{t.methodButton}</Link>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {t.method.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "Tecnología · Arquitectura DeepTech",
  title: "Construimos sistemas desde conocimiento difícil de replicar.",
  intro: "SOLYON transforma experiencia operativa, evidencia documental y comprensión de dominio en una arquitectura tecnológica verificable. Nuestra tesis no parte de una interfaz aislada: parte de convertir operación compleja en inteligencia, reglas, datos, automatización y soporte a decisiones.",
  heroTags: ["Risk intelligence", "CRM operativo", "Agentes de IA", "Memoria estructurada", "Automatización", "Trazabilidad"],
  coreEyebrow: "Proyecto tecnológico central",
  coreBody: "Es la arquitectura tecnológica y tesis de riesgo de SOLYON para organizar el conocimiento especializado del trucking latino en Estados Unidos y convertirlo en capacidades operativas, módulos interoperables y herramientas de apoyo a la decisión.",
  coreStatus: "Estado actual: construcción y validación progresiva por capacidades. No se presenta como una plataforma completamente terminada ni como un producto comercial único desplegado.",
  coreAlt: "Visual tecnológico existente del sistema de inteligencia de SOLYON",
  visualLabel: "ACTIVO EXISTENTE · VALIDAR REEMPLAZO",
  layers: [
    { title: "Evidencia operativa", body: "Experiencia, documentación, interacciones, excepciones y criterios acumulados dentro de operaciones reales." },
    { title: "Infraestructura de conocimiento", body: "Taxonomías, reglas, memoria estructurada y modelos para reutilizar conocimiento de dominio." },
    { title: "Capacidades operativas", body: "Automatización, agentes, flujos, controles y herramientas de soporte para equipos humanos." },
    { title: "Aplicaciones sectoriales", body: "Implementaciones en trucking, seguros y movilidad donde existe contexto suficiente para validar utilidad." },
  ],
  capabilitiesEyebrow: "Capacidades del laboratorio",
  capabilitiesTitle: "Una arquitectura modular que evoluciona por evidencia.",
  capabilitiesBody: "Cada capacidad conserva su etapa real. Algunas ya soportan trabajo operativo, otras están en desarrollo y otras continúan en validación.",
  capabilities: [
    { stage: "En diseño y validación", title: "Inteligencia de riesgo", body: "Estructuración de variables, eventos, señales y criterios para apoyar análisis y decisiones de riesgo." },
    { stage: "En desarrollo", title: "Agentes de IA", body: "Agentes especializados para asistir tareas, consultar conocimiento y coordinar procesos definidos." },
    { stage: "Capacidad activa", title: "Automatización de flujos", body: "Reducción de trabajo repetitivo en documentación, seguimiento, servicio y control." },
    { stage: "Capacidad activa", title: "Conocimiento estructurado", body: "Conversión de experiencia dispersa en memoria consultable, reglas y taxonomías operativas." },
    { stage: "En construcción", title: "Infraestructura de datos", body: "Captura, organización, validación y reutilización de información operacional." },
    { stage: "En validación", title: "Soporte a decisiones", body: "Herramientas que reducen incertidumbre sin reemplazar la responsabilidad humana." },
  ],
  disclaimer: "SOLYON no afirma autonomía total, autoaprendizaje irrestricto, eliminación de alucinaciones, plataforma terminada ni protección de patente sin documentación pública verificable.",
  methodEyebrow: "Método de construcción",
  methodTitle: "De la operación al sistema.",
  methodBody: "El laboratorio no comienza programando. Primero entiende el problema, documenta las excepciones y estructura el conocimiento. Solo después convierte esa base en producto y la somete a validación real.",
  methodButton: "Ver cómo se conecta el ecosistema",
  method: [
    { title: "Observar", body: "Comprender el proceso y sus restricciones desde la operación real." },
    { title: "Documentar", body: "Registrar decisiones, fallas, excepciones y dependencias." },
    { title: "Estructurar", body: "Transformar evidencia en modelos, reglas, datos y criterios de producto." },
    { title: "Construir", body: "Desarrollar capacidades y herramientas con alcance definido." },
    { title: "Validar", body: "Probar con usuarios, procesos e instituciones reales." },
    { title: "Escalar", body: "Replicar únicamente aquello que demuestre utilidad y control." },
  ],
};

const en = {
  eyebrow: "Technology · DeepTech architecture",
  title: "We build systems from knowledge that is difficult to replicate.",
  intro: "SOLYON turns operating experience, documented evidence and domain understanding into a verifiable technology architecture. Our thesis does not begin with an isolated interface. It begins by converting complex operations into intelligence, rules, data, automation and decision support.",
  heroTags: ["Risk intelligence", "Operating CRM", "AI agents", "Structured memory", "Automation", "Traceability"],
  coreEyebrow: "Central technology project",
  coreBody: "This is SOLYON's technology architecture and risk thesis for organizing specialized knowledge of Latin trucking in the United States and turning it into operating capabilities, interoperable modules and decision-support tools.",
  coreStatus: "Current status: progressive construction and capability-level validation. It is not presented as a fully completed platform or a single deployed commercial product.",
  coreAlt: "Existing SOLYON intelligence-system technology visual",
  visualLabel: "EXISTING ASSET · REPLACEMENT REVIEW",
  layers: [
    { title: "Operational evidence", body: "Experience, documentation, interactions, exceptions and criteria accumulated in real operations." },
    { title: "Knowledge infrastructure", body: "Taxonomies, rules, structured memory and models for reusing domain knowledge." },
    { title: "Operating capabilities", body: "Automation, agents, workflows, controls and tools supporting human teams." },
    { title: "Industry applications", body: "Implementations in trucking, insurance and mobility where sufficient context exists to validate utility." },
  ],
  capabilitiesEyebrow: "Laboratory capabilities",
  capabilitiesTitle: "A modular architecture evolving through evidence.",
  capabilitiesBody: "Every capability retains its actual stage. Some already support operational work, others are being developed and others remain under validation.",
  capabilities: [
    { stage: "Design and validation", title: "Risk intelligence", body: "Structuring variables, events, signals and criteria supporting risk analysis and decisions." },
    { stage: "In development", title: "AI agents", body: "Specialized agents assisting tasks, retrieving knowledge and coordinating defined processes." },
    { stage: "Active capability", title: "Workflow automation", body: "Reducing repetitive work in documentation, follow-up, service and control." },
    { stage: "Active capability", title: "Structured knowledge", body: "Turning dispersed experience into searchable memory, rules and operating taxonomies." },
    { stage: "In construction", title: "Data infrastructure", body: "Capturing, organizing, validating and reusing operating information." },
    { stage: "In validation", title: "Decision support", body: "Tools reducing uncertainty without replacing human accountability." },
  ],
  disclaimer: "SOLYON does not claim total autonomy, unrestricted self-learning, elimination of hallucinations, a completed platform or patent protection without verifiable public documentation.",
  methodEyebrow: "Construction method",
  methodTitle: "From operations to systems.",
  methodBody: "The laboratory does not begin by coding. It first understands the problem, documents exceptions and structures knowledge. Only then does it turn that foundation into product and submit it to real-world validation.",
  methodButton: "See how the ecosystem connects",
  method: [
    { title: "Observe", body: "Understand the process and its constraints from real operations." },
    { title: "Document", body: "Record decisions, failures, exceptions and dependencies." },
    { title: "Structure", body: "Transform evidence into models, rules, data and product criteria." },
    { title: "Build", body: "Develop capabilities and tools with defined scope." },
    { title: "Validate", body: "Test with real users, processes and institutions." },
    { title: "Scale", body: "Replicate only what demonstrates utility and control." },
  ],
};
