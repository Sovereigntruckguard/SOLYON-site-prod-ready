import { MailIcon } from "@/components/icons";
import {
  Container,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getCopy } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export async function generateMetadata(props) {
  const params = await props.params;
  const content = getCopy(params.locale).contact;
  return pageMetadata(
    params.locale,
    "/contact",
    content.seoTitle,
    content.seoDescription,
  );
}

export default async function ContactPage(props) {
  const params = await props.params;
  const { locale } = params;
  const content = getCopy(locale).contact;
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
          <div className="grid gap-4 lg:grid-cols-2">
            {content.paths.map((path, index) => {
              return (
                <article
                  className="rounded-3xl border border-white/[0.09] bg-panel p-7 sm:p-9"
                  key={path.title}
                >
                  <p className="font-mono text-[0.62rem] tracking-[0.16em] text-gold">
                    0{index + 1}
                  </p>
                  <h2 className="mt-10 text-2xl font-medium tracking-[-0.03em] text-paper">
                    {path.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-steel">
                    {path.body}
                  </p>
                  <div
                    aria-disabled="true"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.04] px-4 py-2.5 text-sm font-semibold text-gold-soft/70"
                  >
                    <MailIcon />
                    {content.emailLabel}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 border-t border-white/[0.08] pt-16">
            <SectionHeading
              body={
                es
                  ? "Medellín, Colombia · Mercado de Estados Unidos · Respuesta directa del equipo fundador."
                  : "Medellín, Colombia · U.S. market focus · Direct response from the founding team."
              }
              eyebrow={es ? "CANAL DIRECTO" : "DIRECT CHANNEL"}
              title={
                es
                  ? "Escríbenos con el contexto correcto."
                  : "Write with the right context."
              }
            />
          </div>

          <p className="mt-12 max-w-3xl border-t border-white/[0.08] pt-6 text-xs leading-6 text-white/40">
            {content.privacy}
          </p>
        </Container>
      </Section>
    </>
  );
}
