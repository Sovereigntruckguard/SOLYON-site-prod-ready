"use client";

import Image from "next/image";
import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const RUTAN_STORY =
  "https://rutanmedellin.org/noticias/en-medell%C3%ADn-crean-dos-plataformas-con-inteligencia-artificial-para-facilitar-los-viajes-de-personas-con-movilidad-reducida";

export default function SolyonMovePage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(139,92,246,0.16),transparent_34rem)]" />

        <div className="section-shell relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>

            <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-7xl">
              {t.title}
            </h1>

            <p className="section-copy mt-7">{t.body}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {t.capabilityTags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/55"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <GooglePlayLink label={t.download} />

              <Link
                href="/technology"
                className="inline-flex justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white"
              >
                {t.technology}
              </Link>

              <a
                href="https://www.youtube.com/watch?v=0SyayXeU42g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white"
              >
                {t.video}
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
            <Image
              src="/visual/solyon-move-field-validation.jpeg"
              alt={t.heroAlt}
              width={1400}
              height={1000}
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[4/3] w-full rounded-[1.45rem] object-cover"
            />

            <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/70 backdrop-blur-lg">
              {t.realEvidence}
            </span>
          </div>
        </div>
      </section>

      {/* NOT JUST AN APP */}
      <section className="section-shell py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="eyebrow">{t.systemEyebrow}</p>
          <h2 className="section-title mt-5">{t.systemTitle}</h2>
          <p className="section-copy mt-6">{t.systemBody}</p>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-[#0b0e12] p-5 md:p-10">
          <div className="grid gap-4 lg:grid-cols-5">
            {t.architecture.map((item, index) => (
              <div key={item.title} className="relative">
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {item.body}
                  </p>
                </article>

                {index < t.architecture.length - 1 && (
                  <div className="mx-auto my-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/35 lg:absolute lg:-right-6 lg:top-1/2 lg:z-10 lg:my-0 lg:-translate-y-1/2">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-400/[0.045] p-5 text-sm leading-7 text-white/60">
            <strong className="text-white/90">{t.loopLabel}</strong>{" "}
            {t.loop}
          </div>
        </div>
      </section>

      {/* USER LAYER */}
      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">{t.userEyebrow}</p>
            <h2 className="section-title mt-5">{t.userTitle}</h2>
            <p className="section-copy mt-6">{t.userBody}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.userItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-[#0b0e12] p-4 text-sm leading-6 text-white/55"
                >
                  {item}
                </div>
              ))}
            </div>

            <GooglePlayLink label={t.download} className="mt-8" />
          </div>

          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#0b0e12] p-3">
            <Image
              src="/visual/solyon-move-app-real.jpeg"
              alt={t.appAlt}
              width={900}
              height={1600}
              sizes="(max-width: 1024px) 90vw, 420px"
              className="w-full rounded-[1.9rem] object-cover"
            />
            <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/70">
              {t.productEvidence}
            </span>
          </div>
        </div>
      </section>

      {/* TERRITORY -> DATA */}
      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.dataEyebrow}</p>
            <h2 className="section-title mt-5">{t.dataTitle}</h2>
            <p className="section-copy mt-6">{t.dataBody}</p>

            <div className="mt-8 space-y-3">
              {t.dataFlow.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E6BC68] text-xs font-bold text-[#090b0e]">
                    {index + 1}
                  </span>
                  <span className="text-sm text-white/65">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3">
            <Image
              src="/visual/solyon-move-barriers.png"
              alt={t.barriersAlt}
              width={1400}
              height={950}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[4/3] w-full rounded-[1.45rem] object-cover"
            />
            <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/70">
              {t.territoryEvidence}
            </span>
          </div>
        </div>
      </section>

      {/* CRM / URBAN INTELLIGENCE */}
      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <div className="max-w-5xl">
            <p className="eyebrow">{t.crmEyebrow}</p>
            <h2 className="section-title mt-5">{t.crmTitle}</h2>
            <p className="section-copy mt-6">{t.crmBody}</p>
          </div>

          <div className="mt-14 relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3">
            <Image
              src="/visual/solyon-move-crm-historica.png"
              alt={t.crmAlt}
              width={1800}
              height={1050}
              sizes="100vw"
              className="w-full rounded-[1.45rem] object-cover"
            />

            <span className="absolute left-6 top-6 rounded-full border border-[#E6BC68]/25 bg-[#090b0e]/90 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#E6BC68] backdrop-blur-lg">
              {t.historicalLabel}
            </span>
          </div>

          <p className="mt-5 max-w-4xl text-xs leading-6 text-white/40">
            {t.crmDisclaimer}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.crmCapabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#0b0e12] p-5"
              >
                <h3 className="text-sm font-semibold text-white/85">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-white/42">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* API & INTEGRATIONS */}
      <section className="section-shell py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="eyebrow">{t.apiEyebrow}</p>
          <h2 className="section-title mt-5">{t.apiTitle}</h2>
          <p className="section-copy mt-6">{t.apiBody}</p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {t.integrationNodes.map((item, index) => (
            <article
              key={item}
              className={`rounded-2xl border p-6 ${
                index === 2
                  ? "border-[#E6BC68]/30 bg-[#E6BC68]/[0.055]"
                  : "border-white/10 bg-[#0b0e12]"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                NODE {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold">{item}</h3>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-7 text-white/50">
          {t.apiNote}
        </p>
      </section>

      {/* FIELD VALIDATION */}
      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow">{t.validationEyebrow}</p>
              <h2 className="section-title mt-5">{t.validationTitle}</h2>
              <p className="section-copy mt-6">{t.validationBody}</p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b0e12] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                  {t.programLabel}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/58">
                  {t.programBody}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3">
              <Image
                src="/visual/solyon-move-field-validation.jpeg"
                alt={t.fieldAlt}
                width={1400}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="aspect-[4/3] w-full rounded-[1.45rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* THIRD-PARTY VALIDATION */}
      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3">
            <Image
              src="/visual/solyon-move-rutan-feature.png"
              alt={t.mediaAlt}
              width={1100}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full rounded-[1.45rem] object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">{t.mediaEyebrow}</p>
            <h2 className="section-title mt-5">{t.mediaTitle}</h2>
            <p className="section-copy mt-6">{t.mediaBody}</p>

            <a
              href={RUTAN_STORY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white"
            >
              {t.mediaButton}
            </a>
          </div>
        </div>
      </section>

      {/* LAB CAPABILITY */}
      <section className="border-y border-white/10 bg-[#0b0e12] py-24 md:py-32">
        <div className="section-shell">
          <div className="max-w-5xl">
            <p className="eyebrow">{t.labEyebrow}</p>
            <h2 className="section-title mt-5">{t.labTitle}</h2>
            <p className="section-copy mt-6">{t.labBody}</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.labCapabilities.map((item) => (
              <article key={item.title} className="system-card">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                  {item.label}
                </p>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell py-24 md:py-32">
        <div className="rounded-3xl border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] to-[#0b0e12] p-8 md:p-14">
          <p className="eyebrow">{t.ctaEyebrow}</p>
          <h2 className="section-title mt-5">{t.ctaTitle}</h2>
          <p className="section-copy mt-6">{t.ctaBody}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <GooglePlayLink label={t.download} />

            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e]"
            >
              {t.ctaButton}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "Infraestructura de movilidad accesible · Medellín",
  title: "SOLYON Move convierte movilidad, territorio y contexto urbano en inteligencia operativa.",
  body:
    "SOLYON Move no es solamente una aplicación. Es una infraestructura tecnológica desarrollada por SOLYON Technologies que conecta experiencia móvil, personalización, datos territoriales, APIs, gestión institucional y visualización de barreras para comprender mejor la movilidad accesible.",
  capabilityTags: [
    "Mobile Product",
    "Applied AI",
    "Data Infrastructure",
    "API Layer",
    "Institutional CRM",
    "Urban Intelligence",
  ],
  download: "Descargar gratis en Google Play",
  technology: "Explorar tecnología SOLYON",
  video: "Ver video del proyecto",
  heroAlt: "Validación real de SOLYON Move en territorio",
  realEvidence: "EVIDENCIA REAL · VALIDACIÓN EN CAMPO",

  systemEyebrow: "La infraestructura",
  systemTitle: "La app es solamente la capa visible del sistema.",
  systemBody:
    "Detrás de la experiencia del usuario existe una arquitectura que captura señales del territorio, estructura información, conecta componentes mediante APIs y habilita herramientas institucionales para seguimiento, análisis y toma de decisiones.",
  architecture: [
    {
      title: "Citizen Layer",
      body: "Perfil, necesidades de movilidad, navegación, alertas y reportes desde la experiencia móvil.",
    },
    {
      title: "Data Layer",
      body: "Estructuración de condiciones territoriales, barreras, rutas y contexto operacional.",
    },
    {
      title: "API Layer",
      body: "Intercambio de información entre aplicaciones, servicios, datos e integraciones.",
    },
    {
      title: "Institutional Layer",
      body: "CRM, operación, incidentes, usuarios, evidencia y seguimiento institucional.",
    },
    {
      title: "Urban Intelligence",
      body: "Visualización territorial y base para análisis de patrones, riesgos y oportunidades de intervención.",
    },
  ],
  loopLabel: "Ciclo de inteligencia:",
  loop:
    "territorio → observación → dato → estructuración → operación institucional → aprendizaje de ciudad.",

  userEyebrow: "Capa ciudadana",
  userTitle: "Una experiencia móvil diseñada alrededor de la persona, no solamente del destino.",
  userBody:
    "SOLYON Move busca comprender cómo las características individuales y las condiciones de un trayecto pueden modificar la experiencia de movilidad. La interfaz móvil es el punto de contacto entre esa personalización y la infraestructura que opera detrás.",
  userItems: [
    "Perfil y tipo de movilidad",
    "Variables personales y contexto",
    "Planificación de trayectos",
    "Alertas y condiciones de ruta",
    "Reporte de barreras",
    "Participación comunitaria",
  ],
  appAlt: "Interfaz real de la aplicación SOLYON Move",
  productEvidence: "PRODUCTO REAL",

  dataEyebrow: "Territorio como dato",
  dataTitle: "Una barrera física puede convertirse en evidencia estructurada.",
  dataBody:
    "Huecos, obstáculos, ausencia de rampas, superficies complejas y otras barreras pueden documentarse para construir una representación más útil de la experiencia real de movilidad.",
  dataFlow: [
    "Observación en territorio",
    "Reporte desde la experiencia digital",
    "Evidencia fotográfica y contexto",
    "Estructuración del dato",
    "Visualización y uso institucional",
  ],
  barriersAlt: "Evidencia real de barreras urbanas documentadas durante SOLYON Move",
  territoryEvidence: "EVIDENCIA TERRITORIAL",

  crmEyebrow: "Capa institucional",
  crmTitle: "Del dato individual a una visión operacional del territorio.",
  crmBody:
    "SOLYON Move incorporó una capa institucional para organizar usuarios, rutas, incidentes, evidencias y visualización territorial. Esta capa permite demostrar que el producto fue concebido como infraestructura operativa y no como una aplicación aislada.",
  crmAlt: "Interfaz histórica del CRM y mapa territorial de SOLYON Move",
  historicalLabel: "INTERFAZ HISTÓRICA · EVOLUCIÓN DEL PRODUCTO",
  crmDisclaimer:
    "La imagen corresponde a una versión anterior de la interfaz institucional. Sus métricas visibles pertenecen a ese corte histórico y no representan las cifras actuales de SOLYON Move.",
  crmCapabilities: [
    {
      title: "Usuarios",
      body: "Seguimiento de perfiles y participación dentro del sistema.",
    },
    {
      title: "Rutas",
      body: "Registro y observación de información asociada a trayectos.",
    },
    {
      title: "Incidentes",
      body: "Documentación de barreras con contexto y evidencia.",
    },
    {
      title: "Reporting",
      body: "Base operativa para análisis, seguimiento y aprendizaje institucional.",
    },
  ],

  apiEyebrow: "Arquitectura conectable",
  apiTitle: "La infraestructura está diseñada para intercambiar información, no para vivir aislada.",
  apiBody:
    "La capa de integración permite conectar experiencia móvil, lógica de datos, herramientas institucionales y fuentes externas dentro de una misma arquitectura tecnológica.",
  integrationNodes: [
    "Mobile App",
    "Data Services",
    "SOLYON API Layer",
    "Institutional CRM",
    "External Systems",
  ],
  apiNote:
    "La arquitectura permite evolucionar hacia nuevas integraciones de ciudad y fuentes externas. Las capacidades se publican únicamente cuando han sido implementadas y verificadas.",

  validationEyebrow: "Del laboratorio al territorio",
  validationTitle: "La infraestructura fue llevada a condiciones urbanas reales.",
  validationBody:
    "La validación territorial permite observar cómo se comportan la experiencia móvil, la captura de información y las decisiones de producto frente a barreras, pendientes, superficies y situaciones que no aparecen en un entorno de laboratorio.",
  programLabel: "MOVILIDAD PARA TODOS · MEDELLÍN",
  programBody:
    "SOLYON Move fue desarrollado y validado dentro del ecosistema de innovación de Medellín, en el marco de Movilidad para Todos, iniciativa impulsada por Ruta N y Toyota Mobility Foundation.",
  fieldAlt: "Prueba y validación de SOLYON Move en calles de Medellín",

  mediaEyebrow: "Validación de terceros",
  mediaTitle: "Ruta N documentó públicamente el desarrollo de SOLYON Move.",
  mediaBody:
    "En agosto de 2026, Ruta N publicó una historia sobre las soluciones desarrolladas para facilitar los viajes de personas con movilidad reducida en Medellín e identificó a SOLYON Move como una plataforma de SOLYON Technologies.",
  mediaButton: "Leer publicación oficial ↗",
  mediaAlt: "Publicación de Ruta N sobre SOLYON Move",

  labEyebrow: "Capacidad del laboratorio",
  labTitle: "SOLYON Move demuestra cómo SOLYON Technologies construye sistemas completos.",
  labBody:
    "El valor estratégico del proyecto no está únicamente en su caso de uso. Está en haber recorrido múltiples capas de construcción tecnológica: experiencia de usuario, software, datos, APIs, infraestructura institucional, validación territorial y documentación.",
  labCapabilities: [
    {
      label: "01",
      title: "Product Engineering",
      body: "Diseño y evolución de una experiencia digital orientada a necesidades reales.",
    },
    {
      label: "02",
      title: "Applied AI & Data",
      body: "Modelado de contexto, personalización y estructuración de información operacional.",
    },
    {
      label: "03",
      title: "Institutional Software",
      body: "CRM, visualización y herramientas para convertir interacción en capacidad de gestión.",
    },
    {
      label: "04",
      title: "Field Validation",
      body: "Prueba del sistema fuera del laboratorio, bajo condiciones reales de ciudad.",
    },
  ],

  ctaEyebrow: "SOLYON Technologies",
  ctaTitle: "SOLYON Move es un caso de infraestructura aplicada. El laboratorio es la plataforma.",
  ctaBody:
    "SOLYON Technologies utiliza el aprendizaje de sistemas reales para construir infraestructura tecnológica en problemas complejos donde convergen inteligencia artificial, datos, operaciones y decisiones.",
  ctaButton: "Conversar con SOLYON",
};

const en = {
  eyebrow: "Accessible mobility infrastructure · Medellín",
  title: "SOLYON Move turns mobility, territory and urban context into operating intelligence.",
  body:
    "SOLYON Move is not merely an application. It is a technology infrastructure developed by SOLYON Technologies connecting mobile experience, personalization, territorial data, APIs, institutional management and barrier visualization to better understand accessible mobility.",
  capabilityTags: [
    "Mobile Product",
    "Applied AI",
    "Data Infrastructure",
    "API Layer",
    "Institutional CRM",
    "Urban Intelligence",
  ],
  download: "Download free on Google Play",
  technology: "Explore SOLYON technology",
  video: "Watch project video",
  heroAlt: "Real-world SOLYON Move field validation",
  realEvidence: "REAL EVIDENCE · FIELD VALIDATION",

  systemEyebrow: "The infrastructure",
  systemTitle: "The app is only the visible layer of the system.",
  systemBody:
    "Behind the user experience sits an architecture capturing territorial signals, structuring information, connecting components through APIs and enabling institutional tools for monitoring, analysis and decision-making.",
  architecture: [
    {
      title: "Citizen Layer",
      body: "Profile, mobility needs, navigation, alerts and reporting through the mobile experience.",
    },
    {
      title: "Data Layer",
      body: "Structuring territorial conditions, barriers, routes and operating context.",
    },
    {
      title: "API Layer",
      body: "Information exchange among applications, services, data and integrations.",
    },
    {
      title: "Institutional Layer",
      body: "CRM, operations, incidents, users, evidence and institutional monitoring.",
    },
    {
      title: "Urban Intelligence",
      body: "Territorial visualization and a foundation for analyzing patterns, risks and intervention opportunities.",
    },
  ],
  loopLabel: "Intelligence loop:",
  loop:
    "territory → observation → data → structuring → institutional operations → city learning.",

  userEyebrow: "Citizen layer",
  userTitle: "A mobile experience designed around the person, not merely the destination.",
  userBody:
    "SOLYON Move seeks to understand how individual characteristics and route conditions may change the mobility experience. The mobile interface is the contact point between personalization and the infrastructure operating behind it.",
  userItems: [
    "Mobility profile and type",
    "Personal variables and context",
    "Trip planning",
    "Route alerts and conditions",
    "Barrier reporting",
    "Community participation",
  ],
  appAlt: "Real SOLYON Move application interface",
  productEvidence: "REAL PRODUCT",

  dataEyebrow: "Territory as data",
  dataTitle: "A physical barrier can become structured evidence.",
  dataBody:
    "Potholes, obstacles, missing ramps, complex surfaces and other barriers can be documented to build a more useful representation of real mobility experience.",
  dataFlow: [
    "Territorial observation",
    "Digital reporting",
    "Photographic evidence and context",
    "Data structuring",
    "Institutional visualization and use",
  ],
  barriersAlt: "Real urban barriers documented through SOLYON Move",
  territoryEvidence: "TERRITORIAL EVIDENCE",

  crmEyebrow: "Institutional layer",
  crmTitle: "From individual data to an operational view of territory.",
  crmBody:
    "SOLYON Move incorporated an institutional layer to organize users, routes, incidents, evidence and territorial visualization. This layer demonstrates that the product was conceived as operating infrastructure rather than an isolated application.",
  crmAlt: "Historical SOLYON Move CRM interface and territorial map",
  historicalLabel: "HISTORICAL INTERFACE · PRODUCT EVOLUTION",
  crmDisclaimer:
    "This image corresponds to an earlier version of the institutional interface. Metrics visible in the screenshot belong to that historical snapshot and do not represent current SOLYON Move figures.",
  crmCapabilities: [
    {
      title: "Users",
      body: "Monitoring profiles and participation within the system.",
    },
    {
      title: "Routes",
      body: "Recording and observing information associated with journeys.",
    },
    {
      title: "Incidents",
      body: "Documenting barriers with context and evidence.",
    },
    {
      title: "Reporting",
      body: "Operating foundation for analysis, monitoring and institutional learning.",
    },
  ],

  apiEyebrow: "Connectable architecture",
  apiTitle: "The infrastructure is designed to exchange information, not live in isolation.",
  apiBody:
    "The integration layer connects mobile experience, data logic, institutional tooling and external sources within the same technology architecture.",
  integrationNodes: [
    "Mobile App",
    "Data Services",
    "SOLYON API Layer",
    "Institutional CRM",
    "External Systems",
  ],
  apiNote:
    "The architecture can evolve toward new city integrations and external data sources. Capabilities are published only when implemented and verified.",

  validationEyebrow: "From laboratory to territory",
  validationTitle: "The infrastructure was taken into real urban conditions.",
  validationBody:
    "Field validation shows how the mobile experience, data capture and product decisions behave against barriers, slopes, surfaces and situations that do not exist in a laboratory environment.",
  programLabel: "MOBILITY FOR ALL · MEDELLÍN",
  programBody:
    "SOLYON Move was developed and validated within Medellín's innovation ecosystem, under Mobility for All, an initiative driven by Ruta N and Toyota Mobility Foundation.",
  fieldAlt: "SOLYON Move testing and validation in Medellín",

  mediaEyebrow: "Third-party validation",
  mediaTitle: "Ruta N publicly documented the development of SOLYON Move.",
  mediaBody:
    "In August 2026, Ruta N published a story about solutions developed to facilitate travel for people with reduced mobility in Medellín and identified SOLYON Move as a platform by SOLYON Technologies.",
  mediaButton: "Read official story ↗",
  mediaAlt: "Ruta N publication featuring SOLYON Move",

  labEyebrow: "Laboratory capability",
  labTitle: "SOLYON Move demonstrates how SOLYON Technologies builds complete systems.",
  labBody:
    "The strategic value of the project goes beyond its use case. It lies in crossing multiple technology layers: user experience, software, data, APIs, institutional infrastructure, field validation and documentation.",
  labCapabilities: [
    {
      label: "01",
      title: "Product Engineering",
      body: "Design and evolution of a digital experience focused on real needs.",
    },
    {
      label: "02",
      title: "Applied AI & Data",
      body: "Context modeling, personalization and structuring of operating information.",
    },
    {
      label: "03",
      title: "Institutional Software",
      body: "CRM, visualization and tools turning interactions into management capability.",
    },
    {
      label: "04",
      title: "Field Validation",
      body: "Testing the system beyond the laboratory under real urban conditions.",
    },
  ],

  ctaEyebrow: "SOLYON Technologies",
  ctaTitle: "SOLYON Move is an applied infrastructure case. The laboratory is the platform.",
  ctaBody:
    "SOLYON Technologies uses learning from real systems to build technology infrastructure for complex problems where artificial intelligence, data, operations and decisions converge.",
  ctaButton: "Talk with SOLYON",
};
