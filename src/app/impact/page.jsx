"use client";

import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export default function ImpactPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      <section className="section-shell py-24 md:py-32">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="section-title mt-5">{t.title}</h1>
        <p className="section-copy mt-7">{t.intro}</p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.evidence.map((item) => (
            <article key={item.value} className="system-card">
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-4 text-sm leading-7 text-white/55">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <p className="eyebrow">{t.areasEyebrow}</p>
        <h2 className="section-title mt-5">{t.areasTitle}</h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.areas.map((area) => (
            <article key={area.title} className="system-card">
              <h3 className="text-2xl font-semibold">{area.title}</h3>
              <p className="mt-5 text-sm leading-7 text-white/55">{area.body}</p>
              <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-6 text-[#E6BC68]">{area.status}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">{t.principlesEyebrow}</p>
            <h2 className="section-title mt-5">{t.principlesTitle}</h2>
            <p className="section-copy mt-7">{t.principlesBody}</p>
          </div>
          <div className="space-y-4">
            {t.principles.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-sm leading-7 text-white/60">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "Impacto",
  title: "Impacto verificable antes que narrativa.",
  intro: "SOLYON mide su impacto por capacidad creada, tecnología ejecutada, conocimiento estructurado y problemas abordados con evidencia. No presentamos proyecciones como resultados ni participación institucional como inversión.",
  evidence: [
    { value: "8+ años", label: "de aprendizaje operativo acumulado alrededor del trucking y procesos relacionados en Estados Unidos" },
    { value: "17 cuadernos", label: "de registro manuscrito que documenta procesos, decisiones y evolución empresarial" },
    { value: "89 GB", label: "de documentación operativa y evidencia organizada como base de conocimiento" },
    { value: "2 países", label: "con desarrollo tecnológico en Colombia y aplicación operativa en Estados Unidos" },
  ],
  areasEyebrow: "Ámbitos de impacto",
  areasTitle: "Tecnología construida en Medellín para problemas operativos reales",
  areas: [
    {
      title: "Capacidad tecnológica local",
      body: "Desarrollo de software, QA, producto, automatización e inteligencia aplicada desde Medellín, conectando talento regional con problemas internacionales.",
      status: "Impacto actual: creación y fortalecimiento de capacidad técnica.",
    },
    {
      title: "Trucking latino en Estados Unidos",
      body: "Construcción progresiva de herramientas para reducir fricción en seguros, documentación, cumplimiento, contactabilidad, formación y servicio.",
      status: "Impacto en validación: utilidad operativa por capacidades, no transformación sistémica demostrada todavía.",
    },
    {
      title: "Movilidad y accesibilidad",
      body: "SOLYON Move aplica tecnología a la planificación de viajes de personas con movilidad reducida mediante una trayectoria institucional propia.",
      status: "Impacto institucional: piloto desarrollado con Ruta N y Toyota Mobility Foundation.",
    },
  ],
  principlesEyebrow: "Disciplina de medición",
  principlesTitle: "Cómo comunicamos el impacto",
  principlesBody: "Cada afirmación pública debe corresponder a una evidencia, una etapa y un alcance concretos.",
  principles: [
    "Un piloto demuestra capacidad de ejecución, no product-market fit.",
    "Una participación en un programa demuestra selección o acompañamiento, no inversión ni alianza permanente.",
    "Una operación real genera evidencia, pero no prueba por sí sola escalabilidad global.",
    "Una visión regulatoria de largo plazo no se presenta como condición legal actual.",
    "Las métricas financieras permanecen privadas salvo decisión expresa y contexto adecuado.",
  ],
};

const en = {
  eyebrow: "Impact",
  title: "Verifiable impact before narrative.",
  intro: "SOLYON measures impact through capability created, technology executed, knowledge structured and problems addressed with evidence. We do not present projections as results or institutional participation as investment.",
  evidence: [
    { value: "8+ years", label: "of accumulated operating learning around trucking and related processes in the United States" },
    { value: "17 notebooks", label: "of handwritten records documenting processes, decisions and enterprise evolution" },
    { value: "89 GB", label: "of operating documentation and evidence organized as a knowledge base" },
    { value: "2 countries", label: "with technology development in Colombia and operating application in the United States" },
  ],
  areasEyebrow: "Impact areas",
  areasTitle: "Technology built in Medellín for real operating problems",
  areas: [
    {
      title: "Local technology capability",
      body: "Software, QA, product, automation and applied intelligence developed from Medellín, connecting regional talent with international problems.",
      status: "Current impact: creation and strengthening of technical capability.",
    },
    {
      title: "Latin trucking in the United States",
      body: "Progressive construction of tools to reduce friction in insurance, documentation, compliance, contactability, training and service.",
      status: "Impact under validation: operational utility by capability, not yet demonstrated systemic transformation.",
    },
    {
      title: "Mobility and accessibility",
      body: "SOLYON Move applies technology to trip planning for people with reduced mobility through its own institutional trajectory.",
      status: "Institutional impact: pilot developed with Ruta N and Toyota Mobility Foundation.",
    },
  ],
  principlesEyebrow: "Measurement discipline",
  principlesTitle: "How we communicate impact",
  principlesBody: "Every public claim must correspond to specific evidence, stage and scope.",
  principles: [
    "A pilot demonstrates execution capability, not product-market fit.",
    "Participation in a program demonstrates selection or support, not investment or permanent partnership.",
    "A real operation generates evidence, but does not by itself prove global scalability.",
    "A long-term regulatory vision is not presented as current legal status.",
    "Financial metrics remain private unless expressly approved and properly contextualized.",
  ],
};
