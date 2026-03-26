<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Directives

## Stack and Tools
- Use `pnpm` for all package management commands.
- Treat this as a TypeScript-first codebase.
- Prefer existing project patterns over introducing new abstractions.
- Keep dependencies minimal and aligned with current project needs.

## Next.js Rules
- Verify Next.js behavior against local docs in `node_modules/next/dist/docs/`.
- Prefer Server Components by default; use Client Components only when required.
- Keep request/data APIs aligned with the installed Next.js version.

## Sanity and Content Modeling
- Keep schema types strongly typed and consistent (`.ts` over `.js`).
- Use clear, stable field names and avoid breaking schema changes unless required.
- Keep schema exports centralized through `schemaTypes/index.ts`.

# Code Style

## TypeScript
- Avoid `any`; use explicit types, unions, and utility types when needed.
- Keep function signatures and return types clear.
- Prefer small, focused helpers over large multi-purpose functions.

## Imports and Structure
- Keep imports at the top of each file.
- Group imports consistently (external first, then internal).
- Use existing alias/path conventions already used in the repository.

## Readability
- Prefer descriptive variable and function names.
- Keep nesting shallow; return early when it improves clarity.
- Add short comments only for non-obvious logic.

## Consistency
- Match existing formatting and naming in nearby files.
- Do not introduce Tailwind suggestions unless explicitly requested.
