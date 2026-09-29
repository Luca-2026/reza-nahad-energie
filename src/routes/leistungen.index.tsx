import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero, Section } from "@/components/site/SiteLayout";
import { seo, services } from "@/lib/site";

export const Route = createFileRoute("/leistungen/")({
  head: () => seo("/leistungen", "Leistungen – Elektrotechnik aus einer Hand | Nahad Energie", "Alle Leistungen des Elektro-Meisterbetriebs Nahad Energie in Düsseldorf: von der Steckdose bis zur PV-Anlage. Übersicht, Ablauf, Preise."),
  component: Page,
});

const clusters = ["Installation", "Energie", "Sicherheit", "Komfort", "Gewerbe"] as const;

function Page() {
  return (
    <>
      <PageHero eyebrow="Leistungen" title="Unsere Leistungen – Elektrotechnik für Haus, Wohnung und Gewerbe">Von der einzelnen Steckdose bis zur PV-Anlage mit Speicher und Wallbox – geplant und ausgeführt vom Meisterbetrieb.</PageHero>
      {clusters.map((c, i) => (
        <Section key={c} muted={i % 2 === 1}>
          <h2 className="text-2xl font-extrabold text-primary">{c}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {services.filter((s) => s.cluster === c).map((s) => (
              <Link key={s.slug} to="/leistungen/$slug" params={{ slug: s.slug }} className="rounded-md border border-border bg-card p-6 hover:border-primary">
                <h3 className="text-lg font-extrabold text-card-foreground">{s.name} in Düsseldorf</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">Zur Leistung <ArrowRight className="size-4" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </Section>
      ))}
      <CtaBand />
    </>
  );
}
