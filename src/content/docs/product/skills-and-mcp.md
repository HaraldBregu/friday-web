---
title: "Skills And MCP"
description: "Extend Friday with reusable skills and Model Context Protocol servers."
category: "Extension"
sourcePath: "skills-and-mcp.md"
order: 30
---

Friday can be extended without changing the core app.

## Skills

Skills are reusable packages that teach Friday how to handle a class of work. A skill can include instructions, references, templates, schemas, and optional executable behavior.

Friday can install, import, enable, disable, discover, and audit skills. Unsafe or disabled skills are blocked, and Friday records why a skill was selected or rejected.

## MCP Servers

Friday supports the Model Context Protocol, an open standard for connecting external tools and data to AI assistants.

You can connect:

- Remote MCP servers over HTTP, with optional token or key authentication.
- Local stdio MCP servers that run as local processes on your machine.

Once connected, the server's tools become available to the assistant automatically.
