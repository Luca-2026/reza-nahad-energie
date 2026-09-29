import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/nahad-energie-logo.png.asset.json";
import { phoneDisplay, phoneHref, prices, services, standDate, whatsappHref, type QA } from "@/lib/site";

const nav = [
  { to: "/leistungen", label: "Leistungen" },
  { to: "/notdienst", label: "Notdienst" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/einsatzgebiet", label: "Einsatzgebiet" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const onContact = useRouterState({ select: (s) => s.location.pathname === "/kontakt" });
  return (
    <>
      <a href="#inhalt" className="sr-only z-50 bg-background px-4 py-3 text-primary focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Zum Inhalt springen</a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 lg:px-6">
          <Link to="/" aria-label="Nahad Energie Elektrotechnik – Startseite" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" width="52" height="52" className="size-13" />
            <span className="hidden font-display text-base font-extrabold leading-tight text-primary sm:block">Nahad Energie<br /><span className="font-semibold text-foreground">Elektrotechnik</span></span>
          </Link>
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 lg:flex">
            {nav.map((n) => <Link key={n.to} to={n.to} className="text-sm font-semibold text-foreground hover:text-primary" activeProps={{ className: "text-primary underline underline-offset-8" }}>{n.label}</Link>)}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href={phoneHref} className="flex min-h-11 items-center gap-2 text-sm font-bold text-primary"><Phone className="size-4" aria-hidden="true" />{phoneDisplay}</a>
            <Button asChild><Link to="/kontakt">Anfrage senden</Link></Button>
          </div>
          <Button variant="ghost" size="icon" aria-label={open ? "Menü schließen" : "Menü öffnen"} className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {open && (
          <nav aria-label="Mobile Navigation" className="border-t border-border bg-background px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-6xl gap-1">
              {nav.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="min-h-11 py-2 font-semibold text-foreground">{n.label}</Link>)}
            </div>
          </nav>
        )}
      </header>
      <main id="inhalt">{children}</main>
      <footer className="bg-primary pb-20 text-primary-foreground md:pb-0">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
          <div className="flex items-start gap-3"><img src={logoAsset.url} alt="Logo von Nahad Energie Elektrotechnik" width="64" height="64" loading="lazy" className="size-16" /><div><strong className="font-display">Nahad Energie<br />Elektrotechnik</strong><address className="mt-3 not-italic text-sm text-primary-foreground/75">Vogelsanger Weg 38<br />40470 Düsseldorf<br /><a href={phoneHref}>{phoneDisplay}</a></address></div></div>
          <div><h2 className="text-sm font-extrabold text-accent">Leistungen</h2><ul className="mt-3 space-y-1 text-sm text-primary-foreground/75">{services.slice(0, 6).map((s) => <li key={s.slug}><Link to="/leistungen/$slug" params={{ slug: s.slug }} className="hover:text-primary-foreground">{s.name} in Düsseldorf</Link></li>)}</ul></div>
          <div><h2 className="text-sm font-extrabold text-accent">Mehr</h2><ul className="mt-3 space-y-1 text-sm text-primary-foreground/75">{services.slice(6).map((s) => <li key={s.slug}><Link to="/leistungen/$slug" params={{ slug: s.slug }} className="hover:text-primary-foreground">{s.name}</Link></li>)}</ul></div>
          <div><h2 className="text-sm font-extrabold text-accent">Unternehmen</h2><ul className="mt-3 space-y-1 text-sm text-primary-foreground/75">
            <li><Link to="/ueber-uns">Über uns</Link></li><li><Link to="/karriere">Karriere</Link></li><li><Link to="/faq">Häufige Fragen</Link></li><li><Link to="/impressum">Impressum</Link></li><li><Link to="/datenschutz">Datenschutz</Link></li><li><Link to="/agb">AGB</Link></li>
          </ul></div>
        </div>
        <div className="border-t border-primary-foreground/15"><div className="mx-auto max-w-6xl px-4 py-5 text-xs text-primary-foreground/60 md:px-6">© 2026 Nahad Energie Elektrotechnik · Inhaber Reza Nahad, Elektrotechnikermeister · Eingetragen in die Handwerksrolle · Innungsbetrieb · Installateurverzeichnis Netzgesellschaft Düsseldorf</div></div>
      </footer>
      {!onContact && <nav aria-label="Schnellkontakt" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background md:hidden">
        <a href={phoneHref} className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-bold text-primary"><Phone className="size-5" aria-hidden="true" />Anrufen</a>
        <a href={whatsappHref} className="flex min-h-16 flex-col items-center justify-center gap-1 border-x border-border text-xs font-bold text-primary"><MessageCircle className="size-5" aria-hidden="true" />WhatsApp</a>
        <Link to="/kontakt" className="flex min-h-16 flex-col items-center justify-center gap-1 bg-accent text-xs font-bold text-accent-foreground"><ArrowRight className="size-5" aria-hidden="true" />Anfrage</Link>
      </nav>}
    </>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <p className="text-sm font-extrabold uppercase text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-3xl text-lg text-primary-foreground/80">{children}</div>}
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Brotkrumen" className="border-b border-border bg-background">
      <ol className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-3 text-sm text-muted-foreground md:px-6">
        <li><Link to="/" className="hover:text-primary">Start</Link> ›</li>
        {items.map((it, i) => i === items.length - 1
          ? <li key={it.label} aria-current="page" className="font-semibold text-foreground">{it.label}</li>
          : <li key={it.label}><Link to={it.to as "/leistungen"} className="hover:text-primary">{it.label}</Link> ›</li>)}
      </ol>
    </nav>
  );
}

