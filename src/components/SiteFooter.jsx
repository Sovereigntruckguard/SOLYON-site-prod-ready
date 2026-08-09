"use client";

import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import { useLanguage } from "@/lib/language";

const ELEVENLABS_GRANTS_URL = "https://elevenlabs.io/startup-grants";

const ELEVENLABS_GRANTS_LOGO =
  "https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp";

const socials = [
  ["LinkedIn", "https://www.linkedin.com/company/solyon-technologies/"],
  ["Instagram", "https://www.instagram.com/solyontechnologies/"],
  ["Facebook", "https://www.facebook.com/profile.php?id=61584609184819"],
  ["YouTube", "https://www.youtube.com/watch?v=0SyayXeU42g"],
];

export default function SiteFooter() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <footer className="border-t border-white/10 bg-[#07090c] text-white">
      <div className="section-shell py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1.25fr_0.7fr_0.7fr_1fr]">
          {/* COMPANY */}
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-white/90">
              SOLYON TECHNOLOGIES S.A.S.
            </p>

            <p className="mt-2 text-xs text-white/42">
              Medellín, Colombia
            </p>

            <p className="mt-3 max-w-xs text-sm leading-6 text-white/48">
              {t.descriptor}
            </p>

            <div className="mt-5">
              <GooglePlayLink label={t.download} />
            </div>
          </div>

          {/* NAVIGATION */}
          <nav
            className="grid content-start gap-y-3 text-sm text-white/48"
            aria-label={t.navigationLabel}
          >
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

          {/* SOCIAL */}
          <div className="text-sm text-white/48">
            <p className="font-medium text-white/75">
              {t.social}
            </p>

            <div className="mt-3 grid gap-3">
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

          {/* CONTACT + ELEVENLABS */}
          <div className="text-sm text-white/48 xl:text-right">
            <a
              href="mailto:sergio@solyontechnologies.com"
              className="transition hover:text-white"
            >
              sergio@solyontechnologies.com
            </a>

            <div className="mt-6 xl:flex xl:flex-col xl:items-end">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/32">
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
                  className="h-auto w-[155px] md:w-[170px]"
                />
              </a>

              <p className="mt-3 max-w-[260px] text-xs leading-5 text-white/34">
                {t.grantDescriptor}
              </p>
            </div>
          </div>
        </div>

        {/* LEGAL */}
        <div className="mt-9 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SOLYON Technologies S.A.S.
          </p>

          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}

const es = {
  descriptor:
    "Laboratorio DeepTech y de inteligencia artificial aplicada",

  navigationLabel:
    "Navegación del pie de página",

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

const en = {
  descriptor:
    "DeepTech and applied artificial intelligence laboratory",

  navigationLabel:
    "Footer navigation",

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
