import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, CtaBand, FaqList, PageHero, Section } from "@/components/site/SiteLayout";
import { email, faqSchema, phoneDisplay, phoneHref, seo, type QA } from "@/lib/site";

const faqs: QA[] = [
  ["Muss ich Erfahrung mit Photovoltaik haben?", "Nein. Elektrotechnik-Grundlagen und Sorgfalt sind entscheidend, PV und Wallbox lernen Sie bei uns mit Herstellerschulungen."],
];

export const Route = createFileRoute("/karriere")({
  head: () => ({
    ...seo("/karriere", "Karriere – Elektroniker (m/w/d) in Düsseldorf | Nahad", "Arbeiten im Elektro-Meisterbetrieb in Düsseldorf: Elektroniker für Energie- und Gebäudetechnik, Ausbildung, Quereinstieg. Kurze Wege, keine Montagereisen."),
    scripts: [faqSchema(faqs)],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Karriere" }]} />
      <PageHero eyebrow="Karriere" title="Karriere bei Nahad Energie – Elektroniker (m/w/d) in Düsseldorf gesucht">Wir sind ein kleiner Meisterbetrieb mit kurzen Wegen: Der Chef steht selbst auf der Baustelle, Entscheidungen fallen am selben Tag, und niemand muss um 5 Uhr nach Köln fahren. Wenn Sie sauber arbeiten, mitdenken und Lust auf Energietechnik haben, sollten wir uns kennenlernen.</PageHero>
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Was wir bieten</h2>
            <ul className="mt-6 space-y-3">{[
              "Unbefristete Anstellung, Einsatzgebiet Düsseldorf und Umkreis – keine Montagereisen",
              "Moderne Ausrüstung, eigenes Werkzeug",
              "Weiterbildung: Wechselrichter- und Wallbox-Schulungen, KNX, Meistervorbereitung auf Wunsch",
              "Zukunftsthemen jeden Tag: PV, Speicher, Wallbox, Wärmepumpe, Smart Home",
            ].map((t) => <li key={t} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />{t}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Wen wir suchen</h2>
            <ul className="mt-6 space-y-4">
              <li className="rounded-md border border-border bg-card p-5"><h3 className="font-extrabold text-primary">Elektroniker/in für Energie- und Gebäudetechnik (m/w/d)</h3><p className="mt-2 text-sm text-muted-foreground">Aufgaben: Installation in Wohn- und Gewerbegebäuden, Zählerschränke, PV/Wallbox-Installation, Prüfungen. Voraussetzungen: abgeschlossene Ausbildung, Führerschein B, saubere Arbeitsweise, Deutsch für Kundengespräche.</p></li>
              <li className="rounded-md border border-border bg-card p-5"><h3 className="font-extrabold text-primary">Auszubildende/r Elektroniker/in für Energie- und Gebäudetechnik (m/w/d)</h3><p className="mt-2 text-sm text-muted-foreground">Sprechen Sie uns zum Ausbildungsstart an.</p></li>
            </ul>
          </div>
        </div>
      </Section>
      <Section muted>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">So bewerben Sie sich</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">Kurz und unkompliziert: Lebenslauf und ein paar Sätze, warum Sie zu uns wollen, an {email} – oder rufen Sie an: {phoneDisplay}. Anschreiben brauchen wir nicht. Wir melden uns innerhalb einer Woche.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild><a href={`mailto:${email}`}><Mail className="size-5" aria-hidden="true" />{email}</a></Button><Button size="lg" variant="outline" asChild><a href={phoneHref}><Phone className="size-5" aria-hidden="true" />{phoneDisplay}</a></Button></div>
        <p className="mt-4 text-sm text-muted-foreground">Bitte senden Sie keine sensiblen Dokumente (Ausweiskopien, Gesundheitsdaten) per E-Mail. Informationen zum Umgang mit Bewerberdaten finden Sie in unserer <Link to="/datenschutz" className="underline">Datenschutzerklärung</Link>.</p>
      </Section>
      <Section>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Häufige Fragen</h2>
        <FaqList faqs={faqs} />
      </Section>
      <CtaBand title="Fragen zur Stelle?" text={`Rufen Sie Reza Nahad direkt an: ${phoneDisplay}`} />
    </>
  );
}
