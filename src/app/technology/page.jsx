"use client";

const APPS = [
  "Azoth CRM",
  "TruckBoss",
  "Sovereign TruckGuard LLC",
  "EL-VIA DOT Express",
  "Vita",
  "SOLYON Foundation"
];

function FractalBrain() {
  return (
    <div className="relative h-40 w-40 md:h-56 md:w-56 mx-auto md:mx-0">
      {/* halo */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.16),transparent_60%)] blur-sm" />
      {/* anillos */}
      <div className="absolute inset-4 rounded-full border border-[#ffb6f0]/40" />
      <div className="absolute inset-10 rounded-full border border-[#FFD700]/70" />
      <div className="absolute inset-16 rounded-full border border-[#ffb6f0]/30" />
      {/* “neuronas” */}
      <div className="absolute inset-0 flex items-center justify-center animate-[spin_18s_linear_infinite]">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const r = 32;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          return (
            <div
              key={i}
              className="absolute h-3 w-3 rounded-full bg-[#FFD700]"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                boxShadow: "0 0 18px rgba(255,215,0,0.8)"
              }}
            />
          );
        })}
        <div className="h-5 w-5 rounded-full bg-[#ffb6f0] shadow-[0_0_22px_rgba(255,182,240,0.9)]" />
      </div>
    </div>
  );
}

