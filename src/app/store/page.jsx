export default function StorePage() {
  return (
    <main className="space-y-28 pb-32 bg-gradient-to-b from-[#0B0F14] via-[#0E131A] to-[#0B0F14]">

      {/* HERO */}
      <section className="section max-w-6xl mx-auto text-center space-y-6">
        <h1 className="font-display text-4xl md:text-5xl text-[#FFD700]">
          SOLYON Store
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          Acceso estructurado a tecnología SOLYON.
          Capacidades reales, operativas y validadas en producción.
        </p>

        <p className="text-gray-400 text-sm">
          Tecnología · Pilotos · Licenciamiento · Acceso institucional
        </p>
      </section>

      {/* GRID DE PRODUCTOS */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* TRUCKBOSS B2B */}
        <div className="card p-8 bg-[#111827]/60 backdrop-blur space-y-4">
          <img
            src="/visual/product-truckboss-quoting-mobile.png"
            alt="TruckBoss Motor de Cotización"
            className="w-40 rounded-xl"
          />

          <h2 className="font-display text-2xl text-[#FFD700]">
            TruckBoss · Motor de Cotización (B2B)
          </h2>

          <p className="text-gray-300 text-sm">
            Motor financiero y de underwriting adaptable a aseguradoras,
            MGAs y agencias de transporte.
          </p>

          <p className="text-gray-400 text-xs">
            Licenciamiento · Integración · Distribución
          </p>

          <a
            href="/contact"
            className="inline-block mt-2 text-[#FFD700] text-sm hover:underline"
          >
            Solicitar acceso →
          </a>
        </div>

        {/* TRUCKBOSS PRO */}
        <div className="card p-8 bg-[#111827]/60 backdrop-blur space-y-4">
          <img
            src="/visual/product-truckboss-dashboard-mobile.png"
            alt="TruckBoss Control Center"
            className="w-40 rounded-xl"
          />

          <h2 className="font-display text-2xl text-[#FFD700]">
            TruckBoss · Control Center (PRO)
          </h2>

          <p className="text-gray-300 text-sm">
            Centro operativo del camionero latino:
            seguro, pagos, documentos, alertas y herramientas PRO.
          </p>

          <p className="text-gray-400 text-xs">
            Suscripción · Activación progresiva
          </p>

          <a
            href="/contact"
            className="inline-block mt-2 text-[#FFD700] text-sm hover:underline"
          >
            Solicitar acceso →
          </a>
        </div>

        {/* COLDCHAIN */}
        <div className="card p-8 bg-[#111827]/60 backdrop-blur space-y-4">
          <img
            src="/visual/product-coldchain-laptop.png"
            alt="ColdChain Intelligence"
            className="w-48 rounded-xl"
          />

          <h2 className="font-display text-2xl text-[#FFD700]">
            ColdChain Intelligence
          </h2>

          <p className="text-gray-300 text-sm">
            Plataforma de inteligencia y seguro telemático
            para brokers de carga refrigerada.
          </p>

          <p className="text-gray-400 text-xs">
            Piloto · Validación · Escalamiento
          </p>

          <a
            href="/contact"
            className="inline-block mt-2 text-[#FFD700] text-sm hover:underline"
          >
            Solicitar piloto →
          </a>
        </div>

        {/* EL-VÍA */}
        <div className="card p-8 bg-[#111827]/60 backdrop-blur space-y-4">
          <img
            src="/visual/product-elvia-mobile.png"
            alt="EL-VÍA DOT Express"
            className="w-32 rounded-xl"
          />

          <h2 className="font-display text-2xl text-[#FFD700]">
            EL-VÍA · DOT Express
          </h2>

          <p className="text-gray-300 text-sm">
            Aplicación móvil educativa para camioneros latinos.
            Inglés DOT aplicado a inspecciones reales.
          </p>

          <p className="text-gray-400 text-xs">
            Acceso freemium · Suscripción PRO
          </p>

          <a
            href="/contact"
            className="inline-block mt-2 text-[#FFD700] text-sm hover:underline"
          >
            Solicitar acceso →
          </a>
        </div>

      </section>

      {/* ACCESO INSTITUCIONAL */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <h2 className="font-display text-3xl text-[#FFD700]">
          Acceso institucional
        </h2>

        <p className="text-gray-300 text-lg">
          Para gobiernos, entidades públicas, fondos o corporativos,
          SOLYON ofrece pilotos, despliegues y licenciamiento institucional.
        </p>

        <p className="text-gray-400 text-sm">
          Evaluación técnica · Acompañamiento · Implementación controlada
        </p>

        <a
          href="/contact"
          className="inline-block text-[#FFD700] text-sm hover:underline"
        >
          Iniciar conversación institucional →
        </a>
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
