"use client";

import Image from "next/image";
import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const ELEVENLABS_GRANTS_URL =
  "https://elevenlabs.io/startup-grants";

const ELEVENLABS_GRANTS_LOGO =
  "https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp";

const sectionTitleClass =
  "mt-3 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[2.8rem]";

const sectionCopyClass =
  "mt-4 max-w-2xl text-sm leading-6 text-white/58 sm:text-base sm:leading-7";

const pillClass =
  "rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[0.68rem] text-white/55";

export default function ImpactPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="overflow-hidden bg-[#07090c] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10 py-14 md:py-18 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_30%,rgba(230,188,104,0.08),transparent_30rem),radial-gradient(circle_at_22%_72%,rgba(59,130,246,0.06),transparent_28rem)]" />

        <div className="section-shell relative grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="eyebrow">
              {t.heroEyebrow}
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-[3.7rem]">
              {t.heroTitle}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/62">
              {t.heroBody}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.heroTags.map((item) => (
                <span
                  key={item}
                  className={pillClass}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/home-validation-rutan-toyota.png"
              alt={t.heroAlt}
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="aspect-[16/10] w-full rounded-[1.15rem] object-cover"
            />

            <div className="absolute inset-2.5 rounded-[1.15rem] bg-gradient-to-t from-[#07090c]/85 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                {t.heroVisualEyebrow}
              </p>

              <p className="mt-1 text-sm font-semibold text-white/90">
                {t.heroVisualTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT PRINCIPLE
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">
              {t.principleEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.principleTitle}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/55">
            {t.principleBody}

import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const EMAIL = "sergio@solyontechnologies.com";
const WHATSAPP = "https://wa.me/573147903517";
const LINKEDIN = "https://www.linkedin.com/company/solyon-technologies/";

const sectionTitleClass =
  "mt-3 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[2.8rem]";

const sectionCopyClass =
  "mt-4 max-w-2xl text-sm leading-6 text-white/58 sm:text-base sm:leading-7";

const pillClass =
  "rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[0.68rem] text-white/55";

function ContactRoute({ route }) {
  const subject = encodeURIComponent(route.subject);
  const body = encodeURIComponent(route.bodyTemplate);

  return (
    <article className="group flex h-full flex-col rounded-[1.4rem] border border-white/10 bg-[#0b0e12] p-5 transition hover:border-[#E6BC68]/30 hover:bg-white/[0.03] md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
            {route.label}
          </p>

          <h3 className="mt-3 text-xl font-semibold text-white/90">
            {route.title}
          </h3>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.impactDimensions.map((item, index) => (
            <article
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
            >
              <p className="text-[0.6rem] font-semibold text-[#E6BC68]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-sm font-semibold text-white/85">
                {item.title}
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-white/43">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          SOLYON MOVE / TERRITORY
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell grid gap-9 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/home-ecosystem-city-vertical.png"
              alt={t.moveAlt}
              width={1024}
              height={1536}
              sizes="(max-width: 1024px) 90vw, 36vw"
              className="aspect-[4/5] w-full rounded-[1.15rem] object-cover"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-lg">
              MEDELLÍN · COLOMBIA
            </span>
          </div>

          <div>
            <p className="eyebrow">
              {t.moveEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.moveTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.moveBody}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.moveImpact.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
                >
                  <h3 className="text-sm font-semibold text-white/82">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/43">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/solyon-move"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
              >
                {t.moveButton}
              </Link>

              <GooglePlayLink label={t.downloadMove} />
        <span className="text-lg text-white/20 transition group-hover:text-[#E6BC68]">
          ↗
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-6 text-white/48">
        {route.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {route.tags.map((tag) => (
          <span
            key={tag}
            className={pillClass}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#E6BC68] transition hover:text-[#F0CA7E]"
      >
        {route.button}
        <span>→</span>
      </a>
    </article>
  );
}

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="overflow-hidden bg-[#07090c] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10 py-14 md:py-18 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_28%,rgba(230,188,104,0.08),transparent_30rem),radial-gradient(circle_at_22%_74%,rgba(59,130,246,0.05),transparent_28rem)]" />

        <div className="section-shell relative grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">
              {t.heroEyebrow}
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-[3.7rem]">
              {t.heroTitle}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/62">
              {t.heroBody}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.heroTags.map((item) => (
                <span
                  key={item}
                  className={pillClass}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  t.generalSubject
                )}`}
                className="inline-flex justify-center rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]"
              >
                {t.emailButton}
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.03]"
              >
                {t.whatsappButton}
              </a>
            </div>

            <p className="mt-4 text-xs leading-5 text-white/35">
              {t.location}
            </p>
          </div>

          {/* DIRECT CONTACT */}
          <div className="rounded-[1.5rem] border border-white/10 bg-[#0b0e12] p-5 md:p-6">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.19em] text-[#E6BC68]">
              {t.directEyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-white/90">
              {t.directTitle}
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/48">
              {t.directBody}
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/68 transition hover:border-[#E6BC68]/35 hover:text-white"
              >
                <span>{EMAIL}</span>
                <span>↗</span>
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/68 transition hover:border-[#E6BC68]/35 hover:text-white"
              >
                <span>WhatsApp · +57 314 790 3517</span>
                <span>↗</span>
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/68 transition hover:border-[#E6BC68]/35 hover:text-white"
              >
                <span>LinkedIn · SOLYON Technologies</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INSTITUTIONAL IMPACT
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-9 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            <p className="eyebrow">
              {t.institutionalEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.institutionalTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.institutionalBody}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.institutionalPoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
                >
                  <h3 className="text-sm font-semibold text-white/82">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/43">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/impact-institutional.png"
              alt={t.institutionalAlt}
              width={1200}
              height={820}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="aspect-[16/10] w-full rounded-[1.15rem] object-cover"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-lg">
              {t.institutionalLabel}
            </span>
          </div>
          ROUTES
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">
              {t.routesEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.routesTitle}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/55">
            {t.routesBody}
          </p>
        </div>
      </section>

      {/* =========================================================
          AI / ELEVENLABS
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
            <div>
              <p className="eyebrow">
                {t.aiEyebrow}
              </p>

              <h2 className={sectionTitleClass}>
                {t.aiTitle}
              </h2>

              <p className={sectionCopyClass}>
                {t.aiBody}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.aiTags.map((item) => (
                  <span
                    key={item}
                    className={pillClass}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.45rem] border border-white/10 bg-[#090b0f] p-5 md:p-6">
              <a
                href={ELEVENLABS_GRANTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ElevenLabs Grants"
                className="inline-flex opacity-80 transition hover:opacity-100"
              >
                <img
                  src={ELEVENLABS_GRANTS_LOGO}
                  alt="ElevenLabs Grants"
                  className="h-auto w-[165px] md:w-[185px]"
                />
              </a>

              <p className="mt-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                {t.grantEyebrow}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white/90">
                {t.grantTitle}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/48">
                {t.grantBody}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {t.grantUses.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <h4 className="text-xs font-semibold text-white/78">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 text-xs leading-5 text-white/40">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          {t.routes.map((route) => (
            <ContactRoute
              key={route.title}
              route={route}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          CURRENT VS FUTURE IMPACT
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="max-w-3xl">
          <p className="eyebrow">
            {t.trajectoryEyebrow}
          </p>

          <h2 className={sectionTitleClass}>
            {t.trajectoryTitle}
          </h2>

          <p className={sectionCopyClass}>
            {t.trajectoryBody}
          </p>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.4rem] border border-white/10 bg-[#0b0e12] p-5 md:p-6">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
              {t.demonstratedLabel}
            </p>

            <div className="mt-5 space-y-4">
              {t.demonstrated.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-sm font-semibold text-white/82">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/43">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-[#E6BC68]/20 bg-gradient-to-br from-[#15130d] to-[#0b0e12] p-5 md:p-6">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
              {t.buildingLabel}
            </p>

            <div className="mt-5 space-y-4">
              {t.building.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-sm font-semibold text-white/82">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/43">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          CONTEXT
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="eyebrow">
              {t.prepareEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.prepareTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.prepareBody}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {t.prepareItems.map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
              >
                <span className="text-[0.6rem] font-semibold text-[#E6BC68]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-sm font-semibold text-white/85">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-white/43">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-5 max-w-4xl text-[0.68rem] leading-5 text-white/32">
          {t.trajectoryNote}
        </p>
      </section>

      {/* =========================================================
          SYSTEMIC IMPACT
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell grid gap-9 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/impact-systemic.png"
              alt={t.systemicAlt}
              width={1200}
              height={820}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="aspect-[16/10] w-full rounded-[1.15rem] object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">
              {t.systemicEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.systemicTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.systemicBody}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.systemicPoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
                >
                  <h3 className="text-sm font-semibold text-white/82">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/43">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="py-11 md:py-14">
        <div className="section-shell">
          <div className="rounded-[1.55rem] border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] via-[#0d0e10] to-[#090b0e] p-6 md:p-8">
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-white/10 py-11 md:py-14">
        <div className="section-shell">
          <div className="rounded-[1.55rem] border border-white/10 bg-white/[0.025] p-6 md:p-8">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow">
                  SOLYON TECHNOLOGIES
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl">
                  {t.ctaTitle}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
                  {t.ctaBody}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/technology"
                  className="inline-flex justify-center rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e]"
                >
                  {t.ctaTechnology}
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
                >
                  {t.ctaContact}
                </Link>
              </div>
                  {t.finalTitle}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
                  {t.finalBody}
                </p>
              </div>

              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  t.generalSubject
                )}`}
                className="inline-flex justify-center rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e]"
              >
                {t.finalButton}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

/* =========================================================
   ESPAÑOL
========================================================= */

const es = {
  heroEyebrow:
    "Impacto · Evidencia · Tecnología aplicada",

  heroTitle:
    "El impacto comienza cuando la tecnología sale del laboratorio.",

  heroBody:
    "SOLYON mide su avance por la capacidad de convertir conocimiento en sistemas que funcionan bajo usuarios, instituciones, territorio y operaciones reales.",

  heroTags: [
    "Tecnología aplicada",
    "Territorio",
    "Instituciones",
    "Aprendizaje",
  ],

  heroAlt:
    "Validación institucional y territorial de SOLYON Move en Medellín",

  heroVisualEyebrow:
    "EVIDENCIA DE EJECUCIÓN",

  heroVisualTitle:
    "Del laboratorio al territorio · Medellín",

  principleEyebrow:
    "Nuestra definición de impacto",

  principleTitle:
    "Construir capacidad que permanezca después de cada ejecución.",

  principleBody:
    "Para SOLYON, impacto no es únicamente alcance. Una ejecución valiosa deja producto, conocimiento, datos, documentación, relaciones, aprendizaje y capacidad tecnológica reutilizable.",

  impactDimensions: [
    {
      title: "Personas",
      body:
        "Tecnología diseñada alrededor de necesidades, restricciones y contextos humanos reales.",
    },
    {
      title: "Operaciones",
      body:
        "Procesos más estructurados, trazables y susceptibles de automatización.",
    },
    {
      title: "Instituciones",
      body:
        "Capacidad para interactuar con actores públicos, privados y del ecosistema de innovación.",
    },
    {
      title: "Tecnología",
      body:
        "Conocimiento y evidencia convertidos en sistemas, datos y arquitectura reutilizable.",
    },
  ],

  moveEyebrow:
    "Movilidad · Territorio · Accesibilidad",

  moveTitle:
    "SOLYON Move convirtió un reto urbano en capacidad tecnológica.",

  moveBody:
    "El proyecto llevó al laboratorio a trabajar con producto móvil, datos territoriales, APIs, CRM, herramientas institucionales y validación frente a condiciones reales de movilidad en Medellín.",

  moveAlt:
    "SOLYON Move utilizado en Medellín como entorno de validación tecnológica",

  moveImpact: [
    {
      title: "Producto público",
      body:
        "Aplicación móvil disponible para usuarios y sometida a evolución funcional.",
    },
    {
      title: "Territorio como dato",
      body:
        "Condiciones urbanas y de movilidad convertidas en información utilizable.",
    },
    {
      title: "Capa institucional",
      body:
        "CRM y herramientas para estructurar seguimiento, evidencia y operación.",
    },
    {
      title: "Aprendizaje documentado",
      body:
        "La ejecución genera evidencia que alimenta siguientes fases y nuevas capacidades.",
    },
  ],

  moveButton:
    "Explorar SOLYON Move",

  downloadMove:
    "SOLYON Move gratis en Google Play",

  institutionalEyebrow:
    "Impacto institucional",

  institutionalTitle:
    "La tecnología se fortalece cuando puede ser observada y evaluada por terceros.",

  institutionalBody:
    "SOLYON ha llevado su trabajo fuera del entorno controlado del laboratorio y lo ha expuesto a instituciones, programas de innovación y actores del territorio.",

  institutionalPoints: [
    {
      title: "Ruta N",
      body:
        "Articulación, seguimiento y contexto institucional alrededor de la ejecución de SOLYON Move.",
    },
    {
      title: "Toyota Mobility Foundation",
      body:
        "Marco internacional de innovación en movilidad dentro del cual SOLYON Move ha sido desarrollado y presentado.",
    },
    {
      title: "Medellín",
      body:
        "Entorno urbano utilizado para confrontar tecnología con restricciones territoriales reales.",
    },
    {
      title: "Ecosistema de innovación",
      body:
        "Interacción con actores empresariales, técnicos e institucionales que amplían la validación externa.",
    },
  ],

  institutionalAlt:
    "Presentación e interacción institucional de SOLYON Technologies",

  institutionalLabel:
    "INNOVACIÓN · INSTITUCIONES · TERRITORIO",

  aiEyebrow:
    "IA aplicada · Validación externa",

  aiTitle:
    "El impacto tecnológico también se construye ampliando capacidad.",

  aiBody:
    "La selección de SOLYON Technologies para un ElevenLabs Grant aporta infraestructura y recursos para desarrollar nuevas capacidades conversacionales y agentes aplicados a productos concretos.",

  aiTags: [
    "Conversational AI",
    "AI Agents",
    "Knowledge Systems",
    "Applied AI",
  ],

  grantEyebrow:
    "AI INFRASTRUCTURE PROGRAM",

  grantTitle:
    "SOLYON Technologies fue seleccionada para recibir un ElevenLabs Grant.",

  grantBody:
    "Los recursos del programa serán utilizados para avanzar capacidades conversacionales dentro del laboratorio, comenzando por SOLYON Academy y SOLYON Move Fase 2.",

  grantUses: [
    {
      title: "SOLYON Academy",
      body:
        "Agentes conversacionales aplicados a conocimiento y experiencias de aprendizaje.",
    },
    {
      title: "SOLYON Move · Fase 2",
      body:
        "Exploración de interacción conversacional aplicada a movilidad y contexto territorial.",
    },
  ],

  trajectoryEyebrow:
    "Impacto demostrado vs. impacto en construcción",

  trajectoryTitle:
    "Diferenciamos evidencia actual de ambición futura.",

  trajectoryBody:
    "Una compañía DeepTech gana credibilidad cuando puede decir con precisión qué ya demostró y qué todavía está construyendo.",

  demonstratedLabel:
    "HOY · EVIDENCIA",

  demonstrated: [
    {
      title: "Producto tecnológico desplegado",
      body:
        "SOLYON Move demuestra ejecución móvil, datos, infraestructura y herramientas institucionales.",
    },
    {
      title: "Validación territorial",
      body:
        "Tecnología confrontada con condiciones reales de Medellín.",
    },
    {
      title: "Interacción institucional",
      body:
        "Participación y trabajo dentro de un ecosistema de innovación con actores externos.",
    },
    {
      title: "Capacidad documentada",
      body:
        "Procesos, aprendizaje y evidencia convertidos en memoria tecnológica reutilizable.",
    },
  ],

  buildingLabel:
    "SIGUIENTE ETAPA · CONSTRUCCIÓN",

  building: [
    {
      title: "SOLYON OS",
      body:
        "Convergencia progresiva de conocimiento, datos, sistemas, automatización y agentes.",
    },
    {
      title: "Insurance Operations",
      body:
        "Primer mercado de validación comercial para capacidades reutilizables del laboratorio.",
    },
    {
      title: "Arcanum",
      body:
        "Capa de inteligencia en desarrollo para conectar conocimiento, contexto, agentes y workflows.",
    },
    {
      title: "SOLYON Academy",
      body:
        "Aplicación de conocimiento estructurado y agentes conversacionales a aprendizaje.",
    },
  ],

  trajectoryNote:
    "Las iniciativas en construcción representan dirección tecnológica o comercial y no se presentan como resultados completamente validados mientras la evidencia no lo demuestre.",

  systemicEyebrow:
    "Impacto sistémico",

  systemicTitle:
    "El activo más importante es la capacidad de aprender y reutilizar.",

  systemicBody:
    "Cada producto puede producir algo más que software. Puede generar conocimiento, arquitectura, datos, controles y aprendizajes que reduzcan el costo y aumenten la calidad de las siguientes ejecuciones.",

  systemicAlt:
    "Visión sistémica y tecnológica de SOLYON Technologies",

  systemicPoints: [
    {
      title: "Knowledge",
      body:
        "Experiencia y evidencia transformadas en estructura reutilizable.",
    },
    {
      title: "Data",
      body:
        "Información organizada para trazabilidad, integración y nuevas aplicaciones.",
    },
    {
      title: "Systems",
      body:
        "Componentes tecnológicos desarrollados alrededor de problemas concretos.",
    },
    {
      title: "Learning",
      body:
        "Validación que mejora arquitectura, producto y decisiones futuras.",
    },
  ],

  ctaTitle:
    "Queremos construir impacto que pueda demostrarse, no solamente declararse.",

  ctaBody:
    "SOLYON Technologies desarrolla infraestructura tecnológica desde Medellín y la confronta progresivamente con problemas, usuarios, instituciones y mercados reales.",

  ctaTechnology:
    "Explorar tecnología",

  ctaContact:
    "Conversar con SOLYON",
    "Contacto · Tecnología · Capital · Alianzas",

  heroTitle:
    "Conversemos alrededor de un problema real.",

  heroBody:
    "SOLYON trabaja con organizaciones, inversionistas, instituciones y equipos tecnológicos donde exista una oportunidad concreta de convertir conocimiento, datos y operaciones en capacidad tecnológica.",

  heroTags: [
    "DeepTech",
    "Operational Intelligence",
    "Applied AI",
    "Medellín",
  ],

  emailButton:
    "Escribir por correo",

  whatsappButton:
    "Conversar por WhatsApp",

  location:
    "Medellín, Colombia · Tecnología construida para operar en contextos reales",

  generalSubject:
    "Conversación estratégica con SOLYON Technologies",

  directEyebrow:
    "Contacto directo",

  directTitle:
    "Canales simples para iniciar.",

  directBody:
    "No necesitas un proceso complejo para hablar con nosotros. Si existe un problema, oportunidad, inversión o alianza concreta, podemos comenzar directamente con el contexto esencial.",

  routesEyebrow:
    "Rutas de colaboración",

  routesTitle:
    "Empieza por el contexto correcto.",

  routesBody:
    "Cada conversación tiene un objetivo diferente. Estas rutas ayudan a identificar rápidamente dónde existe una posible colaboración con SOLYON.",

  routes: [
    {
      label: "Capital y estrategia",
      title: "Inversionistas y fondos",
      description:
        "Conversaciones sobre SOLYON Technologies, SOLYON OS, tesis DeepTech, estrategia comercial, construcción de plataforma, gobernanza y escalamiento.",
      tags: [
        "DeepTech",
        "Applied AI",
        "Infrastructure",
        "Venture",
      ],
      subject:
        "Interés de inversión en SOLYON Technologies",
      bodyTemplate:
        "Hola Sergio,\n\nOrganización / fondo:\nTesis o enfoque de inversión:\nMotivo del interés en SOLYON Technologies:\nEtapa o tipo de conversación propuesta:\n\nSaludos,",
      button:
        "Iniciar conversación de inversión",
    },
    {
      label: "Mercado y operaciones",
      title: "Empresas y operadores",
      description:
        "Problemas operativos donde conocimiento, workflows, datos, automatización o IA aplicada puedan convertirse en una solución tecnológica medible.",
      tags: [
        "Operations",
        "Insurance",
        "Automation",
        "Data",
      ],
      subject:
        "Colaboración empresarial con SOLYON Technologies",
      bodyTemplate:
        "Hola Sergio,\n\nEmpresa:\nProblema operacional:\nUsuarios o equipos afectados:\nEvidencia o datos disponibles:\nResultado esperado:\n\nSaludos,",
      button:
        "Explorar colaboración empresarial",
    },
    {
      label: "Instituciones e impacto",
      title: "Instituciones, universidades y organizaciones",
      description:
        "Movilidad, accesibilidad, investigación aplicada, tecnología urbana, conocimiento e iniciativas donde el laboratorio pueda construir y validar capacidad.",
      tags: [
        "Mobility",
        "Accessibility",
        "Research",
        "Institutions",
      ],
      subject:
        "Colaboración institucional con SOLYON Technologies",
      bodyTemplate:
        "Hola Sergio,\n\nInstitución:\nReto o programa:\nUsuarios o población involucrada:\nAlcance propuesto:\nResultado esperado:\n\nSaludos,",
      button:
        "Iniciar conversación institucional",
    },
    {
      label: "Tecnología e infraestructura",
      title: "IA, cloud, datos e integraciones",
      description:
        "Colaboraciones relacionadas con infraestructura, agentes, modelos, datos, conectores, automatización, APIs y herramientas para sistemas operacionales.",
      tags: [
        "AI",
        "Cloud",
        "Agents",
        "Integrations",
      ],
      subject:
        "Colaboración tecnológica con SOLYON Technologies",
      bodyTemplate:
        "Hola Sergio,\n\nEmpresa / equipo:\nCapacidad tecnológica:\nCaso de uso potencial:\nModelo de colaboración:\nSiguiente paso propuesto:\n\nSaludos,",
      button:
        "Explorar colaboración tecnológica",
    },
  ],

  prepareEyebrow:
    "Antes de conversar",

  prepareTitle:
    "Tres elementos ayudan a avanzar más rápido.",

  prepareBody:
    "No necesitamos una presentación perfecta. Necesitamos entender con precisión qué problema existe, qué evidencia tenemos y qué resultado tendría valor.",

  prepareItems: [
    {
      title: "Problema",
      body:
        "Qué proceso, sistema o usuario experimenta la fricción.",
    },
    {
      title: "Evidencia",
      body:
        "Qué información existe y qué ha sido observado o validado.",
    },
    {
      title: "Resultado",
      body:
        "Qué piloto, integración, decisión, alianza o inversión tendría sentido iniciar.",
    },
  ],

  investorEyebrow:
    "Capital · Escalamiento",

  investorTitle:
    "Construimos una compañía de infraestructura tecnológica.",

  investorBody:
    "La tesis de inversión de SOLYON parte de convertir conocimiento operacional en software, datos, automatización e inteligencia reutilizable mediante SOLYON OS, con mercados concretos para validar capacidad y recurrencia.",

  investorTags: [
    "SOLYON OS",
    "Operational Intelligence",
    "Applied AI",
    "DeepTech",
  ],

  investorSubject:
    "Solicitud de conversación de inversión — SOLYON Technologies",

  investorButton:
    "Solicitar conversación de inversión",

  moveTitle:
    "Conoce una ejecución pública del laboratorio.",

  moveBody:
    "SOLYON Move permite observar cómo el laboratorio convierte un problema real en producto móvil, datos, APIs, herramientas institucionales y validación territorial.",

  moveButton:
    "SOLYON Move gratis en Google Play",

  moveCaseButton:
    "Explorar el caso",

  finalTitle:
    "Las mejores conversaciones comienzan con un problema que vale la pena resolver.",

  finalBody:
    "Si existe un reto operacional, tecnológico, institucional o de inversión donde SOLYON pueda aportar capacidad real, conversemos.",

  finalButton:
    "Contactar SOLYON",
};

/* =========================================================
   ENGLISH
========================================================= */

const en = {
  heroEyebrow:
    "Impact · Evidence · Applied Technology",

  heroTitle:
    "Impact begins when technology leaves the laboratory.",

  heroBody:
    "SOLYON measures progress by its ability to turn knowledge into systems that operate under real users, institutions, territory and operational conditions.",

  heroTags: [
    "Applied Technology",
    "Territory",
    "Institutions",
    "Learning",
  ],

  heroAlt:
    "Institutional and territorial validation of SOLYON Move in Medellín",

  heroVisualEyebrow:
    "EXECUTION EVIDENCE",

  heroVisualTitle:
    "From laboratory to territory · Medellín",

  principleEyebrow:
    "Our definition of impact",

  principleTitle:
    "Build capability that remains after each execution.",

  principleBody:
    "For SOLYON, impact is not only reach. A valuable execution leaves product, knowledge, data, documentation, relationships, learning and reusable technology capability.",

  impactDimensions: [
    {
      title: "People",
      body:
        "Technology designed around real human needs, constraints and contexts.",
    },
    {
      title: "Operations",
      body:
        "Processes becoming more structured, traceable and suitable for automation.",
    },
    {
      title: "Institutions",
      body:
        "Capability to interact with public, private and innovation-ecosystem actors.",
    },
    {
      title: "Technology",
      body:
        "Knowledge and evidence converted into systems, data and reusable architecture.",
    },
  ],

  moveEyebrow:
    "Mobility · Territory · Accessibility",

  moveTitle:
    "SOLYON Move turned an urban challenge into technology capability.",

  moveBody:
    "The project pushed the laboratory to work across mobile product, territorial data, APIs, CRM, institutional tools and validation against real mobility conditions in Medellín.",

  moveAlt:
    "SOLYON Move used in Medellín as a technology validation environment",

  moveImpact: [
    {
      title: "Public product",
      body:
        "Mobile application available to users and subjected to functional evolution.",
    },
    {
      title: "Territory as data",
      body:
        "Urban and mobility conditions converted into usable information.",
    },
    {
      title: "Institutional layer",
      body:
        "CRM and tools for structuring monitoring, evidence and operations.",
    },
    {
      title: "Documented learning",
      body:
        "Execution generates evidence feeding subsequent phases and new capabilities.",
    },
  ],

  moveButton:
    "Explore SOLYON Move",

  downloadMove:
    "Get SOLYON Move free on Google Play",

  institutionalEyebrow:
    "Institutional impact",

  institutionalTitle:
    "Technology becomes stronger when third parties can observe and evaluate it.",

  institutionalBody:
    "SOLYON has taken its work beyond the controlled laboratory environment and exposed it to institutions, innovation programs and actors operating in the territory.",

  institutionalPoints: [
    {
      title: "Ruta N",
      body:
        "Articulation, monitoring and institutional context around SOLYON Move execution.",
    },
    {
      title: "Toyota Mobility Foundation",
      body:
        "International mobility-innovation framework within which SOLYON Move has been developed and presented.",
    },
    {
      title: "Medellín",
      body:
        "Urban environment used to confront technology with real territorial constraints.",
    },
    {
      title: "Innovation ecosystem",
      body:
        "Interaction with business, technical and institutional actors expanding external validation.",
    },
  ],

  institutionalAlt:
    "Institutional presentation and interaction of SOLYON Technologies",

  institutionalLabel:
    "INNOVATION · INSTITUTIONS · TERRITORY",

  aiEyebrow:
    "Applied AI · External Validation",

  aiTitle:
    "Technology impact also comes from expanding capability.",

  aiBody:
    "SOLYON Technologies' selection for an ElevenLabs Grant provides infrastructure and resources for developing new conversational and agent capabilities applied to concrete products.",

  aiTags: [
    "Conversational AI",
    "AI Agents",
    "Knowledge Systems",
    "Applied AI",
  ],

  grantEyebrow:
    "AI INFRASTRUCTURE PROGRAM",

  grantTitle:
    "SOLYON Technologies was selected to receive an ElevenLabs Grant.",

  grantBody:
    "Program resources will be used to advance conversational capabilities within the laboratory, beginning with SOLYON Academy and SOLYON Move Phase 2.",

  grantUses: [
    {
      title: "SOLYON Academy",
      body:
        "Conversational agents applied to knowledge and learning experiences.",
    },
    {
      title: "SOLYON Move · Phase 2",
      body:
        "Exploration of conversational interaction applied to mobility and territorial context.",
    },
  ],

  trajectoryEyebrow:
    "Demonstrated impact vs. impact under construction",

  trajectoryTitle:
    "We distinguish current evidence from future ambition.",

  trajectoryBody:
    "A DeepTech company gains credibility when it can state precisely what it has demonstrated and what it is still building.",

  demonstratedLabel:
    "TODAY · EVIDENCE",

  demonstrated: [
    {
      title: "Deployed technology product",
      body:
        "SOLYON Move demonstrates mobile execution, data, infrastructure and institutional tools.",
    },
    {
      title: "Territorial validation",
      body:
        "Technology confronted with real conditions in Medellín.",
    },
    {
      title: "Institutional interaction",
      body:
        "Participation and work within an innovation ecosystem involving external actors.",
    },
    {
      title: "Documented capability",
      body:
        "Processes, learning and evidence converted into reusable technology memory.",
    },
  ],

  buildingLabel:
    "NEXT STAGE · BUILDING",

  building: [
    {
      title: "SOLYON OS",
      body:
        "Progressive convergence of knowledge, data, systems, automation and agents.",
    },
    {
      title: "Insurance Operations",
      body:
        "First commercial validation market for reusable laboratory capabilities.",
    },
    {
      title: "Arcanum",
      body:
        "Intelligence layer under development connecting knowledge, context, agents and workflows.",
    },
    {
      title: "SOLYON Academy",
      body:
        "Application of structured knowledge and conversational agents to learning.",
    },
  ],

  trajectoryNote:
    "Initiatives under construction represent technology or commercial direction and are not presented as fully validated outcomes until evidence demonstrates otherwise.",

  systemicEyebrow:
    "Systemic impact",

  systemicTitle:
    "The most important asset is the ability to learn and reuse.",

  systemicBody:
    "Every product can generate more than software. It can create knowledge, architecture, data, controls and learning that reduce cost and improve the quality of subsequent executions.",

  systemicAlt:
    "Systemic and technology vision of SOLYON Technologies",

  systemicPoints: [
    {
      title: "Knowledge",
      body:
        "Experience and evidence transformed into reusable structure.",
    },
    {
      title: "Data",
      body:
        "Information organized for traceability, integration and new applications.",
    },
    {
      title: "Systems",
      body:
        "Technology components developed around concrete problems.",
    },
    {
      title: "Learning",
      body:
        "Validation improving architecture, product and future decisions.",
    },
  ],

  ctaTitle:
    "We want to build impact that can be demonstrated, not merely declared.",

  ctaBody:
    "SOLYON Technologies builds technology infrastructure from Medellín and progressively confronts it with real problems, users, institutions and markets.",

  ctaTechnology:
    "Explore technology",

  ctaContact:
    "Talk with SOLYON",
    "Contact · Technology · Capital · Partnerships",

  heroTitle:
    "Let us talk around a real problem.",

  heroBody:
    "SOLYON works with organizations, investors, institutions and technology teams where there is a concrete opportunity to turn knowledge, data and operations into technological capability.",

  heroTags: [
    "DeepTech",
    "Operational Intelligence",
    "Applied AI",
    "Medellín",
  ],

  emailButton:
    "Send an email",

  whatsappButton:
    "Chat on WhatsApp",

  location:
    "Medellín, Colombia · Technology built for real operating environments",

  generalSubject:
    "Strategic conversation with SOLYON Technologies",

  directEyebrow:
    "Direct contact",

  directTitle:
    "Simple channels to begin.",

  directBody:
    "You do not need a complex process to talk with us. If there is a concrete problem, opportunity, investment or partnership, we can begin directly with the essential context.",

  routesEyebrow:
    "Collaboration routes",

  routesTitle:
    "Start with the right context.",

  routesBody:
    "Each conversation has a different objective. These routes help identify where meaningful collaboration with SOLYON may exist.",

  routes: [
    {
      label: "Capital and strategy",
      title: "Investors and funds",
      description:
        "Conversations about SOLYON Technologies, SOLYON OS, the DeepTech thesis, commercial strategy, platform building, governance and scale.",
      tags: [
        "DeepTech",
        "Applied AI",
        "Infrastructure",
        "Venture",
      ],
      subject:
        "Investment interest in SOLYON Technologies",
      bodyTemplate:
        "Hello Sergio,\n\nOrganization / fund:\nInvestment thesis or focus:\nReason for interest in SOLYON Technologies:\nProposed stage or conversation type:\n\nRegards,",
      button:
        "Start an investment conversation",
    },
    {
      label: "Market and operations",
      title: "Companies and operators",
      description:
        "Operational problems where knowledge, workflows, data, automation or applied AI can become a measurable technology solution.",
      tags: [
        "Operations",
        "Insurance",
        "Automation",
        "Data",
      ],
      subject:
        "Business collaboration with SOLYON Technologies",
      bodyTemplate:
        "Hello Sergio,\n\nCompany:\nOperational problem:\nAffected users or teams:\nAvailable evidence or data:\nExpected outcome:\n\nRegards,",
      button:
        "Explore business collaboration",
    },
    {
      label: "Institutions and impact",
      title: "Institutions, universities and organizations",
      description:
        "Mobility, accessibility, applied research, urban technology, knowledge and initiatives where the laboratory can build and validate capability.",
      tags: [
        "Mobility",
        "Accessibility",
        "Research",
        "Institutions",
      ],
      subject:
        "Institutional collaboration with SOLYON Technologies",
      bodyTemplate:
        "Hello Sergio,\n\nInstitution:\nChallenge or program:\nUsers or population involved:\nProposed scope:\nExpected outcome:\n\nRegards,",
      button:
        "Start an institutional conversation",
    },
    {
      label: "Technology and infrastructure",
      title: "AI, cloud, data and integrations",
      description:
        "Collaborations involving infrastructure, agents, models, data, connectors, automation, APIs and tools for operational systems.",
      tags: [
        "AI",
        "Cloud",
        "Agents",
        "Integrations",
      ],
      subject:
        "Technology collaboration with SOLYON Technologies",
      bodyTemplate:
        "Hello Sergio,\n\nCompany / team:\nTechnology capability:\nPotential use case:\nCollaboration model:\nProposed next step:\n\nRegards,",
      button:
        "Explore technology collaboration",
    },
  ],

  prepareEyebrow:
    "Before we talk",

  prepareTitle:
    "Three elements help us move faster.",

  prepareBody:
    "We do not need a perfect presentation. We need to understand precisely what problem exists, what evidence is available and what outcome would create value.",

  prepareItems: [
    {
      title: "Problem",
      body:
        "Which process, system or user is experiencing the friction.",
    },
    {
      title: "Evidence",
      body:
        "What information exists and what has already been observed or validated.",
    },
    {
      title: "Outcome",
      body:
        "Which pilot, integration, decision, partnership or investment would make sense to begin.",
    },
  ],

  investorEyebrow:
    "Capital · Scale",

  investorTitle:
    "We are building a technology infrastructure company.",

  investorBody:
    "SOLYON's investment thesis begins by turning operational knowledge into reusable software, data, automation and intelligence through SOLYON OS, using concrete markets to validate capability and recurrence.",

  investorTags: [
    "SOLYON OS",
    "Operational Intelligence",
    "Applied AI",
    "DeepTech",
  ],

  investorSubject:
    "Investment conversation request — SOLYON Technologies",

  investorButton:
    "Request an investment conversation",

  moveTitle:
    "Explore a public execution of the laboratory.",

  moveBody:
    "SOLYON Move shows how the laboratory turns a real problem into mobile product, data, APIs, institutional tools and territorial validation.",

  moveButton:
    "Get SOLYON Move free on Google Play",

  moveCaseButton:
    "Explore the case",

  finalTitle:
    "The best conversations begin with a problem worth solving.",

  finalBody:
    "If there is an operational, technological, institutional or investment challenge where SOLYON can contribute real capability, let us talk.",

  finalButton:
    "Contact SOLYON",
};
