# Portfolio Pam

A creative portfolio site built with **Next.js** and **Sanity CMS**. Content (copy, SEO, projects, and site settings) is edited in Sanity Studio and rendered as Server Components with **view transitions** between routes.

## Stack

| Layer | Choice |
|--------|--------|
| Framework | Next.js 16 (App Router, Turbopack dev) |
| UI | React 19, CSS + `styled-components`, `classnames` |
| CMS | Sanity v5 (`@sanity/client`, `next-sanity`, embedded Studio) |
| Fonts | Syne + Manrope (`next/font`) |
| Transitions | `next-view-transitions` |

## What’s in the repo

- **Home** — Hero (with interactive splash background), Featured Work, Precision, Showreel; metadata from Sanity `homePage` + projects.
- **Projects** — Dynamic project detail routes (`/projects/[id]`) fed by Sanity project documents.
- **Contact** — Contact page content from Sanity `contactPage`.
- **Studio** — Sanity Studio at `/studio` (see `sanity.config.js` for `basePath` and project wiring).
- **Global shell** — Header, footer, and site title/description from `siteSettings` in Sanity.

## Scripts

Use **pnpm** (see project conventions).

```bash
pnpm install
pnpm dev              # Next.js dev server (Turbopack)
pnpm build && pnpm start
pnpm lint
pnpm sanity:dev       # Sanity Studio dev (if editing Studio outside Next)
pnpm sanity:deploy-schema   # Deploy schema to Sanity when types change
```

## Sanity configuration

Schema types live under `schemaTypes/` and are registered in `schemaTypes/index.ts`. The public API client is `src/lib/sanity/client.ts` (project ID, dataset, and API version). After schema changes, deploy the schema and publish content in Studio so the site matches.

## Project milestones

Chronological highlights from the evolution of this codebase:

1. **Foundation** — Next.js app scaffold (`create-next-app`).
2. **Portfolio layout** — App shell, main sections, contact route, and a custom not-found page.
3. **Component pass** — Styling refactors, shared UI primitives, and clearer media/alt usage across sections.
4. **Navigation & layout** — Responsive header with mobile menu behavior.
5. **Sanity integration** — Projects and page documents wired through GROQ helpers; homepage and layouts consume CMS-driven copy and SEO fields.
6. **Hardening** — Stronger TypeScript around project types, `AppShell` structure, schema/documentation alignment, and ESLint updates.
7. **Hero & polish** — Hero and splash background enhancements for the landing experience.

## Further reading

- [Sanity documentation](https://www.sanity.io/docs)
- [Next.js documentation](https://nextjs.org/docs) — verify behavior against your installed version (`node_modules/next/dist/docs/` locally).
