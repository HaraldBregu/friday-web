---
title: "Modules"
description: "Friday modules are separated pieces of software. A module owns its runtime boundary, dependencies, root store settings, and service API. Some modules can also be wrapped as LLM tools, but..."
category: "Core"
sourcePath: "modules.md"
order: 0
---
Friday modules are separated pieces of software. A module owns its runtime
boundary, dependencies, root store settings, and service API. Some modules can
also be wrapped as LLM tools, but tool exposure is only one possible surface
for a module.

Store settings are documented in [store.md](/docs/data/store/). Each module owns one
root-level store property.

Use module terminology for product architecture, documentation, UI descriptions,
and future runtime boundaries.

## Rules

- Each module owns its dependencies and hides provider-specific behavior behind
  adapters.
- Credentials stay on configured provider records, never in task,
  schedule, channel, or tool payloads.
- Tool wrappers call modules; they do not become the module boundary.
- Service APIs are main-process boundaries that UI, IPC, tasks, schedules, and
  tools can call after validation.
- Provider/model overrides may pass ids only. API keys, base URLs, webhook
  secrets, and raw provider records must still resolve from `StoreService`.

## Module Inventory

| Module | Store key | Documentation | Surfaces |
| --- | --- | --- | --- |
| Task scheduler | `taskScheduler` | [scheduled.md](/docs/tasks/scheduled/) | Service, IPC, LLM tool `cron` |
| Background task | `backgroundTask` | [background.md](/docs/tasks/background/) | Service, IPC, LLM tool `task` |
| Agent | `llmAgent` | [large-language-model.md](/docs/models/large-language-model/) | Service only for now |
| Speech to text | `speechToText` | [speech-to-text.md](/docs/models/speech-to-text/) | Service, future/optional LLM tool |
| Text to speech | `textToSpeech` | [text-to-speech.md](/docs/models/text-to-speech/) | Service, future/optional LLM tool |
| Text to image | `imageCreator` | [text-to-image.md](/docs/models/text-to-image/) | Service, future/optional LLM tool |
| Text to video | `textToVideo` | [text-to-video.md](/docs/models/text-to-video/) | Service, future/optional LLM tool |
| Sound | `textToSound` | [music-creator.md](/docs/models/music-creator/) | Service, future/optional LLM tool |
| OCR | `ocr` | [ocr.md](/docs/models/ocr/) | Service, future/optional LLM tool |
| Embedding | `embedding` | [embedding.md](/docs/models/embedding/) | Service, future/optional LLM tool |

## Tool And Service Boundaries

The task scheduler and background task modules are already valid LLM tool
surfaces because they expose scheduling and immediate task creation as explicit
agent actions.

The agent module is different: it is a service that runs agent turns. It should
not be exposed as a direct LLM tool for now. Other modules may call the agent
service through validated paths, such as the `agent.run` background task handler
or Friday cron `agentTurn` jobs.

TTS, STT, text-to-image, video, sound, OCR, and embedding are module services
first. They may also have LLM tools, but those tools must stay thin wrappers
around the module service and must not own provider/model selection or
credentials.
