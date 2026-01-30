export default function ImpactPage() {
  return (
    <main className="space-y-32 pb-32 bg-gradient-to-b from-[#0B0F14] via-[#0E131A] to-[#0B0F14]">

      {/* HERO */}
      <section className="section max-w-6xl mx-auto text-center space-y-6">
        <h1 className="font-display text-4xl md:text-5xl text-[#FFD700]">
          Impacto
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          El impacto de SOLYON no se mide en promesas,
          se mide en personas que recuperan control sobre su vida,
          su trabajo y su futuro.
        </p>

        <p className="text-gray-400 text-sm">
          Tecnología aplicada · Impacto real · Dignidad operativa
        </p>
      </section>

      {/* IMPACTO HUMANO */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Impacto humano
          </h2>

          <p className="text-gray-300 text-lg">
            SOLYON construye tecnología para personas que históricamente
            han sido ignoradas por los grandes sistemas tecnológicos.
          </p>

          <p className="text-gray-400 text-sm">
            Camioneros latinos, operadores independientes,
            personas con movilidad reducida y equipos sin acceso
            a herramientas reales.
          </p>
        </div>

        <img
          src="/visual/impact-human.png"
          alt="Impacto humano SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* IMPACTO OPERATIVO */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <img
          src="/visual/impact-operational.png"
          alt="Impacto operativo SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />

        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Impacto operativo
          </h2>

          <p className="text-gray-300 text-lg">
            La tecnología de SOLYON reduce fricción real:
            menos errores, menos multas, menos tiempo perdido,
            más decisiones correctas.
          </p>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Cotización precisa y transparente</li>
            <li>• Cumplimiento normativo asistido</li>
            <li>• Evidencia automática y trazabilidad</li>
            <li>• Control financiero y operativo</li>
          </ul>
        </div>
      </section>

      {/* IMPACTO SISTÉMICO */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Impacto sistémico
          </h2>

          <p className="text-gray-300 text-lg">
            SOLYON demuestra que es posible construir
            infraestructura DeepTech soberana desde LATAM,
            operando en mercados regulados como Estados Unidos.
          </p>

          <p className="text-gray-400 text-sm">
            Arcanum, nuestra IA con memoria fractal jerárquica,
            anti-alucinación y autoaprendizaje,
            conecta todas las tecnologías del ecosistema.
          </p>
        </div>

        <img
          src="/visual/impact-systemic.png"
          alt="Impacto sistémico SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* IMPACTO INSTITUCIONAL */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <img
          src="/visual/impact-institutional.png"
          alt="Impacto institucional SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />

        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Impacto institucional
          </h2>

          <p className="text-gray-300 text-lg">
            La tecnología SOLYON se valida en operación real
            a través de Sovereign TruckGuard LLC en Estados Unidos
            y en pilotos institucionales en Colombia.
          </p>

          <p className="text-gray-400 text-sm">
            Impacto medible, trazable y defendible ante aliados,
            entidades públicas e inversionistas.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <p className="text-gray-400 text-lg">
          El verdadero impacto no es escalar rápido.
          Es construir algo que resista el mundo real.
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
