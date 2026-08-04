---
title: Incident Response
summary: Built a Go, PostgreSQL, and Python system that turns alerts into incidents, Slack briefs, timelines, and postmortem drafts
role: Project
stack:
  - Go
  - PostgreSQL
  - Python
  - Docker
  - HTML
  - CSS
skillsApplied:
  - Backend API design
  - Incident lifecycle modeling
  - Database modeling
  - Alert normalization
  - Slack integration
  - AI-assisted postmortem generation

problem: Teams need a reliable way to turn raw production alerts into actionable incident context, cut duplicate handling, communicate impact, and keep data for postmortems.
approach: Built a Dockerized workflow with a Go API for alert ingestion, incident grouping, runbook matching, Slack updates, and resolution, plus a Python worker for postmortem drafts.
outcome: Demoable outage response flow where users trigger a mock alert, review timeline, resolve the incident, run the postmortem worker, and view the draft in a dashboard.
repoUrl: https://github.com/ArchitDewan/IncidentResponse
featured: true
homePinned: true
date: 2026-08-04
---

## Overview

A backend-first incident response project focused on alert ingestion, incident deduplication, operational context enrichment, Slack communication, and structured postmortem generation.
