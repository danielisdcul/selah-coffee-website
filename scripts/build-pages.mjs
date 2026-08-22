import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(projectRoot, "pages");
const clientDir = path.join(projectRoot, "dist", "client");
const clientAssetsDir = path.join(clientDir, "assets");

await rm(outputDir, { recursive: true, force: true });
await mkdir(path.join(outputDir, "assets"), { recursive: true });
await cp(path.join(projectRoot, "public"), outputDir, { recursive: true });

const cssAsset = (await readdir(clientAssetsDir)).find(
  (file) => file.startsWith("index-") && file.endsWith(".css"),
);

if (!cssAsset) {
  throw new Error("The Vinext build did not emit the expected homepage stylesheet.");
}

await cp(
  path.join(clientAssetsDir, cssAsset),
  path.join(outputDir, "assets", "site.css"),
);

const pageSource = await readFile(path.join(projectRoot, "app", "page.tsx"), "utf8");
const transpiledPage = ts.transpileModule(pageSource, {
  compilerOptions: {
    jsx: ts.JsxEmit.React,
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
  fileName: "app/page.tsx",
  reportDiagnostics: true,
});

const errors = transpiledPage.diagnostics?.filter(
  (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error,
);

if (errors?.length) {
  throw new Error(
    errors.map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")).join("\n"),
  );
}

globalThis.__SELAH_STATIC_REACT__ = React;
const staticModuleSource = `const React = globalThis.__SELAH_STATIC_REACT__;\n${transpiledPage.outputText}`;
const pageModule = await import(
  `data:text/javascript;base64,${Buffer.from(staticModuleSource).toString("base64")}`
);
delete globalThis.__SELAH_STATIC_REACT__;

const markup = renderToStaticMarkup(React.createElement(pageModule.default));

const portableMarkup = markup
  .replaceAll('src="/', 'src="./')
  .replaceAll('href="/', 'href="./');

const title = "Selah Coffee — Start with coffee. Stay for company.";
const description =
  "A community-first coffee house in San Diego, made for good coffee and slower moments.";
const publicUrl = "https://danielisdcul.github.io/selah-coffee-website/";

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${publicUrl}" />
    <link rel="icon" href="./favicon.svg" />
    <link rel="stylesheet" href="./assets/site.css" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${publicUrl}" />
    <meta property="og:image" content="${publicUrl}og.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${publicUrl}og.png" />
  </head>
  <body>${portableMarkup}</body>
</html>
`;

await writeFile(path.join(outputDir, "index.html"), html);
await writeFile(path.join(outputDir, ".nojekyll"), "");

console.log(`Static GitHub Pages site written to ${outputDir}`);
