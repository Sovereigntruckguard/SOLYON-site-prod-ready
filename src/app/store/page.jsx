// src/app/store/page.jsx
import Purchase from "@/components/Purchase";

export default function StorePage() {
  return (
    <main className="section py-16 space-y-10">
      <header className="space-y-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl gradient-gold">Tienda SOLYON</h1>
        <p className="text-gray-200 max-w-3xl mx-auto">
          Comienza con el Kit Digital SOLYON: herramientas, plantillas y acceso a futuras actualizaciones
          del ecosistema cognitivo.
        </p>
      </header>

      <section>
        <Purchase />
      </section>
    </main>
  );
}
