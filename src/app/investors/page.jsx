// src/app/investors/page.jsx
export default function InvestorsPage() {
  return (
    <main className="section py-16 space-y-10">
      <header className="space-y-4">
        <h1 className="font-display text-4xl md:text-5xl gradient-gold">Investors & Strategic Partners</h1>
        <p className="text-gray-200 max-w-3xl">
          SOLYON está construyendo un ecosistema DeepTech soberano que combina IP, productos reales y una narrativa
          de impacto social clara. Buscamos aliados que compartan esa visión.
        </p>
      </header>

      <section className="card p-8 space-y-4">
        <h2 className="font-display text-2xl gradient-gold">Tesis de inversión</h2>
        <p className="text-gray-300">
          IP propia, mercado global escalable, enfoque LATAM, productos que resuelven problemas concretos en seguros,
          logística, educación y transformación personal.
        </p>
      </section>

      <section className="card p-8 space-y-4">
        <h2 className="font-display text-2xl gradient-gold">Contacto para inversores</h2>
        <p className="text-gray-300">
          Escríbenos a <a className="underline" href="mailto:alliances@solyontechnologies.com">alliances@solyontechnologies.com</a> 
          indicando perfil, tesis y ticket aproximado.
        </p>
      </section>
    </main>
  );
}
