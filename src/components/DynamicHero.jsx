"use client";

import Link from "next/link";
import DeeptechSystemVisual from "@/components/DeeptechSystemVisual";
import GooglePlayLink from "@/components/GooglePlayLink";
import { useLanguage } from "@/lib/language";

export default function DynamicHero() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <section className="relative min-h-[94vh] w-full overflow-hidden border-b border-white/10">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        src="/hero/hero-solyon.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#07090c]/78" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(230,188,104,0.14),transparent_35rem)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07090c] via-[#07090c]/92 to-[#07090c]/62" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-transparent to-[#07090c]/75" />

      <div className="relative z-10 mx-auto grid min-h-[94vh] max-w-7xl items-center gap-14 px-6 py-24 md:px-10 lg:grid-cols-[0.93fr_1.07fr]">
        <div className="max-w-4xl">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.28em] text-[#E6BC68]">
            {t.eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
            {t.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/72 md:text-xl">
            {t.body}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/technology"
              className="inline-flex items-center justify-center rounded-full bg-[#E6BC68] px-7 py-3.5 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]"
            >
              {t.primary}
            </Link>
            <Link
              href="/ecosystem"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              {t.secondary}
            </Link>
            <GooglePlayLink label={t.download} />
          </div>

          <p className="mt-4 max-w-2xl text-xs leading-5 text-white/40">{t.downloadNote}</p>

          <div className="mt-12 grid max-w-4xl gap-4 border-t border-white/15 pt-7 text-sm leading-6 text-white/58 sm:grid-cols-3">
            {t.proof.map((item) => (
              <div key={item} className="border-l border-[#E6BC68]/45 pl-4">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
          <div className="absolute -inset-10 rounded-full bg-[#E6BC68]/10 blur-3xl" />
          <div className="relative">
            <DeeptechSystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

const es = {
  eyebrow: "DeepTech desde Medellín · IA aplicada · Infraestructura tecnológica",
  title: "Convertimos conocimiento operativo en sistemas inteligentes.",
  body: "SOLYON Technologies es la compañía madre y laboratorio DeepTech del ecosistema. Desde Medellín transformamos años de experiencia, documentación y validación real en tecnología para riesgo, seguros, trucking, movilidad e inteligencia operativa.",
  primary: "Explorar nuestra tecnología",
  secondary: "Entender el ecosistema",
  download: "Descargar SOLYON Move gratis",
  downloadNote: "SOLYON Move está disponible públicamente y sin costo en Google Play como una de las validaciones reales del laboratorio.",
  proof: [
    "Proyecto central de inteligencia de riesgo para trucking latino",
    "Validación operativa en seguros comerciales en Estados Unidos",
    "Validación institucional y de ciudad mediante SOLYON Move",
  ],
};

const en = {
  eyebrow: "DeepTech from Medellín · Applied AI · Technology infrastructure",
  title: "We turn operating knowledge into intelligent systems.",
  body: "SOLYON Technologies is the parent company and DeepTech laboratory of the ecosystem. From Medellín, we transform years of experience, documentation and real-world validation into technology for risk, insurance, trucking, mobility and operational intelligence.",
  primary: "Explore our technology",
  secondary: "Understand the ecosystem",
  download: "Download SOLYON Move free",
  downloadNote: "SOLYON Move is publicly available at no cost on Google Play as one of the laboratory's real-world validations.",
  proof: [
    "Central risk-intelligence project for Latin trucking",
    "Operating validation in United States commercial insurance",
    "Institutional and city validation through SOLYON Move",
  ],
};
