"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language";

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? TEXT_ES : TEXT_EN;

  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    role: "",
    type: lang === "es" ? "Alianzas / Empresas" : "Partnerships / Companies",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  const setValue = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const to = "contacto@solyontechnologies.com";

    const subject =
      lang === "es"
        ? `Contacto SOLYON – ${form.type}`
        : `Contact – SOLYON – ${form.type}`;

    const bodyLines =
      lang === "es"
        ? [
            "Hola equipo SOLYON,",
            "",
            `Nombre: ${form.name}`,
            `Correo: ${form.email}`,
            `Organización / Proyecto: ${form.org}`,
            `Rol: ${form.role}`,
            `Motivo de contacto: ${form.type}`,
            "",
            "Mensaje:",
            form.message,
            "",
            "Gracias.",
            "",
          ]
        : [
            "Hi SOLYON team,",
            "",
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Organization / Project: ${form.org}`,
            `Role: ${form.role}`,
            `Main reason for contact: ${form.type}`,
            "",
            "Message:",
            form.message,
            "",
            "Thank you.",
            "",
          ];

    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <main className="space-y-24 pb-24">
      {/* HERO CONTACTO */}
      <section className="section mt-10 md:mt-16 space-y-8 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <h1 className="font-display text-4xl md:text-5xl gradient-gold">
              {t.hero.title}
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              {t.hero.subtitle}
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {t.hero.body}
            </p>

            {/* Atajos rápidos */}
            <div className="mt-4 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                {t.hero.shortcutsLabel}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:sergio@solyontechnologies.com?subject=Reuni%C3%B3n%20con%20el%20fundador%20SOLYON"
                  className="btn px-6 py-3 text-sm md:text-base"
                >
                  {t.hero.quickFounder}
                </a>
                <a
                  href="/store"
                  className="px-6 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg[#181818] hover:border-[#FFD700] transition-colors"
                >
                  {t.hero.quickStore}
                </a>
              </div>
            </div>
          </div>

          {/* Info de perfiles */}
          <div className="space-y-4">
            <div className="card p-6 text-sm text-gray-200 space-y-3">
              <h2 className="font-display text-xl gradient-gold">
                {t.profiles.title}
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {t.profiles.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-[0.8rem] text-gray-500 mt-2">
                {t.profiles.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="section space-y-6">
        <div className=" card max-w-3xl mx-auto p-6 md:p-8">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold mb-4 text-center md:text-left">
            {t.form.title}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  {t.form.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#111111] border border-[#2A2A2A] px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-[#FFD700]"
                  placeholder={t.form.namePlaceholder}
                  required
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  {t.form.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#111111] border border-[#2A2A2A] px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-[#FFD700]"
                  placeholder={t.form.emailPlaceholder}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="org"
                  className="block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  {t.form.orgLabel}
                </label>
                <input
                  id="org"
                  name="org"
                  type="text"
                  value={form.org}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#111111] border border-[#2A2A2A] px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-[#FFD700]"
                  placeholder={t.form.orgPlaceholder}
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="role"
                  className="block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  {t.form.roleLabel}
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#111111] border border-[#2A2A2A] px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-[#FFD700]"
                  placeholder={t.form.rolePlaceholder}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="type"
                className="block text-xs uppercase tracking-[0.2em] text-gray-400"
              >
                {t.form.typeLabel}
              </label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full rounded-xl bg-[#111111] border border-[#2A2A2A] px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-[#FFD700]"
              >
                {t.form.typeOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.2em] text-gray-400"
              >
                {t.form.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl bg-[#111111] border border-[#2A2A2A] px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-[#FFD700] resize-none"
                placeholder={t.form.messagePlaceholder}
                required
              />
            </div>

            <div className="pt-3 flex justify-center md:justify-start">
              <button
                type="submit"
                className="btn px-8 py-3 text-sm md:text-base"
              >
                {t.form.submitLabel}
              </button>
            </div>

            <p className="text-[0.7rem] text-gray-500 mt-3 text-center md:text-left">
              {t.form.helper}
            </p>
          </form>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section space-y-8 text-center">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            {t.cta.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.cta.body}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn px-7 py-3 text-sm md:text-base"
          >
            {t.cta.kit}
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_CIRCLE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            {t.cta.circle}
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_DONATE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center gap-2"
          >
            {t.cta.donate}
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.7rem] text-black">
              ♥
            </span>
          </a>
        </div>

        <p className="text-[0.8rem] text-gray-500 max-w-3xl mx-auto">
          {t.cta.footer}
        </p>
      </section>
    </main>
  );
}

/* =========================
   TEXTOS ES / EN
   ========================= */

const TEXT_ES = {
  hero: {
    title: "Contacto & Alianzas",
    subtitle:
      "Si deseas explorar alianzas, inversión, pilotos o integración tecnológica con SOLYON, este es el lugar. Queremos construir con personas y organizaciones que vean en la tecnología una forma de expandir la percepción del mundo.",
    body:
      "Cuéntanos quién eres, qué sueñas construir y cómo crees que podríamos trabajar juntos. Leemos cada mensaje con atención.",
    shortcutsLabel: "Atajos rápidos",
    quickFounder: "Agendar reunión con el fundador",
    quickStore: "Ver productos & apoyo inmediato",
  },
  profiles: {
    title: "¿Quién nos suele contactar?",
    items: [
      "Empresas que quieren pilotos con Arcanum & Nexus.",
      "Aliados del sector transporte, educación y seguros.",
      "Inversionistas y fondos de impacto.",
      "Personas que quieren apoyar el laboratorio SOLYON.",
    ],
    note:
      "Si no encajas exactamente en una de estas categorías, igual queremos leerte. Lo importante es que haya propósito real.",
  },
  form: {
    title: "Envíanos un mensaje",
    nameLabel: "Nombre completo",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tu@empresa.com",
    orgLabel: "Organización / Proyecto",
    orgPlaceholder: "Empresa, proyecto o comunidad",
    roleLabel: "Rol",
    rolePlaceholder: "Founder, CTO, inversor, etc.",
    typeLabel: "Motivo principal de contacto",
    typeOptions: [
      "Alianzas / Empresas",
      "Inversión / Fondos",
      "Pilotos con Arcanum & Nexus",
      "Medios / Prensa",
      "Apoyo al laboratorio / Voluntariado",
      "Otro",
    ],
    messageLabel: "Mensaje",
    messagePlaceholder:
      "Cuéntanos brevemente quién eres, qué sueñas construir y cómo crees que SOLYON puede ayudarte.",
    submitLabel: "Enviar mensaje",
    helper:
      "Al hacer clic en “Enviar mensaje” se abrirá tu cliente de correo con el resumen del formulario para que lo envíes directamente a nuestro equipo. Esto nos ayuda a mantener la comunicación simple y segura mientras activamos integraciones más avanzadas.",
  },
  cta: {
    title: "También puedes apoyarnos desde ya",
    body:
      "Si quieres impulsarnos mientras coordinamos una reunión, puedes comprar el Kit Digital, unirte al Círculo Interno o hacer un aporte directo al laboratorio SOLYON.",
    kit: "Comprar Kit Digital",
    circle: "Unirme al Círculo Interno",
    donate: "Apoyar el laboratorio",
    footer:
      "Cada mensaje, cada compra y cada aporte nos ayuda a mantener vivo este laboratorio y a llevar IA soberana a quienes el sistema históricamente dejó atrás. Gracias por escribirnos.",
  },
};

const TEXT_EN = {
  hero: {
    title: "Contact & Partnerships",
    subtitle:
      "If you want to explore partnerships, investment, pilots or tech integration with SOLYON, this is the right place. We want to build with people and organizations that see technology as a way to expand how we see the world.",
    body:
      "Tell us who you are, what you dream of building and how you believe we can work together. We read every message with care.",
    shortcutsLabel: "Quick links",
    quickFounder: "Schedule a call with the founder",
    quickStore: "See products & support now",
  },
  profiles: {
    title: "Who usually reaches out?",
    items: [
      "Companies looking for pilots with Arcanum & Nexus.",
      "Partners in transport, education and insurance.",
      "Investors and impact funds.",
      "People who want to support the SOLYON lab.",
    ],
    note:
      "If you don’t fit exactly into one of these categories, we still want to hear from you. What matters most is real purpose.",
  },
  form: {
    title: "Send us a message",
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    orgLabel: "Organization / Project",
    orgPlaceholder: "Company, project or community",
    roleLabel: "Role",
    rolePlaceholder: "Founder, CTO, investor, etc.",
    typeLabel: "Main reason for contact",
    typeOptions: [
      "Partnerships / Companies",
      "Investment / Funds",
      "Pilots with Arcanum & Nexus",
      "Media / Press",
      "Lab support / Volunteering",
      "Other",
    ],
    messageLabel: "Message",
    messagePlaceholder:
      "Tell us briefly who you are, what you want to build and how you think SOLYON can help.",
    submitLabel: "Send message",
    helper:
      'When you click "Send message", your email client will open with a summary of your message so you can send it directly to our team. This keeps communication simple and secure while we activate more advanced integrations.',
  },
  cta: {
    title: "You can support us right now",
    body:
      "If you want to support us while we coordinate a meeting, you can buy the Digital Kit, join the Inner Circle or make a direct contribution to the SOLYON lab.",
    kit: "Buy Digital Kit",
    circle: "Join the Inner Circle",
    donate: "Support the lab",
    footer:
      "Every message, every purchase and every contribution helps us keep this lab alive and bring sovereign AI to those the system has historically left behind. Thank you for reaching out.",
  },
};
