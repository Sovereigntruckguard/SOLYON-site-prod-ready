import {
  Callout,
  ClosingCTA,
  Container,
  DefinitionGrid,
  MediaFrame,
  MetricGrid,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getCopy } from "@/lib/content";
import { localizedPath, pageMetadata } from "@/lib/site";

export async function generateMetadata(props) {
  const params = await props.params;
  const content = getCopy(params.locale).move;
  return pageMetadata(
    params.locale,
    "/solyon-move",
    content.seoTitle,
    content.seoDescription,
  );
}

export default async function SolyonMovePage(props) {
  const params = await props.params;
  const { locale } = params;
  const content = getCopy(locale).move;
  const es = locale === "es";

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        lede={content.lede}
        title={content.title}
      >
        <MediaFrame
          alt={
            es
              ? "Captura de la aplicación pública Solyon Move en Google Play"
              : "Screenshot of the public Solyon Move application on Google Play"
          }
          aspect="portrait"
          imageClassName="object-contain bg-[#08090a] p-4"
          label={content.playLabel}
          priority
          src="/evidence/solyon-move-google-play.png"
        />
      </PageHero>

      <section className="border-b border-white/[0.07] py-8 sm:py-10">
        <Container>
          <MetricGrid items={content.metrics} />
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={es ? "PRODUCTO" : "PRODUCT"}
            title={content.productTitle}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.09] lg:grid-cols-5">
            {content.productSteps.map(([title, body], index) => (
              <article className="bg-panel p-6" key={title}>
                <p className="font-mono text-[0.58rem] tracking-[0.15em] text-gold">
                  0{index + 1}
                </p>
                <h3 className="mt-10 text-lg font-medium text-paper">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeading
                body={content.phaseBody}
                eyebrow={es ? "PROPUESTA DE ESCALADO" : "SCALING PROPOSAL"}
                title={content.phaseTitle}
              />
              <div className="mt-10">
                <DefinitionGrid items={content.phaseCapabilities} />
              </div>
            </div>
            <MediaFrame
              alt={
                es
                  ? "Equipo mostrando la API de Solyon Move en una demostración institucional"
                  : "Team showing the Solyon Move API during an institutional demonstration"
              }
              aspect="portrait"
              label={content.apiLabel}
              src="/evidence/solyon-move-api.jpg"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Callout body={content.evidenceBody} title={content.evidenceTitle} />
        </Container>
      </Section>

      <ClosingCTA
        body={
          es
            ? "Solyon Move merece evaluarse por su propio impacto: accesibilidad, ejecución institucional y aprendizaje territorial."
            : "Solyon Move should be evaluated on its own impact: accessibility, institutional execution and territorial learning."
        }
        primary={{
          href: localizedPath(locale, "/contact"),
          label: es ? "Conversación institucional" : "Institutional conversation",
        }}
        secondary={{
          href: localizedPath(locale, "/evidence"),
          label: es ? "Ver toda la evidencia" : "View all evidence",
        }}
        title={
          es
            ? "Tecnología pública construida desde el territorio."
            : "Public-interest technology built from the field."
        }
      />
    </>
  );
}
