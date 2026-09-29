export const phoneDisplay = "0211 54268296";
export const phoneHref = "tel:+4921154268296";
export const whatsappHref = "https://wa.me/4921154268296";
export const brand = "Nahad Energie Elektrotechnik";

export function seo(path: string, title: string, description: string, type = "website") {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

export function jsonLd(data: object) {
  return { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", ...data }) };
}

export const areaServed = ["Düsseldorf", "Ratingen", "Neuss", "Meerbusch", "Erkrath", "Hilden", "Kaarst", "Langenfeld"];

export type Service = {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  points: string[];
  related: string[];
  cluster: "Energie" | "Sicherheit" | "Komfort" | "Gewerbe" | "Installation";
};

export const services: Service[] = [
  {
    slug: "elektroinstallation", name: "Elektroinstallation", cluster: "Installation",
    short: "Neubau, Altbausanierung und Umbau – sicher und normgerecht.",
    title: "Elektroinstallation Düsseldorf – Neubau & Altbau | Nahad",
    description: "Elektroinstallation in Düsseldorf vom Meisterbetrieb: Neubau, Altbausanierung, Umbau, FI-Schutz, Steckdosen, Leitungen. Festpreis nach Vor-Ort-Termin.",
    h1: "Elektroinstallation in Düsseldorf – Neubau, Altbau und Sanierung",
    intro: "Ob Neubau, Kernsanierung im Altbau oder einzelne neue Stromkreise: Wir planen die Elektroinstallation passend zu Ihrem Gebäude und führen sie normgerecht aus.",
    points: ["Neuinstallation im Neubau und bei Kernsanierung", "Altbau: Leitungen, Steckdosen und Stromkreise erneuern", "FI-Schutzschalter nachrüsten", "Herd-, Durchlauferhitzer- und Geräteanschlüsse", "Festpreis nach dem Vor-Ort-Termin"],
    related: ["zaehlerschrank-sicherungskasten", "e-check", "beleuchtung-led"],
  },
  {
    slug: "zaehlerschrank-sicherungskasten", name: "Zählerschrank & Sicherungskasten", cluster: "Sicherheit",
    short: "TAB-konform erneuern – vorbereitet für PV, Wallbox und Wärmepumpe.",
    title: "Zählerschrank & Sicherungskasten erneuern Düsseldorf",
    description: "Zählerschrank oder Sicherungskasten erneuern in Düsseldorf: TAB-konform, FI/LS-Schutz, vorbereitet für PV, Wallbox und Wärmepumpe. Anmeldung inklusive.",
    h1: "Zählerschrank und Sicherungskasten erneuern – sicher, normgerecht, zukunftsfähig",
    intro: "Ein veralteter Sicherungskasten ist oft der Engpass, wenn eine PV-Anlage, Wallbox oder Wärmepumpe dazukommen soll. Wir erneuern Zählerschrank und Verteilung nach den technischen Anschlussbedingungen und übernehmen die Anmeldung beim Netzbetreiber.",
    points: ["Zählerschrank nach aktuellen TAB", "FI/LS-Schutz für alle Stromkreise", "Reserve für PV, Wallbox und Wärmepumpe", "Abstimmung und Anmeldung beim Netzbetreiber", "Klare Aussage zu Bestandsschutz und Pflichten"],
    related: ["photovoltaik", "wallbox", "e-check"],
  },
  {
    slug: "photovoltaik", name: "Photovoltaik", cluster: "Energie",
    short: "PV mit Speicher – Planung, Montage und Netzanmeldung aus einer Hand.",
    title: "Photovoltaik Düsseldorf vom Elektromeister | Nahad Energie",
    description: "PV-Anlage mit Speicher in Düsseldorf: Planung, Montage, Zählerschrank, Netzanmeldung und Inbetriebnahme aus einer Hand. 0 % MwSt. auf PV.",
    h1: "Photovoltaik in Düsseldorf – geplant und installiert vom Elektromeister",
    intro: "Bei uns kommt die PV-Anlage vom Elektromeister, der auch den Zählerschrank, die Netzanmeldung und auf Wunsch die Wallbox übernimmt – ein Ansprechpartner statt mehrerer Gewerke.",
    points: ["Planung passend zu Dach und Verbrauch", "Stromspeicher, auch zum Nachrüsten", "Zählerschrank-Ertüchtigung", "Netzanmeldung und Marktstammdatenregister", "0 % MwSt. auf PV-Anlagen für Wohngebäude"],
    related: ["wallbox", "zaehlerschrank-sicherungskasten", "waermepumpe-elektroanschluss"],
  },
  {
    slug: "wallbox", name: "Wallbox", cluster: "Energie",
    short: "11 oder 22 kW, Lastmanagement, Anmeldung und § 14a EnWG.",
    title: "Wallbox Installation Düsseldorf – inkl. Anmeldung | Nahad",
    description: "Wallbox in Düsseldorf installieren lassen: 11 oder 22 kW, Lastmanagement, § 14a EnWG, Anmeldung beim Netzbetreiber. Festpreis nach Vor-Ort-Check.",
    h1: "Wallbox-Installation in Düsseldorf – inklusive Netzanmeldung und § 14a",
    intro: "Wir prüfen vor Ort Hausanschluss, Zählerschrank und Leitungsweg und installieren Ihre Wallbox mit der passenden Absicherung. Anmeldung beim Netzbetreiber und die Einbindung nach § 14a EnWG gehören dazu.",
    points: ["11 kW oder 22 kW – ehrliche Beratung", "Anmeldung beim Netzbetreiber", "Steuerbare Verbrauchseinrichtung nach § 14a EnWG", "Lastmanagement und PV-Überschussladen", "Festpreis nach dem Vor-Ort-Check"],
    related: ["photovoltaik", "zaehlerschrank-sicherungskasten", "gewerbe-hausverwaltung"],
  },
  {
    slug: "waermepumpe-elektroanschluss", name: "Wärmepumpe Elektroanschluss", cluster: "Energie",
    short: "Zuleitung, Zählerschrank und § 14a-Anmeldung für Ihre Wärmepumpe.",
    title: "Wärmepumpe Elektroanschluss Düsseldorf | Nahad Energie",
    description: "Elektroanschluss für Ihre Wärmepumpe in Düsseldorf: Zuleitung, Zählerschrank, § 14a-Anmeldung, Netzentgelt-Rabatt. Abstimmung mit Ihrem Heizungsbauer.",
    h1: "Elektroanschluss für Wärmepumpen – damit die Heizung ans Netz darf",
    intro: "Der Heizungsbauer setzt die Wärmepumpe, wir sorgen für den elektrischen Anschluss: Zuleitung, Absicherung, Zählerplatz und die Anmeldung als steuerbare Verbrauchseinrichtung.",
    points: ["Zuleitung und Absicherung", "Zählerschrank-Ertüchtigung", "Anmeldung nach § 14a EnWG", "Enge Abstimmung mit Ihrem Heizungsbauer"],
    related: ["zaehlerschrank-sicherungskasten", "photovoltaik", "wallbox"],
  },
  {
    slug: "smart-home", name: "Smart Home", cluster: "Komfort",
    short: "Licht, Rollläden, Heizung – KNX oder Funk, herstellerneutral.",
    title: "Smart Home & KNX Düsseldorf – Meisterbetrieb | Nahad",
    description: "Smart Home in Düsseldorf: Licht, Rollläden, Heizung und Energie steuern – KNX oder Funk, herstellerneutral geplant und sauber installiert.",
    h1: "Smart Home in Düsseldorf – Komfort und Energieeffizienz, die funktionieren",
    intro: "Wir planen Smart-Home-Lösungen herstellerneutral – kabelgebunden mit KNX im Neubau oder per Funk in der bestehenden Wohnung.",
    points: ["Licht-, Rollladen- und Heizungssteuerung", "KNX im Neubau und bei Sanierung", "Funklösungen zum Nachrüsten", "Einbindung von PV und Wallbox"],
    related: ["beleuchtung-led", "netzwerk-tuersprechanlage", "photovoltaik"],
  },
  {
    slug: "e-check", name: "E-Check & Anlagenprüfung", cluster: "Sicherheit",
    short: "Prüfung der Elektroanlage mit Protokoll – für Eigentümer und Vermieter.",
    title: "E-Check Düsseldorf – Prüfung elektrischer Anlagen | Nahad",
    description: "Prüfung der Elektroanlage in Düsseldorf mit Protokoll: für Eigentümer, Vermieter und Käufer. Sicherheit nach DIN VDE, klare Empfehlungen, faire Pauschale.",
    h1: "Prüfung elektrischer Anlagen in Düsseldorf – Sicherheit mit Protokoll",
    intro: "Wir prüfen Ihre Elektroanlage nach DIN VDE und dokumentieren das Ergebnis in einem Prüfprotokoll – mit verständlichen Empfehlungen statt Fachchinesisch.",
    points: ["Prüfung nach DIN VDE mit Protokoll", "Für Eigentümer, Vermieter und Käufer", "Sinnvoll beim Mieterwechsel", "Klare Empfehlungen, faire Pauschale"],
    related: ["dguv-v3-pruefung", "zaehlerschrank-sicherungskasten", "elektroinstallation"],
  },
  {
    slug: "dguv-v3-pruefung", name: "DGUV V3 Prüfung", cluster: "Sicherheit",
    short: "Geräte und ortsfeste Anlagen prüfen – mit Protokoll und Fristen.",
    title: "DGUV V3 Prüfung Düsseldorf – Betriebe & Büros | Nahad",
    description: "DGUV V3 Prüfung in Düsseldorf: ortsveränderliche Geräte und ortsfeste Anlagen, Prüfprotokoll, Fristenerinnerung. Für Büros, Praxen, Handwerk, Handel.",
    h1: "DGUV V3 Prüfung in Düsseldorf – rechtssicher, planbar, dokumentiert",
    intro: "Betriebe müssen ihre elektrischen Anlagen und Geräte regelmäßig prüfen lassen. Wir übernehmen die Prüfung, dokumentieren sie sauber und erinnern Sie an die nächste Frist.",
    points: ["Ortsveränderliche Geräte", "Ortsfeste Anlagen", "Prüfprotokoll zur Vorlage", "Erinnerung an den nächsten Termin"],
    related: ["e-check", "gewerbe-hausverwaltung", "beleuchtung-led"],
  },
  {
    slug: "beleuchtung-led", name: "Beleuchtung & LED", cluster: "Komfort",
    short: "LED-Umrüstung, Außen- und Gartenbeleuchtung, Lichtplanung.",
    title: "Beleuchtung & LED-Umrüstung Düsseldorf | Nahad Energie",
    description: "Beleuchtung vom Elektriker in Düsseldorf: LED-Umrüstung, Außen- und Gartenbeleuchtung, Lichtplanung für Wohnung, Büro und Halle.",
    h1: "Beleuchtung und LED-Umrüstung – gutes Licht, weniger Verbrauch",
    intro: "Von der neuen Deckenleuchte bis zur LED-Umrüstung einer Halle: Wir planen und installieren Licht, das passt und weniger Strom verbraucht.",
    points: ["LED-Umrüstung für Gewerbe", "Außen- und Gartenbeleuchtung", "Lichtplanung für Wohnung und Büro"],
    related: ["smart-home", "elektroinstallation", "gewerbe-hausverwaltung"],
  },
  {
    slug: "netzwerk-tuersprechanlage", name: "Netzwerk & Türsprechanlage", cluster: "Komfort",
    short: "Netzwerkkabel, WLAN, Glasfaser innen und Video-Türsprechanlagen.",
    title: "Netzwerk & Türsprechanlage Düsseldorf | Nahad Energie",
    description: "Netzwerkverkabelung, WLAN, Glasfaser-Innenverkabelung und Video-Türsprechanlagen in Düsseldorf – sauber geplant vom Elektro-Meisterbetrieb.",
    h1: "Netzwerk, WLAN und Türkommunikation – die Infrastruktur hinter der Wand",
    intro: "Stabiles Netzwerk und eine moderne Türsprechanlage gehören heute zur Grundausstattung. Wir verlegen die Leitungen sauber und nehmen alles in Betrieb.",
    points: ["Netzwerkverkabelung und WLAN", "Glasfaser-Innenverkabelung", "Video-Türsprechanlagen"],
    related: ["smart-home", "elektroinstallation", "gewerbe-hausverwaltung"],
  },
  {
    slug: "gewerbe-hausverwaltung", name: "Gewerbe & Hausverwaltung", cluster: "Gewerbe",
    short: "Instandhaltung, Prüfungen und Ladeinfrastruktur für WEG und Betriebe.",
    title: "Elektriker für Gewerbe & Hausverwaltungen Düsseldorf",
    description: "Elektro-Partner für Hausverwaltungen, WEG und Gewerbe in Düsseldorf: Instandhaltung, Prüfungen, Ladeinfrastruktur, Rahmenverträge, schnelle Reaktion.",
    h1: "Elektrotechnik für Gewerbe, Hausverwaltungen und WEG",
    intro: "Hausverwaltungen und Betriebe brauchen einen Elektro-Partner, der erreichbar ist und sauber dokumentiert. Wir übernehmen Instandhaltung, Prüfungen und Ladeinfrastruktur – gern im Rahmenvertrag.",
    points: ["Instandhaltung und Störungsbehebung", "Prüfungen nach DGUV V3 und DIN VDE", "Ladeinfrastruktur im Mehrparteienhaus", "Rahmenverträge für WEG und Gewerbe", "Baustrom für Bauvorhaben"],
    related: ["dguv-v3-pruefung", "wallbox", "e-check"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
