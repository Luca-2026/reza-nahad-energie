import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/datenschutz")({
  head: () => seo("/datenschutz", "Datenschutzerklärung | Nahad Energie", "Datenschutzerklärung der Website nahad-energie.de."),
  component: () => (
    <LegalPage title="Datenschutzerklärung">
      <p>Verantwortlich: Nahad Energie Elektrotechnik, Inhaber Reza Nahad, Vogelsanger Weg 38, 40470 Düsseldorf.</p>
      <p>Die vollständige Datenschutzerklärung wird vor der Veröffentlichung ergänzt.</p>
    </LegalPage>
  ),
});
