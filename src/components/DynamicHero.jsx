"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language";

export default function DynamicHero() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden border-b border-white/10">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        src="/hero/hero-solyon.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#07090c]/72" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(230,188,104,0.16),transparent_32rem)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07090c] via-[#07090c]/88 to-[#07090c]/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-transparent to-[#07090c]/70" />

      <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-6 py-24 md:px-10 lg:grid-cols-[1.08fr_0.92fr]">
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

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/solyon-move"
              className="inline-flex items-center justify-center rounded-full bg-[#E6BC68] px-7 py-3.5 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]"
            >
              {t.primary}
            </Link>
            <Link
              href="/technology"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              {t.secondary}
            </Link>
          </div>

          <div className="mt-14 grid max-w-4xl gap-4 border-t border-white/15 pt-7 text-sm leading-6 text-white/58 sm:grid-cols-3">
            {t.proof.map((item) => (
              <div key={item} className="border-l border-[#E6BC68]/45 pl-4">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-10 rounded-full bg-[#E6BC68]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b0e12]/90 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
            <Image
              src="/visual/solyon_move_institucional.png"
              alt="SOLYON Move, tecnología de movilidad accesible desarrollada en Medellín"
              width={1200}
              height={820}
              priority
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="h-auto w-full rounded-[1.45rem] object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-[#07090c]/88 p-5 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6BC68]">SOLYON Move</p>
              <p className="mt-2 text-sm leading-6 text-white/72">{t.visualCaption}</p>
            </div>
          </div>

          <div className="relative -mt-7 ml-auto w-[78%] overflow-hidden rounded-2xl border border-white/15 bg-[#0b0e12] p-2 shadow-[0_25px_70px_rgba(0,0,0,0.55)] sm:-mt-10 sm:w-[70%] lg:absolute lg:-bottom-16 lg:-right-8 lg:mt-0">
            <Image
              src="/visual/product-azoth-desktop.png"
              alt="Arquitectura operativa y de riesgo desarrollada por SOLYON Technologies"
              width={1000}
              height={640}
              sizes="(max-width: 1024px) 70vw, 30vw"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const es = {
  eyebrow: "DeepTech desde Medellín · IA aplicada · Sistemas de riesgo y movilidad",
  title: "Tecnología profunda para convertir problemas reales en sistemas inteligentes.",
  body: "SOLYON Technologies construye desde Medellín sistemas de inteligencia artificial aplicada para riesgo, seguros, trucking y movilidad accesible. Unimos conocimiento operativo, evidencia documentada y desarrollo tecnológico para crear infraestructura con impacto regional y alcance global.",
  primary: "Descubrir SOLYON Move",
  secondary: "Explorar la tecnología",
  visualCaption: "Movilidad accesible desarrollada y validada mediante un piloto institucional en Medellín.",
  proof: [
    "Laboratorio DeepTech y de IA aplicada construido en Medellín",
    "Piloto institucional con Ruta N y Toyota Mobility Foundation",
    "Validación operativa en seguros de trucking en Estados Unidos",
  ],
};

const en = {
  eyebrow: "DeepTech from Medellín · Applied AI · Risk and mobility systems",
  title: "Deep technology turning real-world problems into intelligent systems.",
  body: "SOLYON Technologies builds applied artificial intelligence systems in Medellín for risk, insurance, trucking and accessible mobility. We combine operating knowledge, documented evidence and technology development to create infrastructure with regional impact and global reach.",
  primary: "Discover SOLYON Move",
  secondary: "Explore the technology",
  visualCaption: "Accessible mobility technology developed and validated through an institutional pilot in Medellín.",
  proof: [
    "DeepTech and applied AI laboratory built in Medellín",
    "Institutional pilot with Ruta N and Toyota Mobility Foundation",
    "Operating validation in United States trucking insurance",
  ],
};
