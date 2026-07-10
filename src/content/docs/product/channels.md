---
title: "Channels"
description: "Talk to Friday from Telegram today, with additional channel adapters coming soon."
category: "Channels"
sourcePath: "channels.md"
order: 40
---

Channels let you talk to Friday outside the desktop app. A message arrives from a channel, Friday runs an agent turn, and the reply is delivered back through the same channel.

Supported today:

| Channel | Notes |
| --- | --- |
| Telegram | Connect a bot and chat from your phone or desktop. |

Coming soon:

| Channel | Notes |
| --- | --- |
| Discord | Planned adapter for server or direct-message workflows. |
| Slack | Planned workspace channel for team threads and approvals. |
| WhatsApp | Planned mobile messaging channel for quick requests. |
| Email | Planned asynchronous channel for summaries and follow-ups. |

## Access Control

Each channel has its own configuration, enabled state, direct-message policy, allowed senders, and secrets. Direct-message policy can use allowlist, pairing, open, or deny behavior.

Channel secrets stay in channel records and are not shown back in plain text after saving.
