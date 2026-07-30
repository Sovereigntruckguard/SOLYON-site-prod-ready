"use client";

import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export default function SolyonMovePage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(230,188,104,0.12),transparent_32rem)]" />
        <div className="section-shell relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-7xl">{t.title}</h1>
            <p className="section-copy mt-7">{t.body}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex justify-center rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e]">{t.primary}</Link>
              <a href="https://www.youtube.com/watch?v=0SyayXeU42g" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white">{t.video}</a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
            <Image src="/visual/solyon_move_institucional.png" alt={t.heroAlt} width={1200} height={820} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-full rounded-[1.45rem] object-cover" />
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
        <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3">
            <Image src="/visual/impact-institutional.png" alt={t.institutionalAlt} width={1100} height={760} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full rounded-[1.45rem] object-cover" />
          </div>
          <div>
            <p className="eyebrow">{t.validationEyebrow}</p>
            <h2 className="section-title mt-5">{t.validationTitle}</h2>
            <p className="section-copy mt-6">{t.validationBody}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.validationItems.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-[#0b0e12] p-4 text-sm leading-6 text-white/65">{item}</div>)}
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
          <Link href="/contact" className="mt-9 inline-flex rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e]">{t.ctaButton}</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "SOLYON Move · Movilidad accesible · Medellín",
  title: "Inteligencia urbana para desplazamientos más seguros y personalizados.",
  body: "SOLYON Move es una solución tecnológica desarrollada en Medellín para apoyar a personas con movilidad reducida en la planificación de viajes. Combina condiciones de ruta, contexto urbano y características personales para ofrecer información más útil antes y durante el desplazamiento.",
  primary: "Explorar colaboración institucional",
  video: "Ver video del proyecto",
  heroAlt: "Aplicación SOLYON Move para movilidad accesible en Medellín",
  problemEyebrow: "Problema",
  problemTitle: "La ciudad no se experimenta igual para todas las personas.",
  problemBody: "Una ruta que parece adecuada en un mapa puede incluir pendientes, superficies resbaladizas, clima adverso, barreras físicas o condiciones incompatibles con las capacidades de una persona. SOLYON Move busca incorporar estas variables a la decisión de movilidad.",
  problemCards: [
    { title: "Información insuficiente", body: "Los mapas tradicionales no siempre muestran las condiciones que determinan si una ruta es realmente accesible." },
    { title: "Personalización limitada", body: "La edad, el peso y el tipo de movilidad pueden cambiar significativamente la dificultad de un trayecto." },
    { title: "Riesgo contextual", body: "Clima, superficie y cambios del entorno pueden volver insegura una ruta que normalmente sería viable." },
  ],
  institutionalAlt: "Validación institucional y urbana de SOLYON Move",
  validationEyebrow: "Validación institucional",
  validationTitle: "Tecnología aplicada con actores de ciudad.",
  validationBody: "SOLYON Move fue desarrollado dentro de un piloto institucional con Ruta N y Toyota Mobility Foundation. Esta experiencia permitió construir y probar capacidades en un contexto urbano real, con usuarios, restricciones y objetivos de impacto público.",
  validationItems: ["Piloto institucional ejecutado en Medellín", "Aplicación publicada en Google Play", "Proceso de QA y validación funcional", "Evolución basada en retroalimentación de accesibilidad"],
  techEyebrow: "Arquitectura de producto",
  techTitle: "Personalización, contexto y prevención en una sola experiencia.",
  techBody: "La hoja de ruta tecnológica integra datos urbanos, variables personales y señales del entorno para mejorar la calidad de la recomendación sin reemplazar el juicio del usuario ni de las instituciones responsables.",
  techCards: [
    { label: "01", title: "Perfil de movilidad", body: "Considera el tipo de movilidad y capacidades particulares del usuario." },
    { label: "02", title: "Edad y peso", body: "Adapta el análisis de esfuerzo y dificultad a características personales relevantes." },
    { label: "03", title: "Alertas climáticas", body: "Plantea integración con fuentes como SIATA para anticipar lluvia y condiciones adversas." },
    { label: "04", title: "Superficie y riesgo", body: "Incorpora alertas relacionadas con piso resbaladizo y condiciones de la ruta." },
  ],
  ctaEyebrow: "Escalamiento",
  ctaTitle: "Buscamos convertir una validación local en infraestructura de movilidad inclusiva.",
  ctaBody: "SOLYON está abierto a trabajar con ciudades, universidades, organizaciones de discapacidad, operadores de movilidad y fondos de impacto para ampliar datos, validaciones y alcance territorial.",
  ctaButton: "Conversemos sobre SOLYON Move",
};

const en = {
  eyebrow: "SOLYON Move · Accessible mobility · Medellín",
  title: "Urban intelligence for safer, more personalized mobility decisions.",
  body: "SOLYON Move is a technology solution developed in Medellín to support people with reduced mobility in trip planning. It combines route conditions, urban context and personal characteristics to provide more useful information before and during a journey.",
  primary: "Explore institutional collaboration",
  video: "Watch the project video",
  heroAlt: "SOLYON Move accessible mobility application in Medellín",
  problemEyebrow: "Problem",
  problemTitle: "The city is not experienced equally by everyone.",
  problemBody: "A route that appears suitable on a map may include slopes, slippery surfaces, adverse weather, physical barriers or conditions incompatible with a person's capabilities. SOLYON Move seeks to incorporate these variables into mobility decisions.",
  problemCards: [
    { title: "Insufficient information", body: "Traditional maps do not always show the conditions that determine whether a route is truly accessible." },
    { title: "Limited personalization", body: "Age, weight and mobility type can significantly change the difficulty of a journey." },
    { title: "Contextual risk", body: "Weather, surface and environmental changes can make a normally viable route unsafe." },
  ],
  institutionalAlt: "Institutional and urban validation of SOLYON Move",
  validationEyebrow: "Institutional validation",
  validationTitle: "Technology applied with city stakeholders.",
  validationBody: "SOLYON Move was developed through an institutional pilot with Ruta N and Toyota Mobility Foundation. This experience enabled the team to build and test capabilities in a real urban context with users, constraints and public-impact goals.",
  validationItems: ["Institutional pilot executed in Medellín", "Application published on Google Play", "QA and functional validation process", "Evolution based on accessibility feedback"],
  techEyebrow: "Product architecture",
  techTitle: "Personalization, context and prevention in one experience.",
  techBody: "The technology roadmap combines urban data, personal variables and environmental signals to improve recommendation quality without replacing user judgment or institutional responsibility.",
  techCards: [
    { label: "01", title: "Mobility profile", body: "Considers the user's mobility type and individual capabilities." },
    { label: "02", title: "Age and weight", body: "Adapts effort and difficulty analysis to relevant personal characteristics." },
    { label: "03", title: "Weather alerts", body: "Plans integration with sources such as SIATA to anticipate rain and adverse conditions." },
    { label: "04", title: "Surface and risk", body: "Incorporates alerts related to slippery surfaces and route conditions." },
  ],
  ctaEyebrow: "Scale",
  ctaTitle: "We seek to turn local validation into inclusive mobility infrastructure.",
  ctaBody: "SOLYON is open to working with cities, universities, disability organizations, mobility operators and impact funds to expand data, validation and geographic reach.",
  ctaButton: "Discuss SOLYON Move",
};
