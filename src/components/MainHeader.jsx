"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/language";

export default function MainHeader() {
  const { lang, setLang } = useLanguage();
  const t = lang === "es" ? es : en;
  const [open, setOpen] = useState(false);

  const links = [
    ["/", t.nav.home],
    ["/technology", t.nav.technology],
    ["/ecosystem", t.nav.ecosystem],
    ["/solyon-move", t.nav.move],
    ["/impact", t.nav.impact],
    ["/about", t.nav.about],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090c]/95 backdrop-blur-xl">
      <div className="section-shell flex min-h-[74px] items-center justify-between gap-6 py-2">
        
        {/* BRAND */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="SOLYON Technologies"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/visual/solyon-technologies-logo.png"
            alt="SOLYON Technologies"
            width={420}
            height={520}
            priority
            className="h-[54px] w-auto object-contain sm:h-[60px]"
          />

          <div className="hidden border-l border-white/10 pl-3 lg:block">
            <p className="max-w-[190px] text-[0.62rem] font-medium leading-4 tracking-[0.08em] text-white/40">
              {t.slogan}
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-5 text-xs font-medium text-white/70 xl:flex">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="transition hover:text-white"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-4 py-2 text-white transition hover:border-[#C99A3D] hover:text-[#E6BC68]"
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* LANGUAGE + MOBILE MENU */}
        <div className="flex items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="rounded-full border border-white/15 px-3 py-1.5 text-white/70 transition hover:border-white/30 hover:text-white"
            aria-label={t.languageLabel}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center rounded-md border border-white/15 p-2 text-white/70 transition hover:border-white/30 hover:text-white xl:hidden"
            aria-label={t.menuLabel}
            aria-expanded={open}
          >
            {open ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="border-t border-white/10 bg-[#07090c] xl:hidden">
          <nav className="section-shell flex flex-col py-4 text-sm text-white/75">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 transition hover:text-white"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="py-3 font-medium text-[#E6BC68]"
            >
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

const es = {
  slogan: "DeepTech e IA aplicada desde Medellín",
  languageLabel: "Cambiar sitio a inglés",
  menuLabel: "Abrir menú",
  nav: {
    home: "Inicio",
    technology: "Tecnología",
    ecosystem: "Ecosistema",
    move: "SOLYON Move",
    impact: "Impacto",
    about: "Nosotros",
    contact: "Contacto",
  },
};

const en = {
  slogan: "DeepTech and applied AI from Medellín",
  languageLabel: "Switch website to Spanish",
  menuLabel: "Open menu",
  nav: {
    home: "Home",
    technology: "Technology",
    ecosystem: "Ecosystem",
    move: "SOLYON Move",
    impact: "Impact",
    about: "About",
    contact: "Contact",
  },
};
