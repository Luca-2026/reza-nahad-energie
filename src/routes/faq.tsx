import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, Section } from "@/components/site/SiteLayout";
import { jsonLd, seo } from "@/lib/site";

const faqs = [
  ["Wie läuft eine Anfrage ab?", "Sie schildern Ihr Vorhaben per Formular, Telefon oder WhatsApp. Wir melden uns, klären die Details und vereinbaren bei Bedarf einen Vor-Ort-Termin."],
  ["Bekomme ich einen Festpreis?", "Ja. Nach dem Vor-Ort-Termin erhalten Sie ein Angebot mit festem Preis für den besprochenen Umfang."],
  ["Muss eine Wallbox angemeldet werden?", "Wallboxen müssen beim Netzbetreiber angemeldet werden, ab 12 kW ist eine Genehmigung nötig. Die Anmeldung übernehmen wir für Sie."],
  ["Ist der E-Check für Vermieter Pflicht?", "Eine gesetzliche Prüfpflicht gibt es für private Vermieter nicht. Eine regelmäßige Prüfung hilft aber, die Verkehrssicherungspflicht nachzuweisen."],
  ["Wie oft ist eine DGUV V3 Prüfung nötig?", "Das hängt von Gerät und Einsatzort ab. Wir legen die Prüffristen gemeinsam fest und erinnern Sie an den nächsten Termin."],
  ["In welchen Orten sind Sie im Einsatz?", "In ganz Düsseldorf sowie im Umland, etwa Ratingen, Neuss, Meerbusch, Erkrath und Hilden."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...seo("/faq", "FAQ – Häufige Fragen an den Elektriker | Nahad Energie", "Antworten auf häufige Fragen: Kosten, Ablauf, Termine, Notdienst, PV, Wallbox, Prüfungen, Gewährleistung. Vom Elektro-Meisterbetrieb aus Düsseldorf."),
    scripts: [jsonLd({ "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) })],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Häufige Fragen an den Elektriker" />
      <Section>
        <div className="max-w-3xl divide-y divide-border">
          {faqs.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer text-lg font-extrabold text-primary">{q}</summary><p className="mt-3 text-muted-foreground">{a}</p></details>)}
        </div>
        <p className="mt-8">Ihre Frage ist nicht dabei? <Link to="/kontakt" className="font-semibold text-primary underline">Fragen Sie uns direkt</Link>.</p>
      </Section>
      <CtaBand />
    </>
  );
}
