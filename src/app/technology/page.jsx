// src/app/technology/page.jsx
export default function TechnologyPage() {
  return (
    <main className="section py-16 space-y-10">
      <header className="space-y-4">
        <h1 className="font-display text-4xl md:text-5xl gradient-gold">Tecnología & Propiedad Intelectual</h1>
        <p className="text-gray-200 max-w-3xl">
          SOLYON desarrolla arquitecturas cognitivas propias, diseñadas para minimizar alucinaciones,
          retener contexto de forma soberana y orquestar agentes en tiempo real.
        </p>
      </header>

      <section className="card p-8 space-y-4">
        <h2 className="font-display text-2xl gradient-gold">Arcanum – Motor cognitivo</h2>
        <p className="text-gray-300">
          Arcanum es nuestro cerebro cognitivo. Integra memoria fractal jerárquica, anti-alucinación y autoaprendizaje
          continuo para operar sobre ecosistemas de información reales.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-display text-xl gradient-gold">Memoria fractal jerárquica</h3>
          <p className="text-gray-300 mt-2">
            Modelo de memoria que organiza el conocimiento en niveles, permitiendo recordar lo esencial en grandes
            contextos sin perder precisión ni velocidad.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-display text-xl gradient-gold">Anti-alucinación</h3>
          <p className="text-gray-300 mt-2">
            Fórmulas de verificación, recuperación de contexto y trazabilidad de fuentes diseñadas para reducir
            riesgos de respuestas inventadas y decisiones inestables.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-display text-xl gradient-gold">Nexus – Orquestador</h3>
          <p className="text-gray-300 mt-2">
            Capa que coordina agentes, flujos y tareas, conectando datos, modelos y aplicaciones externas
            como seguros, logística y educación.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-display text-xl gradient-gold">Patent Pending</h3>
          <p className="text-gray-300 mt-2">
            Nuestra arquitectura y métodos se encuentran en estado <b>Patent Pending</b> en EE.UU.,
            diseñados para evolucionar hacia estándares globales de IA soberana.
          </p>
        </div>
      </section>
    </main>
  );
}
