"use client";

import Image from "next/image";
import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import { useLanguage } from "@/lib/language";

const ELEVENLABS_GRANTS_URL =
  "https://elevenlabs.io/startup-grants";

const ELEVENLABS_GRANTS_LOGO =
  "https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp";

const EMAIL = "sergio@solyontechnologies.com";
const WHATSAPP = "https://wa.me/573147903517";

const socials = [
  [
    "LinkedIn",
    "https://www.linkedin.com/company/solyon-technologies/",
  ],
  [
    "Instagram",
    "https://www.instagram.com/solyontechnologies/",
  ],
  [
    "Facebook",
    "https://www.facebook.com/profile.php?id=61584609184819",
  ],
  [
    "YouTube",
    "https://www.youtube.com/watch?v=0SyayXeU42g",
  ],
];

export default function SiteFooter() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <footer className="border-t border-white/10 bg-[#06080b]">
      <div className="section-shell py-10 md:py-12">
        <div className="grid gap-9 md:grid-cols-2 xl:grid-cols-[1.35fr_0.7fr_0.7fr_1.1fr]">
          {/* =====================================================
              COMPANY
          ===================================================== */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="SOLYON Technologies"
            >
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src="/visual/solyon-symbol.png"
                  alt="SOLYON Technologies"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-semibold tracking-[0.12em] text-white">
                  SOLYON TECHNOLOGIES
                </p>

                <p className="mt-1 text-[0.65rem] text-white/38">
                  Medellín · Colombia
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
              {t.descriptor}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[0.62rem] text-white/40">
                DeepTech
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[0.62rem] text-white/40">
                Applied AI
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[0.62rem] text-white/40">
                Operational Intelligence
              </span>
            </div>

            <div className="mt-6">
              <GooglePlayLink label={t.download} />
            </div>
          </div>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}
          <nav
            className="grid content-start gap-y-3 text-sm text-white/48"
            aria-label={t.navigationLabel}
          >
            <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/30">
              {t.navigationTitle}
            </p>

            <Link
              href="/technology"
              className="transition hover:text-white"
            >
              {t.technology}
            </Link>

            <Link
              href="/ecosystem"
              className="transition hover:text-white"
            >
              {t.ecosystem}
            </Link>

            <Link
              href="/solyon-move"
              className="transition hover:text-white"
            >
              SOLYON Move
            </Link>

            <Link
              href="/impact"
              className="transition hover:text-white"
            >
              {t.impact}
            </Link>

            <Link
              href="/about"
              className="transition hover:text-white"
            >
              {t.about}
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              {t.contact}
            </Link>
          </nav>

          {/* =====================================================
              SOCIAL
          ===================================================== */}
          <div className="text-sm text-white/48">
            <p className="mb-4 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/30">
              {t.social}
            </p>

            <div className="grid gap-3">
              {socials.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* =====================================================
              CONTACT + ELEVENLABS
          ===================================================== */}
          <div className="text-sm text-white/48 xl:text-right">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/30">
              {t.contactTitle}
            </p>

            <div className="mt-4 grid gap-2 xl:justify-items-end">
              <a
                href={`mailto:${EMAIL}`}
                className="transition hover:text-white"
              >
                {EMAIL}
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp · +57 314 790 3517
              </a>
            </div>

            {/* ELEVENLABS */}
            <div className="mt-7 xl:flex xl:flex-col xl:items-end">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/30">
                {t.aiProgram}
              </p>

              <a
                href={ELEVENLABS_GRANTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ElevenLabs Grants"
                className="mt-3 inline-flex opacity-75 transition hover:opacity-100"
              >
                <img
                  src={ELEVENLABS_GRANTS_LOGO}
                  alt="ElevenLabs Grants"
                  loading="lazy"
                  className="h-auto w-[150px] md:w-[165px]"
                />
              </a>

              <p className="mt-3 max-w-[270px] text-xs leading-5 text-white/32">
                {t.grantDescriptor}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            LEGAL
        ===================================================== */}
        <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/28 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
            <p>
              © {new Date().getFullYear()} SOLYON Technologies S.A.S.
            </p>

            <p className="hidden sm:block">
              ·
            </p>

            <p>
              Medellín, Colombia
            </p>
          </div>

          <p>
            {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   ESPAÑOL
========================================================= */

const es = {
  descriptor:
    "Laboratorio DeepTech desde Medellín que construye infraestructura tecnológica con IA aplicada, datos, software y automatización.",

  navigationLabel:
    "Navegación del pie de página",

  navigationTitle:
    "Explorar",

  technology:
    "Tecnología",

  ecosystem:
    "Ecosistema",

  impact:
    "Impacto",

  about:
    "Nosotros",

  contact:
    "Contacto",

  contactTitle:
    "Contacto",

  social:
    "Canales oficiales",

  download:
    "SOLYON Move gratis en Google Play",

  aiProgram:
    "AI Infrastructure Program",

  grantDescriptor:
    "SOLYON Technologies fue seleccionada para recibir un ElevenLabs Grant.",

  rights:
    "Todos los derechos reservados.",
};

/* =========================================================
   ENGLISH
========================================================= */

const en = {
  descriptor:
    "DeepTech laboratory from Medellín building technology infrastructure with applied AI, data, software and automation.",

  navigationLabel:
    "Footer navigation",

  navigationTitle:
    "Explore",

  technology:
    "Technology",

  ecosystem:
    "Ecosystem",

  impact:
    "Impact",

  about:
    "About",

  contact:
    "Contact",

  contactTitle:
    "Contact",

  social:
    "Official channels",

  download:
    "Get SOLYON Move free on Google Play",

  aiProgram:
    "AI Infrastructure Program",

  grantDescriptor:
    "SOLYON Technologies was selected to receive an ElevenLabs Grant.",

  rights:
    "All rights reserved.",
};
