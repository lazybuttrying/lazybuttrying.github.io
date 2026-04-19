---
title: "Claude Code CLI Shortcuts"
excerpt: "Keyboard shortcuts, prefixes, and slash commands for Claude Code CLI."

categories:
  - Tips
tags:
  - [claude-code, cli, shortcuts, productivity]

permalink: /tips/claude-code-shortcuts/

toc: true
toc_sticky: true

date: 2026-04-19
last_modified_at: 2026-04-19
---

A quick reference for keyboard shortcuts, input prefixes, and slash commands in the Claude Code CLI.

## Keyboard shortcuts

| Key | Description |
| --- | --- |
| `Esc` | Interrupt Claude mid-response |
| `Esc` `Esc` | Rewind and edit an earlier message |
| `Shift` + `Tab` | Cycle permission modes (normal / auto-accept / plan) |
| `Tab` | Autocomplete file paths and commands |
| `↑` / `↓` | Navigate input history |
| `Ctrl` + `C` | Cancel current input or request |
| `Ctrl` + `D` | Exit the session |
| `\` + `Enter` | Insert a newline (`Option`+`Enter` in some terminals) |

## Input prefixes

The first character of your message switches how Claude interprets it.

| Prefix | Behavior |
| --- | --- |
| `/` | Run a slash command |
| `!` | Run a shell command in-session; output lands in the conversation |
| `#` | Append the content to memory (`CLAUDE.md`) |
| `@` | Reference a file or directory (with autocomplete) |

## Slash commands

The ones worth memorizing for everyday use.

| Command | Use |
| --- | --- |
| `/help` | Show help |
| `/clear` | Clear the conversation context |
| `/compact` | Compact the conversation to save context |
| `/cost` | Show token usage and cost |
| `/model` | Switch models |
| `/exit` | Exit the session |

<details>
<summary>Extra info</summary>

| Command | Use |
| --- | --- |
| `/config` | Open settings |

</details>

## Notes

- **Plan mode** (via `Shift`+`Tab`) restricts Claude to designing without writing files — useful for reviewing an approach before committing.
- Double-`Esc` discards subsequent turns; prefer `/compact` when you want to keep context but shrink it.
- Keybindings are customizable in `~/.claude/keybindings.json`.
