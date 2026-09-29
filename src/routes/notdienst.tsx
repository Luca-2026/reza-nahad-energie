import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Phone, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, CtaBand, FaqList, Section, StepList } from "@/components/site/SiteLayout";
import { faqEmergencyCost, faqSchema, getService, phoneDisplay, phoneHref, prices, seo, type QA } from "@/lib/site";

const faqs: QA[] = [
  faqEmergencyCost,
  ["Der FI löst aus, wenn ich die Spülmaschine einschalte – Notfall?", "Nein, aber ein Defekt am Gerät oder an der Leitung. Gerät abstecken, FI einschalten, Termin vereinbaren."],
  ["Wer zahlt in der Mietwohnung?", "Für die Elektroinstallation ist der Vermieter zuständig; informieren Sie ihn vor dem Einsatz, wenn möglich. Bei Gefahr handeln Sie zuerst und informieren danach."],
];

export const Route = createFileRoute("/notdienst")({
  head: () => ({
    ...seo("/notdienst", "Elektriker Notdienst Düsseldorf – Störungsdienst | Nahad", "Störungsdienst in Düsseldorf: Stromausfall, Sicherung fliegt, FI löst aus, Brandgeruch an der Steckdose. Zuschläge offen genannt, echter Meisterbetrieb."),
    scripts: [faqSchema(faqs)],
  }),
  component: Page,
});

const selfCheck: [string, string][] = [
  ["Sind Nachbarn auch betroffen?", "Dann liegt die Störung im Netz – Störungsnummer Strom der Netzgesellschaft Düsseldorf: 0211 821 2626."],
  ["FI-Schutzschalter ausgelöst?", "Alle Geräte des Stromkreises abstecken, FI wieder einschalten. Löst er sofort wieder aus, bleibt er aus – rufen Sie an."],
  ["Sicherungsautomat raus?", "Einmal einschalten. Fliegt er erneut, Gerät suchen (Kaffeemaschine, Wasserkocher, Heizlüfter) und abstecken."],
  ["Brandgeruch, Verfärbung, Knacken?", "Stromkreis ausschalten lassen und nicht weiter benutzen."],
];

const flow: [string, string][] = [
  ["Anruf", "Wir fragen: Was, seit wann, was wurde probiert? Oft lässt sich die Ursache eingrenzen."],
  ["Zusage mit Zeitfenster", "Wir sagen Ihnen am Telefon, wann wir bei Ihnen sein können."],
  ["Vor Ort", "Fehler suchen, Anlage sichern, Sie informieren, Kosten bestätigen."],
  ["Reparatur oder Provisorium", "Was sofort geht, machen wir sofort; alles Weitere mit Angebot."],
];

