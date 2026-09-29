import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, PriceBox, Section } from "@/components/site/SiteLayout";
import { phoneDisplay, phoneHref, seo } from "@/lib/site";

export const Route = createFileRoute("/notdienst")({
  head: () => seo("/notdienst", "Elektriker Notdienst Düsseldorf – Störungsdienst | Nahad", "Störungsdienst in Düsseldorf: Stromausfall, Sicherung fliegt, FI löst aus, Brandgeruch an der Steckdose. Klare Zuschläge, echter Betrieb, schnell vor Ort."),
  component: Page,
});

const steps = [
  ["Nachbarn prüfen", "Ist das ganze Haus oder die Straße ohne Strom? Dann liegt die Störung meist beim Netzbetreiber."],
  ["FI-Schalter ansehen", "Ist der FI-Schutzschalter ausgelöst, alle Geräte abstecken und den FI wieder einschalten."],
  ["Sicherungen prüfen", "Einzelne Sicherung wieder einschalten. Fliegt sie sofort erneut, nicht mehrfach probieren."],
  ["Gerät finden", "Geräte einzeln wieder einstecken – so finden Sie oft den Auslöser."],
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Notdienst & Störung" title="Elektro-Notdienst in Düsseldorf – wenn der Strom weg ist">Ein echter Düsseldorfer Meisterbetrieb mit Adresse und Gesicht – kein anonymes Portal.</PageHero>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <a href={phoneHref} className="flex flex-col items-center justify-center gap-2 rounded-md bg-accent p-8 text-center text-accent-foreground"><Phone className="size-8" aria-hidden="true" /><span className="font-display text-3xl font-extrabold">{phoneDisplay}</span><span className="font-semibold">Jetzt anrufen – wir klären am Telefon, was zu tun ist</span></a>
          <PriceBox />
        </div>
        <div className="mt-10 rounded-md border-2 border-destructive bg-card p-6">
          <h2 className="text-xl font-extrabold text-destructive">Brandgeruch, Funken oder Rauch?</h2>
          <p className="mt-2">Sicherung sofort ausschalten, betroffene Räume verlassen und bei Brand die Feuerwehr unter <a href="tel:112" className="font-bold underline">112</a> rufen.</p>
        </div>
        <h2 className="mt-12 text-2xl font-extrabold text-primary">Stromausfall in der Wohnung – was tun?</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-4">{steps.map(([t, d], i) => <li key={t} className="border-t-2 border-accent pt-4"><span className="font-display text-sm font-extrabold text-accent-strong">0{i + 1}</span><h3 className="mt-1 font-extrabold text-primary">{t}</h3><p className="mt-1 text-sm text-muted-foreground">{d}</p></li>)}</ol>
        <h2 className="mt-12 text-2xl font-extrabold text-primary">Typische Störungen</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">{["Sicherung fliegt immer raus", "FI-Schalter löst aus", "Steckdose funkt oder ist warm", "Halbe Wohnung ohne Strom"].map((t) => <li key={t} className="rounded-md bg-secondary p-4 font-semibold">{t}</li>)}</ul>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild><a href={phoneHref}><Phone className="size-5" aria-hidden="true" />Jetzt anrufen: {phoneDisplay}</a></Button><Button size="lg" variant="outline" asChild><Link to="/leistungen/$slug" params={{ slug: "zaehlerschrank-sicherungskasten" }}>Sicherungskasten erneuern</Link></Button></div>
      </Section>
      <CtaBand />
    </>
  );
}
