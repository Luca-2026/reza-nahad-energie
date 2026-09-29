export type ContactPayload = {
  name: string; email: string; phone: string; service: string;
  message: string; location?: string | undefined; callback?: string | undefined; website?: string | undefined; token: string;
};

// LIVE (STRATO): PHP-Skript public/api/contact.php, Resend-Key in api/config.php auf dem Server.
const ENDPOINT = import.meta.env["VITE_CONTACT_ENDPOINT"] || "/api/contact.php";
// TESTMODUS (nur Lovable-Vorschau): Resend-Key aus den Lovable-Secrets.
const PREVIEW_TEST_ENDPOINT = "/api/preview-contact-test";

/** true nur in der Lovable-Vorschau / lokal – nie auf nahad-energie.de. Nur im Browser aufrufen. */
export function isPreviewTestMode(): boolean {
  if (import.meta.env.DEV) return true;
  if (import.meta.env["VITE_CONTACT_MOCK"] === "true") return true;
  const h = typeof window !== "undefined" ? window.location.hostname : "";
  return /\.(lovable\.app|lovableproject\.com)$/.test(h);
}

export async function getContactToken(): Promise<string> {
  if (isPreviewTestMode()) return "preview-test";
  const r = await fetch(ENDPOINT, { headers: { Accept: "application/json" } });
  const j = await r.json();
  if (!r.ok || !j.ok) throw new Error("token_failed");
  return j.token as string;
}

export class ContactError extends Error {
  constructor(public status: number, public code: string, public fields?: Record<string, string>, public detail?: string) { super(code); }
}

export async function sendContact(payload: ContactPayload): Promise<{ test: boolean; to?: string }> {
  const test = isPreviewTestMode();
  const r = await fetch(test ? PREVIEW_TEST_ENDPOINT : ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  const j = await r.json().catch(() => ({ ok: false, error: "bad_response" }));
  if (!r.ok || !j.ok) throw new ContactError(r.status, j.error ?? "send_failed", j.fields, j.detail);
  return { test, to: j.to };
}
