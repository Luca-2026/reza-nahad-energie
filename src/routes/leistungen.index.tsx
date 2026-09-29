import { createFileRoute, Link } from "@tanstack/react-router";
import { Siren } from "lucide-react";
import { Breadcrumbs, CtaBand, FaqList, PageHero, PriceBox, Section, StepList } from "@/components/site/SiteLayout";
import { serviceIcons } from "@/components/site/serviceIcons";
import { faqSchema, generalSteps, seo, services, type QA, type Service } from "@/lib/site";

const faqs: QA[] = [
  ["Machen Sie auch kleine Aufträge?", "Ja. Steckdose, Lampe, Herdanschluss, FI nachrüsten – solche Aufträge nehmen wir gern an und bündeln sie in Ihrem Stadtteil, damit die Anfahrt günstig bleibt."],
  ["Arbeiten Sie mit anderen Gewerken zusammen?", "Heizungsbauer binden wir bei Wärmepumpen ein. Elektrische Arbeiten machen wir immer selbst."],
  ["Kann ich Material selbst stellen?", "Grundsätzlich ja, wenn es normgerecht ist. Für beigestelltes Material übernehmen wir keine Gewährleistung; das steht auch so in unseren AGB."],
];

export const Route = createFileRoute("/leistungen/")({
  head: () => ({
    ...seo("/leistungen", "Leistungen – Elektrotechnik in Düsseldorf | Nahad Energie", "Alle Leistungen des Elektro-Meisterbetriebs Nahad Energie: Elektroinstallation, Zählerschrank, PV, Wallbox, Wärmepumpe, Smart Home, E-CHECK, DGUV V3, Gewerbe."),
    scripts: [faqSchema(faqs)],
  }),
  component: Page,
});

function Cards({ items, emergency = false }: { items: Service[]; emergency?: boolean }) {
  return (
    <div className="mt-8 grid border-y border-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => { const Icon = serviceIcons[s.icon]; return (
        <Link key={s.slug} to="/leistungen/$slug" params={{ slug: s.slug }} className="border-b border-r border-border bg-card p-5 transition-colors hover:bg-secondary lg:p-6">
          <Icon className="size-6 text-accent-strong" aria-hidden="true" />
          <h3 className="mt-3 text-lg font-extrabold text-primary">{s.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
        </Link>
      ); })}
      {emergency && (
        <Link to="/notdienst" className="border-b border-r border-t-2 border-border border-t-accent bg-card p-5 text-primary transition-colors hover:bg-secondary lg:p-6">
          <Siren className="size-6 text-accent-strong" aria-hidden="true" />
          <h3 className="mt-3 text-lg font-extrabold">Notdienst</h3>
          <p className="mt-2 text-sm text-muted-foreground">Stromausfall, Sicherung fliegt, FI löst aus – Störungsdienst mit offenen Zuschlägen.</p>
        </Link>
      )}
    </div>
  );
}

function Page() {
  const by = (g: Service["group"]) => services.filter((s) => s.group === g);
  return (
    <>
      <Breadcrumbs items={[{ label: "Leistungen" }]} />
      <PageHero eyebrow="Leistungen" title="Unsere Leistungen – Elektrotechnik für Haus, Wohnung und Gewerbe">Wir sind ein Elektrotechnik-Meisterbetrieb mit zwei Standbeinen: der klassischen Elektroinstallation, die jedes Gebäude braucht, und der Energietechnik, die gerade in jedes Gebäude kommt. Beides gehört zusammen – der Zählerschrank ist der Punkt, an dem sich entscheidet, ob PV, Wallbox und Wärmepumpe später problemlos laufen. Unten finden Sie alle Leistungen mit Kurzbeschreibung; jede Seite erklärt Ablauf, Kosten und was Sie rechtlich und technisch wissen sollten.</PageHero>
      <Section>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Installation und Sicherheit</h2>
        <Cards items={by("installation")} emergency />
      </Section>
      <Section muted>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Energie: erzeugen, speichern, laden, heizen</h2>
        <Cards items={by("energie")} />
        <div className="mt-6 rounded-md border-l-4 border-accent bg-card p-5 text-sm"><strong className="text-primary">Warum aus einer Hand?</strong> Jede dieser Anlagen braucht Platz und Schutz im Zählerschrank, eine Anmeldung beim Netzbetreiber und – ab 4,2 kW – eine Steuerbarkeit nach § 14a EnWG. Wer das zusammen plant, spart einen zweiten Zählerschrank-Umbau und bekommt die Netzentgelt-Reduzierung von Anfang an.</div>
      </Section>
      <Section>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Komfort, Kommunikation und Gewerbe</h2>
        <Cards items={by("komfort")} />
      </Section>
      <Section muted>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div><h2 className="text-2xl font-extrabold text-primary md:text-3xl">Preise</h2><p className="mt-4 text-muted-foreground">Stundensatz, Anfahrt und Zuschläge stehen offen. Verbindlich ist immer das schriftliche Angebot.</p></div>
          <PriceBox />
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">So läuft ein Auftrag bei uns ab</h2>
        <StepList steps={generalSteps} />
      </Section>
      <Section muted>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Häufige Fragen</h2>
        <FaqList faqs={faqs} />
      </Section>
      <CtaBand />
    </>
  );
}
