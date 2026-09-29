import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { WithdrawalContent } from "@/components/site/WithdrawalContent";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/widerrufsbelehrung")({
  head: () => seo("/widerrufsbelehrung", "Widerrufsbelehrung | Nahad Energie", "Widerrufsbelehrung und Muster-Widerrufsformular von Nahad Energie Elektrotechnik."),
  component: () => (
    <LegalPage title="Widerrufsbelehrung">
      <WithdrawalContent />
    </LegalPage>
  ),
});