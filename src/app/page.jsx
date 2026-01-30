"use client";

import DynamicHero from "@/components/DynamicHero";
import { useLanguage } from "@/lib/language";

export default function Page() {
  const { lang } = useLanguage();

  return (
    <main className="space-y-32 pb-32 bg-gradient-to-b from-[#0B0F14] via-[#0E131A] to-[#0B0F14]">
      <DynamicHero />
      <SpanishHome />
    </main>
  );
}

/* =========================
   HOME · ESPAÑOL (OFICIAL)
   ========================= */

function SpanishHome() {
  return (
    <>
      {/* QUIÉNES SOMOS */}
      <section className="section max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl text-[#FFD700]">
              SOLYON Technologies S.A.S.
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Somos un laboratorio <strong>DeepTech</strong> con base en Medellín,
              Colombia. Diseñamos y operamos tecnología de inteligencia artificial
              aplicada para industrias reales, con foco en transporte, seguros,
              logística y movilidad accesible.
            </p>

            <p className="text-gray-400 text-sm">
              Tecnología en operación en Estados Unidos · Pilotos institucionales en Colombia
            </p>
          </div>
        </div>
      </section>

      {/* ARCANUM */}
      <section className="section max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h3 className="font-display text-3xl text-[#FFD700]">
              Arcanum · Cerebro de IA Propietario
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              Arcanum es nuestro motor cognitivo de inteligencia artificial,
              desarrollado sobre infraestructura de <strong>Google Cloud Platform (GCP)</strong>,
              con arquitectura propia orientada a razonamiento, automatización
              y operación empresarial.
            </p>

            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Memoria estructurada y persistente</li>
              <li>• Orquestación de agentes y flujos (Nexus)</li>
              <li>• Integración directa con sistemas reales</li>
              <li>• Arquitectura soberana, modular y extensible</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="/visual/visual-arcanum-nexus.png"
              alt="Arcanum y Nexus - Plataforma Cognitiva SOLYON"
              className="max-w-md w-full rounded-2xl opacity-85 shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS EN EE.UU. */}
      <section className="section max-w-6xl mx-auto space-y-16">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h3 className="font-display text-3xl text-[#FFD700]">
              Tecnologías en operación · Estados Unidos
            </h3>

            <p className="text-gray-300 text-lg">
              A través de <strong>Sovereign TruckGuard LLC</strong>, nuestra tecnología
              se distribuye y aplica en el ecosistema camionero estadounidense.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/visual/visual-us-logistics-ai.png"
              alt="Tecnología SOLYON aplicada al ecosistema camionero en EE.UU."
              className="max-w-md w-full rounded-2xl opacity-85 shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8 bg-[#111827]/60 backdrop-blur">
            <h4 className="font-display text-xl text-[#FFD700]">
              ColdChain Intelligence
            </h4>
            <p className="text-gray-300 text-sm mt-2">
              Seguro telemático en fase PMV para brokers de carga refrigerada,
              enfocado en riesgo operativo, trazabilidad y análisis de eventos.
            </p>
          </div>

          <div className="card p-8 bg-[#111827]/60 backdrop-blur">
            <h4 className="font-display text-xl text-[#FFD700]">
              Motor de Cotización Inteligente
            </h4>
            <p className="text-gray-300 text-sm mt-2">
              Motor adaptable al underwriting de aseguradoras, diseñado para
              automatizar cotizadores, pricing y escenarios de riesgo.
            </p>
          </div>

          <div className="card p-8 bg-[#111827]/60 backdrop-blur">
            <h4 className="font-display text-xl text-[#FFD700]">
              EL-VÍA · Inglés aplicado DOT
            </h4>
            <p className="text-gray-300 text-sm mt-2">
              App freemium para camioneros latinos enfocada en inglés operativo
              para inspecciones, cumplimiento y comunicación DOT.
            </p>
          </div>

          <div className="card p-8 bg-[#111827]/60 backdrop-blur">
            <h4 className="font-display text-xl text-[#FFD700]">
              CRM Propietario SOLYON
            </h4>
            <p className="text-gray-300 text-sm mt-2">
              Sistema interno de operación, clientes, flujos y automatización,
              conectado directamente al cerebro Arcanum.
            </p>
          </div>
        </div>
      </section>

      {/* SOLYON MOVE */}
      <section className="section max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h3 className="font-display text-3xl text-[#FFD700]">
              SOLYON Move · Movilidad accesible con IA
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              SOLYON Move es nuestro piloto institucional enfocado en movilidad accesible
              para personas con movilidad reducida.
            </p>

            <p className="text-gray-400 text-sm">
              Sistemas de planificación de viaje y análisis de rutas asistidos por
              inteligencia artificial, diseñados para integrarse con ciudades
              y entidades públicas.
            </p>

            <p className="text-[#FFD700] text-sm">
              Piloto institucional activo en Medellín.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/visual/solyon_move_institucional.png"
              alt="SOLYON Move - Movilidad accesible en Medellín"
              className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </section>

      {/* TECNOLOGÍA & IP */}
      <section className="section max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h3 className="font-display text-3xl text-[#FFD700]">
              Tecnología & Propiedad Intelectual
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              SOLYON desarrolla propiedad intelectual propia en inteligencia artificial,
              automatización y orquestación cognitiva, conectada a nuestro cerebro Arcanum.
            </p>

            <p className="text-gray-400 text-sm">
              Estado actual: <span className="text-[#FFD700] font-semibold">Patent Pending</span>
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/visual/visual-deeptech-ip.png"
              alt="Tecnología e IP DeepTech SOLYON"
              className="max-w-md w-full rounded-2xl opacity-85 shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section max-w-6xl mx-auto">
        <div className="space-y-6">
          <h3 className="font-display text-3xl text-[#FFD700]">
            Alianzas & Contacto Institucional
          </h3>

          <p className="text-gray-300 text-lg">
            Buscamos alianzas estratégicas con aseguradoras, brokers, fondos,
            corporativos, entidades públicas y programas de innovación.
          </p>

          <div className="space-y-2 text-gray-300">
            <p>
              📧{" "}
              <a href="mailto:sergio@solyontechnologies.com" className="text-[#FFD700]">
                sergio@solyontechnologies.com
              </a>
            </p>
            <p>
              📱{" "}
              <a
                href="https://wa.me/573147903517"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700]"
              >
                +57 314 790 3517
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER INSTITUCIONAL (SIN MAPA) */}
      <footer className="section border-t border-white/10 pt-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm text-gray-400">
          <div>
            <p className="text-gray-200 font-medium">SOLYON Technologies S.A.S.</p>
            <p>Carrera 65 # 1 Sur - 21</p>
            <p>Medellín, Colombia</p>
            <p>
              NIT: <span className="text-gray-200 font-semibold">902028596-1</span>
            </p>
          </div>

          <div>
            <p className="text-gray-200 font-medium">Contacto</p>
            <p>Email: sergio@solyontechnologies.com</p>
            <p>WhatsApp: +57 314 790 3517</p>
          </div>

          <div>
            <p className="text-gray-200 font-medium">Legal</p>
            <p>© {new Date().getFullYear()} SOLYON Technologies S.A.S.</p>
            <p>Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
