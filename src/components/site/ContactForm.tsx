import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { z } from "zod";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ContactError, getContactToken, sendContact } from "@/lib/contactApi";
import { phoneDisplay, phoneHref } from "@/lib/site";

const serviceOptions = [
  "Elektroinstallation", "Zählerschrank/Sicherungskasten", "Photovoltaik/Speicher", "Wallbox", "Wärmepumpe-Anschluss",
  "Smart Home", "Prüfung/E-Check", "DGUV V3", "Beleuchtung", "Netzwerk/Türsprechanlage", "Gewerbe/Hausverwaltung",
  "Notdienst/Störung", "Sonstiges",
];
const callbackOptions = ["egal", "vormittags", "nachmittags", "abends bis 19 Uhr"];

const schema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an (mind. 2 Zeichen).").max(100, "Maximal 100 Zeichen."),
  phone: z.string().trim().min(6, "Bitte geben Sie eine Telefonnummer an.").max(30, "Maximal 30 Zeichen.").regex(/^[0-9+\s/()-]+$/, "Bitte nur Ziffern, +, Leerzeichen, /, () oder - verwenden."),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an.").max(255),
  service: z.string().refine((v) => serviceOptions.includes(v), "Bitte wählen Sie eine Leistung aus."),
  location: z.string().trim().max(60, "Maximal 60 Zeichen.").optional(),
  message: z.string().trim().min(10, "Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).").max(5000, "Maximal 5000 Zeichen."),
  callback: z.string().optional(),
});
type Fields = keyof z.infer<typeof schema>;
type Status = "idle" | "sending" | "sent";

const inputCls = "min-h-12 w-full rounded-md border border-input bg-background px-3 font-normal text-foreground transition-colors focus:border-primary aria-[invalid=true]:border-destructive";

export function ContactForm() {
  const [token, setToken] = useState("");
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    getContactToken().then(setToken).catch(() => setToken(""));
  }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(["name", "phone", "email", "service", "location", "message", "callback"].map((k) => [k, String(fd.get(k) ?? "")]));
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: Partial<Record<Fields, string>> = {};
      for (const issue of parsed.error.issues) { const k = issue.path[0] as Fields; if (!next[k]) next[k] = issue.message; }
      setErrors(next);
      const first = Object.keys(next)[0];
      if (first) document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      let t = token;
      if (!t) t = await getContactToken();
      await sendContact({ ...parsed.data, website: String(fd.get("website") ?? ""), token: t });
      setStatus("sent");
    } catch (err) {
      setStatus("idle");
      if (err instanceof ContactError && err.status === 429) setFormError("Sie haben in kurzer Zeit mehrere Anfragen gesendet. Bitte versuchen Sie es in einigen Minuten erneut oder rufen Sie uns an.");
      else if (err instanceof ContactError && err.status === 422 && err.fields) setErrors(err.fields as Partial<Record<Fields, string>>);
      else setFormError(`Ihre Anfrage konnte leider nicht gesendet werden. Bitte rufen Sie uns an unter ${phoneDisplay} oder schreiben Sie eine E-Mail.`);
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-l-4 border-success bg-secondary p-6 md:p-8">
        <CheckCircle2 className="size-10 text-success" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-extrabold text-primary">Vielen Dank – Ihre Anfrage ist bei uns angekommen.</h2>
        <p className="mt-3 text-muted-foreground">Wir melden uns in der Regel innerhalb eines Werktags telefonisch oder per E-Mail. Bei Projekten vereinbaren wir einen Vor-Ort-Termin, danach erhalten Sie ein schriftliches Angebot.</p>
        <p className="mt-3 text-muted-foreground">Bei Störungen rufen Sie bitte direkt an: <a href={phoneHref} className="font-bold text-primary underline">{phoneDisplay}</a></p>
      </div>
    );
  }

  const err = (k: Fields) => errors[k] ? <p id={`cf-${k}-error`} className="text-sm font-semibold text-destructive">{errors[k]}</p> : null;
  const a11y = (k: Fields) => ({ id: `cf-${k}`, name: k, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `cf-${k}-error` : undefined });

  return (
    <form onSubmit={submit} noValidate className="relative border-t-2 border-accent bg-card pt-6 md:pt-8" aria-label="Anfrageformular">
      <p className="eyebrow">Ihr Anliegen</p>
      <h2 className="mb-7 mt-2 text-2xl font-extrabold text-primary">Anfrage senden</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2"><label htmlFor="cf-name" className="text-sm font-bold">Name *</label><input {...a11y("name")} autoComplete="name" maxLength={100} className={inputCls} />{err("name")}</div>
        <div className="grid gap-2"><label htmlFor="cf-phone" className="text-sm font-bold">Telefon *</label><input {...a11y("phone")} type="tel" autoComplete="tel" maxLength={30} className={inputCls} />{err("phone")}</div>
        <div className="grid gap-2"><label htmlFor="cf-email" className="text-sm font-bold">E-Mail *</label><input {...a11y("email")} type="email" autoComplete="email" maxLength={255} className={inputCls} />{err("email")}</div>
        <div className="grid gap-2"><label htmlFor="cf-service" className="text-sm font-bold">Leistung *</label>
          <select {...a11y("service")} defaultValue="" className={inputCls}><option value="">Bitte auswählen</option>{serviceOptions.map((o) => <option key={o}>{o}</option>)}</select>{err("service")}</div>
        <div className="grid gap-2"><label htmlFor="cf-location" className="text-sm font-bold">PLZ / Ort (optional)</label><input {...a11y("location")} autoComplete="postal-code" maxLength={60} className={inputCls} />{err("location")}</div>
        <div className="grid gap-2"><label htmlFor="cf-callback" className="text-sm font-bold">Rückruf-Zeitfenster (optional)</label>
          <select {...a11y("callback")} defaultValue="egal" className={inputCls}>{callbackOptions.map((o) => <option key={o}>{o}</option>)}</select></div>
      </div>
      <div className="mt-5 grid gap-2"><label htmlFor="cf-message" className="text-sm font-bold">Ihre Nachricht *</label>
        <textarea {...a11y("message")} maxLength={5000} rows={5} className={`${inputCls} py-2 placeholder:text-muted-foreground`} placeholder="Beispiel: Wir möchten eine 11-kW-Wallbox in der Garage installieren lassen, Zählerschrank ist von 1995, Leitungsweg ca. 15 m." />{err("message")}</div>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden" />
      <input type="hidden" name="token" value={token} />
      {formError && <p role="alert" className="mt-5 rounded-md border border-destructive p-3 text-sm font-semibold text-destructive">{formError}</p>}
      <Button size="lg" type="submit" disabled={status === "sending"} className="mt-5 w-full sm:w-auto">{status === "sending" ? "Senden…" : <>Anfrage senden <ArrowRight className="size-5" aria-hidden="true" /></>}</Button>
      <p className="mt-4 text-xs text-muted-foreground">Mit dem Absenden werden Ihre Angaben zur Bearbeitung Ihrer Anfrage per E-Mail an uns übermittelt (Art. 6 Abs. 1 lit. b DSGVO). Informationen zum Umgang mit Ihren Daten finden Sie in unserer <Link to="/datenschutz" className="underline">Datenschutzerklärung</Link>.</p>
    </form>
  );
}