export function NoticeBar() {
  return (
    <div className="border-b border-border bg-accent text-accent-foreground">
      <p className="mx-auto max-w-6xl px-4 py-2 text-sm font-semibold md:px-6">
        Störung oder Stromausfall? Störungsdienst: <a href={phoneHref} className="font-extrabold underline">{phoneDisplay}</a> · Zuschläge stehen offen auf der <Link to="/notdienst" className="underline">Notdienst-Seite</Link>.
      </p>
    </div>
  );
}

export function Section({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return <section className={muted ? "bg-secondary py-14 md:py-20" : "bg-background py-14 md:py-20"}><div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div></section>;
}

export function StepList({ steps }: { steps: [string, string][] }) {
  return (
    <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map(([t, d], i) => (
        <li key={t} className="border-t-2 border-accent pt-4">
          <span className="font-display text-sm font-extrabold text-accent-strong">0{i + 1}</span>
          <h3 className="mt-1 font-extrabold text-primary">{t}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{d}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqList({ faqs }: { faqs: QA[] }) {
  return (
    <div className="mt-6 max-w-3xl divide-y divide-border border-y border-border">
      {faqs.map(([q, a]) => (
        <details key={q} className="py-5">
          <summary className="cursor-pointer text-lg font-extrabold text-primary">{q}</summary>
          <p className="mt-3 text-muted-foreground">{a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ title = "Was steht bei Ihnen an?", text = "Schreiben Sie uns kurz, worum es geht – oder rufen Sie an. Fotos vom Sicherungskasten oder der Stelle helfen uns, schneller eine Einschätzung zu geben." }: { title?: string; text?: string }) {
  return (
    <Section muted>
      <div className="grid items-center gap-8 md:grid-cols-[1.3fr_.7fr]">
        <div>
          <h2 className="text-2xl font-extrabold text-primary md:text-3xl">{title}</h2>
          <p className="mt-2 text-muted-foreground">{text}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild><Link to="/kontakt">Anfrage senden <ArrowRight className="size-5" aria-hidden="true" /></Link></Button><Button size="lg" variant="outline" asChild><a href={phoneHref}><Phone className="size-5" aria-hidden="true" />{phoneDisplay}</a></Button></div>
        </div>
        <address className="rounded-md border border-border bg-card p-5 text-sm not-italic text-muted-foreground">
          <strong className="block text-primary">Nahad Energie Elektrotechnik</strong>
          Vogelsanger Weg 38<br />40470 Düsseldorf<br /><a href={phoneHref} className="font-semibold text-primary">{phoneDisplay}</a>
        </address>
      </div>
    </Section>
  );
}

export function PriceBox() {
  return (
    <div className="rounded-md border-2 border-accent bg-card p-6">
      <h2 className="font-display text-xl font-extrabold text-primary">Preise – transparent und inkl. MwSt.</h2>
      <dl className="mt-4 divide-y divide-border tabular-nums">
        <div className="flex justify-between gap-4 py-2"><dt>Stundensatz Elektroniker</dt><dd className="font-extrabold text-primary">{prices.hourly}</dd></div>
        <div className="flex justify-between gap-4 py-2"><dt>Anfahrt Düsseldorf <span className="block text-xs text-muted-foreground">Umland nach Entfernung, wird vorher genannt</span></dt><dd className="font-extrabold text-primary">{prices.travel}</dd></div>
        <div className="flex justify-between gap-4 py-2"><dt>Störungsdienst außerhalb der Bürozeiten</dt><dd className="font-extrabold text-primary">{prices.emergency} Zuschlag</dd></div>
        <div className="flex justify-between gap-4 py-2"><dt>Projekte (PV, Wallbox, Sanierung, Zählerschrank)</dt><dd className="text-right font-semibold text-primary">Festpreis-Angebot nach Vor-Ort-Termin</dd></div>
      </dl>
      <p className="mt-3 text-xs text-muted-foreground">Alle Preise für Privatkunden inkl. 19 % MwSt. (Photovoltaik: 0 % MwSt.). Gewerbekunden erhalten Nettopreise im Angebot. Stand {standDate}.</p>
    </div>
  );
}
