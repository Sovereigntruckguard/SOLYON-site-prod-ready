"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Brand from "@/components/brand";
import { ArrowUpRight, ChevronDown, MenuIcon } from "@/components/icons";
import { localizedPath } from "@/lib/site";

export default function SiteHeader({ locale, copy }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const otherLocale = locale === "en" ? "es" : "en";
  const languagePath = pathname.replace(/^\/(en|es)(?=\/|$)/, `/${otherLocale}`);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    const fullPath = localizedPath(locale, href);
    return pathname === fullPath || (href && pathname.startsWith(`${fullPath}/`));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-ink/88 backdrop-blur-xl">
      <a
        className="absolute left-4 top-0 -translate-y-full rounded-b bg-gold px-4 py-2 text-xs font-semibold text-ink transition-transform focus:translate-y-0"
        href="#main-content"
      >
        {copy.skip}
      </a>
      <div className="mx-auto flex h-[4.75rem] max-w-[92rem] items-center justify-between px-5 sm:px-8">
        <Brand locale={locale} />

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-0.5 xl:flex"
        >
          {copy.nav.map((item) => (
            <Link
              className={`rounded-full px-3.5 py-2 text-[0.78rem] font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-white/[0.07] text-paper"
                  : "text-steel hover:text-paper"
              }`}
              href={localizedPath(locale, item.href)}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              aria-expanded={moreOpen}
              className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.78rem] font-medium text-steel transition-colors hover:text-paper"
              onClick={() => setMoreOpen((value) => !value)}
              type="button"
            >
              {locale === "en" ? "More" : "Más"}
              <ChevronDown />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full w-48 pt-2">
                <div className="rounded-2xl border border-white/10 bg-panel p-2 shadow-2xl">
                  {copy.navMore.map((item) => (
                    <Link
                      className="block rounded-xl px-3 py-2.5 text-sm text-steel transition-colors hover:bg-white/[0.05] hover:text-paper"
                      href={localizedPath(locale, item.href)}
                      key={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            className="rounded-full px-3 py-2 text-xs font-medium text-steel transition-colors hover:text-paper"
            href={languagePath}
            hrefLang={otherLocale}
          >
            {copy.switchLanguage}
          </Link>
          <Link
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2.5 text-xs font-semibold text-gold-soft transition-colors hover:border-gold hover:bg-gold hover:text-ink"
            href={localizedPath(locale, "/contact")}
          >
            {copy.contactLabel}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-paper xl:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/[0.07] bg-ink px-5 pb-6 pt-3 xl:hidden"
        >
          {[...copy.nav, ...copy.navMore].map((item) => (
            <Link
              className={`flex items-center justify-between border-b border-white/[0.06] py-3.5 text-sm ${
                isActive(item.href) ? "text-gold-soft" : "text-paper"
              }`}
              href={localizedPath(locale, item.href)}
              key={item.href}
            >
              {item.label}
              <ArrowUpRight className="h-4 w-4 text-steel" />
            </Link>
          ))}
          <div className="mt-5 flex items-center justify-between gap-3">
            <Link
              className="rounded-full border border-white/10 px-4 py-2.5 text-xs text-steel"
              href={languagePath}
              hrefLang={otherLocale}
            >
              {copy.switchLanguage}
            </Link>
            <Link
              className="rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-ink"
              href={localizedPath(locale, "/contact")}
            >
              {copy.contactLabel}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
