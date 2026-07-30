"use client";

import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(230,188,104,0.13),transparent_34rem)]" />
        <div className="section-shell relative grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-7xl">{t.title}</h1>
            <p className="section-copy mt-7">{t.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              {t.heroTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs text-white/55">{tag}</span>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/technology" className="inline-flex justify-center rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]">{t.technologyButton}</Link>
              <Link href="/contact" className="inline-flex justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">{t.contactButton}</Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
              <Image src="/visual/about-lab.png" alt={t.labAlt} width={1000} height={760} priority sizes="(max-width: 1024px) 100vw, 30vw" className="h-full min-h-[360px] w-full rounded-[1.45rem] object-cover" />
              <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65 backdrop-blur-lg">{t.realAsset}</span>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.5)] sm:mt-14">
              <Image src="/visual/about-origin.png" alt={t.originAlt} width={1000} height={760} priority sizes="(max-width: 1024px) 100vw, 30vw" className="h-full min-h-[360px] w-full rounded-[1.45rem] object-cover" />
              <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65 backdrop-blur-lg">{t.realAsset}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="section-shell grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {t.evidence.map((item) => (
            <div key={item.value} className="bg-[#0b0e12] p-7 md:p-9">
              <p className="text-2xl font-semibold md:text-3xl">{item.value}</p>
              <p className="mt-3 text-xs leading-5 text-white/45">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="eyebrow">{t.originEyebrow}</p>
            <h2 className="section-title mt-5">{t.originTitle}</h2>
            <p className="section-copy mt-6">{t.originIntro}</p>
          </div>
          <div className="space-y-4">
            {t.originSteps.map((step, index) => (
              <article key={step.title} className="system-card flex gap-5">
                <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/35">{step.label}</p>
                  <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">{t.foundersEyebrow}</p>
            <h2 className="section-title mt-5">{t.foundersTitle}</h2>
            <p className="section-copy mt-6">{t.foundersIntro}</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {t.founders.map((founder) => (
              <article key={founder.name} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-8 md:p-10">
                <div className="absolute right-8 top-8 text-6xl font-semibold text-white/[0.025]">{founder.initials}</div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#E6BC68]">{founder.role}</p>
                <h3 className="mt-5 text-3xl font-semibold">{founder.name}</h3>
                <p className="mt-5 text-sm leading-7 text-white/55">{founder.body}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {founder.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[0.66rem] text-white/45">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3">
            <Image src="/visual/impact-institutional.png" alt={t.medellinAlt} width={1200} height={820} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full rounded-[1.45rem] object-cover" />
            <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65 backdrop-blur-lg">{t.realAssetReview}</span>
          </div>
          <div>
            <p className="eyebrow">{t.medellinEyebrow}</p>
            <h2 className="section-title mt-5">{t.medellinTitle}</h2>
            <p className="section-copy mt-6">{t.medellinBody}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.medellinItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
                  <p className="text-sm font-semibold text-white/85">{item.title}</p>
                  <p className="mt-2 text-xs leading-5 text-white/45">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="eyebrow">{t.teamEyebrow}</p>
              <h2 className="section-title mt-5">{t.teamTitle}</h2>
            </div>
            <p className="section-copy">{t.teamBody}</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.capabilities.map((item, index) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-[#0b0e12] p-6">
                <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
                <p className="mt-5 text-sm font-medium leading-6 text-white/68">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="overflow-hidden rounded-3xl border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] to-[#0b0e12]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="p-8 md:p-14">
              <p className="eyebrow">{t.principleEyebrow}</p>
              <h2 className="section-title mt-5">{t.principleTitle}</h2>
              <p className="section-copy mt-7">{t.principleBody}</p>
              <Link href="/contact" className="mt-9 inline-flex rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]">{t.principleButton}</Link>
            </div>
            <div className="relative min-h-[360px]">
              <Image src="/visual/impact-systemic.png" alt={t.principleAlt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#17140d] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "Nosotros · Fundadores · Laboratorio",
  title: "Operadores que convirtieron experiencia acumulada en capacidad tecnológica.",
  intro: "SOLYON Technologies nace de años de trabajo directo dentro de operaciones complejas. La compañía transforma esa experiencia, la documentación y el aprendizaje institucional en arquitectura, producto, sistemas e inteligencia aplicada.",
  heroTags: ["8+ años de experiencia", "Medellín, Colombia", "Operación + tecnología", "Construcción verificable"],
  technologyButton: "Explorar la tecnología",
  contactButton: "Conocer al equipo",
  labAlt: "Laboratorio y equipo de SOLYON Technologies en Medellín",
  originAlt: "Evidencia y documentación que dieron origen a SOLYON Technologies",
  realAsset: "ACTIVO EXISTENTE",
  realAssetReview: "ACTIVO EXISTENTE · VALIDAR REEMPLAZO",
  evidence: [
    { value: "8+ años", label: "de experiencia acumulada en operaciones vinculadas al trucking en Estados Unidos" },
    { value: "17", label: "cuadernos manuscritos que documentan procesos, decisiones y aprendizaje" },
    { value: "89 GB", label: "de evidencia y documentación organizada como corpus empresarial" },
    { value: "2 países", label: "construcción y validación en Colombia y Estados Unidos" },
  ],
  originEyebrow: "Trayectoria",
  originTitle: "La tecnología comenzó mucho antes de escribir la primera línea de código.",
  originIntro: "El laboratorio no parte de una hipótesis abstracta. Parte de problemas conocidos desde dentro, documentados durante años y posteriormente sometidos a procesos de estructuración, desarrollo y validación.",
  originSteps: [
    { label: "Experiencia", title: "Operar y comprender el sistema", body: "Trabajo directo en trucking, dispatch, factoring, seguros, cumplimiento, servicio y control de calidad produjo conocimiento de dominio y exposición continua a excepciones reales." },
    { label: "Evidencia", title: "Documentar para pensar y recordar", body: "Cuadernos, archivos, fotografías, procesos y decisiones formaron una memoria empresarial que hoy permite reconstruir patrones, fricciones y criterios de operación." },
    { label: "Laboratorio", title: "Convertir experiencia en arquitectura", body: "SOLYON estructura ese conocimiento como reglas, datos, taxonomías, flujos, interfaces, agentes y herramientas de soporte a decisiones." },
    { label: "Validación", title: "Demostrar capacidad en entornos reales", body: "Sovereign Truckguard y SOLYON Move someten capacidades distintas del laboratorio a usuarios, instituciones, mercados y restricciones verificables." },
  ],
  foundersEyebrow: "Equipo fundador",
  foundersTitle: "Visión y ejecución construidas como una sola capacidad.",
  foundersIntro: "La complementariedad fundadora combina conocimiento operativo, arquitectura empresarial, control de procesos, comprensión de usuarios y disciplina de ejecución.",
  founders: [
    {
      initials: "SM",
      name: "Sergio Andrés Murillo",
      role: "Cofundador y CEO",
      body: "Lidera la visión, la arquitectura empresarial y la conversión de conocimiento operativo en tecnología. Su experiencia cubre trucking, seguros, dispatch, factoring, cumplimiento, ventas y construcción progresiva del ecosistema.",
      tags: ["Estrategia", "Arquitectura", "Trucking", "Insurance", "Producto"],
    },
    {
      initials: "ET",
      name: "Elizabeth Tamayo",
      role: "Cofundadora y COO",
      body: "Lidera ejecución, control de procesos y adaptación a usuarios reales. Su experiencia incluye dispatch, control de calidad, cotización, revisión, activación y auditoría de pólizas, además de la estructuración operativa de SOLYON Move.",
      tags: ["Operaciones", "QA", "Seguros", "Usuarios", "Ejecución"],
    },
  ],
  medellinEyebrow: "Construidos desde Medellín",
  medellinTitle: "El ecosistema de ciudad ayudó a transformar experiencia en compañía DeepTech.",
  medellinBody: "Medellín aporta talento, acompañamiento, instituciones y un entorno de innovación donde SOLYON ha podido fortalecer su capacidad empresarial y ejecutar tecnología aplicada a retos verificables.",
  medellinItems: [
    { title: "Distrito CTI", body: "Incubación y fortalecimiento dentro del ecosistema de ciencia, tecnología e innovación de Medellín." },
    { title: "Créame y UPB", body: "Acompañamiento empresarial y tecnológico durante la estructuración de la compañía." },
    { title: "Ruta N", body: "Articulación institucional y seguimiento de la ejecución tecnológica de SOLYON Move." },
    { title: "Toyota Mobility Foundation", body: "Contexto internacional para innovación orientada a movilidad y accesibilidad." },
  ],
  medellinAlt: "Ecosistema institucional y valor de ciudad de SOLYON Technologies en Medellín",
  teamEyebrow: "Capacidad multidisciplinaria",
  teamTitle: "Un laboratorio construido alrededor de la ejecución.",
  teamBody: "La compañía articula conocimiento de dominio con desarrollo, aseguramiento de calidad, producto, ventas, diseño, comunicación, investigación y documentación. Los nombres y relaciones se publican únicamente cuando su condición y autorización están confirmadas.",
  capabilities: ["Desarrollo full stack", "QA y control de calidad", "Producto y operaciones", "Ventas y distribución", "Diseño y comunicación", "Producción audiovisual", "Investigación aplicada", "Documentación y control"],
  principleEyebrow: "Principio de construcción",
  principleTitle: "La operación primero. La evidencia siempre. La narrativa después.",
  principleBody: "La credibilidad de SOLYON depende de mantener alineadas visión, evidencia y ejecución. Por eso distinguimos con precisión lo construido, lo validado, lo proyectado y lo pendiente.",
  principleButton: "Abrir una conversación",
  principleAlt: "Visión de largo plazo y construcción sistémica de SOLYON Technologies",
};

const en = {
  eyebrow: "About · Founders · Laboratory",
  title: "Operators who turned accumulated experience into technology capability.",
  intro: "SOLYON Technologies was born from years of direct work inside complex operations. The company turns that experience, documentation and institutional learning into architecture, products, systems and applied intelligence.",
  heroTags: ["8+ years of experience", "Medellín, Colombia", "Operations + technology", "Verifiable construction"],
  technologyButton: "Explore the technology",
  contactButton: "Meet the team",
  labAlt: "SOLYON Technologies laboratory and team in Medellín",
  originAlt: "Evidence and documentation behind SOLYON Technologies",
  realAsset: "EXISTING ASSET",
  realAssetReview: "EXISTING ASSET · REPLACEMENT REVIEW",
  evidence: [
    { value: "8+ years", label: "of accumulated experience in operations connected to United States trucking" },
    { value: "17", label: "handwritten notebooks documenting processes, decisions and learning" },
    { value: "89 GB", label: "of evidence and documentation organized as an enterprise corpus" },
    { value: "2 countries", label: "with construction and validation in Colombia and the United States" },
  ],
  originEyebrow: "Journey",
  originTitle: "The technology began long before the first line of code.",
  originIntro: "The laboratory does not begin with an abstract hypothesis. It begins with problems known from the inside, documented for years and later subjected to structuring, development and validation.",
  originSteps: [
    { label: "Experience", title: "Operate and understand the system", body: "Direct work in trucking, dispatch, factoring, insurance, compliance, service and quality control created domain knowledge and constant exposure to real exceptions." },
    { label: "Evidence", title: "Document in order to think and remember", body: "Notebooks, files, photographs, processes and decisions formed an enterprise memory now used to reconstruct patterns, friction and operating criteria." },
    { label: "Laboratory", title: "Turn experience into architecture", body: "SOLYON structures that knowledge as rules, data, taxonomies, workflows, interfaces, agents and decision-support tools." },
    { label: "Validation", title: "Demonstrate capability in real environments", body: "Sovereign Truckguard and SOLYON Move subject different laboratory capabilities to verifiable users, institutions, markets and constraints." },
  ],
  foundersEyebrow: "Founding team",
  foundersTitle: "Vision and execution built as one capability.",
  foundersIntro: "The founding complement combines operating knowledge, enterprise architecture, process control, user understanding and execution discipline.",
  founders: [
    {
      initials: "SM",
      name: "Sergio Andrés Murillo",
      role: "Co-founder and CEO",
      body: "Leads the vision, enterprise architecture and conversion of operating knowledge into technology. His experience spans trucking, insurance, dispatch, factoring, compliance, sales and the progressive construction of the ecosystem.",
      tags: ["Strategy", "Architecture", "Trucking", "Insurance", "Product"],
    },
    {
      initials: "ET",
      name: "Elizabeth Tamayo",
      role: "Co-founder and COO",
      body: "Leads execution, process control and adaptation to real users. Her experience includes dispatch, quality control, quoting, policy review, activation and auditing, as well as the operating structuring of SOLYON Move.",
      tags: ["Operations", "QA", "Insurance", "Users", "Execution"],
    },
  ],
  medellinEyebrow: "Built from Medellín",
  medellinTitle: "The city ecosystem helped turn experience into a DeepTech company.",
  medellinBody: "Medellín contributes talent, support, institutions and an innovation environment where SOLYON has strengthened its enterprise capability and executed technology applied to verifiable challenges.",
  medellinItems: [
    { title: "CTI District", body: "Incubation and strengthening within Medellín's science, technology and innovation ecosystem." },
    { title: "Créame and UPB", body: "Business and technology support during company structuring." },
    { title: "Ruta N", body: "Institutional articulation and monitoring of SOLYON Move's technology execution." },
    { title: "Toyota Mobility Foundation", body: "International context for mobility and accessibility innovation." },
  ],
  medellinAlt: "Institutional ecosystem and city value of SOLYON Technologies in Medellín",
  teamEyebrow: "Multidisciplinary capability",
  teamTitle: "A laboratory built around execution.",
  teamBody: "The company combines domain knowledge with development, quality assurance, product, sales, design, communication, research and documentation. Names and relationships are published only when status and authorization are confirmed.",
  capabilities: ["Full-stack development", "QA and quality control", "Product and operations", "Sales and distribution", "Design and communication", "Audiovisual production", "Applied research", "Documentation and control"],
  principleEyebrow: "Building principle",
  principleTitle: "Operations first. Evidence always. Narrative afterward.",
  principleBody: "SOLYON's credibility depends on keeping vision, evidence and execution aligned. We therefore distinguish precisely what has been built, validated, projected and remains pending.",
  principleButton: "Start a conversation",
  principleAlt: "Long-term vision and systemic construction of SOLYON Technologies",
};
