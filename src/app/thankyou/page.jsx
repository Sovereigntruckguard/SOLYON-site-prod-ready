"use client";

import { useLanguage } from "@/lib/language";

export default function ThankYouPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? TEXT_ES : TEXT_EN;

  return (
    <main className="space-y-24 pb-24">
      {/* HERO */}
      <section className="section mt-20 text-center space-y-8">
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Ícono / símbolo */}
          <div className="mx-auto h-20 w-20 rounded-full flex items-center justify-center 
            bg-gradient-to-b from-[#1b1b1b] to-[#050505] border border-[#ffb6f0] 
            shadow-[0_0_40px_rgba(255,182,240,0.25)]">
            <img
              src="/logo-solyon.svg"
              className="h-10 w-10 object-contain"
              alt="SOLYON"
            />
          </div>

          <h1 className="font-display text-4xl md:text-5xl gradient-gold">
            {t.title}
          </h1>

          <p className="text-gray-200 text-lg leading-relaxed">
            {t.subtitle}
          </p>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t.body}
          </p>
        </div>

        {/* FRASE DESTACADA */}
        <div className="mt-6">
          <p className="text-[#FFD700] text-sm md:text-base font-semibold italic">
            {t.quote}
          </p>
        </div>

        {/* BOTONES */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="/"
            className="btn px-7 py-3 text-sm md:text-base"
          >
            {t.buttons.home}
          </a>

          <a
            href="/store"
            className="px-7 py-3 rounded-full border border-[#FFD700]/60 
            text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            {t.buttons.store}
          </a>

          <a
            href={process.env.NEXT_PUBLIC_WOMPI_CIRCLE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full border border-[#ffb6f0]/60 
            text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors"
          >
            {t.buttons.circle}
          </a>

          <a
            href="/contact"
            className="px-7 py-3 rounded-full border border-[#2A2A2A] 
            text-sm md:text-base text-gray-300 hover:bg-[#111111] transition-colors"
          >
            {t.buttons.contact}
          </a>
        </div>

        {/* FOOTER MESSAGE */}
        <p className="text-[0.8rem] text-gray-500 mt-10 max-w-3xl mx-auto">
          {t.footer}
        </p>
      </section>
    </main>
  );
}

/* =========================
   TEXTOS ES / EN
   ========================= */

const TEXT_ES = {
  title: "Gracias por apoyar SOLYON",
  subtitle:
    "Tu aporte impulsa un ecosistema DeepTech nacido desde LATAM. Gracias a ti, podemos seguir construyendo tecnología soberana, impacto real y oportunidades para quienes el sistema históricamente dejó atrás.",
  body:
    "Cada contribución fortalece el laboratorio, acelera Arcanum, Nexus y las aplicaciones del ecosistema, y nos permite abrir puertas para más personas. Este proyecto existe gracias a personas como tú.",
  quote: "No buscamos cambiar el mundo. Expandimos la forma de verlo.",
  buttons: {
    home: "Volver al inicio",
    store: "Ver productos & acceso premium",
    circle: "Unirme al Círculo Interno",
    contact: "Hablar con el equipo",
  },
  footer:
    "Si realizaste una compra o donación, recibirás un correo con los detalles. Si necesitas soporte, escríbenos desde la sección de contacto.",
};

const TEXT_EN = {
  title: "Thank you for supporting SOLYON",
  subtitle:
    "Your contribution fuels a sovereign DeepTech ecosystem born from LATAM. Thanks to you, we can continue building real impact, opportunity and advanced technology for those the system has historically left behind.",
  body:
    "Every contribution strengthens the lab, accelerates Arcanum, Nexus and the ecosystem apps, and opens doors for more people. This project exists because of people like you.",
  quote: "We don’t try to change the world. We expand how we see it.",
  buttons: {
    home: "Back to home",
    store: "See products & premium access",
    circle: "Join the Inner Circle",
    contact: "Talk to our team",
  },
  footer:
    "If you made a purchase or donation, you'll receive an email with the details. If you need support, reach out through the contact page.",
};
