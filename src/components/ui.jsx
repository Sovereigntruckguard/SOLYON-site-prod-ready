import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckIcon } from "@/components/icons";

export function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[92rem] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({ children, className = "", id }) {
  return (
    <section className={`py-20 sm:py-24 lg:py-32 ${className}`} id={id}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold">
      <span className="h-px w-7 bg-gold/70" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className = "",
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <div className={centered ? "flex justify-center" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="mt-5 text-balance text-3xl font-medium leading-[1.08] tracking-[-0.035em] text-paper sm:text-5xl">
        {title}
      </h2>
      {body && (
        <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-steel sm:text-lg sm:leading-8">
          {body}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  actions,
  compact = false,
  label,
}) {
  return (
    <section
      className={`relative overflow-hidden border-b border-white/[0.07] ${
        compact ? "pb-16 pt-36 sm:pb-20 sm:pt-44" : "pb-20 pt-36 sm:pb-28 sm:pt-48"
      }`}
    >
      <div className="site-grid absolute inset-0 opacity-60" />
      <div className="absolute -right-40 top-16 h-96 w-96 rounded-full bg-gold/[0.07] blur-[100px]" />
      <Container className="relative">
        <div
          className={`grid items-end gap-12 ${
            children ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(24rem,0.85fr)]" : ""
          }`}
        >
          <div className="max-w-5xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            {label && (
              <p className="mt-7 inline-flex rounded-full border border-gold/20 bg-gold/[0.06] px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold-soft">
                {label}
              </p>
            )}
            <h1
              className={`mt-7 text-balance font-medium leading-[0.98] tracking-[-0.055em] text-paper ${
                compact
                  ? "text-5xl sm:text-6xl lg:text-7xl"
                  : "text-5xl sm:text-7xl lg:text-[5.5rem]"
              }`}
            >
              {title}
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-steel sm:text-xl sm:leading-9">
              {lede}
            </p>
            {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all";
  const styles =
    variant === "primary"
      ? "bg-gold text-ink hover:bg-gold-soft"
      : "border border-white/15 bg-white/[0.03] text-paper hover:border-gold/40 hover:text-gold-soft";
  const props = external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <Link className={`${base} ${styles} ${className}`} href={href} {...props}>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function TextLink({ children, href, external = false, className = "" }) {
  const props = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <Link
      className={`group inline-flex items-center gap-2 text-sm font-semibold text-gold-soft ${className}`}
      href={href}
      {...props}
    >
      <span className="border-b border-gold/30 pb-0.5 transition-colors group-hover:border-gold">
        {children}
      </span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function MetricGrid({ items, columns = 4, className = "" }) {
  const grid =
    columns === 3
      ? "lg:grid-cols-3"
      : columns === 5
        ? "lg:grid-cols-5"
        : "lg:grid-cols-4";
  return (
    <div
      className={`grid gap-px overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2 ${grid} ${className}`}
    >
      {items.map((item, index) => {
        const value = Array.isArray(item) ? item[0] : item.value;
        const label = Array.isArray(item) ? item[1] : item.label;
        const note = Array.isArray(item) ? item[2] : item.note;
        return (
          <div
            className="min-h-44 bg-panel p-6"
            key={`${label}-${index}`}
          >
            <p className="text-3xl font-medium tracking-[-0.04em] text-paper">
              {value}
            </p>
            <p className="mt-4 text-sm font-medium leading-5 text-paper">{label}</p>
            {note && (
              <p className="mt-2 text-xs leading-5 text-steel">{note}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function NumberedCards({ items, columns = 3 }) {
  const grid = columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <div className={`grid gap-px overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.09] ${grid}`}>
      {items.map((item, index) => {
        const title = Array.isArray(item) ? item[0] : item.title;
        const body = Array.isArray(item) ? item[1] : item.body;
        const number = Array.isArray(item) ? String(index + 1).padStart(2, "0") : item.number || String(index + 1).padStart(2, "0");
        return (
          <article className="bg-panel p-7 sm:p-8" key={`${title}-${index}`}>
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-gold">
              {number}
            </p>
            <h3 className="mt-8 text-xl font-medium tracking-[-0.025em] text-paper">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-steel">{body}</p>
          </article>
        );
      })}
    </div>
  );
}

export function DefinitionGrid({ items, columns = 2 }) {
  return (
    <div className={`grid gap-4 ${columns === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
      {items.map((item, index) => (
        <article
          className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 sm:p-7"
          key={`${item[0]}-${index}`}
        >
          <h3 className="text-base font-medium text-paper">{item[0]}</h3>
          <p className="mt-3 text-sm leading-6 text-steel">{item[1]}</p>
          {item[2] && (
            <p className="mt-5 border-t border-white/[0.08] pt-4 font-mono text-[0.64rem] uppercase leading-5 tracking-[0.12em] text-white/40">
              {item[2]}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}

export function DataTable({ columns, rows, caption }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.09]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[48rem] border-collapse text-left">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead className="bg-white/[0.045]">
            <tr>
              {columns.map((column) => (
                <th
                  className="px-5 py-4 font-mono text-[0.62rem] font-medium uppercase tracking-[0.14em] text-white/45"
                  key={column.key}
                  scope="col"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                className="border-t border-white/[0.07] bg-panel/60 align-top"
                key={row.id || index}
              >
                {columns.map((column, columnIndex) => (
                  <td
                    className={`px-5 py-5 text-sm leading-6 ${
                      columnIndex === 0
                        ? "font-medium text-paper"
                        : "text-steel"
                    }`}
                    key={column.key}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Callout({ title, body, tone = "gold", children }) {
  const gold = tone === "gold";
  return (
    <div
      className={`rounded-2xl border p-7 sm:p-9 ${
        gold
          ? "border-gold/25 bg-gold/[0.055]"
          : "border-white/[0.1] bg-white/[0.025]"
      }`}
    >
      <div className="flex gap-4">
        <span
          className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full ${
            gold ? "bg-gold/15 text-gold" : "bg-white/[0.06] text-paper"
          }`}
        >
          <CheckIcon />
        </span>
        <div>
          <h3 className="text-xl font-medium tracking-[-0.02em] text-paper">
            {title}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-steel">{body}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export function MediaFrame({
  src,
  alt,
  label,
  aspect = "video",
  priority = false,
  className = "",
  imageClassName = "",
}) {
  const ratio =
    aspect === "portrait"
      ? "aspect-[4/5]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-video";
  return (
    <figure className={className}>
      <div
        className={`noise relative overflow-hidden rounded-2xl border border-white/[0.1] bg-panel ${ratio}`}
      >
        <Image
          alt={alt}
          className={`object-cover ${imageClassName}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          src={src}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      {label && (
        <figcaption className="mt-3 font-mono text-[0.62rem] uppercase leading-5 tracking-[0.12em] text-white/40">
          {label}
        </figcaption>
      )}
    </figure>
  );
}

export function ClosingCTA({ title, body, primary, secondary }) {
  return (
    <Section className="border-t border-white/[0.07]">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-panel px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="site-grid absolute inset-0 opacity-30" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-medium tracking-[-0.04em] text-paper sm:text-5xl">
                {title}
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-steel">
                {body}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {secondary && (
                <ButtonLink href={secondary.href} variant="secondary">
                  {secondary.label}
                </ButtonLink>
              )}
              <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function StatusPill({ children }) {
  return (
    <span className="inline-flex rounded-full border border-gold/25 bg-gold/[0.07] px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-gold-soft">
      {children}
    </span>
  );
}
