import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { LegalHeading, LegalNote, Placeholder } from "@/components/site/LegalContent";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/impressum")({
  head: () => seo("/impressum", "Impressum | Nahad Energie", "Impressum des Elektrotechnik-Meisterbetriebs Nahad Energie, Inhaber Reza Nahad, Düsseldorf."),
  component: () => (
    <LegalPage title="Impressum">
      <LegalNote>
        <p>Hinweis zur Verwendung: Diese Texte sind für die Website nahad-energie.de bestimmt (Seiten „Impressum“ und „Datenschutzerklärung“). Gelb markierte Stellen <Placeholder>[[…]]</Placeholder> müssen vor der Veröffentlichung ergänzt werden – insbesondere Betriebshaftpflichtversicherer, Anschrift des Versicherers und räumlicher Geltungsbereich (Pflichtangabe nach § 2 Abs. 1 Nr. 11 DL-InfoV, sobald eine Versicherung besteht).</p>
        <p className="mt-3">Die Texte wurden sorgfältig nach der Rechtslage vom 28.09.2026 erstellt (DDG, DL-InfoV, VSBG, DSGVO, BDSG, TDDDG), sind aber keine Rechtsberatung. Empfehlung: vor Veröffentlichung von der Rechtsberatung der Handwerkskammer Düsseldorf (für Mitgliedsbetriebe kostenfrei) oder einem Fachanwalt prüfen lassen. Kein Hinweis auf die EU-Streitbeilegungsplattform (OS-Plattform) mehr aufnehmen – sie wurde am 20.07.2025 abgeschaltet.</p>
        <p className="mt-3">Die Datenschutzerklärung beschreibt die geplante Website mit einem technisch notwendigen Cookie für die Cookie-Auswahl, ohne Tracking, mit lokal gehosteten Schriften, Kontaktformular per E-Mail-Versand über STRATO und Bewerbungen per E-Mail. Wird später ein Analyse-Tool, eine Karten-Einbettung oder ein Bewertungs-Widget eingebaut, <em>muss die Erklärung ergänzt und die Einwilligungsauswahl entsprechend erweitert werden.</em></p>
      </LegalNote>

      <LegalHeading>Angaben gemäß § 5 DDG</LegalHeading>
      <p><strong>Nahad Energie Elektrotechnik</strong><br />Inhaber: Reza Nahad<br />Vogelsanger Weg 38<br />40470 Düsseldorf<br />Deutschland</p>

      <LegalHeading>Kontakt</LegalHeading>
      <p>Telefon: <a href="tel:+4921154268296">0211 54268296</a><br />E-Mail: <a href="mailto:info@nahad-energie.de">info@nahad-energie.de</a><br />Wirtschafts-Identifikationsnummer gemäß § 139c AO: DE458342898-00001</p>

      <LegalHeading>Berufsbezeichnung und berufsrechtliche Regelungen</LegalHeading>
      <p>Gesetzliche Berufsbezeichnung: Elektrotechnikermeister (verliehen in der Bundesrepublik Deutschland) <Placeholder>[Wortlaut des Meisterbriefs übernehmen – bei Prüfung vor 2004: „Elektroinstallateurmeister“]</Placeholder></p>
      <p>Zuständige Kammer: Handwerkskammer Düsseldorf, Georg-Schulhoff-Platz 1, 40221 Düsseldorf, <a href="https://www.hwk-duesseldorf.de">www.hwk-duesseldorf.de</a></p>
      <p>Eingetragen in die Handwerksrolle der Handwerkskammer Düsseldorf für das Elektrotechniker-Handwerk (Anlage A Nr. 25 HwO), Betriebsnummer 1887466</p>
      <p>Berufsrechtliche Regelungen: Gesetz zur Ordnung des Handwerks (Handwerksordnung – HwO), einsehbar unter <a href="https://www.gesetze-im-internet.de/hwo/">https://www.gesetze-im-internet.de/hwo/</a></p>

      <LegalHeading>Betriebshaftpflichtversicherung (Angaben gemäß § 2 Abs. 1 Nr. 11 DL-InfoV)</LegalHeading>
      <p><Placeholder>[[VERSICHERER]]</Placeholder>, <Placeholder>[[VERSICHERER-ANSCHRIFT]]</Placeholder></p>
      <p>Räumlicher Geltungsbereich: <Placeholder>[[VERSICHERUNG-GELTUNGSBEREICH]]</Placeholder></p>

      <LegalHeading>Verbraucherstreitbeilegung (§ 36 VSBG)</LegalHeading>
      <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      <LegalNote><p>Optional – nur wenn ein redaktioneller Ratgeber-Bereich veröffentlicht wird:</p></LegalNote>
      <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Reza Nahad, Anschrift wie oben</p>

      <LegalHeading>Urheberrecht</LegalHeading>
      <p>Die Inhalte dieser Website (Texte, Fotos, Grafiken) sind urheberrechtlich geschützt. Eine Verwendung außerhalb der Grenzen des Urheberrechts bedarf unserer Zustimmung.</p>

      <LegalHeading>Bildnachweise</LegalHeading>
      <p><Placeholder>[[Bildnachweise ergänzen – z. B. „Fotos: [Fotograf], Düsseldorf; Icons: Lucide (ISC-Lizenz)“]]</Placeholder></p>
    </LegalPage>
  ),
});
