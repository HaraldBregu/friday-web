import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");
const count = (source, pattern) => (source.match(pattern) ?? []).length;
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
  console.log(`PASS ${message}`);
};
const collectHtml = (directory) => readdirSync(directory).flatMap((entry) => {
  const path = join(directory, entry);
  return statSync(path).isDirectory() ? collectHtml(path) : path.endsWith(".html") ? [path] : [];
});

const english = read("dist/index.html");
const italian = read("dist/it/index.html");
const docsIndex = read("dist/docs/index.html");
const docsArticle = read("dist/docs/getting-started/index.html");
const landingCss = read("src/styles/friday-landing.css");
const docsCss = read("src/styles/docs-friday.css");
const globalCss = read("src/styles/global.css");
const htmlFiles = collectHtml(join(root, "dist"));

assert(htmlFiles.every((path) => readFileSync(path, "utf8").includes('name="viewport"')), "every static page defines a mobile viewport");
assert(english.includes("friday-landing-page") && italian.includes("friday-landing-page"), "English and Italian share the landing shell");
assert(docsIndex.includes("docs-product-page") && docsArticle.includes("docs-product-page"), "docs index and articles share the docs shell");

for (const [label, pattern] of [
  ["assistant turns", /class="assistant-turn"/g],
  ["user messages", /chat-bubble--user/g],
  ["tool groups", /class="product-activity__group"/g],
  ["media responses", /class="demo-media"/g],
]) {
  assert(count(english, pattern) === count(italian, pattern), `English and Italian have matching ${label}`);
}

assert(landingCss.includes("max-height: calc(100dvh - 92px)"), "mobile navigation is constrained to the viewport");
assert(/@media \(max-width: 900px\)[\s\S]*?\.fr-capabilities \{ grid-template-columns: 1fr 1fr; \}/.test(landingCss), "tablet capabilities use two columns");
assert(/@media \(max-width: 760px\)[\s\S]*?\.product-window__bar \{\s*grid-template-columns: 1fr auto 1fr;/.test(globalCss), "the mobile demo title bar preserves all three columns");
assert(/@media \(max-width: 680px\)[\s\S]*?\.demo-media__image-grid,[\s\S]*?\.demo-media__video-grid \{ grid-template-columns: 1fr; \}/.test(landingCss), "mobile media responses use one column");
assert(landingCss.includes("content: attr(data-label)"), "the mobile knowledge comparison keeps column labels");
assert(/@media \(max-width: 820px\)[\s\S]*?\.docs-product-page \.docs-reader \{\s*grid-template-columns: 1fr;/.test(docsCss), "the docs reader collapses on tablets");
assert(/@media \(max-width: 680px\)[\s\S]*?\.docs-product-page \.docs-card-grid \{\s*grid-template-columns: 1fr;/.test(docsCss), "docs cards collapse on mobile");
assert(/@media \(max-width: 760px\)[\s\S]*?\.footer-grid \{\s*grid-template-columns: 1fr;/.test(globalCss), "the shared footer collapses on mobile");
assert(landingCss.includes("overflow-x: clip") && docsCss.includes("overflow-x: clip"), "landing and docs shells prevent page-level horizontal overflow");
assert(landingCss.includes("prefers-reduced-motion") && docsCss.includes("prefers-reduced-motion"), "landing and docs respect reduced motion");

for (const asset of [
  "image-1783269109315.jpeg",
  "image-1783437002924.jpeg",
  "image-1783437075249.jpeg",
  "video-1784367922287.mp4",
  "video-1785229250304.mp4",
]) {
  assert(existsSync(join(root, "public/demo", asset)), `demo asset exists: ${asset}`);
  assert(english.includes(asset) && italian.includes(asset), `both locales reference: ${asset}`);
}
