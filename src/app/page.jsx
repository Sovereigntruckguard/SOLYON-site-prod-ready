"use client";

import Hero from "@/components/Hero";
import SupportModal from "@/components/SupportModal";
import { useLanguage } from "@/lib/language";

export default function Page() {
  const { lang } = useLanguage();

  return (
    <main className="space-y-24 pb-24">
      {/* HERO – slogan y CTAs principales (aún en ES, lo internacionalizamos después si quieres) */}
      <Hero />

      {lang === "es" ? <SpanishHome /> : <EnglishHome />}
    </main>
  );
}

/* =========================
   VERSIÓN ESPAÑOL (ACTUAL)
   ========================= */

function SpanishHome() {
  return (
    <>
      {/* CINTILLO DE CONFIANZA / SOCIAL PROOF */}
      <section className="section mt-4 mb-10 text-center">
        <div className="card py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-gray-400">
            SOLYON está siendo visibilizado y validado dentro del ecosistema
            de innovación y ciencia en Colombia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[0.7rem] md:text-xs text-gray-300">
            <span className="px-3 py-1 rounded-full border border-[#2A2A2A] bg-black/40">
              Cámara de Comercio · Ecosistema empresarial
            </span>
            <span className="px-3 py-1 rounded-full border border-[#2A2A2A] bg-black/40">
              MinCiencias · Ciencia, tecnología e innovación
            </span>
            <span className="px-3 py-1 rounded-full border border-[#2A2A2A] bg-black/40">
              SIC · Propiedad intelectual en curso
            </span>
            <span className="px-3 py-1 rounded-full border border-[#2A2A2A] bg-black/40">
              Premios Cinco Días · Invitación a ceremonia
            </span>
            <span className="px-3 py-1 rounded-full border border-[#FFD700]/30 bg-black/60 text-[#FFD700]">
              Estado: Patent Pending
            </span>
          </div>
        </div>
      </section>

      {/* 1. EL PROBLEMA QUE ESTAMOS ENFRENTANDO */}
      <section className="section space-y-10 text-center" id="problema">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            El problema que estamos enfrentando
          </h2>
          <p className="text-gray-200 leading-relaxed">
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
          <p className="text-gray-200 leading-relaxed">
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
                <p className="text-[0.7rem] md:text-xs text-gray-400 mt-1">
                  En el checkout de Wompi podrás pagar con tarjeta débito o
                  crédito, Nequi, PSE, efectivo en corresponsales y la opción{" "}
                  <span className="text-[#FFD700] font-semibold">
                    “Paga con crédito”
                  </span>{" "}
                  según disponibilidad de la entidad financiera.
                </p>
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

      {/* CASOS DE USO: QUÉ PUEDES HACER HOY CON SOLYON */}
      <section className="section space-y-10 text-center" id="casos-uso">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Qué puedes hacer hoy con SOLYON
          </h2>
          <p className="text-gray-200 text-lg">
            No somos solo una visión a futuro. Desde hoy puedes usar SOLYON
            para resolver problemas muy concretos en tu vida y en tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Camioneros / transporte */}
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-xl gradient-gold">
              Si eres camionero o trabajas en transporte
            </h3>
            <p className="text-gray-300 text-sm">
              Usa TruckBoss, Sovereign TruckGuard y EL-VIA para cotizar seguros,
              ordenar tu operación, entender el inglés del sistema y proteger tu
              futuro en EE.UU.
            </p>
            <p className="text-gray-400 text-xs">
              Pronto: acceso directo desde la app y desde nuestra agencia.
            </p>
          </div>

          {/* Founders / emprendedores */}
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-xl gradient-gold">
              Si eres founder o emprendedor
            </h3>
            <p className="text-gray-300 text-sm">
              Adquiere el Kit Digital SOLYON y obtén la arquitectura, las
              plantillas y el marco mental para construir tu propio proyecto
              DeepTech con propósito.
            </p>
            <p className="text-gray-400 text-xs">
              Ideal para postularte a grants, aceleradoras y rondas tempranas.
            </p>
          </div>

          {/* Aliados / fondos / corporativos */}
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-xl gradient-gold">
              Si eres aliado, fondo o corporativo
            </h3>
            <p className="text-gray-300 text-sm">
              Conéctate a nuestro laboratorio cognitivo y co-diseña pilotos
              con Arcanum y Nexus para tu organización, gobierno o programa de
              impacto.
            </p>
            <p className="text-gray-400 text-xs">
              Escríbenos desde la sección de Alianzas &amp; Grants para iniciar
              una conversación estratégica.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACTO & PROPÓSITO */}
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

      {/* CÍRCULO INTERNO SOLYON – LEAD CAPTURE SUAVE */}
      <section className="section space-y-6 text-center" id="circulo-interno">
        <div className="card p-8 md:p-10 max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            Únete al Círculo Interno SOLYON
          </h2>
          <p className="text-gray-200 text-sm md:text-base">
            Si sientes que este proyecto resuena contigo, queremos que estés
            cerca. Compartiremos avances, oportunidades de colaboración y
            acceso temprano a pilotos y herramientas.
          </p>
          <p className="text-gray-400 text-xs md:text-sm">
            Por ahora estamos manejando el Círculo Interno de forma directa.
            Escríbenos y cuéntanos quién eres y cómo te gustaría participar.
          </p>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sergio@solyontechnologies.com&su=C%C3%ADrculo%20Interno%20SOLYON&body=Hola%20equipo%20SOLYON%2C%0D%0A%0D%0AMe%20gustar%C3%ADa%20sumarme%20al%20C%C3%ADrculo%20Interno.%0D%0A%0D%0ANombre%3A%0D%0ARol%20o%20perfil%3A%0D%0APa%C3%ADs%3A%0D%0A%C2%BFC%C3%B3mo%20me%20gustar%C3%ADa%20aportar%20o%20participar%3F%0D%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-8 py-3 text-sm md:text-base"
            >
              Quiero estar más cerca
            </a>
          </div>
        </div>
      </section>

      {/* 5. QUIÉNES SOMOS Y DE DÓNDE VENIMOS */}
      <section className="section space-y-10 text-center" id="origen">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Quiénes somos y de dónde venimos
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
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

          <p className="text-gray-300 text-base leading-relaxed">
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
                Validaciones & ecosistema local
              </h3>
              <p>
                • Registro formal ante Cámara de Comercio y vinculación al
                ecosistema empresarial de la ciudad.
              </p>
              <p>
                • Radicados y procesos activos ante entidades como{" "}
                <span className="font-semibold">MinCiencias</span> y{" "}
                <span className="font-semibold">SIC</span>, alineando SOLYON
                con marcos de ciencia, tecnología e innovación.
              </p>
              <p>
                • Inclusión en conversaciones con nodos de innovación y
                programas que buscan proyectos DeepTech de alto impacto.
              </p>
            </div>

            {/* Columna 2: IP & Ciencia */}
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                Propiedad intelectual & ciencia
              </h3>
              <p>
                • Núcleo tecnológico en estado{" "}
                <span className="text-[#FFD700] font-semibold">
                  Patent Pending
                </span>
                : memoria fractal, anti-alucinación, orquestación cognitiva y
                ecosistema multi-agente.
              </p>
              <p>
                • Alineación con categorías de producto de MinCiencias y
                procesos en SIC para proteger el corazón tecnológico de
                SOLYON.
              </p>
              <p>
                • Integración a{" "}
                <span className="font-semibold">Wompi</span>, pasarela de
                pagos del sistema financiero colombiano, con infraestructura
                certificada bajo estándares de seguridad PCI DSS.
              </p>
            </div>

            {/* Columna 3: Reconocimiento & Oportunidad */}
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                Reconocimiento temprano & oportunidad
              </h3>
              <p>
                • Invitación a espacios de visibilidad como la ceremonia de los{" "}
                <span className="font-semibold">Premios Cinco Días</span>,
                donde SOLYON se posiciona como actor emergente en DeepTech.
              </p>
              <p>
                • Desarrollo del ecosistema casi por completo entre dos
                personas —Sergio y Elizabeth—, demostrando capacidad de
                ejecución extrema con recursos limitados.
              </p>
              <p>
                • Oportunidad única para aliados que quieran entrar en la fase
                donde la arquitectura está lista, la IP en curso y el
                crecimiento aún es temprano.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2A2A2A]">
            <p className="text-gray-400 text-sm max-w-2xl">
              Estamos abiertos a alianzas con fondos, corporativos,
              universidades y programas de grants que quieran apoyar una
              DeepTech nacida desde la realidad latinoamericana, con impacto
              global y una arquitectura tecnológica soberana ya en marcha.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sergio@solyontechnologies.com&su=Alianza%20estrat%C3%A9gica%20SOLYON&body=Hola%20equipo%20SOLYON%2C%0D%0A%0D%0AQuisiera%20explorar%20una%20posible%20alianza%20estrat%C3%A9gica%20o%20acceso%20a%20grants%20para%20el%20ecosistema.%0D%0A%0D%0A----%0D%0ANombre%3A%0D%0AOrganizaci%C3%B3n%3A%0D%0ACargo%3A%0D%0A%0D%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-8 py-3 text-sm md:text-base"
            >
              Iniciar conversación de alianza
            </a>
          </div>
        </div>
      </section>

      {/* FAQ ESTRATÉGICO */}
      <section className="section space-y-8 text-left" id="faq">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Algunas respuestas rápidas para que tomes una decisión con claridad.
          </p>
        </div>

        <div className="card p-6 md:p-8 space-y-4">
          <details className="group">
            <summary className="cursor-pointer text-sm md:text-base text-gray-100 flex justify-between items-center">
              <span>¿Qué recibo exactamente al comprar el Kit Digital SOLYON?</span>
              <span className="text-[#FFD700] text-xs ml-4 group-open:rotate-90 transition-transform">
                ❯
              </span>
            </summary>
            <p className="mt-2 text-gray-300 text-sm">
              Recibes la arquitectura estratégica del ecosistema SOLYON,
              mapas del sistema, plantillas operativas y un marco mental para
              estructurar tu proyecto DeepTech con propósito. Es material listo
              para usar en convocatorias, grants, aceleradoras y presentaciones
              a inversionistas.
            </p>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-sm md:text-base text-gray-100 flex justify-between items-center">
              <span>¿Cómo se usan los aportes al laboratorio SOLYON?</span>
              <span className="text-[#FFD700] text-xs ml-4 group-open:rotate-90 transition-transform">
                ❯
              </span>
            </summary>
            <p className="mt-2 text-gray-300 text-sm">
              Se destinan a infraestructura tecnológica, horas de desarrollo,
              documentación, pruebas de concepto y, progresivamente, a becas
              para talento latino que quiera formarse y construir dentro del
              ecosistema.
            </p>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-sm md:text-base text-gray-100 flex justify-between items-center">
              <span>¿SOLYON es solo para camioneros y seguros?</span>
              <span className="text-[#FFD700] text-xs ml-4 group-open:rotate-90 transition-transform">
                ❯
              </span>
            </summary>
            <p className="mt-2 text-gray-300 text-sm">
              No. Nuestro punto de partida son transporte y seguros porque
              conocemos profundamente esa industria, pero la arquitectura de
              Arcanum, Nexus y Azoth está pensada para extenderse a educación,
              salud, finanzas, ciudades y más.
            </p>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-sm md:text-base text-gray-100 flex justify-between items-center">
              <span>¿Qué tipo de alianzas están buscando ahora?</span>
              <span className="text-[#FFD700] text-xs ml-4 group-open:rotate-90 transition-transform">
                ❯
              </span>
            </summary>
            <p className="mt-2 text-gray-300 text-sm">
              Buscamos fondos, corporativos, universidades y programas de
              ciencia e innovación que quieran co-desarrollar pilotos, apoyar
              nuestra IP y amplificar el impacto en LATAM. Estamos en la fase
              perfecta: arquitectura sólida, reconocimiento temprano y espacio
              para construir en grande.
            </p>
          </details>
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
    </>
  );
}

