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

- Use the existing TanStack Start application structure; the hosted preview requires it and all pages stay within that routing system.
- Keep brand media as Lovable Assets pointers, except the derived favicon; this avoids committing large uploaded binaries.
- Site pages follow SEO plan B.3; service pages are data-driven from src/lib/site.ts via /leistungen/$slug — one source for titles, H1 and links.
- Shared header/footer live in SiteLayout, mounted in __root — every page gets the same navigation.
