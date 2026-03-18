# Specification

## Overview
This Vite React app now includes:
- A title and subtext.
- A click counter.
- A placeholder **GTA 6** component.
- A simple **Slot Machine** component.
- A purple‑to‑pink background gradient.
- A blurred backdrop effect on the main content area.

## Components
- **App** – main layout, imports `GTA6` and `SlotMachine`.
- **GTA6** – placeholder content for future GTA 6 integration.
- **SlotMachine** – renders three random symbols, a *Spin* button, and a result message.

## Styling
- Global CSS defines light/dark theme.
- `body` now has a linear gradient (135deg from #800080 to #ff69b4).
- `.app-container` receives a `backdrop-filter: blur(8px)` for a subtle blur effect.

## Future Work
- Enhance the slot machine with animations and payout logic.
- Replace the GTA 6 placeholder with real content or a game demo.
