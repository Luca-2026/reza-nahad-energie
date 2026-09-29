<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS.md

# Stack (verbindlich)
- Klassischer React-18 + Vite-5 + TypeScript + Tailwind-3 + shadcn/ui + react-router-dom-6-Stack (BrowserRouter). Statische Auslieferung als dist/ auf Apache-Shared-Hosting (STRATO). TanStack Start, SSR, Lovable Cloud, Supabase, Datenbanken und Auth sind verboten. Warum: Hosting-Ziel ist Shared Hosting ohne Server-Runtime.

# Konventionen
- Fonts lokal über @fontsource-variable/inter und @fontsource-variable/manrope, importiert in src/main.tsx. Keine <link>-Tags auf Google Fonts.
- Semantische Design-Tokens (HSL-Variablen in src/index.css) statt Hex-Werte in Komponenten.
- Kein window/document beim Modulladen; browser-only Code nur in useEffect (vorbereitet für späteres Pre-Rendering).
