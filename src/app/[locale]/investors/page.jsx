import {
  Callout,
  ClosingCTA,
  Container,
  DefinitionGrid,
  MetricGrid,
  NumberedCards,
  PageHero,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { getCopy } from "@/lib/content";
import { localizedPath, pageMetadata } from "@/lib/site";

const MARKET_SOURCES = {
  NAIC: "https://content.naic.org/sites/default/files/publication-msr-pb-property-casualty.pdf",
  FMCSA:
    "https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/2025-09/FMCSA%20Pocket%20Guide%202024-v6%20508%20.pdf",
};

export async function generateMetadata(props) {
  const params = await props.params;
  const content = getCopy(params.locale).investors;
  return pageMetadata(
    params.locale,
    "/investors",
    content.seoTitle,
    content.seoDescription,
  );
}

export default async function InvestorsPage(props) {
  const params = await props.params;
  const { locale } = params;
  const content = getCopy(locale).investors;
  const es = locale === "es";

  return (
    <>
      <PageHero
        actions={
          <TextLink
            href={localizedPath(locale, "/contact")}
          >
            {content.cta}
          </TextLink>
        }
        eyebrow={content.eyebrow}
        lede={content.lede}
        title={content.title}
      >
        <div className="rounded-3xl border border-gold/20 bg-gold/[0.05] p-7 sm:p-9">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold">
            {es ? "ESTRUCTURA PROPUESTA" : "PROPOSED STRUCTURE"}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gold/15">
            {content.terms.map(([value, label]) => (
              <div className="bg-panel p-5" key={label}>
                <p className="text-2xl font-medium tracking-[-0.04em] text-paper">
                  {value}
                </p>
                <p className="mt-2 text-xs leading-5 text-steel">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <SectionHeading
              eyebrow={es ? "POR QUÉ SOLYON" : "WHY SOLYON"}
              title={content.thesisTitle}
            />
            <blockquote className="border-l border-gold/40 pl-7 text-balance text-2xl font-medium leading-[1.35] tracking-[-0.025em] text-paper sm:text-3xl">
              {content.thesis}
            </blockquote>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <SectionHeading
            eyebrow={es ? "REDUCCIÓN DE RIESGO" : "DE-RISKING"}
            title={content.deRiskTitle}
          />
          <div className="mt-12">
            <DefinitionGrid items={content.deRisk} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={es ? "DESPLIEGUE DE CAPITAL" : "CAPITAL DEPLOYMENT"}
            title={content.useTitle}
          />
          <div className="mt-12">
            <NumberedCards items={content.uses} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <SectionHeading
            eyebrow={es ? "DISCIPLINA" : "DISCIPLINE"}
            title={content.milestonesTitle}
          />
          <div className="mt-12">
            <NumberedCards items={content.milestones} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={es ? "MERCADO" : "MARKET"}
            title={content.marketTitle}
          />
          <MetricGrid className="mt-12" columns={3} items={content.marketStats} />
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            <TextLink external href={MARKET_SOURCES.NAIC}>
              NAIC 2024 Market Share Report
            </TextLink>
            <TextLink external href={MARKET_SOURCES.FMCSA}>
              FMCSA 2024 Pocket Guide
            </TextLink>
          </div>
          <div className="mt-12">
            <Callout
              body={content.disclaimer}
              title={es ? "Divulgación" : "Disclosure"}
              tone="neutral"
            />
          </div>
        </Container>
      </Section>

      <ClosingCTA
        body={
          es
            ? "La información sensible se comparte de forma controlada y cada métrica se acompaña de fuente, periodo y definición."
            : "Sensitive information is shared through controlled diligence, with a source, period and definition for every metric."
        }
        primary={{
          href: localizedPath(locale, "/contact"),
          label: content.cta,
        }}
        secondary={{
          href: localizedPath(locale, "/evidence"),
          label: es ? "Evidencia pública" : "Public evidence",
        }}
        title={
          es
            ? "Abramos una conversación de inversión informada."
            : "Start an informed investment conversation."
        }
      />
    </>
  );
}
