"use client";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.solyon.move";

export default function GooglePlayLink({
  label = "Descargar gratis en Google Play",
  className = "",
}) {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#E6BC68]/50 hover:bg-white/[0.035] ${className}`}
    >
      <GooglePlayIcon />

      <span>{label}</span>
    </a>
  );
}

function GooglePlayIcon() {
  return (
    <svg
      width="21"
      height="23"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* azul */}
      <path
        d="M1.5 1.8C1.18 2.22 1 2.76 1 3.42V22.58C1 23.24 1.18 23.78 1.5 24.2L1.58 24.28L12.32 13.54V13.29L1.58 2.55L1.5 1.8Z"
        fill="#00D7FE"
      />

      {/* verde */}
      <path
        d="M15.9 17.13L12.32 13.54V13.29L15.91 9.7L16 9.75L20.25 12.17C21.46 12.86 21.46 13.98 20.25 14.67L16 17.09L15.9 17.13Z"
        fill="#FFEA00"
      />

      {/* rojo */}
      <path
        d="M16 17.09L12.32 13.42L1.5 24.2C2.01 24.75 2.85 24.82 3.8 24.28L16 17.09Z"
        fill="#FF3A44"
      />

      {/* verde */}
      <path
        d="M16 9.75L3.8 2.56C2.85 2.02 2.01 2.09 1.5 2.64L12.32 13.42L16 9.75Z"
        fill="#00F076"
      />
    </svg>
  );
}
