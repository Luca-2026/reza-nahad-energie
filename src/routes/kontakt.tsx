import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { Breadcrumbs, PageHero, Section, StepList } from "@/components/site/SiteLayout";
import { email, jsonLd, mapsHref, phoneDisplay, phoneHref, seo } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    ...seo("/kontakt", "Kontakt & Anfrage – Elektriker Düsseldorf | Nahad Energie", "Anfrage an den Elektro-Meisterbetrieb Nahad Energie in Düsseldorf: Formular, Telefon oder E-Mail. Rückmeldung in der Regel innerhalb eines Werktags."),
    scripts: [jsonLd({ "@type": "ContactPage", name: "Kontakt – Nahad Energie Elektrotechnik", url: "/kontakt" })],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Kontakt" }]} />
      <PageHero eyebrow="Kontakt" title="Kontakt – so erreichen Sie uns">Beschreiben Sie kurz Ihr Anliegen – ein Foto vom Sicherungskasten oder der betroffenen Stelle hilft uns, schneller eine Einschätzung zu geben. Wir melden uns in der Regel innerhalb eines Werktags. Bei Störungen rufen Sie bitte direkt an.</PageHero>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <ContactForm />
          <address className="h-fit space-y-5 border-l-4 border-accent bg-secondary p-5 not-italic sm:p-6">
            <p><strong className="block text-primary">Nahad Energie Elektrotechnik</strong><span className="text-sm text-muted-foreground">Inhaber Reza Nahad, Elektrotechnikermeister</span></p>
            <p className="flex items-start gap-3 text-sm"><MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />Vogelsanger Weg 38<br />40470 Düsseldorf (Mörsenbroich)</p>
            <a href={phoneHref} className="flex items-center gap-3 font-bold text-primary"><Phone className="size-5" aria-hidden="true" />Telefon & Störungsdienst: {phoneDisplay}</a>
            <a href={`mailto:${email}`} className="flex items-center gap-3 font-bold text-primary"><Mail className="size-5" aria-hidden="true" />{email}</a>
            <p className="text-sm"><strong className="block text-primary">Bürozeiten</strong><span className="text-muted-foreground">Montag–Freitag, 08:00–17:00 Uhr</span></p>
            <a href={mapsHref} target="_blank" rel="noopener" className="flex items-center gap-3 text-sm font-semibold text-primary underline"><ExternalLink className="size-4" aria-hidden="true" />Route planen (Google Maps – externer Link)</a>
          </address>
        </div>
      </Section>
      <Section muted>
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Was passiert nach Ihrer Anfrage?</h2>
        <StepList steps={[
          ["Rückmeldung", "In der Regel innerhalb eines Werktags – per Telefon oder E-Mail."],
          ["Vor-Ort-Termin, falls nötig", "Bei Projekten schauen wir uns Zählerschrank und Gegebenheiten an."],
          ["Angebot", "Schriftlich, mit Leistungsbeschreibung und Festpreis."],
          ["Termin", "Wir nennen Ihnen Termin und Zeitfenster für die Ausführung."],
        ]} />
      </Section>
    </>
  );
}
