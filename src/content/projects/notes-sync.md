---
title: Notes Sync CLI
summary: Created a cross-device note sync utility with conflict-safe merge behavior and predictable backups.
role: Backend Developer
stack:
  - Go
  - SQLite
  - Bash
skillsApplied:
  - Systems design
  - Conflict resolution logic
  - Reliability engineering
problem: Personal notes across devices often diverged due to offline edits and lacked a safe merge and backup strategy.
approach: Implemented deterministic conflict rules, timestamp-aware merge passes, and incremental encrypted local snapshots.
outcome: Prevented note loss in offline-first usage and reduced manual merge interventions to near zero.
repoUrl: https://github.com/your-handle/notes-sync
featured: false
homePinned: false
date: 2024-11-18
---

## Context

The objective was a low-overhead sync routine that did not require a hosted service.

## Implementation Notes

- Built idempotent sync steps.
- Added recovery commands for corrupted indexes.
- Documented operational runbook for edge cases.
