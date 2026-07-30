import Link from "next/link";

export function BrandMark({ className = "h-8 w-8" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 42 42"
    >
      <circle cx="21" cy="12.5" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="13" cy="26.5" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="29" cy="26.5" r="9.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Brand({ locale, compact = false }) {
  return (
    <Link
      aria-label="Solyon Technologies"
      className="group inline-flex items-center gap-3"
      href={`/${locale}`}
    >
      <span className="text-gold transition-colors group-hover:text-gold-soft">
        <BrandMark className={compact ? "h-7 w-7" : "h-8 w-8"} />
      </span>
      <span className="flex flex-col">
        <span className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-paper">
          Solyon
        </span>
        {!compact && (
          <span className="text-[0.56rem] uppercase tracking-[0.26em] text-steel">
            Technologies
          </span>
        )}
      </span>
    </Link>
  );
}
