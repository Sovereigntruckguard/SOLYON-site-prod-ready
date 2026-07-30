import {
  Callout,
  ClosingCTA,
  Container,
  DefinitionGrid,
  MediaFrame,
  NumberedCards,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getCopy } from "@/lib/content";
import { localizedPath, pageMetadata } from "@/lib/site";

export async function generateMetadata(props) {
  const params = await props.params;
  const content = getCopy(params.locale).technology;
  return pageMetadata(
    params.locale,
    "/technology",
    content.seoTitle,
    content.seoDescription,
  );
}

export default async function TechnologyPage(props) {
  const params = await props.params;
  const { locale } = params;
  const content = getCopy(locale).technology;
  const es = locale === "es";

  return (
    <>
      <PageHero
        compact
        eyebrow={content.eyebrow}
        lede={content.lede}
        title={content.title}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow={es ? "REGLAS DE CONSTRUCCIÓN" : "BUILDING RULES"}
            title={content.principlesTitle}
          />
          <div className="mt-12">
            <DefinitionGrid items={content.principles} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <SectionHeading
            eyebrow={es ? "IMPLEMENTACIÓN" : "IMPLEMENTATION"}
            title={content.stackTitle}
          />
          <div className="mt-12">
            <NumberedCards items={content.stack} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={es ? "EVIDENCIA TÉCNICA" : "TECHNICAL EVIDENCE"}
            title={
              es
                ? "Prototipos, arquitectura y laboratorio reales."
                : "Real prototypes, architecture and laboratory work."
            }
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <MediaFrame
              alt={
                es
                  ? "Prototipo real de una interfaz desarrollada por Solyon"
                  : "Real prototype interface developed by Solyon"
              }
              className="lg:col-span-7"
              label={content.evidenceLabels[0]}
              src="/evidence/arcanum-prototype.jpg"
            />
            <MediaFrame
              alt={
                es
                  ? "Cuaderno de arquitectura operativa de Solyon"
                  : "Solyon operating architecture notebook"
              }
              aspect="portrait"
              className="lg:col-span-5"
              label={content.evidenceLabels[1]}
              src="/evidence/notebook-architecture.jpg"
            />
            <MediaFrame
              alt={
                es
                  ? "Pantallas de código durante una implementación del laboratorio"
                  : "Code screens during a laboratory implementation"
              }
              className="lg:col-span-12"
              label={content.evidenceLabels[2]}
              src="/evidence/lab-coding.jpg"
            />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <SectionHeading
            eyebrow={es ? "ESTADO DEL PRODUCTO" : "PRODUCT STATE"}
            title={content.stateTitle}
          />
          <div className="mt-12">
            <DefinitionGrid items={content.states} />
          </div>
          <div className="mt-8">
            <Callout
              body={content.securityBody}
              title={content.securityTitle}
            />
          </div>
        </Container>
      </Section>

      <ClosingCTA
        body={
          es
            ? "La arquitectura se fortalece cuando producto, operación, datos y control se revisan juntos."
            : "The architecture gets stronger when product, operations, data and controls are reviewed together."
        }
        primary={{
          href: localizedPath(locale, "/contact"),
          label: es ? "Conversación técnica" : "Technical conversation",
        }}
        secondary={{
          href: localizedPath(locale, "/truck-risk-os"),
          label: es ? "Explorar Risk OS" : "Explore Risk OS",
        }}
        title={
          es
            ? "Construir inteligencia que pueda ser auditada."
            : "Build intelligence that can be audited."
        }
      />
    </>
  );
}
