import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

// NUR Lovable-Vorschau: prüft den Resend-Versand mit dem Lovable-Secret RESEND_API_KEY.
// Auf STRATO existiert diese Route nicht – dort versendet public/api/contact.php mit api/config.php.
const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(1).max(30),
  service: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1).max(5000),
  location: z.string().trim().max(60).optional(),
  callback: z.string().trim().max(60).optional(),
  website: z.string().optional(),
});

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const json = (status: number, body: unknown) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

export const Route = createFileRoute("/api/preview-contact-test")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const host = new URL(request.url).hostname;
        if (!/(\.lovable\.app|\.lovableproject\.com|^localhost|^127\.0\.0\.1)$/.test(host)) return json(404, { ok: false, error: "not_found" });
        const parsed = schema.safeParse(await request.json().catch(() => null));
        if (!parsed.success) return json(422, { ok: false, error: "validation" });
        const d = parsed.data;
        if (d.website) return json(200, { ok: true, test: true });

        const key = process.env["RESEND_API_KEY"];
        if (!key) return json(503, { ok: false, error: "missing_key" });
        const from = process.env["RESEND_TEST_FROM"] || "Nahad Energie Test <onboarding@resend.dev>";
        const to = process.env["RESEND_TEST_TO"] || "info@nahad-energie.de";

        const rows = [["Name", d.name], ["Telefon", d.phone], ["E-Mail", d.email], ["Leistung", d.service], ["PLZ/Ort", d.location ?? "–"], ["Rückruf", d.callback ?? "–"]]
          .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v!)}</td></tr>`).join("");
        const html = `<p><b>TESTMODUS – gesendet aus der Lovable-Vorschau, nicht von der Live-Website.</b></p><table>${rows}</table><p>${esc(d.message).replace(/\n/g, "<br>")}</p>`;

        const r = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
          body: JSON.stringify({ from, to: [to], reply_to: d.email, subject: `[TEST] Anfrage: ${d.service} – ${d.name}`, html }),
        });
        if (!r.ok) {
          const body = await r.text();
          console.error(`Resend test failed [${r.status}]: ${body}`);
          return json(502, { ok: false, error: "resend_failed", status: r.status, detail: body.slice(0, 500) });
        }
        return json(200, { ok: true, test: true, to });
      },
    },
  },
});
