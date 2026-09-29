import { createFileRoute } from "@tanstack/react-router";
import { LegalHeading } from "@/components/site/LegalContent";
import { LegalPage } from "@/components/site/LegalPage";
import { WithdrawalContent } from "@/components/site/WithdrawalContent";
import { seo } from "@/lib/site";

const sections: { title: string; paragraphs: string[] }[] = [
  { title: "§ 1 Geltungsbereich, Begriffe", paragraphs: [
    "(1) Diese AGB gelten für alle Verträge über Werk- und Dienstleistungen im Bereich der Elektrotechnik (insbesondere Elektroinstallation, Zähler- und Verteilungsanlagen, Photovoltaik- und Speichersysteme, Ladeinfrastruktur, Gebäudeautomation, Beleuchtung, Kommunikationstechnik, Prüfungen und Störungsbeseitigung) sowie die damit verbundene Lieferung von Material zwischen Nahad Energie Elektrotechnik (nachfolgend „wir“) und unseren Kunden.",
    "(2) Verbraucher ist jede natürliche Person, die den Vertrag zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB). Unternehmer ist eine natürliche oder juristische Person oder rechtsfähige Personengesellschaft, die bei Abschluss des Vertrags in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt (§ 14 BGB).",
    "(3) Abweichende oder ergänzende Bedingungen des Kunden werden nur Vertragsbestandteil, wenn wir ihrer Geltung ausdrücklich in Textform zugestimmt haben. Die VOB/B wird nur gegenüber Unternehmern und nur dann Vertragsbestandteil, wenn dies im Angebot ausdrücklich vereinbart ist.",
  ] },
  { title: "§ 2 Angebot, Kostenvoranschlag, Vertragsschluss", paragraphs: [
    "(1) Unsere schriftlichen Angebote sind – sofern im Angebot nichts anderes angegeben ist – vier Wochen ab Angebotsdatum verbindlich. Der Vertrag kommt durch Auftragserteilung des Kunden in Textform (z. B. E-Mail) oder durch Unterzeichnung des Angebots bzw. Auftragsformulars zustande, bei mündlicher Beauftragung durch unsere Auftragsbestätigung in Textform oder durch Beginn der Ausführung.",
    "(2) Kostenvoranschläge sind unverbindlich, sofern nicht ausdrücklich eine Verbindlichkeit (Festpreis) vereinbart ist. Zeichnet sich ab, dass die veranschlagten Kosten wesentlich überschritten werden, zeigen wir dies dem Kunden unverzüglich an. Der Kunde kann den Vertrag in diesem Fall kündigen; wir erhalten dann eine der bis dahin erbrachten Leistung entsprechende Vergütung sowie Ersatz der in der Vergütung nicht enthaltenen Auslagen (§§ 649, 645 BGB).",
    "(3) Kostenvoranschläge und Angebote sind kostenlos, soweit nicht vor ihrer Erstellung ausdrücklich eine Vergütung (z. B. für Planungsleistungen) vereinbart wurde.",
    "(4) Angaben in Prospekten, auf unserer Website oder in Herstellerunterlagen sind keine Beschaffenheitsvereinbarung, sofern sie nicht ausdrücklich in das Angebot aufgenommen wurden.",
  ] },
  { title: "§ 3 Leistungsumfang, Änderungen, Zusatzleistungen", paragraphs: [
    "(1) Umfang und Ausführung der Leistung ergeben sich aus dem Angebot bzw. der Auftragsbestätigung. Wir führen die Arbeiten nach den zum Zeitpunkt des Vertragsschlusses geltenden anerkannten Regeln der Technik (insbesondere DIN-VDE-Normen, VDE-Anwendungsregeln, Technische Anschlussbedingungen des Netzbetreibers) aus.",
    "(2) Wünscht der Kunde Änderungen oder zusätzliche Leistungen, unterbreiten wir ein Nachtragsangebot. Zusatzleistungen werden nur nach Beauftragung in Textform ausgeführt und nach den Preisen des Angebots, im Übrigen nach unserer aktuellen Preisliste vergütet. Das gesetzliche Anordnungsrecht des Kunden bei Bauverträgen (§ 650b BGB) bleibt unberührt.",
    "(3) Stellen sich bei der Ausführung Umstände heraus, die bei Vertragsschluss nicht erkennbar waren (z. B. verdeckte Leitungsverläufe, nicht normgerechte Altinstallationen, Feuchtigkeit, Schadstoffe), informieren wir den Kunden unverzüglich über Auswirkungen auf Leistung, Termin und Preis, bevor wir mit den betroffenen Arbeiten fortfahren.",
    "(4) Wir sind berechtigt, Teilleistungen durch qualifizierte Nachunternehmer (z. B. Dachdecker bei Photovoltaik-Montage) ausführen zu lassen; wir bleiben für die Gesamtleistung verantwortlich.",
  ] },
  { title: "§ 4 Preise", paragraphs: [
    "(1) Es gelten die im Angebot genannten Preise. Gegenüber Verbrauchern sind alle Preise Endpreise einschließlich der gesetzlichen Umsatzsteuer; gegenüber Unternehmern verstehen sich Preise zuzüglich Umsatzsteuer.",
    "(2) Ist eine Abrechnung nach Aufwand vereinbart, gelten die im Angebot genannten Verrechnungssätze, im Übrigen unsere bei Vertragsschluss aktuelle Preisliste (Stundensatz, Anfahrtspauschale, Material). Arbeitszeit wird je angefangene 15 Minuten abgerechnet; die Anfahrt wird pauschal berechnet. Kleinmaterial wird nach Aufwand abgerechnet, sofern keine Pauschale vereinbart ist.",
    "(3) Für Einsätze außerhalb unserer regulären Bürozeiten (Störungsdienst) gelten die im Preisblatt „Störungsdienst“ genannten Zuschläge, die dem Kunden vor Auftragserteilung mitgeteilt werden.",
    "(4) Verzögert sich die Ausführung auf Wunsch des Kunden oder aus vom Kunden zu vertretenden Gründen um mehr als vier Monate nach Vertragsschluss, können wir nachweisbare Materialpreiserhöhungen unserer Lieferanten an den Kunden weitergeben. Übersteigt die Erhöhung fünf Prozent des Auftragswertes, kann der Kunde vom Vertrag zurücktreten.",
  ] },
  { title: "§ 5 Zahlung, Abschlagszahlungen, Verzug", paragraphs: [
    "(1) Die Vergütung ist mit Abnahme der Leistung und Zugang der Rechnung fällig und binnen 14 Tagen ohne Abzug zahlbar.",
    "(2) Wir können Abschlagszahlungen in Höhe des Wertes der von uns erbrachten und nach dem Vertrag geschuldeten Leistungen verlangen (§ 632a BGB). Für den Kunden bestellte Sonderanfertigungen oder hochwertige Geräte (z. B. Speicher, Wechselrichter, Wallboxen) können wir eine Vorauszahlung verlangen, wenn dies im Angebot individuell vereinbart ist.",
    "(3) Bei Zahlungsverzug schulden Verbraucher Verzugszinsen in Höhe von fünf Prozentpunkten über dem Basiszinssatz (§ 288 Abs. 1 BGB). Unternehmer schulden Verzugszinsen in Höhe von neun Prozentpunkten über dem Basiszinssatz sowie die Pauschale nach § 288 Abs. 5 BGB. Die Geltendmachung eines weitergehenden Verzugsschadens bleibt vorbehalten.",
    "(4) Der Kunde kann nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen aufrechnen. Zurückbehaltungsrechte des Kunden aus demselben Vertragsverhältnis bleiben unberührt.",
  ] },
  { title: "§ 6 Ausführungsfristen", paragraphs: [
    "(1) Termine und Fristen sind nur verbindlich, wenn sie von uns in Textform als verbindlich bestätigt wurden. Im Übrigen handelt es sich um voraussichtliche Angaben.",
    "(2) Fristen verlängern sich angemessen bei Ereignissen, die wir nicht zu vertreten haben (z. B. höhere Gewalt, nicht von uns verschuldete Lieferverzögerungen, Terminvergabe durch Netz- oder Messstellenbetreiber, fehlende Mitwirkung des Kunden, Verzögerungen anderer Gewerke). Wir informieren den Kunden unverzüglich und nennen einen neuen Termin. Gesetzliche Rechte des Kunden bei Verzug bleiben unberührt.",
  ] },
  { title: "§ 7 Mitwirkungspflichten des Kunden", paragraphs: [
    "(1) Der Kunde stellt sicher, dass die Arbeitsbereiche zum vereinbarten Termin frei zugänglich und geräumt sind, Strom und Wasser zur Verfügung stehen und eine entscheidungsbefugte Person erreichbar ist.",
    "(2) Der Kunde informiert uns vor Beginn über ihm bekannte Besonderheiten (Leitungsverläufe, Bestandspläne, frühere Umbauten, Feuchtigkeit, Schadstoffe wie Asbest) und holt erforderliche Zustimmungen Dritter (z. B. Vermieter, Eigentümergemeinschaft, Denkmalschutz) ein, soweit nicht anders vereinbart.",
    "(3) Anmeldungen und Anträge beim Netzbetreiber und Messstellenbetreiber übernehmen wir im Rahmen des Auftrags; der Kunde erteilt uns hierfür die erforderliche Vollmacht und stellt benötigte Angaben (z. B. Zählernummer, Eigentümerdaten) bereit. Registrierungen, die auf den Kunden selbst laufen (z. B. Marktstammdatenregister), nehmen wir gemeinsam mit dem Kunden vor.",
    "(4) Unterlässt der Kunde eine erforderliche Mitwirkung, können wir eine angemessene Entschädigung verlangen (§ 642 BGB) und nach fruchtloser Fristsetzung den Vertrag kündigen (§ 643 BGB).",
  ] },
  { title: "§ 8 Abnahme", paragraphs: [
    "(1) Der Kunde ist verpflichtet, die vertragsgemäß hergestellte Leistung abzunehmen (§ 640 BGB). Die Abnahme erfolgt in der Regel gemeinsam vor Ort mit Protokoll, in dem wir Ihnen die Anlage erklären und Mess- bzw. Prüfprotokolle übergeben.",
    "(2) Nimmt der Kunde die Leistung nicht innerhalb einer von uns gesetzten angemessenen Frist ab, obwohl er dazu verpflichtet ist, gilt die Leistung als abgenommen, wenn der Kunde die Abnahme nicht unter Angabe mindestens eines Mangels verweigert hat (§ 640 Abs. 2 BGB). Ist der Kunde Verbraucher, treten diese Rechtsfolgen nur ein, wenn wir ihn zusammen mit der Aufforderung zur Abnahme in Textform auf die Folgen einer nicht erklärten oder ohne Angabe von Mängeln verweigerten Abnahme hingewiesen haben.",
    "(3) In sich abgeschlossene Teilleistungen können auf Verlangen einer Partei gesondert abgenommen werden.",
  ] },
  { title: "§ 9 Mängelansprüche", paragraphs: [
    "(1) Für Mängel unserer Leistung gelten die gesetzlichen Vorschriften (§§ 634 ff. BGB). Wir leisten Nacherfüllung nach unserer Wahl durch Beseitigung des Mangels oder Neuherstellung (§ 635 BGB).",
    "(2) Die Verjährungsfrist für Mängelansprüche beträgt bei Arbeiten an einem Bauwerk fünf Jahre, im Übrigen zwei Jahre, jeweils ab Abnahme (§ 634a BGB).",
    "(3) Keine Mängel sind Beeinträchtigungen, die auf von uns nicht zu vertretenden Umständen beruhen, insbesondere auf vom Kunden beigestelltem Material, nachträglichen Eingriffen Dritter oder des Kunden, unsachgemäßer Bedienung, Nichtbeachtung der Bedienungsanleitungen, äußeren Einflüssen (z. B. Überspannung durch Blitzeinschlag, Feuchtigkeit) oder gewöhnlichem Verschleiß.",
    "(4) Herstellergarantien für verbaute Komponenten bestehen zusätzlich zu unseren gesetzlichen Pflichten und werden durch diese nicht eingeschränkt. Die Garantiebedingungen händigen wir mit der Abnahme aus.",
    "(5) Nur gegenüber Unternehmern: Offensichtliche Mängel sind uns innerhalb von zwei Wochen nach Abnahme in Textform anzuzeigen; § 377 HGB gilt für Kaufleute entsprechend.",
  ] },
  { title: "§ 10 Haftung", paragraphs: [
    "(1) Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit, für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, nach dem Produkthaftungsgesetz, bei arglistigem Verschweigen eines Mangels sowie im Umfang einer von uns übernommenen Garantie.",
    "(2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten haften wir begrenzt auf den vertragstypischen, bei Vertragsschluss vorhersehbaren Schaden. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.",
    "(3) Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.",
    "(4) Die vorstehenden Regelungen gelten auch für die Haftung unserer gesetzlichen Vertreter, Mitarbeiter und Erfüllungsgehilfen.",
  ] },
  { title: "§ 11 Eigentumsvorbehalt", paragraphs: [
    "Gelieferte Geräte, Leuchten und Materialien bleiben bis zur vollständigen Bezahlung unser Eigentum, solange sie nicht in das Gebäude eingebaut sind. Mit dem Einbau gehen sie in das Eigentum des Grundstückseigentümers über; unsere Vergütungsansprüche bleiben davon unberührt.",
  ] },
  { title: "§ 12 Kündigung", paragraphs: [
    "(1) Der Kunde kann den Vertrag bis zur Vollendung der Leistung jederzeit kündigen (§ 648 BGB). In diesem Fall sind wir berechtigt, die vereinbarte Vergütung zu verlangen; wir müssen uns jedoch dasjenige anrechnen lassen, was wir infolge der Aufhebung des Vertrags an Aufwendungen ersparen oder durch anderweitige Verwendung unserer Arbeitskraft erwerben oder zu erwerben böswillig unterlassen. Es wird vermutet, dass uns danach fünf Prozent der auf den noch nicht erbrachten Teil der Leistung entfallenden vereinbarten Vergütung zustehen. Dem Kunden bleibt der Nachweis vorbehalten, dass uns ein geringerer Betrag zusteht.",
    "(2) Beide Parteien können den Vertrag aus wichtigem Grund ohne Einhaltung einer Frist kündigen (§ 648a BGB).",
    "(3) Die Kündigung bedarf der Textform; bei Bauverträgen im Sinne von § 650a BGB der Schriftform (§ 650h BGB).",
  ] },
  { title: "§ 13 Widerrufsrecht für Verbraucher", paragraphs: [
    "(1) Verbrauchern steht bei Verträgen, die außerhalb unserer Geschäftsräume (z. B. bei Ihnen zu Hause oder auf der Baustelle) oder im Fernabsatz geschlossen werden, ein gesetzliches Widerrufsrecht zu. Die Widerrufsbelehrung und das Muster-Widerrufsformular erhalten Sie mit dem Angebot bzw. Auftragsformular; sie sind zudem am Ende dieser AGB abgedruckt.",
    "(2) Wünschen Sie, dass wir vor Ablauf der Widerrufsfrist mit der Ausführung beginnen, benötigen wir Ihr ausdrückliches Verlangen auf einem dauerhaften Datenträger (z. B. unterschriebenes Formular oder E-Mail). Widerrufen Sie den Vertrag danach, schulden Sie uns für die bis zum Widerruf erbrachten Leistungen einen angemessenen Betrag (§ 357a Abs. 2 BGB). Ihr Widerrufsrecht erlischt, wenn wir die Leistung vollständig erbracht haben und Sie vor Beginn ausdrücklich zugestimmt und Ihre Kenntnis bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung verlieren (§ 356 Abs. 4 BGB).",
    "(3) Kein Widerrufsrecht besteht bei Verträgen, bei denen Sie uns ausdrücklich aufgefordert haben, Sie aufzusuchen, um dringende Reparatur- oder Instandhaltungsarbeiten vorzunehmen (§ 312g Abs. 2 Nr. 11 BGB). Dies gilt nicht für weitere bei diesem Besuch erbrachte Leistungen, die Sie nicht ausdrücklich verlangt haben.",
  ] },
  { title: "§ 14 Datenschutz", paragraphs: ["Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer Datenschutzerklärung unter https://nahad-energie.de/datenschutz."] },
  { title: "§ 15 Streitbeilegung", paragraphs: ["Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG)."] },
  { title: "§ 16 Schlussbestimmungen", paragraphs: [
    "(1) Es gilt das Recht der Bundesrepublik Deutschland. Gegenüber Verbrauchern gilt diese Rechtswahl nur, soweit dadurch nicht der Schutz entzogen wird, der durch zwingende Bestimmungen des Rechts des Staates gewährt wird, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat.",
    "(2) Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist Düsseldorf ausschließlicher Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis.",
    "(3) Änderungen und Ergänzungen des Vertrags bedürfen der Textform (§ 126b BGB).",
    "(4) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen und des Vertrags unberührt; an die Stelle der unwirksamen Bestimmung treten die gesetzlichen Vorschriften (§ 306 BGB).",
  ] },
];

export const Route = createFileRoute("/agb")({
  head: () => seo("/agb", "AGB | Nahad Energie Elektrotechnik", "Allgemeine Geschäftsbedingungen von Nahad Energie Elektrotechnik, Düsseldorf."),
  component: () => (
    <LegalPage title="Allgemeine Geschäftsbedingungen (AGB)">
      <p><strong>Nahad Energie Elektrotechnik, Inhaber Reza Nahad, Vogelsanger Weg 38, 40470 Düsseldorf</strong><br />Stand: 29.09.2026</p>
      {sections.map((section) => (
        <section key={section.title} className="space-y-4">
          <LegalHeading>{section.title}</LegalHeading>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
      ))}
      <WithdrawalContent />
    </LegalPage>
  ),
});