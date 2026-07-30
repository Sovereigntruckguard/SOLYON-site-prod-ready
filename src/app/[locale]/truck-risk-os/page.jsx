import {
  Callout,
  ClosingCTA,
  Container,
  DataTable,
  DefinitionGrid,
  PageHero,
  Section,
  SectionHeading,
  StatusPill,
} from "@/components/ui";
import { LayerStack } from "@/components/visuals";
import { getCopy } from "@/lib/content";
import { localizedPath, pageMetadata } from "@/lib/site";

export async function generateMetadata(props) {
  const params = await props.params;
  const content = getCopy(params.locale).os;
  return pageMetadata(
    params.locale,
    "/truck-risk-os",
    content.seoTitle,
    content.seoDescription,
  );
}

export default async function TruckRiskOSPage(props) {
  const params = await props.params;
  const { locale } = params;
  const content = getCopy(locale).os;
  const es = locale === "es";

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        lede={content.lede}
        title={content.title}
      >
        <div className="rounded-3xl border border-gold/20 bg-gold/[0.05] p-7 sm:p-9">
          <StatusPill>{content.statusLabel}</StatusPill>
          <p className="mt-8 text-3xl font-medium tracking-[-0.04em] text-paper">
            {content.statusValue}
          </p>
          <p className="mt-4 text-sm leading-7 text-steel">{content.statusNote}</p>
          <div className="mt-8 h-px bg-gradient-to-r from-gold/50 to-transparent" />
          <p className="mt-5 font-mono text-[0.6rem] uppercase leading-5 tracking-[0.15em] text-white/35">
            {es
              ? "Estado verificable, no promesa de autonomía"
              : "Verifiable status, not an autonomy claim"}
          </p>
        </div>
      </PageHero>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={es ? "ARQUITECTURA" : "ARCHITECTURE"}
            title={content.layersTitle}
          />
          <div className="mt-12">
            <LayerStack items={content.layers} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <SectionHeading
            body={content.modulesIntro}
            eyebrow={es ? "CAPACIDADES" : "CAPABILITIES"}
            title={content.modulesTitle}
          />
          <div className="mt-12">
            <DefinitionGrid columns={3} items={content.modules} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={es ? "TRANSPARENCIA DE PRODUCTO" : "PRODUCT TRANSPARENCY"}
            title={content.statusTitle}
          />
          <div className="mt-12">
            <DataTable
              caption={content.statusTitle}
              columns={[
                { key: "state", label: es ? "Estado" : "State" },
                { key: "item", label: es ? "Elemento" : "Item" },
                { key: "evidence", label: es ? "Evidencia" : "Evidence" },
              ]}
              rows={content.statusRows}
            />
          </div>
          <div className="mt-8">
            <Callout
              body={content.boundaryBody}
              title={content.boundaryTitle}
            />
          </div>
        </Container>
      </Section>

      <ClosingCTA
        body={
          es
            ? "Explore la evidencia comercial e institucional que informa cada decisión de producto."
            : "Explore the commercial and institutional evidence informing each product decision."
        }
        primary={{
          href: localizedPath(locale, "/evidence"),
          label: es ? "Ver evidencia" : "View evidence",
        }}
        secondary={{
          href: localizedPath(locale, "/technology"),
          label: es ? "Tecnología y datos" : "Technology and data",
        }}
        title={
          es
            ? "Una arquitectura disciplinada comienza con límites claros."
            : "A disciplined architecture starts with clear boundaries."
        }
      />
    </>
  );
}
