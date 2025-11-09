import fs from "fs/promises";
export function buildCsvRow(t) {
  const safe = (v) => `"${String(v).replace(/"/g, '""')}"`;
  return [t.created_at, t.event, t.status, t.reference, t.transaction_id, t.amount_in_cents, t.currency].map(safe).join(",") + "\n";
}
export async function appendCsv(t, path = "/tmp/transactions.csv") {
  const row = buildCsvRow(t);
  await fs.appendFile(path, row, { encoding: "utf8" });
}
export async function postToSheet(t) {
  const url = process.env.SHEET_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(t) });
}
