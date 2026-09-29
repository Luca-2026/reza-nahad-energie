import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, CtaBand, FaqList, PageHero, Section } from "@/components/site/SiteLayout";
import { faqAppointment, faqCostHour, faqEmergencyCost, faqFi, faqFuseBox, faqGrid, faqPv, faqSchema, faqWarranty, seo, standDate, type QA } from "@/lib/site";

const groups: { h: string; faqs: QA[] }[] = [
  { h: "Kosten & Ablauf", faqs: [
    faqCostHour,
    ["Wie wird abgerechnet?", "Nach Aufwand im 15-Minuten-Takt plus Anfahrt und Material – oder zum Festpreis bei Projekten. Sie entscheiden vor dem Auftrag, was gilt."],
    ["Ist der Kostenvoranschlag kostenlos?", "Ja, sofern nicht vorher ausdrücklich etwas anderes vereinbart wurde (z. B. bei umfangreicher Planung). Unsere Kostenvoranschläge sind unverbindlich, unsere Angebote Festpreise."],
    faqAppointment,
    ["Muss ich beim Termin zu Hause sein?", "Zu Beginn und zur Abnahme ja; dazwischen reicht eine Person mit Schlüssel und Entscheidungsbefugnis."],
  ] },
  { h: "Recht & Sicherheit", faqs: [
    ["Habe ich ein Widerrufsrecht?", "Wenn wir den Vertrag bei Ihnen zu Hause schließen, haben Sie als Verbraucher 14 Tage Widerrufsrecht. Sie erhalten die Belehrung mit dem Angebot. Dringende Reparaturen, die Sie ausdrücklich anfordern, sind davon ausgenommen."],
    ["Gibt es Gewährleistung?", faqWarranty[1]],
    faqFuseBox,
    faqFi,
  ] },
  { h: "Energie", faqs: [
    ["Übernehmen Sie die Anmeldung beim Netzbetreiber?", faqGrid[1]],
    ["Was bedeutet § 14a EnWG für mich?", "Wallbox, Wärmepumpe und Speicher über 4,2 kW müssen seit 2024 vom Netzbetreiber im Netzengpass gedimmt werden können. Dafür zahlen Sie weniger Netzentgelt (Modul 1: 110–190 €/Jahr, Modul 2: 60 % Rabatt auf den Arbeitspreis). Wir melden die Anlage an und richten die Steuerbarkeit ein."],
    ["Gibt es aktuell Förderung in Düsseldorf?", `Stand ${standDate}: Das Stadtprogramm ist ausgesetzt, NRW-Zuschüsse für Wallbox/Speicher beendet, PV bleibt mehrwertsteuerfrei, für Mehrfamilienhäuser gibt es das Bundesprogramm „Laden im Mehrparteienhaus“ (Anträge bis 10.11.2026). Wir informieren im Gespräch über den aktuellen Stand.`],
    ["Lohnt sich Photovoltaik noch?", faqPv[1]],
  ] },
  { h: "Notdienst", faqs: [
    ["Was mache ich bei Stromausfall?", "Prüfen Sie, ob Nachbarn auch betroffen sind – dann liegt die Störung im Netz (Netzgesellschaft Düsseldorf: 0211 821 2626). Ist ein FI oder Sicherungsautomat ausgelöst, Geräte abstecken und einmal wieder einschalten. Löst er erneut aus oder riecht es verschmort, Stromkreis aus lassen und uns anrufen. Bei Brand oder Rauch sofort 112."],
    faqEmergencyCost,
  ] },
];

const all = groups.flatMap((g) => g.faqs);

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...seo("/faq", "FAQ – Häufige Fragen an den Elektriker | Nahad Energie", "Antworten auf häufige Fragen: Kosten, Ablauf, Widerruf, Gewährleistung, § 14a EnWG, Förderung, PV und Notdienst – vom Elektro-Meisterbetrieb aus Düsseldorf."),
    scripts: [faqSchema(all)],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Häufige Fragen" }]} />
      <PageHero eyebrow="FAQ" title="Häufige Fragen an den Elektriker">Antworten auf die Fragen, die uns am Telefon am häufigsten gestellt werden. Fehlt Ihre Frage? Rufen Sie an oder schreiben Sie uns.</PageHero>
      {groups.map((g, i) => (
        <Section key={g.h} muted={i % 2 === 1}>
          <h2 className="text-2xl font-extrabold text-primary md:text-3xl">{g.h}</h2>
          <FaqList faqs={g.faqs} />
        </Section>
      ))}
      <Section>
        <p>Ihre Frage ist nicht dabei? <Link to="/kontakt" className="font-semibold text-primary underline">Fragen Sie uns direkt</Link>.</p>
      </Section>
      <CtaBand />
    </>
  );
}
