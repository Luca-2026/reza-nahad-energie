import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const COOKIE_NAME = "nahad_cookie_consent";
const SETTINGS_EVENT = "nahad:open-cookie-settings";
const MAX_AGE = 60 * 60 * 24 * 180;

type Consent = "accepted" | "rejected";

function readConsent(): Consent | null {
  const match = document.cookie.split("; ").find((entry) => entry.startsWith(`${COOKIE_NAME}=`));
  const value = match?.split("=")[1];
  return value === "accepted" || value === "rejected" ? value : null;
}

function saveConsent(value: Consent) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=${value}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax${secure}`;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(SETTINGS_EVENT));
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(readConsent() === null);
    const showSettings = () => setOpen(true);
    window.addEventListener(SETTINGS_EVENT, showSettings);
    return () => window.removeEventListener(SETTINGS_EVENT, showSettings);
  }, []);

  const choose = (value: Consent) => {
    saveConsent(value);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <section
      aria-label="Cookie-Einstellungen"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-border bg-background shadow-lg"
    >
      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-6">
        <div>
          <h2 className="text-lg font-extrabold text-primary">Ihre Cookie-Auswahl</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Wir verwenden keine Analyse- oder Werbe-Cookies. Nur Ihre Auswahl wird für sechs Monate in einem technisch notwendigen Cookie gespeichert. Mehr dazu in der <Link to="/datenschutz" className="font-semibold text-primary underline underline-offset-2">Datenschutzerklärung</Link>.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 md:min-w-[21rem]">
          <Button type="button" variant="outline" onClick={() => choose("rejected")}>Ablehnen</Button>
          <Button type="button" onClick={() => choose("accepted")}>Akzeptieren</Button>
        </div>
      </div>
    </section>
  );
}