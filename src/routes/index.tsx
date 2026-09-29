import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, CalendarCheck, ClipboardList, Clock, Landmark, MapPin, Phone, PlugZap, Siren, Sparkles, Sun, Thermometer, UserCheck, Wallet, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, FaqList, NoticeBar, PriceBox, Section, StepList } from "@/components/site/SiteLayout";
import { serviceIcons } from "@/components/site/serviceIcons";
import { faqAppointment, faqB2B, faqCostHour, faqFuseBox, faqGrid, faqSchema, faqWarranty, generalSteps, phoneDisplay, phoneHref, seo, services, standDate } from "@/lib/site";
import officeAsset from "@/assets/reza-nahad-buero.jpeg.asset.json";
import workAsset from "@/assets/reza-nahad-elektroarbeit.jpeg.asset.json";
import distributionAsset from "@/assets/nahad-baustromverteiler-freigestellt.png";

const homeFaqs = [faqCostHour, faqAppointment, faqGrid, faqFuseBox, faqB2B, faqWarranty];

export const Route = createFileRoute("/")({
  head: () => ({
    ...seo("/", "Elektriker Düsseldorf – Meisterbetrieb Nahad Energie", "Elektrotechnik-Meisterbetrieb in Düsseldorf: Elektroinstallation, Photovoltaik, Wallbox, Zählerschrank, Prüfungen. Preise vor dem Auftrag – jetzt anfragen."),
    scripts: [faqSchema(homeFaqs)],
  }),
  component: Index,
});

const why = [
  { icon: UserCheck, t: "Der Meister ist auf der Baustelle.", d: "Reza Nahad plant Ihr Projekt selbst, ist bei der Ausführung vor Ort und nimmt die Anlage persönlich ab. Sie sprechen mit dem, der die Verantwortung trägt." },
  { icon: Wallet, t: "Preise vor dem Auftrag.", d: "Stundensatz, Anfahrt und Zuschläge stehen auf dieser Website. Für Projekte erhalten Sie ein Festpreis-Angebot nach dem Vor-Ort-Termin – ohne Überraschungen auf der Rechnung." },
  { icon: ClipboardList, t: "Sauber dokumentiert.", d: "Jede Installation wird nach DIN VDE 0100-600 geprüft und protokolliert. Sie bekommen das Protokoll – wichtig für Versicherung, Verkauf und Vermietung." },
  { icon: Wrench, t: "Alles aus einer Hand.", d: "Zählerschrank, PV, Speicher, Wallbox, Wärmepumpen-Anschluss und die Anmeldung beim Netzbetreiber – ein Betrieb, ein Ansprechpartner, ein Termin." },
  { icon: CalendarCheck, t: "Termine, die halten.", d: "Wir nennen Ihnen einen Termin und ein Zeitfenster – und sagen rechtzeitig Bescheid, wenn sich etwas verschiebt." },
  { icon: Sparkles, t: "Baustelle besenrein.", d: "Schutzabdeckungen, Staubschutz beim Schlitzen, Aufräumen am Ende jedes Arbeitstags. In bewohnten Wohnungen selbstverständlich." },
];

const areas = ["Mörsenbroich", "Rath", "Derendorf", "Unterrath", "Düsseltal", "Grafenberg", "Pempelfort", "Golzheim", "Flingern", "Gerresheim", "Kaiserswerth", "Wittlaer", "Angermund", "Oberkassel", "Niederkassel", "Bilk", "Benrath", "Urdenbach", "Ratingen", "Neuss", "Meerbusch", "Erkrath", "Hilden"];

