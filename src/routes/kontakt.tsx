import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero, Section } from "@/components/site/SiteLayout";
import { jsonLd, phoneDisplay, phoneHref, seo, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    ...seo("/kontakt", "Kontakt & Anfrage – Elektriker Düsseldorf | Nahad Energie", "Anfrage an den Elektro-Meisterbetrieb Nahad Energie in Düsseldorf: Formular, Telefon oder WhatsApp. Rückmeldung in der Regel innerhalb eines Werktags."),
    scripts: [jsonLd({ "@type": "ContactPage", name: "Kontakt – Nahad Energie Elektrotechnik", url: "/kontakt" })],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Kontakt" title="Kontakt – so erreichen Sie uns">Schildern Sie kurz Ihr Vorhaben. Wir melden uns zur persönlichen Abstimmung.</PageHero>
      <Section>
        <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-4">
            <a href={phoneHref} className="flex items-center gap-3 font-bold text-primary"><span className="flex size-11 items-center justify-center rounded-md bg-secondary"><Phone className="size-5" aria-hidden="true" /></span>{phoneDisplay}</a>
            <a href={whatsappHref} className="flex items-center gap-3 font-bold text-primary"><span className="flex size-11 items-center justify-center rounded-md bg-secondary"><MessageCircle className="size-5" aria-hidden="true" /></span>Per WhatsApp schreiben</a>
            <p className="flex items-start gap-3 text-sm text-muted-foreground"><MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />Nahad Energie Elektrotechnik<br />Vogelsanger Weg 38<br />40470 Düsseldorf</p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
