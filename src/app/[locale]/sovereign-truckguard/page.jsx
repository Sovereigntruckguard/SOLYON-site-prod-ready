import {
  Callout,
  ClosingCTA,
  Container,
  DefinitionGrid,
  MetricGrid,
  PageHero,
  Section,
  SectionHeading,
  StatusPill,
} from "@/components/ui";
import { getCopy } from "@/lib/content";
import { localizedPath, pageMetadata } from "@/lib/site";

export async function generateMetadata(props) {
  const params = await props.params;
  const content = getCopy(params.locale).sovereign;
  return pageMetadata(
    params.locale,
    "/sovereign-truckguard",
    content.seoTitle,
    content.seoDescription,
  );
}

export default async function SovereignPage(props) {
  const params = await props.params;
  const { locale } = params;
  const content = getCopy(locale).sovereign;
  const es = locale === "es";

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        label={es ? "OPERACIÓN ACTIVA" : "LIVE OPERATION"}
        lede={content.lede}
        title={content.title}
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-panel p-7 sm:p-9">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
          <p className="relative font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold">
            {es ? "FUNCIÓN DEL SISTEMA" : "SYSTEM FUNCTION"}
          </p>
          <div className="relative mt-8 space-y-4">
            {(es
              ? ["Mercado", "Flujo operativo", "Resultado", "Aprendizaje de producto"]
              : ["Market", "Operating workflow", "Outcome", "Product learning"]
            ).map((item, index) => (
              <div className="flex items-center gap-4" key={item}>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/25 font-mono text-[0.6rem] text-gold">
                  {index + 1}
                </span>
                <span className="text-sm text-paper">{item}</span>
                {index < 3 && <span className="ml-auto text-gold/40">↓</span>}
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <Section>
        <Container>
          <Callout
            body={content.boundary}
            title={es ? "Posición regulatoria actual" : "Current regulatory position"}
          />
          <div className="mt-20">
            <SectionHeading
              eyebrow={es ? "ROL ESTRATÉGICO" : "STRATEGIC ROLE"}
              title={content.roleTitle}
            />
            <div className="mt-12">
              <DefinitionGrid items={content.roles} />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={es ? "EVIDENCIA FECHADA" : "DATED EVIDENCE"}
              title={content.metricsTitle}
            />
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-white/40">
              {content.metricsNote}
            </p>
          </div>
          <MetricGrid className="mt-12" columns={5} items={content.metrics} />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={es ? "MODELO POR ETAPAS" : "STAGED MODEL"}
            title={content.modelTitle}
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {content.modelStages.map((stage, index) => (
              <article
                className="rounded-3xl border border-white/[0.09] bg-panel p-7 sm:p-8"
                key={stage.when}
              >
                <div className="flex items-center justify-between">
                  <StatusPill>{stage.when}</StatusPill>
                  <span className="font-mono text-xs text-white/30">0{index + 1}</span>
                </div>
                <h3 className="mt-10 text-2xl font-medium tracking-[-0.03em] text-paper">
                  {stage.title}
                </h3>
                <dl className="mt-8 space-y-5 border-t border-white/[0.08] pt-6">
                  <div>
                    <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/35">
                      {es ? "Pagador" : "Payer"}
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-steel">
                      {stage.payer}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/35">
                      {es ? "Ingreso" : "Revenue"}
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-steel">
                      {stage.revenue}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Callout
              body={content.horizonBody}
              title={content.horizonTitle}
              tone="neutral"
            />
          </div>
        </Container>
      </Section>

      <ClosingCTA
        body={
          es
            ? "Las métricas se presentan con definición y periodo para facilitar una conversación seria de diligencia."
            : "Metrics are presented with a definition and period to support a serious diligence conversation."
        }
        primary={{
          href: localizedPath(locale, "/evidence"),
          label: es ? "Revisar tracción" : "Review traction",
        }}
        secondary={{
          href: localizedPath(locale, "/contact"),
          label: es ? "Hablar con el equipo" : "Speak with the team",
        }}
        title={
          es
            ? "La operación real es el punto de partida."
            : "Live operations are the starting point."
        }
      />
    </>
  );
}
