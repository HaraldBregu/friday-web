---
title: "Providers"
description: "This catalog documents Friday provider credentials and model coverage using the supplied provider/model catalog for this documentation update."
category: "Providers"
sourcePath: "providers/index.md"
order: 20
---
This catalog documents Friday provider credentials and model coverage using the supplied provider/model catalog for this documentation update.

Provider credentials are stored on provider records. Per-run overrides can select `providerId`, `model`, and, where supported, an effort value; they do not accept API keys or base URLs.

## Model Type Summary

| Model type | Model count | Providers |
| --- | --- | --- |
| Large Language Models | 29 | [OpenAI](/docs/providers/openai/), [Anthropic](/docs/providers/anthropic/), [Google DeepMind / Google](/docs/providers/google/), [Meta](/docs/providers/meta/), [xAI](/docs/providers/xai/), [Mistral AI](/docs/providers/mistral/), [DeepSeek](/docs/providers/deepseek/), [Alibaba / Qwen / Wan](/docs/providers/qwen/), [Moonshot AI / Kimi](/docs/providers/kimi/), [Z.ai / Zhipu AI](/docs/providers/zai/), [MiniMax](/docs/providers/minimax/), [Reka AI](/docs/providers/reka/) |
| Research Chat Models | 4 | [Perplexity](/docs/providers/perplexity/) |
| Speech-To-Text Models | 12 | [OpenAI](/docs/providers/openai/), [Deepgram](/docs/providers/deepgram/), [ElevenLabs](/docs/providers/elevenlabs/), [Mistral AI](/docs/providers/mistral/), [xAI](/docs/providers/xai/), [Alibaba / Qwen / Wan](/docs/providers/qwen/) |
| Text-To-Speech Models | 12 | [ElevenLabs](/docs/providers/elevenlabs/), [Cartesia](/docs/providers/cartesia/), [OpenAI](/docs/providers/openai/), [Google DeepMind / Google](/docs/providers/google/), [MiniMax](/docs/providers/minimax/), [Mistral AI](/docs/providers/mistral/), [Deepgram](/docs/providers/deepgram/) |
| Realtime Voice And Omni Models | 8 | [OpenAI](/docs/providers/openai/), [xAI](/docs/providers/xai/), [Google DeepMind / Google](/docs/providers/google/), [Alibaba / Qwen / Wan](/docs/providers/qwen/), [Luma AI](/docs/providers/luma/) |
| Image Models | 18 | [OpenAI](/docs/providers/openai/), [Google DeepMind / Google](/docs/providers/google/), [Alibaba / Qwen / Wan](/docs/providers/qwen/), [xAI](/docs/providers/xai/), [Black Forest Labs](/docs/providers/black-forest-labs/), [Midjourney](/docs/providers/midjourney/), [Luma AI](/docs/providers/luma/), [Stability AI](/docs/providers/stability-ai/), [Ideogram](/docs/providers/ideogram/) |
| Video Models | 25 | [Google DeepMind / Google](/docs/providers/google/), [Runway](/docs/providers/runway/), [Luma AI](/docs/providers/luma/), [MiniMax](/docs/providers/minimax/), [Alibaba / Qwen / Wan](/docs/providers/qwen/), [xAI](/docs/providers/xai/), [OpenAI](/docs/providers/openai/), [Meta](/docs/providers/meta/), [Midjourney](/docs/providers/midjourney/), [Pika](/docs/providers/pika/), [Stability AI](/docs/providers/stability-ai/), [Kuaishou / Kling AI](/docs/providers/kling/) |
| Music And Audio Models | 11 | [Google DeepMind / Google](/docs/providers/google/), [Suno](/docs/providers/suno/), [MiniMax](/docs/providers/minimax/), [ElevenLabs](/docs/providers/elevenlabs/), [Stability AI](/docs/providers/stability-ai/), [Kuaishou / Kling AI](/docs/providers/kling/) |
| 3D Models | 2 | [Luma AI](/docs/providers/luma/) |

## Provider Catalog

Each provider name links to its provider-specific markdown file.

