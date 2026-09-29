import { createFileRoute } from "@tanstack/react-router";
import { LegalHeading, LegalNote, LegalSubheading } from "@/components/site/LegalContent";
import { LegalPage } from "@/components/site/LegalPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/widerrufsbelehrung")({
  head: () => seo("/widerrufsbelehrung", "Widerrufsbelehrung | Nahad Energie", "Widerrufsbelehrung und Muster-Widerrufsformular von Nahad Energie Elektrotechnik."),
  component: () => (
    <LegalPage title="Widerrufsbelehrung">
      <LegalNote><p>Anlage zu jedem Verbraucher-Angebot/Auftrag (amtliches Muster, Dienstleistungs-Variante; unverändert verwenden):</p></LegalNote>

      <LegalHeading>Widerrufsbelehrung</LegalHeading>
      <LegalSubheading>Widerrufsrecht</LegalSubheading>
      <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
      <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
      <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Nahad Energie Elektrotechnik, Inhaber Reza Nahad, Vogelsanger Weg 38, 40470 Düsseldorf, Telefon 0211 54268296, E-Mail info@nahad-energie.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
      <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>

      <LegalSubheading>Folgen des Widerrufs</LegalSubheading>
      <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
      <p>Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.</p>
      <p><em>– Ende der Widerrufsbelehrung –</em></p>

      <LegalHeading>Muster-Widerrufsformular</LegalHeading>
      <p>(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)</p>
      <div className="space-y-5 border border-border bg-secondary p-5 sm:p-6">
        <p>– An Nahad Energie Elektrotechnik, Inhaber Reza Nahad, Vogelsanger Weg 38, 40470 Düsseldorf, E-Mail info@nahad-energie.de:</p>
        <p>– Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)</p>
        <p>– Bestellt am (*)/erhalten am (*)</p>
        <p>– Name des/der Verbraucher(s)</p>
        <p>– Anschrift des/der Verbraucher(s)</p>
        <p>– Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
        <p>– Datum</p>
        <p>_____________</p>
        <p>(*) Unzutreffendes streichen.</p>
      </div>

      <LegalNote><p>Zusätzliches Formular für Angebote/Auftragsformulare – separat zu unterschreiben, nicht vorangekreuzt:</p></LegalNote>
      <LegalHeading>Verlangen des vorzeitigen Leistungsbeginns</LegalHeading>
      <div className="space-y-6 border border-border p-5 sm:p-6">
        <p>☐ Ich verlange ausdrücklich, dass Nahad Energie Elektrotechnik mit der Ausführung der beauftragten Leistungen bereits vor Ablauf der 14-tägigen Widerrufsfrist beginnt. Mir ist bekannt, dass ich im Fall eines Widerrufs für die bis zum Widerruf erbrachten Leistungen einen angemessenen Betrag zahlen muss, der dem Anteil der bereits erbrachten Leistungen am vertraglich vereinbarten Gesamtumfang entspricht, und dass mein Widerrufsrecht erlischt, wenn der Vertrag von Nahad Energie Elektrotechnik vollständig erfüllt worden ist.</p>
        <p>Ort, Datum: ____________________ Unterschrift Kunde: ____________________</p>
        <p>☐ Ich bestätige, die Widerrufsbelehrung und das Muster-Widerrufsformular auf Papier erhalten zu haben.</p>
        <p>Ort, Datum: ____________________ Unterschrift Kunde: ____________________</p>
      </div>
    </LegalPage>
  ),
});