function Index() {
  return (
    <>
      <NoticeBar />
      <section className="overflow-hidden bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:min-h-[640px] lg:grid-cols-[1.04fr_.96fr] lg:px-6 lg:py-18">
          <div className="min-w-0">
            <div className="mb-5 flex items-start gap-2 text-xs font-extrabold uppercase text-accent-strong sm:text-sm"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> Elektrotechnik-Meisterbetrieb · Düsseldorf-Mörsenbroich</div>
            <h1 className="max-w-3xl text-[2.25rem] font-extrabold leading-[1.08] text-primary sm:text-5xl lg:text-[3.5rem]">Elektriker in Düsseldorf – Ihr Meisterbetrieb für Elektroinstallation, Photovoltaik und Wallbox</h1>
            <figure className="relative mt-7 w-full lg:hidden">
              <div className="absolute -bottom-2 -left-2 top-2 w-1 bg-accent" aria-hidden="true" />
              <img src={officeAsset.url} alt="Elektrotechnikermeister Reza Nahad an seinem Arbeitsplatz im Büro von Nahad Energie in Düsseldorf" width="1366" height="768" className="relative aspect-[4/3] w-full rounded-md object-cover object-center" fetchPriority="high" />
              <figcaption className="relative mt-2 text-xs font-semibold text-muted-foreground">Reza Nahad, Elektrotechnikermeister und Inhaber</figcaption>
            </figure>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Von der defekten Steckdose bis zur PV-Anlage mit Speicher und Ladepunkt: Wir planen, installieren und melden beim Netzbetreiber an – persönlich geführt von Elektrotechnikermeister Reza Nahad, mit Preisen, die Sie vor dem Auftrag kennen.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild><Link to="/kontakt">Anfrage senden <ArrowRight className="size-5" aria-hidden="true" /></Link></Button>
              <Button size="lg" variant="outline" asChild><a href={phoneHref}><Phone className="size-5" aria-hidden="true" /> {phoneDisplay} anrufen</a></Button>
            </div>
            <ul className="mt-8 grid gap-3 border-t border-border pt-6 text-sm font-semibold text-foreground sm:grid-cols-2">
              <li className="flex items-center gap-2"><BadgeCheck className="size-5 shrink-0 text-accent" aria-hidden="true" />Meisterbetrieb, Inhaber persönlich vor Ort</li>
              <li className="flex items-center gap-2"><Landmark className="size-5 shrink-0 text-accent" aria-hidden="true" />Eingetragen in die Handwerksrolle der HWK Düsseldorf</li>
              <li className="flex items-center gap-2"><PlugZap className="size-5 shrink-0 text-accent" aria-hidden="true" />Zugelassen bei der Netzgesellschaft Düsseldorf</li>
              <li className="flex items-center gap-2"><Clock className="size-5 shrink-0 text-accent" aria-hidden="true" />Rückmeldung in der Regel innerhalb eines Werktags</li>
            </ul>
          </div>
          <figure className="relative mx-auto hidden w-full max-w-xl lg:block lg:max-w-none">
            <div className="absolute -bottom-3 -left-3 top-3 w-1 bg-accent" aria-hidden="true" />
            <img src={officeAsset.url} alt="Elektrotechnikermeister Reza Nahad an seinem Arbeitsplatz im Büro von Nahad Energie in Düsseldorf" width="1366" height="768" className="relative aspect-[4/3] max-h-[520px] w-full rounded-md object-cover object-center" fetchPriority="high" />
            <figcaption className="relative mt-3 text-xs font-semibold text-muted-foreground">Reza Nahad, Elektrotechnikermeister und Inhaber</figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-border bg-background" aria-label="Unsere Zusagen">
        <ul className="mx-auto grid max-w-6xl gap-3 px-4 py-5 text-xs font-bold text-primary sm:grid-cols-2 md:px-6 lg:grid-cols-5">
          {["Meisterbetrieb", "Festpreis-Angebot nach Vor-Ort-Termin", "Prüfprotokoll zu jeder Installation", "Preise inkl. MwSt. – vor dem Auftrag", "Düsseldorf und 25 km Umkreis"].map((t) => <li key={t} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />{t}</li>)}
        </ul>
      </section>

      <Section>
        <p className="eyebrow">Leistungen</p>
        <h2 className="section-heading mt-3">Elektrotechnik für Haus, Wohnung und Gewerbe</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">Ein Ansprechpartner für alles, was mit Strom im Gebäude zu tun hat – von der klassischen Installation bis zur Energietechnik, die in den nächsten Jahren in fast jedes Haus kommt.</p>
        <div className="mt-10 grid border-y border-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => { const Icon = serviceIcons[s.icon]; return (
            <Link key={s.slug} to="/leistungen/$slug" params={{ slug: s.slug }} className="group border-b border-border p-5 transition-colors hover:bg-secondary sm:border-r lg:p-6">
              <Icon className="size-6 text-accent-strong" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-extrabold text-card-foreground group-hover:text-primary">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
            </Link>
          ); })}
          <Link to="/notdienst" className="group border-b border-border bg-accent p-5 text-accent-foreground sm:border-r lg:p-6">
            <Siren className="size-6" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-extrabold">Notdienst</h3>
            <p className="mt-2 text-sm">Stromausfall, Sicherung fliegt, FI löst aus – Störungsdienst mit offenen Zuschlägen.</p>
          </Link>
        </div>
        <Link to="/leistungen" className="mt-6 inline-flex items-center gap-1 font-bold text-primary hover:underline">Alle Leistungen im Überblick <ArrowRight className="size-4" aria-hidden="true" /></Link>
      </Section>

      <Section muted>
        <p className="eyebrow">Energietechnik</p>
        <h2 className="section-heading mt-3 max-w-4xl">Strom erzeugen, speichern, laden – und beim Netzbetreiber richtig angemeldet</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">Photovoltaik, Wallbox und Wärmepumpe hängen am selben Punkt: Ihrem Zählerschrank. Wer die drei getrennt beauftragt, zahlt oft doppelt und wundert sich später über Anmeldeprobleme. Wir denken den Zählerplatz von Anfang an mit, übernehmen die Anmeldung bei der Netzgesellschaft Düsseldorf und richten steuerbare Verbraucher nach § 14a EnWG so ein, dass Sie den reduzierten Netzentgelt-Beitrag bekommen.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { icon: Sun, t: "Photovoltaik + Speicher", d: "0 % Mehrwertsteuer auf Anlage, Speicher und die zugehörige Zählerschrank-Erneuerung (§ 12 Abs. 3 UStG).", slug: "photovoltaik" },
            { icon: PlugZap, t: "Wallbox", d: "Anmeldung ab 3,6 kW, ab 4,2 kW steuerbar nach § 14a EnWG: 110–190 € Netzentgelt-Rabatt pro Jahr (Modul 1) sind drin.", slug: "wallbox" },
            { icon: Thermometer, t: "Wärmepumpe", d: "Zuleitung, Absicherung und Anmeldung – abgestimmt mit Ihrem Heizungsbauer, bevor das Gerät geliefert wird.", slug: "waermepumpe-elektroanschluss" },
          ].map(({ icon: Icon, t, d, slug }) => (
            <Link key={slug} to="/leistungen/$slug" params={{ slug }} className="group border-t-2 border-accent bg-card p-6 transition-colors hover:bg-background">
              <Icon className="size-6 text-accent-strong" aria-hidden="true" />
              <h3 className="mt-3 font-extrabold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Angaben zu Steuern, Netzentgelten und Förderung: Stand {standDate}. Aktuelle Details erklären wir im Gespräch.</p>
      </Section>

      <Section>
        <p className="eyebrow">Arbeitsweise</p>
        <h2 className="section-heading mt-3">Warum Kunden in Düsseldorf mit uns arbeiten</h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {why.map(({ icon: Icon, t, d }) => <li key={t} className="border-t border-border pt-5"><Icon className="size-6 text-accent-strong" aria-hidden="true" /><h3 className="mt-3 font-extrabold text-primary">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></li>)}
        </ul>
      </Section>

      <Section muted>
        <p className="eyebrow">Ablauf</p>
        <h2 className="section-heading mt-3">So läuft ein Auftrag bei uns ab</h2>
        <StepList steps={generalSteps} />
      </Section>

      <Section>
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2">
          <div><p className="eyebrow">Preistransparenz</p><h2 className="section-heading mt-3">Was kostet ein Elektriker in Düsseldorf?</h2><p className="mt-4 text-muted-foreground">Stundensatz, Anfahrt und Zuschläge stehen hier – vor dem Auftrag. Für Projekte erhalten Sie nach dem Vor-Ort-Termin ein schriftliches Festpreis-Angebot.</p></div>
          <PriceBox />
        </div>
      </Section>

      <Section muted>
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2">
          <img src={workAsset.url} alt="Elektrotechnikermeister Reza Nahad prüft in Warnschutzkleidung die geöffnete Anlage eines Stromaggregats" width="768" height="1024" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-md object-cover object-center" />
          <div>
            <p className="eyebrow">Persönlich geführt</p><h2 className="section-heading mt-3">Reza Nahad – Elektrotechnikermeister aus Düsseldorf</h2>
            <p className="mt-5 text-muted-foreground">Ich habe meinen eigenen Betrieb in Düsseldorf gegründet, weil ich Elektrik so machen wollte, wie ich sie mir selbst im Haus wünsche: ordentlich verlegt, sauber beschriftet, geprüft und erklärt. Mein Betrieb sitzt am Vogelsanger Weg in Mörsenbroich; die meisten Kunden erreichen wir in 20 Minuten.</p>
            <Button variant="dark" className="mt-8" asChild><Link to="/ueber-uns">Mehr über uns</Link></Button>
          </div>
        </div>
      </Section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[1fr_.8fr] md:px-6 md:py-20">
          <div><p className="eyebrow text-accent">Gewerbe & Bau</p><h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Baustrom für Bauvorhaben</h2><p className="mt-5 max-w-xl text-primary-foreground/80">Für Baustellen und temporäre Vorhaben stellen wir eine passende elektrische Versorgung mit eigenem Baustromverteiler bereit.</p><Button className="mt-8" asChild><Link to="/leistungen/$slug" params={{ slug: "gewerbe-hausverwaltung" }}>Gewerbe & Hausverwaltungen</Link></Button></div>
          <img src={distributionAsset} alt="Freigestellter orangefarbener Baustromverteiler mit Nahad-Energie-Beschriftung" width="768" height="938" loading="lazy" decoding="async" className="mx-auto aspect-[4/5] max-h-[480px] w-full object-contain" />
        </div>
      </section>

      <Section>
        <p className="eyebrow">Vor Ort</p><h2 className="section-heading mt-3">Unser Einsatzgebiet: ganz Düsseldorf und das Umland</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">Vom Standort Mörsenbroich aus sind wir schnell in Rath, Derendorf, Unterrath, Düsseltal, Grafenberg, Pempelfort und Golzheim. Wir arbeiten in allen Düsseldorfer Stadtteilen – von Kaiserswerth und Wittlaer im Norden über Oberkassel, Flingern und Gerresheim bis Benrath und Urdenbach im Süden – sowie in Ratingen, Neuss, Meerbusch, Erkrath, Hilden, Kaarst und Langenfeld.</p>
        <ul className="mt-6 flex flex-wrap gap-2">{areas.map((a) => <li key={a}><Link to="/einsatzgebiet" className="inline-block rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold text-primary hover:bg-accent hover:text-accent-foreground">{a}</Link></li>)}</ul>
      </Section>

      <Section muted>
        <p className="eyebrow">Kurz erklärt</p><h2 className="section-heading mt-3">Häufige Fragen</h2>
        <FaqList faqs={homeFaqs} />
      </Section>
      <CtaBand />
    </>
  );
}
