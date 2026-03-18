# Specification for csuai-demo

## Overview
- Vite + React single‑page application.
- Home page (`src/App.jsx`) now displays a centered heading **"CSUAI Demo"** with subtext.
- Added an odd paragraph about oranges.
- Added a Fibonacci counter with a button to advance the sequence.
- Added a simple slot‑machine component at the bottom of the page.

## Files Modified / Added
- `src/App.jsx` – simplified layout, includes `<SlotMachine />`, orange paragraph, and Fibonacci counter.
- `src/SlotMachine.jsx` – functional React component that animates three symbols and a "Spin" button.
- `src/SlotMachine.css` – basic styling for the slot machine.
- `SPECIFICATION.md` – updated to reflect current state.

## Future Work
- Enhance slot‑machine with real reels, win detection, scoring, and theming.
- Add more pages or navigation as needed.
