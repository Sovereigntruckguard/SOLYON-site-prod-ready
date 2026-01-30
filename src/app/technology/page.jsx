export default function TechnologyPage() {
  return (
    <main className="space-y-32 pb-32 bg-gradient-to-b from-[#0B0F14] via-[#0E131A] to-[#0B0F14]">

      {/* HERO TECNOLOGÍA */}
      <section className="section max-w-6xl mx-auto text-center space-y-6">
        <h1 className="font-display text-4xl md:text-5xl text-[#FFD700]">
          Tecnología SOLYON
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          La tecnología de SOLYON no es un producto aislado.
          Es una <strong>arquitectura cognitiva integrada</strong> diseñada para
          operar inteligencia artificial en entornos reales, regulados y de alta complejidad.
        </p>

        <p className="text-gray-400 text-sm">
          Diseñada en Medellín · Operada en Estados Unidos · Escalable globalmente
        </p>
      </section>

      {/* ARCANUM */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Arcanum · Motor Cognitivo
          </h2>

          <p className="text-gray-300 text-lg">
            Arcanum es el cerebro de inteligencia artificial de SOLYON.
            Diseñado para razonamiento, memoria, control y toma de decisiones
            en sistemas productivos reales.
          </p>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Memoria estructurada y persistente</li>
            <li>• Contexto jerárquico y control de razonamiento</li>
            <li>• Anti-alucinación por diseño</li>
            <li>• Integración con sistemas reales</li>
          </ul>
        </div>

        <img
          src="/visual/visual-arcanum-nexus.png"
          alt="Arcanum - Cerebro de IA SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* NEXUS */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Nexus · Orquestación Operativa
          </h2>

          <p className="text-gray-300 text-lg">
            Nexus es el sistema nervioso de SOLYON.
            Coordina agentes, flujos, eventos y decisiones en tiempo real,
            permitiendo que la inteligencia se ejecute con control y trazabilidad.
          </p>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Orquestación multi-agente</li>
            <li>• Flujos determinísticos y cognitivos</li>
            <li>• Observabilidad y control</li>
            <li>• Preparado para entornos regulados</li>
          </ul>
        </div>

        <img
          src="/visual/visual-arcanum-nexus.png"
          alt="Nexus - Orquestación cognitiva SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* IA APLICADA */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Inteligencia Artificial Aplicada
          </h2>

          <p className="text-gray-300 text-lg">
            SOLYON implementa inteligencia artificial aplicada en transporte,
            seguros, logística, cumplimiento normativo y movilidad accesible.
          </p>

          <p className="text-gray-400 text-sm">
            No construimos demos. Construimos sistemas que operan con riesgo,
            evidencia y responsabilidad.
          </p>
        </div>

        <img
          src="/visual/visual-us-logistics-ai.png"
          alt="IA aplicada SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* INFRAESTRUCTURA */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <h2 className="font-display text-3xl text-[#FFD700]">
          Infraestructura & Cloud
        </h2>

        <p className="text-gray-300 text-lg">
          Arquitectura desplegada sobre <strong>Google Cloud Platform</strong>,
          preparada para productos de misión crítica.
        </p>

        <p className="text-gray-400 text-sm">
          SOLYON participa en el programa Google Cloud Startups.
        </p>
      </section>

      {/* IP */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Propiedad Intelectual
          </h2>

          <p className="text-gray-300 text-lg">
            Desarrollo propio en arquitectura cognitiva, memoria estructurada,
            anti-alucinación y orquestación de agentes.
          </p>

          <p className="text-gray-400 text-sm">
            Estado: <span className="text-[#FFD700] font-semibold">Patent Pending</span>
          </p>
        </div>

        <img
          src="/visual/visual-deeptech-ip.png"
          alt="Propiedad intelectual DeepTech SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* CIERRE */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <p className="text-gray-400 text-lg">
          SOLYON no compite por atención.
          Compite por <strong>capacidad tecnológica real</strong>.
        </p>
      </section>

    </main>
  );
}
