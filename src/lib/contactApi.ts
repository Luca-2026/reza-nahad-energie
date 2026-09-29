export type ContactPayload = {
  name: string; email: string; phone: string; service: string;
  message: string; location?: string | undefined; callback?: string | undefined; website?: string | undefined; token: string;
};

const ENDPOINT = import.meta.env["VITE_CONTACT_ENDPOINT"] || "/api/contact.php";

function isMock(): boolean {
  if (import.meta.env.DEV) return true;
  if (import.meta.env["VITE_CONTACT_MOCK"] === "true") return true;
  const h = typeof window !== "undefined" ? window.location.hostname : "";
  return /\.(lovable\.app|lovableproject\.com)$/.test(h);
}

export async function getContactToken(): Promise<string> {
  if (isMock()) return "mock";
  const r = await fetch(ENDPOINT, { headers: { Accept: "application/json" } });
  const j = await r.json();
  if (!r.ok || !j.ok) throw new Error("token_failed");
  return j.token as string;
}

export class ContactError extends Error {
  constructor(public status: number, public code: string, public fields?: Record<string, string>) { super(code); }
}

export async function sendContact(payload: ContactPayload): Promise<void> {
  if (isMock()) { await new Promise(r => setTimeout(r, 600)); return; }
  const r = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  const j = await r.json().catch(() => ({ ok: false, error: "bad_response" }));
  if (!r.ok || !j.ok) throw new ContactError(r.status, j.error ?? "send_failed", j.fields);
}
