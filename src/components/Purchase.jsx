"use client";
import { useMemo } from "react";
import { product, amountInCents } from "@/lib/products";

export default function Purchase() {
  const pubKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const reference = useMemo(() => `${product.id}-${Date.now()}`, []);
  const amountCents = amountInCents(product.priceCOP);
  return (
    <section id="comprar" className="section">
      <div className="card p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="font-display text-3xl md:text-4xl gradient-gold">Monetiza desde hoy</h2>
            <p className="text-gray-300 mt-4 max-w-2xl">
              Compra inmediata vía Wompi. Recibirás confirmación al correo y acceso al <i>Kit Digital</i>.
            </p>
            <ul className="mt-4 text-gray-200 space-y-2">
              <li>• Producto: <b>{product.name}</b></li>
              <li>• Precio: <b>${product.priceCOP.toLocaleString("es-CO")} COP</b></li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="p-6 rounded-2xl bg-[#202020] border border-[#2A2A2A]">
              <button
                className="btn w-full text-center"
                data-currency="COP"
                data-public-key={pubKey}
                data-amount-in-cents={amountCents.toString()}
                data-reference={reference}
                data-redirect-url={`${siteUrl}/gracias`}
              >Pagar con Wompi</button>
              <p className="text-xs text-gray-400 mt-3">Pago procesado por Wompi. Transacción segura en Colombia.</p>
              <div className="mt-6 text-sm text-gray-300">¿Necesitas factura corporativa o USD? Escríbenos a <a className="underline" href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</a>.</div>
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-xs mt-6">*Para Webhooks/Firma avanzados, añadiremos endpoint Next API con llave privada segura.</p>
      </div>
    </section>
  );
}
