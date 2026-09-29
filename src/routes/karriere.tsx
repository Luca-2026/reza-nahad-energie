import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/SiteLayout";
import { phoneDisplay, phoneHref, seo } from "@/lib/site";

export const Route = createFileRoute("/karriere")({
  head: () => seo("/karriere", "Karriere – Elektroniker (m/w/d) in Düsseldorf | Nahad", "Jobs im Elektro-Meisterbetrieb in Düsseldorf: Elektroniker Energie- und Gebäudetechnik, Ausbildung, Quereinstieg. Faire Bezahlung, kurze Wege."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Karriere" title="Karriere bei Nahad Energie – Elektroniker (m/w/d) in Düsseldorf gesucht">Sie möchten in einem kleinen Meisterbetrieb mit kurzen Wegen arbeiten? Wir freuen uns über Ihre Initiativbewerbung.</PageHero>
      <Section>
        <h2 className="text-2xl font-extrabold text-primary">Wen wir suchen</h2>
        <ul className="mt-6 space-y-3">{["Elektroniker für Energie- und Gebäudetechnik (m/w/d)", "Auszubildende (m/w/d)", "Quereinsteiger mit elektrotechnischer Erfahrung"].map((t) => <li key={t} className="flex gap-3"><Check className="size-5 shrink-0 text-success" aria-hidden="true" />{t}</li>)}</ul>
        <p className="mt-8 text-muted-foreground">Rufen Sie direkt an oder senden Sie uns eine kurze Nachricht mit Ihrem Werdegang.</p>
        <Button size="lg" className="mt-6" asChild><a href={phoneHref}>Anrufen: {phoneDisplay}</a></Button>
      </Section>
    </>
  );
}
