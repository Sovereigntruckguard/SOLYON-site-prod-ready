"use client";

import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export default function AboutPage() {
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
        <div className="section-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.originEyebrow}</p>
            <h2 className="section-title mt-5">{t.originTitle}</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/60">
            {t.originParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <p className="eyebrow">{t.foundersEyebrow}</p>
        <h2 className="section-title mt-5">{t.foundersTitle}</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.founders.map((founder) => (
            <article key={founder.name} className="system-card">
              <p className="text-xs uppercase tracking-[0.18em] text-[#E6BC68]">{founder.role}</p>
              <h3 className="mt-5 text-2xl font-semibold">{founder.name}</h3>
              <p className="mt-5 text-sm leading-7 text-white/55">{founder.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <p className="eyebrow">{t.teamEyebrow}</p>
          <h2 className="section-title mt-5">{t.teamTitle}</h2>
          <p className="section-copy mt-7">{t.teamBody}</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.capabilities.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/65">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="rounded-3xl border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] to-[#0b0e12] p-8 md:p-14">
          <p className="eyebrow">{t.principleEyebrow}</p>
          <h2 className="section-title mt-5">{t.principleTitle}</h2>
          <p className="section-copy mt-7">{t.principleBody}</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "Nosotros",
  title: "Operadores que se convirtieron en constructores.",
  intro: "SOLYON nace de años de trabajo directo dentro de operaciones complejas. La compañía transforma esa experiencia en arquitectura empresarial, tecnología, procesos y conocimiento reutilizable.",
  originEyebrow: "Origen",
  originTitle: "La documentación comenzó antes que la compañía tecnológica.",
  originParagraphs: [
    "Durante ocho años, la experiencia en trucking, dispatch, factoring, seguros y cumplimiento produjo miles de registros, documentos, fotografías, procesos y decisiones operativas.",
    "Diecisiete cuadernos manuscritos y 89 GB de documentación se convirtieron en un corpus para comprender cómo funciona el sistema, dónde se rompe y qué capacidades tecnológicas pueden intervenirlo.",
    "SOLYON no presenta esa historia como una ventaja automática. La convierte progresivamente en procesos verificables, productos, módulos y propiedad intelectual protegible.",
  ],
  foundersEyebrow: "Equipo fundador",
  foundersTitle: "Experiencia complementaria de operación y ejecución",
  founders: [
    {
      name: "Sergio Andrés Murillo",
      role: "Cofundador y CEO",
      body: "Lidera la visión, arquitectura empresarial y conversión de conocimiento operativo en tecnología. Cuenta con ocho años de experiencia en operaciones relacionadas con trucking, seguros, dispatch, factoring y cumplimiento en Estados Unidos.",
    },
    {
      name: "Elizabeth Tamayo",
      role: "Cofundadora y COO",
      body: "Lidera ejecución, control de procesos y adaptación a usuarios reales. Su experiencia incluye dispatch, control de calidad, cotización, revisión, activación y auditoría de pólizas.",
    },
  ],
  teamEyebrow: "Capacidad multidisciplinaria",
  teamTitle: "Un equipo construido alrededor de la ejecución",
  teamBody: "El equipo combina conocimiento de dominio con capacidades técnicas y creativas. Los roles y relaciones contractuales se comunican según su condición real y etapa de participación.",
  capabilities: ["Desarrollo full stack", "Aseguramiento de calidad", "Producto y operaciones", "Ventas y distribución", "Diseño y comunicación", "Producción audiovisual", "Investigación aplicada", "Documentación y control"],
  principleEyebrow: "Principio de construcción",
  principleTitle: "La operación primero. La narrativa después.",
  principleBody: "La credibilidad de SOLYON depende de mantener alineadas la visión, la evidencia y la ejecución. Por eso distinguimos lo construido, lo validado, lo proyectado y lo pendiente.",
};

const en = {
  eyebrow: "About",
  title: "Operators who became builders.",
  intro: "SOLYON was born from years of direct work inside complex operations. The company transforms that experience into enterprise architecture, technology, processes and reusable knowledge.",
  originEyebrow: "Origin",
  originTitle: "The documentation began before the technology company.",
  originParagraphs: [
    "Over eight years, experience in trucking, dispatch, factoring, insurance and compliance produced thousands of records, documents, photographs, processes and operating decisions.",
    "Seventeen handwritten notebooks and 89 GB of documentation became a corpus for understanding how the system works, where it breaks and which technology capabilities may intervene.",
    "SOLYON does not present that history as an automatic advantage. It progressively turns it into verifiable processes, products, modules and protectable intellectual property.",
  ],
  foundersEyebrow: "Founding team",
  foundersTitle: "Complementary operating and execution experience",
  founders: [
    {
      name: "Sergio Andrés Murillo",
      role: "Co-founder and CEO",
      body: "Leads the vision, enterprise architecture and conversion of operating knowledge into technology. He has eight years of experience in operations related to trucking, insurance, dispatch, factoring and compliance in the United States.",
    },
    {
      name: "Elizabeth Tamayo",
      role: "Co-founder and COO",
      body: "Leads execution, process control and adaptation to real users. Her experience includes dispatch, quality control, quoting, policy review, activation and auditing.",
    },
  ],
  teamEyebrow: "Multidisciplinary capability",
  teamTitle: "A team built around execution",
  teamBody: "The team combines domain knowledge with technical and creative capabilities. Roles and contractual relationships are communicated according to their actual status and participation stage.",
  capabilities: ["Full-stack development", "Quality assurance", "Product and operations", "Sales and distribution", "Design and communication", "Audiovisual production", "Applied research", "Documentation and control"],
  principleEyebrow: "Building principle",
  principleTitle: "Operations first. Narrative second.",
  principleBody: "SOLYON's credibility depends on keeping vision, evidence and execution aligned. We therefore distinguish what has been built, validated, projected and remains pending.",
};
