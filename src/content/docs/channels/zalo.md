---
title: "Zalo Channel"
description: "Catalog metadata for Friday's Zalo channel."
category: "Channels"
sourcePath: "channels/zalo.md"
order: 30
---
Catalog metadata for Friday's Zalo channel.

| Field | Value |
| --- | --- |
| Channel id | `zalo` |
| Label | Zalo |
| Aliases | `zl` |
| Runtime | Catalog-only |

Zalo can be configured in Settings, but Friday does not currently bundle a Zalo
runtime adapter.

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

- [Zalo Official Account API](https://developers.zalo.me/docs/api/official-account-api-147)
- [Zalo API Explorer](https://developers.zalo.me/tools/explorer/)

## Related Docs

- [Channel subsystem](/docs/channels/)
- [Unified gateway contract](/docs/channels/#unified-gateway-contract)
