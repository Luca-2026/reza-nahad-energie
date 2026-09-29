<?php
/**
 * Kontaktformular-Endpunkt für STRATO (PHP 8).
 * GET  -> liefert ein zeitgebundenes Token
 * POST -> prüft Eingaben, Honeypot, Token, Rate-Limit und versendet E-Mails über Resend.
 */
declare(strict_types=1);

// ---- Konfiguration --------------------------------------------------------
const MAIL_TO      = 'info@nahad-energie.de';
const MAIL_FROM    = 'website@nahad-energie.de'; // Absender, Domain muss bei Resend bestätigt sein
const MAIL_FROM_NAME = 'Nahad Energie Elektrotechnik';
const PHONE_DISPLAY  = '0211 54268296';
// Resend-API-Key steht NICHT hier, sondern in api/config.php:
//   <?php const RESEND_API_KEY = 're_...';
if (is_file(__DIR__ . '/config.php')) require __DIR__ . '/config.php';
// Bitte beim ersten Upload durch eine lange Zufallszeichenfolge ersetzen:
const TOKEN_SECRET = 'BITTE-AENDERN-lange-zufaellige-zeichenfolge';
const TOKEN_MIN_AGE = 3;      // Sekunden – schneller ausgefüllt = Bot
const TOKEN_MAX_AGE = 7200;   // 2 Stunden
const RATE_LIMIT    = 5;      // Anfragen pro IP ...
const RATE_WINDOW   = 900;    // ... in 15 Minuten
// ---------------------------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

function make_token(int $ts): string {
    return $ts . '.' . hash_hmac('sha256', (string)$ts, TOKEN_SECRET);
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    respond(200, ['ok' => true, 'token' => make_token(time())]);
}
if ($method !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > 20000) respond(400, ['ok' => false, 'error' => 'bad_request']);
$data = json_decode($raw, true);
if (!is_array($data)) respond(400, ['ok' => false, 'error' => 'bad_request']);

// Honeypot: Bots füllen das versteckte Feld aus -> still "Erfolg" melden
if (!empty($data['website'])) respond(200, ['ok' => true]);

// Token prüfen
$token = (string)($data['token'] ?? '');
$parts = explode('.', $token, 2);
if (count($parts) !== 2 || !ctype_digit($parts[0]) || !hash_equals(make_token((int)$parts[0]), $token)) {
    respond(400, ['ok' => false, 'error' => 'invalid_token']);
}
$age = time() - (int)$parts[0];
if ($age < TOKEN_MIN_AGE || $age > TOKEN_MAX_AGE) respond(400, ['ok' => false, 'error' => 'invalid_token']);

// Rate-Limit pro IP (Dateien im System-Temp-Ordner)
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rlFile = rtrim(sys_get_temp_dir(), '/') . '/nahad_rl_' . hash('sha256', $ip);
$hits = [];
if (is_file($rlFile)) {
    $hits = array_filter((array)json_decode((string)file_get_contents($rlFile), true), fn($t) => is_int($t) && $t > time() - RATE_WINDOW);
}
if (count($hits) >= RATE_LIMIT) respond(429, ['ok' => false, 'error' => 'rate_limited']);

// Validierung
$clean = fn($v) => trim(str_replace(["\r", "\0"], '', (string)$v));
$name     = $clean($data['name'] ?? '');
$phone    = $clean($data['phone'] ?? '');
$email    = $clean($data['email'] ?? '');
$service  = $clean($data['service'] ?? '');
$location = $clean($data['location'] ?? '');
$message  = trim(str_replace("\0", '', (string)($data['message'] ?? '')));
$callback = $clean($data['callback'] ?? '');

$services = ['Elektroinstallation','Zählerschrank/Sicherungskasten','Photovoltaik/Speicher','Wallbox','Wärmepumpe-Anschluss','Smart Home','Prüfung/E-Check','DGUV V3','Beleuchtung','Netzwerk/Türsprechanlage','Gewerbe/Hausverwaltung','Notdienst/Störung','Sonstiges'];
$callbacks = ['', 'egal', 'vormittags', 'nachmittags', 'abends bis 19 Uhr'];

