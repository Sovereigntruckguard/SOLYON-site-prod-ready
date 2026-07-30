import {
  ClosingCTA,
  Container,
  DefinitionGrid,
  MediaFrame,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getCopy } from "@/lib/content";
import { localizedPath, pageMetadata } from "@/lib/site";

export async function generateMetadata(props) {
  const params = await props.params;
  const content = getCopy(params.locale).company;
  return pageMetadata(
    params.locale,
    "/company",
    content.seoTitle,
    content.seoDescription,
  );
}

export default async function CompanyPage(props) {
  const params = await props.params;
  const { locale } = params;
  const content = getCopy(locale).company;
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
              ? "Implementación real del laboratorio tecnológico de Solyon"
              : "Real implementation in the Solyon technology laboratory"
          }
          label={content.labLabel}
          priority
          src="/evidence/lab-coding.jpg"
        />
      </PageHero>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={es ? "FUNDADORES" : "FOUNDERS"}
            title={content.foundersTitle}
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {content.founders.map((founder) => (
              <article
                className="rounded-3xl border border-white/[0.09] bg-panel p-7 sm:p-9"
                key={founder.name}
              >
                <div className="grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-gold/[0.06] font-mono text-sm text-gold">
                  {founder.initials}
                </div>
                <h3 className="mt-10 text-2xl font-medium tracking-[-0.03em] text-paper">
                  {founder.name}
                </h3>
                <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold">
                  {founder.role}
                </p>
                <p className="mt-6 text-sm leading-7 text-steel">{founder.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow={es ? "EQUIPO CENTRAL" : "CORE TEAM"}
              title={content.teamTitle}
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {content.team.map(([name, role, body]) => (
                <article
                  className="grid gap-2 py-6 sm:grid-cols-[12rem_10rem_1fr]"
                  key={name}
                >
                  <h3 className="text-sm font-medium text-paper">{name}</h3>
                  <p className="font-mono text-[0.6rem] uppercase leading-5 tracking-[0.12em] text-gold">
                    {role}
                  </p>
                  <p className="text-sm leading-6 text-steel">{body}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <p className="mb-6 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/40">
              {content.capabilitiesTitle}
            </p>
            <div className="flex flex-wrap gap-2">
              {content.capabilities.map((capability) => (
                <span
                  className="rounded-full border border-white/[0.1] bg-white/[0.025] px-4 py-2 text-xs text-steel"
                  key={capability}
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={es ? "TRAYECTORIA" : "TRAJECTORY"}
            title={content.timelineTitle}
          />
          <ol className="mt-12 border-l border-gold/25">
            {content.timeline.map(([date, title, body]) => (
              <li className="relative pb-12 pl-8 last:pb-0 sm:pl-12" key={date}>
                <span className="absolute -left-[0.3rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-gold ring-1 ring-gold/40" />
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-gold">
                  {date}
                </p>
                <h3 className="mt-3 text-xl font-medium text-paper">{title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-steel">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.07] bg-[#090b0c]">
        <Container>
          <SectionHeading
            eyebrow={es ? "ARQUITECTURA EMPRESARIAL" : "COMPANY ARCHITECTURE"}
            title={content.identityTitle}
          />
          <div className="mt-12">
            <DefinitionGrid items={content.identities} />
          </div>
        </Container>
      </Section>

      <ClosingCTA
        body={
          es
            ? "Conoce la evidencia que conecta experiencia de dominio, producto y ejecución institucional."
            : "See the evidence connecting domain experience, product and institutional execution."
        }
        primary={{
          href: localizedPath(locale, "/contact"),
          label: es ? "Conocer al equipo" : "Meet the team",
        }}
        secondary={{
          href: localizedPath(locale, "/evidence"),
          label: es ? "Revisar evidencia" : "Review evidence",
        }}
        title={
          es
            ? "Una tesis ambiciosa necesita un equipo que cierre el ciclo."
            : "An ambitious thesis needs a team that closes the loop."
        }
      />
    </>
  );
}