function Page() {
  const related = ["zaehlerschrank-sicherungskasten", "e-check", "elektroinstallation"].map(getService).filter((x) => !!x);
  return (
    <>
      <Breadcrumbs items={[{ label: "Notdienst" }]} />
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <p className="text-sm font-extrabold uppercase text-accent">Notdienst & Störung</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">Elektro-Notdienst in Düsseldorf – wenn der Strom weg ist</h1>
          <Button size="lg" className="mt-8 h-auto py-4 text-xl" asChild><a href={phoneHref}><Phone className="size-6" aria-hidden="true" />{phoneDisplay}</a></Button>
          <p className="mt-3 text-sm font-semibold text-primary-foreground/80">Echter Düsseldorfer Meisterbetrieb, Vogelsanger Weg 38</p>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/80">Sicherung fliegt immer wieder raus, der FI lässt sich nicht einschalten, eine Steckdose riecht verschmort oder die halbe Wohnung ist dunkel? Rufen Sie an – wir sagen Ihnen am Telefon, was Sie selbst prüfen können, und kommen, wenn es nötig ist. Ohne Callcenter, ohne „ab“-Preise: Sie sprechen mit unserem Betrieb, und die Zuschläge stehen hier.</p>
        </div>
      </section>

      <Section>
        <div className="rounded-md border-2 border-destructive bg-card p-6">
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-destructive"><TriangleAlert className="size-6" aria-hidden="true" />Gefahr? Erst 112.</h2>
          <p className="mt-2">Bei Brand, Rauchentwicklung oder Personen unter Strom: sofort <a href="tel:112" className="font-bold underline">112</a> anrufen, Hauptsicherung ausschalten, wenn gefahrlos möglich. Danach rufen Sie uns.</p>
        </div>
        <h2 className="mt-12 text-2xl font-extrabold text-primary md:text-3xl">Das können Sie selbst prüfen (2 Minuten)</h2>
        <StepList steps={selfCheck} />
        <p className="mt-4 text-sm text-muted-foreground">Netz-Störungsnummer: <a href="tel:+492118212626" className="font-semibold text-primary underline">0211 821 2626</a> (Netzgesellschaft Düsseldorf, Stand 09/2026).</p>
      </Section>

      <Section muted>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Was wir im Störungsdienst machen</h2>
            <ul className="mt-6 space-y-3">{["Fehlersuche bei Stromausfall, auslösendem FI oder Sicherungsautomat", "Provisorische Absicherung defekter Leitungen, Steckdosen, Verteilungen", "Austausch defekter Schutzschalter, Steckdosen, Schalter, Klemmstellen", "Wiederinbetriebnahme nach Wasserschaden, wenn gefahrlos möglich", "Dokumentation des Schadens für Ihre Versicherung", "Terminvorschlag für die dauerhafte Reparatur, falls nötig"].map((t) => <li key={t} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />{t}</li>)}</ul>
          </div>
          <div className="rounded-md border-2 border-accent bg-card p-6">
            <h2 className="font-display text-xl font-extrabold text-primary">Kosten im Störungsdienst (inkl. MwSt., vor dem Einsatz genannt)</h2>
            <dl className="mt-4 divide-y divide-border tabular-nums">
              <div className="flex justify-between gap-4 py-2"><dt>Stundensatz (innerhalb der Bürozeiten)</dt><dd className="font-extrabold text-primary">{prices.hourly}</dd></div>
              <div className="flex justify-between gap-4 py-2"><dt>Anfahrt Düsseldorf</dt><dd className="font-extrabold text-primary">{prices.travel}</dd></div>
              <div className="flex justify-between gap-4 py-2"><dt>Störungsdienst außerhalb der Bürozeiten</dt><dd className="font-extrabold text-primary">{prices.emergency} Zuschlag</dd></div>
              <div className="flex justify-between gap-4 py-2"><dt>Material</dt><dd className="text-right font-semibold text-primary">nach Aufwand, vor dem Einbau genannt</dd></div>
            </dl>
            <p className="mt-3 text-sm text-muted-foreground">Wir nennen Ihnen am Telefon die voraussichtlichen Kosten. Es gibt keine Pauschale, die Sie erst nach dem Einsatz erfahren.</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">So läuft ein Einsatz ab</h2>
        <StepList steps={flow} />
        <h2 className="mt-12 text-2xl font-extrabold text-primary md:text-3xl">Das sollten Sie wissen</h2>
        <dl className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            ["Wir sind ein echter Betrieb in Düsseldorf-Mörsenbroich", "Kein Vermittlungsportal mit Ortsvorwahl und wechselnden Subunternehmern. Wer kommt, heißt Nahad oder arbeitet bei uns."],
            ["Dringende Reparaturen", "Auf Ihren ausdrücklichen Wunsch unterliegen sie nicht dem Widerrufsrecht (§ 312g Abs. 2 Nr. 11 BGB); für darüber hinausgehende Arbeiten (z. B. eine neue Verteilung) erhalten Sie ein Angebot mit Belehrung."],
            ["Versicherung", "Bei Überspannungs- oder Wasserschäden dokumentieren wir mit Fotos und Protokoll."],
          ].map(([t, d]) => <div key={t} className="rounded-md border border-border bg-card p-5"><dt className="font-extrabold text-primary">{t}</dt><dd className="mt-2 text-sm text-muted-foreground">{d}</dd></div>)}
        </dl>
      </Section>

      <Section muted>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Häufige Fragen</h2>
        <FaqList faqs={faqs} />
        <h2 className="mt-12 text-2xl font-extrabold text-primary">Verwandte Leistungen</h2>
        <ul className="mt-4 flex flex-wrap gap-3">{related.map((r) => <li key={r.slug}><Link to="/leistungen/$slug" params={{ slug: r.slug }} className="inline-block rounded-md border border-border bg-card px-4 py-2 font-semibold text-primary hover:border-primary">{r.name}</Link></li>)}</ul>
      </Section>
      <CtaBand title="Störung? Rufen Sie direkt an." text="Bei Störungen ist das Telefon der schnellste Weg. Für alles andere schreiben Sie uns gern." />
    </>
  );
}
