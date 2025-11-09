const items = [
  { name: "Arcanum", desc: "Cerebro cognitivo con memoria fractal y anti-alucinación." },
  { name: "Nexus", desc: "Orquestador del ecosistema y nervio operacional." },
  { name: "Azoth", desc: "CRM soberano de lujo para operación y ventas." },
  { name: "TruckBoss", desc: "App para camioneros latinos: cotizador, comunidad, PRO." },
  { name: "Sovereign TruckGuard LLC", desc: "Agencia de seguros de lujo para transporte." },
  { name: "EL-VIA DOT Express", desc: "Educación y cumplimiento DOT bilingüe." },
  { name: "Vita", desc: "Transformación integral: hábitos, energía y foco." },
  { name: "Foundation", desc: "Educación, investigación y becas con impacto LATAM." }
];
export default function Ecosystem() {
  return (
    <section className="section">
      <div className="flex items-center justify-between gap-6">
        <h2 className="font-display text-3xl md:text-4xl gradient-gold">Ecosistema SOLYON</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {items.map((it) => (
          <div key={it.name} className="p-6 rounded-2xl bg-[#202020] border border-[#2A2A2A]">
            <div className="font-display text-xl gradient-gold">{it.name}</div>
            <p className="text-gray-300 mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
