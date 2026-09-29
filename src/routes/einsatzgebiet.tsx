import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { CtaBand, PageHero, Section } from "@/components/site/SiteLayout";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/einsatzgebiet")({
  head: () => seo("/einsatzgebiet", "Einsatzgebiet – Düsseldorf & Umgebung | Nahad Energie", "Unser Einsatzgebiet: alle Düsseldorfer Stadtteile von Mörsenbroich bis Benrath sowie Ratingen, Neuss, Meerbusch, Erkrath, Hilden. Anfahrt transparent."),
  component: Page,
});

const groups = [
  ["Nah am Standort", ["Mörsenbroich", "Düsseltal", "Rath", "Unterrath", "Derendorf", "Pempelfort", "Golzheim", "Flingern", "Grafenberg", "Gerresheim", "Ludenberg"]],
  ["Düsseldorfer Norden & Linksrheinisch", ["Kaiserswerth", "Wittlaer", "Angermund", "Lohausen", "Stockum", "Oberkassel", "Niederkassel", "Heerdt"]],
  ["Düsseldorfer Süden", ["Bilk", "Wersten", "Eller", "Benrath", "Urdenbach"]],
  ["Umland", ["Ratingen", "Neuss", "Meerbusch", "Erkrath", "Hilden", "Kaarst", "Langenfeld"]],
] as const;

function Page() {
  return (
    <>
      <PageHero eyebrow="Einsatzgebiet" title="Einsatzgebiet – Elektriker für ganz Düsseldorf und das Umland">Unser Betrieb sitzt am Vogelsanger Weg 38 in Düsseldorf-Mörsenbroich. Von hier sind wir schnell in allen Stadtteilen.</PageHero>
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {groups.map(([title, places]) => (
            <div key={title}><h2 className="flex items-center gap-2 text-xl font-extrabold text-primary"><MapPin className="size-5 text-accent-strong" aria-hidden="true" />{title}</h2><ul className="mt-4 flex flex-wrap gap-2">{places.map((p) => <li key={p} className="rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold">{p}</li>)}</ul></div>
          ))}
        </div>
      </Section>
      <CtaBand text="Sie sind unsicher, ob wir zu Ihnen kommen? Fragen Sie einfach kurz an." />
    </>
  );
}
