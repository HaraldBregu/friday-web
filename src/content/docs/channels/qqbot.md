---
title: "QQ Bot Channel"
description: "Catalog metadata for Friday's QQ Bot channel."
category: "Channels"
sourcePath: "channels/qqbot.md"
order: 30
---
Catalog metadata for Friday's QQ Bot channel.

| Field | Value |
| --- | --- |
| Channel id | `qqbot` |
| Label | QQ Bot |
| Aliases | none |
| Runtime | Catalog-only |

QQ Bot can be configured in Settings, but Friday does not currently bundle a QQ
Bot runtime adapter.

## Implementation Contract

Implement this provider behind Friday's unified channel gateway described in
[Channel subsystem](/docs/channels/#unified-gateway-contract). Provider runtimes must
convert message-in events to `ChannelInboundMessage`, accept message-out
requests as `ChannelOutboundMessage`, and return `ChannelMessageReceipt`
delivery results. Provider-specific ids, thread metadata, and raw payload facts
should stay in normalized fields and `provenance`; the agent must not receive
provider-specific message shapes or be called directly by the runtime.

Catalog-only status should remain until that gateway contract is implemented.

## Official Documentation

- [QQ Bot official docs](https://bot.q.qq.com/wiki/)

## Related Docs

- [Channel subsystem](/docs/channels/)
- [Unified gateway contract](/docs/channels/#unified-gateway-contract)
