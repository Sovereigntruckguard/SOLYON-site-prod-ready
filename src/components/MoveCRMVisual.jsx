"use client";

import { useLanguage } from "@/lib/language";

export default function MoveCRMVisual() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0a0d12] p-4 shadow-[0_35px_100px_rgba(0,0,0,0.55)]" data-visual-status="mockup">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(139,92,246,0.14),transparent_24rem)]" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-300">SOLYON MOVE CRM</p>
          <p className="mt-1 text-xs text-white/42">{t.subtitle}</p>
        </div>
        <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-violet-200">MOCKUP</span>
      </div>

      <div className="relative mt-4 grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
          <p className="text-[0.62rem] uppercase tracking-[0.16em] text-white/30">{t.navigation}</p>
          <div className="mt-4 space-y-2">
            {t.menu.map((item, index) => (
              <div key={item} className={`rounded-xl px-3 py-2.5 text-xs ${index === 0 ? "border border-violet-300/25 bg-violet-300/10 text-violet-100" : "text-white/42"}`}>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-[#0d1118] p-3">
            <p className="text-[0.58rem] uppercase tracking-[0.14em] text-white/28">{t.activeProgram}</p>
            <p className="mt-2 text-sm font-medium text-white/80">Medellín</p>
            <p className="mt-1 text-[0.62rem] text-white/35">{t.pilot}</p>
          </div>
        </aside>

        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            {t.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-[0.62rem] leading-4 text-white/35">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/82">{t.routeIntelligence}</p>
                <p className="mt-1 text-[0.62rem] text-white/32">{t.routeSubtitle}</p>
              </div>
              <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.12em] text-emerald-200">{t.active}</span>
            </div>
            <div className="mt-4 h-36 overflow-hidden rounded-xl border border-white/10 bg-[#0d1118] p-3">
              <div className="relative h-full w-full">
                <div className="absolute left-[8%] top-[62%] h-2 w-[28%] -rotate-12 rounded-full bg-violet-400/55" />
                <div className="absolute left-[32%] top-[44%] h-2 w-[30%] rotate-6 rounded-full bg-violet-400/55" />
                <div className="absolute left-[58%] top-[38%] h-2 w-[28%] -rotate-6 rounded-full bg-violet-400/55" />
                {["left-[8%] top-[58%]", "left-[32%] top-[40%]", "left-[58%] top-[34%]", "left-[84%] top-[28%]"].map((position) => (
                  <span key={position} className={`absolute ${position} h-3 w-3 rounded-full border-2 border-[#0d1118] bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.7)]`} />
                ))}
                <div className="absolute bottom-2 left-2 rounded-lg border border-white/10 bg-black/25 px-2 py-1 text-[0.55rem] uppercase tracking-[0.1em] text-white/30">{t.mapPlaceholder}</div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {t.cards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <p className="text-xs font-medium text-white/78">{card.title}</p>
                <p className="mt-2 text-[0.62rem] leading-4 text-white/34">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="relative mt-4 text-[0.6rem] leading-4 text-white/28">{t.disclaimer}</p>
    </div>
  );
}

const es = {
  subtitle: "Capa institucional de seguimiento, gestión e inteligencia urbana",
  navigation: "Navegación",
  menu: ["Panel de ciudad", "Usuarios y perfiles", "Rutas y alertas", "Casos y seguimiento", "Reportes"],
  activeProgram: "Programa activo",
  pilot: "Piloto institucional",
  metrics: [
    { value: "24", label: "usuarios registrados" },
    { value: "18", label: "rutas observadas" },
    { value: "7", label: "alertas contextuales" },
  ],
  routeIntelligence: "Inteligencia de rutas",
  routeSubtitle: "Contexto de movilidad, barreras y señales de riesgo",
  active: "Activo",
  mapPlaceholder: "Visual conceptual de mapa",
  cards: [
    { title: "Seguimiento institucional", body: "Vista de usuarios, incidencias, evolución y necesidades de acompañamiento." },
    { title: "Analítica de ciudad", body: "Base para identificar patrones de accesibilidad y apoyar decisiones de programas urbanos." },
  ],
  disclaimer: "MOCKUP CONCEPTUAL: la estructura representa la función esperada del CRM. Métricas y visualizaciones son ilustrativas hasta sustituirlas por capturas reales aprobadas.",
};

const en = {
  subtitle: "Institutional layer for monitoring, management and urban intelligence",
  navigation: "Navigation",
  menu: ["City dashboard", "Users and profiles", "Routes and alerts", "Cases and monitoring", "Reports"],
  activeProgram: "Active program",
  pilot: "Institutional pilot",
  metrics: [
    { value: "24", label: "registered users" },
    { value: "18", label: "observed routes" },
    { value: "7", label: "contextual alerts" },
  ],
  routeIntelligence: "Route intelligence",
  routeSubtitle: "Mobility context, barriers and risk signals",
  active: "Active",
  mapPlaceholder: "Conceptual map visual",
  cards: [
    { title: "Institutional monitoring", body: "View of users, incidents, evolution and support requirements." },
    { title: "City analytics", body: "Foundation for identifying accessibility patterns and supporting urban-program decisions." },
  ],
  disclaimer: "CONCEPT MOCKUP: the structure represents the intended CRM function. Metrics and visualizations are illustrative until replaced by approved real screenshots.",
};
