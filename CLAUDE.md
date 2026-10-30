# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`open-ui` (`@opensuite/ui`) is the shared design system of OpenSuite, published as a **Nuxt layer** (Nuxt 4 / Nuxt UI 4) consumed by `../Watch/front` and `../MainSite` via `extends: ['@opensuite/ui']`. Code comments, commit messages, docs and user-facing messages are written in **French**; keep that convention.

Two roles:
- **The layer**, at the repository root: `nuxt.config.ts`, `app/assets/css/main.css` (font, colors, chart palette, navbar, page transitions), `app/components/OpenSuite/*`, `app/layouts/auth.vue`, `public/favicon.ico`. Everything here is inherited by child projects.
- **The catalogue**, in `.playground/` (`extends: ['..']`): an "admin template" app showing every Nuxt UI and OpenSuite component. Never put catalogue pages in the layer's `app/pages`: they would be merged into child projects' routes.

## Commands

Everything runs in Docker via `docker-compose.local.yml` (driven by the `Makefile`). Setup: copy `.env.example` → `.env`, then `make up`.

- Catalogue: http://localhost:3001 (`PLAYGROUND_PORT`, Nuxt dev server with hot reload, container `nuxt-dev`)
- `make logs` / `make down` / `make restart`
- npm scripts target the playground: `nuxt dev .playground`, `nuxt build .playground`, `nuxt prepare .playground`

No linter/formatter, tests or CI are configured. The catalogue is not deployed.

## Layer rules

- Use paths relative to the layer (`createResolver(import.meta.url)`) in `nuxt.config.ts`, never `~` (it points to the consuming project).
- Child projects reference the layer CSS with `@reference "#open-ui/assets/css/main.css"` (alias defined in `nuxt.config.ts`).
- `nuxt`, `@nuxt/ui` and `tailwindcss` are `peerDependencies` (and `devDependencies` for the catalogue). Keep versions aligned with Watch.
- Custom components are prefixed `OpenSuite` **through the folder tree only** (`app/components/OpenSuite/User/Avatar.vue` → `OpenSuiteUserAvatar`). Don't repeat path segments in file names, don't set `pathPrefix: false` or a component prefix in config. Group related components by domain folder.
- The layer provides no `app.vue` and no `title`: each child project keeps its own.
- The rendering must stay identical to what child projects show; visual changes are deliberate design-system changes.

## Catalogue rules

Catalogue pages are **frozen showcases**: only edit them to add a new component or remove an obsolete one. Any visual change goes through the layer (CSS, OpenSuite components, theme config), never through a page.

- No `<style>` in pages, and no utility class changing a showcased component's look (color, radius, font, shadow...). Only layout classes (grids, spacing, widths), preferably through the `Showcase*` blocks.
- Show components as the design system renders them: props and variants only (`color`, `variant`, `size`, `disabled`, `loading`...). Iterate over the lists in `.playground/app/utils/showcase.ts` (`colors`, `sizes`, `buttonVariants`...).
- Demo data (users, rows, menu items...) lives in `.playground/app/utils/demo.ts`, not in pages.
- Adding a component: one entry in `.playground/app/utils/navigation.ts` (single source for the sidebar, the search and each page's title/description/doc link) + one page at the entry's path built with `ShowcasePage` / `ShowcaseSection` / `ShowcaseGrid` / `ShowcaseItem`.
- Pages without `<script lang="ts">` must not use TypeScript syntax in templates (`as const`, `!`): put typed lists in `utils/`.
- Catalogue-only components live in `.playground/app/components/Showcase/` (presentation blocks) and `.playground/app/components/Demo/` (dashboard and login demos).

## Code conventions

- Prefer code readability and simplicity over heavy engineered code. Respect KISS, SOLID, and DRY principles.
- Don't over comment your code. Do not include emojis unless the user requests it.
