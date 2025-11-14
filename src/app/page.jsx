import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Ecosystem from "@/components/Ecosystem";
import TechIP from "@/components/TechIP";
import Purchase from "@/components/Purchase";
import PartnersCTA from "@/components/PartnersCTA";

export default function Page() {
  return (
    <main className="space-y-24 pb-24">
      {/* HERO – mantiene el slogan original */}
      <Hero />

      {/* BLOQUE 1: PROBLEMA */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">
          El problema que estamos enfrentando
        </h2>
        <p className="text-gray-200 max-w-3xl">
          LATAM está llena de talento, resiliencia y ganas, pero la mayoría de las personas no
          tienen acceso a DeepTech real. La infraestructura, las herramientas y los modelos
          avanzados siguen concentrados en manos de gigantes globales.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-display text-xl gradient-gold">Desigualdad tecnológica</h3>
            <p className="text-gray-300 mt-2">
              Millones de personas quedan por fuera de la nueva economía porque no tienen acceso
              a tecnologías de inteligencia artificial y automatización de alto nivel.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-xl gradient-gold">Dependencia total</h3>
            <p className="text-gray-300 mt-2">
              La mayoría de soluciones dependen de plataformas externas, sin soberanía de datos,
              contexto ni dirección estratégica propia.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-xl gradient-gold">Talento subutilizado</h3>
            <p className="text-gray-300 mt-2">
              Hay una generación completa de latinos brillantes que no encuentra un puente
              entre su realidad y la DeepTech que mueve el mundo.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: SOLUCIÓN */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">
          Nuestra solución: un ecosistema cognitivo soberano
        </h2>
        <p className="text-gray-200 max-w-3xl">
          SOLYON diseña un ecosistema DeepTech completo, donde el cerebro cognitivo (Arcanum),
          el orquestador (Nexus) y las aplicaciones reales (Azoth, TruckBoss, EL-VIA, Vita)
          trabajan juntos para resolver problemas concretos de negocio y de vida.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">Motor cognitivo</h3>
            <p className="text-gray-300 mt-2">
              Arcanum: memoria fractal, anti-alucinación y autoaprendizaje para tomar mejores decisiones.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">Orquestación</h3>
            <p className="text-gray-300 mt-2">
              Nexus conecta agentes, datos y aplicaciones en flujos vivos, medibles y soberanos.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">Aplicaciones reales</h3>
            <p className="text-gray-300 mt-2">
              Azoth, TruckBoss, EL-VIA, Vita y otros módulos que atacan problemas específicos con impacto real.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">Acceso simplificado</h3>
            <p className="text-gray-300 mt-2">
              Desde un Kit Digital accesible hasta soluciones enterprise, el ecosistema está diseñado para escalar.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: IMPACTO */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">Impacto SOLYON</h2>
        <p className="text-gray-200 max-w-3xl">
          Este ecosistema no es solo una plataforma tecnológica: es un puente para quienes el sistema
          dejó atrás. Camioneros, emprendedores, autodidactas, familias completas que necesitan
          herramientas reales para transformar su vida.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl gradient-gold">+1000</h3>
            <p className="text-gray-300 mt-2">
              Personas proyectadas a impactar en la primera fase LATAM del ecosistema.
            </p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl gradient-gold">3</h3>
            <p className="text-gray-300 mt-2">
              Sectores clave: transporte, educación y transformación personal.
            </p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl gradient-gold">1</h3>
            <p className="text-gray-300 mt-2">
              Ecosistema que integra propósito, negocio y tecnología soberana.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 4: QUIÉNES SOMOS */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">
          Quiénes somos y de dónde venimos
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-display text-xl gradient-gold">Origen</h3>
            <p className="text-gray-300 mt-2">
              SOLYON nace de la historia real de un latino que creció entre crisis, calle,
              barras y lucha diaria, y que decidió convertir esa energía en un ecosistema DeepTech
              soberano diseñado para los que nunca tuvieron acceso.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-xl gradient-gold">Propósito</h3>
            <p className="text-gray-300 mt-2">
              Empoderar a la comunidad latina y a los creadores independientes con tecnología soberana,
              ayudándoles a construir empresas de alto rendimiento y una vida con propósito, sin tener
              que pedirle permiso al sistema.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 5: ROADMAP */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">
          Hacia dónde vamos
        </h2>
        <div className="card p-6 grid md:grid-cols-5 gap-4 text-sm text-gray-200">
          <div>
            <h3 className="font-display text-base gradient-gold">2025</h3>
            <p className="mt-1">
              Arcanum y Nexus se consolidan como núcleo cognitivo del ecosistema SOLYON.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base gradient-gold">2026</h3>
            <p className="mt-1">
              Expansión de Azoth y TruckBoss en el mercado de transporte y servicios en EE.UU.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base gradient-gold">2027</h3>
            <p className="mt-1">
              Plataforma de agentes autónomos SOLYON para empresas y proyectos de alto impacto.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base gradient-gold">2028</h3>
            <p className="mt-1">
              IA educativa para LATAM, combinando EL-VIA, Vita y Foundation.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base gradient-gold">2030</h3>
            <p className="mt-1">
              SOLYON Foundation operando en múltiples países, becando y conectando talento con DeepTech soberano.
            </p>
          </div>
        </div>
      </section>

      {/* LO QUE YA TENÍAS */}
      <Vision />
      <Ecosystem />
      <TechIP />
      <Purchase />
      <PartnersCTA />

      <footer className="section mt-24 border-t border-[#2A2A2A] pt-10 text-sm text-gray-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SOLYON Technologies. All rights reserved.</p>
          <p>Contacto: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
        </div>
      </footer>
    </main>
  );
}
