// src/app/legal/page.jsx
export default function LegalPage() {
  return (
    <main className="section py-16 space-y-10">
      <header className="space-y-4">
        <h1 className="font-display text-4xl md:text-5xl gradient-gold">Legal & Privacidad</h1>
        <p className="text-gray-200 max-w-3xl">
          Esta sección resume cómo SOLYON protege tu información y cumple con las normativas aplicables
          (Ley 1581 de 2012 en Colombia y principios GDPR).
        </p>
      </header>

      <section className="card p-8 space-y-4 text-gray-300">
        <h2 className="font-display text-2xl gradient-gold">Política de tratamiento de datos</h2>
        <p>Usamos tus datos únicamente para las finalidades autorizadas: contacto, operación de servicios y mejora del ecosistema.</p>
        <p>En ningún caso vendemos tu información personal a terceros.</p>
      </section>
    </main>
  );
}
