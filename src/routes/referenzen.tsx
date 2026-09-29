import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, CtaBand, PageHero, Section } from "@/components/site/SiteLayout";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/referenzen")({
  head: () => {
    const base = seo("/referenzen", "Referenzen – Projekte in Düsseldorf | Nahad Energie", "Ausgewählte Projekte des Elektro-Meisterbetriebs Nahad Energie aus Düsseldorf und Umgebung – mit Stadtteil, Aufgabe und Ergebnis.");
    // Bis echte, freigegebene Referenzen vorliegen: nicht indexieren (Teil D.5)
    return { ...base, meta: [...base.meta, { name: "robots", content: "noindex" }] };
  },
  component: Page,
});

function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Referenzen" }]} />
      <PageHero eyebrow="Referenzen" title="Referenzen – ausgewählte Projekte aus Düsseldorf und Umgebung">Eine Auswahl aus unseren Aufträgen der letzten Zeit – mit Stadtteil, Aufgabe und dem, was daran besonders war. Alle Fotos mit Zustimmung der Kunden, Adressen und Namen bleiben privat.</PageHero>
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex min-h-56 flex-col justify-end rounded-md border-2 border-dashed border-border bg-secondary p-6">
              <p className="font-extrabold text-primary">Projekt in Vorbereitung</p>
              <p className="mt-2 text-sm text-muted-foreground">Stadtteil · Leistung · Ausgangslage, Lösung und Ergebnis folgen nach Freigabe durch den Kunden.</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand title="Ihr Projekt fehlt hier noch?" />
    </>
  );
}
