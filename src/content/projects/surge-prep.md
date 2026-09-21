---
title: Surge Prep
summary: A surgical-training prototype combining webcam tool tracking, force sensing, and a Unity simulation, built at Hack the North.
role: Hack the North
stack: [Python, FastAPI, Unity, MongoDB, OpenCV, ESP32]
skillsApplied: [Computer vision, Coordinate mapping, Telemetry, Backend API design]
problem: Hands-on surgical practice benefits from accessible tools that capture instrument movement and pressure and provide feedback after a session.
approach: Mapped OpenCV tool poses into Unity, integrated ESP32 force readings, and built a FastAPI and MongoDB backend for session telemetry, replay, and scoring.
outcome: Built and presented a prototype using a USB webcam and 3D-printed tool, with feedback on tool-path accuracy and pressure control.
repoUrl: https://github.com/mtorregrosadev/HTN-Surgery
featured: true
date: 2026-09-20
visualVariant: surgical-training
---

## From physical movement to simulation

Surge Prep was built at Hack the North as a low-cost approach to hands-on surgical training. A USB webcam tracks a 3D-printed tool, while ESP32 force readings drive simulated contact.

## Session feedback

OpenCV tool poses are mapped into Unity coordinates. A FastAPI and MongoDB backend persists telemetry for replay and scoring, giving feedback on tool-path accuracy and pressure control.
