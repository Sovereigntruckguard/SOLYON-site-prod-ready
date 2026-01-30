export default function ContactPage() {
  return (
    <main className="space-y-28 pb-32 bg-gradient-to-b from-[#0B0F14] via-[#0E131A] to-[#0B0F14]">

      {/* HERO */}
      <section className="section max-w-6xl mx-auto text-center space-y-6">
        <h1 className="font-display text-4xl md:text-5xl text-[#FFD700]">
          Contacto Institucional
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          SOLYON trabaja con aliados estratégicos, entidades públicas,
          aseguradoras, brokers, fondos y organizaciones que buscan
          tecnología DeepTech operativa y validada.
        </p>

        <p className="text-gray-400 text-sm">
          Diseñado en Medellín · Operado en Estados Unidos · Escalable globalmente
        </p>
      </section>

      {/* CONTENIDO */}
      <section className="section max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* TEXTO + CONTACTO DIRECTO */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-[#FFD700]">
              Hablemos
            </h2>

            <p className="text-gray-300 text-lg">
              Si representas una aseguradora, MGA, broker,
              entidad pública, fondo o programa institucional,
              podemos explorar alianzas, pilotos o despliegues
              tecnológicos conjuntos.
            </p>

            <p className="text-gray-400 text-sm">
              Nuestra tecnología se prueba en operación real en Estados Unidos
              a través de <strong>Sovereign TruckGuard LLC</strong>,
              laboratorio vivo y distribuidor autorizado de SOLYON.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>
                📧{" "}
                <a
                  href="mailto:sergio@solyontechnologies.com"
                  className="text-[#FFD700] hover:underline"
                >
                  sergio@solyontechnologies.com
                </a>
              </p>

              <p>
                📱{" "}
                <a
                  href="https://wa.me/573147903517"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFD700] hover:underline"
                >
                  +57 314 790 3517
                </a>
              </p>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="card p-8 bg-[#111827]/60 backdrop-blur space-y-6">
            <h3 className="font-display text-2xl text-[#FFD700]">
              Formulario para interesados
            </h3>

            <form className="space-y-4">

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl bg-[#0B0F14] border border-white/10 px-4 py-3 text-gray-200 focus:outline-none focus:border-[#FFD700]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email corporativo
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl bg-[#0B0F14] border border-white/10 px-4 py-3 text-gray-200 focus:outline-none focus:border-[#FFD700]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Organización / Empresa
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl bg-[#0B0F14] border border-white/10 px-4 py-3 text-gray-200 focus:outline-none focus:border-[#FFD700]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Tipo de interés
                </label>
                <select
                  className="w-full rounded-xl bg-[#0B0F14] border border-white/10 px-4 py-3 text-gray-200 focus:outline-none focus:border-[#FFD700]"
                >
                  <option>Alianza estratégica</option>
                  <option>Piloto tecnológico</option>
                  <option>Uso de tecnología SOLYON</option>
                  <option>Distribución / Licensing</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl bg-[#0B0F14] border border-white/10 px-4 py-3 text-gray-200 focus:outline-none focus:border-[#FFD700]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#FFD700] text-black font-medium py-3 hover:bg-[#e6c200] transition"
              >
                Enviar solicitud
              </button>

              <p className="text-xs text-gray-500 text-center">
                Este formulario es para contacto institucional.
                No enviamos spam ni compartimos información.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* CIERRE */}
      <section className="section max-w-4xl mx-auto text-center space-y-6">
        <p className="text-gray-400 text-lg">
          Preferimos conversaciones reales a formularios genéricos.
          Este es solo el primer paso.
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
