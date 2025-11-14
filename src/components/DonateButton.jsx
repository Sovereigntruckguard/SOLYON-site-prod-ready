"use client";

import { useMemo } from "react";

export default function DonateButton() {
  const pubKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  // Donación fija por ahora (ej: 50.000 COP). Luego podemos hacerla dinámica.
  const amountCOP = 50000;
  const amountCents = amountCOP * 100;
  const reference = useMemo(
    () => `SOLYON-DONATION-${Date.now()}`,
    []
  );

  if (!pubKey) {
    console.warn("[DonateButton] Falta NEXT_PUBLIC_WOMPI_PUBLIC_KEY");
  }

  return (
    <button
      className="btn text-sm bg-transparent border border-[#FF8FB8] text-[#FFDEE9]"
      data-currency="COP"
      data-public-key={pubKey}
      data-amount-in-cents={amountCents.toString()}
      data-reference={reference}
      data-redirect-url={`${siteUrl}/gracias`}
      onClick={() =>
        console.log("[Donate] click", { reference, amountCOP, siteUrl })
      }
    >
      Apoyar el ecosistema (50K)
    </button>
  );
}
