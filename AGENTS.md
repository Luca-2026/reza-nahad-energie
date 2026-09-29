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
- Every public page is prerendered to static HTML (vite.config.ts `pages` list) so dist/client can be FTP-uploaded to STRATO Apache; keep the list, sitemap.xml and .htaccess in sync.
- No server functions or server-only loaders: the live site has no Node server; the contact form posts to public/api/contact.php (PHP on STRATO), mocked in the preview via src/lib/contactApi.ts.
- scripts/package-strato.py builds the FTP ZIP and copies Lovable Asset images into it under their original /__l5e/ paths.
- Responsive page hierarchy is centralized in SiteLayout and semantic CSS utilities; this keeps all static routes visually consistent on mobile and desktop.
