export default function TechnologyPage() {
  return (
    <main className="space-y-32 pb-32 bg-gradient-to-b from-[#0B0F14] via-[#0E131A] to-[#0B0F14]">

      {/* HERO */}
      <section className="section max-w-6xl mx-auto text-center space-y-6">
        <h1 className="font-display text-4xl md:text-5xl text-[#FFD700]">
          Tecnología SOLYON
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          SOLYON desarrolla y opera tecnología propia.
          Sistemas reales, en producción, diseñados para entornos regulados,
          financieros y operativos.
        </p>

        <p className="text-gray-400 text-sm">
          DeepTech construida en Medellín · Operada en EE. UU. · Escalable globalmente
        </p>
      </section>

      {/* ARCANUM */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Arcanum · Cerebro de Inteligencia Artificial
          </h2>

          <p className="text-gray-300 text-lg">
            Arcanum es el motor cognitivo propietario de SOLYON.
            Diseñado para operar inteligencia artificial en sistemas reales,
            Arcanum incorpora <strong>memoria fractal jerárquica</strong>,
            una <strong>fórmula anti-alucinación</strong> y capacidades de
            <strong> autoaprendizaje continuo</strong>.
          </p>

          <p className="text-gray-300 text-lg">
            Arcanum está conectado a todas las tecnologías del ecosistema SOLYON,
            orquestando decisiones, contexto y ejecución de forma centralizada.
          </p>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Memoria fractal jerárquica (contexto persistente)</li>
            <li>• Fórmula anti-alucinación propia</li>
            <li>• Autoaprendizaje y ajuste dinámico</li>
            <li>• Orquestación de flujos y agentes</li>
            <li>• Integración directa con sistemas productivos</li>
          </ul>

          <p className="text-gray-400 text-sm">
            Estado legal:{" "}
            <span className="text-[#FFD700] font-semibold">
              Patente provisional presentada en Estados Unidos
            </span>
          </p>
        </div>

        <img
          src="/visual/visual-arcanum-nexus.png"
          alt="Arcanum - Cerebro de IA SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* TRUCKBOSS – MOTOR DE COTIZACIÓN (B2B) */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            TruckBoss · Motor de Cotización
          </h2>

          <p className="text-gray-300 text-lg">
            Motor financiero y de underwriting diseñado para agencias de seguros,
            MGAs y brokers de transporte.
          </p>

          <p className="text-gray-400 text-sm">
            Adaptable a reglas por carrier · Down payment · Mensualidades ·
            Decisión asistida por IA
          </p>
        </div>

        <img
          src="/visual/product-truckboss-quoting-mobile.png"
          alt="TruckBoss - Motor de cotización adaptable"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* TRUCKBOSS – CONTROL CENTER (B2C) */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            TruckBoss · Control Center del Camionero
          </h2>

          <p className="text-gray-300 text-lg">
            Centro operativo del camionero latino.
            Gestión de seguro, pagos, documentos, alertas,
            comunidad y herramientas PRO.
          </p>

          <p className="text-gray-400 text-sm">
            Un solo punto de control para toda la operación del transporte.
          </p>
        </div>

        <img
          src="/visual/product-truckboss-dashboard-mobile.png"
          alt="TruckBoss - Control Center del camionero"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* COLDCHAIN INTELLIGENCE */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            ColdChain Intelligence
          </h2>

          <p className="text-gray-300 text-lg">
            Plataforma de inteligencia y seguro telemático
            para brokers de carga refrigerada.
          </p>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Riesgo en tiempo real</li>
            <li>• Evidencia automática</li>
            <li>• Prevención de pérdidas</li>
            <li>• Operación orientada a brokers</li>
          </ul>
        </div>

        <img
          src="/visual/product-coldchain-laptop.png"
          alt="ColdChain Intelligence - Plataforma para brokers"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* AZOTH CRM */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            AZOTH · CRM & Control Center
          </h2>

          <p className="text-gray-300 text-lg">
            Sistema operativo interno de SOLYON.
            Control total de clientes, flujos, cumplimiento,
            automatización y evidencia.
          </p>

          <p className="text-gray-400 text-sm">
            Diseño enterprise · Operación crítica · Control soberano
          </p>
        </div>

        <img
          src="/visual/product-azoth-desktop.png"
          alt="AZOTH CRM - Control Center SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* EL-VÍA */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            EL-VÍA · DOT Express
          </h2>

          <p className="text-gray-300 text-lg">
            Aplicación móvil para camioneros latinos.
            Inglés DOT aplicado a inspecciones reales,
            cumplimiento y operación diaria.
          </p>

          <p className="text-gray-400 text-sm">
            Educación práctica · Menos multas · Más contratos
          </p>
        </div>

        <img
          src="/visual/product-elvia-mobile.png"
          alt="EL-VÍA DOT Express - App móvil"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* SOLYON MOVE */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            SOLYON Move · Movilidad accesible con IA
          </h2>

          <p className="text-gray-300 text-lg">
            Piloto institucional enfocado en movilidad accesible
            para personas con movilidad reducida.
          </p>

          <p className="text-gray-400 text-sm">
            Planificación de viaje y análisis de rutas asistidos por IA,
            integrados con ciudades y entidades públicas.
          </p>
        </div>

        <img
          src="/visual/solyon_move_institucional.png"
          alt="SOLYON Move - Movilidad accesible en Medellín"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* CIERRE */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <p className="text-gray-400 text-lg">
          SOLYON construye tecnología que se usa.
          No presentaciones. No promesas.
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
