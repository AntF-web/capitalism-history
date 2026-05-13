# History of Capitalism — Bilingual Interactive Timeline

A GitHub Pages-ready bilingual interactive timeline about historical events and institutions that helped build capitalism.

## Languages

The app includes language buttons:

- **EN** — English
- **FR** — Français

The selected language is saved in `localStorage`, so the app remembers the user's choice.

## Files

```text
capitalism-history-timeline-bilingual/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Features

- Horizontal scrolling timeline
- Language switcher: English / French
- Clickable event cards
- Search bar
- Filters:
  - trade / commerce
  - finance
  - slavery / esclavage
  - industry / industrie
  - state / État
  - labor / travail
- Context tabs for each event:
  - What it built / Ce que cela construit
  - Who benefited / Qui en bénéficie
  - Who paid / Qui paie
  - Capitalist link / Lien avec le capitalisme
  - Critical note / Note critique
- Dark visual design matching the previous project style

## How to run locally

Open `index.html` in a browser.

No build step is required.

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

## How to edit translations

Open `script.js`.

Static interface text is stored in the `i18n` object:

```js
const i18n = {
  en: { ... },
  fr: { ... }
}
```

Timeline event text is stored directly in each event:

```js
{
  year: "1602",
  category: "finance",
  tags: ["VOC", "shares", "corporation"],
  en: {
    title: "...",
    summary: "...",
    detail: "...",
    contexts: { ... }
  },
  fr: {
    title: "...",
    summary: "...",
    detail: "...",
    contexts: { ... }
  }
}
```

## Source note

This is a critical historical interpretation, not a claim that capitalism started on one exact date.
