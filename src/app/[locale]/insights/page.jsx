import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { Container, PageHero, Section } from "@/components/ui";
import { getCopy } from "@/lib/content";
import { getInsights } from "@/lib/insights";
import { localizedPath, pageMetadata } from "@/lib/site";

export async function generateMetadata(props) {
  const params = await props.params;
  const content = getCopy(params.locale).insights;
  return pageMetadata(
    params.locale,
    "/insights",
    content.seoTitle,
    content.seoDescription,
  );
}

export default async function InsightsPage(props) {
  const params = await props.params;
  const { locale } = params;
  const content = getCopy(locale).insights;
  const insights = getInsights(locale);

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
          <div className="grid gap-4 lg:grid-cols-3">
            {insights.map((insight, index) => (
              <Link
                className="group flex min-h-[28rem] flex-col rounded-3xl border border-white/[0.09] bg-panel p-7 transition-colors hover:border-gold/30 sm:p-8"
                href={localizedPath(
                  locale,
                  `/insights/${insight.slug}`,
                )}
                key={insight.id}
              >
                <div className="flex items-center justify-between gap-4 font-mono text-[0.58rem] uppercase tracking-[0.13em]">
                  <span className="text-gold">{insight.category}</span>
                  <span className="text-white/35">0{index + 1}</span>
                </div>
                <h2 className="mt-14 text-balance text-2xl font-medium leading-tight tracking-[-0.035em] text-paper">
                  {insight.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-steel">
                  {insight.description}
                </p>
                <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/[0.08] pt-6 text-xs">
                  <span className="text-white/35">{insight.readingTime}</span>
                  <span className="inline-flex items-center gap-2 font-semibold text-gold-soft">
                    {content.read}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
