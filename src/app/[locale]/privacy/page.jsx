import { Container, PageHero, Section } from "@/components/ui";
import { getCopy } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export async function generateMetadata(props) {
  const params = await props.params;
  const content = getCopy(params.locale).privacy;
  return pageMetadata(
    params.locale,
    "/privacy",
    content.seoTitle,
    content.seoDescription,
  );
}

export default async function PrivacyPage(props) {
  const params = await props.params;
  const content = getCopy(params.locale).privacy;

  return (
    <>
      <PageHero
        compact
        eyebrow={content.eyebrow}
        label={content.updated}
        lede={content.seoDescription}
        title={content.title}
      />
      <Section>
        <Container className="max-w-5xl">
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {content.sections.map((section, index) => (
              <section
                className="grid gap-5 py-9 sm:grid-cols-[4rem_1fr]"
                key={section.title}
              >
                <p className="font-mono text-[0.62rem] tracking-[0.15em] text-gold">
                  0{index + 1}
                </p>
                <div>
                  <h2 className="text-xl font-medium text-paper">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-steel">
                    {section.body}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