function ArcanumNexusMap() {
  return (
    <div className="card p-6 md:p-8 space-y-6">
      <div className="text-center md:text-left space-y-2">
        <h2 className="font-display text-2xl md:text-3xl gradient-gold">
          Mapa cognitivo: Arcanum → Nexus → Apps
        </h2>
        <p className="text-gray-300 text-sm md:text-base">
          Toda la tecnología de SOLYON se organiza en un flujo simple: el{" "}
          <span className="font-semibold text-[#FFD700]">motor cognitivo</span>{" "}
          (Arcanum) entiende el contexto,{" "}
          <span className="font-semibold text-[#FFD700]">Nexus</span> orquesta
          agentes y tareas, y las{" "}
          <span className="font-semibold text-[#FFD700]">apps</span> llevan ese
          poder a la vida real.
        </p>
      </div>

      <div className="grid md:grid-cols-[1.2fr_1.4fr_1.8fr] gap-6 items-stretch text-sm text-gray-200">
        {/* Arcanum */}
        <div className="rounded-2xl bg-[#0f0f0f] border border-[#2A2A2A] p-4 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Capa 1
            </p>
            <h3 className="font-display text-lg gradient-gold">
              Arcanum · Motor cognitivo
            </h3>
            <p className="mt-2 text-gray-300 text-xs md:text-sm">
              Memoria fractal jerárquica, anti-alucinación y autoaprendizaje
              continuo. Procesa señales, contexto y datos históricos 24/7 sobre
              Azure.
            </p>
          </div>
          <p className="mt-3 text-[0.7rem] text-gray-500">
            Entrada: datos, texto, eventos, señales de negocio.
          </p>
        </div>

        {/* Nexus */}
        <div className="rounded-2xl bg-[#0f0f0f] border border-[#2A2A2A] p-4 flex flex-col justify-between relative">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Capa 2
            </p>
            <h3 className="font-display text-lg gradient-gold">
              Nexus · Orquestador multi-agente
            </h3>
            <p className="mt-2 text-gray-300 text-xs md:text-sm">
              Convierte decisiones de Arcanum en flujos concretos: qué agente
              actúa, en qué sistema, con qué prioridad y bajo qué reglas
              soberanas.
            </p>
          </div>
          <p className="mt-3 text-[0.7rem] text-gray-500">
            Proceso: enrutamiento inteligente, trazabilidad, coordinación de
            tareas.
          </p>
          <div className="pointer-events-none absolute inset-y-1/2 -right-4 hidden md:flex items-center">
            <span className="text-[#FFD700] text-xl">➜</span>
          </div>
        </div>

        {/* Apps */}
        <div className="rounded-2xl bg-[#0f0f0f] border border-[#2A2A2A] p-4 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Capa 3
            </p>
            <h3 className="font-display text-lg gradient-gold">
              Apps soberanas
            </h3>
            <p className="mt-2 text-gray-300 text-xs md:text-sm">
              Cada módulo del ecosistema recibe instrucciones de Nexus y las
              traduce en acciones reales: cotizar, asegurar, educar, acompañar,
              transformar.
            </p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[0.7rem]">
            {APPS.map((app) => (
              <div
                key={app}
                className="rounded-xl border border-[#FFD700]/30 bg-[#151515] px-2 py-1 text-[#FFD700]/90 text-center"
              >
                {app}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TechnologyPage() {
  return (
    <main className="space-y-24 pb-24">
      {/* HERO TECNOLOGÍA */}
      <section className="section mt-10 md:mt-16 space-y-10">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div className="space-y-6">
            <h1 className="font-display text-4xl md:text-5xl gradient-gold">
              Tecnología &amp; Propiedad Intelectual
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              SOLYON desarrolla arquitecturas cognitivas propias para minimizar
              alucinaciones, retener contexto de forma soberana y orquestar
              agentes en tiempo real sobre infraestructuras modernas como
              Azure.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Arcanum y Nexus forman el núcleo de nuestra tecnología: un motor
              cognitivo con memoria fractal y un orquestador multi-agente que
              convierte decisiones en acciones concretas, trazables y alineadas
              con el propósito del ecosistema.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="/contact"
                className="btn px-8 py-3 text-sm md:text-base"
              >
                Solicitar demo Arcanum + Nexus
              </a>
              <a
                href={process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
              >
                Comprar Kit Digital
              </a>
              <a
                href={process.env.NEXT_PUBLIC_WOMPI_DONATE_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-[#111111] border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center justify-center gap-1"
              >
                Apoyar el laboratorio
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.65rem] text-black">
                  ♥
                </span>
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <FractalBrain />
          </div>
        </div>
      </section>

      {/* ARCANUM & NEXUS */}
      <section className="section space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Arcanum &amp; Nexus: núcleo cognitivo soberano
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Nuestra tecnología no es una sola herramienta, sino una
            arquitectura completa que separa pensamiento, orquestación y acción
            en capas bien definidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-200">
          <div className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Arcanum · Motor cognitivo
            </p>
            <h3 className="font-display text-xl gradient-gold">
              Memoria fractal jerárquica
            </h3>
            <p className="text-gray-300">
              Modelo de memoria que organiza el conocimiento en niveles,
              permitiendo recordar lo esencial en grandes contextos sin perder
              precisión ni velocidad.
            </p>
            <h3 className="font-display text-xl gradient-gold mt-4">
              Anti-alucinación
            </h3>
            <p className="text-gray-300">
              Capas de verificación, recuperación de contexto y trazabilidad de
              fuentes diseñadas para reducir al mínimo las respuestas inventadas
              o inestables.
            </p>
            <h3 className="font-display text-xl gradient-gold mt-4">
              Autoaprendizaje
            </h3>
            <p className="text-gray-300">
              Refinamiento continuo basado en interacciones reales, manteniendo
              un histórico de patrones, errores y correcciones sin exponer
              datos sensibles.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Nexus · Orquestador multi-agente
            </p>
            <h3 className="font-display text-xl gradient-gold">
              Coordinación en tiempo real
            </h3>
            <p className="text-gray-300">
              Asigna tareas a agentes especializados, decide qué flujo se
              ejecuta primero y qué datos se usan en cada paso, manteniendo un
              log completo de la decisión.
            </p>
            <h3 className="font-display text-xl gradient-gold mt-4">
              Integraciones soberanas
            </h3>
            <p className="text-gray-300">
              Diseñado para conectarse con APIs, CRMs, ERPs, sistemas de
              logística y plataformas educativas sin sacrificar la soberanía
              sobre datos y modelos.
            </p>
            <h3 className="font-display text-xl gradient-gold mt-4">
              Escalabilidad
            </h3>
            <p className="text-gray-300">
              Arquitectura preparada para operar en múltiples nubes, iniciando
              en Azure y extendible a entornos híbridos o on-premise según
              requisitos regulatorios.
            </p>
          </div>
        </div>
      </section>

      {/* PROPIEDAD INTELECTUAL */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            Propiedad intelectual &amp; estado legal
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            El núcleo tecnológico de SOLYON está en proceso de protección
            formal, asegurando que la innovación se mantenga soberana y se
            pueda escalar de forma estratégica.
          </p>
          <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
            <li>
              Fórmula anti-alucinación aplicada a modelos generativos y motores
              cognitivos.
            </li>
            <li>
              Memoria fractal jerárquica para retención y recuperación de
              contexto en sistemas de IA.
            </li>
            <li>
              Arquitectura de orquestación multi-agente (Nexus) como capa
              central de decisión.
            </li>
            <li>
              Ecosistema cognitivo soberano diseñado para LATAM con posibilidad
              de escalar globalmente.
            </li>
          </ul>
          <p className="text-[#FFD700] font-semibold text-sm">
            Estado actual: Patent Pending.
          </p>
        </div>
      </section>

      {/* MAPA COGNITIVO */}
      <section className="section space-y-8">
        <ArcanumNexusMap />
      </section>

      {/* SEGURIDAD & SOBERANÍA */}
      <section className="section space-y-8">
        <div className="card p-6 md:p-8 space-y-4">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            Seguridad, soberanía &amp; ética
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Creemos que la verdadera innovación en IA no es solo una cuestión
            de potencia, sino de soberanía, trazabilidad y respeto por las
            personas que usan y son afectadas por la tecnología.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <h3 className="font-display text-base gradient-gold">
                IA soberana
              </h3>
              <p className="mt-1 text-gray-300">
                Diseñamos tecnología pensando primero en LATAM: regulaciones,
                realidades económicas y contextos sociales que suelen ignorarse
                en los grandes centros de poder tecnológico.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base gradient-gold">
                Datos protegidos
              </h3>
              <p className="mt-1 text-gray-300">
                Nos enfocamos en mantener el control sobre datos críticos,
                evitando dependencias innecesarias de infraestructuras externas
                y priorizando anonimización y trazabilidad.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base gradient-gold">
                Ética en capas
              </h3>
              <p className="mt-1 text-gray-300">
                Cada decisión técnica se cruza con un principio: que la
                tecnología mejore la vida de quienes históricamente han sido
                ignorados por el sistema, no que los reemplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section space-y-8 text-center">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Construyamos tecnología soberana juntos
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Tanto si buscas potenciar tus sistemas actuales, construir tu propia
            plataforma DeepTech o apoyar el laboratorio SOLYON, esta tecnología
            está diseñada para trabajar contigo, no contra ti.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-4 md:gap-6">
          <a
            href="/contact"
            className="btn px-8 py-3 text-sm md:text-base"
          >
            Solicitar demo empresarial
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            Comprar Kit Digital
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WOMPI_DONATE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#111111] border border-[#ffb6f0]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center justify-center gap-1"
          >
            Apoyar el ecosistema
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.65rem] text-black">
              ♥
            </span>
          </a>
        </div>
        <p className="text-[0.8rem] text-gray-500 max-w-3xl mx-auto">
          SOLYON es el punto de encuentro entre ciencia, propósito y
          tecnología soberana. Lo que hoy ves como arquitectura, mañana será la
          base de sistemas reales que protegen, educan y empoderan a millones.
        </p>
      </section>
    </main>
  );
}
