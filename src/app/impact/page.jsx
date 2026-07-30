"use client";

import Image from "next/image";
import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export default function ImpactPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(230,188,104,0.12),transparent_34rem)]" />
        <div className="section-shell relative grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-7xl">{t.title}</h1>
            <p className="section-copy mt-7">{t.intro}</p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12]">
            <Image src="/visual/impact-systemic.png" alt={t.heroAlt} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-transparent to-transparent" />
            <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65 backdrop-blur-lg">{t.assetLabel}</span>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025] py-20 md:py-24">
        <div className="section-shell grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {t.evidence.map((item) => (
            <article key={item.value} className="bg-[#0b0e12] p-7">
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-4 text-sm leading-7 text-white/55">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="eyebrow">{t.areasEyebrow}</p>
          <h2 className="section-title mt-5">{t.areasTitle}</h2>
          <p className="section-copy mt-7">{t.areasBody}</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.areas.map((area) => (
            <article key={area.title} className="system-card flex min-h-[360px] flex-col">
              <p className="text-xs uppercase tracking-[0.18em] text-[#E6BC68]">{area.scope}</p>
              <h3 className="mt-5 text-2xl font-semibold">{area.title}</h3>
              <p className="mt-5 flex-1 text-sm leading-7 text-white/55">{area.body}</p>
              <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-6 text-[#E6BC68]">{area.status}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3">
            <Image src="/visual/solyon_move_institucional.png" alt={t.moveAlt} width={1200} height={820} sizes="(max-width: 1024px) 100vw, 55vw" className="w-full rounded-[1.45rem] object-cover" />
            <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65 backdrop-blur-lg">{t.assetLabel}</span>
          </div>
          <div>
            <p className="eyebrow">{t.cityEyebrow}</p>
            <h2 className="section-title mt-5">{t.cityTitle}</h2>
            <p className="section-copy mt-7">{t.cityBody}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.cityItems.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-[#0b0e12] p-4 text-sm leading-6 text-white/55">{item}</div>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/solyon-move" className="inline-flex rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e]">{t.moveButton}</Link>
              <GooglePlayLink label={t.download} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="eyebrow">{t.principlesEyebrow}</p>
            <h2 className="section-title mt-5">{t.principlesTitle}</h2>
            <p className="section-copy mt-7">{t.principlesBody}</p>
          </div>
          <div className="space-y-4">
            {t.principles.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-sm leading-7 text-white/60">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "Impacto · Medellín · Colombia · Estados Unidos",
  title: "Construimos capacidad tecnológica que permanece después de cada proyecto.",
  intro: "El impacto de SOLYON no se limita a una aplicación o un piloto. Está en el conocimiento estructurado, el talento fortalecido, los sistemas creados y la capacidad de abordar problemas reales desde Medellín con alcance internacional.",
  heroAlt: "Impacto sistémico de SOLYON Technologies desde Medellín",
  assetLabel: "ACTIVO EXISTENTE · VALIDAR REEMPLAZO",
  evidence: [
    { value: "8+ años", label: "de aprendizaje operativo acumulado alrededor del trucking y procesos relacionados en Estados Unidos" },
    { value: "17 cuadernos", label: "de registro manuscrito que documenta procesos, decisiones y evolución empresarial" },
    { value: "89 GB", label: "de documentación operativa y evidencia organizada como base de conocimiento" },
    { value: "2 países", label: "con desarrollo tecnológico en Colombia y aplicación operativa e institucional" },
  ],
  areasEyebrow: "Ámbitos de impacto",
  areasTitle: "Valor creado en tres niveles conectados.",
  areasBody: "Cada nivel tiene una etapa y una forma distinta de evidencia. No presentamos aspiraciones futuras como resultados actuales.",
  areas: [
    { scope: "Ciudad y talento", title: "Capacidad DeepTech desde Medellín", body: "Desarrollo de software, QA, producto, automatización e inteligencia aplicada desde la ciudad, conectando talento regional con problemas complejos y mercados internacionales.", status: "Impacto actual: capacidad técnica, aprendizaje e infraestructura de laboratorio." },
    { scope: "Industria y comunidad", title: "Trucking latino en Estados Unidos", body: "Construcción progresiva de herramientas para reducir fricción en seguros, documentación, cumplimiento, contactabilidad, formación, servicio y renovación.", status: "Impacto en validación: utilidad operativa por capacidades; no transformación sistémica demostrada todavía." },
    { scope: "Ciudad e inclusión", title: "Movilidad accesible", body: "SOLYON Move combina aplicación gratuita, personalización y una capa institucional de gestión para abordar barreras de movilidad y aprendizaje urbano.", status: "Impacto verificable: producto público y piloto con Ruta N y Toyota Mobility Foundation." },
  ],
  cityEyebrow: "Valor de ciudad",
  cityTitle: "SOLYON Move demuestra que el laboratorio puede convertir un reto urbano en producto público.",
  cityBody: "El proyecto genera valor más allá de la interfaz: producto para usuarios, CRM institucional, experiencia de QA, articulación con actores de ciudad y una hoja de ruta para integrar información urbana y climática.",
  cityItems: ["Aplicación gratuita disponible en Google Play", "Piloto institucional ejecutado en Medellín", "Capacidad de CRM y seguimiento de programas", "Roadmap de integración con datos como SIATA"],
  moveAlt: "SOLYON Move como producto público y caso de impacto urbano",
  moveButton: "Conocer el caso completo",
  download: "Descargar SOLYON Move gratis",
  principlesEyebrow: "Disciplina de medición",
  principlesTitle: "Impacto fuerte, comunicado con precisión.",
  principlesBody: "Nuestra ambición es grande, pero cada afirmación pública debe corresponder a evidencia, etapa y alcance concretos.",
  principles: [
    "Un piloto demuestra capacidad de ejecución, no product-market fit.",
    "Una participación en un programa demuestra selección o acompañamiento, no inversión ni alianza permanente.",
    "Una operación real genera evidencia, pero no prueba por sí sola escalabilidad global.",
    "Una visión regulatoria de largo plazo no se presenta como condición legal actual.",
    "Las métricas financieras permanecen privadas salvo decisión expresa y contexto adecuado.",
  ],
};

const en = {
  eyebrow: "Impact · Medellín · Colombia · United States",
  title: "We build technology capability that remains after each project.",
  intro: "SOLYON's impact is not limited to one application or pilot. It lies in structured knowledge, strengthened talent, systems created and the ability to address real problems from Medellín with international reach.",
  heroAlt: "Systemic impact of SOLYON Technologies from Medellín",
  assetLabel: "EXISTING ASSET · REPLACEMENT REVIEW",
  evidence: [
    { value: "8+ years", label: "of accumulated operating learning around trucking and related processes in the United States" },
    { value: "17 notebooks", label: "of handwritten records documenting processes, decisions and enterprise evolution" },
    { value: "89 GB", label: "of operating documentation and evidence organized as a knowledge base" },
    { value: "2 countries", label: "with technology development in Colombia and operating and institutional application" },
  ],
  areasEyebrow: "Impact areas",
  areasTitle: "Value created across three connected levels.",
  areasBody: "Each level has a different stage and form of evidence. Future aspirations are not presented as current results.",
  areas: [
    { scope: "City and talent", title: "DeepTech capability from Medellín", body: "Software, QA, product, automation and applied intelligence developed from the city, connecting regional talent with complex problems and international markets.", status: "Current impact: technical capability, learning and laboratory infrastructure." },
    { scope: "Industry and community", title: "Latin trucking in the United States", body: "Progressive construction of tools reducing friction in insurance, documentation, compliance, contactability, training, service and renewal.", status: "Impact under validation: operational utility by capability; systemic transformation has not yet been demonstrated." },
    { scope: "City and inclusion", title: "Accessible mobility", body: "SOLYON Move combines a free application, personalization and an institutional management layer addressing mobility barriers and urban learning.", status: "Verifiable impact: public product and pilot with Ruta N and Toyota Mobility Foundation." },
  ],
  cityEyebrow: "City value",
  cityTitle: "SOLYON Move shows that the laboratory can turn an urban challenge into a public product.",
  cityBody: "The project creates value beyond the interface: a user product, institutional CRM, QA experience, articulation with city stakeholders and a roadmap for integrating urban and weather information.",
  cityItems: ["Free application available on Google Play", "Institutional pilot executed in Medellín", "CRM and program-monitoring capability", "Roadmap for integration with data sources such as SIATA"],
  moveAlt: "SOLYON Move as a public product and urban-impact case",
  moveButton: "Explore the complete case",
  download: "Download SOLYON Move free",
  principlesEyebrow: "Measurement discipline",
  principlesTitle: "Strong impact, communicated precisely.",
  principlesBody: "Our ambition is significant, but every public claim must correspond to specific evidence, stage and scope.",
  principles: [
    "A pilot demonstrates execution capability, not product-market fit.",
    "Participation in a program demonstrates selection or support, not investment or permanent partnership.",
    "A real operation generates evidence, but does not by itself prove global scalability.",
    "A long-term regulatory vision is not presented as current legal status.",
    "Financial metrics remain private unless expressly approved and properly contextualized.",
  ],
};
