import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Section } from "@/components/site/SiteLayout";
import { seo } from "@/lib/site";
import workAsset from "@/assets/reza-nahad-elektroarbeit.jpeg.asset.json";
import distributionAsset from "@/assets/nahad-baustromverteiler.jpeg.asset.json";

export const Route = createFileRoute("/referenzen")({
  head: () => seo("/referenzen", "Referenzen – Projekte in Düsseldorf | Nahad Energie", "Ausgewählte Projekte des Elektro-Meisterbetriebs Nahad Energie: Sanierungen, PV-Anlagen, Wallboxen, Gewerbe. Mit Fotos und Fakten aus Düsseldorf."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Referenzen" title="Referenzen – ausgewählte Projekte aus Düsseldorf und Umgebung">Einblicke in unsere Arbeit. Weitere Projekte mit Fotos und Fakten folgen.</PageHero>
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <figure><img src={workAsset.url} alt="Prüfung und Instandsetzung eines Stromaggregats durch Nahad Energie" width="768" height="1024" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" /><figcaption className="mt-3"><strong className="text-primary">Prüfung & Instandsetzung</strong><span className="block text-sm text-muted-foreground">Fehlersuche und Prüfung an einem Stromaggregat.</span></figcaption></figure>
          <figure><img src={distributionAsset.url} alt="Baustromverteiler von Nahad Energie für die Stromversorgung einer Baustelle" width="768" height="922" loading="lazy" className="aspect-[4/3] w-full rounded-md bg-secondary object-contain" /><figcaption className="mt-3"><strong className="text-primary">Baustrom</strong><span className="block text-sm text-muted-foreground">Temporäre Stromversorgung für ein Bauvorhaben.</span></figcaption></figure>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
