import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { phoneDisplay, seo } from "@/lib/site";

export const Route = createFileRoute("/impressum")({
  head: () => seo("/impressum", "Impressum | Nahad Energie", "Impressum des Elektrotechnik-Meisterbetriebs Nahad Energie, Inhaber Reza Nahad, Düsseldorf."),
  component: () => (
    <LegalPage title="Impressum">
      <p><strong className="text-foreground">Nahad Energie Elektrotechnik</strong><br />Inhaber: Reza Nahad, Elektrotechnikermeister<br />Vogelsanger Weg 38<br />40470 Düsseldorf</p>
      <p>Telefon: {phoneDisplay}</p>
      <p>Weitere Pflichtangaben (E-Mail, Handwerkskammer, Umsatzsteuer-ID) werden ergänzt.</p>
    </LegalPage>
  ),
});
