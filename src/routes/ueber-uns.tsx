import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { CtaBand, PageHero, Section } from "@/components/site/SiteLayout";
import { jsonLd, seo } from "@/lib/site";
import officeAsset from "@/assets/reza-nahad-buero.jpeg.asset.json";
import workAsset from "@/assets/reza-nahad-elektroarbeit.jpeg.asset.json";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    ...seo("/ueber-uns", "Über uns – Elektrotechnikermeister Reza Nahad | Nahad", "Lernen Sie Reza Nahad kennen: Elektrotechnikermeister in Düsseldorf, Meisterbetrieb mit Handwerksrolle, klarer Arbeitsweise und persönlicher Verantwortung."),
    scripts: [jsonLd({ "@type": "Person", name: "Reza Nahad", jobTitle: "Elektrotechnikermeister", worksFor: { "@type": "Electrician", name: "Nahad Energie Elektrotechnik" } })],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Über uns" title="Über uns – Elektrotechnikermeister Reza Nahad und sein Team">Ein Meisterbetrieb aus Düsseldorf-Mörsenbroich mit persönlicher Verantwortung für jedes Projekt.</PageHero>
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={officeAsset.url} alt="Elektrotechnikermeister Reza Nahad im Büro von Nahad Energie in Düsseldorf" width="1366" height="768" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" />
          <div>
            <h2 className="text-2xl font-extrabold text-primary">Direkt mit dem Meister sprechen</h2>
            <p className="mt-4 text-muted-foreground">Bei Nahad Energie Elektrotechnik sprechen Sie persönlich mit Inhaber Reza Nahad. Er bespricht Ihr Anliegen verständlich, plant sorgfältig und steht für die fachgerechte Ausführung ein.</p>
            <ul className="mt-6 space-y-3">{["Meisterbetrieb, eingetragen in die Handwerksrolle", "Mitglied der Elektro-Innung", "Eingetragen im Installateurverzeichnis der Netzgesellschaft Düsseldorf", "Ein fester Ansprechpartner", "Saubere Dokumentation und klare Absprachen"].map((t) => <li key={t} className="flex gap-3 font-semibold"><ShieldCheck className="size-5 shrink-0 text-success" aria-hidden="true" />{t}</li>)}</ul>
          </div>
        </div>
      </Section>
      <Section muted>
        <div className="grid items-center gap-12 md:grid-cols-[.8fr_1.2fr]">
          <img src={workAsset.url} alt="Reza Nahad bei der Prüfung einer elektrischen Anlage im Einsatz" width="768" height="1024" loading="lazy" className="aspect-[4/5] w-full max-w-sm rounded-md object-cover" />
          <div><h2 className="text-2xl font-extrabold text-primary">Unsere Arbeitsweise</h2><p className="mt-4 text-muted-foreground">Erst verstehen, dann planen, dann umsetzen: Nach einem Vor-Ort-Termin erhalten Sie einen klaren Festpreis. Nach der Ausführung dokumentieren wir die Arbeiten nachvollziehbar.</p></div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
