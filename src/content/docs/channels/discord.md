---
title: "Discord Channel"
description: "Catalog metadata for Friday's Discord channel."
category: "Channels"
sourcePath: "channels/discord.md"
order: 30
---
Catalog metadata for Friday's Discord channel.

| Field | Value |
| --- | --- |
| Channel id | `discord` |
| Label | Discord |
| Aliases | none |
| Runtime | Catalog-only |

Discord can be configured in Settings, but Friday does not currently bundle a
Discord runtime adapter.

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

- [Discord Developer Platform](https://docs.discord.com/developers/intro)
- [Discord Bots](https://docs.discord.com/developers/bots)

## Related Docs

- [Channel subsystem](/docs/channels/)
- [Unified gateway contract](/docs/channels/#unified-gateway-contract)
