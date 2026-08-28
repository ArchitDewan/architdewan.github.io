---
title: GitHub PR Summarizer
summary: Built a FastAPI GitHub App that listens to PR webhooks, summarizes changed files with OpenAI, and posts a summary comment back to the pull request
role: Project
stack:
  - Python
  - FastAPI
  - OpenAI
  - GitHub App
  - Webhooks
skillsApplied:
  - Webhook handling
  - GitHub App authentication
  - Pull request automation
problem: Reviewers often need quick context on large pull requests, but reading every changed file patch slows review and makes it harder to spot the main impact early.
approach: Built a FastAPI GitHub App that verifies webhook signatures, fetches PR file diffs with installation tokens, summarizes each patch with OpenAI, and posts one consolidated comment on the PR.
outcome: Delivers automatic per-file PR summaries on open, sync, and reopen events so reviewers can start with structured context instead of reading raw diffs first.
repoUrl: https://github.com/ArchitDewan/GitPRSummarizer
caseStudy: false
featured: true
homePinned: false
date: 2026-08-13
visualVariant: pr-review
---

## Overview

A FastAPI + GitHub App project focused on webhook-driven PR automation, secure GitHub integration, and AI-generated review summaries.
