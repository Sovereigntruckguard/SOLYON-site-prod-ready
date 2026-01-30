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
            Orquesta razonamiento, memoria y toma de decisiones
            en sistemas productivos reales.
          </p>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Memoria estructurada y persistente</li>
            <li>• Control de contexto y razonamiento</li>
            <li>• Anti-alucinación por diseño</li>
            <li>• Integración directa con flujos operativos</li>
          </ul>
        </div>

        <img
          src="/visual/visual-arcanum-nexus.png"
          alt="Arcanum - Cerebro de IA SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* MOTOR DE COTIZACIÓN – TRUCKBOSS */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Motor de Cotización Inteligente
          </h2>

          <p className="text-gray-300 text-lg">
            Motor financiero y de underwriting diseñado para aseguradoras,
            MGAs y agencias de transporte.
          </p>

          <p className="text-gray-400 text-sm">
            Cotización en tiempo real · Down payment · Mensualidades · Decisión asistida
          </p>
        </div>

        <img
          src="/visual/product-truckboss-quoting-mobile.png"
          alt="Motor de cotización TruckBoss en móvil"
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

      {/* CIERRE */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <p className="text-gray-400 text-lg">
          SOLYON construye tecnología que se usa.
          No presentaciones. No promesas.
        </p>
      </section>

    </main>
  );
}
