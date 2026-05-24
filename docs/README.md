# Friday Web Page Docs

This folder documents the pages and route endpoints in the Astro site. It is separate from `src/content/docs`, which contains public documentation rendered at `/docs`.

The page notes were written from:

- Astro route files in `src/pages`.
- Site data in `src/data`.
- Content collections in `src/content`.
- Feature source docs from `/Users/haraldbregu/Documents/friday/docs/features`.

## Page Files

| Route | Page doc | Source |
| --- | --- | --- |
| `/` | [Home](pages/home.md) | `src/pages/index.astro` |
| `/operators/` | [Operators](pages/operators.md) | `src/pages/operators.astro` |
| `/community/` | [Community](pages/community.md) | `src/pages/community.astro` |
| `/integrations/` | [Integrations](pages/integrations.md) | `src/pages/integrations.astro` |
| `/providers/` | [Providers](pages/providers.md) | `src/pages/providers.astro` |
| `/tools/` | [Tools](pages/tools.md) | `src/pages/tools.astro` |
| `/channels/` | [Channels](pages/channels.md) | `src/pages/channels.astro` |
| `/blog/` | [Blog Index](pages/blog-index.md) | `src/pages/blog/index.astro` |
| `/blog/[slug]/` | [Blog Post](pages/blog-slug.md) | `src/pages/blog/[slug].astro` |
| `/docs/` | [Docs Index](pages/docs-index.md) | `src/pages/docs/index.astro` |
| `/docs/[...slug]/` | [Docs Reader](pages/docs-slug.md) | `src/pages/docs/[...slug].astro` |
| `/it/` | [Italian Home](pages/it-home.md) | `src/pages/it/index.astro` |
| `/it/operators/` | [Italian Operators](pages/it-operators.md) | `src/pages/it/operators.astro` |
| `/it/community/` | [Italian Community](pages/it-community.md) | `src/pages/it/community.astro` |
| `/it/integrations/` | [Italian Integrations](pages/it-integrations.md) | `src/pages/it/integrations.astro` |
| `/404.html` | [404](pages/404.md) | `src/pages/404.astro` |
| `/robots.txt` | [Robots](pages/robots-txt.md) | `src/pages/robots.txt.js` |
| `/rss.xml` | [RSS](pages/rss-xml.md) | `src/pages/rss.xml.js` |

## Feature Source Map

Use these feature docs when updating page copy or adding new public docs:

- `/Users/haraldbregu/Documents/friday/docs/features/index.md` for the product feature map and status language.
- `/Users/haraldbregu/Documents/friday/docs/features/agents-and-subagents.md` for assistant runtime and subagent claims.
- `/Users/haraldbregu/Documents/friday/docs/features/skills.md` for skill discovery, ranking, execution, and safety.
- `/Users/haraldbregu/Documents/friday/docs/features/tooling-and-extensibility.md` for local tools, MCP, plugins, LSP, browser, memory, and sessions.
- `/Users/haraldbregu/Documents/friday/docs/features/connectors.md` for Gmail, Google Calendar, Google Drive, MCP, and provider-hosted connector coverage.
- `/Users/haraldbregu/Documents/friday/docs/features/channels.md` for channel catalog and Telegram runtime status.
- `/Users/haraldbregu/Documents/friday/docs/features/providers-and-models.md` for provider and model runtime status.
- `/Users/haraldbregu/Documents/friday/docs/features/background-tasks.md` for immediate background agent work.
- `/Users/haraldbregu/Documents/friday/docs/features/cron-scheduled-tasks.md` for scheduled and recurring work.
- `/Users/haraldbregu/Documents/friday/docs/features/heartbeat.md` for periodic agent check-ins.
- `/Users/haraldbregu/Documents/friday/docs/features/realtime-transcription.md` for speech-to-text runtime support.
- `/Users/haraldbregu/Documents/friday/docs/features/desktop-application.md` for desktop shell and platform claims.
- `/Users/haraldbregu/Documents/friday/docs/features/plugins-and-agent-harnesses.md` for plugin manifest and agent harness claims.
- `/Users/haraldbregu/Documents/friday/docs/features/browser-automation.md` for managed browser automation.
- `/Users/haraldbregu/Documents/friday/docs/features/memory-sessions-workspace.md` for sessions, memory, and workspace context.
- `/Users/haraldbregu/Documents/friday/docs/features/coding-agents-in-background.md` for background coding work.
