# Specification

## Overview
The application is a Vite + React demo containing various interactive components (games, utilities, etc.).

## Design Goals
- Provide a light theme with a custom animated gradient background.
- Add a matching dark‑mode gradient that activates when the user’s OS prefers a dark color scheme.
- Keep the existing component styles untouched; only the global background is affected.

## Implementation Details
- Updated **src/index.css**:
  - Defined the base CSS variables for light and dark themes.
  - Added an animated gradient on the `body` element for the light theme.
  - Added a `@media (prefers-color-scheme: dark)` block that applies a darker‑toned animated gradient.
  - The gradient animation (`gradientShift`) smoothly moves the background colors over a 12‑second loop.
- No JavaScript changes were required; the effect is purely CSS‑based.

## Future Work
- Add a toggle switch for manual theme selection.
- Refine gradient colors based on user feedback.
