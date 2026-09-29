import type { ReactNode } from "react";
import { Breadcrumbs, PageHero, Section } from "./SiteLayout";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Breadcrumbs items={[{ label: title }]} />
      <PageHero eyebrow="Rechtliches" title={title} />
      <Section><div className="max-w-3xl space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{children}</div></Section>
    </>
  );
}
