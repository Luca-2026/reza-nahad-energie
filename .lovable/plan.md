# Anleitung übertragen + statischer Export für STRATO

Ziel: Die Website läuft später wie SLT Rental als reine Dateisammlung (HTML, CSS, JS, Bilder, PHP-Formular), die per FTP zu STRATO hochgeladen wird. Die Lovable-Vorschau bleibt wie gewohnt nutzbar. WhatsApp wird vorerst überall entfernt, das runde Logo bleibt.

## 1. Statischer Export (Prompt 10 der Anleitung)
- Jede Seite wird beim Bauen einmal fertig als HTML-Datei erzeugt (`/leistungen/wallbox/index.html` usw.) – alle 22 Seiten plus 404-Seite. Kein Server nötig, Suchmaschinen sehen den vollständigen Text.
- `.htaccess` für Apache: saubere URLs ohne Schrägstrich am Ende, Weiterleitung auf https und ohne www, eigene 404-Seite, Caching für Bilder/Schriften/Skripte, Kompression.
- `robots.txt` und `sitemap.xml` statisch im Projekt pflegen (alle echten Seiten, Referenzen weiterhin ausgeschlossen).
- Nach dem Umbau erstelle ich ein ZIP „nahad-energie-strato.zip“ mit dem hochladbaren Inhalt und prüfe es lokal mit einem einfachen Apache-ähnlichen Test.

## 2. Kontaktformular (Prompt 6)
- `api/contact.php` für STRATO: Pflichtfelder prüfen, Honeypot „website“, Zeit-Token gegen Bots, Mailversand an info@nahad-energie.de per PHP-`mail()`, Antwort als JSON.
- Formular sendet an `/api/contact.php`; in der Lovable-Vorschau wird der Versand nur simuliert (Erfolgsmeldung mit Hinweis).
- Felder laut Anleitung: Name*, Telefon*, E-Mail*, Leistung*, PLZ/Ort, Nachricht*, Rückruf-Zeitfenster; Fehler direkt am Feld; Datenschutz-Hinweistext statt Pflicht-Häkchen.

## 3. Fundament (Prompt 1)
- Farben exakt nach Knowledge (Navy 216 62% 18%, Amber 40 96% 52% …, success).
- Schriften Inter/Manrope lokal eingebunden, alle Google-Fonts-Verweise entfernt.
- Kopfbereich: Mega-Menü „Leistungen“ mit drei Spalten (Installation & Sicherheit / Energie / Komfort & Gewerbe), Telefon + „Anfrage senden“; mobil Menü mit aufklappbaren Leistungen.
- Mobile Leiste unten: vorerst nur „Anrufen“ und „Anfrage“ (auf /kontakt ausgeblendet).
- Fußbereich mit vier Spalten und Qualifikationsleiste (Meisterbetrieb, HWK Düsseldorf, Installateurverzeichnis Netzgesellschaft); fehlende Bürozeiten/Notdienstzeiten bleiben als deutlich markierte offene Angaben.
- Skip-Link, sichtbarer Fokus, aria-current, reduzierte Bewegung.

## 4. Seiten & SEO (Prompts 2–5, 7–9, 12)
- Abgleich aller Seiten gegen die Anleitung: Reihenfolge der Abschnitte, Titel (≤ 60 Zeichen), Beschreibungen (≤ 155), canonical ohne Schrägstrich, og-Bild, JSON-LD (Electrician, Service, FAQPage, BreadcrumbList).
- Leistungsseiten ohne Foto zeigen eine Navy-Fläche mit Symbol statt Bild.
- Bewertungen/Referenzen bleiben ohne erfundene Inhalte.
- Rechtsseiten (Prompt 8) bleiben Platzhalter, solange die Texte aus Teil E fehlen.

## Offen bleibt (braucht Ihre Angaben)
WhatsApp-Nummer, Bürozeiten, Notdienstzeiten, Koordinaten/Google-Profil-Link, Bewertungen, Rechtstexte, SVG-Logo, E-Mail-Empfänger fürs Formular (Standard: info@nahad-energie.de).

## Technische Details
- Das Projekt bleibt auf der vorhandenen Grundstruktur (Plattformvorgabe); statt vite-react-ssg wird die eingebaute Vorab-Erzeugung genutzt: `prerender.enabled`, `autoStaticPathsDiscovery: false`, vollständige `pages`-Liste inkl. aller Leistungs-Slugs; Ausgabe des Client-Ordners ist das FTP-Paket.
- Keine Serverfunktionen/Loader mit Serverzugriff, damit alles ohne Server läuft; Kontakt ausschließlich über PHP.
- Fonts via `@fontsource-variable/inter` und `@fontsource-variable/manrope`, importiert in `styles.css`.
- Entscheidung wird in AGENTS.md festgehalten.
