"use client";

import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export default function EcosystemPage() {
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
        <div className="section-shell">
          <p className="eyebrow">{t.architectureEyebrow}</p>
          <h2 className="section-title mt-5">{t.architectureTitle}</h2>
          <p className="section-copy mt-7">{t.architectureBody}</p>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.entities.map((item) => (
              <article key={item.name} className="system-card flex min-h-[330px] flex-col">
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">{item.type}</p>
                <h3 className="mt-5 text-2xl font-semibold">{item.name}</h3>
                <p className="mt-5 flex-1 text-sm leading-7 text-white/55">{item.body}</p>
                <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-6 text-[#E6BC68]">{item.status}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">{t.relationshipsEyebrow}</p>
            <h2 className="section-title mt-5">{t.relationshipsTitle}</h2>
            <p className="section-copy mt-7">{t.relationshipsBody}</p>
          </div>
          <div className="space-y-5">
            {t.relationships.map((item, index) => (
              <article key={item.title} className="system-card flex gap-5">
                <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <p className="eyebrow">{t.modulesEyebrow}</p>
          <h2 className="section-title mt-5">{t.modulesTitle}</h2>
          <p className="section-copy mt-7">{t.modulesBody}</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.modules.map((module) => (
              <div key={module} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/65">
                {module}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-xs leading-6 text-white/40">{t.modulesNote}</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "Ecosistema",
  title: "Una arquitectura empresarial clara, no una colección de proyectos.",
  intro: "SOLYON organiza compañías, proyectos, productos y módulos según su función real. Esta separación permite proteger la tesis central, asignar recursos con disciplina y comunicar el nivel de validación sin inflación narrativa.",
  architectureEyebrow: "Estructura",
  architectureTitle: "Compañía madre, proyecto central y entornos diferenciados",
  architectureBody: "Cada entidad tiene un usuario, una función y una dependencia específica dentro del ecosistema.",
  entities: [
    {
      type: "Compañía madre y laboratorio",
      name: "SOLYON Technologies",
      body: "Desarrolla la arquitectura tecnológica, capacidades de IA aplicada, productos, propiedad intelectual y conocimiento reutilizable del ecosistema.",
      status: "Base tecnológica y organizacional del ecosistema.",
    },
    {
      type: "Operación de seguros y validación",
      name: "Sovereign Truckguard",
      body: "Opera como canal comercial y entorno real para aprender de adquisición, cotización, servicio, cumplimiento, documentación y renovación dentro del trucking estadounidense.",
      status: "No se presenta actualmente como insurer ni MGA.",
    },
    {
      type: "Producto independiente",
      name: "SOLYON Move",
      body: "Producto de movilidad y accesibilidad para personas con movilidad reducida. Su valor es tecnológico e institucional y mantiene una tesis propia separada del trucking.",
      status: "Validación institucional propia en Medellín.",
    },
  ],
  relationshipsEyebrow: "Cómo se conectan",
  relationshipsTitle: "Una relación de evidencia, tecnología y aplicación",
  relationshipsBody: "La integración no significa que todas las iniciativas sean el mismo negocio. Significa que comparten capacidades, aprendizaje y disciplina de construcción.",
  relationships: [
    { title: "La operación genera evidencia", body: "Sovereign Truckguard expone problemas, flujos y restricciones del mercado camionero y de seguros." },
    { title: "El laboratorio convierte evidencia en capacidad", body: "SOLYON estructura conocimiento y desarrolla herramientas, módulos y sistemas con alcance definido." },
    { title: "Los productos validan capacidades", body: "Cada implementación demuestra utilidad en un contexto específico sin extrapolar automáticamente sus resultados a todo el ecosistema." },
  ],
  modulesEyebrow: "Módulos SOS",
  modulesTitle: "Capacidades interoperables, no negocios independientes",
  modulesBody: "Los módulos se desarrollan para resolver partes concretas del sistema operativo y pueden compartir infraestructura, datos y reglas.",
  modules: ["Contactabilidad y CRM", "Cotización y underwriting", "Cumplimiento y documentación", "Certificados y servicio", "Renovación y seguimiento", "Formación y Academy", "Reporting y analítica", "Orquestación de agentes"],
  modulesNote: "La presencia de un módulo en esta arquitectura no implica disponibilidad comercial, validación completa ni autonomía como unidad de negocio. Cada capacidad conserva su etapa real: descubrimiento, validación, construcción, piloto o comercialización.",
};

const en = {
  eyebrow: "Ecosystem",
  title: "A clear enterprise architecture, not a collection of projects.",
  intro: "SOLYON organizes companies, projects, products and modules according to their actual function. This separation protects the central thesis, supports disciplined resource allocation and communicates validation levels without narrative inflation.",
  architectureEyebrow: "Structure",
  architectureTitle: "Parent company, central project and distinct environments",
  architectureBody: "Each entity has a specific user, function and dependency within the ecosystem.",
  entities: [
    {
      type: "Parent company and laboratory",
      name: "SOLYON Technologies",
      body: "Develops the technology architecture, applied AI capabilities, products, intellectual property and reusable knowledge of the ecosystem.",
      status: "Technology and organizational foundation of the ecosystem.",
    },
    {
      type: "Insurance operation and validation",
      name: "Sovereign Truckguard",
      body: "Operates as a commercial channel and real environment for learning from acquisition, quoting, service, compliance, documentation and renewal in US trucking.",
      status: "Not currently presented as an insurer or MGA.",
    },
    {
      type: "Independent product",
      name: "SOLYON Move",
      body: "Mobility and accessibility product for people with reduced mobility. Its value is technological and institutional, with a thesis separate from trucking.",
      status: "Independent institutional validation in Medellín.",
    },
  ],
  relationshipsEyebrow: "How they connect",
  relationshipsTitle: "A relationship between evidence, technology and application",
  relationshipsBody: "Integration does not mean every initiative is the same business. It means they share capabilities, learning and construction discipline.",
  relationships: [
    { title: "Operations generate evidence", body: "Sovereign Truckguard exposes problems, workflows and constraints in trucking and insurance." },
    { title: "The laboratory turns evidence into capability", body: "SOLYON structures knowledge and develops tools, modules and systems with defined scope." },
    { title: "Products validate capabilities", body: "Each implementation demonstrates utility in a specific context without automatically extrapolating results across the ecosystem." },
  ],
  modulesEyebrow: "SOS modules",
  modulesTitle: "Interoperable capabilities, not standalone businesses",
  modulesBody: "Modules are developed to solve specific parts of the operating system and may share infrastructure, data and rules.",
  modules: ["Contactability and CRM", "Quoting and underwriting", "Compliance and documentation", "Certificates and service", "Renewal and follow-up", "Training and Academy", "Reporting and analytics", "Agent orchestration"],
  modulesNote: "A module's presence in this architecture does not imply commercial availability, complete validation or autonomy as a business unit. Each capability retains its actual stage: discovery, validation, construction, pilot or commercialization.",
};
