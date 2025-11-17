// src/lib/language.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es"); // default: español

  useEffect(() => {
    // 1. Leer de localStorage si ya eligió
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("solyon-lang");
    if (stored === "es" || stored === "en") {
      setLang(stored);
      return;
    }

    // 2. Autodetección básica por idioma del navegador
    const navLang = (navigator.language || navigator.userLanguage || "es").toLowerCase();

    if (navLang.startsWith("en")) {
      setLang("en");
      window.localStorage.setItem("solyon-lang", "en");
    } else {
      setLang("es");
      window.localStorage.setItem("solyon-lang", "es");
    }
  }, []);

  const changeLanguage = (value) => {
    setLang(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("solyon-lang", value);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
