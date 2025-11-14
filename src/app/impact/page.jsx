// src/app/impact/page.jsx
export default function ImpactPage() {
  return (
    <main className="section py-16 space-y-10">
      <header className="space-y-4">
        <h1 className="font-display text-4xl md:text-5xl gradient-gold">Impacto SOLYON</h1>
        <p className="text-gray-200 max-w-3xl">
          SOLYON nace para cambiar la historia de quienes crecieron sin oportunidades reales:
          camioneros, emprendedores, autodidactas y comunidades que el sistema dejó a un lado.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="card p-6 text-center">
          <h2 className="font-display text-3xl gradient-gold">+1000</h2>
          <p className="text-gray-300 mt-2">Personas proyectadas a impactar en la primera fase LATAM.</p>
        </div>
        <div className="card p-6 text-center">
          <h2 className="font-display text-3xl gradient-gold">3</h2>
          <p className="text-gray-300 mt-2">Sectores clave: transporte, educación y transformación personal.</p>
        </div>
        <div className="card p-6 text-center">
          <h2 className="font-display text-3xl gradient-gold">1</h2>
          <p className="text-gray-300 mt-2">Ecosistema que integra tecnología, negocio y propósito.</p>
        </div>
      </section>

      <section className="card p-8 space-y-4">
        <h2 className="font-display text-2xl gradient-gold">Línea de impacto</h2>
        <p className="text-gray-300">
          Desde Medellín hacia el mundo, SOLYON construye una base de DeepTech que permite a proyectos reales
          acceder a IA de alto nivel sin entregar su soberanía ni su identidad.
        </p>
      </section>
    </main>
  );
}
