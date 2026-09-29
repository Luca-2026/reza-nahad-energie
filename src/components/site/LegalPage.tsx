import type { ReactNode } from "react";
import { Breadcrumbs, PageHero, Section } from "./SiteLayout";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Breadcrumbs items={[{ label: title }]} />
      <PageHero eyebrow="Rechtliches" title={title} />
      <Section><article className="max-w-3xl space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-foreground">{children}</article></Section>
    </>
  );
}
