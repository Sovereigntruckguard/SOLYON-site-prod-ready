import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import TechIP from "@/components/TechIP";
import Purchase from "@/components/Purchase";
import PartnersCTA from "@/components/PartnersCTA";
import SupportModal from "@/components/SupportModal";

export default function Page() {
  return (
    <main className="space-y-24 pb-24">
      {/* HERO – slogan y CTAs principales */}
      <Hero />

      {/* 1. EL PROBLEMA QUE ESTAMOS ENFRENTANDO */}
      <section className="section space-y-10 text-center" id="problema">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            El problema que estamos enfrentando
          </h2>
          <p className="text-gray-200">
            América Latina está llena de talento, resiliencia y creatividad,
            pero la mayoría de las personas no tienen acceso a DeepTech real.
            La infraestructura, las herramientas y los modelos avanzados siguen
            concentrados en manos de gigantes globales, lejos de los barrios,
            las calles y los emprendimientos que necesitan esa tecnología para
            sobrevivir y crecer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">
              Desigualdad tecnológica
            </h3>
            <p className="text-gray-300 mt-2">
              Millones quedan por fuera de la nueva economía porque no pueden
              pagar plataformas ni equipos pensados para realidades muy
              distintas a las nuestras.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">
              Dependencia total
            </h3>
            <p className="text-gray-300 mt-2">
              Dependemos de infraestructuras que no controlamos: datos, modelos
              y decisiones están fuera de LATAM.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">
              Talento subutilizado
            </h3>
            <p className="text-gray-300 mt-2">
              Hay una generación completa de latinos brillantes que no
              encuentra un puente entre su realidad y la DeepTech que está
              definiendo el futuro.
            </p>
          </div>
        </div>
      </section>

      {/* 2. NUESTRA SOLUCIÓN: ARQUITECTURA DEL SISTEMA VISUALIZADA */}
      <section className="section space-y-10 text-center" id="solucion">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Nuestra solución: arquitectura del sistema visualizada
          </h2>
          <p className="text-gray-200">
            SOLYON no es una sola herramienta, es una arquitectura completa.
            Visualmente, se organiza en tres capas: el{" "}
            <span className="text-[#FFD700] font-semibold">Arcanum Core</span>{" "}
            como cerebro cognitivo, el{" "}
            <span className="text-[#FFD700] font-semibold">
              Nexus Control Grid
            </span>{" "}
            como sistema nervioso operativo y el{" "}
            <span className="text-[#FFD700] font-semibold">
              Ecosistema de 10 módulos
            </span>{" "}
            donde viven las aplicaciones que tocan la vida real de las personas
            y las empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* ARCANUM CORE */}
          <div className="card p-6 flex flex-col items-center text-center space-y-4">
            <div className="relative w-40 h-40 md:w-44 md:h-44">
              <div className="absolute inset-4 rounded-full border border-[#ffb6f0]/50" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#ffb6f022] to-transparent blur-xl" />
              <div className="absolute inset-[32%] rounded-full border border-[#FFD700]/70" />
            </div>
            <h3 className="font-display text-xl gradient-gold">Arcanum Core</h3>
            <p className="text-gray-300 text-sm">
              Motor cognitivo con memoria fractal, anti-alucinación y
              autoaprendizaje. Es el núcleo que procesa contexto profundo y
              toma decisiones con precisión.
            </p>
          </div>

          {/* NEXUS CONTROL GRID */}
          <div className="card p-6 flex flex-col items-center text-center space-y-4">
            <div className="relative w-40 h-40 md:w-44 md:h-44">
              <div className="absolute inset-1 rounded-full border border-[#FFD700]/40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.18),_transparent_60%)]" />
              <div className="absolute inset-4 grid grid-cols-3 grid-rows-3 gap-1 opacity-80">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-full border border-[#ffb6f0]/40 bg-black/60"
                  />
                ))}
              </div>
            </div>
            <h3 className="font-display text-xl gradient-gold">
              Nexus Control Grid
            </h3>
            <p className="text-gray-300 text-sm">
              Sistema nervioso que orquesta agentes, tareas y datos en tiempo
              real. Coordina cómo la inteligencia de Arcanum se despliega sobre
              cada flujo operativo.
            </p>
          </div>

          {/* ECOSISTEMA 10 MÓDULOS */}
          <div className="card p-6 flex flex-col items-center text-center space-y-4">
            <div className="relative w-40 h-40 md:w-44 md:h-44">
              <div className="absolute inset-0 rounded-3xl border border-[#ffb6f0]/40 bg-gradient-to-br from-[#1a1a1a] to-[#050505]" />
              <div className="absolute inset-3 grid grid-cols-3 grid-rows-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center rounded-xl bg-[#111111] border border-[#FFD700]/25 text-[0.55rem] text-[#FFD700]/80"
                  >
                    {i === 0
                      ? "Arcanum"
                      : i === 1
                      ? "Nexus"
                      : i === 2
                      ? "Azoth"
                      : i === 3
                      ? "TruckBoss"
                      : i === 4
                      ? "STG"
                      : i === 5
                      ? "EL-VIA"
                      : i === 6
                      ? "Vita"
                      : i === 7
                      ? "Command"
                      : "Foundation"}
                  </div>
                ))}
              </div>
            </div>
            <h3 className="font-display text-xl gradient-gold">
              Ecosistema de 10 módulos
            </h3>
            <p className="text-gray-300 text-sm">
              Aplicaciones soberanas para transporte, seguros, educación,
              hábitos, operación y filantropía. Todo conectado sobre la misma
              arquitectura cognitiva.
            </p>
          </div>
        </div>
      </section>

      {/* CATÁLOGO PREMIUM · PUERTAS DE ACCESO */}
      <section className="section space-y-10" id="acceso">
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Puertas de acceso al ecosistema SOLYON
          </h2>
          <p className="text-gray-200 text-lg">
            Un catálogo premium de acceso, apoyo e implementación para
            acompañarnos en la construcción de DeepTech soberana desde LATAM
            hacia el mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* TARJETA 1 · KIT DIGITAL */}
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#141414] to-[#050505] border border-[#FFD700]/40 shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col min-h-[260px]">
            <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#FFD7001f] to-transparent pointer-events-none" />
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[#FFD700]">
                  Entrada Premium
                </p>
                <h3 className="font-display text-2xl gradient-gold">
                  SOLYON Kit Digital
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Documentación estratégica, mapas del ecosistema y plantillas
                  operativas para founders, equipos y visionarios que quieren
                  construir con nuestra lógica DeepTech.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-gray-100 text-lg font-semibold">
                  $99.000 COP · Pago seguro vía Wompi
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full py-3 text-sm md:text-base shadow-[0_0_30px_rgba(255,215,0,0.45)] text-center"
                >
                  Comprar Kit Premium
                </a>
              </div>
            </div>
          </article>

          {/* TARJETA 2 · APOYO LABORATORIO + MODAL */}
          <article className="relative overflow-hidden rounded-3xl bg-[#0c0c0c] border border-[#ffb6f0]/40 shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col min-h-[260px]">
            <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#ffb6f022] to-transparent pointer-events-none" />
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[#ffb6f0]">
                  Apoyo continuo
                </p>
                <h3 className="font-display text-2xl gradient-gold">
                  Apoya el laboratorio SOLYON
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Tu aporte mantiene vivo el laboratorio, la infraestructura y
                  las becas que permiten que más personas en LATAM accedan a
                  tecnología soberana, sin importar su historia.
                </p>
                <p className="text-gray-100 text-lg font-semibold">
                  Aporta desde{" "}
                  <span className="text-[#FFD700]">$5.000 COP</span>
                </p>
              </div>

              {/* Aquí va el modal flotante */}
              <div className="space-y-3">
                <SupportModal />
                <p className="text-[0.7rem] text-gray-500 text-center">
                  También puedes hacer aportes mayores para financiar becas,
                  hardware o infraestructura específica. Escríbenos desde la
                  sección Alianzas &amp; Grants.
                </p>
              </div>
            </div>
          </article>

          {/* TARJETA 3 · ARCANUM EMPRESAS */}
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#151515] to-[#050505] border border-[#FFD700]/25 shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col min-h-[260px]">
            <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#FFD7001a] to-transparent pointer-events-none" />
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gray-400">
                  Implementación de alta gama
                </p>
                <h3 className="font-display text-2xl gradient-gold">
                  Arcanum para empresas
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Pilotos y proyectos a medida con nuestro motor cognitivo,
                  arquitectura de agentes y orquestación Nexus, para compañías
                  y organizaciones que necesitan autonomía operativa real.
                </p>
                <p className="text-gray-100 text-lg font-semibold">
                  Programa piloto 2025 · Cupos limitados
                </p>
              </div>
              <a
                href="/contact"
                className="w-full px-8 py-3 rounded-2xl border border-[#FFD700] text-sm md:text-base mt-2 text-[#FFD700] hover:bg-[#181818] text-center"
              >
                Solicitar demo estratégica
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* 4. IMPACTO & PROPÓSITO */}
      <section
        className="section space-y-10 text-center bg-gradient-to-b from-transparent via-[#050505] to-transparent"
        id="impacto"
      >
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Impacto & propósito
          </h2>
          <p className="text-gray-200 text-lg">
            El núcleo de SOLYON no es solo código: es la decisión de que nadie
            se quede afuera de la revolución tecnológica por su código postal,
            su acento o su historia. Nuestro propósito es convertir la
            tecnología de más alto nivel en una extensión de la dignidad humana.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Esto es lo que estamos cambiando: cómo se accede a la inteligencia,
            quién la diseña y desde dónde se construyen los sistemas que van a
            decidir sobre nuestra vida diaria.
          </p>
        </div>

        {/* Diagramas de impacto */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Personas */}
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl md:text-4xl gradient-gold">
              +10.000
            </h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Personas y equipos proyectados a impactar en los primeros años
              del ecosistema SOLYON entre LATAM y EE.UU.
            </p>
            <div className="mt-4 flex justify-center items-end gap-1 h-8">
              <div className="w-6 rounded-full bg-[#FFD700]/30 h-3" />
              <div className="w-6 rounded-full bg-[#FFD700]/60 h-5" />
              <div className="w-6 rounded-full bg-[#FFD700] h-7" />
            </div>
            <p className="mt-1 text-[0.7rem] text-gray-500">
              Hoy · 12 meses · 36 meses
            </p>
          </div>

          {/* Proyectos */}
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl md:text-4xl gradient-gold">
              10
            </h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Proyectos DeepTech interconectados en un mismo ecosistema: de
              seguros y transporte a educación, hábitos y filantropía.
            </p>
            <div className="mt-4 flex justify-center items-end gap-1 h-8">
              <div className="w-6 rounded-full bg-[#ffb6f0]/30 h-2" />
              <div className="w-6 rounded-full bg-[#ffb6f0]/60 h-4" />
              <div className="w-6 rounded-full bg-[#ffb6f0] h-6" />
            </div>
            <p className="mt-1 text-[0.7rem] text-gray-500">
              Concepto · MVP · Ecosistema vivo
            </p>
          </div>

          {/* Patentes / IP */}
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl md:text-4xl gradient-gold">
              3
            </h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Familias de patentes y propiedad intelectual en marcha: memoria
              fractal, orquestación cognitiva y ecosistema soberano.
            </p>
            <div className="mt-4 flex justify-center items-end gap-1 h-8">
              <div className="w-6 rounded-full bg-[#FFD700]/25 h-2" />
              <div className="w-6 rounded-full bg-[#FFD700]/45 h-3" />
              <div className="w-6 rounded-full bg-[#FFD700]/80 h-5" />
            </div>
            <p className="mt-1 text-[0.7rem] text-gray-500">
              Provisional · Consolidación · Portafolio
            </p>
          </div>
        </div>
      </section>

            {/* 5. QUIÉNES SOMOS Y DE DÓNDE VENIMOS */}
      <section className="section space-y-10 text-center" id="origen">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Quiénes somos y de dónde venimos
          </h2>
          <p className="text-gray-300 text-lg">
            Toda revolución tecnológica nace de una historia humana. SOLYON no
            comenzó en un laboratorio; comenzó en una realidad dura, en una vida
            donde las oportunidades eran un privilegio lejano. Comenzó con dos
            personas que decidieron romper sus límites y construir algo que
            nadie imaginaba posible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* TARJETA 1 */}
          <div className="card p-8 text-left space-y-4">
            <h3 className="font-display text-2xl gradient-gold">
              Desde la calle al DeepTech
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Sergio creció entre la violencia, el caos y la escasez. Vio morir,
              vio caer, vio cómo el mundo podía partirte en dos antes de
              cumplir los 10 años. Pero también vio que del dolor nace una fuerza:
              la fuerza de crear tu propio destino. Aprendió código, aprendió a
              construir desde cero y convirtió su historia en un motor de
              propósito, no de victimismo.
            </p>
            <p className="text-gray-400 text-sm">
              De los barrios donde nadie apuesta por ti, a diseñar tecnología de
              frontera. Esa es la raíz de SOLYON.
            </p>
          </div>

          {/* TARJETA 2 */}
          <div className="card p-8 text-left space-y-4">
            <h3 className="font-display text-2xl gradient-gold">
              Elizabeth: la mente que sostiene el universo
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Elizabeth vivió su propia guerra: la presión, el miedo, la falta de
              apoyo, el peso de sostenerse sola en un sistema que no fue diseñado
              para que una mujer latina construya tecnología. Pero lo hizo. Sostuvo
              al proyecto cuando no había nada, cuando no había dinero, cuando no
              había fuerzas. Sostuvo con amor, con disciplina y con una fe que no
              se quiebra.
            </p>
            <p className="text-gray-400 text-sm">
              Sin Elizabeth, SOLYON nunca hubiera sobrevivido su primera fase.
            </p>
          </div>
        </div>

        {/* TARJETA 3 – LA UNIÓN */}
        <div className="card p-10 max-w-4xl mx-auto space-y-4 text-center">
          <h3 className="font-display text-2xl gradient-gold">
            Dos vidas, un propósito: construir soberanía
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Juntos, Sergio y Elizabeth vendieron todo: carros, celulares,
            pertenencias, incluso la comodidad básica. Pasaron hambre, noches sin
            dormir, discusiones, caída tras caída. Pero algo nunca cambió:
            <span className="text-[#FFD700] font-semibold">
              {" "}
              la convicción de que la tecnología debe nacer desde quienes han
              vivido la falta de oportunidades, no desde quienes siempre las han
              tenido.
            </span>
          </p>
          <p className="text-gray-400">
            SOLYON no es una empresa. Es un manifiesto. Una declaración de guerra
            contra el destino que les tocó. Una promesa para quienes vienen detrás.
          </p>
        </div>
      </section>

            {/* 6. HOJA DE RUTA – HACIA DÓNDE VAMOS */}
      <section className="section space-y-10 text-center" id="ruta">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Hacia dónde vamos
          </h2>
          <p className="text-gray-200 text-lg">
            SOLYON no es un proyecto de un año. Es una hoja de ruta consciente
            para construir, paso a paso, un ecosistema DeepTech soberano que
            pueda crecer, resistir y mantenerse en el tiempo.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Este es el mapa que guía nuestras decisiones hoy y las alianzas que
            buscamos para mañana.
          </p>
        </div>

        <div className="card p-8 md:p-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6 text-sm text-gray-200">
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">2025</h3>
              <p>
                Arcanum y Nexus se consolidan como núcleo cognitivo del
                ecosistema SOLYON.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">2026</h3>
              <p>
                Azoth y TruckBoss aceleran la transformación del transporte y
                los seguros en EE.UU. y LATAM.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">2027</h3>
              <p>
                Lanzamiento de la plataforma de agentes autónomos SOLYON para
                empresas y gobiernos.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">2028</h3>
              <p>
                IA educativa SOLYON para millones de estudiantes y trabajadores
                en LATAM.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">2030</h3>
              <p>
                SOLYON Foundation operando en múltiples países, becando y
                conectando talento con DeepTech soberano.
              </p>
            </div>
          </div>
        </div>
      </section>

           {/* VISIÓN & PROPÓSITO */}
      <section className="section space-y-10 text-center" id="vision">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Visión & Propósito
          </h2>

          <p className="text-gray-200 text-lg">
            SOLYON nace con una pregunta profunda:{" "}
            <span className="text-[#FFD700] font-semibold">
              ¿y si la tecnología más avanzada del mundo pudiera nacer desde quienes nunca fueron escuchados?
            </span>
          </p>

          <p className="text-gray-300 text-base">
            Nuestra visión no es crear más software. Es expandir la percepción humana,
            rediseñar cómo coexistimos con la inteligencia artificial y demostrar que
            la innovación de élite también puede nacer desde LATAM, desde el dolor,
            la historia y la resiliencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Bloque 1 */}
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-xl gradient-gold">
              Coexistencia con propósito
            </h3>
            <p className="text-gray-300">
              Creemos en una IA que no reemplaza, sino que eleva. Una inteligencia
              que acompaña, potencia y permite que los humanos vivan con dignidad,
              claridad y libertad.
            </p>
            <p className="text-gray-400 text-sm">
              La tecnología debe ser un aliado espiritual, emocional y operativo.
            </p>
          </div>

          {/* Bloque 2 */}
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-xl gradient-gold">
              Innovación como legado
            </h3>
            <p className="text-gray-300">
              Creamos DeepTech como arte funcional. Cada sistema, cada módulo,
              cada agente cognitivo que desarrollamos está diseñado para trascender,
              no solo para funcionar.
            </p>
            <p className="text-gray-400 text-sm">
              El legado de SOLYON no es el producto: es la conciencia que deja en quienes lo usan.
            </p>
          </div>

          {/* Bloque 3 */}
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-xl gradient-gold">
              Expansión de percepción
            </h3>
            <p className="text-gray-300">
              No buscamos cambiar el mundo. Buscamos expandir la forma en que lo ves:
              tu libertad, tus capacidades, tu visión, tus posibilidades.
            </p>
            <p className="text-gray-400 text-sm">
              La verdadera revolución es interna antes que tecnológica.
            </p>
          </div>
        </div>

        {/* CTA emocional suave */}
        <p className="max-w-3xl mx-auto text-gray-500 text-sm mt-4 italic">
          Si estás aquí, probablemente también sientes que el mundo puede ser distinto.
          En SOLYON no buscamos seguidores, sino constructores de futuro.
        </p>
      </section>

      {/* ECOSISTEMA SOLYON */}
      <section className="section space-y-10 text-center" id="ecosistema">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Ecosistema SOLYON
          </h2>
          <p className="text-gray-200 text-lg">
            SOLYON es un ecosistema DeepTech soberano compuesto por tecnologías,
            aplicaciones y sistemas diseñados para resolver problemas reales
            en transporte, educación, hábitos, impacto social y automatización.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Cada módulo nace para cubrir una necesidad crítica. Unidos, forman un
            sistema vivo que evoluciona con cada usuario.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">Arcanum</h3>
            <p className="text-gray-300 mt-2">
              Motor cognitivo con memoria fractal y anti-alucinación. La base de
              toda la inteligencia del ecosistema.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">Nexus</h3>
            <p className="text-gray-300 mt-2">
              Sistema nervioso operativo que orquesta agentes, datos y tareas en
              tiempo real.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">Azoth</h3>
            <p className="text-gray-300 mt-2">
              CRM soberano para ventas, operación y automatización de procesos.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">TruckBoss</h3>
            <p className="text-gray-300 mt-2">
              App para camioneros latinos: cotizador, comunidad, PRO y
              herramientas de operación.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">
              Sovereign TruckGuard LLC
            </h3>
            <p className="text-gray-300 mt-2">
              Agencia de seguros de lujo para transporte. Operación EE.UU. y
              soporte bilingüe.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">
              EL-VIA DOT Express
            </h3>
            <p className="text-gray-300 mt-2">
              Inglés + cumplimiento DOT para camioneros. Educación real para
              el mercado más olvidado.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">Vita</h3>
            <p className="text-gray-300 mt-2">
              Transformación integral: hábitos, cuerpo, energía, foco y mente.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">Foundation</h3>
            <p className="text-gray-300 mt-2">
              Educación, impacto social y becas para talento latino que merece
              oportunidades reales.
            </p>
          </div>
        </div>

        <p className="text-gray-500 italic text-sm max-w-3xl mx-auto">
          El ecosistema crece contigo. Cada módulo refuerza al siguiente. Todo
          está diseñado para escalar en LATAM y EE.UU.
        </p>
      </section>

      {/* TECNOLOGÍA & IP */}
      <section className="section space-y-10 text-center" id="tech-ip">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Tecnología & IP
          </h2>
          <p className="text-gray-200 text-lg">
            Lo que diferencia a SOLYON no es solo su ecosistema, sino la ciencia,
            la propiedad intelectual y la arquitectura soberana que lo sostiene.
          </p>
          <p className="text-gray-400 text-sm">
            Estamos construyendo tecnología con la misma seriedad de los grandes
            laboratorios del mundo, pero desde la realidad de LATAM.
          </p>
        </div>

        <div className="card p-10 max-w-5xl mx-auto space-y-6 text-left">
          <ul className="text-gray-300 space-y-3">
            <li>
              <span className="gradient-gold font-semibold">
                • Memoria fractal jerárquica para LLM:
              </span>{" "}
              arquitectura propia para retención profunda, sin perder contexto.
            </li>

            <li>
              <span className="gradient-gold font-semibold">
                • Anti-alucinación y autoaprendizaje:
              </span>{" "}
              Arcanum corrige desviaciones y mejora su razonamiento.
            </li>

            <li>
              <span className="gradient-gold font-semibold">
                • Orquestación multi-agente Nexus:
              </span>{" "}
              coordinación cognitiva en tiempo real.
            </li>

            <li>
              <span className="gradient-gold font-semibold">
                • Agentes autónomos soberanos:
              </span>{" "}
              IA que no depende de servidores externos para funcionar.
            </li>

            <li>
              <span className="gradient-gold font-semibold">
                • DeepTech desde LATAM:
              </span>{" "}
              tecnología diseñada para nuestras condiciones, no para Silicon
              Valley.
            </li>
          </ul>

          <p className="text-gray-400 text-sm">
            Estado actual:{" "}
            <span className="text-[#FFD700] font-semibold">Patent Pending</span>{" "}
            (fórmula anti-alucinación, memoria fractal, orquestación y sistema
            cognitivo).
          </p>
        </div>
      </section>

      {/* ALIANZAS ESTRATÉGICAS & GRANTS */}
      <section className="section space-y-10 text-center" id="alianzas">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Alianzas estratégicas & Grants
          </h2>
          <p className="text-gray-200 text-lg">
            SOLYON ya no es solo una idea. Es un ecosistema en proceso de
            validación formal ante las principales entidades del país y con
            reconocimiento temprano en espacios de innovación.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Buscamos aliados que quieran construir DeepTech soberana desde
            LATAM, con trazabilidad legal, propiedad intelectual clara y
            propósito social real.
          </p>
        </div>

        <div className="card p-8 md:p-10 max-w-6xl mx-auto space-y-8 text-left">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
            {/* Columna 1: Validaciones */}
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                Validaciones y ecosistema local
              </h3>
              <p>
                • Registro formal ante Cámara de Comercio y vinculación al
                ecosistema empresarial de la ciudad.
              </p>
              <p>
                • Radicados y procesos activos ante entidades como
                MinCiencias y SIC, alineando SOLYON con marcos de ciencia,
                tecnología e innovación.
              </p>
            </div>

            {/* Columna 2: IP & Ciencia */}
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                Propiedad intelectual & ciencia
              </h3>
              <p>
                • Fórmula de memoria fractal, anti-alucinación y
                orquestación multi-agente en estado{" "}
                <span className="text-[#FFD700] font-semibold">
                  Patent Pending
                </span>
                .
              </p>
              <p>
                • Alineación con categorías de producto de MinCiencias y
                procesos en SIC para proteger el núcleo tecnológico.
              </p>
            </div>

            {/* Columna 3: Reconocimiento & oportunidad */}
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                Reconocimiento temprano & oportunidad
              </h3>
              <p>
                • Invitación a espacios de reconocimiento como los Premios
                Cinco Días, donde SOLYON se posiciona como actor emergente
                en DeepTech.
              </p>
              <p>
                • Oportunidad única para aliados que quieran entrar en la
                fase donde la arquitectura está lista, pero el crecimiento
                aún es temprano.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2A2A2A]">
            <p className="text-gray-400 text-sm max-w-2xl">
              Estamos abiertos a alianzas con fondos, corporativos,
              universidades y programas de grants que quieran apoyar una
              DeepTech nacida desde la realidad latinoamericana, con impacto
              global.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sergio@solyontechnologies.com&su=Alianza%20estratégica%20SOLYON&body=Hola%20equipo%20SOLYON%2C%0D%0A%0D%0AQuisiera%20explorar%20una%20posible%20alianza%20estratégica%20o%20acceso%20a%20grants%20para%20el%20ecosistema.%0D%0A%0D%0A----%0D%0ANombre%3A%0D%0AOrganizaci%C3%B3n%3A%0D%0ACargo%3A%0D%0A%0D%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-8 py-3 text-sm md:text-base"
           >
            Iniciar conversación de alianza
           </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section mt-24 border-t border-[#2A2A2A] pt-10 text-sm text-gray-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} SOLYON Technologies. All rights
            reserved.
          </p>
          <p>Contacto: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
        </div>
      </footer>
    </main>
  );
}
