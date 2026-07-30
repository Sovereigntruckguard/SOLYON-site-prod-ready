"use client";

import { useLanguage } from "@/lib/language";

export default function DeeptechSystemVisual({ compact = false }) {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#090c11] shadow-[0_40px_120px_rgba(0,0,0,0.65)] ${compact ? "p-4" : "p-5 md:p-6"}`}
      data-visual-status="mockup"
      aria-label={t.aria}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(230,188,104,0.12),transparent_28rem)]" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#E6BC68]">
            SOLYON SYSTEM LAB
          </p>
          <p className="mt-1 text-xs text-white/45">{t.subtitle}</p>
        </div>
        <span className="rounded-full border border-[#E6BC68]/35 bg-[#E6BC68]/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
          MOCKUP
        </span>
      </div>

      <div className="relative mt-5 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-white/80">{t.core}</p>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-white/35">
                Intelligence Latin Truck Risk OS
              </p>
            </div>
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {t.modules.map((module, index) => (
              <div key={module.title} className="rounded-xl border border-white/10 bg-[#0d1118] p-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[0.62rem] font-semibold text-[#E6BC68]">0{index + 1}</span>
                  <span className="text-[0.58rem] uppercase tracking-[0.14em] text-white/30">
                    {module.status}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-white/85">{module.title}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#E6BC68] to-[#8f6a2a]" style={{ width: module.progress }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-[#0b0f15] p-4">
            <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.14em] text-white/35">
              <span>{t.pipeline}</span>
              <span>{t.live}</span>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {t.pipelineSteps.map((step, index) => (
                <div key={step} className="relative text-center">
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-[#E6BC68]/35 bg-[#E6BC68]/10 text-xs font-semibold text-[#E6BC68]">
                    {index + 1}
                  </div>
                  <p className="mt-2 text-[0.6rem] leading-4 text-white/45">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/35">{t.validation}</p>
            <div className="mt-4 space-y-3">
              {t.validators.map((item) => (
                <div key={item.name} className="rounded-xl border border-white/10 bg-[#0d1118] p-3.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-white/85">{item.name}</p>
                      <p className="mt-1 text-[0.65rem] leading-4 text-white/40">{item.body}</p>
                    </div>
                    <span className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ${item.dot}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#17140d] to-[#0d1118] p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[#E6BC68]">{t.origin}</p>
            <p className="mt-3 text-2xl font-semibold text-white">Medellín</p>
            <p className="mt-2 text-xs leading-5 text-white/48">{t.originBody}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.originTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.12em] text-white/38">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="relative mt-4 text-[0.62rem] leading-4 text-white/30">
        {t.disclaimer}
      </p>
    </div>
  );
}

const es = {
  aria: "Mockup visual de la arquitectura tecnológica de SOLYON Technologies",
  subtitle: "Arquitectura conceptual del ecosistema tecnológico",
  core: "Proyecto tecnológico central",
  pipeline: "Flujo de conocimiento",
  live: "Validación progresiva",
  modules: [
    { title: "Inteligencia de riesgo", status: "Diseño", progress: "78%" },
    { title: "CRM operativo", status: "Validación", progress: "66%" },
    { title: "Automatización y agentes", status: "Desarrollo", progress: "54%" },
    { title: "Evidencia y trazabilidad", status: "Activo", progress: "84%" },
  ],
  pipelineSteps: ["Operación", "Evidencia", "Modelado", "Sistema"],
  validation: "Entornos de validación",
  validators: [
    { name: "Sovereign Truckguard", body: "Seguros y operación de trucking en Estados Unidos", dot: "bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.7)]" },
    { name: "SOLYON Move", body: "Movilidad accesible, CRM e inteligencia de ciudad", dot: "bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.7)]" },
  ],
  origin: "Origen de capacidad",
  originBody: "Laboratorio construido desde Medellín con experiencia operativa, incubación, talento y validación institucional.",
  originTags: ["DeepTech", "IA aplicada", "Riesgo", "Movilidad"],
  disclaimer: "MOCKUP CONCEPTUAL: representación visual de capacidades y relaciones. Se reemplazará por interfaces reales a medida que cada activo sea aprobado para publicación.",
};

const en = {
  aria: "Conceptual mockup of the SOLYON Technologies architecture",
  subtitle: "Conceptual architecture of the technology ecosystem",
  core: "Central technology project",
  pipeline: "Knowledge pipeline",
  live: "Progressive validation",
  modules: [
    { title: "Risk intelligence", status: "Design", progress: "78%" },
    { title: "Operating CRM", status: "Validation", progress: "66%" },
    { title: "Automation and agents", status: "Development", progress: "54%" },
    { title: "Evidence and traceability", status: "Active", progress: "84%" },
  ],
  pipelineSteps: ["Operations", "Evidence", "Modeling", "System"],
  validation: "Validation environments",
  validators: [
    { name: "Sovereign Truckguard", body: "Insurance and trucking operations in the United States", dot: "bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.7)]" },
    { name: "SOLYON Move", body: "Accessible mobility, CRM and city intelligence", dot: "bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.7)]" },
  ],
  origin: "Capability origin",
  originBody: "A laboratory built in Medellín through operating experience, incubation, talent and institutional validation.",
  originTags: ["DeepTech", "Applied AI", "Risk", "Mobility"],
  disclaimer: "CONCEPT MOCKUP: visual representation of capabilities and relationships. It will be replaced with approved real interfaces as assets become publishable.",
};
