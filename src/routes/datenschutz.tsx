import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { LegalHeading, LegalList, LegalSubheading } from "@/components/site/LegalContent";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/datenschutz")({
  head: () => seo("/datenschutz", "Datenschutzerklärung | Nahad Energie", "Datenschutzerklärung der Website nahad-energie.de."),
  component: () => (
    <LegalPage title="Datenschutzerklärung">
      <p><strong>Stand: 29.09.2026</strong></p>

      <LegalHeading>1. Verantwortlicher</LegalHeading>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
      <p>Nahad Energie Elektrotechnik, Inhaber Reza Nahad, Vogelsanger Weg 38, 40470 Düsseldorf</p>
      <p>Telefon: <a href="tel:+4921154268296">0211 54268296</a> · E-Mail: <a href="mailto:info@nahad-energie.de">info@nahad-energie.de</a></p>
      <p>Ein Datenschutzbeauftragter ist nach § 38 BDSG nicht zu benennen.</p>

      <LegalHeading>2. Das Wichtigste in Kürze</LegalHeading>
      <LegalList>
        <li>Diese Website setzt keine Cookies und keine Tracking- oder Analysedienste ein.</li>
        <li>Schriftarten und alle Skripte werden von unserem eigenen Server geladen; beim Aufruf der Seiten werden keine Daten an Dritte (z. B. Google) übertragen.</li>
        <li>Personenbezogene Daten verarbeiten wir nur, wenn Sie uns kontaktieren (Formular, E-Mail, Telefon, WhatsApp) oder sich bewerben – und nur zu diesem Zweck.</li>
        <li>Die Website wird bei einem deutschen Anbieter (STRATO) in Rechenzentren in Deutschland betrieben.</li>
      </LegalList>

      <LegalHeading>3. Hosting und Server-Logfiles</LegalHeading>
      <p>Unsere Website wird bei der STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin, gehostet. STRATO verarbeitet in unserem Auftrag die beim Aufruf der Website anfallenden Daten auf Servern in Deutschland. Wir haben mit STRATO einen Vertrag über Auftragsverarbeitung nach Art. 28 DSGVO geschlossen.</p>
      <p>Bei jedem Aufruf speichert der Webserver automatisch Informationen, die Ihr Browser übermittelt (Server-Logfiles): IP-Adresse, Datum und Uhrzeit, aufgerufene Seite bzw. Datei, übertragene Datenmenge, HTTP-Statuscode, Referrer-URL, Browsertyp und -version, Betriebssystem. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.</p>
      <p><strong>Zweck:</strong> Bereitstellung, Stabilität und Sicherheit der Website, Erkennung und Abwehr von Angriffen, Fehleranalyse.</p>
      <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und störungsfreien Betrieb).</p>
      <p><strong>Speicherdauer:</strong> Die Logfiles werden vom Hoster nach maximal sieben Tagen gelöscht.</p>

      <LegalHeading>4. Kontaktaufnahme</LegalHeading>
      <LegalSubheading>4.1 Kontaktformular</LegalSubheading>
      <p>Wenn Sie unser Anfrageformular nutzen, verarbeiten wir die von Ihnen eingegebenen Angaben: Name, Telefonnummer, E-Mail-Adresse, gewählte Leistung, Ihre Nachricht sowie – freiwillig – PLZ/Ort und ein Rückruf-Zeitfenster. Die Angaben werden über eine verschlüsselte Verbindung (TLS) an unseren Server übermittelt und von dort als E-Mail an unser Postfach bei <strong>STRATO</strong> gesendet. Eine Speicherung in einer Datenbank findet nicht statt.</p>
      <p>Zum Schutz vor automatisierten Spam-Eingaben verwenden wir ein unsichtbares Formularfeld, ein zeitbasiertes Prüfmerkmal und eine Begrenzung der Anzahl von Anfragen pro Zeitraum. Dafür wird ein aus Ihrer IP-Adresse gebildeter, nicht rückrechenbarer Hashwert für höchstens 48 Stunden gespeichert. Dienste Dritter (z. B. reCAPTCHA) setzen wir nicht ein.</p>
      <p><strong>Zweck:</strong> Bearbeitung Ihrer Anfrage, Erstellung von Angeboten, Terminabstimmung.</p>
      <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen bzw. Vertragserfüllung); bei allgemeinen Anfragen ohne Vertragsbezug Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung).</p>
      <p><strong>Pflichtangaben:</strong> Name, Telefonnummer, E-Mail-Adresse, Leistung und Nachricht sind erforderlich, damit wir Ihre Anfrage bearbeiten können; ohne diese Angaben kann das Formular nicht abgesendet werden. Alle weiteren Angaben sind freiwillig.</p>
      <LegalSubheading>4.2 E-Mail und Telefon</LegalSubheading>
      <p>Kontaktieren Sie uns per E-Mail oder Telefon, verarbeiten wir Ihre Angaben (Name, Kontaktdaten, Inhalt der Anfrage, ggf. Fotos) zur Bearbeitung Ihres Anliegens. Rechtsgrundlagen wie unter 4.1. Bitte beachten Sie, dass unverschlüsselte E-Mails auf dem Übertragungsweg von Dritten eingesehen werden können; senden Sie uns daher keine sensiblen Dokumente per E-Mail.</p>
      <LegalSubheading>4.3 Speicherdauer bei Kontaktaufnahme</LegalSubheading>
      <p>Anfragen, aus denen kein Vertrag entsteht, löschen wir spätestens sechs Monate nach abschließender Bearbeitung. Kommt es zu einem Auftrag, bewahren wir die Korrespondenz im Rahmen der handels- und steuerrechtlichen Aufbewahrungspflichten auf (§ 257 HGB, § 147 AO: Handels- und Geschäftsbriefe sechs Jahre, Buchungsbelege acht Jahre).</p>

      <LegalHeading>5. WhatsApp</LegalHeading>
      <p>Sie können uns über den Messenger WhatsApp kontaktieren. Der Link auf unserer Website öffnet Ihre WhatsApp-Anwendung; erst mit diesem Klick und dem Versand einer Nachricht werden Daten an WhatsApp übermittelt – beim bloßen Aufruf unserer Website nicht.</p>
      <p><strong>Anbieter:</strong> WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. Bei der Kommunikation verarbeitet WhatsApp Ihre Telefonnummer, Profilinformationen, Nachrichteninhalte sowie Metadaten (z. B. Zeitpunkt der Nachricht). Metadaten können an Meta Platforms, Inc. in den USA übermittelt werden; die Übermittlung stützt sich auf den Angemessenheitsbeschluss der EU-Kommission zum EU-U.S. Data Privacy Framework sowie auf Standardvertragsklauseln. Informationen von WhatsApp: <a href="https://www.whatsapp.com/legal/privacy-policy-eea">https://www.whatsapp.com/legal/privacy-policy-eea</a></p>
      <p>Wir nutzen WhatsApp Business auf einem Gerät, auf dem keine Kontaktdaten Dritter gespeichert werden; die Adressbuch-Synchronisation ist deaktiviert, die Datenverarbeitungsbedingungen von WhatsApp Business haben wir akzeptiert. Bitte senden Sie uns über WhatsApp keine sensiblen Dokumente (z. B. Ausweiskopien). Für sensible Unterlagen nutzen Sie bitte Post oder Übergabe vor Ort.</p>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Anfragen zu Aufträgen) bzw. Art. 6 Abs. 1 lit. f DSGVO (Interesse an einer schnellen, von Ihnen gewählten Kommunikation).</p>
      <p>Speicherdauer: Nachrichten löschen wir nach Erledigung, soweit keine Aufbewahrungspflichten bestehen (siehe 4.3).</p>

      <LegalHeading>6. Bewerbungen</LegalHeading>
      <p>Bewerbungen nehmen wir per E-Mail an <a href="mailto:info@nahad-energie.de">info@nahad-energie.de</a> oder auf dem Postweg entgegen. Wir verarbeiten die von Ihnen übermittelten Daten (Kontaktdaten, Lebenslauf, Zeugnisse, Angaben im Anschreiben) ausschließlich zur Durchführung des Bewerbungsverfahrens.</p>
      <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Entscheidung über die Begründung eines Beschäftigungsverhältnisses) in Verbindung mit § 26 Abs. 1 BDSG. Besondere Kategorien personenbezogener Daten (z. B. Angaben zu einer Schwerbehinderung) verarbeiten wir nur, wenn Sie sie uns freiwillig mitteilen, auf Grundlage von Art. 9 Abs. 2 lit. b DSGVO i. V. m. § 26 Abs. 3 BDSG.</p>
      <p><strong>Speicherdauer:</strong> Bei einer Einstellung übernehmen wir die Unterlagen in die Personalakte. Andernfalls löschen wir Bewerbungsunterlagen spätestens sechs Monate nach Abschluss des Verfahrens – auch aus E-Mail-Postfächern und Sicherungskopien –, es sei denn, Sie haben in eine längere Aufbewahrung (z. B. für spätere Stellen) ausdrücklich eingewilligt; diese Einwilligung können Sie jederzeit widerrufen.</p>
      <p>Bitte senden Sie uns keine sensiblen Dokumente (Ausweiskopien, Gesundheitsdaten) und beachten Sie den Hinweis zu unverschlüsselten E-Mails unter 4.2.</p>

      <LegalHeading>7. Externe Links</LegalHeading>
      <p>Unsere Website enthält Links zu externen Angeboten, insbesondere zu unserem Google-Unternehmensprofil, zur Routenplanung bei Google Maps und zu WhatsApp. Beim Aufruf unserer Seiten werden keine Daten an diese Anbieter übertragen; erst wenn Sie einen Link anklicken, verlassen Sie unsere Website, und es gelten die Datenschutzbestimmungen des jeweiligen Anbieters (Google: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>). Karten oder Bewertungen betten wir nicht als Fremdinhalte ein.</p>

      <LegalHeading>8. Schriftarten, Skripte, Cookies</LegalHeading>
      <p>Die auf dieser Website verwendeten Schriftarten (Inter, Manrope) und alle Skripte sind lokal auf unserem Server gespeichert; eine Verbindung zu Servern Dritter findet dabei nicht statt.</p>
      <p>Wir setzen keine Cookies ein und speichern keine Informationen in Ihrem Endgerät, die nicht für die Anzeige der Website unbedingt erforderlich wären (§ 25 Abs. 2 Nr. 2 TDDDG). Es findet keine Reichweitenmessung, kein Profiling und keine automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO statt.</p>

      <LegalHeading>9. Empfänger und Weitergabe</LegalHeading>
      <p>Ihre Daten geben wir nur weiter, soweit dies zur Bearbeitung Ihres Anliegens erforderlich ist (z. B. Anmeldung Ihrer Anlage beim Netzbetreiber in Ihrem Auftrag, Einbindung eines Partnerbetriebs für Dacharbeiten nach Absprache), gesetzlich vorgeschrieben ist (z. B. Steuerberatung, Finanzbehörden) oder Sie eingewilligt haben. Auftragsverarbeiter (Hosting, E-Mail: STRATO GmbH) sind vertraglich nach Art. 28 DSGVO gebunden. Eine Übermittlung in Drittländer erfolgt nur im Rahmen der unter 5. beschriebenen WhatsApp-Kommunikation, wenn Sie diesen Weg wählen.</p>

      <LegalHeading>10. Ihre Rechte</LegalHeading>
      <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
      <LegalList>
        <li>Recht auf Auskunft (Art. 15 DSGVO),</li><li>Recht auf Berichtigung (Art. 16 DSGVO),</li><li>Recht auf Löschung (Art. 17 DSGVO),</li><li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO),</li><li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO),</li><li>Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO).</li>
      </LegalList>
      <p>Zur Ausübung Ihrer Rechte genügt eine Nachricht an <a href="mailto:info@nahad-energie.de">info@nahad-energie.de</a> oder an die oben genannte Postanschrift.</p>

      <LegalHeading>11. Widerspruchsrecht (Art. 21 DSGVO)</LegalHeading>
      <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) erfolgt, Widerspruch einzulegen. Wir verarbeiten die Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Richten Sie Ihren Widerspruch formlos an <a href="mailto:info@nahad-energie.de">info@nahad-energie.de</a>.</p>

      <LegalHeading>12. Beschwerderecht bei einer Aufsichtsbehörde</LegalHeading>
      <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig für uns ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf, Telefon 0211 38424-0, E-Mail <a href="mailto:poststelle@ldi.nrw.de">poststelle@ldi.nrw.de</a>, <a href="https://www.ldi.nrw.de">www.ldi.nrw.de</a>. Sie können sich auch an die Aufsichtsbehörde Ihres Wohnorts wenden.</p>

      <LegalHeading>13. Datensicherheit</LegalHeading>
      <p>Diese Website nutzt eine TLS-Verschlüsselung (erkennbar an „https://“ und dem Schloss-Symbol im Browser). Daten, die Sie über das Formular übermitteln, können auf dem Übertragungsweg nicht von Dritten mitgelesen werden. Wir sichern unsere Systeme durch technische und organisatorische Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung durch unbefugte Personen.</p>

      <LegalHeading>14. Änderungen</LegalHeading>
      <p>Wir passen diese Datenschutzerklärung an, wenn sich die Rechtslage oder unsere Website ändert. Es gilt die jeweils hier veröffentlichte Fassung.</p>
    </LegalPage>
  ),
});