/* =========================
   VERSIÓN INGLÉS
   ========================= */

function EnglishHome() {
  return (
    <>
      {/* TRUST RIBBON / SOCIAL PROOF */}
      <section className="section mt-4 mb-10 text-center">
        <div className="card py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-gray-400">
            SOLYON is being showcased and validated within Colombia&apos;s
            innovation and science ecosystem.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[0.7rem] md:text-xs text-gray-300">
            <span className="px-3 py-1 rounded-full border border-[#2A2A2A] bg-black/40">
              Chamber of Commerce · Business ecosystem
            </span>
            <span className="px-3 py-1 rounded-full border border-[#2A2A2A] bg-black/40">
              MinCiencias · Science, technology & innovation
            </span>
            <span className="px-3 py-1 rounded-full border border-[#2A2A2A] bg-black/40">
              SIC · Intellectual property in progress
            </span>
            <span className="px-3 py-1 rounded-full border border-[#2A2A2A] bg-black/40">
              Cinco Días Awards · Ceremony invitation
            </span>
            <span className="px-3 py-1 rounded-full border border-[#FFD700]/30 bg-black/60 text-[#FFD700]">
              Status: Patent Pending
            </span>
          </div>
        </div>
      </section>

      {/* 1. THE PROBLEM WE ARE FACING */}
      <section className="section space-y-10 text-center" id="problema">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            The problem we are facing
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Latin America is full of talent, resilience and creativity, but most
            people do not have access to real DeepTech. Infrastructure, tools
            and advanced models remain concentrated in the hands of global
            giants, far from the neighborhoods, streets and ventures that need
            this technology to survive and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">
              Technological inequality
            </h3>
            <p className="text-gray-300 mt-2">
              Millions are left outside the new economy because they cannot
              afford platforms or tools designed for realities very different
              from ours.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">
              Full dependence
            </h3>
            <p className="text-gray-300 mt-2">
              We depend on infrastructures we don&apos;t control: data, models
              and decisions are outside LATAM.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">
              Underused talent
            </h3>
            <p className="text-gray-300 mt-2">
              There is an entire generation of brilliant Latinos who cannot find
              a real bridge between their reality and the DeepTech that is
              defining the future.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR SOLUTION: SYSTEM ARCHITECTURE VISUALIZED */}
      <section className="section space-y-10 text-center" id="solucion">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Our solution: system architecture, visualized
          </h2>
          <p className="text-gray-200 leading-relaxed">
            SOLYON is not a single tool, it is a complete architecture.
            Visually, it organizes into three layers:{" "}
            <span className="text-[#FFD700] font-semibold">Arcanum Core</span>{" "}
            as the cognitive brain,{" "}
            <span className="text-[#FFD700] font-semibold">
              Nexus Control Grid
            </span>{" "}
            as the operational nervous system, and the{" "}
            <span className="text-[#FFD700] font-semibold">
              10-module ecosystem
            </span>{" "}
            where the applications live that impact real people and real
            companies.
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
              Cognitive engine with fractal memory, anti-hallucination and
              self-learning. It is the core that processes deep context and
              makes precise decisions.
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
              Nervous system that orchestrates agents, tasks and data in real
              time. It coordinates how Arcanum&apos;s intelligence is deployed
              over each operational flow.
            </p>
          </div>

          {/* ECOSYSTEM 10 MODULES */}
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
              10-module ecosystem
            </h3>
            <p className="text-gray-300 text-sm">
              Sovereign applications for transport, insurance, education,
              habits, operations and philanthropy. All connected on the same
              cognitive architecture.
            </p>
          </div>
        </div>
      </section>

      {/* PREMIUM CATALOG · ACCESS GATES */}
      <section className="section space-y-10" id="acceso">
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Access gates to the SOLYON ecosystem
          </h2>
          <p className="text-gray-200 text-lg">
            A premium catalog of entry points, support and implementation to
            join us in building sovereign DeepTech from LATAM to the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* CARD 1 · DIGITAL KIT */}
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#141414] to-[#050505] border border-[#FFD700]/40 shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col min-h-[260px]">
            <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#FFD7001f] to-transparent pointer-events-none" />
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[#FFD700]">
                  Premium entry
                </p>
                <h3 className="font-display text-2xl gradient-gold">
                  SOLYON Digital Kit
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Strategic documentation, ecosystem maps and operational
                  templates for founders, teams and visionaries who want to
                  build using our DeepTech logic.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-gray-100 text-lg font-semibold">
                  $99.000 COP · Secure payment via Wompi
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_WOMPI_KIT_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full py-3 text-sm md:text-base shadow-[0_0_30px_rgba(255,215,0,0.45)] text-center"
                >
                  Buy Premium Kit
                </a>
                <p className="text-[0.7rem] md:text-xs text-gray-400 mt-1">
                  On the Wompi checkout you can pay with debit or credit card,
                  Nequi, PSE, cash through partners and the{" "}
                  <span className="text-[#FFD700] font-semibold">
                    &quot;Pay with credit&quot;
                  </span>{" "}
                  option depending on availability from your financial entity.
                </p>
              </div>
            </div>
          </article>

          {/* CARD 2 · LAB SUPPORT + MODAL */}
          <article className="relative overflow-hidden rounded-3xl bg-[#0c0c0c] border border-[#ffb6f0]/40 shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col min-h-[260px]">
            <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#ffb6f022] to-transparent pointer-events-none" />
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[#ffb6f0]">
                  Continuous support
                </p>
                <h3 className="font-display text-2xl gradient-gold">
                  Support the SOLYON lab
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Your contribution keeps the lab, infrastructure and
                  scholarships alive so more people in LATAM can access
                  sovereign technology, regardless of their story.
                </p>
                <p className="text-gray-100 text-lg font-semibold">
                  Contribute from{" "}
                  <span className="text-[#FFD700]">$5.000 COP</span>
                </p>
              </div>

              <div className="space-y-3">
                <SupportModal />
                <p className="text-[0.7rem] text-gray-500 text-center">
                  You can also make larger contributions to fund scholarships,
                  hardware or specific infrastructure. Write to us via the
                  Alliances &amp; Grants section.
                </p>
              </div>
            </div>
          </article>

          {/* CARD 3 · ARCANUM FOR COMPANIES */}
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#151515] to-[#050505] border border-[#FFD700]/25 shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col min-h-[260px]">
            <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#FFD7001a] to-transparent pointer-events-none" />
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gray-400">
                  High-end implementation
                </p>
                <h3 className="font-display text-2xl gradient-gold">
                  Arcanum for companies
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Pilots and custom projects with our cognitive engine, agent
                  architecture and Nexus orchestration, for organizations that
                  need real operational autonomy.
                </p>
                <p className="text-gray-100 text-lg font-semibold">
                  2025 pilot program · Limited spots
                </p>
              </div>
              <a
                href="/contact"
                className="w-full px-8 py-3 rounded-2xl border border-[#FFD700] text-sm md:text-base mt-2 text-[#FFD700] hover:bg-[#181818] text-center"
              >
                Request strategic demo
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* USE CASES: WHAT YOU CAN DO TODAY WITH SOLYON */}
      <section className="section space-y-10 text-center" id="casos-uso">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            What you can do today with SOLYON
          </h2>
          <p className="text-gray-200 text-lg">
            We are not just a future vision. From today, you can use SOLYON to
            solve very concrete problems in your life and business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Truckers / transport */}
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-xl gradient-gold">
              If you are a trucker or work in transport
            </h3>
            <p className="text-gray-300 text-sm">
              Use TruckBoss, Sovereign TruckGuard and EL-VIA to quote
              insurance, organize your operation, understand the system&apos;s
              English and protect your future in the U.S.
            </p>
            <p className="text-gray-400 text-xs">
              Coming soon: direct access from the app and our agency.
            </p>
          </div>

          {/* Founders / entrepreneurs */}
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-xl gradient-gold">
              If you are a founder or entrepreneur
            </h3>
            <p className="text-gray-300 text-sm">
              Get the SOLYON Digital Kit and access the architecture, templates
              and mental framework to build your own DeepTech project with
              purpose.
            </p>
            <p className="text-gray-400 text-xs">
              Ideal for applying to grants, accelerators and early rounds.
            </p>
          </div>

          {/* Allies / funds / corporates */}
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-xl gradient-gold">
              If you are an ally, fund or corporate
            </h3>
            <p className="text-gray-300 text-sm">
              Connect to our cognitive lab and co-design pilots with Arcanum and
              Nexus for your organization, government or impact program.
            </p>
            <p className="text-gray-400 text-xs">
              Write to us from the Alliances &amp; Grants section to start a
              strategic conversation.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT & PURPOSE */}
      <section
        className="section space-y-10 text-center bg-gradient-to-b from-transparent via-[#050505] to-transparent"
        id="impacto"
      >
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Impact & purpose
          </h2>
          <p className="text-gray-200 text-lg">
            The core of SOLYON is not just code: it is the decision that no one
            should be left out of the technological revolution because of their
            ZIP code, accent or story. Our purpose is to turn the highest level
            of technology into an extension of human dignity.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            This is what we are changing: how intelligence is accessed, who
            designs it and from where the systems that will decide on our daily
            life are built.
          </p>
        </div>

        {/* Impact diagrams */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* People */}
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl md:text-4xl gradient-gold">
              +10,000
            </h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              People and teams projected to be impacted in the first years of
              the SOLYON ecosystem between LATAM and the U.S.
            </p>
            <div className="mt-4 flex justify-center items-end gap-1 h-8">
              <div className="w-6 rounded-full bg-[#FFD700]/30 h-3" />
              <div className="w-6 rounded-full bg-[#FFD700]/60 h-5" />
              <div className="w-6 rounded-full bg-[#FFD700] h-7" />
            </div>
            <p className="mt-1 text-[0.7rem] text-gray-500">
              Today · 12 months · 36 months
            </p>
          </div>

          {/* Projects */}
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl md:text-4xl gradient-gold">
              10
            </h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Interconnected DeepTech projects in a single ecosystem: from
              insurance and transport to education, habits and philanthropy.
            </p>
            <div className="mt-4 flex justify-center items-end gap-1 h-8">
              <div className="w-6 rounded-full bg-[#ffb6f0]/30 h-2" />
              <div className="w-6 rounded-full bg-[#ffb6f0]/60 h-4" />
              <div className="w-6 rounded-full bg-[#ffb6f0] h-6" />
            </div>
            <p className="mt-1 text-[0.7rem] text-gray-500">
              Concept · MVP · Living ecosystem
            </p>
          </div>

          {/* Patents / IP */}
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl md:text-4xl gradient-gold">
              3
            </h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              IP and patent families in progress: fractal memory, cognitive
              orchestration and sovereign ecosystem.
            </p>
            <div className="mt-4 flex justify-center items-end gap-1 h-8">
              <div className="w-6 rounded-full bg-[#FFD700]/25 h-2" />
              <div className="w-6 rounded-full bg-[#FFD700]/45 h-3" />
              <div className="w-6 rounded-full bg-[#FFD700]/80 h-5" />
            </div>
            <p className="mt-1 text-[0.7rem] text-gray-500">
              Provisional · Consolidation · Portfolio
            </p>
          </div>
        </div>
      </section>

      {/* INNER CIRCLE – SOFT LEAD CAPTURE */}
      <section className="section space-y-6 text-center" id="circulo-interno">
        <div className="card p-8 md:p-10 max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-2xl md:text-3xl gradient-gold">
            Join the SOLYON Inner Circle
          </h2>
          <p className="text-gray-200 text-sm md:text-base">
            If this project resonates with you, we want you close. We will
            share progress, collaboration opportunities and early access to
            pilots and tools.
          </p>
          <p className="text-gray-400 text-xs md:text-sm">
            For now we manage the Inner Circle directly. Write to us and tell us
            who you are and how you would like to participate.
          </p>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sergio@solyontechnologies.com&su=SOLYON%20Inner%20Circle&body=Hi%20SOLYON%20team%2C%0D%0A%0D%0AI%27d%20like%20to%20join%20the%20Inner%20Circle.%0D%0A%0D%0AName%3A%0D%0ARole%20or%20profile%3A%0D%0ACountry%3A%0D%0AHow%20I%27d%20like%20to%20contribute%20or%20participate%3A%0D%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-8 py-3 text-sm md:text-base"
            >
              I want to be closer
            </a>
          </div>
        </div>
      </section>

      {/* 5. WHO WE ARE & WHERE WE COME FROM */}
      <section className="section space-y-10 text-center" id="origen">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Who we are and where we come from
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Every technological revolution is born from a human story. SOLYON
            did not start in a lab; it started in a harsh reality, in a life
            where opportunities were a distant privilege. It began with two
            people who decided to break their limits and build something nobody
            thought was possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* CARD 1 */}
          <div className="card p-8 text-left space-y-4">
            <h3 className="font-display text-2xl gradient-gold">
              From the street to DeepTech
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Sergio grew up among violence, chaos and scarcity. He saw death,
              he saw people fall, he saw how the world can break you in half
              before age ten. But he also saw that from pain comes a force: the
              force to create your own destiny. He learned code, learned to
              build from zero and turned his story into an engine of purpose,
              not victimhood.
            </p>
            <p className="text-gray-400 text-sm">
              From neighborhoods where no one bets on you, to designing frontier
              technology. That is the root of SOLYON.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="card p-8 text-left space-y-4">
            <h3 className="font-display text-2xl gradient-gold">
              Elizabeth: the mind holding the universe
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Elizabeth fought her own war: pressure, fear, lack of support, the
              weight of standing on her own in a system not designed for a Latin
              woman to build technology. But she did it. She held the project
              when there was nothing, no money, no strength. She held it with
              love, discipline and unbreakable faith.
            </p>
            <p className="text-gray-400 text-sm">
              Without Elizabeth, SOLYON would never have survived its first
              phase.
            </p>
          </div>
        </div>

        {/* CARD 3 – UNION */}
        <div className="card p-10 max-w-4xl mx-auto space-y-4 text-center">
          <h3 className="font-display text-2xl gradient-gold">
            Two lives, one purpose: building sovereignty
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Together, Sergio and Elizabeth sold everything: cars, phones,
            belongings, even basic comfort. They went through hunger, sleepless
            nights, arguments, fall after fall. But one thing never changed:
            <span className="text-[#FFD700] font-semibold">
              {" "}
              the conviction that technology must be born from those who have
              lived lack of opportunity, not just from those who always had
              it.
            </span>
          </p>
          <p className="text-gray-400">
            SOLYON is not just a company. It is a manifesto. A declaration of
            war against the destiny they were handed. A promise for those who
            come after.
          </p>
        </div>
      </section>

      {/* 6. ROADMAP – WHERE WE ARE GOING */}
      <section className="section space-y-10 text-center" id="ruta">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Where we are going
          </h2>
          <p className="text-gray-200 text-lg">
            SOLYON is not a one-year project. It is a conscious roadmap to
            build, step by step, a sovereign DeepTech ecosystem that can grow,
            endure and sustain itself over time.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            This is the map that guides our decisions today and the alliances we
            seek for tomorrow.
          </p>
        </div>

        <div className="card p-8 md:p-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6 text-sm text-gray-200">
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">2025</h3>
              <p>
                Arcanum and Nexus consolidate as the cognitive core of the
                SOLYON ecosystem.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">2026</h3>
              <p>
                Azoth and TruckBoss accelerate the transformation of transport
                and insurance in the U.S. and LATAM.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">2027</h3>
              <p>
                Launch of the SOLYON autonomous agents platform for companies
                and governments.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">2028</h3>
              <p>
                SOLYON educational AI for millions of students and workers in
                LATAM.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">2030</h3>
              <p>
                SOLYON Foundation operating in multiple countries, funding and
                connecting talent with sovereign DeepTech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & PURPOSE */}
      <section className="section space-y-10 text-center" id="vision">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Vision & Purpose
          </h2>

          <p className="text-gray-200 text-lg">
            SOLYON is born from a deep question:{" "}
            <span className="text-[#FFD700] font-semibold">
              what if the most advanced technology in the world could be born
              from those who were never listened to?
            </span>
          </p>

          <p className="text-gray-300 text-base leading-relaxed">
            Our vision is not to create more software. It is to expand human
            perception, redesign how we coexist with artificial intelligence and
            prove that elite innovation can also be born from LATAM, from pain,
            history and resilience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Block 1 */}
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-xl gradient-gold">
              Coexistence with purpose
            </h3>
            <p className="text-gray-300">
              We believe in AI that does not replace but elevates. Intelligence
              that accompanies, empowers and allows humans to live with
              dignity, clarity and freedom.
            </p>
            <p className="text-gray-400 text-sm">
              Technology should be a spiritual, emotional and operational ally.
            </p>
          </div>

          {/* Block 2 */}
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-xl gradient-gold">
              Innovation as legacy
            </h3>
            <p className="text-gray-300">
              We create DeepTech as functional art. Every system, every module,
              every cognitive agent we develop is designed to transcend, not
              just to function.
            </p>
            <p className="text-gray-400 text-sm">
              SOLYON&apos;s legacy is not the product: it is the awareness it
              leaves in those who use it.
            </p>
          </div>

          {/* Block 3 */}
          <div className="card p-6 text-left space-y-3">
            <h3 className="font-display text-xl gradient-gold">
              Expansion of perception
            </h3>
            <p className="text-gray-300">
              We don&apos;t aim to change the world. We aim to expand how you
              see it: your freedom, your capabilities, your vision, your
              possibilities.
            </p>
            <p className="text-gray-400 text-sm">
              The real revolution is internal before it is technological.
            </p>
          </div>
        </div>

        {/* Soft emotional CTA */}
        <p className="max-w-3xl mx-auto text-gray-500 text-sm mt-4 italic">
          If you are here, you probably also feel the world can be different. At
          SOLYON we are not looking for followers, but for builders of the
          future.
        </p>
      </section>

      {/* SOLYON ECOSYSTEM */}
      <section className="section space-y-10 text-center" id="ecosistema">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            SOLYON ecosystem
          </h2>
          <p className="text-gray-200 text-lg">
            SOLYON is a sovereign DeepTech ecosystem composed of technologies,
            applications and systems designed to solve real problems in
            transport, education, habits, social impact and automation.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Each module exists to cover a critical need. Together, they form a
            living system that evolves with each user.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">Arcanum</h3>
            <p className="text-gray-300 mt-2">
              Cognitive engine with fractal memory and anti-hallucination. The
              base of all intelligence in the ecosystem.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">Nexus</h3>
            <p className="text-gray-300 mt-2">
              Operational nervous system that orchestrates agents, data and
              tasks in real time.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">Azoth</h3>
            <p className="text-gray-300 mt-2">
              Sovereign CRM for sales, operations and process automation.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">TruckBoss</h3>
            <p className="text-gray-300 mt-2">
              App for Latino truckers: quoting, community, PRO and operational
              tools.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">
              Sovereign TruckGuard LLC
            </h3>
            <p className="text-gray-300 mt-2">
              Luxury insurance agency for transport. U.S. operation and
              bilingual support.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">
              EL-VIA DOT Express
            </h3>
            <p className="text-gray-300 mt-2">
              English + DOT compliance for truckers. Real education for the most
              ignored market.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">Vita</h3>
            <p className="text-gray-300 mt-2">
              Integral transformation: habits, body, energy, focus and mind.
            </p>
          </div>

          <div className="card p-6 text-left">
            <h3 className="font-display text-xl gradient-gold">Foundation</h3>
            <p className="text-gray-300 mt-2">
              Education, social impact and scholarships for Latin talent that
              deserves real opportunities.
            </p>
          </div>
        </div>

        <p className="text-gray-500 italic text-sm max-w-3xl mx-auto">
          The ecosystem grows with you. Each module reinforces the next.
          Everything is designed to scale in LATAM and the U.S.
        </p>
      </section>

      {/* TECHNOLOGY & IP */}
      <section className="section space-y-10 text-center" id="tech-ip">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Technology & IP
          </h2>
          <p className="text-gray-200 text-lg">
            What differentiates SOLYON is not only its ecosystem, but the
            science, IP and sovereign architecture that supports it.
          </p>
          <p className="text-gray-400 text-sm">
            We are building technology with the same seriousness as major world
            labs, but from LATAM reality.
          </p>
        </div>

        <div className="card p-10 max-w-5xl mx-auto space-y-6 text-left">
          <ul className="text-gray-300 space-y-3">
            <li>
              <span className="gradient-gold font-semibold">
                • Hierarchical fractal memory for LLMs:
              </span>{" "}
              proprietary architecture for deep retention without losing
              context.
            </li>

            <li>
              <span className="gradient-gold font-semibold">
                • Anti-hallucination and self-learning:
              </span>{" "}
              Arcanum corrects deviations and improves its reasoning.
            </li>

            <li>
              <span className="gradient-gold font-semibold">
                • Nexus multi-agent orchestration:
              </span>{" "}
              cognitive coordination in real time.
            </li>

            <li>
              <span className="gradient-gold font-semibold">
                • Sovereign autonomous agents:
              </span>{" "}
              AI that does not depend on external servers to function.
            </li>

            <li>
              <span className="gradient-gold font-semibold">
                • DeepTech from LATAM:
              </span>{" "}
              technology designed for our conditions, not just for Silicon
              Valley.
            </li>
          </ul>

          <p className="text-gray-400 text-sm">
            Current status:{" "}
            <span className="text-[#FFD700] font-semibold">Patent Pending</span>{" "}
            (anti-hallucination formula, fractal memory, orchestration and
            cognitive system).
          </p>
        </div>
      </section>

      {/* STRATEGIC ALLIANCES & GRANTS */}
      <section className="section space-y-10 text-center" id="alianzas">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Strategic Alliances & Grants
          </h2>
          <p className="text-gray-200 text-lg">
            SOLYON is no longer just an idea. It is an ecosystem in formal
            validation with key national entities and early recognition in
            innovation spaces.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            We are looking for partners who want to build sovereign DeepTech
            from LATAM, with legal traceability, clear IP and real social
            purpose.
          </p>
        </div>

        <div className="card p-8 md:p-10 max-w-6xl mx-auto space-y-8 text-left">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
            {/* Col 1: Validation */}
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                Validation & local ecosystem
              </h3>
              <p>
                • Formal registration at the Chamber of Commerce and connection
                to the city&apos;s business ecosystem.
              </p>
              <p>
                • Filings and active processes with entities such as{" "}
                <span className="font-semibold">MinCiencias</span> and{" "}
                <span className="font-semibold">SIC</span>, aligning SOLYON
                with science, technology and innovation frameworks.
              </p>
              <p>
                • Inclusion in conversations with innovation hubs and programs
                seeking high-impact DeepTech projects.
              </p>
            </div>

            {/* Col 2: IP & Science */}
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                Intellectual property & science
              </h3>
              <p>
                • Core tech in{" "}
                <span className="text-[#FFD700] font-semibold">
                  Patent Pending
                </span>{" "}
                status: fractal memory, anti-hallucination, cognitive
                orchestration and multi-agent ecosystem.
              </p>
              <p>
                • Alignment with MinCiencias product categories and SIC
                processes to protect SOLYON&apos;s technological heart.
              </p>
              <p>
                • Integration with{" "}
                <span className="font-semibold">Wompi</span>, the payment
                gateway of Colombia&apos;s financial system, with
                PCI-DSS-certified infrastructure.
              </p>
            </div>

            {/* Col 3: Recognition & Opportunity */}
            <div className="space-y-2">
              <h3 className="font-display text-base gradient-gold">
                Early recognition & opportunity
              </h3>
              <p>
                • Invitation to visibility spaces such as the{" "}
                <span className="font-semibold">Cinco Días Awards</span>
                ceremony, where SOLYON is positioned as an emerging DeepTech
                player.
              </p>
              <p>
                • Ecosystem developed almost entirely by two people —Sergio and
                Elizabeth— demonstrating extreme execution capacity with limited
                resources.
              </p>
              <p>
                • Unique opportunity for allies who want to join at the stage
                where architecture is ready, IP is in motion and growth is still
                early.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2A2A2A]">
            <p className="text-gray-400 text-sm max-w-2xl">
              We are open to alliances with funds, corporates, universities and
              grant programs that want to support a DeepTech ecosystem born from
              Latin American reality, with global impact and a sovereign tech
              architecture already in motion.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sergio@solyontechnologies.com&su=SOLYON%20strategic%20alliance&body=Hi%20SOLYON%20team%2C%0D%0A%0D%0AI%27d%20like%20to%20explore%20a%20potential%20strategic%20alliance%20or%20access%20to%20grants%20for%20the%20ecosystem.%0D%0A%0D%0A----%0D%0AName%3A%0D%0AOrganization%3A%0D%0ARole%3A%0D%0A%0D%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-8 py-3 text-sm md:text-base"
            >
              Start alliance conversation
            </a>
          </div>
        </div>
      </section>

      {/* STRATEGIC FAQ */}
      <section className="section space-y-8 text-left" id="faq">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl gradient-gold">
            Frequently asked questions
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Some quick answers so you can make a clear decision.
          </p>
        </div>

        <div className="card p-6 md:p-8 space-y-4">
          <details className="group">
            <summary className="cursor-pointer text-sm md:text-base text-gray-100 flex justify-between items-center">
              <span>What exactly do I get when I buy the SOLYON Digital Kit?</span>
              <span className="text-[#FFD700] text-xs ml-4 group-open:rotate-90 transition-transform">
                ❯
              </span>
            </summary>
            <p className="mt-2 text-gray-300 text-sm">
              You receive the strategic architecture of the SOLYON ecosystem,
              system maps, operational templates and a mental framework to
              structure your DeepTech project with purpose. It is material ready
              to use for calls, grants, accelerators and investor decks.
            </p>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-sm md:text-base text-gray-100 flex justify-between items-center">
              <span>How are contributions to the SOLYON lab used?</span>
              <span className="text-[#FFD700] text-xs ml-4 group-open:rotate-90 transition-transform">
                ❯
              </span>
            </summary>
            <p className="mt-2 text-gray-300 text-sm">
              They go to tech infrastructure, development hours, documentation,
              proof-of-concepts and, progressively, to scholarships for Latin
              talent who want to learn and build inside the ecosystem.
            </p>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-sm md:text-base text-gray-100 flex justify-between items-center">
              <span>Is SOLYON only for truckers and insurance?</span>
              <span className="text-[#FFD700] text-xs ml-4 group-open:rotate-90 transition-transform">
                ❯
              </span>
            </summary>
            <p className="mt-2 text-gray-300 text-sm">
              No. Our starting point is transport and insurance because we know
              that industry deeply, but the architecture of Arcanum, Nexus and
              Azoth is designed to extend into education, health, finance,
              cities and more.
            </p>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-sm md:text-base text-gray-100 flex justify-between items-center">
              <span>What kind of alliances are you looking for right now?</span>
              <span className="text-[#FFD700] text-xs ml-4 group-open:rotate-90 transition-transform">
                ❯
              </span>
            </summary>
            <p className="mt-2 text-gray-300 text-sm">
              We are looking for funds, corporates, universities and science /
              innovation programs that want to co-develop pilots, support our
              IP and amplify impact in LATAM. We are in the perfect phase:
              solid architecture, early recognition and room to build big.
            </p>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section mt-24 border-t border-[#2A2A2A] pt-10 text-sm text-gray-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} SOLYON Technologies. All rights
            reserved.
          </p>
          <p>Contact: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
        </div>
      </footer>
    </>
  );
}
