"use client";

import { useLanguage } from "@/lib/language";

export default function StorePage() {
  const kitUrl = process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#";
  const donateUrl = process.env.NEXT_PUBLIC_WOMPI_DONATE_URL || "#";
  const circleUrl = process.env.NEXT_PUBLIC_WOMPI_CIRCLE_URL || "#";
  const arcanumPreviewUrl =
    process.env.NEXT_PUBLIC_WOMPI_ARCANUM_PREVIEW_URL || "#";

  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="space-y-24 pb-24">
      {/* HERO STORE */}
      <section className="section mt-10 md:mt-16 space-y-10 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-10 items-center">
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

            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href={kitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-6 py-3 text-sm md:text-base shadow-[0_0_25px_rgba(255,215,0,0.35)]"
              >
                {t.hero.ctaKit}
              </a>
              <a
                href="#circle"
                className="px-6 py-3 rounded-2xl border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
              >
                {t.hero.ctaCircle}
              </a>
              <a
                href="#lab"
                className="px-6 py-3 rounded-2xl border border-[#ff9ecf]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors"
              >
                {t.hero.ctaSupport}
              </a>
            </div>
          </div>

          <div className="card p-6 md:p-7 space-y-4 text-left">
            <h2 className="font-display text-xl md:text-2xl gradient-gold">
              {t.hero.whatInsideTitle}
            </h2>
            <ul className="text-gray-300 text-sm md:text-base space-y-2">
              {t.hero.whatInside.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="text-[0.8rem] text-gray-500 mt-2">
              {t.hero.footer}
            </p>
          </div>
        </div>
      </section>

      {/* CATÁLOGO PRINCIPAL: KIT · CÍRCULO · ARCANUM PREVIEW */}
      <section className="section space-y-10" id="productos">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            {t.catalog.title}
          </h2>
          <p className="text-gray-200 text-sm md:text-base">
            {t.catalog.body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* KIT DIGITAL */}
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#141414] to-[#050505] border border-[#FFD700]/40 shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col">
            <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#FFD7001f] to-transparent pointer-events-none" />
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[#FFD700]">
                  {t.kit.badge}
                </p>
                <h3 className="font-display text-2xl gradient-gold">
                  {t.kit.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {t.kit.body}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-gray-100 text-lg font-semibold">
                  {t.kit.price}
                </p>
                <a
                  href={kitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full py-3 text-sm md:text-base shadow-[0_0_30px_rgba(255,215,0,0.45)] text-center"
                >
                  {t.kit.cta}
                </a>
                <p className="text-[0.7rem] md:text-xs text-gray-400 mt-1">
                  {t.kit.note}
                </p>
              </div>
            </div>
          </article>

          {/* CÍRCULO INTERNO */}
          <article
            id="circle"
            className="relative overflow-hidden rounded-3xl bg-[#0c0c0c] border border-[#ffb6f0]/60 shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col"
          >
            <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#ffb6f022] to-transparent pointer-events-none" />
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[#ffb6f0]">
                  {t.circle.badge}
                </p>
                <h3 className="font-display text-2xl gradient-gold">
                  {t.circle.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {t.circle.body}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-gray-100 text-lg font-semibold">
                  {t.circle.price}
                </p>
                <a
                  href={circleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-2xl bg-[#111111] border border-[#ffb6f0]/70 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center justify-center gap-2"
                >
                  {t.circle.cta}
                </a>
                <p className="text-[0.7rem] md:text-xs text-gray-400 mt-1">
                  {t.circle.note}
                </p>
              </div>
            </div>
          </article>

          {/* ARCANUM PREVIEW */}
          <article
            id="arcanum"
            className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#151515] to-[#050505] border border-[#FFD700]/25 shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col"
          >
            <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#FFD7001a] to-transparent pointer-events-none" />
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gray-400">
                  {t.preview.badge}
                </p>
                <h3 className="font-display text-2xl gradient-gold">
                  {t.preview.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {t.preview.body}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-gray-100 text-lg font-semibold">
                  {t.preview.price}
                </p>
                <a
                  href={arcanumPreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-8 py-3 rounded-2xl border border-[#FFD700] text-sm md:text-base mt-2 text-[#FFD700] hover:bg-[#181818] text-center"
                >
                  {t.preview.cta}
                </a>
                <p className="text-[0.7rem] md:text-xs text-gray-400 mt-1">
                  {t.preview.note}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* APOYO AL LABORATORIO */}
      <section className="section space-y-8" id="lab">
        <div className="card p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            {t.lab.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.lab.body}
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-200 mt-4">
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                {t.lab.useTitle}
              </h3>
              <ul className="space-y-1">
                {t.lab.useList.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                {t.lab.whyTitle}
              </h3>
              <p className="text-gray-300 text-sm">{t.lab.whyBody}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 items-center">
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-2xl bg-[#111111] border border-[#ff9ecf]/70 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center gap-2"
            >
              {t.lab.ctaDonate}
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.7rem] text-black shadow-[0_0_18px_rgba(255,158,207,0.9)]">
                ♥
              </span>
            </a>
            <span className="text-[0.8rem] text-gray-500">
              {t.lab.small}
            </span>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="section space-y-6 text-center">
        <h2 className="font-display text-2xl md:text-3xl gradient-gold">
          {t.end.title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
          {t.end.body}
        </p>
        <a
          href="/contact"
          className="btn px-8 py-3 text-sm md:text-base"
        >
          {t.end.cta}
        </a>
        <p className="text-[0.8rem] text-gray-500 max-w-3xl mx-auto">
          {t.end.small}
        </p>
      </section>
    </main>
  );
}

/* ===================== TEXTOS ES / EN ===================== */

const es = {
  hero: {
    title: "Store SOLYON",
    subtitle:
      "Tu punto de entrada oficial al ecosistema SOLYON: desde el Kit Digital hasta el Círculo Interno y el acceso temprano a Arcanum.",
    body:
      "Cada compra y cada aporte sostiene el laboratorio, la infraestructura y el tiempo de desarrollo necesarios para que un ecosistema DeepTech soberano nazca desde LATAM hacia el mundo.",
    ctaKit: "Comprar Kit Digital",
    ctaCircle: "Ver Círculo Interno",
    ctaSupport: "Apoyar el laboratorio",
    whatInsideTitle: "Qué incluye el Kit Digital SOLYON",
    whatInside: [
      "Mapa estratégico del ecosistema SOLYON (Arcanum, Nexus y 10 módulos).",
      "Plantillas operativas para founders, equipos y programas de innovación.",
      "Lenguaje, narrativa y estructura listos para grants, aceleradoras e inversionistas.",
      "Referencias visuales y conceptuales para alinear marca, producto y tecnología.",
    ],
    footer:
      "El Kit Digital está pensado para founders, intraemprendedores, mentores, investigadores, equipos de innovación y personas que quieren entender y aplicar el modelo SOLYON a sus propios proyectos.",
  },
  catalog: {
    title: "Productos disponibles hoy",
    body:
      "Tres formas de entrar al ecosistema: documentación estratégica, comunidad cercana y acceso anticipado a nuestro motor cognitivo.",
  },
  kit: {
    badge: "Entrada Premium",
    title: "SOLYON Kit Digital",
    body:
      "Documentación estratégica, mapas del ecosistema y plantillas operativas para que puedas construir, presentar y escalar tu proyecto usando la lógica DeepTech de SOLYON.",
    price: "$99.000 COP · Pago seguro vía Wompi",
    cta: "Comprar Kit Digital",
    note:
      "En Wompi puedes pagar con tarjeta débito/crédito, Nequi, PSE, efectivo en corresponsales y la opción “Paga con crédito” según tu entidad financiera.",
  },
  circle: {
    badge: "Comunidad cercana",
    title: "Círculo Interno SOLYON",
    body:
      "Espacio reducido de personas que quieren estar más cerca del laboratorio: avances anticipados, sesiones privadas, feedback directo y oportunidades de co-creación.",
    price: "Aportes recurrentes desde Wompi",
    cta: "Unirme al Círculo Interno",
    note:
      "El Círculo Interno está pensado para quienes quieren apoyar de forma constante y recibir acceso preferente a lo nuevo que vaya naciendo.",
  },
  preview: {
    badge: "Acceso anticipado",
    title: "Arcanum Preview",
    body:
      "Acceso anticipado a experimentos, módulos y pruebas de Arcanum y Nexus antes de que se abran públicamente. Ideal para aliados estratégicos y equipos técnicos.",
    price: "Ticket especial vía Wompi",
    cta: "Acceder a Arcanum Preview",
    note:
      "Los detalles específicos del paquete se confirman directamente contigo tras la compra, para adaptarlo a tu perfil y objetivo.",
  },
  lab: {
    title: "Apoya el laboratorio SOLYON",
    body:
      "Estamos construyendo una arquitectura cognitiva soberana desde LATAM para el mundo. Para sostener Arcanum, Nexus, Azoth, TruckBoss, Vita y el resto del ecosistema, necesitamos aliados que crean en esta visión.",
    useTitle: "¿En qué se usan los aportes?",
    useList: [
      "Infraestructura de cómputo y servidores.",
      "Horas de desarrollo, pruebas y documentación.",
      "Becas y acceso a herramientas para talento latino.",
    ],
    whyTitle: "¿Por qué apoyar ahora?",
    whyBody:
      "Porque estamos en la fase donde la arquitectura ya existe, la IP está en curso y cada aporte acelera la llegada de productos reales al mercado.",
    ctaDonate: "Hacer un aporte al laboratorio",
    small:
      "Puedes hacer aportes únicos o recurrentes. Cada transacción tiene trazabilidad y puede asociarse a objetivos específicos si lo deseas.",
  },
  end: {
    title: "Más que una compra, una alianza",
    body:
      "Al adquirir el Kit Digital, unirte al Círculo Interno o apoyar el laboratorio, no solo accedes a contenido: te conviertes en parte de la primera ola de personas que demuestran que desde la calle de LATAM también se construye DeepTech de élite.",
    cta: "Hablar con el equipo SOLYON",
    small:
      "Nuestro objetivo inmediato es sostener el laboratorio y demostrar que desde la calle de LATAM también se pueden construir sistemas que compiten con los mejores del mundo. Gracias por decidir ser parte de esta historia.",
  },
};

const en = {
  hero: {
    title: "SOLYON Store",
    subtitle:
      "Your official entry point into the SOLYON ecosystem: from the Digital Kit to the Inner Circle and early access to Arcanum.",
    body:
      "Every purchase and every contribution sustains the lab, infrastructure and development time needed for a sovereign DeepTech ecosystem born from LATAM to reach the world.",
    ctaKit: "Buy Digital Kit",
    ctaCircle: "See Inner Circle",
    ctaSupport: "Support the lab",
    whatInsideTitle: "What’s inside the SOLYON Digital Kit",
    whatInside: [
      "Strategic map of the SOLYON ecosystem (Arcanum, Nexus and 10 modules).",
      "Operational templates for founders, teams and innovation programs.",
      "Language, narrative and structure ready for grants, accelerators and investors.",
      "Visual and conceptual references to align brand, product and technology.",
    ],
    footer:
      "The Digital Kit is designed for founders, intrapreneurs, mentors, researchers, innovation teams and people who want to understand and apply the SOLYON model to their own projects.",
  },
  catalog: {
    title: "Products available today",
    body:
      "Three ways to enter the ecosystem: strategic documentation, close community and early access to our cognitive engine.",
  },
  kit: {
    badge: "Premium entry",
    title: "SOLYON Digital Kit",
    body:
      "Strategic documentation, ecosystem maps and operational templates so you can build, present and scale your project using SOLYON’s DeepTech logic.",
    price: "$99,000 COP · Secure payment via Wompi",
    cta: "Buy Digital Kit",
    note:
      "In Wompi you can pay with debit/credit card, Nequi, PSE, cash in partner locations and the “Pay with credit” option depending on your financial provider.",
  },
  circle: {
    badge: "Close community",
    title: "SOLYON Inner Circle",
    body:
      "A small group for people who want to stay closer to the lab: early updates, private sessions, direct feedback and co-creation opportunities.",
    price: "Recurring contributions via Wompi",
    cta: "Join the Inner Circle",
    note:
      "The Inner Circle is for those who want to support consistently and receive preferred access to what we launch over time.",
  },
  preview: {
    badge: "Early access",
    title: "Arcanum Preview",
    body:
      "Early access to experiments, modules and tests of Arcanum and Nexus before public release. Ideal for strategic allies and technical teams.",
    price: "Special ticket via Wompi",
    cta: "Access Arcanum Preview",
    note:
      "Specific package details are aligned directly with you after purchase, to fit your profile and goals.",
  },
  lab: {
    title: "Support the SOLYON Lab",
    body:
      "We are building a sovereign cognitive architecture from LATAM to the world. To sustain Arcanum, Nexus, Azoth, TruckBoss, Vita and the rest of the ecosystem, we need allies who believe in this vision.",
    useTitle: "How are contributions used?",
    useList: [
      "Compute and server infrastructure.",
      "Development, testing and documentation hours.",
      "Scholarships and tool access for Latin American talent.",
    ],
    whyTitle: "Why support now?",
    whyBody:
      "Because we are in the phase where the architecture already exists, IP is in motion and every contribution accelerates real products reaching the market.",
    ctaDonate: "Make a contribution to the lab",
    small:
      "You can make one-time or recurring contributions. Every transaction has traceability and can be linked to specific goals if you wish.",
  },
  end: {
    title: "More than a purchase, an alliance",
    body:
      "By getting the Digital Kit, joining the Inner Circle or supporting the lab, you don’t just access content: you become part of the first wave proving that elite DeepTech can also be built from the streets of LATAM.",
    cta: "Talk with the SOLYON team",
    small:
      "Our immediate goal is to sustain the lab and prove that from LATAM’s streets we can build systems that compete with the best in the world. Thank you for choosing to be part of this story.",
  },
};
