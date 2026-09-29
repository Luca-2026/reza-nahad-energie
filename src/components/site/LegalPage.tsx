import type { ReactNode } from "react";
import { PageHero, Section } from "./SiteLayout";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title={title} />
      <Section><div className="max-w-3xl space-y-4 text-muted-foreground">{children}</div></Section>
    </>
  );
}
