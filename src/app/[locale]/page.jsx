import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import {
  ButtonLink,
  ClosingCTA,
  Container,
  Eyebrow,
  MediaFrame,
  MetricGrid,
  PageHero,
  Section,
  SectionHeading,
  StatusPill,
  TextLink,
} from "@/components/ui";
import {
  CountryBridge,
  DecisionLoop,
  RiskConsole,
  SignalFlow,
} from "@/components/visuals";
import { getCopy } from "@/lib/content";
import { localizedPath, pageMetadata } from "@/lib/site";

export async function generateMetadata(props) {
  const params = await props.params;
  const content = getCopy(params.locale).home;
  return pageMetadata(
    params.locale,
    "",
    content.seoTitle,
    content.seoDescription,
  );
}

export default async function HomePage(props) {
  const params = await props.params;
  const { locale } = params;
  const content = getCopy(locale).home;

  return (
    <>
      <PageHero
        actions={
          <>
            <ButtonLink href={localizedPath(locale, "/truck-risk-os")}>
              {content.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={localizedPath(locale, "/investors")}
              variant="secondary"
            >
              {content.secondaryCta}
            </ButtonLink>
          </>
        }
        eyebrow={content.eyebrow}
        lede={content.lede}
        title={content.title}
      >
        <RiskConsole locale={locale} />
      </PageHero>

      <section className="border-b border-white/[0.07] py-8 sm:py-10">
        <Container>
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/40">
              {content.proofLabel}
            </p>
            <span className="h-px flex-1 bg-white/[0.07]" />
          </div>
          <MetricGrid items={content.metrics} />
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionHeading
              body={content.problemBody}
              eyebrow={content.problemEyebrow}
              title={content.problemTitle}
            />
            <SignalFlow items={content.fragments} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                body={content.solutionBody}
                eyebrow={content.solutionEyebrow}
                title={content.solutionTitle}
              />
              <TextLink
                className="mt-8"
                href={localizedPath(locale, "/truck-risk-os")}
              >
                {content.solutionCta}
              </TextLink>
            </div>
            <div className="rounded-3xl border border-white/[0.09] bg-panel p-6 sm:p-8">
              <div className="flex items-center justify-between gap-5">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-gold">
                  Intelligence Latin Truck Risk OS
                </p>
                <StatusPill>
                  {locale === "es" ? "En construcción" : "In construction"}
                </StatusPill>
              </div>
              <div className="mt-8 grid gap-2">
                {(locale === "es"
                  ? [
                      "Señales operativas",
                      "Capa de confianza",
                      "Memoria estructurada",
                      "Orquestación de IA",
                      "Acción con control humano",
                    ]
                  : [
                      "Operating signals",
                      "Trust layer",
                      "Structured memory",
                      "AI orchestration",
                      "Human-controlled action",
                    ]
                ).map((item, index) => (
                  <div
                    className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3"
                    key={item}
                  >
                    <span className="font-mono text-[0.58rem] text-gold">
                      0{index + 1}
                    </span>
                    <span className="text-sm text-paper">{item}</span>
                    <span className="ml-auto h-px w-8 bg-gradient-to-r from-gold/60 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={content.proofEyebrow}
            title={content.proofTitle}
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {content.proofCards.map((card) => (
              <Link
                className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-panel p-7 transition-colors hover:border-gold/30 sm:p-9"
                href={localizedPath(locale, card.href)}
                key={card.title}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs tracking-[0.18em] text-gold">
                    {card.index}
                  </span>
                  <StatusPill>{card.status}</StatusPill>
                </div>
                <h3 className="mt-16 text-3xl font-medium tracking-[-0.04em] text-paper">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-steel">
                  {card.body}
                </p>
                <div className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft">
                  {card.link}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <MediaFrame
              alt={
                locale === "es"
                  ? "Cuaderno fundador con arquitectura operativa manuscrita"
                  : "Founder notebook with handwritten operating architecture"
              }
              aspect="portrait"
              imageClassName="object-center"
              label={
                locale === "es"
                  ? "Evidencia real de arquitectura documentada · septiembre de 2025"
                  : "Real documented architecture evidence · September 2025"
              }
              src="/evidence/notebook-architecture.jpg"
            />
            <div>
              <SectionHeading
                body={content.moatBody}
                eyebrow={content.moatEyebrow}
                title={content.moatTitle}
              />
              <DecisionLoop items={content.moatSteps} />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            body={content.bridgeBody}
            eyebrow={content.bridgeEyebrow}
            title={content.bridgeTitle}
          />
          <div className="mt-12">
            <CountryBridge locale={locale} />
          </div>
          <TextLink
            className="mt-8"
            href={localizedPath(locale, "/company")}
          >
            {content.bridgeCta}
          </TextLink>
        </Container>
      </Section>

      <ClosingCTA
        body={content.closingBody}
        primary={{
          href: localizedPath(locale, "/contact"),
          label: getCopy(locale).contactLabel,
        }}
        secondary={{
          href: localizedPath(locale, "/evidence"),
          label: locale === "es" ? "Revisar evidencia" : "Review evidence",
        }}
        title={content.closingTitle}
      />
    </>
  );
}
