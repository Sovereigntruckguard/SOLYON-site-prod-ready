// src/app/contact/page.jsx
export default function ContactPage() {
  return (
    <main className="section py-16 space-y-10">
      <header className="space-y-4">
        <h1 className="font-display text-4xl md:text-5xl gradient-gold">Contacto & Alianzas</h1>
        <p className="text-gray-200 max-w-3xl">
          Si deseas explorar alianzas, inversión, pilotos o integración tecnológica con SOLYON, déjanos tus datos.
        </p>
      </header>

      <section className="card p-8 max-w-2xl">
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Nombre completo</label>
            <input className="w-full rounded-xl bg-[#1E1E1E] border border-[#3A3A3A] px-3 py-2 text-gray-100" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Correo electrónico</label>
            <input type="email" className="w-full rounded-xl bg-[#1E1E1E] border border-[#3A3A3A] px-3 py-2 text-gray-100" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Organización / Rol</label>
            <input className="w-full rounded-xl bg-[#1E1E1E] border border-[#3A3A3A] px-3 py-2 text-gray-100" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Mensaje</label>
            <textarea rows={4} className="w-full rounded-xl bg-[#1E1E1E] border border-[#3A3A3A] px-3 py-2 text-gray-100" />
          </div>
          <button type="submit" className="btn mt-2">Enviar mensaje</button>
        </form>
      </section>
    </main>
  );
}
