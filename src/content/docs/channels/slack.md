---
title: "Slack Channel"
description: "Catalog metadata for Friday's Slack channel."
category: "Channels"
sourcePath: "channels/slack.md"
order: 30
---
Catalog metadata for Friday's Slack channel.

| Field | Value |
| --- | --- |
| Channel id | `slack` |
| Label | Slack |
| Aliases | none |
| Runtime | Catalog-only |

Slack can be configured in Settings, but Friday does not currently bundle a
Slack runtime adapter.

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

- [Slack API docs](https://docs.slack.dev/apis/)
- [Slack app manifests](https://docs.slack.dev/app-manifests/)

## Related Docs

- [Channel subsystem](/docs/channels/)
- [Unified gateway contract](/docs/channels/#unified-gateway-contract)
