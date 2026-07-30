import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@/components/icons";
import { Callout, Container } from "@/components/ui";
import {
  getAllInsightParams,
  getInsight,
  getInsightAlternates,
} from "@/lib/insights";
import { absoluteUrl, localizedPath } from "@/lib/site";

export function generateStaticParams() {
  return getAllInsightParams();
}

export async function generateMetadata(props) {
  const params = await props.params;
  const insight = getInsight(params.locale, params.slug);
  if (!insight) return {};
  const alternates = getInsightAlternates(insight.id);
  const path = `/insights/${params.slug}`;
  return {
    title: insight.title,
    description: insight.description,
    alternates: {
      canonical: localizedPath(params.locale, path),
      languages: {
        "en-US": `/en/insights/${alternates.en}`,
        "es-CO": `/es/insights/${alternates.es}`,
        "x-default": `/en/insights/${alternates.en}`,
      },
    },
    openGraph: {
      title: insight.title,
      description: insight.description,
      type: "article",
      url: absoluteUrl(params.locale, path),
      publishedTime: insight.date,
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description: insight.description,
    },
  };
}

export default async function InsightArticlePage(props) {
  const params = await props.params;
  const { locale, slug } = params;
  const insight = getInsight(locale, slug);
  if (!insight) notFound();
  const es = locale === "es";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.description,
    datePublished: insight.date,
    dateModified: insight.date,
    inLanguage: locale,
    mainEntityOfPage: absoluteUrl(locale, `/insights/${slug}`),
    author: {
      "@type": "Organization",
      name: "Solyon Technologies",
    },
    publisher: {
      "@type": "Organization",
      name: "Solyon Technologies",
    },
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        type="application/ld+json"
      />
      <article className="pb-24 pt-36 sm:pb-32 sm:pt-44">
        <Container className="max-w-5xl">
          <Link
            className="inline-flex items-center gap-2 text-sm text-steel transition-colors hover:text-gold-soft"
            href={localizedPath(locale, "/insights")}
          >
            <span className="rotate-[-135deg]">
              <ArrowUpRight />
            </span>
            {es ? "Todos los insights" : "All insights"}
          </Link>
          <header className="mt-14 border-b border-white/[0.08] pb-12">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.14em]">
              <span className="text-gold">{insight.category}</span>
              <span className="text-white/20">/</span>
              <time className="text-white/40" dateTime={insight.date}>
                {es ? "30 de julio de 2026" : "July 30, 2026"}
              </time>
              <span className="text-white/20">/</span>
              <span className="text-white/40">{insight.readingTime}</span>
            </div>
            <h1 className="mt-8 text-balance text-5xl font-medium leading-[1.02] tracking-[-0.055em] text-paper sm:text-7xl">
              {insight.title}
            </h1>
            <p className="mt-8 max-w-3xl text-pretty text-xl leading-9 text-steel">
              {insight.intro}
            </p>
          </header>

          <div className="mx-auto mt-14 max-w-3xl">
            {insight.sections.map((section) => (
              <section className="mb-14" key={section.title}>
                <h2 className="text-2xl font-medium tracking-[-0.03em] text-paper sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      className="text-pretty text-base leading-8 text-steel sm:text-lg"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
            <Callout
              body={insight.takeaway}
              title={es ? "Idea central" : "Core takeaway"}
            />
          </div>
        </Container>
      </article>
    </>
  );
}
