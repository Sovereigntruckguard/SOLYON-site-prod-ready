// src/app/ecosystem/page.jsx
export default function EcosystemPage() {
  const items = [
    { name: "Arcanum", desc: "Cerebro cognitivo con memoria fractal y sistema anti-alucinación." },
    { name: "Nexus", desc: "Orquestador del ecosistema y nervio operacional de agentes y flujos." },
    { name: "Azoth", desc: "CRM soberano de lujo para operación, ventas y servicio postventa." },
    { name: "TruckBoss", desc: "App premium para camioneros latinos: cotizador, comunidad y PRO." },
    { name: "Sovereign TruckGuard LLC", desc: "Agencia de seguros de lujo para transporte en EE.UU." },
    { name: "EL-VIA DOT Express", desc: "Educación, inglés y cumplimiento DOT diseñado para camioneros latinos." },
    { name: "Vita", desc: "Sistema de transformación integral: hábitos, energía, productividad." },
    { name: "SOLYON Foundation", desc: "Educación, investigación y becas de alto impacto para LATAM." }
  ];

  return (
    <main className="section py-16 space-y-10">
      <header className="space-y-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl gradient-gold">Ecosistema SOLYON</h1>
        <p className="text-gray-200 max-w-3xl mx-auto">
          Un único ecosistema cognitivo que conecta DeepTech, seguros, logística, educación y transformación humana
          en una arquitectura viva y soberana.
        </p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {items.map((it) => (
          <article key={it.name} className="card p-6">
            <h2 className="font-display text-xl gradient-gold mb-2">{it.name}</h2>
            <p className="text-gray-300">{it.desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
