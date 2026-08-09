"use client";

import Image from "next/image";
import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const sectionTitleClass =
  "mt-3 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[2.8rem]";

const sectionCopyClass =
  "mt-4 max-w-2xl text-sm leading-6 text-white/58 sm:text-base sm:leading-7";

const pillClass =
  "rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[0.68rem] text-white/55";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="overflow-hidden bg-[#07090c] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10 py-12 md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(230,188,104,0.08),transparent_28rem),radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.05),transparent_26rem)]" />

        <div className="section-shell relative grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.heroEyebrow}</p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.99] tracking-[-0.055em] sm:text-5xl lg:text-[3.55rem]">
              {t.heroTitle}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/62">
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
            </div>

            <div className="mt-7 grid max-w-xl gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
              {t.heroSignals.map((item) => (
                <div
                  key={item}
                  className="border-l border-[#E6BC68]/35 pl-3 text-xs leading-5 text-white/58"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b0e12] p-2.5 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
            <Image
              src="/visual/home-lab-tech-main.png"
              alt={t.heroAlt}
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[16/10] w-full rounded-[1.15rem] object-cover"
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-[#07090c]/85 p-4 backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#E6BC68]">
                    SOLYON OS
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white/90">
                    Operational Intelligence Infrastructure
                  </p>
                </div>

                <span className="rounded-full border border-[#E6BC68]/25 bg-[#E6BC68]/[0.06] px-3 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-[#E6BC68]">
                  {t.centralPlatform}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
          <div>
            <p className="eyebrow">{t.companyEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.companyTitle}</h2>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-7 text-white/58">
              {t.companyBody}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {t.companyTags.map((item) => (
                <span key={item} className={pillClass}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLYON OS
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell">
          <div className="grid gap-9 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
            <div>
              <p className="eyebrow">{t.osEyebrow}</p>

              <h2 className={sectionTitleClass}>{t.osTitle}</h2>

              <p className={sectionCopyClass}>{t.osBody}</p>

              <Link
                href="/technology"
                className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#E6BC68]/50 hover:text-[#E6BC68]"
              >
                {t.osButton}
              </Link>
            </div>

            <div className="rounded-[1.55rem] border border-white/10 bg-[#0b0e12] p-4 md:p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {t.osLayers.map((item, index) => (
                  <article
                    key={item.title}
                    className={`rounded-xl border p-4 ${
                      index === 0
                        ? "border-[#E6BC68]/25 bg-[#E6BC68]/[0.04]"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[0.62rem] font-semibold text-[#E6BC68]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[0.54rem] font-semibold uppercase tracking-[0.13em] text-white/30">
                        {item.label}
                      </span>
                    </div>

                    <h3 className="mt-3 text-sm font-semibold text-white/88">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-white/44">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-violet-400/20 bg-violet-400/[0.035] px-4 py-3 text-xs leading-5 text-white/50">
                <strong className="text-white/82">{t.osLoopLabel}</strong>{" "}
                {t.osLoop}
              </div>

              <p className="mt-4 text-[0.67rem] leading-5 text-white/32">
                {t.osDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMERCIAL WEDGE
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.wedgeEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.wedgeTitle}</h2>

            <p className={sectionCopyClass}>{t.wedgeBody}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className={pillClass}>Insurance Operations</span>
              <span className={pillClass}>Commercial Insurance</span>
              <span className={pillClass}>Operational Intelligence</span>
            </div>
          </div>

          <div className="rounded-[1.55rem] border border-[#E6BC68]/20 bg-gradient-to-br from-[#15130d] to-[#0b0e12] p-5 md:p-6">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.19em] text-[#E6BC68]">
              {t.wedgeRuleLabel}
            </p>

            <p className="mt-2 text-xl font-semibold">{t.wedgeRule}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {t.wedgeGates.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#090c0f] p-4"
                >
                  <span className="text-[0.6rem] font-semibold text-[#E6BC68]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/43">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-4 text-[0.68rem] leading-5 text-white/34">
              {t.wedgeNote}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          LABORATORY / METHOD
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/home-ecosystem-lab-vertical.png"
              alt={t.methodAlt}
              width={1024}
              height={1536}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="aspect-[4/5] w-full rounded-[1.15rem] object-cover"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-lg">
              {t.labLabel}
            </span>
          </div>

          <div>
            <p className="eyebrow">{t.methodEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.methodTitle}</h2>

            <p className={sectionCopyClass}>{t.methodBody}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.methodSteps.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
                >
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.17em] text-[#E6BC68]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/44">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLYON MOVE
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.moveEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.moveTitle}</h2>

            <p className={sectionCopyClass}>{t.moveBody}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {t.moveTags.map((item) => (
                <span key={item} className={pillClass}>
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/solyon-move"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
              >
                {t.moveButton}
              </Link>

              <GooglePlayLink label={t.downloadMove} />
            </div>

            <p className="mt-4 max-w-xl text-[0.7rem] leading-5 text-white/35">
              {t.moveIndependence}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/home-validation-rutan-toyota.png"
              alt={t.validationAlt}
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[16/10] w-full rounded-[1.15rem] object-cover"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-lg">
              {t.validationLabel}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          MEDELLÍN
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell grid gap-9 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/home-ecosystem-city-vertical.png"
              alt={t.cityAlt}
              width={1024}
              height={1536}
              sizes="(max-width: 1024px) 90vw, 36vw"
              className="aspect-[4/5] w-full rounded-[1.15rem] object-cover"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.15em] text-white/70">
              MEDELLÍN
            </span>
          </div>

          <div>
            <p className="eyebrow">{t.cityEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.cityTitle}</h2>

            <p className={sectionCopyClass}>{t.cityBody}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.cityPoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
                >
                  <h3 className="text-sm font-semibold text-white/82">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/43">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          KNOWLEDGE / REUSABILITY
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
          <div>
            <p className="eyebrow">{t.moatEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.moatTitle}</h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/55">
            {t.moatBody}
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.moatItems.map((item, index) => (
            <article
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
            >
              <p className="text-[0.6rem] font-semibold text-[#E6BC68]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>

              <p className="mt-1.5 text-xs leading-5 text-white/43">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="border-t border-white/10 py-11 md:py-14">
        <div className="section-shell">
          <div className="rounded-[1.55rem] border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] via-[#0d0e10] to-[#090b0e] p-6 md:p-8">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow">{t.ctaEyebrow}</p>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl">
                  {t.ctaTitle}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
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
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

/* =========================================================
   ESPAÑOL
========================================================= */

const es = {
  heroEyebrow:
    "DeepTech desde Medellín · IA aplicada · infraestructura tecnológica",

  heroTitle:
    "Convertimos conocimiento operativo en sistemas inteligentes.",

  heroBody:
    "SOLYON Technologies construye infraestructura de inteligencia operativa para transformar operaciones complejas en sistemas trazables, automatizables, medibles y escalables.",

  heroTechnology:
    "Explorar nuestra tecnología",

  heroEcosystem:
    "Entender SOLYON",

  heroSignals: [
    "Operational Intelligence",
    "Datos · software · automatización",
    "IA aplicada",
  ],

  heroAlt:
    "Laboratorio tecnológico conceptual de SOLYON Technologies",

  centralPlatform:
    "PLATAFORMA CENTRAL",

  companyEyebrow:
    "Compañía · laboratorio tecnológico",

  companyTitle:
    "Una empresa tecnológica amplia. Una disciplina comercial enfocada.",

  companyBody:
    "SOLYON convierte conocimiento operativo, evidencia, datos y workflows del mundo real en software, infraestructura de datos, automatización, memoria operativa y capacidades de inteligencia artificial reutilizables.",

  companyTags: [
    "Applied AI",
    "Operational Intelligence",
    "Data Infrastructure",
    "Workflow Automation",
    "Institutional Software",
  ],

  osEyebrow:
    "Plataforma tecnológica central",

  osTitle:
    "SOLYON OS — Operational Intelligence Infrastructure.",

  osBody:
    "La plataforma estructura conocimiento, datos, workflows, permisos, controles, automatización y orquestación de IA sobre una arquitectura reutilizable.",

  osButton:
    "Explorar SOLYON OS",

  osLayers: [
    {
      label: "KNOWLEDGE",
      title: "Operational Knowledge",
      body: "Evidencia, reglas, decisiones, contexto y conocimiento estructurado.",
    },
    {
      label: "DATA",
      title: "Data Infrastructure",
      body: "Datos, trazabilidad, servicios e interoperabilidad.",
    },
    {
      label: "OPERATIONS",
      title: "Operational Systems",
      body: "Software, interfaces, controles, permisos y herramientas operativas.",
    },
    {
      label: "AI + AUTO",
      title: "AI & Automation",
      body: "Workflows, automatización y orquestación de inteligencia artificial.",
    },
  ],

  osLoopLabel:
    "Ciclo de aprendizaje:",

  osLoop:
    "operación → evidencia → conocimiento → datos → sistema → decisión → aprendizaje.",

  osDisclaimer:
    "SOLYON OS define la arquitectura tecnológica central y la dirección de convergencia. No implica que todos los productos actuales ya operen sobre un único core técnico; los componentes compartidos se demostrarán progresivamente cuando exista justificación técnica y económica.",

  wedgeEyebrow:
    "Wedge comercial prioritario",

  wedgeTitle:
    "Insurance Operations es el primer mercado de validación comercial de SOLYON OS.",

  wedgeBody:
    "Comenzamos por operaciones especializadas de commercial insurance, con énfasis inicial en trucking, donde existe conocimiento profundo del dominio, acceso a compradores y problemas operativos documentados.",

  wedgeRuleLabel:
    "DISCIPLINA DE EJECUCIÓN",

  wedgeRule:
    "Una compañía amplia. Un wedge comercial prioritario a la vez.",

  wedgeGates: [
    {
      title: "Problema + comprador",
      body: "Confirmar problemas prioritarios y buyer económico mediante discovery.",
    },
    {
      title: "Paid validation",
      body: "Convertir discovery en design partners o contratos tecnológicos externos.",
    },
    {
      title: "Resultado medible",
      body: "Demostrar mejoras operacionales con evidencia antes/después.",
    },
    {
      title: "Reutilización + recurrencia",
      body: "Probar capacidades reutilizables y convertir valor en revenue recurrente.",
    },
  ],

  wedgeNote:
    "El objetivo del wedge no es definir a SOLYON como una compañía de seguros. Insurance Operations funciona como un mercado inicial para demostrar que SOLYON OS puede convertir conocimiento operacional en producto reutilizable, ROI medible y recurrencia.",

  methodEyebrow:
    "Laboratorio SOLYON",

  methodTitle:
    "La tecnología comienza antes del código.",

  methodBody:
    "Observamos operaciones, estructuramos evidencia y modelamos decisiones antes de convertir ese aprendizaje en arquitectura y software.",

  methodSteps: [
    {
      title: "Operación",
      body: "Procesos, actores, restricciones y decisiones.",
    },
    {
      title: "Evidencia",
      body: "Casos reales, documentación, patrones y excepciones.",
    },
    {
      title: "Arquitectura",
      body: "Datos, módulos, APIs, workflows y controles.",
    },
    {
      title: "Validación",
      body: "Producto confrontado con condiciones y compradores reales.",
    },
  ],

  methodAlt:
    "Construcción tecnológica dentro del laboratorio de SOLYON Technologies",

  labLabel:
    "SOLYON LAB · CONSTRUCCIÓN TECNOLÓGICA",

  moveEyebrow:
    "Producto independiente · evidencia de ejecución",

  moveTitle:
    "SOLYON Move demuestra nuestra capacidad de llevar sistemas del laboratorio al territorio.",

  moveBody:
    "SOLYON Move integra producto móvil, datos territoriales, APIs, CRM y herramientas institucionales. Su desarrollo y validación en Medellín demuestra capacidad de ejecución tecnológica completa.",

  moveTags: [
    "Mobile Product",
    "Data Infrastructure",
    "API Layer",
    "Institutional CRM",
    "Urban Intelligence",
  ],

  moveButton:
    "Explorar SOLYON Move",

  downloadMove:
    "Descargar SOLYON Move gratis",

  moveIndependence:
    "SOLYON Move mantiene producto, usuarios, roadmap, modelo económico y evolución propios. Su evidencia fortalece a SOLYON como compañía tecnológica, sin utilizarse como sustituto de validación comercial de Insurance Operations.",

  validationAlt:
    "Presentación institucional y validación territorial de SOLYON Move en Medellín",

  validationLabel:
    "RUTA N · TOYOTA MOBILITY FOUNDATION · MEDELLÍN",

  cityEyebrow:
    "Medellín · capacidad construida",

  cityTitle:
    "Nuestro laboratorio aprende donde la tecnología enfrenta restricciones reales.",

  cityBody:
    "Medellín conecta talento, desarrollo tecnológico, instituciones y territorio. Aquí SOLYON ha construido producto, documentado aprendizaje y llevado tecnología fuera del entorno controlado.",

  cityAlt:
    "SOLYON Move y Medellín como entorno de desarrollo y validación tecnológica",

  cityPoints: [
    {
      title: "Laboratorio",
      body: "Construcción tecnológica y documentación continua.",
    },
    {
      title: "Territorio",
      body: "Validación frente a condiciones urbanas reales.",
    },
    {
      title: "Instituciones",
      body: "Interacción con actores del ecosistema de innovación.",
    },
    {
      title: "Aprendizaje",
      body: "Evidencia convertida en capacidad tecnológica reproducible.",
    },
  ],

  moatEyebrow:
    "Capacidad acumulativa",

  moatTitle:
    "El activo no termina en el software.",

  moatBody:
    "Cada ejecución puede producir conocimiento, datos, controles, workflows, arquitectura y aprendizaje que fortalecen capacidades reutilizables de SOLYON OS.",

  moatItems: [
    {
      title: "Knowledge",
      body: "Conocimiento operacional convertido en estructura.",
    },
    {
      title: "Data",
      body: "Información organizada, trazable y reutilizable.",
    },
    {
      title: "Systems",
      body: "Componentes tecnológicos construidos alrededor de problemas reales.",
    },
    {
      title: "Learning",
      body: "Validación documentada que mejora las siguientes iteraciones.",
    },
  ],

  ctaEyebrow:
    "SOLYON Technologies",

  ctaTitle:
    "Construimos infraestructura para convertir conocimiento en capacidad operativa.",

  ctaBody:
    "SOLYON OS conecta conocimiento, software, datos, automatización e inteligencia artificial para desarrollar sistemas operativos más trazables, medibles y escalables.",

  ctaContact:
    "Conversar con SOLYON",

  ctaTechnology:
    "Explorar SOLYON OS",
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
    "SOLYON Technologies builds operational intelligence infrastructure to transform complex operations into traceable, automatable, measurable and scalable systems.",

  heroTechnology:
    "Explore our technology",

  heroEcosystem:
    "Understand SOLYON",

  heroSignals: [
    "Operational Intelligence",
    "Data · software · automation",
    "Applied AI",
  ],

  heroAlt:
    "Conceptual SOLYON Technologies technology laboratory",

  centralPlatform:
    "CORE PLATFORM",

  companyEyebrow:
    "Company · technology laboratory",

  companyTitle:
    "A broad technology company. Focused commercial execution.",

  companyBody:
    "SOLYON turns real-world operational knowledge, evidence, data and workflows into software, data infrastructure, automation, operating memory and reusable artificial intelligence capabilities.",

  companyTags: [
    "Applied AI",
    "Operational Intelligence",
    "Data Infrastructure",
    "Workflow Automation",
    "Institutional Software",
  ],

  osEyebrow:
    "Core technology platform",

  osTitle:
    "SOLYON OS — Operational Intelligence Infrastructure.",

  osBody:
    "The platform structures knowledge, data, workflows, permissions, controls, automation and AI orchestration on top of a reusable architecture.",

  osButton:
    "Explore SOLYON OS",

  osLayers: [
    {
      label: "KNOWLEDGE",
      title: "Operational Knowledge",
      body: "Evidence, rules, decisions, context and structured knowledge.",
    },
    {
      label: "DATA",
      title: "Data Infrastructure",
      body: "Data, traceability, services and interoperability.",
    },
    {
      label: "OPERATIONS",
      title: "Operational Systems",
      body: "Software, interfaces, controls, permissions and operating tools.",
    },
    {
      label: "AI + AUTO",
      title: "AI & Automation",
      body: "Workflows, automation and artificial intelligence orchestration.",
    },
  ],

  osLoopLabel:
    "Learning loop:",

  osLoop:
    "operations → evidence → knowledge → data → systems → decisions → learning.",

  osDisclaimer:
    "SOLYON OS defines the company's core technology architecture and convergence direction. It does not imply that every current product already runs on a single technical core; shared components will be demonstrated progressively where technical and economic justification exists.",

  wedgeEyebrow:
    "Priority commercial wedge",

  wedgeTitle:
    "Insurance Operations is SOLYON OS's first commercial validation market.",

  wedgeBody:
    "We begin with specialized commercial insurance operations, initially focused on trucking, where the founders hold deep domain knowledge, buyer access and documented operational problems.",

  wedgeRuleLabel:
    "EXECUTION DISCIPLINE",

  wedgeRule:
    "One broad company. One priority commercial wedge at a time.",

  wedgeGates: [
    {
      title: "Problem + buyer",
      body: "Confirm priority problems and economic buyers through disciplined discovery.",
    },
    {
      title: "Paid validation",
      body: "Turn discovery into paid design partnerships or external technology contracts.",
    },
    {
      title: "Measurable outcome",
      body: "Demonstrate operational improvement with before-and-after evidence.",
    },
    {
      title: "Reuse + recurrence",
      body: "Prove reusable capabilities and convert value into recurring revenue.",
    },
  ],

  wedgeNote:
    "The wedge does not define SOLYON as an insurance company. Insurance Operations is an initial market for demonstrating that SOLYON OS can convert operational knowledge into reusable product, measurable ROI and recurring revenue.",

  methodEyebrow:
    "SOLYON laboratory",

  methodTitle:
    "Technology begins before code.",

  methodBody:
    "We observe operations, structure evidence and model decisions before translating that learning into architecture and software.",

  methodSteps: [
    {
      title: "Operations",
      body: "Processes, actors, constraints and decisions.",
    },
    {
      title: "Evidence",
      body: "Real cases, documentation, patterns and exceptions.",
    },
    {
      title: "Architecture",
      body: "Data, modules, APIs, workflows and controls.",
    },
    {
      title: "Validation",
      body: "Products tested against real conditions and buyers.",
    },
  ],

  methodAlt:
    "Technology development inside the SOLYON Technologies laboratory",

  labLabel:
    "SOLYON LAB · TECHNOLOGY BUILDING",

  moveEyebrow:
    "Independent product · execution evidence",

  moveTitle:
    "SOLYON Move demonstrates our ability to take systems from laboratory to territory.",

  moveBody:
    "SOLYON Move integrates mobile product, territorial data, APIs, CRM and institutional tools. Its development and validation in Medellín demonstrate full-stack technology execution capability.",

  moveTags: [
    "Mobile Product",
    "Data Infrastructure",
    "API Layer",
    "Institutional CRM",
    "Urban Intelligence",
  ],

  moveButton:
    "Explore SOLYON Move",

  downloadMove:
    "Download SOLYON Move free",

  moveIndependence:
    "SOLYON Move retains its own product, users, roadmap, economic model and evolution. Its evidence strengthens SOLYON as a technology company without being used as a substitute for commercial validation of Insurance Operations.",

  validationAlt:
    "Institutional presentation and territorial validation of SOLYON Move in Medellín",

  validationLabel:
    "RUTA N · TOYOTA MOBILITY FOUNDATION · MEDELLÍN",

  cityEyebrow:
    "Medellín · built capability",

  cityTitle:
    "Our laboratory learns where technology meets real constraints.",

  cityBody:
    "Medellín connects talent, technology development, institutions and territory. Here SOLYON has built products, documented learning and taken technology beyond controlled environments.",

  cityAlt:
    "SOLYON Move and Medellín as a technology development and validation environment",

  cityPoints: [
    {
      title: "Laboratory",
      body: "Technology building and continuous documentation.",
    },
    {
      title: "Territory",
      body: "Validation against real urban conditions.",
    },
    {
      title: "Institutions",
      body: "Interaction with actors across the innovation ecosystem.",
    },
    {
      title: "Learning",
      body: "Evidence converted into reproducible technology capability.",
    },
  ],

  moatEyebrow:
    "Compounding capability",

  moatTitle:
    "The asset does not end with the software.",

  moatBody:
    "Each execution can produce knowledge, data, controls, workflows, architecture and learning that strengthen reusable SOLYON OS capabilities.",

  moatItems: [
    {
      title: "Knowledge",
      body: "Operational knowledge converted into structure.",
    },
    {
      title: "Data",
      body: "Organized, traceable and reusable information.",
    },
    {
      title: "Systems",
      body: "Technology components built around real problems.",
    },
    {
      title: "Learning",
      body: "Documented validation improving subsequent iterations.",
    },
  ],

  ctaEyebrow:
    "SOLYON Technologies",

  ctaTitle:
    "We build infrastructure that turns knowledge into operating capability.",

  ctaBody:
    "SOLYON OS connects knowledge, software, data, automation and artificial intelligence to build more traceable, measurable and scalable operating systems.",

  ctaContact:
    "Talk with SOLYON",

  ctaTechnology:
    "Explore SOLYON OS",
};
