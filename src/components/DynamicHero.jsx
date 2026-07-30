"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language";

export default function DynamicHero() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden border-b border-white/10">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src="/hero/hero-solyon.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#07090c]/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07090c] via-[#07090c]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-transparent to-[#07090c]/55" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-24 md:px-10">
        <div className="max-w-4xl">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.28em] text-[#E6BC68]">
            {t.eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-7xl">
            {t.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            {t.body}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/ecosystem"
              className="inline-flex items-center justify-center rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]"
            >
              {t.primary}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              {t.secondary}
            </Link>
          </div>

          <div className="mt-14 grid max-w-3xl gap-5 border-t border-white/15 pt-7 text-sm text-white/55 sm:grid-cols-3">
            {t.proof.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

const es = {
  eyebrow: "IA aplicada · Inteligencia de riesgo · Sistemas operativos",
  title: "Inteligencia construida desde la operación real.",
  body: "SOLYON Technologies es una compañía tecnológica y laboratorio de inteligencia artificial aplicada con base en Medellín. Convertimos conocimiento operativo, datos y evidencia documental en sistemas para gestionar riesgo, automatizar procesos y mejorar decisiones en industrias reales.",
  primary: "Explorar el ecosistema",
  secondary: "Contacto institucional",
  proof: [
    "Compañía tecnológica y laboratorio de IA en Colombia",
    "Aplicación operativa en flujos de trucking y seguros en Estados Unidos",
    "Tecnología de movilidad validada institucionalmente en Medellín",
  ],
};

const en = {
  eyebrow: "Applied AI · Risk intelligence · Operating systems",
  title: "Intelligence built from real-world operations.",
  body: "SOLYON Technologies is a technology company and applied artificial intelligence laboratory based in Medellín. We transform operating knowledge, data and documented evidence into systems for managing risk, automating processes and improving decisions in real industries.",
  primary: "Explore the ecosystem",
  secondary: "Institutional contact",
  proof: [
    "Technology company and AI laboratory in Colombia",
    "Operating application across US trucking and insurance workflows",
    "Institutionally validated mobility technology in Medellín",
  ],
};
