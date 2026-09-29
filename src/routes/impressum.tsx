import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { LegalHeading } from "@/components/site/LegalContent";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/impressum")({
  head: () => seo("/impressum", "Impressum | Nahad Energie", "Impressum des Elektrotechnik-Meisterbetriebs Nahad Energie, Inhaber Reza Nahad, Düsseldorf."),
  component: () => (
    <LegalPage title="Impressum">
      <LegalHeading>Angaben gemäß § 5 DDG</LegalHeading>
      <p><strong>Nahad Energie Elektrotechnik</strong><br />Inhaber: Reza Nahad<br />Vogelsanger Weg 38<br />40470 Düsseldorf<br />Deutschland</p>

      <LegalHeading>Kontakt</LegalHeading>
      <p>Telefon: <a href="tel:+4921154268296">0211 54268296</a><br />E-Mail: <a href="mailto:info@nahad-energie.de">info@nahad-energie.de</a></p>

      <LegalHeading>Steuerliche Angaben</LegalHeading>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE458342898<br />Steuernummer: 122/5738/0424</p>

      <LegalHeading>Berufsbezeichnung und berufsrechtliche Regelungen</LegalHeading>
      <p>Gesetzliche Berufsbezeichnung: Elektrotechnikermeister, verliehen in der Bundesrepublik Deutschland von der Handelskammer Düsseldorf.</p>
      <p>Zuständige Kammer: Handwerkskammer Düsseldorf, Georg-Schulhoff-Platz 1, 40221 Düsseldorf, <a href="https://www.hwk-duesseldorf.de">www.hwk-duesseldorf.de</a></p>
      <p>Eingetragen in die Handwerksrolle der Handwerkskammer Düsseldorf für das Elektrotechniker-Handwerk (Anlage A Nr. 25 HwO), Betriebsnummer 1887466</p>
      <p>Berufsrechtliche Regelungen: Gesetz zur Ordnung des Handwerks (Handwerksordnung – HwO), einsehbar unter <a href="https://www.gesetze-im-internet.de/hwo/">https://www.gesetze-im-internet.de/hwo/</a></p>

      <LegalHeading>Verbraucherstreitbeilegung (§ 36 VSBG)</LegalHeading>
      <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Reza Nahad, Anschrift wie oben</p>

      <LegalHeading>Urheberrecht</LegalHeading>
      <p>Die Inhalte dieser Website (Texte, Fotos, Grafiken) sind urheberrechtlich geschützt. Eine Verwendung außerhalb der Grenzen des Urheberrechts bedarf unserer Zustimmung.</p>
    </LegalPage>
  ),
});
