import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { Breadcrumbs, CtaBand, PageHero, Section } from "@/components/site/SiteLayout";
import { jsonLd, mapsHref, seo } from "@/lib/site";
import officeAsset from "@/assets/reza-nahad-buero.jpeg.asset.json";
import workAsset from "@/assets/reza-nahad-elektroarbeit.jpeg.asset.json";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    ...seo("/ueber-uns", "Über uns – Elektrotechnikermeister Reza Nahad | Nahad", "Lernen Sie Reza Nahad kennen: Elektrotechnikermeister in Düsseldorf-Mörsenbroich, Meisterbetrieb in der Handwerksrolle, Innungsbetrieb, eingetragen bei der Netzgesellschaft Düsseldorf."),
    scripts: [jsonLd({ "@type": "Person", name: "Reza Nahad", jobTitle: "Elektrotechnikermeister", worksFor: { "@type": "Electrician", name: "Nahad Energie Elektrotechnik" } })],
  }),
  component: Page,
});

const principles: [string, string][] = [
  ["Erst verstehen, dann anbieten.", "Wir fragen nach Ihrem Alltag und Ihren Plänen für die nächsten Jahre, bevor wir Material aufschreiben."],
  ["Preise vor dem Auftrag.", "Stundensatz und Anfahrt stehen öffentlich, Projekte bekommen einen Festpreis. Nachträge nur nach schriftlicher Freigabe."],
  ["Prüfen und dokumentieren.", "Jede Anlage wird gemessen, jedes Protokoll übergeben, jede Verteilung beschriftet."],
  ["Aufräumen gehört dazu.", "Abdeckungen, Staubschutz, besenrein – auch am dritten Tag einer Sanierung."],
];

function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Über uns" }]} />
      <PageHero eyebrow="Über uns" title="Über uns – Elektrotechnikermeister Reza Nahad und sein Team">Nahad Energie ist ein Elektrotechnik-Meisterbetrieb aus Düsseldorf-Mörsenbroich. Wir arbeiten für Privatkunden, Hausverwaltungen und Gewerbe in Düsseldorf und im Umkreis von etwa 25 Kilometern – mit einem Anspruch: Elektrik so zu bauen, dass sie geprüft, dokumentiert und in zwanzig Jahren noch nachvollziehbar ist.</PageHero>
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={officeAsset.url} alt="Elektrotechnikermeister Reza Nahad am Arbeitsplatz im Büro von Nahad Energie in Düsseldorf" width="1366" height="768" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" />
          <div>
            <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Reza Nahad, Elektrotechnikermeister</h2>
            <p className="mt-4 text-muted-foreground">Was mich antreibt: Elektroanlagen sind Vertrauenssache. Der Kunde sieht am Ende eine Steckdose – ob dahinter sauber geklemmt, richtig abgesichert und ordentlich gemessen wurde, sieht er nicht. Genau das ist mein Job.</p>
          </div>
        </div>
      </Section>
      <Section muted>
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Qualifikationen, die Sie prüfen können</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Elektrotechnikermeister (Handwerkskammer Düsseldorf)",
                "Eingetragen in die Handwerksrolle der Handwerkskammer Düsseldorf, Elektrotechniker-Handwerk – Betriebsnummer 1887466",
                "Eingetragener Installateur im Installateurverzeichnis der Netzgesellschaft Düsseldorf mbH – Voraussetzung für Zählerarbeiten, PV-Inbetriebsetzung und § 14a-Anmeldungen",
                "Mitglied der Elektro-Innung Düsseldorf, E-Markenbetrieb",
              ].map((t) => <li key={t} className="flex gap-3 font-semibold"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />{t}</li>)}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">Wir zeigen nur Qualifikationen, die wir belegen können. Zertifikate legen wir auf Wunsch vor.</p>
          </div>
          <img src={workAsset.url} alt="Reza Nahad in Warnschutzkleidung prüft die geöffnete Elektrik eines Stromaggregats" width="768" height="1024" loading="lazy" className="mx-auto aspect-[4/5] w-full max-w-sm rounded-md object-cover" />
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Vier Grundsätze</h2>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(([t, d], i) => <li key={t} className="border-t-2 border-accent pt-4"><span className="font-display text-sm font-extrabold text-accent-strong">0{i + 1}</span><h3 className="mt-1 font-extrabold text-primary">{t}</h3><p className="mt-1 text-sm text-muted-foreground">{d}</p></li>)}
        </ol>
      </Section>
      <Section muted>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Unser Standort in Mörsenbroich</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">Vogelsanger Weg 38, 40470 Düsseldorf – am Mörsenbroicher Ei, direkt an A 52 und B 7. Von hier sind wir in 10–25 Minuten in fast jedem Düsseldorfer Stadtteil. Termine vor Ort nach Vereinbarung.</p>
        <a href={mapsHref} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 font-bold text-primary underline">Route planen (Google Maps) <ExternalLink className="size-4" aria-hidden="true" /><span className="sr-only">– externer Link zu Google</span></a>
        <p className="mt-1 text-xs text-muted-foreground">Externer Link zu Google.</p>
      </Section>
      <CtaBand />
    </>
  );
}
