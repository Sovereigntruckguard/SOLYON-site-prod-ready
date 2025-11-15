"use client";

import { useState } from "react";
import DonateButton from "@/components/DonateButton";
import WompiTrustBand from "@/components/WompiTrustBand";


const AMOUNTS = [5000, 10000, 20000, 50000, 100000];

export default function SupportModal() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(50000);

    return (
      <>
        {/* Botón disparador dentro de la tarjeta */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="btn w-full py-3 text-sm md:text-base flex items-center justify-center gap-2"
        >
          <span>Apoyar el ecosistema</span>
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.7rem] text-black shadow-[0_0_18px_rgba(255,158,207,0.9)]">
            ♥
          </span>
        </button>
  
        {/* MODAL FLOTANTE */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-md card p-6 space-y-5">
              {/* BOTÓN CERRAR */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-200 text-sm"
              >
                ✕
              </button>
  
              <div className="space-y-2 text-center">
                <h3 className="font-display text-2xl gradient-gold">
                  Apoya el laboratorio SOLYON
                </h3>
                <p className="text-gray-300 text-sm">
                  Tu aporte sostiene investigación, infraestructura y becas para
                  talento latino que está construyendo la primera arquitectura
                  DeepTech soberana de la región. Elige un monto sugerido o define
                  el que sientas.
                </p>
              </div>
  
              {/* MONTOS RÁPIDOS */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Elige un monto sugerido
                </p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  {AMOUNTS.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setSelected(amount)}
                      className={`py-2 rounded-2xl border text-center ${
                        selected === amount
                          ? "bg-[#FFD700] text-black border-[#FFD700]"
                          : "bg-[#111111] text-gray-200 border-[#FFD700]/30 hover:bg-[#181818]"
                      }`}
                    >
                      {amount.toLocaleString("es-CO")}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelected(0)}
                    className={`py-2 rounded-2xl border text-center ${
                      selected === 0
                        ? "bg-[#ffb6f0] text-black border-[#ffb6f0]"
                        : "bg-[#111111] text-gray-200 border-[#ffb6f0]/40 hover:bg-[#181818]"
                    }`}
                  >
                    Otro
                  </button>
                </div>
              </div>
  
              {/* RESUMEN + BOTÓN WOMPI */}
            <div className="space-y-3">
              <p className="text-sm text-gray-200 text-center">
                <span className="text-gray-400">Monto seleccionado: </span>
                <span className="text-[#FFD700] font-semibold">
                  {selected > 0
                    ? `$${selected.toLocaleString("es-CO")} COP`
                    : "Defínelo en el checkout"}
                </span>
              </p>
                        <DonateButton />
          
                        {/* Banda compacta de confianza Wompi */}
                        <WompiTrustBand variant="compact" />
                      </div>
                    </div>
                  </div>
                  )}
                </>
              );
            }
