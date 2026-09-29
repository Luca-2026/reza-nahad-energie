import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { phoneDisplay, phoneHref, services } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }
  return (
    <form onSubmit={submit} className="rounded-md border border-border bg-card p-6 md:p-8" aria-label="Anfrageformular">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required /><Field id="telefon" label="Telefon" type="tel" required /><Field id="email" label="E-Mail" type="email" required />
        <label className="grid gap-2 text-sm font-bold text-foreground" htmlFor="leistung">Leistung *
          <select id="leistung" name="leistung" required className="min-h-11 rounded-md border border-input bg-background px-3 font-normal text-foreground"><option value="">Bitte auswählen</option>{services.map((s) => <option key={s.slug}>{s.name}</option>)}<option>Notdienst / Störung</option><option>Sonstiges</option></select>
        </label>
        <Field id="ort" label="PLZ / Ort" />
        <label className="grid gap-2 text-sm font-bold text-foreground" htmlFor="rueckruf">Rückruf-Zeitfenster
          <select id="rueckruf" name="rueckruf" className="min-h-11 rounded-md border border-input bg-background px-3 font-normal text-foreground"><option>egal</option><option>vormittags</option><option>nachmittags</option><option>abends bis 19 Uhr</option></select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-bold text-foreground" htmlFor="nachricht">Ihre Nachricht *
        <textarea id="nachricht" name="nachricht" required minLength={10} maxLength={5000} rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2 font-normal text-foreground placeholder:text-muted-foreground" placeholder="Worum geht es?" />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <p className="mt-4 text-xs text-muted-foreground">Mit dem Absenden werden Ihre Angaben zur Bearbeitung Ihrer Anfrage per E-Mail an uns übermittelt. Informationen zum Umgang mit Ihren Daten finden Sie in unserer <Link to="/datenschutz" className="underline">Datenschutzerklärung</Link>.</p>
      <Button size="lg" type="submit" className="mt-5 w-full sm:w-auto">Anfrage vorbereiten <ArrowRight className="size-5" aria-hidden="true" /></Button>
      {submitted && <p role="status" className="mt-4 rounded-md bg-secondary p-3 text-sm font-semibold text-primary">Vielen Dank. Der Online-Versand wird noch eingerichtet. Bitte rufen Sie uns unter <a className="underline" href={phoneHref}>{phoneDisplay}</a> an.</p>}
    </form>
  );
}

function Field({ id, label, type = "text", required = false }: { id: string; label: string; type?: string; required?: boolean }) {
  return <label className="grid gap-2 text-sm font-bold text-foreground" htmlFor={id}>{label}{required ? " *" : ""}<input id={id} name={id} type={type} required={required} minLength={id === "name" ? 2 : id === "telefon" ? 6 : undefined} maxLength={id === "ort" ? 60 : id === "telefon" ? 30 : 100} className="min-h-11 rounded-md border border-input bg-background px-3 font-normal text-foreground" /></label>;
}
