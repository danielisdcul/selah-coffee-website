# Selah Coffee

A static, responsive concept website for Selah Coffee, implemented from the
desktop and mobile Figma designs.

## Live site

<https://danielisdcul.github.io/selah-coffee-website/>

## Preview locally

Open `index.html` directly in a browser, or run a small local server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Project structure

- `index.html` — page structure and content
- `styles.css` — responsive layout and visual styles
- `assets/` — images, logo marks, favicon, and social preview image
- `.github/workflows/pages.yml` — automatic GitHub Pages deployment

There are no frameworks, package dependencies, or build steps. Pushing to
`main` automatically publishes the current files to GitHub Pages.
