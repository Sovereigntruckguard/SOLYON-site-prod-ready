// src/components/MainHeader.jsx
"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language";

export default function MainHeader() {
  const { lang, setLang } = useLanguage();
  const t = lang === "es" ? es : en;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#2A2A2A] bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">

        {/* Logo + slogan */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SOLYON"
            className="w-10 h-10 object-contain drop-shadow-xl"
          />
          <div className="flex flex-col">
            <span className="font-display text-lg md:text-xl">
              <span className="gradient-gold">SOLYON</span>{" "}
              <span className="text-gray-100">Technologies</span>
            </span>
            <span className="text-[0.7rem] text-gray-400">
              {t.slogan}
            </span>
          </div>
        </a>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-5 text-xs text-gray-200 md:flex">
          <a href="/" className="hover:text-white">{t.nav.home}</a>
          <a href="/ecosystem" className="hover:text-white">{t.nav.ecosystem}</a>
          <a href="/technology" className="hover:text-white">{t.nav.technology}</a>
          <a href="/impact" className="hover:text-white">{t.nav.impact}</a>
          <a href="/about" className="hover:text-white">{t.nav.about}</a>
          <a href="/store" className="hover:text-white">{t.nav.store}</a>
          <a href="/investors" className="hover:text-white">{t.nav.investors}</a>
          <a href="/contact" className="hover:text-white">{t.nav.contact}</a>
        </nav>

        {/* Idioma + hamburger */}
        <div className="flex items-center gap-2 text-xs">

          {/* Idiomas */}
          <button
            type="button"
            onClick={() => setLang("es")}
            className={`flex items-center gap-1 rounded-full border px-2 py-1 transition ${
              lang === "es"
                ? "border-[#FFD700] bg-[#FFD700]/10 text-[#FFD700]"
                : "border-[#333] text-gray-300 hover:border-[#555]"
            }`}
          >
            <span>🇨🇴</span>
            <span>ES</span>
          </button>

          <button
            type="button"
            onClick={() => setLang("en")}
            className={`flex items-center gap-1 rounded-full border px-2 py-1 transition ${
              lang === "en"
                ? "border-[#FFD700] bg-[#FFD700]/10 text-[#FFD700]"
                : "border-[#333] text-gray-300 hover:border-[#555]"
            }`}
          >
            <span>🇺🇸</span>
            <span>EN</span>
          </button>

          {/* Hamburger (solo móvil) */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="ml-2 flex items-center justify-center rounded-md border border-[#333] p-2 text-gray-300 hover:border-[#555] md:hidden"
            aria-label="Abrir menú"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden border-t border-[#2A2A2A] bg-black/90 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 text-sm text-gray-200">
            <a onClick={() => setOpen(false)} href="/" className="py-2 hover:text-white">{t.nav.home}</a>
            <a onClick={() => setOpen(false)} href="/ecosystem" className="py-2 hover:text-white">{t.nav.ecosystem}</a>
            <a onClick={() => setOpen(false)} href="/technology" className="py-2 hover:text-white">{t.nav.technology}</a>
            <a onClick={() => setOpen(false)} href="/impact" className="py-2 hover:text-white">{t.nav.impact}</a>
            <a onClick={() => setOpen(false)} href="/about" className="py-2 hover:text-white">{t.nav.about}</a>
            <a onClick={() => setOpen(false)} href="/store" className="py-2 hover:text-white">{t.nav.store}</a>
            <a onClick={() => setOpen(false)} href="/investors" className="py-2 hover:text-white">{t.nav.investors}</a>
            <a onClick={() => setOpen(false)} href="/contact" className="py-2 hover:text-white">{t.nav.contact}</a>
          </nav>
        </div>
      )}
    </header>
  );
}

const es = {
  slogan: "No buscamos cambiar el mundo, expandimos la forma de verlo.",
  nav: {
    home: "Inicio",
    ecosystem: "Ecosistema",
    technology: "Tecnología",
    impact: "Impacto",
    about: "Nosotros",
    store: "Store",
    investors: "Investors",
    contact: "Contacto",
  },
};

const en = {
  slogan: "We don’t try to change the world, we expand how we see it.",
  nav: {
    home: "Home",
    ecosystem: "Ecosystem",
    technology: "Technology",
    impact: "Impact",
    about: "About",
    store: "Store",
    investors: "Investors",
    contact: "Contact",
  },
};
