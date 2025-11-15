"use client";

export default function DonateButton() {
  const donateUrl = process.env.NEXT_PUBLIC_WOMPI_DONATE_URL;

  if (!donateUrl) {
    console.warn(
      "[DonateButton] Falta NEXT_PUBLIC_WOMPI_DONATE_URL. Configúrala en Vercel."
    );
  }

  return (
    <a
      href={donateUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="btn w-full py-3 text-sm md:text-base text-center"
    >
      Confirmar aporte en Wompi
    </a>
  );
}
