export function RiskConsole({ locale }) {
  const es = locale === "es";
  const signals = es
    ? [
        ["Perfil FMCSA", "Verificado", "100%"],
        ["Archivo de póliza", "Revisión humana", "72%"],
        ["Historial de servicio", "Conectado", "88%"],
        ["Próxima acción", "Aprobación requerida", "61%"],
      ]
    : [
        ["FMCSA profile", "Verified", "100%"],
        ["Policy file", "Human review", "72%"],
        ["Service history", "Connected", "88%"],
        ["Next action", "Approval required", "61%"],
      ];

  return (
    <div
      aria-label={
        es
          ? "Visualización conceptual del flujo de señales"
          : "Conceptual signal-flow visualization"
      }
      className="relative rounded-3xl border border-white/[0.1] bg-[#0a0c0d] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
    >
      <div className="rounded-2xl border border-white/[0.07] bg-panel/90 p-5 sm:p-6">
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
          <div>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-gold">
              {es ? "PLANO OPERATIVO" : "OPERATING BLUEPRINT"}
            </p>
            <p className="mt-1 text-sm font-medium text-paper">
              {es ? "Vista de señal de riesgo" : "Risk signal view"}
            </p>
          </div>
          <span className="flex items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {es ? "Controlado" : "Controlled"}
          </span>
        </div>
        <div className="mt-5 space-y-5">
          {signals.map(([label, state, width]) => (
            <div key={label}>
              <div className="mb-2 flex items-center justify-between gap-4">
                <p className="text-xs text-paper">{label}</p>
                <p className="text-right font-mono text-[0.56rem] uppercase tracking-[0.1em] text-white/40">
                  {state}
                </p>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold/50 to-gold"
                  style={{ width }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/[0.07] pt-5">
          {[
            [es ? "FUENTES" : "SOURCES", "06"],
            [es ? "ESTADO" : "STATE", es ? "REVISAR" : "REVIEW"],
            [es ? "REGISTRO" : "LOG", "ON"],
          ].map(([label, value]) => (
            <div className="rounded-xl bg-white/[0.035] p-3" key={label}>
              <p className="font-mono text-[0.5rem] tracking-[0.13em] text-white/30">
                {label}
              </p>
              <p className="mt-2 text-xs font-medium text-paper">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SignalFlow({ items }) {
  return (
    <div className="relative grid gap-2 md:grid-cols-3 lg:grid-cols-6">
      <div className="hairline absolute left-6 right-6 top-1/2 hidden h-px md:block" />
      {items.map((item, index) => (
        <div
          className="relative rounded-xl border border-white/[0.1] bg-panel px-4 py-5 text-center"
          key={item}
        >
          <span className="font-mono text-[0.55rem] text-gold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-2 text-xs font-medium text-paper">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function DecisionLoop({ items }) {
  return (
    <ol className="mt-9 grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li
          className="relative rounded-2xl border border-white/[0.09] bg-panel p-5"
          key={item}
        >
          <div className="mb-7 flex items-center justify-between">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-gold/30 font-mono text-[0.6rem] text-gold">
              {index + 1}
            </span>
            {index < items.length - 1 && (
              <span className="font-mono text-xs text-white/25">→</span>
            )}
          </div>
          <p className="text-sm font-medium leading-5 text-paper">{item}</p>
        </li>
      ))}
    </ol>
  );
}

export function CountryBridge({ locale }) {
  const es = locale === "es";
  return (
    <div className="grid overflow-hidden rounded-3xl border border-white/[0.09] bg-panel lg:grid-cols-[1fr_auto_1fr]">
      <div className="p-8 sm:p-10">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.17em] text-gold">
          United States
        </p>
        <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-paper">
          {es ? "Mercado y operación" : "Market and operations"}
        </h3>
        <ul className="mt-7 space-y-3 text-sm text-steel">
          {(es
            ? ["Demanda", "Flujos de seguros", "Señales de riesgo", "Ingresos operativos"]
            : ["Demand", "Insurance workflows", "Risk signals", "Operating revenue"]
          ).map((item) => (
            <li className="flex items-center gap-3" key={item}>
              <span className="h-px w-4 bg-gold/70" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid min-h-24 place-items-center border-y border-white/[0.08] px-8 lg:border-x lg:border-y-0">
        <div className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/35 lg:flex-col">
          <span>Data</span>
          <span className="text-gold">↔</span>
          <span>IP</span>
        </div>
      </div>
      <div className="p-8 sm:p-10">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.17em] text-gold">
          Medellín
        </p>
        <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-paper">
          {es ? "Laboratorio y valor" : "Laboratory and value"}
        </h3>
        <ul className="mt-7 space-y-3 text-sm text-steel">
          {(es
            ? ["Producto", "IA aplicada", "Software", "Propiedad intelectual"]
            : ["Product", "Applied AI", "Software", "Intellectual property"]
          ).map((item) => (
            <li className="flex items-center gap-3" key={item}>
              <span className="h-px w-4 bg-gold/70" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function LayerStack({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <article
          className="grid gap-5 rounded-2xl border border-white/[0.09] bg-panel p-6 md:grid-cols-[5rem_15rem_1fr] md:items-center"
          key={item.number}
        >
          <p className="font-mono text-xs tracking-[0.18em] text-gold">
            {item.number}
          </p>
          <h3 className="text-lg font-medium text-paper">{item.title}</h3>
          <p className="text-sm leading-6 text-steel">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
