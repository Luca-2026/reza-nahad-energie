import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, Check, Factory, House, MapPin, Phone, ShieldCheck, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, Section } from "@/components/site/SiteLayout";
import { phoneDisplay, phoneHref, seo, services } from "@/lib/site";
import officeAsset from "@/assets/reza-nahad-buero.jpeg.asset.json";
import workAsset from "@/assets/reza-nahad-elektroarbeit.jpeg.asset.json";
import distributionAsset from "@/assets/nahad-baustromverteiler.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => seo("/", "Elektriker Düsseldorf – Meisterbetrieb Nahad Energie", "Elektrotechnik-Meisterbetrieb in Düsseldorf: Elektroinstallation, Photovoltaik, Wallbox, Prüfungen. Faire Preise, feste Termine – jetzt anfragen."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[1.05fr_.95fr] md:px-6 md:py-20">
          <div>
            <div className="mb-5 flex items-center gap-2 text-sm font-bold text-accent"><MapPin className="size-4" aria-hidden="true" /> Düsseldorf-Mörsenbroich & Umgebung</div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl">Elektriker in Düsseldorf – Ihr Meisterbetrieb für Elektroinstallation, Photovoltaik und Wallbox</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">Persönlich betreut durch Elektrotechnikermeister Reza Nahad – für private Haushalte, Hausverwaltungen und Gewerbe.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild><Link to="/kontakt">Projekt anfragen <ArrowRight className="size-5" aria-hidden="true" /></Link></Button>
              <Button size="lg" variant="outline" asChild><a href={phoneHref}><Phone className="size-5" aria-hidden="true" /> {phoneDisplay}</a></Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-primary-foreground/90">
              <li className="flex items-center gap-2"><BadgeCheck className="size-5 text-accent" aria-hidden="true" />Meisterbetrieb</li>
              <li className="flex items-center gap-2"><Check className="size-5 text-accent" aria-hidden="true" />Persönlicher Ansprechpartner</li>
              <li className="flex items-center gap-2"><Check className="size-5 text-accent" aria-hidden="true" />Festpreis nach Vor-Ort-Termin</li>
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="absolute -left-5 top-8 h-full w-full rounded-md border-2 border-accent" aria-hidden="true" />
            <img src={workAsset.url} alt="Elektriker Reza Nahad prüft in Düsseldorf die Elektrik eines geöffneten Stromaggregats" width="768" height="1024" className="relative aspect-[4/5] w-full rounded-md object-cover" fetchPriority="high" />
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

      <Section>
        <p className="text-sm font-extrabold uppercase text-accent-strong">Leistungen</p>
        <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Elektrotechnik aus einer Hand</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} to="/leistungen/$slug" params={{ slug: s.slug }} className="group bg-card p-6 hover:bg-secondary">
              <h3 className="text-lg font-extrabold text-card-foreground group-hover:text-primary">{s.name} in Düsseldorf</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">Mehr erfahren <ArrowRight className="size-4" aria-hidden="true" /></span>
            </Link>
          ))}
          <Link to="/notdienst" className="group bg-accent p-6 text-accent-foreground">
            <Siren className="size-6" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-extrabold">Elektro-Notdienst Düsseldorf</h3>
            <p className="mt-2 text-sm">Stromausfall, Sicherung fliegt, FI löst aus – was jetzt zu tun ist.</p>
          </Link>
        </div>
      </Section>

      <Section muted>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={officeAsset.url} alt="Elektromeister Reza Nahad am Schreibtisch im Büro von Nahad Energie in Düsseldorf" width="1366" height="768" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" />
          <div>
            <p className="text-sm font-extrabold uppercase text-accent-strong">Über uns</p>
            <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Elektromeister in Düsseldorf – direkt erreichbar</h2>
            <p className="mt-5 text-muted-foreground">Bei Nahad Energie sprechen Sie persönlich mit Inhaber und Elektrotechnikermeister Reza Nahad. Ihr Anliegen wird verständlich besprochen, sorgfältig geplant und fachgerecht umgesetzt.</p>
            <ul className="mt-6 space-y-3">{["Ein fester Ansprechpartner", "Klare und verständliche Abstimmung", "Saubere, fachgerechte Ausführung"].map((t) => <li key={t} className="flex items-center gap-3 font-semibold"><ShieldCheck className="size-5 shrink-0 text-success" aria-hidden="true" />{t}</li>)}</ul>
            <Button variant="dark" className="mt-8" asChild><Link to="/ueber-uns">Mehr über Reza Nahad</Link></Button>
          </div>
        </div>
      </Section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[1fr_.8fr] md:px-6 md:py-20">
          <div><p className="text-sm font-extrabold uppercase text-accent">Baustrom</p><h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Strom dort, wo er gebraucht wird</h2><p className="mt-5 max-w-xl text-primary-foreground/80">Für Baustellen und temporäre Vorhaben stellen wir eine passende elektrische Versorgung bereit.</p><Button className="mt-8" asChild><Link to="/leistungen/$slug" params={{ slug: "gewerbe-hausverwaltung" }}>Elektrotechnik für Gewerbe</Link></Button></div>
          <img src={distributionAsset.url} alt="Orangefarbener Baustromverteiler von Nahad Energie für eine Baustelle in Düsseldorf" width="768" height="922" loading="lazy" className="mx-auto aspect-[4/5] max-h-[480px] w-full rounded-md object-contain" />
        </div>
      </section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div><p className="text-sm font-extrabold uppercase text-accent-strong">Einsatzgebiet</p><h2 className="mt-2 text-3xl font-extrabold text-primary">Elektriker für ganz Düsseldorf und das Umland</h2><p className="mt-3 text-muted-foreground">Unser Betrieb sitzt am Vogelsanger Weg 38 in Düsseldorf-Mörsenbroich – kurze Wege nach Rath, Derendorf, Unterrath, Gerresheim und Flingern.</p></div>
          <Button variant="outline" asChild><Link to="/einsatzgebiet">Unser Einsatzgebiet</Link></Button>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
