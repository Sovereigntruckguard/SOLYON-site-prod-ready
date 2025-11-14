// src/app/press/page.jsx
export default function PressPage() {
  const items = [
    { title: "Convocatorias y Grants", desc: "Participación en programas de DeepTech e innovación en LATAM y EE.UU.", status: "En proceso" },
    { title: "Alianzas estratégicas", desc: "Contactos con NVIDIA, Microsoft y ecosistemas de innovación.", status: "En construcción" }
  ];

  return (
    <main className="section py-16 space-y-10">
      <header className="space-y-4">
        <h1 className="font-display text-4xl md:text-5xl gradient-gold">Prensa & Reconocimientos</h1>
        <p className="text-gray-200 max-w-3xl">
          Este espacio reúne las apariciones, reconocimientos y alianzas que consolidan a SOLYON como actor relevante
          en el ecosistema DeepTech.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <article key={it.title} className="card p-6">
            <h2 className="font-display text-xl gradient-gold mb-1">{it.title}</h2>
            <p className="text-gray-300 mb-3">{it.desc}</p>
            <span className="text-xs uppercase tracking-wide text-gray-400">Estado: {it.status}</span>
          </article>
        ))}
      </section>
    </main>
  );
}
