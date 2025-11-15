"use client";

export default function WompiTrustBand({ variant = "full" }) {
  if (variant === "compact") {
    // Versión compacta para el modal de donación
    return (
      <div className="mt-3 flex flex-col gap-2 border-t border-[#2A2A2A] pt-3">
        <div className="flex flex-col gap-2 rounded-2xl bg-[#2C2A29] px-3 py-2">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/wompi/logo-wompi.svg"
                alt="Wompi"
                className="h-4 w-auto"
              />
              <span className="text-[0.7rem] text-gray-300">
                Pagos procesados por Wompi.
              </span>
            </div>
            <span className="text-[0.65rem] text-gray-400 text-right">
              Estándares de seguridad PCI DSS.
            </span>
          </div>
          <p className="text-[0.65rem] text-gray-500 text-center">
            Tus datos de pago se manejan en la infraestructura segura de Wompi.
            SOLYON nunca almacena la información de tarjetas.
          </p>
        </div>
      </div>
    );
  }

  // Versión completa para la tarjeta del Kit Digital
  return (
    <div className="mt-2 space-y-2">
      <p className="text-[0.7rem] md:text-xs text-gray-400">
        En el checkout de Wompi podrás pagar con tarjeta débito o crédito,
        Nequi, PSE, efectivo en corresponsales y la opción{" "}
        <span className="text-[#FFD700] font-semibold">“Paga con crédito”</span>{" "}
        ofrecida por sus aliados.
      </p>

      {/* Sello tipo "plataforma de pago" siguiendo el estilo del manual */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 rounded-2xl bg-[#2C2A29] px-3 py-2">
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-left">
            <span className="text-[0.7rem] text-gray-400">
              Plataforma de pago
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <img
                src="/wompi/logo-wompi.svg"
                alt="Wompi"
                className="h-5 w-auto"
              />
            </div>
          </div>
        </div>
        <p className="text-[0.65rem] md:text-[0.7rem] text-gray-300 text-left md:text-right">
          Wompi es la pasarela de pagos del sistema financiero colombiano.
          Tus pagos se procesan en infraestructura bancaria certificada bajo
          estándares PCI DSS.
        </p>
      </div>

      {/* Tira de medios de pago (diseñada por SOLYON, sin usar logos ajenos) */}
      <div className="flex flex-wrap items-center gap-3 justify-between text-[0.65rem] md:text-[0.7rem] text-gray-400">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center rounded-md bg-[#2C2A29] px-2 py-1">
            💳
          </span>
          <span>Tarjetas débito y crédito</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center rounded-md bg-[#2C2A29] px-2 py-1">
            🏦
          </span>
          <span>Nequi · PSE · cuentas bancarias</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center rounded-md bg-[#2C2A29] px-2 py-1">
            💵
          </span>
          <span>Efectivo en corresponsales</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center rounded-md bg-[#2C2A29] px-2 py-1 border border-[#DFFF61]/70">
            ⚡
          </span>
          <span>Nuevo: paga con crédito</span>
        </div>
      </div>
    </div>
  );
}
