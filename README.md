# Friday Static Marketing Site

Astro static marketing site for a developer-facing AI/productivity product.
The current copy uses tasteful defaults because the project placeholders were
not filled in:

- `PROJECT_NAME`: Friday
- `PROJECT_DESCRIPTION`: A desktop AI command center that connects models, tools, files, and team channels from one focused chat interface.
- `TARGET_AUDIENCE`: Developers, founders, and operators
- `CTA_TEXT`: Join the waitlist
- `CTA_URL`: `#waitlist`
- `SECONDARY_CTA_TEXT`: View integrations
- `SECONDARY_CTA_URL`: `/integrations`

Replace these in [src/data/site.json](src/data/site.json).

## Commands

```sh
bun install
bun run dev
bun run build
bun run preview
```

## Deploying to Vercel

The repository includes `vercel.json` so Vercel can build the static Astro
site with Bun and serve the generated `dist` directory.

Recommended Vercel settings:

- Framework Preset: `Astro`
- Install Command: `bun install --frozen-lockfile`
- Build Command: `bun run build`
- Output Directory: `dist`

Set `PUBLIC_SITE_URL` in Vercel to the final production URL, for example
`https://friday.example.com`. If it is not set, the build falls back to Vercel's
deployment URL and then to the placeholder URL in `astro.config.mjs`.

## Project Structure

```txt
public/
  favicon.svg
  og-image.svg
  robots.txt
src/
  components/       Reusable Astro components
  content/blog/     Markdown blog posts
  data/             JSON content for features, integrations, proof, and links
  layouts/          Shared page and blog layouts
  pages/            Static routes and RSS feed
  styles/global.css Custom CSS variables and responsive styling
```

## Customization Notes

- Global colors, spacing, typography, borders, and shadows live in `src/styles/global.css`.
- Reusable content lives in `src/data/*.json`.
- Blog posts are Markdown files in `src/content/blog`.
- SEO defaults, Open Graph image, canonical URLs, and theme initialization are handled in `src/layouts/Layout.astro`.
- The site is configured for static output in `astro.config.mjs`.
- Optional analytics can be added in `Layout.astro` near the closing `body` tag, then removed without touching page components.
