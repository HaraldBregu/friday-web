---
title: "Tasks"
description: "This document indexes Friday's task-related modules and the task types they own or dispatch."
category: "Tasks"
sourcePath: "tasks/index.md"
order: 50
---
This document indexes Friday's task-related modules and the task types they
own or dispatch.

## Task Modules

| Module | Store key | Documentation | Purpose |
| --- | --- | --- | --- |
| Background task | `backgroundTask` | [background.md](/docs/tasks/background/) | Runs immediate in-memory tasks through registered handlers. |
| Task scheduler | `taskScheduler` | [scheduled.md](/docs/tasks/scheduled/) | Persists schedules and creates due scheduled work. |

## Current Background Task Types

These task types are registered as user-facing background tasks at startup.

| Task type | Handler | Purpose | Related docs |
| --- | --- | --- | --- |
| `agent.run` | `AgentTaskHandler` | Runs an agent turn as a cancellable task. | [Large language model](/docs/models/large-language-model/) |
| `image.create` | `ImageCreateTaskHandler` | Runs text-to-image work through the image module. | [Text to image](/docs/models/text-to-image/) |
| `ocr.run` | `OcrTaskHandler` | Runs OCR extraction against the configured OCR endpoint/module. | [OCR](/docs/models/ocr/) |

## Planned Module-Backed Task Types

These task types are documented as module-backed work but are not all
registered as user-facing handlers today.

| Task type | Target module | Related docs |
| --- | --- | --- |
| `text-to-speech.run` | Text to speech | [Text to speech](/docs/models/text-to-speech/) |
| `speech-to-text.transcribe` | Speech to text | [Speech to text](/docs/models/speech-to-text/) |
| `video.create` | Text to video | [Text to video](/docs/models/text-to-video/) |
| `sound.create` | Text to audio | [Text to audio](/docs/models/music-creator/) |
| `embedding.index` | Embedding | [Embedding](/docs/models/embedding/) |

## Scheduled Task Types

Managed schedules store a `taskType` string plus sanitized `taskInput`.
The scheduler owns timing, persistence, missed-run handling, retries, and
auditing; the target handler or module owns execution.

Documented scheduled task examples include:

| Task type | Source | Purpose |
| --- | --- | --- |
| `image.create` | Module-backed schedule | Creates an image through the background task/image module path. |
| `cron.agentTurn` | Friday cron scheduler | Runs an agent turn from a Friday tool schedule. |
| `reminder.show` | Cron example | Demonstrates reminder-style scheduled work. |
| `cron.maintenance` | Cron example | Demonstrates maintenance scheduled work. |
| `memory.compact` | Cron example | Demonstrates memory compaction scheduled work. |
| `ai.agent.run` | Cron example | Demonstrates an agent scheduled task shape. |

Cron payloads must not store API keys, base URLs, webhook secrets, raw provider
records, or other credentials.

## Related Docs

- [Modules](/docs/modules/)
- [Store](/docs/data/store/)
- [Tools](/docs/ai/tools/)
