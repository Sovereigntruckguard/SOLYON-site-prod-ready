import crypto from "crypto";
import { NextResponse } from "next/server";
import { appendCsv, postToSheet } from "@/lib/logger";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const secret = process.env.WOMPI_INTEGRITY_SECRET;
  if (!secret) return NextResponse.json({ ok: false, error: "missing_secret" }, { status: 500 });

  const raw = await req.text();
  const headerSig = req.headers.get("integrity-signature") || "";
  const calc = crypto.createHmac("sha256", secret).update(raw, "utf8").digest("hex");
  const a = Buffer.from(calc); const b = Buffer.from(headerSig);
  const valid = a.length === b.length && crypto.timingSafeEqual(a, b);
  if (!valid) return NextResponse.json({ ok: false, error: "invalid_signature" }, { status: 400 });

  try {
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
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
}
