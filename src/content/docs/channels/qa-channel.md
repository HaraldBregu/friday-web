---
title: "QA Channel"
description: "Catalog metadata for Friday's QA channel."
category: "Channels"
sourcePath: "channels/qa-channel.md"
order: 30
---
Catalog metadata for Friday's QA channel.

| Field | Value |
| --- | --- |
| Channel id | `qa-channel` |
| Label | QA Channel |
| Aliases | none |
| Runtime | Hidden catalog-only |

QA Channel is an internal synthetic test channel for local QA and contract
tests. It has no external runtime adapter.

The catalog entry is hidden: it is available to code and tests through the
shared channel catalog, but it should not appear in the Settings channel
catalog.

## Implementation Contract

Synthetic channel tests should use Friday's unified channel gateway described in
[Channel subsystem](/docs/channels/#unified-gateway-contract). Test runtimes must
convert message-in fixtures to `ChannelInboundMessage`, accept message-out
assertions as `ChannelOutboundMessage`, and assert `ChannelMessageReceipt`
delivery results. The synthetic runtime must not call the agent directly.

## Official Documentation

Internal synthetic test channel. There is no external official documentation.

## Related Docs

- [Channel subsystem](/docs/channels/)
- [Unified gateway contract](/docs/channels/#unified-gateway-contract)
