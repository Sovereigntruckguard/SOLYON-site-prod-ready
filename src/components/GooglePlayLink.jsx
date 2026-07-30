const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.solyon.move";

export default function GooglePlayLink({
  label = "Descargar gratis en Google Play",
  compact = false,
  className = "",
}) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] font-semibold text-white transition hover:border-[#E6BC68]/60 hover:bg-white/[0.08] ${
        compact ? "px-4 py-2 text-xs" : "px-7 py-3 text-sm"
      } ${className}`}
    >
      <svg width="17" height="19" viewBox="0 0 17 19" fill="none" aria-hidden="true">
        <path d="M1.2 1.5L10.5 9.5L1.2 17.5V1.5Z" fill="currentColor" opacity="0.9" />
        <path d="M10.5 9.5L13.1 7.2L16 8.85C16.7 9.25 16.7 9.75 16 10.15L13.1 11.8L10.5 9.5Z" fill="#E6BC68" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
