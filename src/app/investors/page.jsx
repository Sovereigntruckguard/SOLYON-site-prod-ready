export default function InvestorsPage() {
  return (
    <main className="space-y-32 pb-32 bg-gradient-to-b from-[#0B0F14] via-[#0E131A] to-[#0B0F14]">

      {/* HERO */}
      <section className="section max-w-6xl mx-auto text-center space-y-6">
        <h1 className="font-display text-4xl md:text-5xl text-[#FFD700]">
          Inversionistas
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          SOLYON construye tecnología DeepTech en operación real.
          Esta página está dirigida a inversionistas que entienden
          sistemas, riesgo y defensabilidad.
        </p>

        <p className="text-gray-400 text-sm">
          Tecnología propia · Operación validada · Escalamiento controlado
        </p>
      </section>

      {/* TESIS */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Tesis de inversión
          </h2>

          <p className="text-gray-300 text-lg">
            SOLYON no construye aplicaciones aisladas.
            Construye infraestructura cognitiva aplicada
            a industrias reguladas y de alta fricción.
          </p>

          <p className="text-gray-400 text-sm">
            Nuestra ventaja no es el marketing.
            Es la combinación de tecnología propia,
            operación real y conocimiento profundo del problema.
          </p>
        </div>

        <img
          src="/visual/investors-thesis.png"
          alt="Tesis de inversión SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* DEFENSABILIDAD */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <img
          src="/visual/investors-ip.png"
          alt="Defensabilidad tecnológica SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />

        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Defensabilidad tecnológica
          </h2>

          <p className="text-gray-300 text-lg">
            La inteligencia artificial de SOLYON —Arcanum—
            cuenta con memoria fractal jerárquica,
            fórmula anti-alucinación y autoaprendizaje.
          </p>

          <p className="text-gray-400 text-sm">
            Patente provisional presentada en Estados Unidos.
            Arquitectura diseñada para ser difícil de replicar.
          </p>
        </div>
      </section>

      {/* VALIDACIÓN */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Validación en operación real
          </h2>

          <p className="text-gray-300 text-lg">
            SOLYON valida su tecnología dentro de su propio
            modelo de negocio en Estados Unidos.
          </p>

          <p className="text-gray-400 text-sm">
            <strong>Sovereign TruckGuard LLC</strong> opera como
            laboratorio vivo, cliente cero y
            distribuidor autorizado de la tecnología SOLYON
            en el mercado estadounidense.
          </p>
        </div>

        <img
          src="/visual/investors-validation.png"
          alt="Validación operativa SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* INFRAESTRUCTURA */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <h2 className="font-display text-3xl text-[#FFD700]">
          Infraestructura & Escalabilidad
        </h2>

        <p className="text-gray-300 text-lg">
          Toda la infraestructura de SOLYON está desplegada sobre
          <strong> Google Cloud Platform</strong>,
          con arquitectura escalable, segura y preparada
          para crecimiento controlado.
        </p>

        <p className="text-gray-400 text-sm">
          SOLYON participa en el programa <strong>Google for Startups</strong>.
        </p>
      </section>

      {/* PERFIL DE INVERSOR */}
      <section className="section max-w-6xl mx-auto text-center space-y-6">
        <h2 className="font-display text-3xl text-[#FFD700]">
          Perfil de aliado inversionista
        </h2>

        <p className="text-gray-300 text-lg">
          SOLYON busca inversionistas estratégicos,
          no capital pasivo.
        </p>

        <ul className="text-gray-400 text-sm space-y-2">
          <li>• Entienden DeepTech y sistemas complejos</li>
          <li>• Aportan criterio, red o experiencia</li>
          <li>• Buscan crecimiento sostenible</li>
          <li>• Valoran defensabilidad y ejecución real</li>
        </ul>
      </section>

      {/* CIERRE */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <p className="text-gray-400 text-lg">
          SOLYON no busca convencer.
          Busca construir con quienes entienden el largo plazo.
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
