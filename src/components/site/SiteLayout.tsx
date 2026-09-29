import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, Phone } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logoAsset from "@/assets/nahad-energie-logo.png.asset.json";
import { areaServed, email, phoneDisplay, phoneHref, prices, services, standDate, type QA } from "@/lib/site";

const nav = [
  { to: "/notdienst", label: "Notdienst" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/einsatzgebiet", label: "Einsatzgebiet" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

type MenuItem = { label: string; slug?: string; to?: "/notdienst" };
const megaMenu: { title: string; items: MenuItem[] }[] = [
  { title: "Installation & Sicherheit", items: [...services.filter((s) => s.group === "installation").map((s) => ({ label: s.name, slug: s.slug })), { label: "Notdienst", to: "/notdienst" }] },
  { title: "Energie", items: services.filter((s) => s.group === "energie").map((s) => ({ label: s.name, slug: s.slug })) },
  { title: "Komfort & Gewerbe", items: services.filter((s) => s.group === "komfort").map((s) => ({ label: s.name, slug: s.slug })) },
];

function MenuLink({ item, onClick, className }: { item: MenuItem; onClick?: () => void; className: string }) {
  if (item.to) return <Link to={item.to} onClick={onClick} className={className} activeProps={{ "aria-current": "page" }}>{item.label}</Link>;
  return <Link to="/leistungen/$slug" params={{ slug: item.slug! }} onClick={onClick} className={className} activeProps={{ "aria-current": "page" }}>{item.label}</Link>;
}

function MegaMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);
  const active = pathname.startsWith("/leistungen");
  return (
    <div ref={ref} className="relative">
      <button type="button" aria-expanded={open} aria-controls="mega-leistungen" onClick={() => setOpen(!open)} className={`flex min-h-11 items-center gap-1 text-sm font-semibold hover:text-primary ${active ? "text-primary underline underline-offset-8" : "text-foreground"}`}>
        Leistungen <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <div id="mega-leistungen" className="absolute left-1/2 top-full z-50 mt-3 w-[min(56rem,calc(100vw-2rem))] -translate-x-1/3 rounded-md border border-border bg-popover p-6 text-popover-foreground shadow-lg">
          <div className="grid gap-6 md:grid-cols-3">
            {megaMenu.map((col) => (
              <div key={col.title}>
                <p className="font-display text-xs font-extrabold uppercase tracking-wide text-muted-foreground">{col.title}</p>
                <ul className="mt-3 space-y-1">
                  {col.items.map((it) => <li key={it.label}><MenuLink item={it} className="block rounded-md px-2 py-2 text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary aria-[current=page]:text-primary" /></li>)}
                </ul>
              </div>
            ))}
          </div>
          <Link to="/leistungen" className="mt-5 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-bold text-primary">Alle Leistungen im Überblick <ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>
      )}
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Menü öffnen" className="lg:hidden"><Menu aria-hidden="true" /></Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm overflow-y-auto">
        <SheetHeader><SheetTitle className="text-left text-primary">Menü</SheetTitle></SheetHeader>
        <nav aria-label="Mobile Navigation" className="mt-4 grid gap-1 px-4 pb-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="leistungen" className="border-b-0">
              <AccordionTrigger className="min-h-11 py-2 text-base font-semibold">Leistungen</AccordionTrigger>
              <AccordionContent>
                {megaMenu.map((col) => (
                  <div key={col.title} className="mb-3">
                    <p className="text-xs font-extrabold uppercase text-muted-foreground">{col.title}</p>
                    <ul className="mt-1">{col.items.map((it) => <li key={it.label}><MenuLink item={it} onClick={close} className="block min-h-11 py-2 text-sm font-semibold text-foreground aria-[current=page]:text-primary" /></li>)}</ul>
                  </div>
                ))}
                <Link to="/leistungen" onClick={close} className="block min-h-11 py-2 text-sm font-bold text-primary">Alle Leistungen</Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {nav.map((n) => <Link key={n.to} to={n.to} onClick={close} className="min-h-11 py-2 font-semibold text-foreground" activeProps={{ className: "text-primary", "aria-current": "page" }}>{n.label}</Link>)}
          <a href={phoneHref} className="mt-4 flex min-h-11 items-center gap-2 font-bold text-primary"><Phone className="size-5" aria-hidden="true" />{phoneDisplay}</a>
          <Button size="lg" asChild className="mt-2"><Link to="/kontakt" onClick={close}>Anfrage senden</Link></Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

const footerLink = "hover:text-primary-foreground";

