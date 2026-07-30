import Link from "next/link";
import Brand from "@/components/brand";
import { ArrowUpRight } from "@/components/icons";
import { localizedPath } from "@/lib/site";

export default function SiteFooter({ locale, copy }) {
  const companyLinks = copy.nav.slice(3);
  const exploreLinks = [...copy.nav.slice(0, 3), ...copy.navMore];

  return (
    <footer className="border-t border-white/[0.08] bg-[#050607]">
      <div className="mx-auto max-w-[92rem] px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div className="max-w-md">
            <Brand locale={locale} />
            <p className="mt-6 text-pretty text-base leading-7 text-steel">
              {copy.footer.statement}
            </p>
            <p className="mt-5 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-white/35">
              {copy.footer.status}
            </p>
          </div>
          <FooterColumn
            locale={locale}
            links={exploreLinks}
            title={copy.footer.explore}
          />
          <div>
            <FooterColumn
              locale={locale}
              links={companyLinks}
              title={copy.footer.company}
            />
            <Link
              className="mt-5 inline-flex items-center gap-2 text-sm text-steel transition-colors hover:text-gold-soft"
              href={localizedPath(locale, "/privacy")}
            >
              {copy.footer.privacy}
              <ArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.07] pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Solyon Technologies S.A.S.</p>
          <p>{copy.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ locale, links, title }) {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-paper">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              className="text-sm text-steel transition-colors hover:text-gold-soft"
              href={localizedPath(locale, item.href)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
