import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  Building2,
  Check,
  ClipboardCheck,
  Factory,
  HardHat,
  House,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/nahad-energie-logo.png.asset.json";
import officeAsset from "@/assets/reza-nahad-buero.jpeg.asset.json";
import workAsset from "@/assets/reza-nahad-elektroarbeit.jpeg.asset.json";
import distributionAsset from "@/assets/nahad-baustromverteiler.jpeg.asset.json";

const phoneDisplay = "0211 54268296";
const phoneHref = "tel:+4921154268296";
const whatsappHref = "https://wa.me/4921154268296";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elektriker Düsseldorf | Nahad Energie" },
      { name: "description", content: "Nahad Energie Elektrotechnik: Ihr Meisterbetrieb für Elektroarbeiten in Düsseldorf und 25 km Umgebung. Jetzt persönlich anfragen." },
      { property: "og:title", content: "Nahad Energie Elektrotechnik in Düsseldorf" },
      { property: "og:description", content: "Persönliche Elektroarbeiten vom Meisterbetrieb für Privatkunden, Verwaltungen und Gewerbe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Bolt, title: "Elektroinstallation", text: "Sichere und fachgerechte Lösungen für Neubau, Umbau und Modernisierung." },
  { icon: ClipboardCheck, title: "Prüfung & Wartung", text: "Elektrische Anlagen sorgfältig prüfen, warten und nachvollziehbar dokumentieren." },
  { icon: HardHat, title: "Baustrom", text: "Passende Stromversorgung für Baustellen und zeitlich begrenzte Vorhaben." },
  { icon: Wrench, title: "Fehlersuche & Reparatur", text: "Störungen systematisch eingrenzen und technische Probleme zuverlässig beheben." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <a href="#inhalt" className="sr-only z-50 bg-background px-4 py-3 text-primary focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Zum Inhalt springen</a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 lg:px-6">
          <a href="#start" aria-label="Nahad Energie Elektrotechnik – Startseite" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" width="52" height="52" className="size-13" />
            <span className="hidden font-display text-base font-extrabold leading-tight text-primary sm:block">Nahad Energie<br /><span className="font-semibold text-foreground">Elektrotechnik</span></span>
          </a>
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 lg:flex">
            <a href="#leistungen" className="text-sm font-semibold text-foreground hover:text-primary">Leistungen</a>
            <a href="#ueber-uns" className="text-sm font-semibold text-foreground hover:text-primary">Über uns</a>
            <a href="#ablauf" className="text-sm font-semibold text-foreground hover:text-primary">Ablauf</a>
            <a href="#einsatzgebiet" className="text-sm font-semibold text-foreground hover:text-primary">Einsatzgebiet</a>
            <a href="#kontakt" className="text-sm font-semibold text-foreground hover:text-primary">Kontakt</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href={phoneHref} className="flex min-h-11 items-center gap-2 text-sm font-bold text-primary"><Phone className="size-4" aria-hidden="true" />{phoneDisplay}</a>
            <Button asChild><a href="#kontakt">Anfrage senden</a></Button>
          </div>
          <Button variant="ghost" size="icon" aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"} className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile Navigation" className="border-t border-border bg-background px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-6xl gap-1">
              {["Leistungen", "Über uns", "Ablauf", "Einsatzgebiet", "Kontakt"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "-").replace("ü", "ue")}`} onClick={() => setMenuOpen(false)} className="min-h-11 py-2 font-semibold text-foreground">{item}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="inhalt">
        <section id="start" className="overflow-hidden bg-primary text-primary-foreground">
          <div className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[1.05fr_.95fr] md:px-6 md:py-20">
            <div className="z-10">
              <div className="mb-5 flex items-center gap-2 text-sm font-bold text-accent"><MapPin className="size-4" aria-hidden="true" /> Düsseldorf & 25 km Umgebung</div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">Elektrotechnik, auf die Sie sich verlassen können.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">Persönlich betreut durch Elektrotechnikermeister Reza Nahad – für private Haushalte, Hausverwaltungen und Gewerbe.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild><a href="#kontakt">Projekt anfragen <ArrowRight className="size-5" aria-hidden="true" /></a></Button>
                <Button size="lg" variant="outline" asChild><a href={phoneHref}><Phone className="size-5" aria-hidden="true" /> {phoneDisplay}</a></Button>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-primary-foreground/90">
                <li className="flex items-center gap-2"><BadgeCheck className="size-5 text-accent" aria-hidden="true" />Meisterbetrieb</li>
                <li className="flex items-center gap-2"><Check className="size-5 text-accent" aria-hidden="true" />Persönlicher Ansprechpartner</li>
                <li className="flex items-center gap-2"><Check className="size-5 text-accent" aria-hidden="true" />Klare Abstimmung</li>
              </ul>
            </div>
            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="absolute -left-5 top-8 h-full w-full rounded-md border-2 border-accent" aria-hidden="true" />
              <img src={workAsset.url} alt="Elektrotechnikermeister Reza Nahad prüft die elektrische Anlage eines geöffneten Stromaggregats" width="768" height="1024" className="relative aspect-[4/5] w-full rounded-md object-cover object-center" fetchPriority="high" />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-6">
            {[{ icon: House, text: "Privatkunden" }, { icon: Building2, text: "Hausverwaltungen & WEG" }, { icon: Factory, text: "Gewerbekunden" }].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-3 py-5 font-bold text-primary"><Icon className="size-5 text-accent-strong" aria-hidden="true" />{text}</div>
            ))}
          </div>
        </section>

        <section id="leistungen" className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-2xl"><p className="text-sm font-extrabold uppercase text-accent-strong">Leistungen</p><h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Elektroarbeiten aus Meisterhand</h2><p className="mt-4 text-muted-foreground">Von der Planung bis zur sauberen Ausführung erhalten Sie eine Lösung, die zu Ihrem Gebäude und Ihrem Vorhaben passt.</p></div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, text }) => (
                <article key={title} className="bg-card p-6"><div className="mb-5 flex size-11 items-center justify-center rounded-md bg-secondary text-primary"><Icon className="size-6" aria-hidden="true" /></div><h3 className="text-lg font-extrabold text-card-foreground">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section id="ueber-uns" className="bg-secondary py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
            <div className="relative"><img src={officeAsset.url} alt="Elektrotechnikermeister Reza Nahad an seinem Arbeitsplatz im Büro in Düsseldorf" width="1366" height="768" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-md object-cover" /><div className="absolute bottom-4 left-4 rounded-md bg-primary px-4 py-3 text-primary-foreground"><span className="block text-sm font-bold text-accent">Ihr Ansprechpartner</span><strong className="font-display text-lg">Reza Nahad</strong></div></div>
            <div><p className="text-sm font-extrabold uppercase text-accent-strong">Über uns</p><h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Direkt mit dem Meister sprechen</h2><p className="mt-5 text-muted-foreground">Bei Nahad Energie Elektrotechnik sprechen Sie persönlich mit Inhaber und Elektrotechnikermeister Reza Nahad. Ihr Anliegen wird verständlich besprochen, sorgfältig geplant und fachgerecht umgesetzt.</p><ul className="mt-6 space-y-3">{["Ein fester Ansprechpartner", "Klare und verständliche Abstimmung", "Saubere, fachgerechte Ausführung"].map((text) => <li key={text} className="flex items-center gap-3 font-semibold"><ShieldCheck className="size-5 shrink-0 text-success" aria-hidden="true" />{text}</li>)}</ul><Button variant="dark" className="mt-8" asChild><a href="#kontakt">Persönlich anfragen</a></Button></div>
          </div>
        </section>

        <section id="ablauf" className="bg-background py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[.85fr_1.15fr] md:px-6">
            <div><p className="text-sm font-extrabold uppercase text-accent-strong">So läuft es ab</p><h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Einfach zum passenden Ergebnis</h2><p className="mt-4 text-muted-foreground">Kurze Wege und transparente Schritte – von Ihrer Anfrage bis zur Ausführung.</p></div>
            <ol className="grid gap-6 sm:grid-cols-3">{[["01", "Anfrage", "Sie schildern kurz Ihr Anliegen."], ["02", "Abstimmung", "Wir klären Umfang und nächsten Schritt."], ["03", "Ausführung", "Die Arbeiten werden fachgerecht umgesetzt."]].map(([number, title, text]) => <li key={number} className="border-t-2 border-accent pt-5"><span className="font-display text-sm font-extrabold text-accent-strong">{number}</span><h3 className="mt-2 text-xl font-extrabold text-primary">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p></li>)}</ol>
          </div>
        </section>

        <section className="overflow-hidden bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[1fr_.8fr] md:px-6 md:py-20">
            <div><p className="text-sm font-extrabold uppercase text-accent">Baustrom</p><h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Strom dort, wo er gebraucht wird</h2><p className="mt-5 max-w-xl text-primary-foreground/80">Für Baustellen und temporäre Vorhaben stellen wir eine passende elektrische Versorgung bereit.</p><Button className="mt-8" asChild><a href="#kontakt">Baustrom anfragen</a></Button></div>
            <img src={distributionAsset.url} alt="Orangefarbener Baustromverteiler von Nahad Energie Elektrotechnik" width="768" height="922" loading="lazy" decoding="async" className="mx-auto aspect-[4/5] max-h-[480px] w-full rounded-md bg-background/5 object-contain" />
          </div>
        </section>

        <section id="einsatzgebiet" className="bg-secondary py-16 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6"><div><p className="text-sm font-extrabold uppercase text-accent-strong">Einsatzgebiet</p><h2 className="mt-2 text-3xl font-extrabold text-primary">Düsseldorf und 25 km Umgebung</h2><p className="mt-3 text-muted-foreground">Unser Betrieb sitzt am Vogelsanger Weg 38 in Düsseldorf-Mörsenbroich.</p></div><div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground"><MapPin className="size-9" aria-hidden="true" /></div></div>
        </section>

        <section id="kontakt" className="bg-background py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[.8fr_1.2fr] md:px-6">
            <div><p className="text-sm font-extrabold uppercase text-accent-strong">Kontakt</p><h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Was können wir für Sie tun?</h2><p className="mt-5 text-muted-foreground">Schildern Sie kurz Ihr Vorhaben. Wir melden uns zur persönlichen Abstimmung bei Ihnen.</p><div className="mt-8 space-y-4"><a href={phoneHref} className="flex items-center gap-3 font-bold text-primary"><span className="flex size-11 items-center justify-center rounded-md bg-secondary"><Phone className="size-5" aria-hidden="true" /></span>{phoneDisplay}</a><a href={whatsappHref} className="flex items-center gap-3 font-bold text-primary"><span className="flex size-11 items-center justify-center rounded-md bg-secondary"><MessageCircle className="size-5" aria-hidden="true" /></span>Per WhatsApp schreiben</a><p className="flex items-start gap-3 text-sm text-muted-foreground"><MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />Vogelsanger Weg 38<br />40470 Düsseldorf</p></div></div>
            <form onSubmit={submitForm} className="rounded-md border border-border bg-card p-6 md:p-8" aria-label="Anfrageformular">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" required /><Field id="telefon" label="Telefon" type="tel" required /><Field id="email" label="E-Mail" type="email" required />
                <label className="grid gap-2 text-sm font-bold text-foreground" htmlFor="leistung">Leistung *</label><select id="leistung" name="leistung" required className="min-h-11 rounded-md border border-input bg-background px-3 text-foreground sm:-mt-5"><option value="">Bitte auswählen</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select>
                <Field id="ort" label="PLZ / Ort" />
                <label className="grid gap-2 text-sm font-bold text-foreground" htmlFor="rueckruf">Rückruf-Zeitfenster</label><select id="rueckruf" name="rueckruf" className="min-h-11 rounded-md border border-input bg-background px-3 text-foreground sm:-mt-5"><option>Vormittags</option><option>Nachmittags</option><option>Flexibel</option></select>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-bold text-foreground" htmlFor="nachricht">Ihre Nachricht *</label><textarea id="nachricht" name="nachricht" required rows={5} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground" placeholder="Worum geht es?" />
              <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <p className="mt-4 text-xs text-muted-foreground">Mit dem Absenden nutzen wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage.</p>
              <Button size="lg" type="submit" className="mt-5 w-full sm:w-auto">Anfrage vorbereiten <ArrowRight className="size-5" aria-hidden="true" /></Button>
              {submitted && <p role="status" className="mt-4 rounded-md bg-secondary p-3 text-sm font-semibold text-primary">Vielen Dank. Der Online-Versand wird noch eingerichtet. Bitte rufen Sie uns unter <a className="underline" href={phoneHref}>{phoneDisplay}</a> an.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-primary pb-20 text-primary-foreground md:pb-0"><div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6"><div className="flex items-center gap-3"><img src={logoAsset.url} alt="Logo von Nahad Energie Elektrotechnik" width="64" height="64" loading="lazy" decoding="async" className="size-16" /><strong className="font-display">Nahad Energie<br />Elektrotechnik</strong></div><div><h2 className="text-sm font-extrabold text-accent">Kontakt</h2><address className="mt-3 not-italic text-sm text-primary-foreground/75">Vogelsanger Weg 38<br />40470 Düsseldorf<br /><a href={phoneHref}>{phoneDisplay}</a></address></div><div><h2 className="text-sm font-extrabold text-accent">Meisterbetrieb</h2><p className="mt-3 text-sm text-primary-foreground/75">Inhaber Reza Nahad<br />Elektrotechnikermeister</p></div></div><div className="border-t border-primary-foreground/15"><div className="mx-auto max-w-6xl px-4 py-5 text-xs text-primary-foreground/60 md:px-6">© 2026 Nahad Energie Elektrotechnik</div></div></footer>

      <nav aria-label="Schnellkontakt" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background md:hidden"><a href={phoneHref} className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-bold text-primary"><Phone className="size-5" aria-hidden="true" />Anrufen</a><a href={whatsappHref} className="flex min-h-16 flex-col items-center justify-center gap-1 border-x border-border text-xs font-bold text-primary"><MessageCircle className="size-5" aria-hidden="true" />WhatsApp</a><a href="#kontakt" className="flex min-h-16 flex-col items-center justify-center gap-1 bg-accent text-xs font-bold text-accent-foreground"><ArrowRight className="size-5" aria-hidden="true" />Anfrage</a></nav>
    </>
  );
}

function Field({ id, label, type = "text", required = false }: { id: string; label: string; type?: string; required?: boolean }) {
  return <label className="grid gap-2 text-sm font-bold text-foreground" htmlFor={id}>{label}{required ? " *" : ""}<input id={id} name={id} type={type} required={required} className="min-h-11 rounded-md border border-input bg-background px-3 font-normal text-foreground placeholder:text-muted-foreground" /></label>;
}