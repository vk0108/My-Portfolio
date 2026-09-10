# Krithika Venkatesh — Portfolio

A pastel, retro-game themed portfolio built with React + Vite.

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Editing content

All text lives in `src/data/portfolio.js`: profile, stats, education, skill tree,
quests (internships), projects, and certifications. Edit that file and the page updates.
Skill `level` values (0–100) control how many XP pips light up.

## Structure

```
src/
  data/portfolio.js      content
  hooks.js               reveal-on-scroll, typewriter, active section, count-up, konami
  index.css              design tokens (pastel palette, light/dark), primitives
  styles/components.css  per-section styles
  components/            Nav, Hero, PixelAvatar, About, Skills, Quests,
                         Projects, Trophies, Contact, Footer, Ambience
```

## Easter egg

Type ↑ ↑ ↓ ↓ ← → ← → B A anywhere on the page.

## Deploying

`npm run build` outputs a static site in `dist/`. Drop it on Vercel, Netlify,
or GitHub Pages (for a GitHub Pages project site, set `base: "/<repo>/"` in `vite.config.js`).
