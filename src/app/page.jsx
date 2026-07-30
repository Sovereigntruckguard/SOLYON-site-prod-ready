"use client";

import Image from "next/image";
import Link from "next/link";
import DynamicHero from "@/components/DynamicHero";
import DeeptechSystemVisual from "@/components/DeeptechSystemVisual";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

function AssetFrame({ src, alt, label, mockup = false, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0e12] p-3 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={820}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="h-full min-h-[280px] w-full rounded-2xl object-cover"
      />
      <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65 backdrop-blur-lg">
        {mockup ? `MOCKUP · ${label}` : label}
      </div>
    </div>
  );
}

export default function Page() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      <DynamicHero />

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.companyEyebrow}</p>
            <h2 className="section-title mt-5">{t.companyTitle}</h2>
            <p className="section-copy mt-6">{t.companyBody}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              {t.companyTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs text-white/55">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <AssetFrame src="/visual/about-lab.png" alt={t.labAlt} label={t.realAsset} />
            <AssetFrame src="/visual/about-origin.png" alt={t.originAlt} label={t.realAsset} className="sm:mt-12" />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">{t.methodEyebrow}</p>
              <h2 className="section-title mt-5">{t.methodTitle}</h2>
            </div>
            <p className="section-copy">{t.methodBody}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {t.methodCards.map((card, index) => (
              <article key={card.title} className="system-card">
                <span className="text-xs font-semibold text-[#E6BC68]">0{index + 1}</span>
                <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.coreEyebrow}</p>
            <h2 className="section-title mt-5">{t.coreTitle}</h2>
            <p className="section-copy mt-6">{t.coreBody}</p>
            <div className="mt-8 space-y-3">
              {t.coreCapabilities.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-white/62">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E6BC68]" />
                  {item}
                </div>
              ))}
            </div>
            <Link href="/technology" className="mt-9 inline-flex rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]">
              {t.coreButton}
            </Link>
          </div>
          <DeeptechSystemVisual compact />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">{t.validationEyebrow}</p>
            <h2 className="section-title mt-5">{t.validationTitle}</h2>
            <p className="section-copy mt-6">{t.validationBody}</p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12]">
              <div className="relative h-64 overflow-hidden border-b border-white/10">
                <Image src="/visual/product-truckboss-quoting-mobile.png" alt={t.sovereignAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-transparent to-transparent" />
                <span className="absolute left-6 top-6 rounded-full border border-[#E6BC68]/35 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#E6BC68] backdrop-blur-lg">
                  {t.productVisual}
                </span>
              </div>
              <div className="p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[#E6BC68]">{t.sovereignType}</p>
                <h3 className="mt-4 text-3xl font-semibold">Sovereign Truckguard</h3>
                <p className="mt-5 text-sm leading-7 text-white/58">{t.sovereignBody}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {t.sovereignProof.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs leading-5 text-white/50">{item}</div>)}
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12]">
              <div className="relative h-64 overflow-hidden border-b border-white/10">
                <Image src="/visual/solyon_move_institucional.png" alt={t.moveAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-transparent to-transparent" />
                <span className="absolute left-6 top-6 rounded-full border border-[#E6BC68]/35 bg-[#07090c]/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#E6BC68] backdrop-blur-lg">
                  {t.existingAsset}
                </span>
              </div>
              <div className="p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[#E6BC68]">{t.moveType}</p>
                <h3 className="mt-4 text-3xl font-semibold">SOLYON Move</h3>
                <p className="mt-5 text-sm leading-7 text-white/58">{t.moveBody}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {t.moveProof.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs leading-5 text-white/50">{item}</div>)}
                </div>
                <Link href="/solyon-move" className="mt-8 inline-flex text-sm font-semibold text-[#E6BC68] transition hover:text-[#F0CA7E]">{t.moveButton} →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.cityEyebrow}</p>
            <h2 className="section-title mt-5">{t.cityTitle}</h2>
            <p className="section-copy mt-6">{t.cityBody}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.cityEvidence.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
                  <p className="text-sm font-semibold text-white/85">{item.title}</p>
                  <p className="mt-2 text-xs leading-5 text-white/45">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <AssetFrame src="/visual/impact-institutional.png" alt={t.cityAlt} label={t.existingAsset} />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">{t.evidenceEyebrow}</p>
            <h2 className="section-title mt-5">{t.evidenceTitle}</h2>
            <p className="section-copy mt-6">{t.evidenceBody}</p>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {t.evidenceItems.map((item) => (
              <div key={item.label} className="bg-[#0b0e12] p-7">
                <p className="text-2xl font-semibold text-white md:text-3xl">{item.value}</p>
                <p className="mt-3 text-xs leading-5 text-white/45">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="overflow-hidden rounded-3xl border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] to-[#0b0e12]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="p-8 md:p-14">
              <p className="eyebrow">{t.ctaEyebrow}</p>
              <h2 className="section-title mt-5">{t.ctaTitle}</h2>
              <p className="section-copy mt-6">{t.ctaBody}</p>
              <Link href="/contact" className="mt-9 inline-flex rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]">{t.ctaButton}</Link>
            </div>
            <div className="relative min-h-[380px]">
              <Image src="/visual/impact-systemic.png" alt={t.ctaAlt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
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
  companyEyebrow: "Compañía madre · Laboratorio DeepTech",
  companyTitle: "SOLYON construye la capacidad que conecta todo el ecosistema.",
  companyBody: "No somos una colección de aplicaciones aisladas. SOLYON Technologies convierte conocimiento operativo, evidencia documental y problemas complejos en sistemas tecnológicos. Desde Medellín diseñamos la arquitectura, desarrollamos producto y validamos capacidades en Colombia y Estados Unidos.",
  companyTags: ["IA aplicada", "Inteligencia de riesgo", "CRM y automatización", "Movilidad y ciudad", "Insurance technology"],
  labAlt: "Equipo y laboratorio de SOLYON Technologies en Medellín",
  originAlt: "Historia operativa y documental que da origen a SOLYON Technologies",
  realAsset: "ACTIVO EXISTENTE",
  existingAsset: "ACTIVO EXISTENTE · VALIDAR REEMPLAZO",
  productVisual: "VISUAL DE PRODUCTO · VALIDAR REEMPLAZO",
  methodEyebrow: "Nuestro método",
  methodTitle: "La tecnología comienza antes del código.",
  methodBody: "Partimos de procesos conocidos desde dentro. Capturamos evidencia, modelamos decisiones y excepciones, construimos capacidades y las llevamos a entornos donde pueden validarse con restricciones reales.",
  methodCards: [
    { title: "Operación", body: "Experiencia directa en procesos de alta fricción, usuarios reales y decisiones críticas." },
    { title: "Evidencia", body: "Documentación histórica, casos, datos y conocimiento tácito convertido en estructura." },
    { title: "Arquitectura", body: "Reglas, flujos, controles, interfaces y modelos diseñados como sistema." },
    { title: "Validación", body: "Prueba progresiva en operación comercial, producto e iniciativas institucionales." },
  ],
  coreEyebrow: "Proyecto tecnológico central",
  coreTitle: "Intelligence Latin Truck Risk Operating System.",
  coreBody: "La tesis central de SOLYON es construir una capa de inteligencia operativa y de riesgo para el camionero latino y el ecosistema de seguros de trucking en Estados Unidos. La arquitectura se desarrolla por capacidades, no se presenta todavía como una plataforma completamente terminada.",
  coreCapabilities: [
    "Inteligencia de riesgo y soporte a decisiones.",
    "CRM operativo, contactabilidad y gestión de oportunidades.",
    "Automatización de flujos, agentes y memoria estructurada.",
    "Evidencia, trazabilidad, reporting y control de procesos.",
  ],
  coreButton: "Ver arquitectura tecnológica",
  validationEyebrow: "Entornos de validación",
  validationTitle: "Dos industrias distintas demuestran una misma capacidad de laboratorio.",
  validationBody: "Sovereign Truckguard y SOLYON Move no compiten por ser el centro. Cada uno somete las capacidades de SOLYON a problemas, usuarios, instituciones y restricciones diferentes.",
  sovereignType: "Seguros · Trucking · Estados Unidos",
  sovereignAlt: "Tecnología aplicada a la operación de seguros de trucking",
  sovereignBody: "Sovereign Truckguard es la operación y canal comercial donde SOLYON aprende y valida procesos de seguros comerciales: contacto, cotización, cumplimiento, documentación, servicio, ventas y renovaciones. Actualmente no se presenta como insurer ni MGA.",
  sovereignProof: ["Dominio operativo de trucking insurance", "Validación de CRM y flujos comerciales", "Datos y excepciones de operación real", "Ruta futura hacia infraestructura aseguradora"],
  moveType: "Movilidad · Ciudad · Validación institucional",
  moveAlt: "SOLYON Move como entorno de validación de tecnología de movilidad y ciudad",
  moveBody: "SOLYON Move valida la capacidad de SOLYON para construir producto, experiencia de usuario, personalización, CRM institucional, gestión operativa e integración futura de datos urbanos. Su valor está tanto en la app como en la capa que permite administrar, observar y escalar programas de movilidad accesible.",
  moveProof: ["App para usuarios y rutas accesibles", "CRM y capa de gestión institucional", "Piloto con Ruta N y Toyota Mobility Foundation", "Roadmap de integración urbana y SIATA"],
  moveButton: "Conocer el caso SOLYON Move",
  cityEyebrow: "DeepTech construido en Medellín",
  cityTitle: "La ciudad no es solo nuestra ubicación. Es parte de nuestra ventaja.",
  cityBody: "SOLYON combina talento local, experiencia internacional y aprendizaje institucional. La incubación y acompañamiento dentro del ecosistema de ciencia, tecnología e innovación de Medellín ayudaron a convertir una trayectoria operativa en una compañía con capacidad de producto, laboratorio e impacto.",
  cityEvidence: [
    { title: "Distrito CTI de Medellín", body: "Proceso de incubación y fortalecimiento dentro del ecosistema local de ciencia, tecnología e innovación." },
    { title: "Créame y UPB", body: "Acompañamiento empresarial y tecnológico durante la etapa de estructuración." },
    { title: "Ruta N", body: "Articulación institucional y entorno de ejecución para validar tecnología aplicada." },
    { title: "Toyota Mobility Foundation", body: "Contexto internacional de innovación en movilidad y accesibilidad." },
  ],
  cityAlt: "Validación institucional y valor de ciudad de SOLYON Technologies en Medellín",
  evidenceEyebrow: "Moat de conocimiento",
  evidenceTitle: "El código puede replicarse. El recorrido que lo alimenta, no fácilmente.",
  evidenceBody: "La ventaja de SOLYON está en la combinación de conocimiento especializado, documentación histórica, comprensión de usuarios y capacidad para convertir esa base en sistemas, productos y propiedad intelectual protegible.",
  evidenceItems: [
    { value: "8+ años", label: "de experiencia acumulada en operaciones vinculadas al trucking en Estados Unidos" },
    { value: "17", label: "cuadernos manuscritos que documentan procesos, decisiones y aprendizaje" },
    { value: "89 GB", label: "de evidencia y documentación organizada como corpus empresarial" },
    { value: "2 países", label: "desarrollo y validación operativa e institucional en Colombia y Estados Unidos" },
  ],
  ctaEyebrow: "Escalamiento",
  ctaTitle: "Construimos desde Latinoamérica para problemas que trascienden la región.",
  ctaBody: "Buscamos capital y aliados estratégicos para acelerar el laboratorio, consolidar el sistema operativo de riesgo y convertir validaciones reales en infraestructura tecnológica escalable.",
  ctaButton: "Abrir una conversación",
  ctaAlt: "Impacto y visión global de SOLYON Technologies",
};

const en = {
  companyEyebrow: "Parent company · DeepTech laboratory",
  companyTitle: "SOLYON builds the capability connecting the entire ecosystem.",
  companyBody: "We are not a collection of isolated applications. SOLYON Technologies turns operating knowledge, documented evidence and complex problems into technology systems. From Medellín, we design architecture, develop products and validate capabilities in Colombia and the United States.",
  companyTags: ["Applied AI", "Risk intelligence", "CRM and automation", "Mobility and cities", "Insurance technology"],
  labAlt: "SOLYON Technologies team and laboratory in Medellín",
  originAlt: "Operating and documentary history behind SOLYON Technologies",
  realAsset: "EXISTING ASSET",
  existingAsset: "EXISTING ASSET · REPLACEMENT REVIEW",
  productVisual: "PRODUCT VISUAL · REPLACEMENT REVIEW",
  methodEyebrow: "Our method",
  methodTitle: "Technology begins before code.",
  methodBody: "We begin with processes we know from the inside. We capture evidence, model decisions and exceptions, build capabilities and take them into environments where they can be tested under real constraints.",
  methodCards: [
    { title: "Operations", body: "Direct experience with high-friction processes, real users and critical decisions." },
    { title: "Evidence", body: "Historical documentation, cases, data and tacit knowledge converted into structure." },
    { title: "Architecture", body: "Rules, workflows, controls, interfaces and models designed as a system." },
    { title: "Validation", body: "Progressive testing through commercial operations, products and institutional initiatives." },
  ],
  coreEyebrow: "Central technology project",
  coreTitle: "Intelligence Latin Truck Risk Operating System.",
  coreBody: "SOLYON's central thesis is to build an operational and risk intelligence layer for Latin truckers and the United States trucking-insurance ecosystem. The architecture is developed capability by capability and is not yet presented as a fully completed platform.",
  coreCapabilities: ["Risk intelligence and decision support.", "Operating CRM, contactability and opportunity management.", "Workflow automation, agents and structured memory.", "Evidence, traceability, reporting and process control."],
  coreButton: "Explore the technology architecture",
  validationEyebrow: "Validation environments",
  validationTitle: "Two different industries demonstrate one laboratory capability.",
  validationBody: "Sovereign Truckguard and SOLYON Move do not compete to be the center. Each subjects SOLYON's capabilities to different problems, users, institutions and constraints.",
  sovereignType: "Insurance · Trucking · United States",
  sovereignAlt: "Technology applied to trucking-insurance operations",
  sovereignBody: "Sovereign Truckguard is the operation and commercial channel where SOLYON learns from and validates commercial-insurance processes: contact, quoting, compliance, documentation, service, sales and renewals. It is not currently presented as an insurer or MGA.",
  sovereignProof: ["Trucking-insurance operating domain", "CRM and commercial workflow validation", "Real operating data and exceptions", "Long-term route toward insurance infrastructure"],
  moveType: "Mobility · City · Institutional validation",
  moveAlt: "SOLYON Move as a validation environment for mobility and city technology",
  moveBody: "SOLYON Move validates SOLYON's ability to build products, user experiences, personalization, institutional CRM, operating management and future urban-data integration. Its value lies in both the application and the layer used to manage, observe and scale accessible-mobility programs.",
  moveProof: ["User app and accessible routes", "CRM and institutional management layer", "Pilot with Ruta N and Toyota Mobility Foundation", "Urban integration and SIATA roadmap"],
  moveButton: "Explore the SOLYON Move case",
  cityEyebrow: "DeepTech built in Medellín",
  cityTitle: "The city is not merely our location. It is part of our advantage.",
  cityBody: "SOLYON combines local talent, international operating experience and institutional learning. Incubation and support within Medellín's science, technology and innovation ecosystem helped transform an operating journey into a company with product, laboratory and impact capabilities.",
  cityEvidence: [
    { title: "Medellín CTI District", body: "Incubation and strengthening within the local science, technology and innovation ecosystem." },
    { title: "Créame and UPB", body: "Business and technology support during the structuring stage." },
    { title: "Ruta N", body: "Institutional articulation and an execution environment for applied technology validation." },
    { title: "Toyota Mobility Foundation", body: "International context for mobility and accessibility innovation." },
  ],
  cityAlt: "Institutional validation and city value created by SOLYON Technologies in Medellín",
  evidenceEyebrow: "Knowledge moat",
  evidenceTitle: "Code can be replicated. The journey feeding it cannot be copied easily.",
  evidenceBody: "SOLYON's advantage lies in the combination of specialized knowledge, historical documentation, user understanding and the ability to turn that base into systems, products and protectable intellectual property.",
  evidenceItems: [
    { value: "8+ years", label: "of accumulated experience in operations connected to United States trucking" },
    { value: "17", label: "handwritten notebooks documenting processes, decisions and operating lessons" },
    { value: "89 GB", label: "of evidence and documentation organized as an enterprise corpus" },
    { value: "2 countries", label: "operating and institutional development and validation in Colombia and the United States" },
  ],
  ctaEyebrow: "Scale",
  ctaTitle: "We build in Latin America for problems extending beyond the region.",
  ctaBody: "We seek capital and strategic partners to accelerate the laboratory, consolidate the risk operating system and turn real validation into scalable technology infrastructure.",
  ctaButton: "Start a conversation",
  ctaAlt: "SOLYON Technologies global vision and impact",
};
