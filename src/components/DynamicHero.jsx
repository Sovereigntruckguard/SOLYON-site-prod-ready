"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language";

export default function DynamicHero() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <section className="relative min-h-[82vh] overflow-hidden border-b border-white/10 bg-[#07090c]">
      {/* =========================================================
          VIDEO BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/visual/home-lab-tech-main.png"
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        >
          <source
            src="/hero/solyon-lab-hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* Oscurecimiento general */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Zona de lectura izquierda */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090c]/98 via-[#07090c]/78 to-[#07090c]/20" />

        {/* Profundidad inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090c]/75 via-transparent to-[#07090c]/20" />

        {/* Glow sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(59,130,246,0.07),transparent_32rem)]" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div className="section-shell relative z-10 flex min-h-[82vh] items-center py-16 md:py-20">
        <div className="max-w-[760px]">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#E6BC68] sm:text-xs">
            {t.eyebrow}
          </p>

          <h1 className="mt-5 max-w-[740px] text-4xl font-semibold leading-[0.98] tracking-[-0.052em] text-white sm:text-5xl md:text-6xl lg:text-[4.45rem]">
            {t.title}
          </h1>

          <p className="mt-6 max-w-[590px] text-base leading-7 text-white/66 md:text-lg md:leading-8">
            {t.body}
          </p>

          {/* ÚNICO CTA */}
          <div className="mt-8">
            <Link
              href="/technology"
              className="inline-flex items-center gap-3 rounded-full bg-[#E6BC68] px-6 py-3.5 text-sm font-semibold text-[#090b0e] transition duration-300 hover:-translate-y-0.5 hover:bg-[#F0CA7E]"
            >
              {t.primary}

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================
          VIDEO IDENTITY
      ========================================================= */}
      <div className="pointer-events-none absolute bottom-6 right-6 z-20 hidden md:block lg:bottom-8 lg:right-10">
        <div className="rounded-2xl border border-white/10 bg-[#07090c]/55 px-4 py-3 backdrop-blur-xl">
          <p className="text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-[#E6BC68]">
            SOLYON OS
          </p>

          <p className="mt-1 text-xs font-medium text-white/70">
            Operational Intelligence Infrastructure
          </p>
        </div>
      </div>

      {/* =========================================================
          LOCATION MARKER
      ========================================================= */}
      <div className="pointer-events-none absolute bottom-6 left-6 z-20 md:hidden">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#07090c]/60 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white/65 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E6BC68]" />
          Medellín · Colombia
        </span>
      </div>
    </section>
  );
}

/* =============================================================
   ESPAÑOL
============================================================= */

const es = {
  eyebrow:
    "LABORATORIO DEEPTECH · MEDELLÍN",

  title:
    "Construimos infraestructura tecnológica con IA aplicada.",

  body:
    "Software, datos y automatización para convertir operaciones reales en sistemas inteligentes.",

  primary:
    "Explorar tecnología",
};

/* =============================================================
   ENGLISH
============================================================= */

const en = {
  eyebrow:
    "DEEPTECH LABORATORY · MEDELLÍN",

  title:
    "We build technology infrastructure with applied AI.",

  body:
    "Software, data and automation that turn real-world operations into intelligent systems.",

  primary:
    "Explore technology",
};
