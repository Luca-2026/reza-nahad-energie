import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Breadcrumbs, CtaBand, FaqList, PageHero, Section } from "@/components/site/SiteLayout";
import { faqSchema, prices, seo, type QA } from "@/lib/site";

const faqs: QA[] = [
  ["Kommen Sie auch für kleine Aufträge nach Benrath oder Kaiserswerth?", "Ja. Wir fassen Kleinaufträge nach Stadtgebieten zusammen und nennen Ihnen einen Termin, an dem wir ohnehin in Ihrer Nähe sind."],
  ["Was kostet die Anfahrt ins Umland?", "Die Anfahrt ins Umland richtet sich nach der Entfernung und wird vorher genannt bzw. im Angebot ausgewiesen; bei Projekten mit Festpreis ist die Anfahrt enthalten."],
];

export const Route = createFileRoute("/einsatzgebiet")({
  head: () => ({
    ...seo("/einsatzgebiet", "Einsatzgebiet – Düsseldorf & Umgebung | Nahad Energie", "Unser Einsatzgebiet: alle Düsseldorfer Stadtteile von Mörsenbroich bis Benrath sowie Ratingen, Neuss, Meerbusch, Erkrath, Hilden. Anfahrt vorher genannt."),
    scripts: [faqSchema(faqs)],
  }),
  component: Page,
});

const regions: { h: string; text: string; places: string[] }[] = [
  { h: "Rund um unseren Standort", text: "Hier sind wir in wenigen Minuten. Viele Häuser aus den 1950er- bis 1970er-Jahren mit Elektrik aus der Bauzeit: Zählerschrank-Erneuerung, FI-Nachrüstung und Wallbox sind hier unsere häufigsten Aufträge.", places: ["Mörsenbroich", "Rath", "Unterrath", "Derendorf", "Düsseltal", "Grafenberg", "Pempelfort", "Golzheim", "Lichtenbroich", "Stockum", "Lohausen"] },
  { h: "Kaiserswerth, Wittlaer, Angermund, Kalkum", text: "Frei stehende Häuser mit Dachflächen, Garagen und Gärten: Photovoltaik mit Speicher, Wallbox und Wärmepumpen-Anschluss aus einer Hand, Außenbeleuchtung und Smart Home. Anfahrt vom Vogelsanger Weg 15–20 Minuten.", places: ["Kaiserswerth", "Wittlaer", "Angermund", "Kalkum"] },
  { h: "Oberkassel, Niederkassel, Heerdt, Lörick", text: "Gründerzeit-Altbauten und moderne Wohnungen – Elektrosanierung in bewohnten Wohnungen, Türsprechanlagen, Netzwerk, Prüfungen bei Eigentümerwechsel.", places: ["Oberkassel", "Niederkassel", "Heerdt", "Lörick"] },
  { h: "Flingern, Gerresheim, Bilk, Friedrichstadt, Unterbilk, Wersten, Eller, Benrath, Urdenbach", text: "Mehrfamilienhäuser und Hausverwaltungen, Ladenlokale und Büros: Treppenhaus-LED, DGUV-V3-Prüfungen, Ladeinfrastruktur in Tiefgaragen, Störungsdienst.", places: ["Flingern", "Gerresheim", "Bilk", "Friedrichstadt", "Unterbilk", "Wersten", "Eller", "Benrath", "Urdenbach"] },
  { h: "Ratingen, Neuss, Meerbusch, Erkrath, Hilden, Kaarst, Langenfeld, Mettmann, Haan, Monheim", text: "Für Projekte ab einem halben Arbeitstag – PV, Wallbox, Zählerschrank, Sanierung – kommen wir gern ins Umland. Kleinaufträge bündeln wir nach Region, damit die Anfahrt bezahlbar bleibt.", places: ["Ratingen", "Neuss", "Meerbusch", "Erkrath", "Hilden", "Kaarst", "Langenfeld", "Mettmann", "Haan", "Monheim"] },
];

function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Einsatzgebiet" }]} />
      <PageHero eyebrow="Einsatzgebiet" title="Einsatzgebiet – Elektriker für ganz Düsseldorf und das Umland">Unser Betrieb sitzt in Düsseldorf-Mörsenbroich, direkt am Mörsenbroicher Ei. Von hier aus erreichen wir jeden Düsseldorfer Stadtteil in 10 bis 25 Minuten und die Nachbarstädte in 20 bis 35 Minuten. Die Anfahrt berechnen wir pauschal: {prices.travel} in Düsseldorf, im Umland nach Entfernung – vorher genannt, nie überraschend.</PageHero>
      {regions.map((r, i) => (
        <Section key={r.h} muted={i % 2 === 1}>
          <h2 className="flex items-start gap-2 text-2xl font-extrabold text-primary"><MapPin className="mt-1 size-5 shrink-0 text-accent-strong" aria-hidden="true" />{r.h}</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">{r.text}</p>
          <ul className="mt-4 flex flex-wrap gap-2">{r.places.map((p) => <li key={p} className={`rounded-md px-3 py-1.5 text-sm font-semibold ${i % 2 === 1 ? "bg-card" : "bg-secondary"}`}>{p}</li>)}</ul>
        </Section>
      ))}
      <Section>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Häufige Fragen</h2>
        <FaqList faqs={faqs} />
      </Section>
      <CtaBand />
    </>
  );
}
