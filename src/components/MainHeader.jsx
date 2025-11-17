// src/components/MainHeader.jsx
"use client";

import { useLanguage } from "@/lib/language";

export default function MainHeader() {
  const { lang, setLang } = useLanguage();
  const t = lang === "es" ? es : en;

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

        {/* Navegación principal */}
        <nav className="hidden items-center gap-5 text-xs text-gray-200 md:flex">
          <a href="/" className="hover:text-white">
            {t.nav.home}
          </a>
          <a href="/ecosystem" className="hover:text-white">
            {t.nav.ecosystem}
          </a>
          <a href="/technology" className="hover:text-white">
            {t.nav.technology}
          </a>
          <a href="/impact" className="hover:text-white">
            {t.nav.impact}
          </a>
          <a href="/about" className="hover:text-white">
            {t.nav.about}
          </a>
          <a href="/store" className="hover:text-white">
            {t.nav.store}
          </a>
          <a href="/investors" className="hover:text-white">
            {t.nav.investors}
          </a>
          <a href="/contact" className="hover:text-white">
            {t.nav.contact}
          </a>
        </nav>

        {/* Banderas / switch de idioma */}
        <div className="flex items-center gap-2 text-xs">
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
        </div>
      </div>
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
