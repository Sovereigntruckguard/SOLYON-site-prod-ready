import {
  Callout,
  ClosingCTA,
  Container,
  DataTable,
  DefinitionGrid,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getCopy } from "@/lib/content";
import { localizedPath, pageMetadata } from "@/lib/site";

export async function generateMetadata(props) {
  const params = await props.params;
  const content = getCopy(params.locale).evidence;
  return pageMetadata(
    params.locale,
    "/evidence",
    content.seoTitle,
    content.seoDescription,
  );
}

export default async function EvidencePage(props) {
  const params = await props.params;
  const { locale } = params;
  const content = getCopy(locale).evidence;
  const es = locale === "es";
  const columns = [
    { key: "metric", label: es ? "Métrica" : "Metric" },
    { key: "definition", label: es ? "Definición" : "Definition" },
    { key: "period", label: es ? "Periodo" : "Period" },
    { key: "meaning", label: es ? "Qué significa" : "What it means" },
  ];

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
            eyebrow={es ? "SOVEREIGN TRUCKGUARD" : "SOVEREIGN TRUCKGUARD"}
            title={content.commercialTitle}
          />
          <div className="mt-10">
            <DataTable
              caption={content.commercialTitle}
              columns={columns}
              rows={content.commercialRows}
            />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <SectionHeading
            eyebrow="SOLYON MOVE"
            title={content.institutionalTitle}
          />
          <div className="mt-10">
            <DataTable
              caption={content.institutionalTitle}
              columns={columns}
              rows={content.institutionalRows}
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={es ? "MEMORIA OPERATIVA" : "OPERATING MEMORY"}
            title={content.dataTitle}
          />
          <div className="mt-10">
            <DefinitionGrid items={content.dataRows} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <SectionHeading
            eyebrow={es ? "GOBERNANZA NARRATIVA" : "NARRATIVE GOVERNANCE"}
            title={content.standardsTitle}
          />
          <div className="mt-10">
            <DefinitionGrid items={content.standards} />
          </div>
          <div className="mt-8">
            <Callout
              body={content.caution}
              title={es ? "Nota de diligencia" : "Diligence note"}
              tone="neutral"
            />
          </div>
        </Container>
      </Section>

      <ClosingCTA
        body={
          es
            ? "Los documentos fuente, conciliaciones y materiales sensibles se comparten de forma controlada durante diligencia."
            : "Source documents, reconciliations and sensitive materials are shared through controlled diligence."
        }
        primary={{
          href: localizedPath(locale, "/contact"),
          label: es ? "Solicitar conversación" : "Request a conversation",
        }}
        secondary={{
          href: localizedPath(locale, "/investors"),
          label: es ? "Tesis de inversión" : "Investment thesis",
        }}
        title={
          es
            ? "Claridad antes que exageración."
            : "Clarity before amplification."
        }
      />
    </>
  );
}
