# Specification for csuai-demo

## Overview
- Vite + React single‑page application.
- Home page (`src/App.jsx`) now displays a centered heading **"CSUAI Demo"** with subtext.
- Added an odd paragraph about oranges.
- Added a Fibonacci counter with a button to advance the sequence.
- Added a simple slot‑machine component at the bottom of the page.
- Added an apology component (`src/Apology.jsx`) that no longer contains any apology text.
- **Investor Pitch** section appended to the bottom of the page.
- **Financial projection table** added under the pitch.
- **Contact Us modal** added with a button to open it.
- **Spinning Potato** component added at the bottom centre of the page, now using the 🥔 emoji and rotating continuously.

## Files Modified / Added
- `src/App.jsx` – updated layout, includes investor pitch, financial table, contact modal, and Potato component.
- `src/ContactModal.jsx` – new modal component.
- `src/ContactModal.css` – styling for the modal.
- `src/Apology.jsx` – placeholder component.
- `src/SlotMachine.jsx` – functional component.
- `src/SlotMachine.css` – basic styling.
- `src/Potato.jsx` – component now renders the 🥔 emoji instead of an image.
- `src/Potato.css` – CSS for positioning and spin animation.
- `SPECIFICATION.md` – updated to reflect current state.

## Future Work
- Enhance slot‑machine with real reels, win detection, scoring, and theming.
- Expand financial modeling and add interactive charts.
- Add more pages or navigation as needed.
