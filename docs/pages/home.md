# Home Page

Route: `/`

Source: `src/pages/index.astro`

## Purpose

The home page is the primary product overview for Friday. It introduces Friday as a local-first desktop AI assistant and routes users toward product sections, documentation, integrations, and download actions.

## Content Sources

- Layout metadata comes from `src/data/site.json`.
- Main product copy, metrics, feature cards, connector cards, channel names, FAQ items, and demo prompts come from `src/data/friday-product.json`.
- The page shell is `src/components/LandingPage.astro`, rendered inside `src/layouts/Layout.astro`.
- Locale content is resolved through `getLocaleContent("en")` in `src/i18n.ts`.

## Feature Docs Used

- `/Users/haraldbregu/Documents/friday/docs/features/index.md`
- `/Users/haraldbregu/Documents/friday/docs/features/agents-and-subagents.md`
- `/Users/haraldbregu/Documents/friday/docs/features/skills.md`
- `/Users/haraldbregu/Documents/friday/docs/features/tooling-and-extensibility.md`
- `/Users/haraldbregu/Documents/friday/docs/features/connectors.md`
- `/Users/haraldbregu/Documents/friday/docs/features/channels.md`
- `/Users/haraldbregu/Documents/friday/docs/features/providers-and-models.md`
- `/Users/haraldbregu/Documents/friday/docs/features/background-tasks.md`
- `/Users/haraldbregu/Documents/friday/docs/features/cron-scheduled-tasks.md`
- `/Users/haraldbregu/Documents/friday/docs/features/heartbeat.md`

## Notes

Keep status language explicit. The source feature docs distinguish runtime implemented, partial runtime, and catalog or pending runtime. The home page currently uses those distinctions for desktop agent runtime, subagents, skills, background work, cron, heartbeat, connectors, channels, providers, and model routing.
