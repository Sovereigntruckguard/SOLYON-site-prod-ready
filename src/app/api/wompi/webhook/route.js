import crypto from "crypto";
import { NextResponse } from "next/server";
import { appendCsv, postToSheet } from "@/lib/wompi-utils"; 


export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  // Usamos console.log directamente en lugar del logger para eliminar la dependencia
  console.log("WOMPI WEBHOOK: Proceso de validación iniciado."); 
  
  const secret = process.env.WOMPI_INTEGRITY_SECRET;
  if (!secret) {
      console.error("WOMPI ERROR: Falta la clave secreta de WOMPI (WOMPI_INTEGRITY_SECRET).");
      return NextResponse.json({ ok: false, error: "missing_secret" }, { status: 500 });
  }

  const raw = await req.text();
  const headerSig = req.headers.get("integrity-signature") || "";
  const calc = crypto.createHmac("sha256", secret).update(raw, "utf8").digest("hex");
  
  try {
    const a = Buffer.from(calc); 
    const b = Buffer.from(headerSig);
    
    // Usamos el check de tiempo seguro
    const valid = a.length === b.length && crypto.timingSafeEqual(a, b);
    
    if (!valid) {
        console.warn("WOMPI WARN: Firma de integridad inválida. Acceso Denegado.");
        return NextResponse.json({ ok: false, error: "invalid_signature" }, { status: 400 });
    }

    const payload = JSON.parse(raw);
    const tx = payload?.data?.transaction || {};
    const log = {
      created_at: new Date().toISOString(),
      event: payload?.event || "",
      status: tx?.status || "",
      reference: tx?.reference || "",
      amount_in_cents: Number(tx?.amount_in_cents || 0),
      currency: tx?.currency || "",
      transaction_id: tx?.id || ""
    };
    
    await appendCsv(log);
    await postToSheet(log);
    
    console.log(`WOMPI OK: Transacción procesada. ID: ${log.transaction_id}, Status: ${log.status}`);

    return NextResponse.json({ ok: true });
    
  } catch (error) {
    console.error("WOMPI FATAL ERROR:", error.message);
    return NextResponse.json({ ok: false, error: "invalid_json_or_processing_fail" }, { status: 400 });
  }
}