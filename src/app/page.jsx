import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Ecosystem from "@/components/Ecosystem";
import TechIP from "@/components/TechIP";
import Purchase from "@/components/Purchase";
import PartnersCTA from "@/components/PartnersCTA";
import DonateButton from "@/components/DonateButton";

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
            América Latina está llena de talento, resiliencia y creatividad, pero la mayoría
            de las personas no tienen acceso a DeepTech real. La infraestructura, las
            herramientas y los modelos avanzados siguen concentrados en manos de gigantes
            globales, lejos de los barrios, las calles y los emprendimientos que necesitan
            esa tecnología para sobrevivir y crecer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">
              Desigualdad tecnológica
            </h3>
            <p className="text-gray-300 mt-2">
              Millones quedan por fuera de la nueva economía porque no pueden pagar
              plataformas ni equipos pensados para realidades muy distintas a las nuestras.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">Dependencia total</h3>
            <p className="text-gray-300 mt-2">
              Dependemos de infraestructuras que no controlamos: datos, modelos y
              decisiones están fuera de LATAM.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">
              Talento subutilizado
            </h3>
            <p className="text-gray-300 mt-2">
              Hay una generación completa de latinos brillantes que no encuentra un puente
              entre su realidad y la DeepTech que está definiendo el futuro.
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
            SOLYON no es una sola herramienta, es una arquitectura completa. Visualmente,
            se organiza en tres capas: el{" "}
            <span className="text-[#FFD700] font-semibold">Arcanum Core</span> como cerebro
            cognitivo, el{" "}
            <span className="text-[#FFD700] font-semibold">Nexus Control Grid</span> como
            sistema nervioso operativo y el{" "}
            <span className="text-[#FFD700] font-semibold">Ecosistema de 10 módulos</span>{" "}
            donde viven las aplicaciones que tocan la vida real de las personas y las
            empresas.
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
              Motor cognitivo con memoria fractal, anti-alucinación y autoaprendizaje.
              Es el núcleo que procesa contexto profundo y toma decisiones con precisión.
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
            <h3 className="font-display text-xl gradient-gold">Nexus Control Grid</h3>
            <p className="text-gray-300 text-sm">
              Sistema nervioso que orquesta agentes, tareas y datos en tiempo real.
              Coordina cómo la inteligencia de Arcanum se despliega sobre cada flujo
              operativo.
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
              Aplicaciones soberanas para transporte, seguros, educación, hábitos,
              operación y filantropía. Todo conectado sobre la misma arquitectura
              cognitiva.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTOS ESTRELLA Y MONETIZACIÓN INMEDIATA */}
      <section className="section space-y-6" id="productos">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">
          Productos estrella para impulsar el ecosistema
        </h2>
        <p className="text-gray-200 max-w-3xl">
          Comenzamos monetizando de forma simple pero estratégica: un acceso
          premium al conocimiento, licencias de nuestra tecnología y un canal
          directo para que personas y empresas apoyen el laboratorio.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* KIT DIGITAL */}
          <div className="card p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl gradient-gold">
                SOLYON Kit Digital
              </h3>
              <p className="text-gray-300 mt-2">
                Entrada Premium al ecosistema: documentación estratégica,
                plantillas operativas y acceso a futuras actualizaciones.
                Pensado para founders, equipos y visionarios.
              </p>
              <p className="text-gray-100 mt-3 text-lg font-semibold">
                $99.000 COP · Pago seguro vía Wompi
              </p>
            </div>
            <div className="mt-4">
              <a href="#comprar" className="btn px-6 py-3 text-sm md:text-base">
                Comprar Kit Premium
              </a>
            </div>
          </div>

          {/* ARCANUM EMPRESAS */}
          <div className="card p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl gradient-gold">
                Arcanum para empresas
              </h3>
              <p className="text-gray-300 mt-2">
                Implementación de nuestro motor cognitivo y arquitectura de
                agentes para compañías, gobiernos y organizaciones que necesiten
                autonomía operativa real.
              </p>
              <p className="text-gray-100 mt-3 text-lg font-semibold">
                Programa piloto 2025 · Cupos limitados
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="px-6 py-3 text-sm md:text-base rounded-2xl border border-[#FFD700] text-[#FFD700] hover:bg-[#2D2D2D]"
              >
                Solicitar demo estratégica
              </a>
            </div>
          </div>

          {/* APOYO AL LABORATORIO */}
          <div className="card p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl gradient-gold">
                Apoya el laboratorio SOLYON
              </h3>
              <p className="text-gray-300 mt-2">
                Cada aporte mantiene vivo el laboratorio, la investigación y las
                becas que permitirán que más personas en LATAM accedan a
                tecnología soberana.
              </p>
              <p className="text-gray-100 mt-3 text-lg font-semibold">
                Donación sugerida: 50.000 COP
              </p>
            </div>
            <div className="mt-4">
              <DonateButton />
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMPACTO HUMANO */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">
          Impacto SOLYON
        </h2>
        <p className="text-gray-200 max-w-3xl">
          El núcleo de SOLYON no es solo código: es la decisión de que nadie se
          quede afuera de la revolución tecnológica por su código postal, su
          acento o su historia. Todo lo que construimos está pensado para volver
          la tecnología una extensión de la dignidad humana.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl gradient-gold">+1000</h3>
            <p className="text-gray-300 mt-2">
              Personas proyectadas a impactar en la primera fase LATAM del
              ecosistema.
            </p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl gradient-gold">3</h3>
            <p className="text-gray-300 mt-2">
              Sectores clave: transporte, educación y transformación personal,
              como puntos de entrada al cambio.
            </p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl gradient-gold">1</h3>
            <p className="text-gray-300 mt-2">
              Un mismo ecosistema que unifica propósito, negocio y tecnología
              soberana para toda una generación.
            </p>
          </div>
        </div>
      </section>

      {/* 5. QUIÉNES SOMOS Y DE DÓNDE VENIMOS */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">
          Quiénes somos y de dónde venimos
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-display text-xl gradient-gold">
              Desde la calle al DeepTech
            </h3>
            <p className="text-gray-300 mt-2">
              SOLYON nace de la historia de un joven que vio de cerca la
              violencia, la escasez y la injusticia, y que decidió transformar
              su propia vida a través del código, la disciplina y la visión.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-xl gradient-gold">
              Un propósito innegociable
            </h3>
            <p className="text-gray-300 mt-2">
              No venimos del privilegio, venimos del esfuerzo. Por eso nuestro
              compromiso es claro: que la tecnología de más alto nivel deje de
              ser un lujo y se convierta en una herramienta al servicio de
              quienes construyen el futuro desde abajo.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOJA DE RUTA – HACIA DÓNDE VAMOS */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">
          Hacia dónde vamos
        </h2>
        <div className="card p-6 grid md:grid-cols-5 gap-4 text-sm text-gray-200">
          <div>
            <h3 className="font-display text-base gradient-gold">2025</h3>
            <p className="mt-1">
              Arcanum y Nexus se consolidan como núcleo cognitivo del ecosistema
              SOLYON.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base gradient-gold">2026</h3>
            <p className="mt-1">
              Azoth y TruckBoss aceleran la transformación del transporte y los
              seguros en EE.UU. y LATAM.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base gradient-gold">2027</h3>
            <p className="mt-1">
              Lanzamiento de la plataforma de agentes autónomos SOLYON para
              empresas y gobiernos.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base gradient-gold">2028</h3>
            <p className="mt-1">
              IA educativa SOLYON para millones de estudiantes y trabajadores en
              LATAM.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base gradient-gold">2030</h3>
            <p className="mt-1">
              SOLYON Foundation operando en múltiples países, becando y
              conectando talento con DeepTech soberano.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUES ORIGINALES – DETALLE POR SECCIÓN */}
      <Vision />
      <Ecosystem />
      <TechIP />
      <Purchase />
      <PartnersCTA />

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
