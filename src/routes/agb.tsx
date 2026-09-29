import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/agb")({
  head: () => seo("/agb", "AGB & Widerrufsbelehrung | Nahad Energie", "Allgemeine Geschäftsbedingungen und Widerrufsbelehrung des Elektro-Meisterbetriebs Nahad Energie, Düsseldorf."),
  component: () => (
    <LegalPage title="Allgemeine Geschäftsbedingungen">
      <p>Die Allgemeinen Geschäftsbedingungen und die Widerrufsbelehrung werden vor der Veröffentlichung ergänzt.</p>
    </LegalPage>
  ),
});
