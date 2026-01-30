export default function ImpactPage() {
  return (
    <main className="space-y-32 pb-32 bg-gradient-to-b from-[#0B0F14] via-[#0E131A] to-[#0B0F14]">

      {/* HERO */}
      <section className="section max-w-6xl mx-auto text-center space-y-6">
        <h1 className="font-display text-4xl md:text-5xl text-[#FFD700]">
          Impacto
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          El impacto de SOLYON no se mide en discursos.
          Se mide en sistemas que funcionan mejor y en personas
          que recuperan control sobre su trabajo y su futuro.
        </p>

        <p className="text-gray-400 text-sm">
          Tecnología aplicada · Sistema camionero · Dignidad operativa
        </p>
      </section>

      {/* IMPACTO HUMANO – CAMIONEROS LATINOS */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Impacto humano: camioneros latinos en EE. UU.
          </h2>

          <p className="text-gray-300 text-lg">
            El sistema camionero de Estados Unidos depende de cientos de miles
            de camioneros latinos que operan en condiciones de alta presión,
            barreras de idioma y desventaja estructural.
          </p>

          <p className="text-gray-400 text-sm">
            SOLYON diseña tecnología para reducir esa brecha:
            seguros más claros, educación operativa en inglés DOT,
            menos multas, menos errores y más estabilidad financiera.
          </p>
        </div>

        <img
          src="/visual/impact-human.png"
          alt="Impacto humano en camioneros latinos en Estados Unidos"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* IMPACTO EN EL SISTEMA CAMIONERO */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <img
          src="/visual/impact-operational.png"
          alt="Impacto operativo en el sistema camionero de EE. UU."
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />

        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Impacto en el sistema camionero de EE. UU.
          </h2>

          <p className="text-gray-300 text-lg">
            SOLYON no solo ayuda a individuos.
            Mejora el funcionamiento del sistema camionero completo.
          </p>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Menos pólizas mal cotizadas</li>
            <li>• Menos cancelaciones por errores operativos</li>
            <li>• Mejor evaluación de riesgo</li>
            <li>• Mayor estabilidad para aseguradoras y brokers</li>
            <li>• Transporte más seguro y predecible</li>
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
            infraestructura DeepTech soberana desde LATAM
            que opera en mercados altamente regulados como Estados Unidos.
          </p>

          <p className="text-gray-400 text-sm">
            Nuestra IA Arcanum —con memoria fractal jerárquica,
            fórmula anti-alucinación y autoaprendizaje—
            conecta y optimiza todo el ecosistema.
          </p>
        </div>

        <img
          src="/visual/impact-systemic.png"
          alt="Impacto sistémico de SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* IMPACTO INSTITUCIONAL */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <img
          src="/visual/impact-institutional.png"
          alt="Impacto institucional de SOLYON"
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
            Impacto medible, trazable y defendible
            ante aseguradoras, entidades públicas e inversionistas.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <p className="text-gray-400 text-lg">
          Mejorar la vida de los camioneros
          también mejora el sistema de transporte.
          Ese es el verdadero impacto.
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
