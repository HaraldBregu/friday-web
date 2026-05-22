---
title: "Signal Channel"
description: "Catalog metadata for Friday's Signal channel."
category: "Channels"
sourcePath: "channels/signal.md"
order: 30
---
Catalog metadata for Friday's Signal channel.

| Field | Value |
| --- | --- |
| Channel id | `signal` |
| Label | Signal |
| Aliases | none |
| Runtime | Catalog-only |

Signal can be configured in Settings, but Friday does not currently bundle a
Signal runtime adapter.

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

Signal does not publish an official bot API for this use case.

Official user/device docs:

- [Signal linked devices](https://support.signal.org/hc/en-us/articles/360007320551-Linked-Devices)

## Related Docs

- [Channel subsystem](/docs/channels/)
- [Unified gateway contract](/docs/channels/#unified-gateway-contract)
