import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, CtaBand, FaqList, NoticeBar, PriceBox, Section, StepList } from "@/components/site/SiteLayout";
import { serviceIcons } from "@/components/site/serviceIcons";
import { areaServed, faqSchema, getService, jsonLd, ngdNote, ngdServices, phoneDisplay, phoneHref, seo } from "@/lib/site";

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
          { "@type": "ListItem", position: 1, name: "Start", item: "/" },
          { "@type": "ListItem", position: 2, name: "Leistungen", item: "/leistungen" },
          { "@type": "ListItem", position: 3, name: s.name, item: path },
        ] }),
        faqSchema(s.faq),
      ],
    };
  },
  component: Page,
});

function H2({ children }: { children: string }) {
  return <h2 className="text-2xl font-extrabold text-primary md:text-3xl">{children}</h2>;
}

function Page() {
  const { service: s } = Route.useLoaderData();
  const related = s.related.map(getService).filter((x) => !!x);
  const Icon = serviceIcons[s.icon];
  return (
    <>
      <NoticeBar />
      <Breadcrumbs items={[{ label: "Leistungen", to: "/leistungen" }, { label: s.name }]} />
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <p className="flex items-center gap-2 text-sm font-extrabold uppercase text-accent"><Icon className="size-5" aria-hidden="true" />{s.name} · Düsseldorf</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">{s.h1}</h1>
          <p className="mt-5 max-w-3xl text-lg text-primary-foreground/80">{s.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild><Link to="/kontakt">Anfrage senden <ArrowRight className="size-5" aria-hidden="true" /></Link></Button>
            <Button size="lg" variant="outline" asChild><a href={phoneHref}><Phone className="size-5" aria-hidden="true" />{phoneDisplay}</a></Button>
          </div>
          {ngdServices.includes(s.slug) && <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary-foreground/90"><BadgeCheck className="size-5 text-accent" aria-hidden="true" />{ngdNote}</p>}
        </div>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <H2>Typische Anlässe</H2>
            <ul className="mt-6 space-y-3">{s.occasions.map((o) => <li key={o} className="flex gap-3"><ArrowRight className="mt-1 size-4 shrink-0 text-accent-strong" aria-hidden="true" />{o}</li>)}</ul>
          </div>
          <div>
            <H2>Leistungsumfang</H2>
            <ul className="mt-6 space-y-3">{s.scope.map((p) => <li key={p} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />{p}</li>)}</ul>
          </div>
        </div>
      </Section>

      <Section muted>
        <H2>So läuft es ab</H2>
        <StepList steps={s.steps} />
      </Section>

      <Section>
        <H2>{s.knowHeading ?? "Das sollten Sie wissen"}</H2>
        <dl className="mt-6 grid gap-6 md:grid-cols-2">
          {s.know.map(([t, d]) => <div key={t} className="rounded-md border border-border bg-card p-5"><dt className="font-extrabold text-primary">{t}</dt><dd className="mt-2 text-sm text-muted-foreground">{d}</dd></div>)}
        </dl>
      </Section>

      <Section muted>
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <H2>Kosten</H2>
            <p className="mt-4 text-muted-foreground">{s.costNote}</p>
            <h2 className="mt-10 text-2xl font-extrabold text-primary">Warum Nahad Energie</h2>
            <ul className="mt-6 space-y-5">{s.why.map(([t, d]) => <li key={t} className="flex gap-3"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent-strong" aria-hidden="true" /><span><strong className="text-primary">{t}</strong> – {d}</span></li>)}</ul>
          </div>
          <PriceBox />
        </div>
      </Section>

      <Section>
        <H2>Häufige Fragen</H2>
        <FaqList faqs={s.faq} />
      </Section>

      <Section muted>
        <H2>Verwandte Leistungen</H2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((r) => { const RI = serviceIcons[r.icon]; return (
            <Link key={r.slug} to="/leistungen/$slug" params={{ slug: r.slug }} className="group rounded-md border border-border bg-card p-6 hover:border-primary">
              <RI className="size-6 text-accent-strong" aria-hidden="true" />
              <h3 className="mt-3 font-extrabold text-primary">{r.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
            </Link>
          ); })}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Wir sind in ganz Düsseldorf und Umgebung im Einsatz. <Link to="/einsatzgebiet" className="font-semibold text-primary underline">Zum Einsatzgebiet</Link></p>
      </Section>
      <CtaBand />
    </>
  );
}
