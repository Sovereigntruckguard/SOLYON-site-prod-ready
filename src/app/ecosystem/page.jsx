export default function EcosystemPage() {
  return (
    <main className="space-y-28 pb-32 bg-gradient-to-b from-[#0B0F14] via-[#0E131A] to-[#0B0F14]">

      {/* HERO */}
      <section className="section max-w-6xl mx-auto text-center space-y-6">
        <h1 className="font-display text-4xl md:text-5xl text-[#FFD700]">
          Ecosistema SOLYON
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          SOLYON es un ecosistema DeepTech integrado.
          Todas nuestras tecnologías operan conectadas a un mismo cerebro
          de inteligencia artificial y a una infraestructura cloud de nivel global.
        </p>

        <p className="text-gray-400 text-sm">
          Diseñado en Medellín · Operado en Estados Unidos · Infraestructura Google Cloud
        </p>
      </section>

      {/* ARQUITECTURA */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Arquitectura Cognitiva Integrada
          </h2>

          <p className="text-gray-300 text-lg">
            El ecosistema SOLYON se construye sobre una arquitectura centralizada
            de inteligencia artificial.
            <strong> Arcanum</strong> actúa como cerebro cognitivo,
            mientras <strong>Nexus</strong> orquesta flujos, agentes y decisiones.
          </p>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Memoria fractal jerárquica</li>
            <li>• Fórmula anti-alucinación propia</li>
            <li>• Autoaprendizaje continuo</li>
            <li>• Orquestación multi-agente</li>
          </ul>

          <p className="text-gray-400 text-sm">
            Tecnología con patente provisional presentada en Estados Unidos.
          </p>
        </div>

        <img
          src="/visual/visual-arcanum-nexus.png"
          alt="Arquitectura cognitiva SOLYON"
          className="max-w-sm w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* INFRAESTRUCTURA */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <h2 className="font-display text-3xl text-[#FFD700]">
          Infraestructura & Validación
        </h2>

        <p className="text-gray-300 text-lg">
          Todas las tecnologías SOLYON se despliegan sobre
          <strong> Google Cloud Platform</strong>,
          utilizando infraestructura escalable, segura y preparada
          para sistemas de misión crítica.
        </p>

        <p className="text-gray-400 text-sm">
          SOLYON participa en el programa <strong>Google for Startups</strong>.
        </p>
      </section>

      {/* MODELO OPERATIVO USA */}
      <section className="section max-w-6xl mx-auto text-center space-y-6">
        <h2 className="font-display text-3xl text-[#FFD700]">
          Modelo Operativo & Distribución en EE. UU.
        </h2>

        <p className="text-gray-300 text-lg max-w-4xl mx-auto">
          La tecnología SOLYON no se queda en laboratorio.
          Se prueba, valida y mejora continuamente dentro de un modelo
          de negocio real en Estados Unidos.
        </p>

        <p className="text-gray-300 text-lg max-w-4xl mx-auto">
          <strong>Sovereign TruckGuard LLC</strong> es la operación aseguradora
          y el laboratorio vivo donde nuestras tecnologías se utilizan en
          escenarios reales, con clientes reales y flujos financieros reales.
        </p>

        <p className="text-gray-400 text-sm max-w-4xl mx-auto">
          Sovereign TruckGuard LLC actúa además como
          <strong> distribuidor autorizado de la tecnología SOLYON</strong>
          para el mercado estadounidense.
        </p>
      </section>

      {/* PRODUCTOS */}
      <section className="section max-w-6xl mx-auto space-y-20">

        {/* TRUCKBOSS */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-[#FFD700]">
              TruckBoss
            </h3>

            <p className="text-gray-300 text-base">
              Plataforma central del ecosistema camionero.
              Incluye motor de cotización B2B para agencias
              y centro operativo B2C para camioneros.
            </p>

            <p className="text-gray-400 text-sm">
              Conectado directamente a Arcanum para decisión financiera y operativa.
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <img
              src="/visual/product-truckboss-quoting-mobile.png"
              alt="TruckBoss Motor de Cotización"
              className="w-40 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            />
            <img
              src="/visual/product-truckboss-dashboard-mobile.png"
              alt="TruckBoss Control Center"
              className="w-40 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        {/* COLDCHAIN */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-[#FFD700]">
              ColdChain Intelligence
            </h3>

            <p className="text-gray-300 text-base">
              Plataforma de inteligencia y seguro telemático
              para brokers de carga refrigerada.
            </p>

            <p className="text-gray-400 text-sm">
              Riesgo, evidencia y prevención de pérdidas en tiempo real.
            </p>
          </div>

          <img
            src="/visual/product-coldchain-laptop.png"
            alt="ColdChain Intelligence"
            className="max-w-sm w-full rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* AZOTH */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-[#FFD700]">
              AZOTH
            </h3>

            <p className="text-gray-300 text-base">
              CRM y centro de control interno del ecosistema SOLYON.
              Automatización, cumplimiento, clientes y evidencia.
            </p>

            <p className="text-gray-400 text-sm">
              Control soberano de la operación.
            </p>
          </div>

          <img
            src="/visual/product-azoth-desktop.png"
            alt="AZOTH CRM"
            className="max-w-sm w-full rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* EL-VÍA */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-[#FFD700]">
              EL-VÍA · DOT Express
            </h3>

            <p className="text-gray-300 text-base">
              Aplicación móvil educativa para camioneros latinos.
              Inglés DOT aplicado a inspecciones reales.
            </p>

            <p className="text-gray-400 text-sm">
              Educación práctica integrada al ecosistema.
            </p>
          </div>

          <img
            src="/visual/product-elvia-mobile.png"
            alt="EL-VÍA DOT Express"
            className="w-40 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* SOLYON MOVE */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-[#FFD700]">
              SOLYON Move
            </h3>

            <p className="text-gray-300 text-base">
              Piloto institucional de movilidad accesible
              para personas con movilidad reducida.
            </p>

            <p className="text-gray-400 text-sm">
              Integrado a ciudades y entidades públicas.
            </p>
          </div>

          <img
            src="/visual/solyon_move_institucional.png"
            alt="SOLYON Move"
            className="max-w-sm w-full rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          />
        </div>

      </section>

      {/* CIERRE */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <p className="text-gray-400 text-lg">
          Todas las tecnologías SOLYON comparten una misma inteligencia,
          una misma infraestructura y una misma visión.
        </p>
      </section>

      {/* FOOTER – MISMO DEL HOME */}
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

    </main>
  );
}
