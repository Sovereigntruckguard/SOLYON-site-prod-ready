"use client";

import { useLanguage } from "@/lib/language";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? TEXT_ES : TEXT_EN;

  return (
    <main className="space-y-24 pb-24">
      {/* HERO NOSOTROS */}
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

      {/* ORIGEN & LÍNEA DE VIDA */}
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

      {/* IDENTIDAD & PRINCIPIOS */}
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

      {/* QUIÉNES SOMOS – EQUIPO NÚCLEO */}
      <section className="section space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            {t.team.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.team.body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
          {t.team.cards.map((card) => (
            <div key={card.title} className="card p-6 space-y-3 text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                {card.kicker}
              </p>
              <h3 className="font-display text-lg gradient-gold">
                {card.title}
              </h3>
              <p className="text-gray-300">
                {card.body}
              </p>
              {card.note && (
                <p className="text-[0.75rem] text-gray-400 mt-2">
                  {card.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            {t.work.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {t.work.body}
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-200 mt-2">
            {t.work.blocks.map((block) => (
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
            {t.work.footer}
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
    title: "Quiénes somos",
    subtitle:
      "SOLYON es una casa DeepTech nacida desde Medellín, construida por dos personas que decidieron transformar una historia de calle, violencia y escasez en una arquitectura de tecnología soberana, propósito y lujo consciente.",
    body:
      "No somos un corporativo ni una empresa anónima. Somos Sergio y Elizabeth, una familia que vendió todo para construir un ecosistema que demuestre que desde LATAM también se puede crear tecnología de élite, sin renunciar a la identidad ni a la humanidad.",
    stats: [
      {
        value: "2",
        desc: "Personas fundadoras que sostienen el núcleo del ecosistema SOLYON.",
      },
      {
        value: "10",
        desc: "Proyectos DeepTech interconectados dentro del universo SOLYON.",
      },
      {
        value: "1",
        desc: "Visión compartida: soberanía tecnológica con impacto real en vidas humanas.",
      },
    ],
  },
  line: {
    title: "De dónde venimos",
    body:
      "La historia de SOLYON no nace en Silicon Valley, sino en barrios donde la violencia, la pobreza y la falta de oportunidades eran la norma. Esa historia es la base ética y emocional de todo lo que construimos.",
    blocks: [
      {
        title: "Medellín · Raíz",
        body:
          "Sergio crece entre barras, peleas, cárceles cercanas y una realidad donde el futuro no estaba garantizado. Elizabeth sostiene la vida desde la disciplina, el coraje y una fe que no se rompe. Desde ahí, deciden apostar por el código y la tecnología como vía de libertad.",
      },
      {
        title: "Camino · Decisión radical",
        body:
          "Venden carros, celulares, pertenencias y comodidad básica para dedicarlo todo a construir un ecosistema tecnológico que nazca desde la calle hacia el DeepTech. No hay plan B, solo compromiso con la visión.",
      },
      {
        title: "SOLYON · Presente",
        body:
          "Hoy, esa apuesta se convierte en Arcanum, Nexus, TruckBoss, Azoth, EL-VIA, Vita y la SOLYON Foundation: un universo que combina negocio, impacto y transformación personal.",
      },
    ],
  },
  axes: {
    title: "Identidad SOLYON",
    body:
      "Nuestra forma de trabajar y de existir como ecosistema se apoya en tres ejes centrales. Sin ellos, SOLYON no tendría sentido.",
    items: [
      {
        kicker: "Eje 1 · Soberanía",
        title: "Tecnología que no se arrodilla",
        body:
          "Construimos arquitecturas para que personas, empresas y comunidades no dependan ciegamente de infraestructuras externas que no entienden ni controlan.",
        impact:
          "Queremos que la IA sea una herramienta en manos de quienes nunca tuvieron la oportunidad de diseñar el sistema.",
      },
      {
        kicker: "Eje 2 · Lujo consciente",
        title: "Estética, profundidad y respeto",
        body:
          "Entendemos el lujo como el derecho a tener herramientas hermosas, funcionales y respetuosas, incluso si vienes de la pobreza.",
        impact:
          "El diseño de SOLYON busca recordarle a cada persona que su historia merece una experiencia de alto nivel.",
      },
      {
        kicker: "Eje 3 · Transformación real",
        title: "Sin teatro, sin humo",
        body:
          "No nos interesa el marketing vacío. Nos importa que camioneros, founders y comunidades vean resultados concretos en su día a día.",
        impact:
          "Si la tecnología no cambia la calidad de vida, no está cumpliendo su propósito.",
      },
    ],
  },
  team: {
    title: "El equipo detrás del ecosistema",
    body:
      "SOLYON comienza con dos personas, pero está diseñado para convertirse en un equipo expandido de talento, aliados y comunidades que co-crean desde la misma base ética.",
    cards: [
      {
        kicker: "Co-fundador · Visión & Arquitectura",
        title: "Sergio Andrés Murillo Estrada",
        body:
          "Ex barrista, peleador, autodidacta y programador en formación. Lleva su historia de calle y supervivencia al diseño de arquitecturas profundas, modelos de negocio y experiencias de lujo para quienes han sido ignorados por el sistema.",
        note:
          "Su rol: visión estratégica, arquitectura DeepTech, narrativa, diseño de producto y liderazgo del ecosistema.",
      },
      {
        kicker: "Co-fundadora · Operación & Cuidado",
        title: "Elizabeth Tamayo Londoño",
        body:
          "Columna vertebral emocional y operativa de SOLYON. Sostiene procesos, personas y decisiones difíciles. Representa la fuerza silenciosa que hace posible que el ecosistema exista en medio del caos.",
        note:
          "Su rol: operación diaria, soporte al laboratorio, construcción de EL-VIA y tutela del factor humano en cada decisión.",
      },
      {
        kicker: "Ecosistema & aliados",
        title: "Equipo extendido SOLYON",
        body:
          "Proveedores, amigos, testers, camioneros, emprendedores y futuros colaboradores que se han ido sumando a la visión. SOLYON está diseñado para que más personas puedan integrarse al núcleo y escalar el impacto.",
        note:
          "Nuestra meta es que, con el tiempo, SOLYON se convierta en un lugar donde el talento de alto nivel pueda crecer sin arrepentirse de dónde viene.",
      },
    ],
  },
  work: {
    title: "Cómo trabajamos",
    body:
      "Nuestro estilo de trabajo mezcla la disciplina de un laboratorio con la urgencia de quienes saben lo que es no tener nada. Cada decisión técnica y de negocio pasa por un filtro de congruencia.",
    blocks: [
      {
        title: "Profundidad antes que ruido",
        body:
          "Preferimos avanzar un poco más lento pero con bases sólidas, documentación clara y decisiones conscientes, en lugar de prometer lo que no podemos cumplir.",
      },
      {
        title: "Transparencia radical",
        body:
          "Hablamos con honestidad sobre nuestras limitaciones y nuestros avances. No maquillamos la realidad: la compartimos para sumar aliados que entiendan el proceso.",
      },
      {
        title: "Trabajo con propósito",
        body:
          "Cada línea de código, diseño, documento y alianza se contrasta con la pregunta: ¿acerca esto a SOLYON a su propósito central o lo aleja?",
      },
    ],
    footer:
      "SOLYON no quiere ser un unicornio vacío. Quiere ser una referencia de cómo se construye tecnología soberana con conciencia, orden y respeto.",
  },
  recognition: {
    title: "Reconocimientos & legitimidad",
    body:
      "Aunque nacimos desde la periferia, ya empezamos a entrar en los circuitos donde se valida la ciencia, la tecnología y la innovación.",
    items: [
      "Registro formal ante Cámara de Comercio y vinculación al ecosistema empresarial de Medellín.",
      "Procesos activos ante MinCiencias y SIC para reconocimiento, clasificación y protección de nuestra innovación.",
      "Invitación a la ceremonia de los Premios Cinco Días, validando a SOLYON como actor emergente en el panorama DeepTech.",
      "Contacto y acercamientos con grandes jugadores tecnológicos para infraestructura y posibles alianzas.",
    ],
    footer:
      "No buscamos reconocimiento por ego, sino porque cada sello de legitimidad abre puertas para que el impacto de SOLYON llegue más lejos.",
  },
  cta: {
    title: "Construyamos esta historia juntos",
    body:
      "Si lees esto y algo en ti siente que esta historia también podría ser la tuya, es probable que formes parte de la tribu SOLYON: gente que viene de abajo, pero apunta hacia lo más alto.",
    buttons: {
      kit: "Comprar Kit Digital",
      circle: "Unirme al círculo interno",
      donate: "Apoyar el ecosistema",
      alliances: "Explorar alianzas & grants",
    },
    footer:
      "SOLYON no es un espectáculo desde lejos. Es una invitación a co-crear una nueva narrativa de tecnología soberana nacida desde LATAM.",
  },
};

const TEXT_EN = {
  hero: {
    title: "Who we are",
    subtitle:
      "SOLYON is a DeepTech house born in Medellín, built by two people who decided to transform a story of street, violence and scarcity into an architecture of sovereign technology, purpose and conscious luxury.",
    body:
      "We are not a corporate, nor an anonymous company. We are Sergio and Elizabeth, a family that sold everything to build an ecosystem proving that elite technology can also be created from LATAM, without renouncing identity or humanity.",
    stats: [
      {
        value: "2",
        desc: "Founders holding the core of the SOLYON ecosystem.",
      },
      {
        value: "10",
        desc: "DeepTech projects interconnected inside the SOLYON universe.",
      },
      {
        value: "1",
        desc: "Shared vision: technological sovereignty with real impact on human lives.",
      },
    ],
  },
  line: {
    title: "Where we come from",
    body:
      "SOLYON’s story does not start in Silicon Valley, but in neighborhoods where violence, poverty and lack of opportunity were the norm. That story is the ethical and emotional base of everything we build.",
    blocks: [
      {
        title: "Medellín · Roots",
        body:
          "Sergio grows up among barras, fights, nearby prisons and a reality where the future was not guaranteed. Elizabeth sustains life with discipline, courage and unbreakable faith. From there, they decide to bet on code and technology as a path to freedom.",
      },
      {
        title: "Path · Radical decision",
        body:
          "They sell cars, phones, belongings and basic comfort to dedicate everything to building a tech ecosystem born from the street into DeepTech. No plan B, only commitment to the vision.",
      },
      {
        title: "SOLYON · Present",
        body:
          "Today, that bet becomes Arcanum, Nexus, TruckBoss, Azoth, EL-VIA, Vita and the SOLYON Foundation: a universe that combines business, impact and personal transformation.",
      },
    ],
  },
  axes: {
    title: "SOLYON identity",
    body:
      "Our way of working and existing as an ecosystem rests on three central pillars. Without them, SOLYON would not make sense.",
    items: [
      {
        kicker: "Pillar 1 · Sovereignty",
        title: "Technology that does not bow",
        body:
          "We build architectures so that people, companies and communities do not depend blindly on external infrastructures they don’t understand or control.",
        impact:
          "We want AI to be a tool in the hands of those who never had the chance to design the system.",
      },
      {
        kicker: "Pillar 2 · Conscious luxury",
        title: "Aesthetics, depth and respect",
        body:
          "We understand luxury as the right to have beautiful, functional and respectful tools, even if you come from poverty.",
        impact:
          "SOLYON’s design aims to remind each person that their story deserves a high-end experience.",
      },
      {
        kicker: "Pillar 3 · Real transformation",
        title: "No theater, no smoke",
        body:
          "We are not interested in empty marketing. We care that truckers, founders and communities see concrete results in their daily lives.",
        impact:
          "If technology does not change quality of life, it is not fulfilling its purpose.",
      },
    ],
  },
  team: {
    title: "The team behind the ecosystem",
    body:
      "SOLYON begins with two people but is designed to become an expanded team of talent, allies and communities who co-create from the same ethical base.",
    cards: [
      {
        kicker: "Co-founder · Vision & Architecture",
        title: "Sergio Andrés Murillo Estrada",
        body:
          "Former barra leader, fighter, self-taught and programmer in training. He brings his street and survival story into the design of deep architectures, business models and luxury experiences for those the system usually ignores.",
        note:
          "His role: strategic vision, DeepTech architecture, narrative, product design and ecosystem leadership.",
      },
      {
        kicker: "Co-founder · Operations & Care",
        title: "Elizabeth Tamayo Londoño",
        body:
          "Emotional and operational backbone of SOLYON. She holds processes, people and hard decisions. She represents the silent force that makes the ecosystem possible in the middle of chaos.",
        note:
          "Her role: daily operations, lab support, building EL-VIA and guarding the human factor in every decision.",
      },
      {
        kicker: "Ecosystem & allies",
        title: "SOLYON extended team",
        body:
          "Providers, friends, testers, truckers, entrepreneurs and future collaborators who have joined the vision. SOLYON is designed so more people can integrate into the core and scale the impact.",
        note:
          "Our goal is that, over time, SOLYON becomes a place where high-level talent can grow without regretting where they come from.",
      },
    ],
  },
  work: {
    title: "How we work",
    body:
      "Our working style mixes the discipline of a lab with the urgency of those who know what it means to have nothing. Every technical and business decision passes through a congruence filter.",
    blocks: [
      {
        title: "Depth over noise",
        body:
          "We prefer to move a bit slower but with solid foundations, clear documentation and conscious decisions, instead of promising what we cannot deliver.",
      },
      {
        title: "Radical transparency",
        body:
          "We speak honestly about our limitations and our progress. We don’t sugarcoat reality: we share it to attract allies who understand the process.",
      },
      {
        title: "Purpose-driven work",
        body:
          "Every line of code, design, document and alliance is contrasted with one question: does this bring SOLYON closer to its core purpose or farther away from it?",
      },
    ],
    footer:
      "SOLYON does not aim to be an empty unicorn. It aims to be a reference for how sovereign technology is built with awareness, order and respect.",
  },
  recognition: {
    title: "Recognition & legitimacy",
    body:
      "Even though we were born from the periphery, we are already entering the circuits where science, technology and innovation are validated.",
    items: [
      "Formal registration at the Chamber of Commerce and connection to Medellín’s business ecosystem.",
      "Active processes with MinCiencias and SIC for recognition, classification and protection of our innovation.",
      "Invitation to the Cinco Días Awards ceremony, validating SOLYON as an emerging player in the DeepTech landscape.",
      "Contact and approaches with major tech players for infrastructure and potential alliances.",
    ],
    footer:
      "We do not seek recognition for ego, but because each legitimacy seal opens doors for SOLYON’s impact to reach further.",
  },
  cta: {
    title: "Let’s build this story together",
    body:
      "If you are reading this and something in you feels this story could also be yours, you probably belong to the SOLYON tribe: people who come from below but aim for the highest.",
    buttons: {
      kit: "Buy Digital Kit",
      circle: "Join the Inner Circle",
      donate: "Support the ecosystem",
      alliances: "Explore alliances & grants",
    },
    footer:
      "SOLYON is not a show from afar. It is an invitation to co-create a new narrative of sovereign technology born from LATAM.",
  },
};
