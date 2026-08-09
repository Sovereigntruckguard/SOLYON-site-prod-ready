"use client";

import Image from "next/image";
import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const sectionTitleClass =
  "mt-3 max-w-3xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-4xl md:text-5xl";

const sectionCopyClass =
  "mt-4 max-w-2xl text-base leading-7 text-white/58 md:text-[1.05rem]";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="overflow-hidden bg-[#07090c] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative border-b border-white/10 py-14 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(230,188,104,0.08),transparent_31rem),radial-gradient(circle_at_30%_70%,rgba(61,146,255,0.055),transparent_28rem)]" />

        <div className="section-shell relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.heroEyebrow}</p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              {t.heroTitle}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/62 md:text-lg">
              {t.heroBody}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/technology"
                className="inline-flex justify-center rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#efca7d]"
              >
                {t.heroTechnology}
              </Link>

              <Link
                href="/ecosystem"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35"
              >
                {t.heroEcosystem}
              </Link>

              <GooglePlayLink label={t.downloadMove} />
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
              {t.heroSignals.map((item) => (
                <div
                  key={item}
                  className="border-l border-[#E6BC68]/35 pl-4 text-sm leading-5 text-white/65"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* HERO SYSTEM PANEL */}
          <div className="rounded-[1.7rem] border border-white/10 bg-[#0b0e12]/95 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)] md:p-5">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#E6BC68]">
                  SOLYON SYSTEM LAB
                </p>

                <p className="mt-1 text-xs text-white/38">
                  {t.systemPanelSubtitle}
                </p>
              </div>

              <span className="rounded-full border border-[#E6BC68]/25 bg-[#E6BC68]/[0.06] px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#E6BC68]">
                {t.mockup}
              </span>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-white/70">
                    {t.centralProject}
                  </p>

                  <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-white/35">
                    Intelligence Latin Truck Risk OS
                  </p>
                </div>

                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {t.systemCards.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-[#090c12] p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[0.62rem] font-semibold text-[#E6BC68]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="rounded-full border border-white/10 px-2 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.1em] text-white/45">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="mt-3 text-sm font-semibold text-white/90">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-white/42">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <article className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/35">
                  {t.validationEnvironment}
                </p>

                <h3 className="mt-3 text-base font-semibold">
                  SOLYON Move
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/45">
                  {t.movePanel}
                </p>
              </article>

              <article className="rounded-xl border border-[#E6BC68]/20 bg-[#E6BC68]/[0.035] p-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                  {t.originCapacity}
                </p>

                <h3 className="mt-3 text-xl font-semibold">Medellín</h3>

                <p className="mt-2 text-xs leading-5 text-white/48">
                  {t.medellinPanel}
                </p>
              </article>
            </div>

            <p className="mt-4 text-[0.62rem] leading-5 text-white/28">
              {t.mockupDisclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY / LAB
      ========================================================= */}
      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.companyEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.companyTitle}</h2>

            <p className={sectionCopyClass}>{t.companyBody}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.companyTags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-white/55"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/home-lab-tech-main.png"
              alt={t.labMainAlt}
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[16/10] w-full rounded-[1.25rem] object-cover"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-lg">
              {t.labVisualLabel}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          METHOD
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-12 md:py-16">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow">{t.methodEyebrow}</p>

              <h2 className={sectionTitleClass}>{t.methodTitle}</h2>

              <p className={sectionCopyClass}>{t.methodBody}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {t.methodSteps.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
                  >
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-sm font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-white/45">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0e12] p-2.5">
              <Image
                src="/visual/home-ecosystem-lab-vertical.png"
                alt={t.methodAlt}
                width={1024}
                height={1536}
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
              />

              <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white/70">
                {t.labConstructionLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CENTRAL TECHNOLOGY
      ========================================================= */}
      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.techEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.techTitle}</h2>

            <p className={sectionCopyClass}>{t.techBody}</p>

            <Link
              href="/technology"
              className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#E6BC68]/50 hover:text-[#E6BC68]"
            >
              {t.techButton}
            </Link>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-[#0b0e12] p-5 md:p-6">
            <div className="grid gap-3 md:grid-cols-2">
              {t.techLayers.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-xl border p-4 ${
                    index === 0
                      ? "border-[#E6BC68]/25 bg-[#E6BC68]/[0.04]"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#E6BC68]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[0.55rem] uppercase tracking-[0.12em] text-white/30">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/45">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-violet-400/20 bg-violet-400/[0.035] px-4 py-3 text-xs leading-6 text-white/52">
              <strong className="text-white/85">{t.systemLoopLabel}</strong>{" "}
              {t.systemLoop}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLYON MOVE / VALIDATION
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-12 md:py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.moveEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.moveTitle}</h2>

            <p className={sectionCopyClass}>{t.moveBody}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.moveTags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-[#0b0e12] px-3 py-1.5 text-xs text-white/55"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/solyon-move"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
              >
                {t.moveButton}
              </Link>

              <GooglePlayLink label={t.downloadMove} />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/home-validation-rutan-toyota.png"
              alt={t.validationAlt}
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[16/10] w-full rounded-[1.25rem] object-cover"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-lg">
              {t.validationLabel}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          MEDELLÍN
      ========================================================= */}
      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/home-ecosystem-city-vertical.png"
              alt={t.cityAlt}
              width={1024}
              height={1536}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white/70">
              {t.cityVisualLabel}
            </span>
          </div>

          <div>
            <p className="eyebrow">{t.cityEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.cityTitle}</h2>

            <p className={sectionCopyClass}>{t.cityBody}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {t.cityPoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
                >
                  <h3 className="text-sm font-semibold text-white/85">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/45">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          KNOWLEDGE MOAT
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#0b0e12] py-12 md:py-16">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">{t.moatEyebrow}</p>

              <h2 className={sectionTitleClass}>{t.moatTitle}</h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/55 md:text-lg">
              {t.moatBody}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.moatItems.map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
              >
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>

                <p className="mt-2 text-xs leading-5 text-white/45">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SCALE / CTA
      ========================================================= */}
      <section className="section-shell py-12 md:py-16">
        <div className="rounded-[1.7rem] border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] via-[#0d0e10] to-[#090b0e] p-7 md:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">{t.ctaEyebrow}</p>

              <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                {t.ctaTitle}
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-white/55">
                {t.ctaBody}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e]"
              >
                {t.ctaContact}
              </Link>

              <Link
                href="/technology"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
              >
                {t.ctaTechnology}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

/* =========================================================
   SPANISH
========================================================= */

const es = {
  heroEyebrow:
    "DeepTech desde Medellín · IA aplicada · infraestructura tecnológica",

  heroTitle:
    "Convertimos conocimiento operativo en sistemas inteligentes.",

  heroBody:
    "SOLYON Technologies diseña infraestructura tecnológica para convertir problemas complejos, datos y experiencia real en capacidad operativa.",

  heroTechnology: "Explorar nuestra tecnología",
  heroEcosystem: "Entender el ecosistema",
  downloadMove: "Descargar SOLYON Move gratis",

  heroSignals: [
    "Inteligencia aplicada a riesgo y operaciones",
    "Producto, datos, APIs y automatización",
    "Validación tecnológica en territorio real",
  ],

  systemPanelSubtitle:
    "Arquitectura conceptual de capacidades del laboratorio",

  mockup: "MOCKUP",
  centralProject: "Proyecto tecnológico central",

  systemCards: [
    {
      status: "EN DISEÑO",
      title: "Inteligencia de riesgo",
      body: "Variables, señales y criterios para apoyar decisiones.",
    },
    {
      status: "EN VALIDACIÓN",
      title: "Sistemas operativos",
      body: "CRM, datos, trazabilidad y flujos de operación.",
    },
    {
      status: "EN DESARROLLO",
      title: "Automatización y agentes",
      body: "Procesos definidos y asistencia tecnológica especializada.",
    },
    {
      status: "CAPACIDAD ACTIVA",
      title: "Evidencia y aprendizaje",
      body: "Documentación, controles y conocimiento estructurado.",
    },
  ],

  validationEnvironment: "Validación tecnológica",
  movePanel:
    "Movilidad accesible, producto digital, CRM e inteligencia territorial.",

  originCapacity: "Origen de capacidad",
  medellinPanel:
    "Laboratorio construido desde Medellín con producto, talento y validación institucional.",

  mockupDisclaimer:
    "Representación conceptual de capacidades y relaciones del laboratorio. No representa porcentajes de terminación ni una plataforma final desplegada.",

  companyEyebrow: "Compañía madre · laboratorio DeepTech",

  companyTitle:
    "SOLYON construye la capacidad tecnológica que conecta el ecosistema.",

  companyBody:
    "Convertimos experiencia operativa, evidencia y problemas complejos en arquitectura, software, datos e inteligencia aplicada.",

  companyTags: [
    "IA aplicada",
    "Inteligencia de riesgo",
    "CRM y automatización",
    "Movilidad y ciudad",
    "Data infrastructure",
  ],

  labMainAlt:
    "Laboratorio tecnológico de SOLYON Technologies desarrollando sistemas de inteligencia aplicada",

  labVisualLabel: "SOLYON TECHNOLOGIES · SYSTEM LAB",

  methodEyebrow: "Nuestro método",
  methodTitle: "La tecnología comienza antes del código.",

  methodBody:
    "Primero entendemos la operación. Después estructuramos evidencia, decisiones y arquitectura. El software llega como consecuencia.",

  methodSteps: [
    {
      title: "Operación",
      body: "Comprender procesos, actores y restricciones reales.",
    },
    {
      title: "Evidencia",
      body: "Documentar patrones, excepciones y decisiones.",
    },
    {
      title: "Arquitectura",
      body: "Convertir conocimiento en datos, módulos e interfaces.",
    },
    {
      title: "Validación",
      body: "Probar capacidades fuera del entorno controlado.",
    },
  ],

  methodAlt:
    "Construcción tecnológica y desarrollo de sistemas dentro del laboratorio SOLYON",

  labConstructionLabel: "CONSTRUCCIÓN TECNOLÓGICA",

  techEyebrow: "Proyecto tecnológico central",
  techTitle: "Intelligence Latin Truck Risk Operating System.",

  techBody:
    "Una arquitectura orientada a estructurar conocimiento de riesgo, operación y decisión para el trucking latino en Estados Unidos.",

  techButton: "Explorar arquitectura tecnológica",

  techLayers: [
    {
      label: "RISK",
      title: "Inteligencia de riesgo",
      body: "Variables, criterios, señales y evidencia para enriquecer decisiones.",
    },
    {
      label: "DATA",
      title: "Capa de datos",
      body: "Estructuración y trazabilidad del conocimiento operativo.",
    },
    {
      label: "OPS",
      title: "Sistemas operativos",
      body: "CRM, workflows, automatización y seguimiento.",
    },
    {
      label: "AI",
      title: "IA aplicada",
      body: "Asistencia, análisis y agentes especializados sobre procesos definidos.",
    },
  ],

  systemLoopLabel: "Principio de diseño:",
  systemLoop:
    "operación → evidencia → datos → modelado → decisión → aprendizaje.",

  moveEyebrow: "Capacidad demostrada · SOLYON Move",

  moveTitle: "El laboratorio también se valida en la ciudad.",

  moveBody:
    "SOLYON Move integra aplicación móvil, datos territoriales, APIs, CRM e inteligencia urbana y ha sido llevado a condiciones reales en Medellín.",

  moveTags: [
    "Mobile product",
    "API layer",
    "Institutional CRM",
    "Territorial data",
    "Urban intelligence",
  ],

  moveButton: "Explorar SOLYON Move",

  validationAlt:
    "Validación institucional y territorial de SOLYON Move en Medellín",

  validationLabel: "RUTA N · TOYOTA MOBILITY FOUNDATION · TERRITORIO",

  cityEyebrow: "Medellín · laboratorio de ciudad",

  cityTitle: "La ciudad permite confrontar tecnología con realidad.",

  cityBody:
    "Medellín conecta al laboratorio con movilidad, topografía, accesibilidad, instituciones y condiciones urbanas que obligan a diseñar mejor.",

  cityAlt:
    "SOLYON Move funcionando en Medellín como entorno real de validación tecnológica",

  cityVisualLabel: "MEDELLÍN · VALIDACIÓN REAL",

  cityPoints: [
    {
      title: "Territorio",
      body: "Pendientes, superficies, barreras y contexto urbano.",
    },
    {
      title: "Producto",
      body: "Interacción real entre personas y tecnología.",
    },
    {
      title: "Instituciones",
      body: "Validación dentro de ecosistemas públicos y de innovación.",
    },
    {
      title: "Aprendizaje",
      body: "Evidencia que retroalimenta arquitectura y producto.",
    },
  ],

  moatEyebrow: "Moat de conocimiento",
  moatTitle: "La ventaja no es solamente el software.",

  moatBody:
    "SOLYON acumula conocimiento operativo, documentación, datos, arquitectura y aprendizaje de implementación. Ese conocimiento compuesto es la base de sistemas cada vez más difíciles de replicar.",

  moatItems: [
    {
      title: "Conocimiento operativo",
      body: "Procesos entendidos desde dentro.",
    },
    {
      title: "Evidencia estructurada",
      body: "Documentación convertida en capacidad reutilizable.",
    },
    {
      title: "Arquitectura propia",
      body: "Capas tecnológicas construidas sobre necesidades reales.",
    },
    {
      title: "Validación",
      body: "Aprendizaje generado fuera del laboratorio.",
    },
  ],

  ctaEyebrow: "Construimos desde Medellín",

  ctaTitle:
    "De problemas complejos a infraestructura tecnológica aplicada.",

  ctaBody:
    "SOLYON Technologies conecta inteligencia artificial, datos, software y conocimiento operativo para construir sistemas con capacidad de escalar.",

  ctaContact: "Conversar con SOLYON",
  ctaTechnology: "Ver tecnología",
};

/* =========================================================
   ENGLISH
========================================================= */

const en = {
  heroEyebrow:
    "DeepTech from Medellín · Applied AI · technology infrastructure",

  heroTitle:
    "We turn operational knowledge into intelligent systems.",

  heroBody:
    "SOLYON Technologies designs technology infrastructure that turns complex problems, data and real-world experience into operating capability.",

  heroTechnology: "Explore our technology",
  heroEcosystem: "Understand the ecosystem",
  downloadMove: "Download SOLYON Move free",

  heroSignals: [
    "Applied intelligence for risk and operations",
    "Product, data, APIs and automation",
    "Technology validation in real environments",
  ],

  systemPanelSubtitle:
    "Conceptual architecture of laboratory capabilities",

  mockup: "MOCKUP",
  centralProject: "Central technology project",

  systemCards: [
    {
      status: "IN DESIGN",
      title: "Risk intelligence",
      body: "Variables, signals and criteria supporting decisions.",
    },
    {
      status: "IN VALIDATION",
      title: "Operating systems",
      body: "CRM, data, traceability and operational workflows.",
    },
    {
      status: "IN DEVELOPMENT",
      title: "Automation and agents",
      body: "Defined processes and specialized technological assistance.",
    },
    {
      status: "ACTIVE CAPABILITY",
      title: "Evidence and learning",
      body: "Documentation, controls and structured knowledge.",
    },
  ],

  validationEnvironment: "Technology validation",
  movePanel:
    "Accessible mobility, digital product, CRM and territorial intelligence.",

  originCapacity: "Capability origin",
  medellinPanel:
    "A laboratory built from Medellín through product, talent and institutional validation.",

  mockupDisclaimer:
    "Conceptual representation of laboratory capabilities and relationships. It does not represent completion percentages or a final deployed platform.",

  companyEyebrow: "Parent company · DeepTech laboratory",

  companyTitle:
    "SOLYON builds the technology capability connecting the ecosystem.",

  companyBody:
    "We turn operational experience, evidence and complex problems into architecture, software, data and applied intelligence.",

  companyTags: [
    "Applied AI",
    "Risk intelligence",
    "CRM and automation",
    "Mobility and cities",
    "Data infrastructure",
  ],

  labMainAlt:
    "SOLYON Technologies laboratory building applied intelligence systems",

  labVisualLabel: "SOLYON TECHNOLOGIES · SYSTEM LAB",

  methodEyebrow: "Our method",
  methodTitle: "Technology begins before code.",

  methodBody:
    "We first understand operations. Then we structure evidence, decisions and architecture. Software follows from that understanding.",

  methodSteps: [
    {
      title: "Operations",
      body: "Understand real processes, actors and constraints.",
    },
    {
      title: "Evidence",
      body: "Document patterns, exceptions and decisions.",
    },
    {
      title: "Architecture",
      body: "Turn knowledge into data, modules and interfaces.",
    },
    {
      title: "Validation",
      body: "Test capabilities beyond controlled environments.",
    },
  ],

  methodAlt:
    "Technology development and system building inside the SOLYON laboratory",

  labConstructionLabel: "TECHNOLOGY BUILDING",

  techEyebrow: "Central technology project",
  techTitle: "Intelligence Latin Truck Risk Operating System.",

  techBody:
    "An architecture designed to structure risk, operations and decision knowledge for Latin trucking in the United States.",

  techButton: "Explore technology architecture",

  techLayers: [
    {
      label: "RISK",
      title: "Risk intelligence",
      body: "Variables, criteria, signals and evidence enriching decisions.",
    },
    {
      label: "DATA",
      title: "Data layer",
      body: "Structuring and traceability of operational knowledge.",
    },
    {
      label: "OPS",
      title: "Operating systems",
      body: "CRM, workflows, automation and monitoring.",
    },
    {
      label: "AI",
      title: "Applied AI",
      body: "Assistance, analysis and specialized agents over defined processes.",
    },
  ],

  systemLoopLabel: "Design principle:",
  systemLoop:
    "operations → evidence → data → modeling → decision → learning.",

  moveEyebrow: "Demonstrated capability · SOLYON Move",

  moveTitle: "The laboratory is also validated in the city.",

  moveBody:
    "SOLYON Move integrates mobile product, territorial data, APIs, CRM and urban intelligence and has been tested under real conditions in Medellín.",

  moveTags: [
    "Mobile product",
    "API layer",
    "Institutional CRM",
    "Territorial data",
    "Urban intelligence",
  ],

  moveButton: "Explore SOLYON Move",

  validationAlt:
    "Institutional and territorial validation of SOLYON Move in Medellín",

  validationLabel: "RUTA N · TOYOTA MOBILITY FOUNDATION · FIELD",

  cityEyebrow: "Medellín · city laboratory",

  cityTitle: "The city confronts technology with reality.",

  cityBody:
    "Medellín connects the laboratory with mobility, topography, accessibility, institutions and urban conditions that force better design.",

  cityAlt:
    "SOLYON Move operating in Medellín as a real technology validation environment",

  cityVisualLabel: "MEDELLÍN · REAL VALIDATION",

  cityPoints: [
    {
      title: "Territory",
      body: "Slopes, surfaces, barriers and urban context.",
    },
    {
      title: "Product",
      body: "Real interaction between people and technology.",
    },
    {
      title: "Institutions",
      body: "Validation within public and innovation ecosystems.",
    },
    {
      title: "Learning",
      body: "Evidence feeding back into architecture and product.",
    },
  ],

  moatEyebrow: "Knowledge moat",
  moatTitle: "The advantage is not only the software.",

  moatBody:
    "SOLYON accumulates operational knowledge, documentation, data, architecture and implementation learning. That compounding knowledge becomes the foundation for systems increasingly difficult to replicate.",

  moatItems: [
    {
      title: "Operational knowledge",
      body: "Processes understood from the inside.",
    },
    {
      title: "Structured evidence",
      body: "Documentation converted into reusable capability.",
    },
    {
      title: "Own architecture",
      body: "Technology layers built around real needs.",
    },
    {
      title: "Validation",
      body: "Learning generated beyond the laboratory.",
    },
  ],

  ctaEyebrow: "Built from Medellín",

  ctaTitle:
    "From complex problems to applied technology infrastructure.",

  ctaBody:
    "SOLYON Technologies connects artificial intelligence, data, software and operational knowledge to build systems capable of scaling.",

  ctaContact: "Talk with SOLYON",
  ctaTechnology: "View technology",
};
