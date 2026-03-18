# Specification for csuai-demo Vite React App

## Overview
This repository contains a collection of demo React components showcasing various UI and interactive features. The app is built with Vite and React.

## Existing Components
- **BouncingBall** – simple animation of a ball.
- **CameraFeed** – displays webcam feed.
- **ContactModal** – modal contact form.
- **DinoGame** – Chrome dinosaur game clone.
- **Potato** – playful component.
- **SlotMachine** – slot machine simulation.
- **Stopwatch** – basic stopwatch.
- **VoiceRecorder** – records audio.
- **StereoMadness**, **GTA6**, **CameraFeedComponent**, **SlotMachineComponent** – additional demo components.

## New Feature: Poll Mock UI
- **Component:** `PollMock.jsx`
- **Purpose:** Provides a simple mock poll UI where users can vote for their favorite demo feature.
- **Behavior:** Displays a question with four options. Clicking an option increments its vote count and highlights the selected button.
- **Styling:** Defined in `PollMock.css` with basic layout, button states, and vote count display.
- **Integration:** Imported and rendered in `App.jsx` after existing demo components.

## Future Directions
- Connect poll to a backend for persistent storage.
- Add more dynamic questions.
- Provide results visualization.

---
*Generated on 2026-03-18.*