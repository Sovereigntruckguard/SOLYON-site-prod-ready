"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language";

export default function SiteFooter() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <footer className="border-t border-white/10 bg-[#07090c]">
      <div className="section-shell grid gap-10 py-14 text-sm text-white/50 md:grid-cols-3">
        <div>
          <p className="font-semibold tracking-[0.08em] text-white/85">
            SOLYON TECHNOLOGIES S.A.S.
          </p>
          <p className="mt-3">Medellín, Colombia</p>
          <p className="mt-1">{t.descriptor}</p>
        </div>

        <nav className="grid grid-cols-2 gap-x-6 gap-y-3" aria-label={t.navigationLabel}>
          <Link href="/technology" className="transition hover:text-white">{t.technology}</Link>
          <Link href="/ecosystem" className="transition hover:text-white">{t.ecosystem}</Link>
          <Link href="/impact" className="transition hover:text-white">{t.impact}</Link>
          <Link href="/about" className="transition hover:text-white">{t.about}</Link>
          <Link href="/contact" className="transition hover:text-white">{t.contact}</Link>
        </nav>

        <div className="md:text-right">
          <a href="mailto:sergio@solyontechnologies.com" className="transition hover:text-white">
            sergio@solyontechnologies.com
          </a>
          <p className="mt-3">© {new Date().getFullYear()} SOLYON Technologies S.A.S.</p>
          <p className="mt-1">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}

const es = {
  descriptor: "Laboratorio de IA aplicada y tecnología profunda",
  navigationLabel: "Navegación del pie de página",
  technology: "Tecnología",
  ecosystem: "Ecosistema",
  impact: "Impacto",
  about: "Nosotros",
  contact: "Contacto",
  rights: "Todos los derechos reservados.",
};

const en = {
  descriptor: "Applied AI and deep technology laboratory",
  navigationLabel: "Footer navigation",
  technology: "Technology",
  ecosystem: "Ecosystem",
  impact: "Impact",
  about: "About",
  contact: "Contact",
  rights: "All rights reserved.",
};
