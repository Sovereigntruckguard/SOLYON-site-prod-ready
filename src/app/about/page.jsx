// src/app/about/page.jsx
export default function AboutPage() {
  return (
    <main className="section py-16 space-y-10">
      <header className="space-y-4">
        <h1 className="font-display text-4xl md:text-5xl gradient-gold">Acerca de SOLYON</h1>
        <p className="text-gray-200 max-w-3xl">
          SOLYON Technologies es una casa DeepTech de lujo creada para diseñar inteligencia cognitiva soberana,
          con raíces en LATAM y visión global.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="font-display text-2xl gradient-gold">Origen</h2>
          <p className="text-gray-300 mt-2">
            SOLYON nace de la experiencia de vida de su fundador, que convirtió adversidad, calle y resiliencia
            en una arquitectura tecnológica al servicio de quienes no tuvieron un camino fácil.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="font-display text-2xl gradient-gold">Propósito</h2>
          <p className="text-gray-300 mt-2">
            Empoderar a la comunidad latina y a los creadores independientes con tecnología soberana,
            ayudándoles a construir empresas de alto rendimiento y vida con propósito.
          </p>
        </div>
      </section>
    </main>
  );
}
