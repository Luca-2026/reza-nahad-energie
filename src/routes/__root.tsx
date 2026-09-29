import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteLayout } from "@/components/site/SiteLayout";
import { areaServed, jsonLd } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-16">
      <meta name="robots" content="noindex" />
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-extrabold text-primary">Diese Seite gibt es nicht (mehr).</h1>
        <p className="mt-3 text-muted-foreground">Vielleicht hat sich die Adresse geändert. Hier geht es weiter:</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-3 font-semibold text-primary">
          <li><Link to="/" className="underline">Startseite</Link></li>
          <li><Link to="/leistungen" className="underline">Leistungen</Link></li>
          <li><Link to="/kontakt" className="underline">Kontakt</Link></li>
          <li><Link to="/notdienst" className="underline">Notdienst</Link></li>
        </ul>
        <p className="mt-6 text-sm">Telefon: <a href="tel:+4921154268296" className="font-bold text-primary">0211 54268296</a></p>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nahad Energie Elektrotechnik" },
      { name: "description", content: "Elektrotechnik-Meisterbetrieb in Düsseldorf." },
      { name: "author", content: "Nahad Energie Elektrotechnik" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=Manrope:wght@600..800&display=swap" },
    ],
    scripts: [
      jsonLd({
        "@type": "Electrician",
        name: "Nahad Energie Elektrotechnik",
        telephone: "+49 211 54268296",
        founder: { "@type": "Person", name: "Reza Nahad", jobTitle: "Elektrotechnikermeister" },
        address: { "@type": "PostalAddress", streetAddress: "Vogelsanger Weg 38", postalCode: "40470", addressLocality: "Düsseldorf", addressCountry: "DE" },
        areaServed: areaServed.map((name) => ({ "@type": "City", name })),
        priceRange: "€€",
      }),
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </QueryClientProvider>
  );
}
