"use client";

import { useLanguage } from "@/lib/language";

export default function ImpactPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? TEXT_ES : TEXT_EN;

  return (
    <main className="space-y-24 pb-24">
      {/* HERO IMPACTO */}
      <section className="section mt-10 md:mt-16 space-y-10 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl gradient-gold">
            {t.hero.title}
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            {t.hero.subtitle}
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {t.hero.body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-sm text-gray-200">
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl gradient-gold">
              {t.hero.stats[0].value}
            </h3>
            <p className="mt-2 text-gray-300">
              {t.hero.stats[0].desc}
            </p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl gradient-gold">
              {t.hero.stats[1].value}
            </h3>
            <p className="mt-2 text-gray-300">
              {t.hero.stats[1].desc}
            </p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl gradient-gold">
              {t.hero.stats[2].value}
            </h3>
            <p className="mt-2 text-gray-300">
              {t.hero.stats[2].desc}
            </p>
          </div>
        </div>
      </section>

      {/* LÍNEA DE IMPACTO */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            {t.line.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.line.body}
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-200 mt-4">
            {t.line.blocks.map((block) => (
              <div key={block.title}>
                <h3 className="font-display text-base gradient-gold">
                  {block.title}
                </h3>
                <p className="mt-1 text-gray-300">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EJES DE IMPACTO */}
      <section className="section space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            {t.axes.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.axes.body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
          {t.axes.items.map((axis) => (
            <div key={axis.title} className="card p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                {axis.kicker}
              </p>
              <h3 className="font-display text-lg gradient-gold">
                {axis.title}
              </h3>
              <p className="text-gray-300">
                {axis.body}
              </p>
              <p className="text-[0.75rem] text-gray-400 mt-2">
                {axis.impact}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIARIOS */}
      <section className="section space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            {t.beneficiaries.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.beneficiaries.body}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-200">
          {t.beneficiaries.cards.map((card) => (
            <div key={card.title} className="card p-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                {card.kicker}
              </p>
              <h3 className="font-display text-lg gradient-gold">
                {card.title}
              </h3>
              <p className="text-gray-300">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* USO DE DONACIONES */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            {t.donations.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.donations.body}
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-200 mt-2">
            {t.donations.blocks.map((block) => (
              <div key={block.title}>
                <h3 className="font-display text-base gradient-gold">
                  {block.title}
                </h3>
                <p className="mt-1 text-gray-300">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[0.8rem] text-gray-500 mt-3">
            {t.donations.footer}
          </p>
        </div>
      </section>

      {/* RECONOCIMIENTOS & LEGITIMIDAD */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            {t.recognition.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.recognition.body}
          </p>
          <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
            {t.recognition.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-[0.8rem] text-gray-500 mt-2">
            {t.recognition.footer}
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section space-y-8 text-center">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            {t.cta.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.cta.body}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-4 md:gap-6">
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn px-8 py-3 text-sm md:text-base"
          >
            {t.cta.buttons.kit}
          </a>
          <a
            href="/circle"
            className="px-8 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            {t.cta.buttons.circle}
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_DONATE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#111111] border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center justify-center gap-1"
          >
            {t.cta.buttons.donate}
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.65rem] text-black">
              ♥
            </span>
          </a>
          <a
            href="/alliances"
            className="px-8 py-3 rounded-full bg-[#111111] border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors"
          >
            {t.cta.buttons.alliances}
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
    title: "Impacto SOLYON",
    subtitle:
      "SOLYON nace para cambiar la historia de quienes crecieron sin oportunidades reales: camioneros, emprendedores, autodidactas y comunidades que el sistema dejó a un lado. Nuestro impacto combina tecnología soberana, educación y transformación personal.",
    body:
      "Cada línea de código, cada módulo y cada alianza tiene un objetivo: que personas reales puedan acceder a inteligencia de alto nivel sin entregar su dignidad, su soberanía ni su identidad.",
    stats: [
      {
        value: "+1000",
        desc:
          "Personas proyectadas a impactar en la primera fase LATAM del ecosistema.",
      },
      {
        value: "3",
        desc:
          "Sectores clave: transporte, educación y transformación personal.",
      },
      {
        value: "1",
        desc:
          "Ecosistema que integra tecnología, negocio, propósito y filantropía.",
      },
    ],
  },
  line: {
    title: "Línea de impacto",
    body:
      "Desde Medellín hacia el mundo, SOLYON construye una base de DeepTech que permite a personas y proyectos reales acceder a IA de alto nivel sin entregar su soberanía ni su historia.",
    blocks: [
      {
        title: "Medellín · Punto de partida",
        body:
          "Un ecosistema nacido desde la calle, construido por dos personas que decidieron transformar su vida a través del código, la disciplina y el propósito.",
      },
      {
        title: "LATAM · Primera ola",
        body:
          "Camioneros, emprendedores y estudiantes en Colombia y la región acceden a herramientas de seguros, educación, inglés y hábitos con tecnología soberana.",
      },
      {
        title: "Mundo · Proyección",
        body:
          "Un sistema cognitivo que puede replicarse para otras poblaciones históricamente olvidadas: migrantes, trabajadores esenciales, comunidades vulnerables.",
      },
    ],
  },
  axes: {
    title: "Ejes de impacto SOLYON",
    body:
      "Nuestro impacto no es abstracto. Se organiza en tres ejes claros donde la tecnología se vuelve oportunidades reales.",
    items: [
      {
        kicker: "Eje 1 · Transporte & seguros",
        title: "Camioneros latinos en EE.UU.",
        body:
          "TruckBoss, Sovereign TruckGuard y EL-VIA DOT Express ayudan a camioneros a entender su operación, reducir riesgos, navegar la regulación y tomar mejores decisiones financieras.",
        impact:
          "Impacto esperado: reducción de cancelaciones de pólizas, aumento de estabilidad financiera y menor estrés en la familia.",
      },
      {
        kicker: "Eje 2 · Educación & oportunidades",
        title: "Inglés, tecnología y pensamiento crítico",
        body:
          "EL-VIA, Arcanum y futuros programas educativos de SOLYON buscan que quienes nunca tuvieron acceso a educación de élite puedan aprender a usar IA, entender el sistema y generar valor real.",
        impact:
          "Impacto esperado: más personas capaces de usar tecnología avanzada sin depender del idioma, el capital o el lugar donde nacieron.",
      },
      {
        kicker: "Eje 3 · Transformación personal",
        title: "Hábitos, energía y propósito",
        body:
          "Vita y SOLYON Foundation conectan tecnología con procesos reales de cambio: salud, disciplina, manejo de adicciones, propósito y productividad.",
        impact:
          "Impacto esperado: personas que no solo usan tecnología, sino que logran sostener una vida que vale la pena vivir.",
      },
    ],
  },
  beneficiaries: {
    title: "¿A quién estamos impactando?",
    body:
      "El impacto de SOLYON tiene rostro, nombre y contexto. No hablamos de “usuarios”, hablamos de personas.",
    cards: [
      {
        kicker: "Camioneros",
        title: "Propietarios-operadores",
        body:
          "Personas que viven en la carretera, sostienen familias y necesitan más que una póliza: claridad, comunidad, herramientas y respeto.",
      },
      {
        kicker: "Founders & makers",
        title: "Emprendedores LATAM",
        body:
          "Personas que quieren construir tecnología desde la periferia del sistema y necesitan estructura, arquitectura y compañía.",
      },
      {
        kicker: "Estudiantes & autodidactas",
        title: "Talento que el sistema ignoró",
        body:
          "Jóvenes y adultos que no entraron a las universidades “correctas” pero tienen la capacidad de aprender y construir junto a la IA.",
      },
      {
        kicker: "Comunidades vulnerables",
        title: "Proyectos con propósito",
        body:
          "Iniciativas que, con el apoyo de SOLYON Foundation, pueden acceder a herramientas, becas y acompañamiento para amplificar su impacto.",
      },
    ],
  },
  donations: {
    title: "¿En qué se convierte tu apoyo?",
    body:
      "Cada aporte al laboratorio SOLYON no se pierde en burocracia. Se traduce en bloques concretos de impacto.",
    blocks: [
      {
        title: "Desarrollo & tecnología",
        body:
          "Horas de desarrollo en Arcanum, Nexus, TruckBoss, Vita y otras herramientas que llevarán IA soberana a más personas.",
      },
      {
        title: "Becas & acompañamiento",
        body:
          "Becas parciales o completas para personas que necesitan acceso a herramientas, mentoría y procesos de transformación.",
      },
      {
        title: "Infraestructura & operación",
        body:
          "Servidores, herramientas, servicios y recursos mínimos para que SOLYON siga existiendo y creciendo.",
      },
    ],
    footer:
      "Nuestro compromiso es mantener transparencia sobre hacia dónde se dirige cada peso. A medida que SOLYON avance, publicaremos informes de impacto más detallados.",
  },
  recognition: {
    title: "Reconocimientos & legitimidad",
    body:
      "SOLYON no solo existe en la web. Está entrando a los espacios donde se decide el futuro de la ciencia y la tecnología.",
    items: [
      "Registro formal ante Cámara de Comercio y vinculación al ecosistema empresarial.",
      "Procesos activos ante MinCiencias y SIC para reconocimiento, clasificación y protección de la innovación.",
      "Invitación a la ceremonia de los Premios Cinco Días, posicionando a SOLYON como actor emergente en DeepTech.",
      "Contactos en marcha con Apple, Intel, Dell y otros aliados potenciales para infraestructura y co-desarrollo.",
    ],
    footer:
      "Cada reconocimiento institucional aumenta la probabilidad de que el impacto de SOLYON escale mucho más allá de nuestra historia personal.",
  },
  cta: {
    title: "Súmate al impacto SOLYON",
    body:
      "Puedes ser parte de esta historia como camionero, founder, inversionista, aliado, educador o donante. Lo importante es que te muevas desde el propósito.",
    buttons: {
      kit: "Comprar Kit Digital",
      circle: "Unirme al círculo interno",
      donate: "Apoyar el ecosistema",
      alliances: "Explorar alianzas & grants",
    },
    footer:
      "SOLYON es más que un ecosistema tecnológico: es una forma de decirle al mundo que también desde LATAM se pueden construir sistemas soberanos de alto nivel. Gracias por decidir ser parte de este impacto.",
  },
};

const TEXT_EN = {
  hero: {
    title: "SOLYON Impact",
    subtitle:
      "SOLYON is born to change the story of those who grew up without real opportunities: truckers, entrepreneurs, self-taught people and communities the system left aside. Our impact combines sovereign technology, education and personal transformation.",
    body:
      "Every line of code, every module and every alliance has one goal: that real people can access high-level intelligence without giving up their dignity, sovereignty or identity.",
    stats: [
      {
        value: "+1000",
        desc:
          "People projected to be impacted in the ecosystem’s first LATAM phase.",
      },
      {
        value: "3",
        desc:
          "Key sectors: transport, education and personal transformation.",
      },
      {
        value: "1",
        desc:
          "Ecosystem integrating technology, business, purpose and philanthropy.",
      },
    ],
  },
  line: {
    title: "Impact line",
    body:
      "From Medellín to the world, SOLYON builds a DeepTech foundation that allows real people and projects to access high-level AI without giving up their sovereignty or their story.",
    blocks: [
      {
        title: "Medellín · Starting point",
        body:
          "An ecosystem born from the street, built by two people who decided to transform their lives through code, discipline and purpose.",
      },
      {
        title: "LATAM · First wave",
        body:
          "Truckers, entrepreneurs and students in Colombia and the region gain access to tools for insurance, education, English and habits powered by sovereign technology.",
      },
      {
        title: "World · Projection",
        body:
          "A cognitive system that can be replicated for other historically forgotten populations: migrants, essential workers, vulnerable communities.",
      },
    ],
  },
  axes: {
    title: "SOLYON impact pillars",
    body:
      "Our impact is not abstract. It is organized into three clear pillars where technology becomes real opportunity.",
    items: [
      {
        kicker: "Pillar 1 · Transport & insurance",
        title: "Latino truckers in the U.S.",
        body:
          "TruckBoss, Sovereign TruckGuard and EL-VIA DOT Express help truckers understand their operation, reduce risk, navigate regulation and make better financial decisions.",
        impact:
          "Expected impact: fewer policy cancellations, greater financial stability and less stress at home.",
      },
      {
        kicker: "Pillar 2 · Education & opportunity",
        title: "English, technology and critical thinking",
        body:
          "EL-VIA, Arcanum and future SOLYON educational programs aim to give those who never had access to elite education the chance to learn how to use AI, understand the system and generate real value.",
        impact:
          "Expected impact: more people able to use advanced technology without depending on language, capital or where they were born.",
      },
      {
        kicker: "Pillar 3 · Personal transformation",
        title: "Habits, energy and purpose",
        body:
          "Vita and SOLYON Foundation connect technology with real change processes: health, discipline, addiction management, purpose and productivity.",
        impact:
          "Expected impact: people who not only use technology but are able to sustain a life worth living.",
      },
    ],
  },
  beneficiaries: {
    title: "Who are we impacting?",
    body:
      "SOLYON’s impact has faces, names and context. We don’t talk about “users”, we talk about people.",
    cards: [
      {
        kicker: "Truckers",
        title: "Owner-operators",
        body:
          "People who live on the road, support families and need more than a policy: clarity, community, tools and respect.",
      },
      {
        kicker: "Founders & makers",
        title: "LATAM entrepreneurs",
        body:
          "People who want to build technology from the system’s periphery and need structure, architecture and company.",
      },
      {
        kicker: "Students & self-taught",
        title: "Talent the system ignored",
        body:
          "Young people and adults who didn’t enter the “right” universities but have the capacity to learn and build alongside AI.",
      },
      {
        kicker: "Vulnerable communities",
        title: "Purpose-driven projects",
        body:
          "Initiatives that, with SOLYON Foundation’s support, can access tools, scholarships and guidance to amplify their impact.",
      },
    ],
  },
  donations: {
    title: "What does your support become?",
    body:
      "Every contribution to the SOLYON lab does not get lost in bureaucracy. It turns into concrete blocks of impact.",
    blocks: [
      {
        title: "Development & technology",
        body:
          "Development hours for Arcanum, Nexus, TruckBoss, Vita and other tools that will bring sovereign AI to more people.",
      },
      {
        title: "Scholarships & support",
        body:
          "Partial or full scholarships for people who need access to tools, mentoring and transformation processes.",
      },
      {
        title: "Infrastructure & operations",
        body:
          "Servers, tools, services and minimal resources so that SOLYON can continue to exist and grow.",
      },
    ],
    footer:
      "Our commitment is to keep transparency about where every contribution goes. As SOLYON evolves, we will publish more detailed impact reports.",
  },
  recognition: {
    title: "Recognition & legitimacy",
    body:
      "SOLYON does not exist only on the web. It is entering the spaces where the future of science and technology is decided.",
    items: [
      "Formal registration at the Chamber of Commerce and connection to the local business ecosystem.",
      "Active processes with MinCiencias and SIC for recognition, classification and protection of the innovation.",
      "Invitation to the Cinco Días Awards ceremony, positioning SOLYON as an emerging DeepTech actor.",
      "Ongoing contacts with Apple, Intel, Dell and other potential allies for infrastructure and co-development.",
    ],
    footer:
      "Every institutional recognition increases the probability that SOLYON’s impact will scale far beyond our personal story.",
  },
  cta: {
    title: "Join the SOLYON impact",
    body:
      "You can be part of this story as a trucker, founder, investor, ally, educator or donor. What matters is that you move from purpose.",
    buttons: {
      kit: "Buy Digital Kit",
      circle: "Join the Inner Circle",
      donate: "Support the ecosystem",
      alliances: "Explore alliances & grants",
    },
    footer:
      "SOLYON is more than a tech ecosystem: it is a way of telling the world that sovereign, high-level systems can also be built from LATAM. Thank you for choosing to be part of this impact.",
  },
};
