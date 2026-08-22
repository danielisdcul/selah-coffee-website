# Selah Coffee

A responsive concept website for Selah Coffee, implemented directly from the
desktop and mobile Figma mockups.

## Live sites

- GitHub Pages: <https://danielisdcul.github.io/selah-coffee-website/>
- Sites preview: <https://selah-coffee-mockup.culleydaniel-e.chatgpt.site/>

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Builds

```bash
npm run build
npm run pages:build
```

`npm run build` creates the server-capable Vinext deployment. `npm run
pages:build` additionally renders the homepage to standalone HTML in `pages/`
for GitHub Pages. The generated `pages/` directory is intentionally ignored;
GitHub Actions publishes it as a deployment artifact after every push to
`main`.
