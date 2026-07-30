"use client";

import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export default function TechnologyPage() {
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
        <div className="section-shell">
          <p className="eyebrow">{t.coreEyebrow}</p>
          <h2 className="section-title mt-5">Intelligence Latin Truck Risk Operating System</h2>
          <p className="section-copy mt-7">{t.coreBody}</p>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#E6BC68]">{t.coreStatus}</p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.layers.map((layer, index) => (
              <article key={layer.title} className="system-card">
                <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold">{layer.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">{layer.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow">{t.capabilitiesEyebrow}</p>
          <h2 className="section-title mt-5">{t.capabilitiesTitle}</h2>
          <p className="section-copy mt-7">{t.capabilitiesBody}</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.capabilities.map((item) => (
            <article key={item.title} className="system-card">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-xs leading-6 text-white/40">{t.disclaimer}</p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">{t.methodEyebrow}</p>
            <h2 className="section-title mt-5">{t.methodTitle}</h2>
          </div>
          <ol className="space-y-4">
            {t.method.map((step, index) => (
              <li key={step.title} className="flex gap-5 border-b border-white/10 pb-5">
                <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/55">{step.body}</p>
                </div>
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
  eyebrow: "Tecnología",
  title: "Inteligencia aplicada para riesgo, operación y decisión.",
  intro: "SOLYON desarrolla capacidades tecnológicas a partir de conocimiento operativo estructurado. La prioridad no es publicar nombres de productos: es construir una arquitectura verificable que conecte evidencia, datos, automatización y decisiones humanas.",
  coreEyebrow: "Proyecto tecnológico central",
  coreBody: "Es la arquitectura tecnológica y tesis de riesgo de SOLYON para organizar el conocimiento especializado del trucking latino en Estados Unidos y convertirlo en capacidades operativas, módulos interoperables y herramientas de apoyo a la decisión.",
  coreStatus: "Estado actual: construcción y validación progresiva por capacidades. No se presenta como un sistema terminado ni como un producto comercial único completamente desplegado.",
  layers: [
    { title: "Evidencia operativa", body: "Experiencia, documentación, interacciones, excepciones y criterios acumulados dentro de operaciones reales." },
    { title: "Infraestructura de conocimiento", body: "Taxonomías, reglas, memoria estructurada y modelos para reutilizar conocimiento de dominio." },
    { title: "Capacidades operativas", body: "Automatización, agentes, flujos, controles y herramientas de soporte para equipos humanos." },
    { title: "Aplicaciones sectoriales", body: "Implementaciones dentro de trucking, seguros y otros entornos donde exista evidencia suficiente." },
  ],
  capabilitiesEyebrow: "Capacidades",
  capabilitiesTitle: "Lo que estamos construyendo",
  capabilitiesBody: "Las capacidades se desarrollan como componentes interoperables. Su existencia no implica que cada una sea un negocio independiente ni que todas estén en la misma etapa.",
  capabilities: [
    { title: "Inteligencia de riesgo", body: "Estructuración de variables, eventos, señales y criterios para apoyar análisis de riesgo." },
    { title: "Agentes de IA", body: "Agentes especializados para asistir tareas, consultar conocimiento y coordinar procesos definidos." },
    { title: "Automatización de flujos", body: "Reducción de trabajo repetitivo en documentación, seguimiento, servicio y control." },
    { title: "Conocimiento estructurado", body: "Conversión de experiencia dispersa en memoria consultable, reglas y taxonomías operativas." },
    { title: "Infraestructura de datos", body: "Captura, organización, validación y reutilización de información operacional." },
    { title: "Soporte a decisiones", body: "Herramientas que reducen incertidumbre sin reemplazar la responsabilidad humana." },
  ],
  disclaimer: "Las capacidades se encuentran en distintas etapas de descubrimiento, validación, construcción y prueba. SOLYON no afirma autonomía total, autoaprendizaje irrestricto, eliminación de alucinaciones ni protección de patente sin documentación pública verificable.",
  methodEyebrow: "Método de desarrollo",
  methodTitle: "De la evidencia al despliegue",
  method: [
    { title: "Observar", body: "Comprender el proceso y sus restricciones desde la operación real." },
    { title: "Documentar", body: "Registrar decisiones, fallas, excepciones y dependencias." },
    { title: "Estructurar", body: "Transformar evidencia en modelos, reglas, datos y criterios de producto." },
    { title: "Construir", body: "Desarrollar capacidades y herramientas con alcance definido." },
    { title: "Validar", body: "Probar con usuarios, procesos y restricciones reales." },
    { title: "Escalar", body: "Replicar únicamente aquello que demuestre utilidad y control." },
  ],
};

const en = {
  eyebrow: "Technology",
  title: "Applied intelligence for risk, operations and decisions.",
  intro: "SOLYON develops technology capabilities from structured operating knowledge. The priority is not publishing product names. It is building a verifiable architecture connecting evidence, data, automation and human decisions.",
  coreEyebrow: "Central technology project",
  coreBody: "This is SOLYON's technology architecture and risk thesis for organizing specialized knowledge of Latin trucking in the United States and turning it into operational capabilities, interoperable modules and decision-support tools.",
  coreStatus: "Current status: progressive construction and capability-level validation. It is not presented as a finished system or a single fully deployed commercial product.",
  layers: [
    { title: "Operational evidence", body: "Experience, documentation, interactions, exceptions and criteria accumulated in real operations." },
    { title: "Knowledge infrastructure", body: "Taxonomies, rules, structured memory and models for reusing domain knowledge." },
    { title: "Operational capabilities", body: "Automation, agents, workflows, controls and tools supporting human teams." },
    { title: "Industry applications", body: "Implementations in trucking, insurance and other environments where sufficient evidence exists." },
  ],
  capabilitiesEyebrow: "Capabilities",
  capabilitiesTitle: "What we are building",
  capabilitiesBody: "Capabilities are developed as interoperable components. Their existence does not imply that each one is a standalone business or that all are at the same stage.",
  capabilities: [
    { title: "Risk intelligence", body: "Structuring variables, events, signals and criteria to support risk analysis." },
    { title: "AI agents", body: "Specialized agents that assist tasks, retrieve knowledge and coordinate defined processes." },
    { title: "Workflow automation", body: "Reducing repetitive work in documentation, follow-up, service and control." },
    { title: "Structured knowledge", body: "Turning dispersed experience into searchable memory, rules and operating taxonomies." },
    { title: "Data infrastructure", body: "Capturing, organizing, validating and reusing operating information." },
    { title: "Decision support", body: "Tools that reduce uncertainty without replacing human accountability." },
  ],
  disclaimer: "Capabilities are at different stages of discovery, validation, construction and testing. SOLYON does not claim total autonomy, unrestricted self-learning, elimination of hallucinations or patent protection without verifiable public documentation.",
  methodEyebrow: "Development method",
  methodTitle: "From evidence to deployment",
  method: [
    { title: "Observe", body: "Understand the process and its constraints from real operations." },
    { title: "Document", body: "Record decisions, failures, exceptions and dependencies." },
    { title: "Structure", body: "Transform evidence into models, rules, data and product criteria." },
    { title: "Build", body: "Develop capabilities and tools with defined scope." },
    { title: "Validate", body: "Test with real users, processes and constraints." },
    { title: "Scale", body: "Replicate only what demonstrates utility and control." },
  ],
};