export function SiteLayout({ children }: { children: ReactNode }) {
  const onContact = useRouterState({ select: (s) => s.location.pathname.replace(/\/$/, "") === "/kontakt" });
  return (
    <>
      <a href="#inhalt" className="sr-only z-50 bg-background px-4 py-3 text-primary focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Zum Inhalt springen</a>
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 lg:px-6">
          <Link to="/" aria-label="Nahad Energie Elektrotechnik – Startseite" className="flex min-w-0 items-center gap-3">
            <img src={logoAsset.url} alt="" width="52" height="52" className="size-13 shrink-0" />
            <span className="hidden min-w-0 leading-tight sm:block"><span className="block font-display text-base font-extrabold tracking-tight text-primary">Nahad Energie</span><span className="block text-xs text-muted-foreground">Elektrotechnik-Meisterbetrieb Düsseldorf</span></span>
          </Link>
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 lg:flex">
            <MegaMenu />
            {nav.map((n) => <Link key={n.to} to={n.to} className="text-sm font-semibold text-foreground hover:text-primary" activeProps={{ className: "text-primary underline underline-offset-8", "aria-current": "page" }}>{n.label}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href={phoneHref} className="hidden min-h-11 items-center gap-2 text-sm font-bold text-primary md:flex"><Phone className="size-4" aria-hidden="true" />{phoneDisplay}</a>
            <Button asChild className="hidden md:inline-flex"><Link to="/kontakt">Anfrage senden</Link></Button>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main id="inhalt" tabIndex={-1}>{children}</main>
      <footer className="bg-primary pb-20 text-primary-foreground md:pb-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3"><img src={logoAsset.url} alt="Logo von Nahad Energie Elektrotechnik" width="56" height="56" loading="lazy" decoding="async" className="size-14" /><strong className="font-display leading-tight">Nahad Energie<br />Elektrotechnik</strong></div>
            <h2 className="mt-5 text-sm font-extrabold text-accent">Kontakt</h2>
            <address className="mt-3 space-y-2 not-italic text-sm text-primary-foreground/80">
              <p>Vogelsanger Weg 38<br />40470 Düsseldorf</p>
              <p><a href={phoneHref} className={footerLink}>Telefon {phoneDisplay}</a><br /><a href={`mailto:${email}`} className={footerLink}>{email}</a></p>
              <p>Bürozeiten: werden ergänzt</p>
              <p>Störungsdienst: werden ergänzt</p>
            </address>
          </div>
          <div><h2 className="text-sm font-extrabold text-accent">Leistungen</h2><ul className="mt-3 space-y-1 text-sm text-primary-foreground/80">{services.map((s) => <li key={s.slug}><Link to="/leistungen/$slug" params={{ slug: s.slug }} className={footerLink}>{s.name}</Link></li>)}<li><Link to="/notdienst" className={footerLink}>Notdienst</Link></li></ul></div>
          <div><h2 className="text-sm font-extrabold text-accent">Einsatzgebiet</h2><ul className="mt-3 space-y-1 text-sm text-primary-foreground/80">{areaServed.map((a) => <li key={a}><Link to="/einsatzgebiet" className={footerLink}>Elektriker {a}</Link></li>)}</ul></div>
          <div><h2 className="text-sm font-extrabold text-accent">Rechtliches & mehr</h2><ul className="mt-3 space-y-1 text-sm text-primary-foreground/80">
            <li><Link to="/impressum" className={footerLink}>Impressum</Link></li><li><Link to="/datenschutz" className={footerLink}>Datenschutz</Link></li><li><Link to="/agb" className={footerLink}>AGB</Link></li><li><Link to="/karriere" className={footerLink}>Karriere</Link></li><li><Link to="/faq" className={footerLink}>Häufige Fragen</Link></li>
          </ul></div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <ul aria-label="Qualifikationen" className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-5 md:px-6">
            {["Elektrotechnik-Meisterbetrieb", "Handwerksrolle HWK Düsseldorf", "Installateurverzeichnis Netzgesellschaft Düsseldorf"].map((b) => <li key={b} className="rounded-md border border-primary-foreground/25 px-3 py-1 text-xs font-semibold">{b}</li>)}
          </ul>
          <div className="mx-auto max-w-6xl px-4 pb-6 text-xs text-primary-foreground/70 md:px-6">© 2026 Nahad Energie Elektrotechnik · Inhaber Reza Nahad, Elektrotechnikermeister</div>
        </div>
      </footer>
      {!onContact && <nav aria-label="Schnellkontakt" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background md:hidden">
        <a href={phoneHref} className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-bold text-primary"><Phone className="size-5" aria-hidden="true" />Anrufen</a>
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
