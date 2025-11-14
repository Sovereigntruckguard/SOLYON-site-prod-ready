import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Ecosystem from "@/components/Ecosystem";
import TechIP from "@/components/TechIP";
import Purchase from "@/components/Purchase";
import PartnersCTA from "@/components/PartnersCTA";

export default function Page() {
  return (
    <main className="space-y-24 pb-24">
      {/* HERO – mantiene el slogan original dentro del componente */}
      <Hero />

      {/* 1. EL PROBLEMA QUE ESTAMOS ENFRENTANDO */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">
          El problema que estamos enfrentando
        </h2>
        <p className="text-gray-200 max-w-3xl">
          América Latina está llena de talento, resiliencia y creatividad, pero la mayoría de las personas
          no tienen acceso a DeepTech real. La infraestructura, las herramientas y los modelos avanzados
          siguen concentrados en manos de gigantes globales, lejos de los barrios, las calles y los emprendimientos
          que necesitan esa tecnología para sobrevivir y crecer.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-display text-xl gradient-gold">Desigualdad tecnológica</h3>
            <p className="text-gray-300 mt-2">
              Millones quedan por fuera de la nueva economía porque no pueden pagar plataformas ni equipos
              pensados para realidades muy distintas a las nuestras.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-xl gradient-gold">Dependencia total</h3>
            <p className="text-gray-300 mt-2">
              Dependemos de infraestructuras que no controlamos: datos, modelos y decisiones están fuera de LATAM.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-xl gradient-gold">Talento subutilizado</h3>
            <p className="text-gray-300 mt-2">
              Hay una generación completa de latinos brillantes que no encuentra un puente entre su realidad
              y la DeepTech que está definiendo el futuro.
            </p>
          </div>
        </div>
      </section>

      {/* 2. NUESTRA SOLUCIÓN: ECOSISTEMA COGNITIVO */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">
          Nuestra solución: un ecosistema cognitivo soberano
        </h2>
        <p className="text-gray-200 max-w-3xl">
          SOLYON construye un ecosistema DeepTech completo donde el cerebro cognitivo (Arcanum),
          el orquestador (Nexus) y las aplicaciones especializadas (Azoth, TruckBoss, EL-VIA, Vita)
          trabajan juntos para resolver problemas reales de negocio, educación y vida diaria.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">Arcanum</h3>
            <p className="text-gray-300 mt-2">
              Motor cognitivo con memoria fractal, anti-alucinación y autoaprendizaje, diseñado para decidir
              con contexto profundo y precisión.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">Nexus</h3>
            <p className="text-gray-300 mt-2">
              Orquestador de agentes, datos y flujos. Conecta todo el ecosistema y permite ejecutar estrategias
              complejas de manera automatizada.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">Aplicaciones</h3>
            <p className="text-gray-300 mt-2">
              Azoth, TruckBoss, EL-VIA, Vita y nuevos módulos que operan directamente sobre seguros, logística,
              educación y bienestar integral.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg gradient-gold">Acceso escalonado</h3>
            <p className="text-gray-300 mt-2">
              Desde un Kit Digital accesible hasta soluciones enterprise y alianzas con grandes organizaciones:
              misma tecnología, distinta profundidad.
            </p>
          </div>
        </div>
      </section>

      {/* 3. IMPACTO HUMANO */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">Impacto SOLYON</h2>
        <p className="text-gray-200 max-w-3xl">
          El núcleo de SOLYON no es solo código: es la decisión de que nadie se quede afuera de la revolución
          tecnológica por su código postal, su acento o su historia. Todo lo que construimos está pensado
          para volver la tecnología una extensión de la dignidad humana.
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
              Sectores clave: transporte, educación y transformación personal, como puntos de entrada al cambio.
            </p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-display text-3xl gradient-gold">1</h3>
            <p className="text-gray-300 mt-2">
              Un mismo ecosistema que unifica propósito, negocio y tecnología soberana para toda una generación.
            </p>
          </div>
        </div>
      </section>

      {/* 4. QUIÉNES SOMOS Y DE DÓNDE VENIMOS */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">
          Quiénes somos y de dónde venimos
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-display text-xl gradient-gold">Desde la calle al DeepTech</h3>
            <p className="text-gray-300 mt-2">
              SOLYON nace de la historia de un joven que vio de cerca la violencia, la escasez y la injusticia,
              y que decidió transformar su propia vida a través del código, la disciplina y la visión.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-xl gradient-gold">Un propósito innegociable</h3>
            <p className="text-gray-300 mt-2">
              No venimos del privilegio, venimos del esfuerzo. Por eso nuestro compromiso es claro:
              que la tecnología de más alto nivel deje de ser un lujo y se convierta en una herramienta
              al servicio de quienes construyen el futuro desde abajo.
            </p>
          </div>
        </div>
      </section>

      {/* 5. HOJA DE RUTA – HACIA DÓNDE VAMOS */}
      <section className="section space-y-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">
          Hacia dónde vamos
        </h2>
        <div className="card p-6 grid md:grid-cols-5 gap-4 text-sm text-gray-200">
          <div>
            <h3 className="font-display text-base gradient-gold">2025</h3>
            <p className="mt-1">Arcanum y Nexus se consolidan como núcleo cognitivo del ecosistema SOLYON.</p>
          </div>
          <div>
            <h3 className="font-display text-base gradient-gold">2026</h3>
            <p className="mt-1">Azoth y TruckBoss aceleran la transformación del transporte y los seguros en EE.UU. y LATAM.</p>
          </div>
          <div>
            <h3 className="font-display text-base gradient-gold">2027</h3>
            <p className="mt-1">Lanzamiento de la plataforma de agentes autónomos SOLYON para empresas y gobiernos.</p>
          </div>
          <div>
            <h3 className="font-display text-base gradient-gold">2028</h3>
            <p className="mt-1">IA educativa SOLYON para millones de estudiantes y trabajadores en LATAM.</p>
          </div>
          <div>
            <h3 className="font-display text-base gradient-gold">2030</h3>
            <p className="mt-1">SOLYON Foundation operando en múltiples países, becando y conectando talento con DeepTech soberano.</p>
          </div>
        </div>
      </section>

      {/* BLOQUES ORIGINALES */}
      <Vision />
      <Ecosystem />
      <TechIP />
      <Purchase />
      <PartnersCTA />

      {/* FOOTER */}
      <footer className="section mt-24 border-t border-[#2A2A2A] pt-10 text-sm text-gray-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SOLYON Technologies. All rights reserved.</p>
          <p>Contacto: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
        </div>
      </footer>
    </main>
  );
}
