---
title: "Feature Overview"
description: "The main Friday capabilities: chat, tools, voice, images, scheduling, health checks, memory, and personalization."
category: "Product"
sourcePath: "features.md"
order: 10
---

Friday is built around a conversational assistant that can take actions through tools.

## Assistant Chat

The chat supports Markdown, syntax-highlighted code blocks, inline images, attachments, local session history, visible tool activity, and permission prompts for sensitive actions.

## Agent Tools

Friday can read, write, and edit files; apply patches; run commands and longer-running processes; search and fetch the web; drive a browser; generate images; schedule jobs; load skills; run subagents; and use tools exposed by MCP servers.

Tool output is treated as evidence. Friday should not send messages, change records, delete data, or touch production systems without clear authorization.

## Voice

Friday supports speech-to-text dictation and text-to-speech read-aloud. You choose the provider and voice model for each direction and grant microphone access on your own terms.

## Image Generation

Describe an image in words and Friday creates it using the configured image provider and model. Generated images appear in the conversation and can be saved.

## Automation

The task scheduler can create, update, pause, resume, list, delete, and run recurring assistant jobs. Health checks run periodically against a checklist you define.

## Memory And Personalization

Friday can keep durable facts, preferences, user profile context, identity details, and workspace context so future replies are more useful. This personalization stays on your device.
