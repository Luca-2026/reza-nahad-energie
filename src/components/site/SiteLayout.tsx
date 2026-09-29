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

