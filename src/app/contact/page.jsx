"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    role: "",
    type: "Alianzas / Empresas",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const to = "alliances@solyontechnologies.com";
    const subject = encodeURIComponent(
      `Contacto SOLYON – ${form.type} – ${form.name || "Sin nombre"}`
    );

    const bodyLines = [
      `Nombre: ${form.name}`,
      `Correo: ${form.email}`,
      `Organización: ${form.org}`,
      `Rol: ${form.role}`,
      `Motivo de contacto: ${form.type}`,
      "",
      "Mensaje:",
      form.message || "(sin mensaje)",
      "",
      "----",
      "Enviado desde el formulario de contacto de solyontechnologies.com"
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="space-y-24 pb-24">
      {/* HERO CONTACTO */}
      <section className="section mt-10 md:mt-16 space-y-8 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <h1 className="font-display text-4xl md:text-5xl gradient-gold">
              Contacto &amp; Alianzas
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Si deseas explorar alianzas, inversión, pilotos o integración
              tecnológica con SOLYON, este es el lugar. Queremos construir con
              personas y organizaciones que vean en la tecnología una forma de
              expandir la percepción del mundo.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Cuéntanos quién eres, qué sueñas construir y cómo crees que
              podríamos trabajar juntos. Leemos cada mensaje con atención.
            </p>

            {/* Atajos rápidos */}
            <div className="mt-4 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Atajos rápidos
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:sergio@solyontechnologies.com?subject=Reuni%C3%B3n%20con%20el%20fundador%20SOLYON"
                  className="btn px-6 py-3 text-sm md:text-base"
                >
                  Agendar reunión con el fundador
                </a>
                <a
                  href="/store"
                  className="px-6 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
                >
                  Ver productos &amp; apoyo inmediato
                </a>
              </div>
            </div>
          </div>

          {/* Info de perfiles */}
          <div className="space-y-4">
            <div className="card p-6 text-sm text-gray-200 space-y-3">
              <h2 className="font-display text-xl gradient-gold">
                ¿Quién nos suele contactar?
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Empresas que quieren pilotos con Arcanum &amp; Nexus.</li>
                <li>Aliados del sector transporte, educación y seguros.</li>
                <li>Inversionistas y fondos de impacto.</li>
                <li>Personas que quieren apoyar el laboratorio SOLYON.</li>
              </ul>
              <p className="text-[0.8rem] text-gray-500 mt-2">
                Si no encajas exactamente en una de estas categorías, igual
                queremos leerte. Lo importante es que haya propósito real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="section space-y-6">
        <div className="card max-w-3xl mx-auto p-6 md:p-8">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold mb-4 text-center md:text-left">
            Envíanos un mensaje
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#111111] border border-[#2A2A2A] px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-[#FFD700]"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#111111] border border-[#2A2A2A] px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-[#FFD700]"
                  placeholder="tu@empresa.com"
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
                  Organización / Proyecto
                </label>
                <input
                  id="org"
                  name="org"
                  type="text"
                  value={form.org}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#111111] border border-[#2A2A2A] px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-[#FFD700]"
                  placeholder="Empresa, proyecto o comunidad"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="role"
                  className="block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  Rol
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#111111] border border-[#2A2A2A] px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-[#FFD700]"
                  placeholder="Founder, CTO, inversor, etc."
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="type"
                className="block text-xs uppercase tracking-[0.2em] text-gray-400"
              >
                Motivo principal de contacto
              </label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full rounded-xl bg-[#111111] border border-[#2A2A2A] px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-[#FFD700]"
              >
                <option>Alianzas / Empresas</option>
                <option>Inversión / Fondos</option>
                <option>Pilotos con Arcanum & Nexus</option>
                <option>Medios / Prensa</option>
                <option>Apoyo al laboratorio / Voluntariado</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.2em] text-gray-400"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl bg-[#111111] border border-[#2A2A2A] px-3 py-2 text-gray-100 text-sm focus:outline-none focus:border-[#FFD700] resize-none"
                placeholder="Cuéntanos brevemente quién eres, qué sueñas construir y cómo crees que SOLYON puede ayudarte."
                required
              />
            </div>

            <div className="pt-3 flex justify-center md:justify-start">
              <button
                type="submit"
                className="btn px-8 py-3 text-sm md:text-base"
              >
                Enviar mensaje
              </button>
            </div>

            <p className="text-[0.7rem] text-gray-500 mt-3 text-center md:text-left">
              Al hacer clic en “Enviar mensaje” se abrirá tu cliente de correo
              con el resumen del formulario para que lo envíes directamente a
              nuestro equipo. Esto nos ayuda a mantener la comunicación simple
              y segura mientras activamos integraciones más avanzadas.
            </p>
          </form>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section space-y-8 text-center">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            También puedes apoyarnos desde ya
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Si quieres impulsarnos mientras coordinamos una reunión, puedes
            comprar el Kit Digital, unirte al Círculo Interno o hacer un aporte
            directo al laboratorio SOLYON.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn px-7 py-3 text-sm md:text-base"
          >
            Comprar Kit Digital
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_CIRCLE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            Unirme al Círculo Interno
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_DONATE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center gap-2"
          >
            Apoyar el laboratorio
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.7rem] text-black">
              ♥
            </span>
          </a>
        </div>

        <p className="text-[0.8rem] text-gray-500 max-w-3xl mx-auto">
          Cada mensaje, cada compra y cada aporte nos ayuda a mantener vivo este
          laboratorio y a llevar IA soberana a quienes el sistema históricamente
          dejó atrás. Gracias por escribirnos.
        </p>
      </section>
    </main>
  );
}
