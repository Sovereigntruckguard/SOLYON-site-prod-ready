"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/lib/language";

export default function MainHeader() {
  const { lang, setLang } = useLanguage();
  const t = lang === "es" ? es : en;

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    ["/", t.nav.home],
    ["/technology", t.nav.technology],
    ["/ecosystem", t.nav.ecosystem],
    ["/solyon-move", t.nav.move],
    ["/impact", t.nav.impact],
    ["/about", t.nav.about],
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  const toggleLanguage = () => {
    setLang(lang === "es" ? "en" : "es");
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090c]/90 backdrop-blur-xl">
      <div className="section-shell flex min-h-[72px] items-center justify-between gap-4">
        {/* =====================================================
            BRAND
        ===================================================== */}
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-3"
          aria-label="SOLYON Technologies"
          onClick={() => setOpen(false)}
        >
          {/* LOGO OFICIAL SOLYON */}
          <div className="relative h-10 w-10 shrink-0">
            <Image
              src="/logo-solyon.svg"
              alt="SOLYON Technologies"
              fill
              priority
              sizes="40px"
              className="object-contain"
            />
          </div>

          <div className="min-w-0">
            <p className="whitespace-nowrap text-[0.88rem] font-semibold leading-none tracking-[0.13em] text-white sm:text-[1rem]">
              SOLYON TECHNOLOGIES
            </p>

            <p className="mt-1 hidden text-[0.66rem] leading-4 text-white/45 sm:block sm:text-[0.7rem]">
              {t.slogan}
            </p>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <nav
          className="hidden items-center gap-5 text-xs font-medium xl:flex"
          aria-label={t.navigationLabel}
        >
          {links.map(([href, label]) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                className={`relative py-2 transition ${
                  active
                    ? "text-white"
                    : "text-white/58 hover:text-white"
                }`}
              >
                {label}

                {active && (
                  <span className="absolute inset-x-0 -bottom-[1px] mx-auto h-px w-4 bg-[#E6BC68]" />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={`rounded-full border px-4 py-2 transition ${
              isActive("/contact")
                ? "border-[#E6BC68]/50 bg-[#E6BC68]/10 text-[#E6BC68]"
                : "border-white/20 text-white hover:border-[#E6BC68]/50 hover:text-[#E6BC68]"
            }`}
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* =====================================================
            ACTIONS
        ===================================================== */}
        <div className="flex shrink-0 items-center gap-2 text-xs">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-white/15 px-3 py-1.5 font-medium text-white/70 transition hover:border-white/30 hover:text-white"
            aria-label={t.languageLabel}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex items-center justify-center rounded-md border border-white/15 p-2 text-white/70 transition hover:border-white/30 hover:text-white xl:hidden"
            aria-label={open ? t.closeMenuLabel : t.menuLabel}
            aria-expanded={open}
            aria-controls="solyon-mobile-navigation"
          >
            {open ? (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}
      {open && (
        <div
          id="solyon-mobile-navigation"
          className="border-t border-white/10 bg-[#07090c]/98 xl:hidden"
        >
          <nav
            className="section-shell flex flex-col py-3 text-sm"
            aria-label={t.mobileNavigationLabel}
          >
            {links.map(([href, label]) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-white/5 py-3 transition ${
                    active
                      ? "text-[#E6BC68]"
                      : "text-white/68 hover:text-white"
                  }`}
                >
                  <span>{label}</span>

                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E6BC68]" />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={`mt-3 inline-flex justify-center rounded-full px-5 py-3 font-semibold transition ${
                isActive("/contact")
                  ? "bg-[#E6BC68] text-[#090b0e]"
                  : "border border-[#E6BC68]/35 text-[#E6BC68]"
              }`}
            >
              {t.nav.contact}
            </Link>

            <div className="mt-4 border-t border-white/5 pt-4">
              <p className="text-[0.65rem] leading-5 text-white/30">
                {t.mobileFooter}
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

const es = {
  slogan:
    "DeepTech e IA aplicada desde Medellín",

  languageLabel:
    "Cambiar sitio a inglés",

  menuLabel:
    "Abrir menú",

  closeMenuLabel:
    "Cerrar menú",

  navigationLabel:
    "Navegación principal",

  mobileNavigationLabel:
    "Navegación móvil",

  mobileFooter:
    "SOLYON Technologies · Medellín, Colombia",

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
  slogan:
    "DeepTech and applied AI from Medellín",

  languageLabel:
    "Switch website to Spanish",

  menuLabel:
    "Open menu",

  closeMenuLabel:
    "Close menu",

  navigationLabel:
    "Main navigation",

  mobileNavigationLabel:
    "Mobile navigation",

  mobileFooter:
    "SOLYON Technologies · Medellín, Colombia",

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
