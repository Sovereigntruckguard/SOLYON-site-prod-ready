"use client";

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
    ["/impact", t.nav.impact],
    ["/about", t.nav.about],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07090c]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="SOLYON Technologies">
          <img src="/logo.png" alt="SOLYON" className="h-9 w-9 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.12em] text-white md:text-base">
              SOLYON TECHNOLOGIES
            </span>
            <span className="text-[0.65rem] tracking-[0.08em] text-white/45">
              {t.slogan}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-medium text-white/70 md:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="transition hover:text-white">
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
            className="flex items-center justify-center rounded-md border border-white/15 p-2 text-white/70 md:hidden"
            aria-label={t.menuLabel}
            aria-expanded={open}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#07090c] md:hidden">
          <nav className="flex flex-col px-5 py-4 text-sm text-white/75">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 last:border-0"
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="py-3 text-[#E6BC68]">
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

const es = {
  slogan: "IA aplicada desde Medellín",
  languageLabel: "Cambiar sitio a inglés",
  menuLabel: "Abrir menú",
  nav: {
    home: "Inicio",
    technology: "Tecnología",
    ecosystem: "Ecosistema",
    impact: "Impacto",
    about: "Nosotros",
    contact: "Contacto",
  },
};

const en = {
  slogan: "Applied AI from Medellin",
  languageLabel: "Switch website to Spanish",
  menuLabel: "Open menu",
  nav: {
    home: "Home",
    technology: "Technology",
    ecosystem: "Ecosystem",
    impact: "Impact",
    about: "About",
    contact: "Contact",
  },
};
