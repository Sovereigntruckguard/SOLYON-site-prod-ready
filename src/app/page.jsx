"use client";

import Image from "next/image";
import Link from "next/link";
import DynamicHero from "@/components/DynamicHero";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export default function Page() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      <DynamicHero />

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.companyEyebrow}</p>
            <h2 className="section-title mt-5">{t.companyTitle}</h2>
            <p className="section-copy mt-6">{t.companyBody}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3">
              <Image src="/visual/about-lab.png" alt={t.labAlt} width={900} height={650} sizes="(max-width: 640px) 100vw, 50vw" className="h-full min-h-[280px] w-full rounded-2xl object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 sm:mt-12">
              <Image src="/visual/about-origin.png" alt={t.originAlt} width={900} height={650} sizes="(max-width: 640px) 100vw, 50vw" className="h-full min-h-[280px] w-full rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">{t.valueEyebrow}</p>
            <h2 className="section-title mt-5">{t.valueTitle}</h2>
            <p className="section-copy mt-6">{t.valueBody}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {t.valueCards.map((card, index) => (
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
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e12] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.5)]">
            <Image src="/visual/solyon_move_institucional.png" alt={t.moveAlt} width={1200} height={820} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full rounded-[1.45rem] object-cover" />
          </div>
          <div>
            <p className="eyebrow">{t.moveEyebrow}</p>
            <h2 className="section-title mt-5">{t.moveTitle}</h2>
            <p className="section-copy mt-6">{t.moveBody}</p>
            <div className="mt-8 grid gap-3 text-sm text-white/65 sm:grid-cols-2">
              {t.moveProof.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.025] p-4">{item}</div>)}
            </div>
            <Link href="/solyon-move" className="mt-9 inline-flex rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]">{t.moveButton}</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">{t.architectureEyebrow}</p>
            <h2 className="section-title mt-5">{t.architectureTitle}</h2>
            <p className="section-copy mt-6">{t.architectureBody}</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.architecture.map((item) => (
              <article key={item.name} className="system-card flex min-h-[320px] flex-col overflow-hidden p-0">
                <div className="relative h-44 overflow-hidden border-b border-white/10">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">{item.type}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{item.name}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-white/55">{item.body}</p>
                  <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-[#E6BC68]">{item.status}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
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

      <section className="section-shell pb-24 md:pb-32">
        <div className="overflow-hidden rounded-3xl border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] to-[#0b0e12]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="p-8 md:p-14">
              <p className="eyebrow">{t.ctaEyebrow}</p>
              <h2 className="section-title mt-5">{t.ctaTitle}</h2>
              <p className="section-copy mt-6">{t.ctaBody}</p>
              <Link href="/contact" className="mt-9 inline-flex rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]">{t.ctaButton}</Link>
            </div>
            <div className="relative min-h-[360px]">
              <Image src="/visual/impact-systemic.png" alt={t.ctaAlt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#17140d] via-transparent to-transparent lg:block" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  companyEyebrow: "DeepTech construido en Medellín",
  companyTitle: "Convertimos experiencia operativa en infraestructura tecnológica.",
  companyBody: "SOLYON Technologies es una compañía tecnológica y laboratorio de IA aplicada que construye desde Medellín soluciones para riesgo, seguros, trucking y movilidad. Nuestra ventaja no parte de una tendencia: parte de años de conocimiento de dominio, evidencia operativa y capacidad de ejecución.",
  labAlt: "Laboratorio tecnológico de SOLYON Technologies en Medellín",
  originAlt: "Origen operativo y documental de SOLYON Technologies",
  valueEyebrow: "Propuesta de valor",
  valueTitle: "Del conocimiento difícil de copiar a sistemas que pueden escalar.",
  valueBody: "Nuestra tesis combina tres activos: conocimiento especializado de operaciones complejas, un corpus documental construido durante años y un laboratorio capaz de convertir ese conocimiento en software, automatización e inteligencia aplicada.",
  valueCards: [
    { title: "Conocimiento de dominio", body: "Entendemos desde dentro seguros comerciales, trucking, operación, cumplimiento, contactabilidad y movilidad accesible." },
    { title: "Evidencia estructurada", body: "Documentamos procesos, decisiones, excepciones y aprendizajes para transformarlos en modelos, reglas y productos." },
    { title: "Validación real", body: "Probamos tecnología en entornos operativos de Estados Unidos y en proyectos institucionales desarrollados en Medellín." },
  ],
  moveEyebrow: "Proyecto de ciudad · Movilidad accesible",
  moveTitle: "SOLYON Move demuestra que Medellín puede construir DeepTech con impacto público.",
  moveBody: "SOLYON Move es una solución de movilidad y accesibilidad que adapta la planificación de viaje a las condiciones de la ruta y a características personales como tipo de movilidad, edad y peso. Su desarrollo integra alertas climáticas y de superficie para apoyar decisiones más seguras.",
  moveProof: ["Piloto con Ruta N y Toyota Mobility Foundation", "Aplicación publicada en Google Play", "Diseño centrado en personas con movilidad reducida", "Integración planteada con información urbana y climática"],
  moveButton: "Ver SOLYON Move",
  moveAlt: "Interfaz de SOLYON Move, tecnología de movilidad accesible en Medellín",
  architectureEyebrow: "Ecosistema tecnológico",
  architectureTitle: "Una tesis tecnológica aplicada en dos industrias de alta complejidad.",
  architectureBody: "SOLYON organiza sus capacidades alrededor de una arquitectura central de inteligencia, una operación de validación en trucking insurance y un producto independiente de movilidad accesible.",
  architecture: [
    { type: "Proyecto central", name: "Latin Truck Risk Operating System", image: "/visual/product-azoth-desktop.png", alt: "Sistema operativo de riesgo para trucking latino", body: "Arquitectura para estructurar inteligencia de riesgo, automatización y decisiones alrededor de seguros y operaciones de trucking latino en Estados Unidos.", status: "En construcción y validación progresiva." },
    { type: "Operación de validación", name: "Sovereign Truckguard", image: "/visual/product-truckboss-quoting-mobile.png", alt: "Tecnología aplicada a seguros de trucking", body: "Canal comercial y operación de agencia donde se validan procesos, flujos, necesidades y capacidades tecnológicas del mercado camionero.", status: "Agencia tecnológica; no insurer ni MGA actualmente." },
    { type: "Producto independiente", name: "SOLYON Move", image: "/visual/solyon_move_institucional.png", alt: "Producto SOLYON Move de movilidad accesible", body: "Tecnología de accesibilidad urbana desarrollada en Medellín para mejorar la seguridad y personalización de los desplazamientos.", status: "Piloto institucional ejecutado y producto en evolución." },
  ],
  evidenceEyebrow: "Moat de conocimiento",
  evidenceTitle: "Una base de conocimiento difícil de replicar.",
  evidenceBody: "El valor no está solo en el código. Está en la combinación de experiencia operativa, documentación histórica, comprensión del usuario y capacidad para convertir todo eso en tecnología propia.",
  evidenceItems: [
    { value: "8+ años", label: "de experiencia acumulada en operaciones vinculadas al trucking en Estados Unidos" },
    { value: "17", label: "cuadernos manuscritos con procesos, decisiones y aprendizaje operativo" },
    { value: "89 GB", label: "de documentación y evidencia organizada como corpus empresarial" },
    { value: "2 países", label: "laboratorio en Colombia y entornos de validación en Colombia y Estados Unidos" },
  ],
  ctaEyebrow: "Ronda y colaboración",
  ctaTitle: "Buscamos aliados para convertir capacidades validadas en infraestructura regional.",
  ctaBody: "Estamos abriendo conversaciones con fondos, aseguradoras, instituciones, empresas de movilidad y socios tecnológicos que entiendan el valor de construir DeepTech desde Latinoamérica para problemas globales.",
  ctaButton: "Conversemos",
  ctaAlt: "Impacto sistémico de SOLYON Technologies desde Medellín",
};

const en = {
  companyEyebrow: "DeepTech built in Medellín",
  companyTitle: "We turn operating experience into technology infrastructure.",
  companyBody: "SOLYON Technologies is an applied AI company and laboratory building solutions in Medellín for risk, insurance, trucking and mobility. Our advantage does not begin with a trend. It begins with years of domain knowledge, operating evidence and execution capacity.",
  labAlt: "SOLYON Technologies laboratory in Medellín",
  originAlt: "Operating and documentary origins of SOLYON Technologies",
  valueEyebrow: "Value proposition",
  valueTitle: "From hard-to-copy knowledge to systems that can scale.",
  valueBody: "Our thesis combines three assets: specialized knowledge of complex operations, a documentary corpus built over years and a laboratory capable of turning that knowledge into software, automation and applied intelligence.",
  valueCards: [
    { title: "Domain knowledge", body: "We understand commercial insurance, trucking, operations, compliance, contactability and accessible mobility from within." },
    { title: "Structured evidence", body: "We document processes, decisions, exceptions and lessons to transform them into models, rules and products." },
    { title: "Real validation", body: "We test technology in United States operating environments and institutional projects developed in Medellín." },
  ],
  moveEyebrow: "City project · Accessible mobility",
  moveTitle: "SOLYON Move shows that Medellín can build DeepTech with public impact.",
  moveBody: "SOLYON Move is a mobility and accessibility solution that adapts trip planning to route conditions and personal characteristics such as mobility type, age and weight. Its development incorporates weather and surface alerts to support safer decisions.",
  moveProof: ["Pilot with Ruta N and Toyota Mobility Foundation", "Application published on Google Play", "Designed for people with reduced mobility", "Urban and weather data integration roadmap"],
  moveButton: "Explore SOLYON Move",
  moveAlt: "SOLYON Move accessible mobility interface in Medellín",
  architectureEyebrow: "Technology ecosystem",
  architectureTitle: "One technology thesis applied across two high-complexity industries.",
  architectureBody: "SOLYON organizes its capabilities around a central intelligence architecture, a validation operation in trucking insurance and an independent accessible mobility product.",
  architecture: [
    { type: "Central project", name: "Latin Truck Risk Operating System", image: "/visual/product-azoth-desktop.png", alt: "Latin trucking risk operating system", body: "An architecture for structuring risk intelligence, automation and decisions around Latin trucking insurance and operations in the United States.", status: "Under construction and progressive validation." },
    { type: "Validation operation", name: "Sovereign Truckguard", image: "/visual/product-truckboss-quoting-mobile.png", alt: "Technology applied to trucking insurance", body: "Commercial channel and agency operation where market workflows, needs and technology capabilities are validated.", status: "Technology-enabled agency; not currently an insurer or MGA." },
    { type: "Independent product", name: "SOLYON Move", image: "/visual/solyon_move_institucional.png", alt: "SOLYON Move accessible mobility product", body: "Urban accessibility technology developed in Medellín to improve the safety and personalization of mobility decisions.", status: "Institutional pilot executed; product in evolution." },
  ],
  evidenceEyebrow: "Knowledge moat",
  evidenceTitle: "A knowledge base that is difficult to replicate.",
  evidenceBody: "The value is not only in the code. It is in the combination of operating experience, historical documentation, user understanding and the ability to transform all of it into proprietary technology.",
  evidenceItems: [
    { value: "8+ years", label: "of accumulated experience in operations connected to United States trucking" },
    { value: "17", label: "handwritten notebooks documenting processes, decisions and operating lessons" },
    { value: "89 GB", label: "of documentation and evidence organized as an enterprise corpus" },
    { value: "2 countries", label: "laboratory in Colombia and validation environments in Colombia and the United States" },
  ],
  ctaEyebrow: "Fundraising and collaboration",
  ctaTitle: "We seek partners to turn validated capabilities into regional infrastructure.",
  ctaBody: "We are opening conversations with funds, insurers, institutions, mobility companies and technology partners that understand the value of building DeepTech in Latin America for global problems.",
  ctaButton: "Start a conversation",
  ctaAlt: "Systemic impact of SOLYON Technologies from Medellín",
};
