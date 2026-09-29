import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand, PageHero, Section } from "@/components/site/SiteLayout";
import { areaServed, getService, jsonLd, seo } from "@/lib/site";

export const Route = createFileRoute("/leistungen/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Leistung nicht gefunden | Nahad Energie" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.service;
    const path = `/leistungen/${s.slug}`;
    return {
      ...seo(path, s.title, s.description, "article"),
      scripts: [
        jsonLd({ "@type": "Service", name: s.name, serviceType: s.name, description: s.description, url: path, areaServed: areaServed.map((name) => ({ "@type": "City", name })), provider: { "@type": "Electrician", name: "Nahad Energie Elektrotechnik" } }),
        jsonLd({ "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: "/" },
          { "@type": "ListItem", position: 2, name: "Leistungen", item: "/leistungen" },
          { "@type": "ListItem", position: 3, name: s.name, item: path },
        ] }),
      ],
    };
  },
  component: Page,
});

function Page() {
  const { service: s } = Route.useLoaderData();
  const related = s.related.map(getService).filter((x) => !!x);
  return (
    <>
      <nav aria-label="Brotkrumen" className="border-b border-border bg-background"><ol className="mx-auto flex max-w-6xl gap-2 px-4 py-3 text-sm text-muted-foreground md:px-6"><li><Link to="/">Startseite</Link> /</li><li><Link to="/leistungen">Leistungen</Link> /</li><li aria-current="page" className="font-semibold text-foreground">{s.name}</li></ol></nav>
      <PageHero eyebrow={`${s.name} · Düsseldorf`} title={s.h1}>{s.intro}</PageHero>
      <Section>
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <h2 className="text-2xl font-extrabold text-primary">Das übernehmen wir</h2>
            <ul className="mt-6 space-y-3">{s.points.map((p) => <li key={p} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />{p}</li>)}</ul>
            <h2 className="mt-10 text-2xl font-extrabold text-primary">So läuft es ab</h2>
            <ol className="mt-6 grid gap-6 sm:grid-cols-3">{[["01", "Anfrage", "Sie schildern kurz Ihr Vorhaben."], ["02", "Vor-Ort-Termin", "Wir prüfen die Situation und nennen einen Festpreis."], ["03", "Ausführung", "Fachgerechte Umsetzung mit Dokumentation."]].map(([n, t, d]) => <li key={n} className="border-t-2 border-accent pt-4"><span className="font-display text-sm font-extrabold text-accent-strong">{n}</span><h3 className="mt-1 font-extrabold text-primary">{t}</h3><p className="mt-1 text-sm text-muted-foreground">{d}</p></li>)}</ol>
          </div>
          <aside className="h-fit rounded-md border border-border bg-secondary p-6">
            <h2 className="font-extrabold text-primary">Verwandte Leistungen</h2>
            <ul className="mt-4 space-y-3">{related.map((r) => <li key={r.slug}><Link to="/leistungen/$slug" params={{ slug: r.slug }} className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">{r.name} in Düsseldorf <ArrowRight className="size-4" aria-hidden="true" /></Link></li>)}</ul>
            <p className="mt-6 text-sm text-muted-foreground">Wir sind in ganz Düsseldorf und Umgebung im Einsatz. <Link to="/einsatzgebiet" className="font-semibold text-primary underline">Zum Einsatzgebiet</Link></p>
          </aside>
        </div>
      </Section>
      <CtaBand text={`Anfrage zu ${s.name} – wir melden uns persönlich zur Abstimmung.`} />
    </>
  );
}
