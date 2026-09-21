# TalCalc

Client-side talent calculator for World of Warcraft: Forever. No Node, Python or build step.
Open `index.html` directly from disk, or host the folder anywhere static (e.g. GitHub Pages).

## Files

- `index.html`, `app.js`, `styles.css` - the app. Nothing in them is Paladin-specific.
- `pala_talents_1.60.1.js` - the only place talent data lives: the talent JSON assigned to
  `window.TALENT_DATA`. Edit it and reload the page (it also re-reads on returning to the tab,
  and there is a "Reload data" button). Use `?data=other_file.js` to load a different data file.

The data is a `.js` file rather than plain `.json` because browsers won't let a page opened from
disk fetch a `.json`, but they will load a `<script>`.

## Behaviour

- Left-click adds a point, right-click (or Shift-click / Delete key) removes one.
- Prerequisites: `talent_points_in_spec` (points in the rows above), `talent` (required talent at
  max rank, drawn as an arrow), `player_level`. Removing a point that would orphan a later talent is blocked.
- Level 10-60, one point per level from 10. "Talented" (0-5) starts the points one level earlier per rank (level 5 minimum at rank 5), so level 20 gives 11 points, or 12 with Talented 1. The build is stored in the URL hash (use "Copy link")
  and in localStorage, keyed by talent id, and re-validated against the data on every load.
- Talents sharing a grid cell are shown side by side in that cell.
- Data problems (unknown prerequisite ids, out-of-grid positions, ...) show up as a warning list.
