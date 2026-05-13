# History of Capitalism — Bilingual Interactive World Map

A GitHub Pages-ready bilingual interactive world map about historical events, places, and flows that helped build capitalism.

## Languages

The app includes language buttons:

- **EN** — English
- **FR** — Français

The selected language is saved in `localStorage`.

## Files

```text
capitalism-history-world-map-bilingual/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Features

- Large interactive world map as the main element
- Chronological event buttons
- Bottom timeline strip
- Clickable historical places
- Animated flows between places
- Language switcher: English / French
- System filters:
  - trade / commerce
  - finance
  - slavery / esclavage
  - industry / industrie
  - state / État
  - labor / travail
- Toggle buttons:
  - flows on/off
  - places on/off
- Critical context tabs:
  - What it built / Ce que cela construit
  - Who benefited / Qui en bénéficie
  - Who paid / Qui paie
  - Capitalist link / Lien avec le capitalisme
  - Critical note / Note critique

## How to run locally

Open `index.html` in a browser.

Internet is required because the app uses:

- Leaflet CDN
- CARTO basemap tiles

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Save.

Your site will be available at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

## How to add a new event

Open `script.js`.

Each event contains:

- year
- category
- tags
- places
- flows
- English text
- French text

Example:

```js
{
  year: "1602",
  category: "finance",
  tags: ["VOC", "shares", "corporation"],
  places: [
    place("amsterdam", "Amsterdam", "Amsterdam", 52.37, 4.90, "Role in English", "Rôle en français")
  ],
  flows: [
    flow("amsterdam", "batavia", "finance", 3, "Flow label in English", "Libellé du flux en français")
  ],
  en: { ... },
  fr: { ... }
}
```

## Note

The flows are interpretive historical routes, not exact shipping paths.
