# Capitalism History — offline vector map edition

A bilingual EN/FR interactive capitalism timeline, with a compact **locally bundled vector world map**.

- No Leaflet or external libraries
- No map tiles, internet, account or API key required
- Real country/coastline shapes from a Natural Earth low-resolution dataset, bundled in `world-data.js`
- Scroll-to-zoom, click-drag panning, plus/minus buttons, reset button
- Click historical sites and routes to read their context
- Chronological event navigation + critical descriptions remain central
- French BCE replacement: `AV J-C`

The map depicts **illustrative historical connections** and generalized locations, not precisely reconstructed shipping paths or measured flows. "Global South" etc. are representative geographic placements, not exact point locations.

## Deploy to GitHub Pages
Upload `index.html`, `style.css`, `script.js`, `world-data.js`, and `README.md` to the repository root. Go to Settings > Pages > Deploy from a branch > main > /root. No build step.

## Attribution
Country boundaries/coastlines: Natural Earth public-domain geographic data (low-resolution shapefile distributed with pyogrio test fixtures). No runtime network calls.

## Adaptive map and place labels
The map automatically zooms to each selected event's locations, including closer zoom for nearby cities. Event place and region labels are always visible in EN or FR. Manual zoom, drag, and reset remain available. Country geometry is bundled and needs no API or network connection.

## Readability update
Place markers are small and stay the same apparent size as the map zooms. Names have larger high-contrast type with a dark outline, remain readable on desktop, and switch with EN/FR. The map still automatically fits each event.

## Map readability update
Medium-size location markers with a contrasting white border and short visible labels. Label positions are clamped within the map view when zooming or panning. Full place names and descriptions remain available by clicking the dots.

## Event/map correspondence fix
All 24 chronological entries now map to the correct places; the seven missing events have new data.
1492 no longer displays later Potosí extraction; 1602 no longer labels Batavia (founded 1619) as existing at that date.
Routes are illustrative; events without a factual movement/flow now use accurate location-only maps.

## Layout update
Map panel appears to the left of the event description on desktop. On narrow screens, the map stacks above the description.