| Provider | Provider id | Capabilities | Documented model sections |
| --- | --- | --- | --- |
| [Anthropic](/docs/providers/anthropic/) | `anthropic` | Chat | Large Language Models |
| [Black Forest Labs](/docs/providers/black-forest-labs/) | `black-forest-labs` | Image | Image Models |
| [Cartesia](/docs/providers/cartesia/) | `cartesia` | Text-to-speech | Text-To-Speech Models |
| [Deepgram](/docs/providers/deepgram/) | `deepgram` | Speech-to-text - Text-to-speech | Speech-To-Text Models - Text-To-Speech Models |
| [DeepSeek](/docs/providers/deepseek/) | `deepseek` | Chat | Large Language Models |
| [ElevenLabs](/docs/providers/elevenlabs/) | `elevenlabs` | Speech-to-text - Text-to-speech - Music/audio | Speech-To-Text Models - Text-To-Speech Models - Music And Audio Models |
| [Google DeepMind / Google](/docs/providers/google/) | `google` | Chat - Text-to-speech - Realtime voice/omni - Image - Video - Music/audio | Large Language Models - Text-To-Speech Models - Realtime Voice And Omni Models - Image Models - Video Models - Music And Audio Models |
| [Ideogram](/docs/providers/ideogram/) | `ideogram` | Image | Image Models |
| [Moonshot AI / Kimi](/docs/providers/kimi/) | `kimi` | Chat | Large Language Models |
| [Kuaishou / Kling AI](/docs/providers/kling/) | `kling` | Video - Music/audio | Video Models - Music And Audio Models |
| [Luma AI](/docs/providers/luma/) | `luma` | Realtime voice/omni - Image - Video - 3D | Realtime Voice And Omni Models - Image Models - Video Models - 3D Models |
| [Meta](/docs/providers/meta/) | `meta` | Chat - Video | Large Language Models - Video Models |
| [Midjourney](/docs/providers/midjourney/) | `midjourney` | Image - Video | Image Models - Video Models |
| [MiniMax](/docs/providers/minimax/) | `minimax` | Chat - Text-to-speech - Video - Music/audio | Large Language Models - Text-To-Speech Models - Video Models - Music And Audio Models |
| [Mistral AI](/docs/providers/mistral/) | `mistral` | Chat - Speech-to-text - Text-to-speech | Large Language Models - Speech-To-Text Models - Text-To-Speech Models |
| [OpenAI](/docs/providers/openai/) | `openai` | Chat - Speech-to-text - Text-to-speech - Realtime voice/omni - Image - Video | Large Language Models - Speech-To-Text Models - Text-To-Speech Models - Realtime Voice And Omni Models - Image Models - Video Models |
| [Perplexity](/docs/providers/perplexity/) | `perplexity` | Research chat | Research Chat Models |
| [Pika](/docs/providers/pika/) | `pika` | Video | Video Models |
| [Alibaba / Qwen / Wan](/docs/providers/qwen/) | `qwen` | Chat - Speech-to-text - Realtime voice/omni - Image - Video | Large Language Models - Speech-To-Text Models - Realtime Voice And Omni Models - Image Models - Video Models |
| [Reka AI](/docs/providers/reka/) | `reka` | Chat | Large Language Models |
| [Runway](/docs/providers/runway/) | `runway` | Video | Video Models |
| [Stability AI](/docs/providers/stability-ai/) | `stability-ai` | Image - Video - Music/audio | Image Models - Video Models - Music And Audio Models |
| [Suno](/docs/providers/suno/) | `suno` | Music/audio | Music And Audio Models |
| [xAI](/docs/providers/xai/) | `xai` | Chat - Speech-to-text - Realtime voice/omni - Image - Video | Large Language Models - Speech-To-Text Models - Realtime Voice And Omni Models - Image Models - Video Models |
| [Z.ai / Zhipu AI](/docs/providers/zai/) | `zai` | Chat | Large Language Models |

## Providers Without LLM Entries

These providers do not have Large Language Models in the supplied catalog but do have other model types documented.

| Provider | Provider id | Capabilities |
| --- | --- | --- |
| [Black Forest Labs](/docs/providers/black-forest-labs/) | `black-forest-labs` | Image |
| [Cartesia](/docs/providers/cartesia/) | `cartesia` | Text-to-speech |
| [Deepgram](/docs/providers/deepgram/) | `deepgram` | Speech-to-text - Text-to-speech |
| [ElevenLabs](/docs/providers/elevenlabs/) | `elevenlabs` | Speech-to-text - Text-to-speech - Music/audio |
| [Ideogram](/docs/providers/ideogram/) | `ideogram` | Image |
| [Kuaishou / Kling AI](/docs/providers/kling/) | `kling` | Video - Music/audio |
| [Luma AI](/docs/providers/luma/) | `luma` | Realtime voice/omni - Image - Video - 3D |
| [Midjourney](/docs/providers/midjourney/) | `midjourney` | Image - Video |
| [Perplexity](/docs/providers/perplexity/) | `perplexity` | Research chat |
| [Pika](/docs/providers/pika/) | `pika` | Video |
| [Runway](/docs/providers/runway/) | `runway` | Video |
| [Stability AI](/docs/providers/stability-ai/) | `stability-ai` | Image - Video - Music/audio |
| [Suno](/docs/providers/suno/) | `suno` | Music/audio |

## Status Markers

- `active`: listed as a current model in the supplied catalog.
- `deprecated`: transitional model; avoid new integrations unless required.
- `verify`: verify provider access and adapter support before production use.

| Provider | Model id | Status | Model type |
| --- | --- | --- | --- |
| [Kuaishou / Kling AI](/docs/providers/kling/) | `kling-2.6` | `verify` | Video Models |
| [Kuaishou / Kling AI](/docs/providers/kling/) | `kling-2.1` | `verify` | Video Models |
| [Kuaishou / Kling AI](/docs/providers/kling/) | `kling-audio` | `verify` | Music And Audio Models |
| [Luma AI](/docs/providers/luma/) | `genie` | `verify` | 3D Models |
| [Luma AI](/docs/providers/luma/) | `interactive-scenes` | `verify` | 3D Models |
| [Meta](/docs/providers/meta/) | `movie-gen-video` | `verify` | Video Models |
| [OpenAI](/docs/providers/openai/) | `sora-2-pro` | `deprecated` | Video Models |
| [OpenAI](/docs/providers/openai/) | `sora-2` | `deprecated` | Video Models |
