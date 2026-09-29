export const phoneDisplay = "0211 54268296";
export const phoneHref = "tel:+4921154268296";
export const email = "info@nahad-energie.de";
export const brand = "Nahad Energie Elektrotechnik";
export const mapsHref = "https://www.google.com/maps/dir/?api=1&destination=Vogelsanger+Weg+38,+40470+D%C3%BCsseldorf";
export const googleProfileHref = "https://www.google.com/search?kgmid=/g/11zdd08txn&q=Nahad+Energie+Elektrotechnik";
export const standDate = "09/2026";

export const prices = { hourly: "89 €", travel: "45 €", emergency: "+100 %" };
export const ngdNote = "Eingetragen im Installateurverzeichnis der Netzgesellschaft Düsseldorf";
export const ngdServices = ["photovoltaik", "wallbox", "zaehlerschrank-sicherungskasten", "waermepumpe-elektroanschluss"];

export function seo(path: string, title: string, description: string, type = "website") {
  const absoluteUrl = `https://nahad-energie.de${path === "/" ? "" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: absoluteUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl }],
  };
}

export function jsonLd(data: object) {
  return { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", ...data }) };
}

export type QA = [string, string];
export const faqSchema = (faqs: QA[]) =>
  jsonLd({ "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });

export const areaServed = ["Düsseldorf", "Ratingen", "Neuss", "Meerbusch", "Erkrath", "Hilden", "Kaarst", "Langenfeld"];

/** Gemeinsame Texte (Teil D.1) */
export const generalSteps: [string, string][] = [
  ["Anfrage", "Formular, Telefon oder E-Mail (gern mit Foto). Wir melden uns in der Regel innerhalb eines Werktags."],
  ["Vor-Ort-Termin", "Bei Projekten wie PV, Wallbox oder Sanierung schauen wir uns Zählerschrank, Leitungswege und Gegebenheiten an."],
  ["Festpreis-Angebot", "Schriftlich, mit Leistungsbeschreibung, Material und Terminvorschlag. Bei Verbraucherverträgen inklusive Widerrufsbelehrung – das gehört sich so."],
  ["Ausführung & Übergabe", "Termin, Ausführung, Prüfung, Protokoll, Einweisung. Anmeldungen beim Netzbetreiber übernehmen wir."],
];

export const faqCostHour: QA = ["Was kostet ein Elektriker in Düsseldorf pro Stunde?", `Bei uns ${prices.hourly} inkl. MwSt., abgerechnet je angefangene 15 Minuten, plus Anfahrt ${prices.travel} innerhalb Düsseldorfs. Für Projekte erhalten Sie ein Festpreis-Angebot – dann zählt nur der vereinbarte Preis.`];
export const faqAppointment: QA = ["Wie schnell bekomme ich einen Termin?", "Projekte planen wir nach dem Vor-Ort-Termin verbindlich mit Ihnen. Bei Störungen rufen Sie bitte direkt an – wir klären am Telefon, wie schnell wir kommen können."];
export const faqGrid: QA = ["Übernehmen Sie die Anmeldung von PV-Anlage oder Wallbox beim Netzbetreiber?", "Ja. Als eingetragener Installateur bei der Netzgesellschaft Düsseldorf stellen wir die Anmeldung, beantragen Zählerwechsel und melden steuerbare Verbrauchseinrichtungen nach § 14a EnWG. Die Registrierung im Marktstammdatenregister erledigen wir gemeinsam mit Ihnen."];
export const faqFuseBox: QA = ["Muss mein alter Sicherungskasten erneuert werden?", "Nicht automatisch – Bestandsanlagen genießen Bestandsschutz. Sobald Sie aber erweitern (PV, Wallbox, Wärmepumpe, neue Stromkreise), gelten die aktuellen Normen für den geänderten Teil, in der Regel mit FI-Schutz und Überspannungsschutz. Wir sagen Ihnen ehrlich, was nötig ist und was nur schön wäre."];
export const faqB2B: QA = ["Arbeiten Sie auch für Hausverwaltungen und Gewerbe?", "Ja, mit festen Ansprechpartnern, Prüfprotokollen und auf Wunsch Rahmenvertrag. Details auf der Seite Gewerbe & Hausverwaltungen."];
export const faqWarranty: QA = ["Gibt es eine Gewährleistung auf Ihre Arbeit?", "Für unsere Werkleistungen gelten die gesetzlichen Mängelrechte – bei Arbeiten am Bauwerk fünf Jahre, sonst zwei Jahre. Zusätzlich gelten die Herstellergarantien der verbauten Komponenten, deren Bedingungen wir Ihnen mit dem Angebot aushändigen."];
export const faqFi: QA = ["Ist ein FI-Schutzschalter Pflicht?", "Für neue oder geänderte Steckdosenstromkreise bis 32 A ja (DIN VDE 0100-410). Für unveränderte Altanlagen gilt Bestandsschutz – aus Sicherheitsgründen empfehlen wir die Nachrüstung trotzdem, wo sie technisch möglich ist."];
export const faqPv: QA = ["Lohnt sich Photovoltaik in Düsseldorf noch?", "In den meisten Einfamilienhäusern ja – vor allem durch Eigenverbrauch, nicht durch die Einspeisevergütung. Wer E-Auto oder Wärmepumpe hat oder plant, kommt auf hohe Eigenverbrauchsquoten und Amortisationszeiten von häufig 10–14 Jahren bei 25+ Jahren Laufzeit. Wir rechnen es für Ihr Haus konkret durch."];
export const faqEmergencyCost: QA = ["Was kostet ein Notdienst-Einsatz?", `Stundensatz ${prices.hourly} plus Anfahrt ${prices.travel}; außerhalb der Bürozeiten ${prices.emergency} Zuschlag. Wir nennen Ihnen die voraussichtlichen Kosten vorab am Telefon.`];

export type Service = {
  slug: string;
  name: string;
  icon: "Zap" | "PanelTop" | "Sun" | "PlugZap" | "Thermometer" | "House" | "ClipboardCheck" | "ShieldCheck" | "Lightbulb" | "Network" | "Building2";
  group: "installation" | "energie" | "komfort";
  short: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  occasions: string[];
  scope: string[];
  steps: [string, string][];
  knowHeading?: string;
  know: [string, string][];
  costNote: string;
  why: [string, string][];
  faq: QA[];
  related: string[];
};

const costDefault = "Verbindlich ist immer das schriftliche Festpreis-Angebot nach dem Vor-Ort-Termin.";

export const services: Service[] = [
  {
    slug: "elektroinstallation", name: "Elektroinstallation", icon: "Zap", group: "installation",
    short: "Neubau, Altbausanierung, Umbau – Leitungen, Steckdosen, FI-Schutz, Geräteanschlüsse.",
    title: "Elektroinstallation Düsseldorf – Neubau & Altbau | Nahad",
    description: "Elektroinstallation in Düsseldorf vom Meisterbetrieb: Neubau, Altbausanierung, Umbau, FI-Schutz, Steckdosen, Leitungen. Festpreis nach Vor-Ort-Termin.",
    h1: "Elektroinstallation in Düsseldorf – Neubau, Altbau und Sanierung",
    intro: "Ob eine neue Steckdose im Wohnzimmer, die komplette Elektrik in einer Altbauwohnung in Flingern oder der Neubau in Angermund: Wir planen und installieren nach den aktuellen DIN-VDE-Normen, prüfen jede Anlage vor der Übergabe und dokumentieren das Ergebnis. Als Meisterbetrieb aus Mörsenbroich sind wir in ganz Düsseldorf schnell vor Ort.",
    occasions: [
      "Altbauwohnung oder -haus wird saniert – die Elektrik ist 40 Jahre alt, zwei Adern, kein FI-Schutz",
      "Neubau oder Anbau: Planung der Stromkreise, Dosen, Leitungswege und des Zählerplatzes",
      "Umbau von Küche oder Bad: Herd-, Backofen-, Spülmaschinen- und Durchlauferhitzer-Anschluss, Steckdosen nach DIN 18015",
      "Mehr Steckdosen, neue Schalter, Bewegungsmelder, Außensteckdosen",
      "FI-Schutzschalter nachrüsten, Stromkreise aufteilen, alte Schraubsicherungen ersetzen",
      "Kauf einer Immobilie: Bestandsaufnahme und Modernisierungsplan mit Prioritäten",
    ],
    scope: [
      "Planung der Stromkreise und Ausstattung nach DIN 18015 (Anzahl Steckdosen, Auslässe, Reserve)",
      "Leitungsverlegung unter Putz, im Kanal oder in Leerrohren; Schlitz- und Stemmarbeiten mit Staubabsaugung",
      "Steckdosen, Schalter, Dimmer, Taster – Schalterprogramm nach Ihrer Wahl (herstellerneutral)",
      "Fehlerstrom-Schutzschalter (FI/RCD 30 mA) für alle Steckdosenstromkreise, Leitungsschutzschalter, Überspannungsschutz",
      "Geräteanschlüsse: Herd, Backofen, Kochfeld, Durchlauferhitzer, Waschmaschine, Trockner, Klimagerät",
      "Potentialausgleich, Erdung, Schutzmaßnahmen im Bad (Schutzbereiche nach DIN VDE 0100-701)",
      "Erstprüfung nach DIN VDE 0100-600 mit Messprotokoll und beschrifteter Verteilung",
      "Koordination mit Maler, Trockenbau, Küchenbau – wir sagen, wann wir vor und nach ihnen kommen müssen",
    ],
    steps: [
      ["Anfrage mit Grundriss oder Fotos", "So können wir oft schon am Telefon einen Rahmen nennen."],
      ["Vor-Ort-Termin", "Wir prüfen Zählerschrank, Leitungsnetz und Wände und klären, was Sie sich wünschen."],
      ["Festpreis-Angebot", "Positionen, Material, Zeitplan. Änderungen während der Ausführung halten wir schriftlich fest, bevor sie Geld kosten."],
      ["Ausführung, Prüfung, Übergabe", "Rohinstallation, Feininstallation, Messung, Protokoll, Einweisung. Anschließend Abnahme mit Ihnen."],
    ],
    know: [
      ["Bestandsschutz", "Eine alte, seinerzeit normgerechte Anlage darf weiterbetrieben werden. Sobald Stromkreise geändert oder erweitert werden, gelten für den geänderten Teil die aktuellen Normen – insbesondere FI-Schutz (DIN VDE 0100-410) und Überspannungsschutz (DIN VDE 0100-443/-534)."],
      ["Zwei Adern, kein FI möglich", "Bei „klassischer Nullung“ (zweiadrige Leitungen ohne separaten Schutzleiter) lässt sich ein FI-Schutzschalter nicht sinnvoll nachrüsten; hier müssen Leitungen neu verlegt werden. Wir zeigen Ihnen, welche Stromkreise betroffen sind."],
      ["Prüfprotokoll", "Nach jeder Neu- oder Änderungsinstallation prüfen wir nach DIN VDE 0100-600 (Isolationswiderstand, Schleifenimpedanz, FI-Auslösung) und übergeben das Protokoll. Das verlangen Versicherer und Käufer immer häufiger."],
      ["Widerrufsrecht", "Schließen wir den Vertrag bei Ihnen zu Hause, haben Sie als Verbraucher ein 14-tägiges Widerrufsrecht; Sie erhalten die Belehrung mit dem Angebot. Wir beginnen vor Ablauf der Frist nur auf Ihren ausdrücklichen Wunsch."],
    ],
    costNote: costDefault,
    why: [
      ["Ein Meister, der selbst Hand anlegt", "Planung und Ausführung liegen bei derselben Person."],
      ["Zukunftssicher geplant", "Leerrohre, Reserveplätze im Verteiler und ein Zählerplatz, der PV, Wallbox und Wärmepumpe später aufnimmt."],
      ["Ordentlich hinterlassen", "Staubschutz, Abdeckungen, besenrein. Beschriftete Verteilung und Protokoll zum Schluss."],
    ],
    faq: [
      ["Kann ich in der Wohnung bleiben?", "In der Regel ja, mit Einschränkungen: Wir arbeiten raumweise, halten Stromkreise so lange wie möglich in Betrieb und räumen abends auf. Bei Komplettsanierungen ist ein Ausweichen für einige Tage angenehmer."],
      faqFi,
      ["Welche Schalterprogramme verbauen Sie?", "Wir sind herstellerneutral. Sie wählen Design und Preisklasse, wir kümmern uns um den Rest."],
      ["Bekomme ich ein Prüfprotokoll?", "Ja, nach DIN VDE 0100-600 zu jeder Neu- und Änderungsinstallation. Das Protokoll gehört zu den Unterlagen Ihres Hauses."],
    ],
    related: ["zaehlerschrank-sicherungskasten", "e-check", "smart-home"],
  },
  {
    slug: "zaehlerschrank-sicherungskasten", name: "Zählerschrank & Sicherungskasten", icon: "PanelTop", group: "installation",
    short: "Alte Verteilung raus, normgerechter Zählerplatz rein – vorbereitet für PV, Wallbox und Wärmepumpe.",
    title: "Zählerschrank & Sicherungskasten erneuern Düsseldorf",
    description: "Zählerschrank oder Sicherungskasten erneuern in Düsseldorf: TAB-konform, FI/LS-Schutz, vorbereitet für PV, Wallbox und Wärmepumpe. Anmeldung inklusive.",
    h1: "Zählerschrank und Sicherungskasten erneuern – sicher, normgerecht, zukunftsfähig",
    intro: "Der Zählerschrank ist das Herz Ihrer Elektroanlage – und in vielen Düsseldorfer Häusern 30 bis 50 Jahre alt. Spätestens wenn Photovoltaik, Wallbox oder Wärmepumpe kommen, reicht der alte Platz nicht mehr. Wir erneuern Zählerplatz und Verteilung nach den Technischen Anschlussbedingungen der Netzgesellschaft Düsseldorf, übernehmen die Anmeldung und den Zählerwechsel und bauen die Reserve für morgen gleich ein.",
    occasions: [
      "Schraubsicherungen, kein FI-Schutz, keine Beschriftung – die Verteilung ist schlicht alt",
      "PV-Anlage, Speicher, Wallbox oder Wärmepumpe geplant: Zählerplatz, Zweitzähler oder Steuerbox brauchen Platz",
      "Netzbetreiber verlangt einen normgerechten Zählerplatz für den Zählerwechsel (Smart Meter / moderne Messeinrichtung)",
      "Wohnungskauf oder Vermietung: Sicherheit nachrüsten, Haftung minimieren",
      "Sicherungen fliegen regelmäßig, Verteiler ist voll, keine Reserve",
      "Aufteilung von Stromkreisen bei Umbau, Einliegerwohnung, Home-Office",
    ],
    scope: [
      "Bestandsaufnahme: Zählerplatz, Hauptleitung, Hausanschluss, Potentialausgleich, Leitungsnetz",
      "Neuer Zählerschrank nach VDE-AR-N 4100 und den TAB der Netzgesellschaft Düsseldorf – mit Zählerfeld(ern), APZ-Feld, Platz für Smart-Meter-Gateway und Steuerbox (§ 14a EnWG)",
      "SLS-Schalter (selektiver Hauptleitungsschutz), Überspannungsschutz Typ 1/2, FI-Schutzschalter, Leitungsschutzschalter, Reserveplätze",
      "Unterverteilungen in Wohnungen oder Etagen, Aufteilung und Beschriftung aller Stromkreise",
      "Anmeldung beim Netzbetreiber, Beantragung von Zählerwechsel/Zweitzähler, Terminabstimmung mit dem Messstellenbetreiber",
      "Vorbereitung für PV (Einspeisezähler/Zweirichtungszähler), Wallbox und Wärmepumpe (getrennte Messung für Netzentgelt-Modul 2)",
      "Prüfung nach DIN VDE 0100-600, Protokoll, Schaltplan an der Schranktür",
    ],
    steps: [
      ["Fotos schicken", "Ein Foto vom offenen Zählerschrank und vom Hausanschluss reicht für eine erste Einschätzung."],
      ["Vor-Ort-Termin", "Maße, Leitungsführung, Stromkreise, Wünsche. Wir klären, ob der Netzbetreiber einen Zählerwechsel verlangt."],
      ["Angebot und Anmeldung", "Festpreis-Angebot; nach Auftrag melden wir die Änderung bei der Netzgesellschaft Düsseldorf an und koordinieren den Zählertermin."],
      ["Umbau an einem Tag", "In den meisten Einfamilienhäusern ist die Anlage nach 6–10 Stunden wieder in Betrieb; Sie erhalten Protokoll, Schaltplan und Einweisung."],
    ],
    know: [
      ["Wer darf?", "Arbeiten am Zählerplatz und der Hauptleitung dürfen nur Installationsunternehmen ausführen, die im Installateurverzeichnis eines Netzbetreibers eingetragen sind (§ 13 Abs. 2 NAV). Wir sind bei der Netzgesellschaft Düsseldorf eingetragen und stellen die Anträge für Sie."],
      ["Überspannungsschutz", "Er ist bei Neuerrichtung oder Änderung des Zählerplatzes vorgeschrieben (DIN VDE 0100-443/-534) – er schützt Wechselrichter, Wallbox, Wärmepumpe und Elektronik im Haus."],
      ["§ 14a EnWG", "Neue Wallboxen, Wärmepumpen, Speicher und Klimageräte über 4,2 kW müssen seit 2024 vom Netzbetreiber steuerbar sein. Dafür braucht der Zählerschrank Platz für Steuerbox und ggf. einen separaten Zähler. Wer das jetzt einplant, spart den zweiten Umbau."],
      ["0 % Mehrwertsteuer", "Wird der Zählerschrank im Zusammenhang mit der Installation einer PV-Anlage erneuert, fällt darauf wie auf die Anlage selbst 0 % USt an (§ 12 Abs. 3 UStG, BMF-Schreiben vom 30.11.2023). Ohne PV: 19 %."],
      ["Bestandsschutz", "Sie müssen einen alten Zählerschrank nicht erneuern, solange er nicht geändert wird. Wir sagen Ihnen, ob Ihr Vorhaben eine Erneuerung auslöst oder ob eine Erweiterung reicht."],
    ],
    costNote: costDefault,
    why: [
      ["Wir denken drei Schritte weiter", "Jeder Zählerschrank, den wir bauen, hat Platz für das, was in den nächsten zehn Jahren kommt."],
      ["Ein Ansprechpartner für Netzbetreiber und Messstellenbetreiber", "Sie müssen nicht selbst hinterhertelefonieren."],
      ["Sauber beschriftet", "Jeder Stromkreis hat einen Namen, der Schaltplan hängt an der Tür."],
    ],
    faq: [
      ["Muss ich den Zählerschrank für eine Wallbox erneuern?", "Nicht immer. Reicht Platz für den zusätzlichen Stromkreis und den FI-Schutz, und ist der Zählerplatz normgerecht, genügt oft eine Erweiterung. Bei alten Verteilungen ohne Reserve oder mit Schraubsicherungen führt der Weg meist über eine neue Verteilung. Wir sagen Ihnen nach dem Vor-Ort-Termin klar, welche Variante nötig ist."],
      ["Wie lange ist der Strom weg?", "Beim Tausch der Verteilung in einem Einfamilienhaus meist 4–8 Stunden am Umbautag. Kühlschrank und Tiefkühler überstehen das geschlossen problemlos."],
      ["Wer wechselt den Zähler?", "Der Zähler gehört dem Messstellenbetreiber (in Düsseldorf in der Regel die Netzgesellschaft Düsseldorf). Wir beantragen den Wechsel und stimmen den Termin ab."],
      ["Was ist ein SLS-Schalter?", "Ein selektiver Hauptleitungsschutzschalter ersetzt die alten Panzersicherungen vor dem Zähler. Er ist in neuen Zählerplätzen vorgeschrieben und lässt sich ohne Netzbetreiber wieder einschalten."],
    ],
    related: ["photovoltaik", "wallbox", "elektroinstallation"],
  },
  {
    slug: "photovoltaik", name: "Photovoltaik & Speicher", icon: "Sun", group: "energie",
    short: "Planung, Installation, Zählerschrank und Netzanmeldung aus einer Hand – mit 0 % Mehrwertsteuer.",
    title: "Photovoltaik Düsseldorf vom Elektromeister | Nahad Energie",
    description: "PV-Anlage mit Speicher in Düsseldorf: Planung, Montage, Zählerschrank, Netzanmeldung und Inbetriebnahme aus einer Hand. 0 % MwSt. auf PV.",
    h1: "Photovoltaik in Düsseldorf – geplant und installiert vom Elektromeister",
    intro: "Eine PV-Anlage ist zuerst eine elektrische Anlage: Wechselrichter, Speicher, Zählerschrank, Überspannungsschutz, Anmeldung und Inbetriebsetzung entscheiden darüber, ob sie 25 Jahre sicher läuft. Wir planen Ihre Anlage als Elektro-Meisterbetrieb, installieren sie komplett und bringen sie beim Netzbetreiber ans Netz – mit 0 % Mehrwertsteuer auf Module, Speicher und Zählerschrank.",
    occasions: [
      "Stromkosten senken und unabhängiger werden – Einfamilienhaus, Doppelhaus, Reihenhaus",
      "E-Auto kommt: PV-Überschuss in die Wallbox laden",
      "Wärmepumpe geplant: Eigenstrom für die Heizung nutzen",
      "Bestehende PV-Anlage um Speicher erweitern („Stromspeicher nachrüsten“)",
      "Balkonkraftwerk fachgerecht anschließen und registrieren",
      "Mehrfamilienhaus/WEG: Anlage für Allgemeinstrom oder Mieterstrom vorbereiten",
    ],
    scope: [
      "Bedarfsanalyse: Jahresverbrauch, Lastprofil, E-Auto, Wärmepumpe, Dachflächen und Ausrichtung – Ertragsabschätzung und Wirtschaftlichkeitsrechnung",
      "Auslegung von Modulen, Wechselrichter, Speicher und Energiemanagement (PV-Überschussladen, Wärmepumpen-Steuerung)",
      "DC- und AC-Installation, Wechselrichter, Speicher, Überspannungsschutz, Potentialausgleich, Kennzeichnung",
      "Zählerschrank-Anpassung oder -Erneuerung, Zweirichtungszähler, Netzanmeldung und Inbetriebsetzung bei der Netzgesellschaft Düsseldorf",
      "Registrierung im Marktstammdatenregister (gemeinsam mit Ihnen), Unterlagen für Einspeisevergütung und Steuer",
      "Monitoring einrichten, Einweisung, Prüfprotokoll nach DIN VDE 0100-600 und VDE 0126-23",
      "Speicher-Nachrüstung an bestehenden Anlagen, Wallbox-Integration, Notstrom-/Ersatzstromfunktion auf Wunsch",
    ],
    steps: [
      ["Anfrage mit Adresse und Stromverbrauch", "Wir prüfen Dachausrichtung und Verschattung vorab per Luftbild."],
      ["Vor-Ort-Termin", "Dach, Kabelwege, Zählerschrank, Speicherstandort, Wünsche (Wallbox, Wärmepumpe, Notstrom)."],
      ["Angebot mit Ertragsprognose", "Komponenten, Leistung in kWp, Speichergröße, Festpreis mit 0 % MwSt., Zeitplan, Belehrungen."],
      ["Installation und Inbetriebnahme", "Montage 1–3 Tage, Netzanmeldung, Zählertausch, Inbetriebsetzung, Marktstammdatenregister, Einweisung ins Monitoring."],
    ],
    knowHeading: `Das sollten Sie wissen (Stand ${standDate})`,
    know: [
      ["0 % Mehrwertsteuer", "Auf Lieferung und Installation von PV-Anlagen bis 30 kWp auf oder an Wohngebäuden – einschließlich Speicher, Wechselrichter, Montage und der im Zusammenhang erneuerten Zählerschränke (§ 12 Abs. 3 UStG). Nicht begünstigt: Wallbox, Wärmepumpe."],
      ["Einspeisevergütung", "Für Anlagen bis 10 kWp mit Inbetriebnahme zwischen 01.08.2026 und 31.01.2027 gilt eine feste Vergütung von 7,70 ct/kWh (Teileinspeisung) bzw. 12,22 ct/kWh (Volleinspeisung) für 20 Jahre. Für Inbetriebnahmen ab 2027 wird eine Reform der festen Vergütung diskutiert – wer 2026 in Betrieb geht, sichert sich die geltende Regelung."],
      ["Anmeldung", "Die Netzanmeldung und die Inbetriebsetzung darf nur ein eingetragenes Installationsunternehmen stellen; die Registrierung im Marktstammdatenregister muss innerhalb eines Monats nach Inbetriebnahme erfolgen."],
      ["Speicher über 4,2 kW", "Sie gelten als steuerbare Verbrauchseinrichtung nach § 14a EnWG – die Steuerbarkeit planen wir mit ein."],
      ["Förderung in Düsseldorf", "Das städtische Programm „Klimafreundliches Wohnen und Arbeiten“ ist seit dem 23.01.2026 ausgesetzt; NRW-Zuschüsse für private Speicher sind beendet; die KfW bietet den Förderkredit 270. Wir sagen Ihnen, was zum Zeitpunkt Ihrer Anfrage tatsächlich gilt – und werben nicht mit Programmen, die es nicht mehr gibt."],
      ["Balkonkraftwerke", "Bis 800 W Wechselrichterleistung und 2.000 Wp Modulleistung nur noch im Marktstammdatenregister zu registrieren; der Anschluss über eine geeignete Steckdose ist unter Bedingungen zulässig (DIN VDE V 0126-95). Wir setzen eine Einspeisesteckdose mit eigenem Stromkreis, wenn Ihre Installation das erfordert."],
    ],
    costNote: "Preise hängen von Dach, Komponenten und Zählerschrank ab; verbindlich ist das schriftliche Angebot mit Ertragsprognose. PV-Anlagen auf Wohngebäuden: 0 % MwSt.",
    why: [
      ["PV vom Elektromeister, nicht vom Vertrieb", "Der, der plant, installiert auch, und haftet dafür."],
      ["Zählerschrank, Wallbox, Wärmepumpe gleich mitgedacht", "Keine zweite Baustelle in zwei Jahren."],
      ["Ehrliche Ertragsprognose", "Wir rechnen mit realistischen Eigenverbrauchsquoten und sagen auch, wenn sich ein Speicher bei Ihnen nicht rechnet."],
    ],
    faq: [
      faqPv,
      ["Brauche ich einen Speicher?", "Ohne Speicher liegt der Eigenverbrauch meist bei 25–35 %, mit passend dimensioniertem Speicher bei 60–80 %. Ob sich das rechnet, hängt von Ihrem Verbrauch am Abend und den Strompreisen ab – wir zeigen beide Varianten im Angebot."],
      ["Wie lange dauert es von der Anfrage bis zur Inbetriebnahme?", "Planung und Angebot 1–2 Wochen, Lieferung und Montage je nach Komponenten 4–8 Wochen, Netzanmeldung und Zählertausch parallel. Typisch sind 6–10 Wochen bis zum ersten eingespeisten Kilowatt."],
      ["Erledigen Sie die Anmeldungen?", "Netzanmeldung und Inbetriebsetzung beim Netzbetreiber übernehmen wir; das Marktstammdatenregister richten wir mit Ihnen gemeinsam ein, weil der Account auf Sie läuft."],
      ["Kann ich eine bestehende Anlage um Speicher oder Wallbox erweitern?", "Ja. AC-gekoppelte Speicher passen zu fast jeder Bestandsanlage; für PV-Überschussladen braucht die Wallbox eine Verbindung zum Energiemanagement – das prüfen wir am Wechselrichter."],
    ],
    related: ["wallbox", "zaehlerschrank-sicherungskasten", "waermepumpe-elektroanschluss"],
  },
  {
    slug: "wallbox", name: "Wallbox", icon: "PlugZap", group: "energie",
    short: "11 oder 22 kW, Lastmanagement, Anmeldung beim Netzbetreiber und § 14a EnWG inklusive.",
    title: "Wallbox Installation Düsseldorf – inkl. Anmeldung | Nahad",
    description: "Wallbox in Düsseldorf installieren lassen: 11 oder 22 kW, Lastmanagement, § 14a EnWG, Anmeldung beim Netzbetreiber. Festpreis nach Vor-Ort-Check.",
    h1: "Wallbox-Installation in Düsseldorf – inklusive Netzanmeldung und § 14a",
    intro: "Eine Wallbox ist in zwei Stunden montiert – die Arbeit steckt davor: Reicht der Hausanschluss? Ist der Zählerschrank bereit? Welcher FI-Schutz? Wie wird die Anlage beim Netzbetreiber angemeldet und steuerbar gemacht? Wir übernehmen den kompletten Weg von der Prüfung vor Ort bis zum ersten Ladevorgang – für Einfamilienhäuser, Tiefgaragen und Firmenparkplätze in Düsseldorf.",
    occasions: [
      "Erstes E-Auto oder Plug-in-Hybrid – Laden zu Hause statt an der Säule",
      "Wallbox mit PV-Überschuss laden",
      "Zwei Fahrzeuge, ein Hausanschluss: Lastmanagement nötig",
      "Tiefgarage einer Eigentümergemeinschaft: mehrere Ladepunkte, faire Abrechnung, Förderung",
      "Firmenparkplatz: Laden für Mitarbeitende und Dienstwagen mit Abrechnung",
      "Bestehende Wallbox anmelden oder auf § 14a-Steuerbarkeit umrüsten",
    ],
    scope: [
      "Vor-Ort-Check: Hausanschlussleistung, Zählerschrank, Leitungsweg, Montageort, Kabelmanagement",
      "Beratung zur Wallbox: 11 kW oder 22 kW, mit/ohne Kabel, PV-Überschussladen, Zugangsschutz, Abrechnung (MID-Zähler, RFID, Backend)",
      "Eigener Stromkreis mit passender Zuleitung, FI-Schutz Typ A-EV oder Typ B, Leitungsschutz, Überspannungsschutz",
      "Montage, Inbetriebnahme, Prüfung nach DIN VDE 0100-600 und DIN VDE 0100-722 (Stromversorgung von Elektrofahrzeugen), Protokoll",
      "Anmeldung beim Netzbetreiber ab 3,6 kW, Anmeldung als steuerbare Verbrauchseinrichtung nach § 14a EnWG ab 4,2 kW, Genehmigungsantrag über 12 kW",
      "Dynamisches Lastmanagement für mehrere Ladepunkte, Anbindung an Energiemanagement/PV",
      "Tiefgaragen: Grundinstallation (Vorverkabelung), Zählerkonzept, Abrechnungslösung, Unterlagen für WEG-Beschluss und Förderantrag",
    ],
    steps: [
      ["Anfrage mit Fotos", "Von Zählerschrank und Montageort sowie Angabe des Fahrzeugs."],
      ["Vor-Ort-Check", "Leitungsweg messen, Anschlussleistung prüfen, Wallbox auswählen."],
      ["Festpreis-Angebot und Anmeldung", "Nach Auftrag melden wir die Wallbox beim Netzbetreiber an (Anmeldung ab 3,6 kW ist Pflicht, über 12 kW genehmigungspflichtig)."],
      ["Installation an einem Termin", "Zuleitung, Schutzorgane, Wallbox, Steuerung, Prüfung, Einweisung. Meist 3–6 Stunden."],
    ],
    knowHeading: `Das sollten Sie wissen (Stand ${standDate})`,
    know: [
      ["Anmeldepflicht", "Ladepunkte ab 3,6 kW müssen beim Netzbetreiber angemeldet werden, über 12 kW ist eine Genehmigung erforderlich. Die Anmeldung stellt das Installationsunternehmen."],
      ["§ 14a EnWG", "Wallboxen über 4,2 kW, die seit dem 01.01.2024 in Betrieb gehen, müssen vom Netzbetreiber im Netzengpass dimmbar sein – auf mindestens 4,2 kW, das reicht für rund 50 km Reichweite pro Stunde. Im Gegenzug erhalten Sie reduzierte Netzentgelte: Modul 1 pauschal 110–190 € pro Jahr, Modul 2 60 % Rabatt auf den Arbeitspreis mit separatem Zähler, Modul 3 zeitvariabel."],
      ["Mehrwertsteuer", "Auf Wallboxen gilt der reguläre Satz von 19 % – die 0 %-Regel der PV gilt hier nicht."],
      ["Förderung", "KfW 442 und die NRW-Wallbox-Förderung sind beendet, das Düsseldorfer Stadtprogramm fördert derzeit keine Wallboxen. Aktiv ist das Bundesprogramm „Laden im Mehrparteienhaus“ für WEG, Vermieter und kleine Unternehmen: bis 1.300 € je Stellplatz (Grundinstallation), 1.500 € mit Wallbox, 2.000 € bei bidirektionalem Laden; Anträge bis 10.11.2026, Bedingung u. a. Vorverkabelung von mindestens 20 % der Stellplätze oder mindestens 6 Ladepunkte."],
      ["Recht auf Ladepunkt", "Wohnungseigentümer haben einen Anspruch auf eine Lademöglichkeit (§ 20 Abs. 2 WEG), Mieter auf Zustimmung des Vermieters (§ 554 BGB). Wir liefern die technische Grundlage für den Beschluss."],
    ],
    costNote: "Verbindlich ist das schriftliche Festpreis-Angebot nach dem Vor-Ort-Check. Das Wallbox-Gerät wird im Angebot getrennt ausgewiesen. Wallboxen: 19 % MwSt.",
    why: [
      ["Anmeldung und § 14a inklusive", "Sie bekommen den Netzentgelt-Rabatt von Anfang an."],
      ["PV-Überschussladen richtig eingebunden", "Wir kennen beide Seiten, Wechselrichter und Wallbox."],
      ["Tiefgaragen aus einer Hand", "Zählerkonzept, Lastmanagement und Förderunterlagen von einem Betrieb."],
    ],
    faq: [
      ["11 kW oder 22 kW?", "Für fast alle Privathaushalte 11 kW: über Nacht sind 60–70 kWh geladen, die Anmeldung ist einfacher, viele Fahrzeuge laden ohnehin nur mit 11 kW AC. 22 kW lohnt sich bei Firmen oder wenn mehrere Autos schnell nacheinander laden."],
      ["Darf ich die Wallbox selbst montieren und Sie schließen nur an?", "Die elektrische Installation und Anmeldung muss durch einen eingetragenen Fachbetrieb erfolgen; die reine Wandmontage könnten Sie übernehmen, in der Praxis ist es zusammen günstiger und sicherer."],
      ["Was bedeutet „dimmbar“ nach § 14a für mich?", "Nur im seltenen Fall eines Netzengpasses darf der Netzbetreiber die Leistung zeitweise auf 4,2 kW reduzieren – Ihr Auto lädt weiter, nur langsamer. Dafür zahlen Sie dauerhaft weniger Netzentgelt."],
      ["Können Sie eine vorhandene Wallbox nachträglich anmelden?", "Ja. Wir prüfen die Installation, ergänzen fehlende Schutzorgane und melden die Anlage beim Netzbetreiber nach."],
      ["Welche Wallbox empfehlen Sie?", "Das hängt von PV, Abrechnung und Budget ab. Wir verbauen herstellerneutral und nennen im Angebot zwei Varianten mit Vor- und Nachteilen."],
    ],
    related: ["photovoltaik", "zaehlerschrank-sicherungskasten", "gewerbe-hausverwaltung"],
  },
  {
    slug: "waermepumpe-elektroanschluss", name: "Wärmepumpe – Elektroanschluss", icon: "Thermometer", group: "energie",
    short: "Zuleitung, Zählerschrank und Anmeldung, damit Ihre neue Heizung ans Netz darf.",
    title: "Wärmepumpe Elektroanschluss Düsseldorf | Nahad Energie",
    description: "Elektroanschluss für Ihre Wärmepumpe in Düsseldorf: Zuleitung, Zählerschrank, § 14a-Anmeldung, Netzentgelt-Rabatt. Abstimmung mit Ihrem Heizungsbauer.",
    h1: "Elektroanschluss für Wärmepumpen – damit die Heizung ans Netz darf",
    intro: "Der Heizungsbauer liefert die Wärmepumpe – aber ohne den passenden Elektroanschluss bleibt sie kalt. Wir legen die Zuleitung, sichern richtig ab, schaffen Platz im Zählerschrank, melden die Anlage als steuerbare Verbrauchseinrichtung an und sorgen dafür, dass Sie den reduzierten Netzentgelt-Beitrag bekommen. Abgestimmt mit Ihrem Heizungsbauer, bevor das Gerät auf dem Hof steht.",
    occasions: [
      "Heizungstausch Gas/Öl → Wärmepumpe im Einfamilienhaus",
      "Wärmepumpe im Neubau: Zuleitung, Zähler, Steuerung von Anfang an mitplanen",
      "Heizungsbauer verlangt Elektroanschluss durch Fachbetrieb mit Netzbetreiber-Zulassung",
      "Zählerschrank zu klein für Wärmepumpen-Zähler und Steuerbox",
      "Kombination mit PV-Anlage und Speicher: Eigenstrom für die Heizung",
    ],
    scope: [
      "Abstimmung mit Heizungsbauer: Anschlussleistung, Anlaufstrom, Heizstab, Steuerleitungen (SG-Ready/EVU-Sperre), Standort Außeneinheit",
      "Eigene Zuleitung mit passendem Querschnitt, Leitungsschutz, FI-Schutz, Reparaturschalter an der Außeneinheit, Überspannungsschutz",
      "Zählerschrank: Prüfung, Erweiterung oder Erneuerung; separater Zähler für Netzentgelt-Modul 2 („Wärmepumpentarif“); Platz für Steuerbox",
      "Anmeldung beim Netzbetreiber und als steuerbare Verbrauchseinrichtung nach § 14a EnWG",
      "Einbindung ins Energiemanagement (PV-Überschuss), Protokoll nach DIN VDE 0100-600",
    ],
    steps: [
      ["Anfrage mit Datenblatt der Wärmepumpe", "Oder Angebot des Heizungsbauers – und ein Foto vom Zählerschrank."],
      ["Vor-Ort-Termin", "Leitungsweg, Zählerschrank, Standort Außen-/Inneneinheit, Abstimmung mit dem Heizungsbauer."],
      ["Angebot und Anmeldung", "Festpreis; Anmeldung beim Netzbetreiber vor Inbetriebnahme."],
      ["Installation vor der Heizungsmontage", "Zuleitung und Zählerschrank, danach Anschluss und Inbetriebnahme gemeinsam mit dem Heizungsbauer."],
    ],
    knowHeading: `Das sollten Sie wissen (Stand ${standDate})`,
    know: [
      ["§ 14a EnWG", "Wärmepumpen über 4,2 kW elektrischer Leistung sind seit 2024 anmelde- und steuerpflichtig. Im Gegenzug sinken die Netzentgelte – Modul 1 pauschal 110–190 €/Jahr, Modul 2 mit separatem Zähler 60 % Rabatt auf den Netzentgelt-Arbeitspreis. Bei einer Wärmepumpe mit 4.000–6.000 kWh Jahresverbrauch ist Modul 2 oft die günstigere Wahl – wir rechnen es vor."],
      ["Zähler und Tarif", "Ein separater Wärmepumpenzähler ermöglicht spezielle Wärmepumpen-Stromtarife; der Zählerplatz muss dafür vorhanden sein."],
      ["Mehrwertsteuer", "19 %. Eine Wärmepumpe ist keine PV-Komponente."],
      ["Förderung", "Die Bundesförderung (BEG) für die Wärmepumpe selbst beantragt in der Regel Ihr Heizungsbauer oder Energieberater; elektrische Nebenarbeiten sind dort als Umfeldmaßnahme förderfähig – lassen Sie unser Angebot in den Antrag aufnehmen."],
    ],
    costNote: costDefault,
    why: [
      ["Wir sprechen die Sprache des Heizungsbauers", "SG-Ready, EVU-Sperre, Anlaufstrom sind uns vertraut."],
      ["Modul 1 oder 2? Wir rechnen es vor", "Damit Sie nicht Jahr für Jahr Geld liegen lassen."],
      ["Ein Umbau statt zwei", "Zählerschrank für Wärmepumpe, PV und Wallbox in einem Schritt."],
    ],
    faq: [
      ["Braucht die Wärmepumpe einen eigenen Zähler?", "Nicht zwingend. Für Netzentgelt-Modul 2 und spezielle Wärmepumpentarife ja; bei kleinem Verbrauch reicht Modul 1 mit gemeinsamem Zähler. Wir vergleichen beide Varianten anhand Ihres Verbrauchs."],
      ["Kann die Wärmepumpe vom Netzbetreiber abgeschaltet werden?", "Nein. Nach § 14a darf die Leistung im Netzengpass auf mindestens 4,2 kW gedimmt werden; ganz abgeschaltet wird nicht. Der Wärmespeicher überbrückt solche Phasen problemlos."],
      ["Wann müssen Sie kommen – vor oder nach dem Heizungsbauer?", "Zuleitung und Zählerschrank vor der Heizungsmontage, den Anschluss der Geräte am Tag der Inbetriebnahme. Wir stimmen die Termine direkt mit dem Heizungsbauer ab."],
    ],
    related: ["zaehlerschrank-sicherungskasten", "photovoltaik", "wallbox"],
  },
  {
    slug: "smart-home", name: "Smart Home", icon: "House", group: "komfort",
    short: "Licht, Rollläden, Heizung und Energie steuern – KNX oder Funk, herstellerneutral geplant.",
    title: "Smart Home & KNX Düsseldorf – Meisterbetrieb | Nahad",
    description: "Smart Home in Düsseldorf: Licht, Rollläden, Heizung und Energie steuern – KNX oder Funk, herstellerneutral geplant und sauber installiert.",
    h1: "Smart Home in Düsseldorf – Komfort und Energieeffizienz, die funktionieren",
    intro: "Smart Home heißt für uns nicht „noch eine App“, sondern eine Elektroinstallation, die mitdenkt: Licht, das sich der Tageszeit anpasst, Rollläden nach Sonnenstand, Heizung nach Anwesenheit und ein Energiemanagement, das PV-Strom zuerst in Wallbox und Wärmepumpe schickt. Wir planen herstellerneutral – KNX für Neubau und Kernsanierung, Funk für den Bestand – und installieren so, dass es in zehn Jahren noch läuft.",
    occasions: [
      "Neubau oder Kernsanierung: Bussystem (KNX) statt konventioneller Verdrahtung",
      "Bestandswohnung: Licht, Rollläden und Heizung per Funk nachrüsten – ohne Wände aufzureißen",
      "Energiemanagement für PV, Speicher, Wallbox und Wärmepumpe",
      "Sicherheit und Komfort: Anwesenheitssimulation, Türkommunikation, Beschattung, Szenen",
      "Barrierearmes Wohnen: Bedienung per Taster, Sprache oder Tablet",
    ],
    scope: [
      "Bedarfsanalyse und Funktionsplanung: Was soll automatisch passieren, was manuell bleiben?",
      "KNX-Installation (Bus, Aktoren, Sensoren, Visualisierung), Programmierung und Dokumentation",
      "Funk-Systeme für den Bestand (z. B. Homematic IP, Shelly, Zigbee-basierte Systeme – herstellerneutral, lokal steuerbar)",
      "Licht (Dimmen, Farbtemperatur, Szenen), Beschattung, Einzelraumregelung Heizung, Lüftung",
      "Energiemanagement: PV-Überschuss in Wallbox, Wärmepumpe, Speicher; Verbrauchsanzeige",
      "Integration von Türsprechanlage, Rauchwarnmeldern, Bewegungsmeldern; Fernzugriff nur auf Wunsch und verschlüsselt",
      "Einweisung, Dokumentation, Anpassung nach den ersten Wochen im Betrieb",
    ],
    steps: [
      ["Gespräch über Ihren Alltag", "Wir fragen nach Gewohnheiten, nicht nach Produkten."],
      ["Funktionsliste und Systemempfehlung", "KNX oder Funk, Raum für Raum, mit Ausbaustufen."],
      ["Angebot mit Festpreis", "Hardware, Installation, Programmierung, Einweisung."],
      ["Installation, Inbetriebnahme, Feintuning", "Nach 4–6 Wochen Betrieb stellen wir Schaltzeiten und Szenen mit Ihnen nach."],
    ],
    know: [
      ["KNX", "Ein offener, herstellerübergreifender Standard mit über 500 Herstellern – Sie sind nicht von einer Firma oder einer Cloud abhängig. Für Neubau und Kernsanierung die langlebigste Lösung."],
      ["Funk im Bestand", "Gute Funksysteme laufen lokal ohne Internet; Cloud-Zwang und Abo-Modelle vermeiden wir, wo es geht."],
      ["Datenschutz", "Wir bevorzugen Systeme, deren Daten im Haus bleiben. Fernzugriff richten wir nur auf Wunsch und mit sicherer Anmeldung ein."],
      ["Energie sparen", "Einzelraumregelung und Beschattungsautomatik senken den Heiz- und Kühlbedarf spürbar; die konkrete Einsparung hängt von Gebäude und Nutzung ab – wir nennen keine pauschalen Prozentwerte."],
    ],
    costNote: costDefault,
    why: [
      ["Elektroinstallation und Automation aus einer Hand", "Die Automation ist Teil der Anlage, kein Aufsatz."],
      ["Herstellerneutral und lokal", "Wir verkaufen keine Plattform, sondern Funktion."],
      ["Dokumentiert", "Projektdatei, Adressliste, Beschreibung: Sie behalten die Kontrolle über Ihr Haus."],
    ],
    faq: [
      ["Funktioniert das Smart Home auch ohne Internet?", "Bei KNX und den von uns bevorzugten Funksystemen ja – die Steuerung läuft lokal. Internet brauchen Sie nur für Fernzugriff und Sprachassistenten."],
      ["Kann ich klein anfangen und später erweitern?", "Ja. Wir planen Ausbaustufen: erst Licht und Rollläden, später Heizung und Energiemanagement. Bei KNX legen wir die Busleitung überall hin, wo später etwas kommen könnte."],
      ["Was passiert, wenn ein Hersteller vom Markt geht?", "Bei KNX nichts – Komponenten anderer Hersteller passen. Bei Funk wählen wir Systeme mit offenen Standards, um das Risiko klein zu halten."],
    ],
    related: ["beleuchtung-led", "elektroinstallation", "photovoltaik"],
  },
  {
    slug: "e-check", name: "E-CHECK – Prüfung elektrischer Anlagen", icon: "ClipboardCheck", group: "installation",
    short: "Sicherheit mit Protokoll für Eigentümer, Vermieter und Käufer.",
    title: "E-CHECK Düsseldorf – Prüfung elektrischer Anlagen | Nahad",
    description: "Prüfung elektrischer Anlagen in Düsseldorf nach DIN VDE mit Protokoll – für Eigentümer, Vermieter und Käufer.",
    h1: "Prüfung elektrischer Anlagen in Düsseldorf – Sicherheit mit Protokoll",
    intro: "Elektrische Anlagen altern unsichtbar: Klemmen lockern sich, Isolierungen werden brüchig, Schutzschalter lösen nicht mehr sicher aus. Unser E-CHECK prüft Ihre Anlage nach DIN VDE 0105-100 und DIN VDE 0100-600 – mit Messungen, Sichtprüfung und einem Protokoll, das Mängel nach Dringlichkeit ordnet. Für Eigentümer, Vermieter, Käufer und Verkäufer in Düsseldorf.",
    occasions: [
      "Mieterwechsel: Anlage vor der Neuvermietung dokumentiert prüfen",
      "Hauskauf oder -verkauf: Zustand der Elektrik schwarz auf weiß",
      "Anlage älter als 30 Jahre, nie geprüft",
      "Versicherer oder Bank verlangen einen Nachweis",
      "Nach Wasserschaden, Brand oder Blitzeinschlag",
      "Regelmäßige Wiederholungsprüfung (Empfehlung: alle 4 Jahre)",
    ],
    scope: [
      "Sichtprüfung von Zählerschrank, Verteilungen, Leitungen, Steckdosen, Schaltern, Leuchten, festangeschlossenen Geräten",
      "Messungen: Schutzleiterwiderstand, Isolationswiderstand, Schleifenimpedanz, Auslösezeit und -strom der FI-Schutzschalter, Drehfeld",
      "Prüfung von Potentialausgleich, Erdung, Überspannungsschutz",
      "Rauchwarnmelder: Vorhandensein und Funktion (Pflicht in NRW nach § 47 Abs. 3 BauO NRW)",
      "Protokoll mit Mängelliste in drei Stufen (sofort beheben / zeitnah / Empfehlung), Fotos, Kostenschätzung für die Behebung",
      "E-CHECK-Plakette und Prüfprotokoll nach ZVEH-Richtlinie",
      "Auf Wunsch Behebung der Mängel zum Festpreis",
    ],
    steps: [
      ["Termin vereinbaren", "Angabe: Wohnung/Haus, Baujahr, Anzahl Verteilungen."],
      ["Prüfung vor Ort", "1,5–3 Stunden je nach Größe; Stromkreise werden kurz abgeschaltet."],
      ["Protokoll", "Innerhalb von 3 Werktagen per E-Mail, mit Priorisierung und Kostenschätzung."],
      ["Optional: Mängel beheben", "Festpreis-Angebot, Ausführung, Nachprüfung."],
    ],
    know: [
      ["Keine gesetzliche Prüfpflicht für Vermieter", "Aber eine Verkehrssicherungspflicht: Der BGH (Urteil vom 15.10.2008, VIII ZR 321/07) verlangt keine regelmäßige Generalinspektion, wohl aber die Beseitigung erkennbarer Gefahren. Eine dokumentierte Prüfung ist der einfachste Weg, dieser Pflicht nachzukommen – und im Schadensfall der Nachweis gegenüber Versicherung und Gericht."],
      ["Empfohlener Turnus", "DIN VDE 0105-100 empfiehlt für Wohnungen eine Wiederholungsprüfung alle 4 Jahre; der Fachverband empfiehlt Vermietern eine Prüfung bei jedem Mieterwechsel."],
      ["Umlagefähigkeit", "Kosten wiederkehrender Prüfungen können als Betriebskosten umgelegt werden, wenn der Mietvertrag dies vorsieht; einmalige Prüfungen sind Instandhaltung."],
      ["Gewerbe", "Für Betriebe gilt die DGUV Vorschrift 3 mit festen Fristen – siehe eigene Seite."],
    ],
    costNote: "Den Preis für Ihre Prüfung nennen wir vorab – abhängig von Wohnung oder Haus und Anzahl der Verteilungen. Mängelbehebung nach separatem Angebot.",
    why: [
      ["Ehrliches Ergebnis", "Wir unterscheiden zwischen „muss“ und „kann“ und begründen jede Empfehlung."],
      ["Ein Protokoll, das Sie verwenden können", "Für Mieter, Käufer, Versicherung, Bank."],
      ["Behebung aus einer Hand", "Wenn Sie möchten, aber ohne Verpflichtung."],
    ],
    faq: [
      ["Ist der E-CHECK für Vermieter Pflicht?", "Nein, eine gesetzliche Prüfpflicht gibt es nicht (BGH VIII ZR 321/07). Vermieter haften aber für erkennbare Gefahren; eine dokumentierte Prüfung alle vier Jahre oder bei Mieterwechsel ist die anerkannte Vorgehensweise."],
      ["Wie lange dauert die Prüfung?", "Wohnung 1,5–2 Stunden, Einfamilienhaus 2–3 Stunden. Der Strom ist für einzelne Messungen kurz abgeschaltet."],
      ["Was passiert, wenn Mängel gefunden werden?", "Sie erhalten eine Liste mit Priorität und Kostenschätzung. Gefährliche Mängel (z. B. fehlender Schutzleiter an einer Steckdose) sichern wir sofort ab, wenn Sie das wünschen. Der Auftrag zur Behebung ist freiwillig."],
      ["Wer darf elektrische Anlagen prüfen?", "Die Prüfung nach DIN VDE 0105-100 wird von einem Elektrofachbetrieb durchgeführt."],
    ],
    related: ["dguv-v3-pruefung", "zaehlerschrank-sicherungskasten", "elektroinstallation"],
  },
  {
    slug: "dguv-v3-pruefung", name: "DGUV V3 Prüfung", icon: "ShieldCheck", group: "installation",
    short: "Pflichtprüfung für Betriebe – planbar, dokumentiert, mit Fristenerinnerung.",
    title: "DGUV V3 Prüfung Düsseldorf – Betriebe & Büros | Nahad",
    description: "DGUV V3 Prüfung in Düsseldorf: ortsveränderliche Geräte und ortsfeste Anlagen, Prüfprotokoll, Fristenerinnerung. Für Büros, Praxen, Handwerk, Handel.",
    h1: "DGUV V3 Prüfung in Düsseldorf – rechtssicher, planbar, dokumentiert",
    intro: "Jeder Betrieb mit elektrischen Geräten und Anlagen muss diese nach DGUV Vorschrift 3 regelmäßig durch eine Elektrofachkraft prüfen lassen – vom Bürodrucker bis zur Unterverteilung. Wir prüfen ortsveränderliche Betriebsmittel und ortsfeste Anlagen, kennzeichnen mit Plakette, liefern Protokolle für Berufsgenossenschaft und Versicherung und erinnern Sie an den nächsten Termin. Für Büros, Praxen, Kanzleien, Handel, Gastronomie und Handwerk in Düsseldorf.",
    occasions: [
      "Neuer Betrieb, Umzug, neue Räume: Erstprüfung und Fristenplan",
      "Berufsgenossenschaft oder Versicherer fragt nach Prüfprotokollen",
      "Letzte Prüfung liegt länger als 2 Jahre zurück",
      "Hausverwaltung: Allgemeinanlagen in Wohn- und Geschäftshäusern",
      "Schulen, Kitas, Vereine, Praxen mit besonderen Anforderungen",
    ],
    scope: [
      "Ortsveränderliche Betriebsmittel (PCs, Drucker, Küchengeräte, Verlängerungen, Werkzeuge) nach DIN EN 50678/50699 (VDE 0701/0702): Sichtprüfung, Schutzleiter-, Isolations-, Berührungsstrom-Messung, Funktionsprüfung",
      "Ortsfeste Anlagen (Verteilungen, Stromkreise, Steckdosen, Beleuchtung) nach DIN VDE 0105-100",
      "Inventarisierung mit Geräte-ID, Prüfplaketten, Protokoll je Gerät und Anlage (PDF, auf Wunsch Excel)",
      "Fristenplanung nach Gefährdungsbeurteilung, Erinnerung vor Ablauf",
      "Sofortmaßnahmen bei gefährlichen Mängeln, Reparatur oder Austausch auf Wunsch",
      "Prüfung außerhalb Ihrer Geschäftszeiten möglich",
    ],
    steps: [
      ["Anfrage", "Mit Anzahl Geräte/Arbeitsplätze und Standort."],
      ["Angebot je Gerät/Anlage", "Pauschalen, Prüftermin, ggf. Begehung bei großen Objekten."],
      ["Prüfung vor Ort", "Störungsarm, Arbeitsplatz für Arbeitsplatz; typisch 60–100 Geräte pro Tag."],
      ["Protokolle und Plaketten", "Übergabe innerhalb von 5 Werktagen; Fristen im Kalender."],
    ],
    know: [
      ["Fristen (Richtwerte DGUV Vorschrift 3 / DGUV Information 203-071)", "Ortsveränderliche Geräte alle 6 Monate, in Büros bei geringer Fehlerquote bis 24 Monate; ortsfeste Anlagen alle 4 Jahre. Die konkrete Frist legt der Unternehmer auf Basis der Gefährdungsbeurteilung fest – wir schlagen sie vor."],
      ["Wer prüft", "Nur Elektrofachkräfte bzw. elektrotechnisch unterwiesene Personen unter Leitung einer Elektrofachkraft. Als Meisterbetrieb erfüllen wir das."],
      ["Folgen fehlender Prüfung", "Bußgelder, Regress der Berufsgenossenschaft im Schadensfall, Probleme mit der Sachversicherung, persönliche Haftung der Geschäftsführung."],
      ["Notbeleuchtung, RCD-Tests, Brandmeldeanlagen", "Sie haben eigene Prüfpflichten – wir weisen darauf hin und prüfen mit, wo wir qualifiziert sind."],
    ],
    costNote: "Für Gewerbekunden erstellen wir ein Angebot mit Festpreis je Gerät bzw. je Anlage – netto zzgl. 19 % MwSt., inklusive Plaketten und Protokoll.",
    why: [
      ["Fristen im Blick", "Wir erinnern Sie, bevor die Berufsgenossenschaft fragt."],
      ["Protokolle, die Prüfer akzeptieren", "Vollständig, je Gerät, mit Messwerten."],
      ["Störungsarm", "Auf Wunsch abends oder am Wochenende."],
    ],
    faq: [
      ["Wie oft muss die DGUV V3 Prüfung gemacht werden?", "Richtwert: ortsveränderliche Geräte alle 6 Monate, in Büros bei geringer Fehlerquote bis zu 24 Monate; ortsfeste Anlagen alle 4 Jahre. Die Frist ergibt sich aus der Gefährdungsbeurteilung Ihres Betriebs."],
      ["Was kostet die Prüfung pro Gerät?", "Das hängt von Anzahl und Erreichbarkeit der Geräte ab. Sie erhalten vorab ein Angebot mit Festpreis je Gerät."],
      ["Müssen auch private Geräte der Mitarbeitenden geprüft werden?", "Ja, sobald sie im Betrieb genutzt werden (z. B. Ladegeräte, Wasserkocher). Wir erfassen sie mit."],
      ["Brauche ich ein Verzeichnis meiner Geräte?", "Nein, wir erstellen es bei der Erstprüfung mit Geräte-IDs; danach wird es bei jeder Prüfung fortgeschrieben."],
    ],
    related: ["gewerbe-hausverwaltung", "beleuchtung-led", "e-check"],
  },
  {
    slug: "beleuchtung-led", name: "Beleuchtung & LED", icon: "Lightbulb", group: "komfort",
    short: "Umrüstung, Außenbeleuchtung, Lichtplanung – weniger Verbrauch, besseres Licht.",
    title: "Beleuchtung & LED-Umrüstung Düsseldorf | Nahad Energie",
    description: "Beleuchtung vom Elektriker in Düsseldorf: LED-Umrüstung, Außen- und Gartenbeleuchtung, Lichtplanung für Wohnung, Büro und Halle.",
    h1: "Beleuchtung und LED-Umrüstung – gutes Licht, weniger Verbrauch",
    intro: "Licht ist der Teil der Elektroinstallation, den Sie jeden Tag sehen. Wir planen Beleuchtung für Wohnräume, Büros, Verkaufsflächen und Hallen, rüsten alte Halogen- und Leuchtstofflampen auf LED um, installieren Außen- und Gartenbeleuchtung und binden alles in Bewegungsmelder, Zeitsteuerung oder Smart Home ein. Mit Blick auf Lichtqualität, Normen und Stromkosten.",
    occasions: [
      "Halogen- oder Leuchtstoffröhren im Büro, Laden, Treppenhaus oder in der Halle: Umrüstung auf LED",
      "Küche, Wohnzimmer, Bad: Lichtplanung mit Dimmen, Farbtemperatur, indirektem Licht",
      "Außenbeleuchtung: Hauseingang, Garten, Einfahrt, mit Bewegungsmelder oder Dämmerungsschalter",
      "Treppenhaus im Mehrfamilienhaus: LED mit Präsenzmelder statt Dauerlicht",
      "Notbeleuchtung und Sicherheitsleuchten im Gewerbe (Prüf- und Wartungspflicht)",
      "Arbeitsplätze nach ASR A3.4 richtig ausleuchten",
    ],
    scope: [
      "Lichtplanung: Beleuchtungsstärke (Lux), Farbtemperatur (2.700–4.000 K), Blendungsbegrenzung, Lichtverteilung – bei Bedarf mit Berechnung",
      "LED-Umrüstung: Leuchten tauschen oder Leuchtmittel/Treiber ersetzen, Bestandsleuchten fachgerecht umbauen",
      "Installation von Leuchten, Schienen, Einbaustrahlern, LED-Profilen, Außenleuchten (IP44/IP65)",
      "Steuerung: Dimmer, Bewegungs-/Präsenzmelder, Dämmerungsschalter, Zeitschaltuhren, DALI/KNX",
      "Notbeleuchtung: Sicherheitsleuchten, Rettungszeichenleuchten, Prüfbuch",
      "Entsorgung der Altleuchten und Leuchtstoffröhren",
    ],
    steps: [
      ["Anfrage", "Mit Fotos oder Grundriss."],
      ["Vor-Ort-Termin und Lichtkonzept", "Muster auf Wunsch."],
      ["Angebot", "Mit Leuchten, Steuerung, Montage, Stromkostenvergleich alt/neu."],
      ["Installation, Einstellung, Übergabe", "Alles eingestellt und erklärt."],
    ],
    know: [
      ["Einsparung", "LED benötigt gegenüber Halogen typischerweise 80–90 % weniger Strom, gegenüber Leuchtstoffröhren rund 40–60 % – die tatsächliche Einsparung hängt von Brenndauer und Bestand ab; wir rechnen sie für Ihr Objekt aus."],
      ["Leuchtstofflampen", "T8/T5 werden seit 2023 EU-weit nicht mehr in Verkehr gebracht – Ersatz wird knapp und teuer, die Umrüstung ist meist die günstigere Lösung."],
      ["Arbeitsstätten", "Für Büroarbeitsplätze sind 500 Lux Nennbeleuchtungsstärke vorgeschrieben (ASR A3.4); Notbeleuchtung nach DIN EN 1838 / ASR A3.4/7 muss regelmäßig geprüft werden."],
      ["Umweltaussagen", "Wir nennen konkrete Verbrauchszahlen statt Schlagworte."],
    ],
    costNote: costDefault,
    why: [
      ["Licht planen, nicht nur Lampen tauschen", "Farbtemperatur und Blendung entscheiden über Wohlbefinden."],
      ["Steuerung inklusive", "Präsenzmelder und Dimmen bringen die Einsparung, nicht nur die LED."],
      ["Fachgerechte Entsorgung", "Leuchtstoffröhren sind Sondermüll; wir nehmen sie mit."],
    ],
    faq: [
      ["Kann man alte Leuchten auf LED umbauen?", "Häufig ja, durch Tausch von Leuchtmittel und Treiber. Bei sehr alten Leuchten ist der Neukauf oft günstiger und sicherer – wir vergleichen beides."],
      ["Welche Farbtemperatur ist die richtige?", "Wohnräume 2.700–3.000 K (warmweiß), Küche und Bad 3.000–4.000 K, Büro 4.000 K (neutralweiß). Dimmbare Leuchten mit einstellbarer Farbtemperatur passen sich dem Tag an."],
      ["Muss Notbeleuchtung geprüft werden?", "Ja – Funktionstest monatlich, Betriebsdauertest jährlich, mit Prüfbuch. Wir übernehmen das im Rahmen der DGUV-V3-Prüfung."],
    ],
    related: ["smart-home", "dguv-v3-pruefung", "elektroinstallation"],
  },
  {
    slug: "netzwerk-tuersprechanlage", name: "Netzwerk & Türsprechanlage", icon: "Network", group: "komfort",
    short: "LAN, WLAN, Glasfaser-Innenverkabelung, Video-Türkommunikation.",
    title: "Netzwerk & Türsprechanlage Düsseldorf | Nahad Energie",
    description: "Netzwerkverkabelung, WLAN, Glasfaser-Innenverkabelung und Video-Türsprechanlagen in Düsseldorf – sauber geplant vom Elektro-Meisterbetrieb.",
    h1: "Netzwerk, WLAN und Türkommunikation – die Infrastruktur hinter der Wand",
    intro: "Home-Office, Streaming, Smart Home und Video-Türsprechanlage brauchen eine Verkabelung, die stabil läuft – nicht eine Steckdose im Flur und WLAN, das im Keller endet. Wir verlegen Netzwerkleitungen, richten WLAN mit Access Points ein, führen die Glasfaser vom Hausübergabepunkt in Ihre Räume und installieren Türsprechanlagen mit Video und App. Alles sauber dokumentiert, alles aus einer Hand mit der Elektroinstallation.",
    occasions: [
      "Sanierung oder Neubau: Netzwerkdosen in jedem Raum, zentraler Verteiler",
      "Glasfaseranschluss kommt: Innenverkabelung vom Übergabepunkt zur Wohnung/zum Router",
      "WLAN reicht nicht: Access Points statt Repeater",
      "Neue Türsprechanlage mit Video, mehrere Wohnungen, Öffnen per App",
      "Rauchwarnmelder nachrüsten oder vernetzen",
      "Büro: strukturierte Verkabelung, Netzwerkschrank, PoE für Telefone und Kameras",
    ],
    scope: [
      "Strukturierte Verkabelung Cat 7 (Wohnung, Haus, Büro), Netzwerkdosen, Patchfeld, Netzwerkschrank, Messprotokoll der Strecken",
      "WLAN: Access Points mit PoE, Ausleuchtung planen, Gastnetz, Mesh",
      "Glasfaser: Inhouse-Verkabelung vom Hausübergabepunkt (Gf-TA/APL) bis zum Router, Abstimmung mit dem Netzanbieter",
      "Türsprechanlagen: 2-Draht oder IP, Video, Mehrfamilienhaus, App-Anbindung, Türöffner, Zutritt per Code/Fingerprint",
      "Rauchwarnmelder nach DIN 14676 (Pflicht in NRW), vernetzt oder einzeln",
      "SAT/Multimedia-Verteilung auf Wunsch",
      "Dokumentation: Belegungsplan, Messprotokoll, Zugangsdaten übergeben",
    ],
    steps: [
      ["Anfrage mit Grundriss", "Räume, Arbeitsplätze, Router-Standort."],
      ["Vor-Ort-Termin", "Leitungswege, Verteilerplatz, WLAN-Ausleuchtung."],
      ["Angebot", "Material, Montage, Messung, Dokumentation."],
      ["Installation und Einmessen", "Jede Strecke geprüft, dokumentiert, beschriftet."],
    ],
    know: [
      ["Glasfaser im Haus", "Der Netzbetreiber legt die Faser bis zum Hausübergabepunkt im Keller; die Strecke bis zur Wohnung ist Sache des Eigentümers – hier braucht es sauberes Handwerk und die richtige Faser."],
      ["Kabel statt Funk, wo es geht", "Ein Cat-7-Kabel hält 30 Jahre; WLAN ist Ergänzung, nicht Ersatz."],
      ["Rauchwarnmelder", "In NRW Pflicht in Schlaf- und Kinderzimmern sowie Fluren, die als Rettungsweg dienen (§ 47 Abs. 3 BauO NRW); für den Einbau ist der Eigentümer verantwortlich."],
      ["Datenschutz bei Video-Türsprechanlagen", "Kamera nur auf den eigenen Eingangsbereich richten, keine Daueraufzeichnung des öffentlichen Raums."],
    ],
    costNote: costDefault,
    why: [
      ["Gemessen, nicht geraten", "Jede Netzwerkstrecke wird zertifiziert gemessen."],
      ["Ein Handwerker für Strom und Daten", "Keine Abstimmungsprobleme zwischen Elektriker und IT."],
      ["Herstellerneutral", "Wir empfehlen, was zu Ihrem Haus passt, nicht was gerade im Regal liegt."],
    ],
    faq: [
      ["Repeater oder Access Point?", "Access Points mit Kabelanbindung – Repeater halbieren die Bandbreite und sind fehleranfällig. Wir planen die Standorte nach Grundriss."],
      ["Kann die Türsprechanlage aufs Handy?", "Ja, IP-basierte Anlagen und viele 2-Draht-Systeme bieten App-Anbindung; wir richten sie so ein, dass sie auch ohne Cloud lokal funktionieren, wo das möglich ist."],
      ["Wer verlegt die Glasfaser in die Wohnung?", "Wir – vom Übergabepunkt des Netzbetreibers bis zum Router. Den Termin stimmen wir mit dem Anbieter ab."],
    ],
    related: ["smart-home", "elektroinstallation", "gewerbe-hausverwaltung"],
  },
  {
    slug: "gewerbe-hausverwaltung", name: "Gewerbe & Hausverwaltungen", icon: "Building2", group: "komfort",
    short: "Instandhaltung, Prüfungen, Ladeinfrastruktur, Rahmenverträge.",
    title: "Elektriker für Gewerbe & Hausverwaltungen Düsseldorf",
    description: "Elektro-Partner für Hausverwaltungen, WEG und Gewerbe in Düsseldorf: Instandhaltung, Prüfungen, Ladeinfrastruktur, Rahmenverträge, feste Ansprechperson.",
    h1: "Elektrotechnik für Gewerbe, Hausverwaltungen und WEG",
    intro: "Hausverwaltungen und Unternehmen brauchen keinen Elektriker, der einmal kommt – sondern einen, der erreichbar ist, dokumentiert arbeitet und Fristen kennt. Wir betreuen Wohn- und Geschäftshäuser, Büros, Praxen, Ladenlokale und kleine Betriebe in Düsseldorf: Instandhaltung, Störungsbeseitigung, Prüfungen, Beleuchtung, Ladeinfrastruktur – mit fester Ansprechperson und Abrechnung pro Objekt.",
    occasions: [
      "Hausverwaltung sucht Elektro-Partner für mehrere Objekte in Düsseldorf",
      "WEG plant Ladeinfrastruktur in der Tiefgarage (Beschluss, Förderung, Umsetzung)",
      "Treppenhaus- und Außenbeleuchtung auf LED mit Präsenzmeldern",
      "DGUV-V3-Prüfungen für Büro, Praxis, Laden, Werkstatt",
      "Störungen im Allgemeinstrom, Klingel-/Sprechanlagen, Zeitschaltuhren, Tiefgaragentore",
      "Mieterwechsel: Prüfung und Instandsetzung der Wohnungselektrik",
    ],
    scope: [
      "Instandhaltung und Störungsbeseitigung in Allgemeinbereichen und Wohnungen",
      "Wiederkehrende Prüfungen (DGUV V3, DIN VDE 0105-100), Rauchwarnmelder-Service, Notbeleuchtungsprüfung",
      "Ladeinfrastruktur: Konzept, Lastmanagement, Zähler- und Abrechnungslösung, Förderantrag „Laden im Mehrparteienhaus“, Unterlagen für die Eigentümerversammlung",
      "Beleuchtung: Treppenhaus, Außenanlagen, Tiefgarage – LED mit Präsenzmeldern",
      "Zählerschränke und Hauptverteilungen, Zählerplatzerweiterungen bei Umnutzung",
      "Baustromverteiler für Bauvorhaben und temporäre Versorgung",
      "Modernisierungsplanung mit Priorisierung und Budgetstufen",
      "Dokumentation pro Objekt: Protokolle, Fotos, Fristen; Rechnung mit Objektbezug",
    ],
    steps: [
      ["Kennenlernen und Objektliste", "Wir besprechen Objekte, Anforderungen und Reaktionszeiten."],
      ["Bestandsaufnahme", "Auf Wunsch je Objekt mit Mängelliste und Prioritäten."],
      ["Rahmenvereinbarung", "Stundensätze, Reaktionszeiten, Prüfintervalle, Ansprechpartner. Oder klassisch per Einzelauftrag."],
      ["Laufende Betreuung", "Feste Ansprechperson, digitale Protokolle, Fristenerinnerung."],
    ],
    knowHeading: `Das sollten Sie wissen (Stand ${standDate})`,
    know: [
      ["Verkehrssicherungspflicht", "Sie liegt beim Eigentümer bzw. der Verwaltung – dokumentierte Prüfungen sind der Nachweis."],
      ["Laden im Mehrparteienhaus", "Das Bundesprogramm fördert seit April 2026 Ladeinfrastruktur in Mehrfamilienhäusern mit bis zu 1.300 € (Grundinstallation), 1.500 € (mit Wallbox) bzw. 2.000 € (bidirektional) je Stellplatz – Anträge bis 10.11.2026. Wir liefern die technischen Unterlagen."],
      ["Anspruch auf Ladepunkt", "§ 20 Abs. 2 WEG – eine gemeinsame Grundinstallation ist meist günstiger als zehn Einzellösungen."],
      ["Nettopreise für Gewerbe", "Gewerbekunden erhalten Nettopreise; die Website nennt Bruttopreise für Privatkunden."],
    ],
    costNote: "Konditionen für Gewerbe und Verwaltungen (netto) nennen wir im Angebot; Rahmenvertrag mit Staffelkonditionen auf Anfrage.",
    why: [
      ["Erreichbar und verbindlich", "Eine Nummer, eine Ansprechperson, klare Absprachen."],
      ["Dokumentation, die Verwaltern die Arbeit erleichtert", "Protokolle und Fotos pro Objekt, digital."],
      ["Ladeinfrastruktur mit Weitblick", "Grundinstallation, die auch in fünf Jahren noch reicht."],
    ],
    faq: [
      ["Übernehmen Sie auch Kleinaufträge in Mietwohnungen?", "Ja, im Rahmen der Objektbetreuung – gebündelt, mit Terminabstimmung mit den Mietern und Rückmeldung an die Verwaltung."],
      ["Erstellen Sie Unterlagen für die Eigentümerversammlung?", "Ja: Konzept, Kostenschätzung mit Varianten, Förderhinweise und eine verständliche Erklärung für Eigentümer ohne Technikhintergrund."],
    ],
    related: ["dguv-v3-pruefung", "wallbox", "beleuchtung-led"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
