export default function AboutPage() {
  return (
    <main className="space-y-32 pb-32 bg-gradient-to-b from-[#0B0F14] via-[#0E131A] to-[#0B0F14]">

      {/* HERO */}
      <section className="section max-w-6xl mx-auto text-center space-y-6">
        <h1 className="font-display text-4xl md:text-5xl text-[#FFD700]">
          Nosotros
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          SOLYON no es una empresa construida desde el privilegio.
          Es un laboratorio DeepTech construido desde la necesidad,
          la fricción y la realidad.
        </p>

        <p className="text-gray-400 text-sm">
          Medellín, Colombia · Operación en Estados Unidos · Tecnología propia en producción
        </p>
      </section>

      {/* IDENTIDAD */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Qué es SOLYON
          </h2>

          <p className="text-gray-300 text-lg">
            SOLYON Technologies S.A.S. es un laboratorio DeepTech
            que diseña y opera inteligencia artificial aplicada
            para industrias reales, reguladas y de alta fricción.
          </p>

          <p className="text-gray-400 text-sm">
            No somos una startup de presentaciones.
            Somos una operación tecnológica que funciona bajo presión real.
          </p>
        </div>

        <img
          src="/visual/about-lab.png"
          alt="Laboratorio tecnológico SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* ORIGEN */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <img
          src="/visual/about-origin.png"
          alt="Origen real de SOLYON"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />

        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            De dónde venimos
          </h2>

          <p className="text-gray-300 text-lg">
            SOLYON nace desde contextos donde la tecnología no llega,
            donde no hay capital, ni contactos, ni segundas oportunidades.
          </p>

          <p className="text-gray-400 text-sm">
            Esa experiencia define cómo diseñamos:
            sistemas simples, resistentes y orientados a sobrevivir en la realidad.
          </p>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <h2 className="font-display text-3xl text-[#FFD700]">
          Nuestra filosofía
        </h2>

        <p className="text-gray-300 text-lg">
          Construimos tecnología como se construyen los sistemas que importan:
          desde abajo, con fricción, con responsabilidad y con impacto real.
        </p>

        <p className="text-gray-400 text-sm">
          La estética viene después. La operación es primero.
        </p>
      </section>

      {/* PRESENTE */}
      <section className="section max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-[#FFD700]">
            Dónde estamos hoy
          </h2>

          <p className="text-gray-300 text-lg">
            Hoy SOLYON opera tecnología propia en Estados Unidos,
            valida sus sistemas en negocio real a través de
            Sovereign TruckGuard LLC y desarrolla pilotos
            institucionales en Colombia.
          </p>

          <p className="text-gray-400 text-sm">
            Nuestra IA Arcanum cuenta con patente provisional presentada
            y conecta todas las tecnologías del ecosistema.
          </p>
        </div>

        <img
          src="/visual/about-present.png"
          alt="SOLYON en operación real"
          className="max-w-md w-full rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </section>

      {/* CIERRE */}
      <section className="section max-w-5xl mx-auto text-center space-y-6">
        <p className="text-gray-400 text-lg">
          SOLYON no busca impresionar.
          Busca construir tecnología que resista el mundo real.
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
