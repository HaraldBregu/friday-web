import { readFileSync, readdirSync, statSync } from "node:fs";
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
const extensions = read("dist/extensions/index.html");
const docsIndex = read("dist/docs/index.html");
const docsArticle = read("dist/docs/getting-started/index.html");
const landingCss = read("src/styles/friday-landing.css");
const docsCss = read("src/styles/docs-friday.css");
const globalCss = read("src/styles/global.css");
const astroConfig = read("astro.config.mjs");
const htmlFiles = collectHtml(join(root, "dist"));

assert(htmlFiles.every((path) => {
  const html = readFileSync(path, "utf8");
  return html.includes('name="viewport"') || html.includes('http-equiv="refresh"');
}), "every rendered static page defines a mobile viewport");
assert(astroConfig.includes('output: "static"'), "Astro output remains fully static");
assert(english.includes("friday-landing-page") && italian.includes("friday-landing-page"), "English and Italian share the landing shell");
assert(docsIndex.includes("docs-product-page") && docsArticle.includes("docs-product-page"), "docs index and articles share the docs shell");
assert(extensions.includes('id="extensions"') && extensions.includes("fr-extensions-demo"), "the detailed Extensions route remains available");

for (const [locale, html, title] of [
  ["English", english, "A Personal Desktop AI Assistant"],
  ["Italian", italian, "Un assistente AI personale per desktop"],
]) {
  assert(html.includes(`<h1 id="hero-title" aria-label="${title}">`), `${locale} hero describes the product without repeating the app name`);
  assert(count(html, /class="fr-home-hero__accent"/g) === 1, `${locale} keeps the highlighted AI Assistant phrase together`);
  assert(["product", "personal", "workflow", "extensions", "control"].every((id) => html.includes(`id="${id}"`)), `${locale} renders the complete homepage narrative`);
  assert(count(html, /class="fr-personal-card__top"/g) === 6, `${locale} renders all six personal assistant capabilities`);
  assert(count(html, /class="fr-workflow-step__meta"/g) === 4, `${locale} renders the four request-to-result steps`);
  assert(count(html, /class="fr-extension-card fr-extension-card--/g) === 5, `${locale} renders five distinct extension examples`);
  assert(count(html, /class="fr-control-principles"/g) === 1 && count(html, /class="fr-control-principles"[\s\S]*?<\/ul>/g) === 1, `${locale} renders the user-control principles`);
  assert(html.includes('class="fr-showcase-app"') && html.includes('class="fr-showcase-media"'), `${locale} renders the reference-inspired Friday application UI`);
  assert(count(html, /class="fr-showcase-history__item is-/g) === 4, `${locale} hero app includes earlier image, sound, and video requests`);
  assert(["video-1786447738614.mp4", "video-1786619008446.mp4", "video-1786619185438.mp4"].every((asset) => html.includes(asset)) && html.includes("data-showcase-play") && html.includes("data-showcase-progress"), `${locale} hero app uses all current demo videos with playable controls`);
  assert(html.includes('href="#workflow"'), `${locale} secondary hero action points to the workflow explanation`);
  assert(html.includes('href="https://github.com/HaraldBregu/friday/releases"'), `${locale} primary action uses the existing release destination`);
  assert(count(html, /class="theme-toggle" data-theme-toggle/g) === 1, `${locale} navigation renders one theme switch`);
  assert(count(html, /class="fr-nav__group fr-nav-dropdown"/g) === 1, `${locale} uses one compact desktop navigation group`);
  assert(count(html, /class="fr-nav__direct"/g) === 2, `${locale} keeps Extensions and Docs directly discoverable`);
}

assert(english.includes("Remembers context") && english.includes("Works in the background") && english.includes("Connects your tools"), "hero capability strip summarizes the core personal-assistant promise");
assert(english.includes("Approval requested") && english.includes("Friday pauses before an action"), "workflow explains permission-based approval");
assert(english.includes("Connected work can leave your device"), "control section includes the connected-service disclosure");

assert(landingCss.includes("overflow-x: clip") && docsCss.includes("overflow-x: clip"), "landing and docs shells prevent page-level horizontal overflow");
assert(landingCss.includes(":focus-visible"), "landing defines a visible keyboard focus treatment");
assert(landingCss.includes("prefers-reduced-motion") && docsCss.includes("prefers-reduced-motion"), "landing and docs respect reduced motion");
assert(landingCss.includes('[data-theme="light"] .friday-landing-page'), "landing defines a complete light-theme token set");
assert(/@media \(max-width: 900px\)[\s\S]*?\.fr-home-hero__layout,[\s\S]*?\.fr-control-grid \{\s*grid-template-columns: 1fr;/.test(landingCss), "hero and control layouts collapse at tablet width");
assert(/@media \(max-width: 680px\)[\s\S]*?\.fr-personal-grid \{\s*grid-template-columns: 1fr;/.test(landingCss), "personal capabilities collapse to one column on mobile");
assert(/@media \(max-width: 680px\)[\s\S]*?\.fr-workflow-steps \{\s*grid-template-columns: 1fr;/.test(landingCss), "workflow becomes linear on mobile");
assert(/@media \(max-width: 680px\)[\s\S]*?\.fr-extension-cards \{\s*grid-template-columns: 1fr;/.test(landingCss), "extension examples collapse to one column on mobile");
assert(/@media \(max-width: 380px\)[\s\S]*?\.fr-home-signals \{\s*grid-template-columns: 1fr;/.test(landingCss), "hero capability strip stays readable on narrow screens");
assert(/@media \(max-width: 820px\)[\s\S]*?\.docs-product-page \.docs-reader \{\s*grid-template-columns: 1fr;/.test(docsCss), "the docs reader collapses on tablets");
assert(/@media \(max-width: 760px\)[\s\S]*?\.footer-grid \{\s*grid-template-columns: 1fr;/.test(globalCss), "the shared footer collapses on mobile");

console.log("Verified the personal-assistant landing page across both locales and responsive CSS breakpoints.");