$fields = [];
$len = fn($s) => mb_strlen($s, 'UTF-8');
if ($len($name) < 2 || $len($name) > 100 || preg_match('/[\n]/', $name)) $fields['name'] = 'Bitte geben Sie Ihren Namen an.';
if ($len($phone) < 6 || $len($phone) > 30 || !preg_match('#^[0-9+\s/()\-]+$#', $phone)) $fields['phone'] = 'Bitte geben Sie eine gültige Telefonnummer an.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $len($email) > 255) $fields['email'] = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
if (!in_array($service, $services, true)) $fields['service'] = 'Bitte wählen Sie eine Leistung aus.';
if ($len($location) > 60) $fields['location'] = 'Maximal 60 Zeichen.';
if ($len($message) < 10 || $len($message) > 5000) $fields['message'] = 'Bitte beschreiben Sie Ihr Anliegen (10–5000 Zeichen).';
if (!in_array($callback, $callbacks, true)) $callback = '';
if ($fields) respond(422, ['ok' => false, 'error' => 'validation', 'fields' => $fields]);

// E-Mail versenden
$subject = 'Neue Anfrage über nahad-energie.de: ' . $service;
$body = "Neue Anfrage über das Kontaktformular\n\n"
      . "Name:      $name\n"
      . "Telefon:   $phone\n"
      . "E-Mail:    $email\n"
      . "Leistung:  $service\n"
      . "PLZ/Ort:   " . ($location !== '' ? $location : '-') . "\n"
      . "Rückruf:   " . ($callback !== '' ? $callback : '-') . "\n\n"
      . "Nachricht:\n$message\n\n"
      . "--\nGesendet am " . date('d.m.Y H:i') . " Uhr\n";

function resend_send(array $payload): bool {
    if (!defined('RESEND_API_KEY') || RESEND_API_KEY === '') return false;
    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . RESEND_API_KEY, 'Content-Type: application/json'],
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
    ]);
    $res = curl_exec($ch);
    $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($code < 200 || $code >= 300) { error_log('Resend-Fehler [' . $code . ']: ' . (string)$res); return false; }
    return true;
}

$from = MAIL_FROM_NAME . ' <' . MAIL_FROM . '>';
$sent = resend_send([
    'from' => $from,
    'to' => [MAIL_TO],
    'reply_to' => $email,
    'subject' => $subject,
    'text' => $body,
]);

// Eingangsbestätigung an den Kunden (Fehler hier blockieren die Anfrage nicht)
if ($sent) {
    $confirm = "Guten Tag $name,\n\n"
        . "vielen Dank für Ihre Anfrage zum Thema „{$service}“. Sie ist bei uns eingegangen.\n\n"
        . "So geht es weiter: Wir melden uns während unserer Bürozeiten (Montag–Freitag, 08:00–17:00 Uhr) telefonisch oder per E-Mail bei Ihnen.\n"
        . "Wenn es dringend ist, rufen Sie uns gern direkt an: " . PHONE_DISPLAY . "\n\n"
        . "Ihre Nachricht:\n$message\n\n"
        . "Mit freundlichen Grüßen\nReza Nahad\nNahad Energie Elektrotechnik\nVogelsanger Weg 38, 40470 Düsseldorf\n"
        . "Telefon " . PHONE_DISPLAY . " · " . MAIL_TO . "\nhttps://nahad-energie.de\n";
    resend_send([
        'from' => $from,
        'to' => [$email],
        'reply_to' => MAIL_TO,
        'subject' => 'Ihre Anfrage bei Nahad Energie ist eingegangen',
        'text' => $confirm,
    ]);
}

if (!$sent) respond(500, ['ok' => false, 'error' => 'send_failed']);

$hits[] = time();
@file_put_contents($rlFile, json_encode(array_values($hits)));
respond(200, ['ok' => true]);
