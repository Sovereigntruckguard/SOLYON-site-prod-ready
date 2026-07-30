"use client";

import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import { useLanguage } from "@/lib/language";

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
    <footer className="border-t border-white/10 bg-[#07090c]">
      <div className="section-shell grid gap-10 py-14 text-sm text-white/50 md:grid-cols-4">
        <div>
          <p className="font-semibold tracking-[0.08em] text-white/85">SOLYON TECHNOLOGIES S.A.S.</p>
          <p className="mt-3">Medellín, Colombia</p>
          <p className="mt-1">{t.descriptor}</p>
          <GooglePlayLink label={t.download} compact className="mt-5" />
        </div>

        <nav className="grid gap-y-3" aria-label={t.navigationLabel}>
          <Link href="/technology" className="transition hover:text-white">{t.technology}</Link>
          <Link href="/ecosystem" className="transition hover:text-white">{t.ecosystem}</Link>
          <Link href="/solyon-move" className="transition hover:text-white">SOLYON Move</Link>
          <Link href="/impact" className="transition hover:text-white">{t.impact}</Link>
          <Link href="/about" className="transition hover:text-white">{t.about}</Link>
          <Link href="/contact" className="transition hover:text-white">{t.contact}</Link>
        </nav>

        <div>
          <p className="font-medium text-white/75">{t.social}</p>
          <div className="mt-3 grid gap-3">
            {socials.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">{label}</a>
            ))}
          </div>
        </div>

        <div className="md:text-right">
          <a href="mailto:sergio@solyontechnologies.com" className="transition hover:text-white">sergio@solyontechnologies.com</a>
          <p className="mt-3">© {new Date().getFullYear()} SOLYON Technologies S.A.S.</p>
          <p className="mt-1">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}

const es = {
  descriptor: "Laboratorio DeepTech y de inteligencia artificial aplicada",
  navigationLabel: "Navegación del pie de página",
  technology: "Tecnología",
  ecosystem: "Ecosistema",
  impact: "Impacto",
  about: "Nosotros",
  contact: "Contacto",
  social: "Canales oficiales",
  download: "SOLYON Move gratis en Google Play",
  rights: "Todos los derechos reservados.",
};

const en = {
  descriptor: "DeepTech and applied artificial intelligence laboratory",
  navigationLabel: "Footer navigation",
  technology: "Technology",
  ecosystem: "Ecosystem",
  impact: "Impact",
  about: "About",
  contact: "Contact",
  social: "Official channels",
  download: "Get SOLYON Move free on Google Play",
  rights: "All rights reserved.",
};
