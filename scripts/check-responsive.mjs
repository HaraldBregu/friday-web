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
const providers = read("dist/providers/index.html");
const integrations = read("dist/integrations/index.html");
const integrationsIt = read("dist/it/integrations/index.html");
const docsIndex = read("dist/docs/index.html");
const docsArticle = read("dist/docs/getting-started/index.html");
const landingCss = read("src/styles/friday-landing.css");
const catalogCss = read("src/styles/catalog-pages.css");
const docsCss = read("src/styles/docs-friday.css");
const globalCss = read("src/styles/global.css");
const astroConfig = read("astro.config.mjs");
const htmlFiles = collectHtml(join(root, "dist"));
const homeExtensionCss = landingCss.slice(
  landingCss.indexOf(".fr-home-extension-gallery"),
  landingCss.indexOf(".fr-extension-footer"),
);

assert(htmlFiles.every((path) => {
  const html = readFileSync(path, "utf8");
  return html.includes('name="viewport"') || html.includes('http-equiv="refresh"');
}), "every rendered static page defines a mobile viewport");
assert(htmlFiles.every((path) => {
  const html = readFileSync(path, "utf8");
  return html.includes('http-equiv="refresh"') || html.includes("friday-landing-page") || html.includes("docs-product-page") || html.includes("catalog-product-page");
}), "every interactive route uses a current Friday page shell");
assert(astroConfig.includes('output: "static"'), "Astro output remains fully static");
assert(english.includes("friday-landing-page") && italian.includes("friday-landing-page"), "English and Italian share the landing shell");
assert(docsIndex.includes("docs-product-page") && docsArticle.includes("docs-product-page"), "docs index and articles share the docs shell");
assert([providers, integrations, integrationsIt].every((html) => html.includes("catalog-product-page") && html.includes("fr-nav-wrap")), "provider and integration routes share the current product shell");
assert([providers, integrations, integrationsIt].every((html) => html.includes("catalog-summary") && html.includes("catalog-section")), "catalog routes render responsive summaries and grouped content");

for (const [locale, html, title] of [
  ["English", english, "A Personal Desktop AI Assistant"],
  ["Italian", italian, "Assistente Personale AI per Desktop"],
]) {
  assert(html.includes(`<h1 id="hero-title" aria-label="${title}">`), `${locale} hero describes the product without repeating the app name`);
  assert(count(html, /class="fr-home-hero__accent"/g) === 1, `${locale} keeps the highlighted AI Assistant phrase together`);
  assert(["product", "personal", "workflow", "extensions", "control"].every((id) => html.includes(`id="${id}"`)), `${locale} renders the complete homepage narrative`);
  assert(count(html, /class="fr-personal-card__top"/g) === 6, `${locale} renders all six personal assistant capabilities`);
  assert(count(html, /class="fr-workflow-step__meta"/g) === 4, `${locale} renders the four request-to-result steps`);
  assert(count(html, /class="fr-showcase-app fr-extension-screen is-/g) === 3, `${locale} renders Workspace, Design, and Coding as distinct Friday app screens`);
  assert(count(html, /class="fr-extension-screen__title"/g) === 3, `${locale} uses each extension name in its window title bar`);
  assert(count(html, /class="fr-extension-screen__head"/g) === 0, `${locale} removes duplicate internal headers from extension screens`);
  assert(html.includes('class="fr-extension-workspace-ui__tree"') && html.includes('class="fr-extension-workspace-ui__board"'), `${locale} renders the Workspace file tree beside its content demo`);
  assert(html.includes('class="fr-extension-workspace-ui__content"') && html.includes('class="fr-extension-workspace-ui__document-actions"'), `${locale} renders the Workspace markdown preview and saved-file toolbar`);
  assert(html.includes('class="fr-extension-design-ui__tablet"') && html.includes('class="fr-extension-design-ui__phone"') && html.includes('class="fr-extension-design-ui__shapes"'), `${locale} renders tablet, mobile, and shape artboards in the Design extension`);
  assert(html.includes("Lorem ipsum dolor sit amet") && html.includes("LOREM") && html.includes("lorem.<em>dolor</em>(sit)"), `${locale} uses placeholder content inside every extension demo`);
  assert(!html.includes("Cheapest Flights: Milan") && !html.includes("Voli più economici: Milano") && !html.includes("Wizz Air"), `${locale} omits realistic demo content from homepage extensions`);
  assert(count(html, /class="fr-showcase-composer fr-extension-screen__composer"/g) === 0, `${locale} omits prompt composers from every extension screen`);
  assert(count(html, /class="fr-control-principles"/g) === 1 && count(html, /class="fr-control-principles"[\s\S]*?<\/ul>/g) === 1, `${locale} renders the user-control principles`);
  assert(html.includes('class="fr-showcase-app"') && html.includes('class="fr-showcase-media"'), `${locale} renders the reference-inspired Friday application UI`);
  assert(count(html, /class="fr-showcase-history__item is-/g) === 4, `${locale} hero app includes earlier image, sound, and video requests`);
  assert(!html.includes('class="fr-showcase-history__copy"'), `${locale} removes compact motion-study summary components`);
  assert(html.includes('class="fr-showcase-opening"'), `${locale} hero app begins with a natural conversation opener`);
  assert(html.includes("sound-1786623297711.mp3") && html.includes("data-showcase-audio") && html.includes("data-audio-progress"), `${locale} sound request uses the uploaded playable audio asset`);
  assert(["video-1786447738614.mp4", "video-1786619008446.mp4", "video-1786619185438.mp4"].every((asset) => html.includes(asset)) && html.includes("data-showcase-play") && html.includes("data-showcase-progress"), `${locale} hero app uses all current demo videos with playable controls`);
  assert(html.includes('href="#workflow"'), `${locale} secondary hero action points to the workflow explanation`);
  assert(html.includes('href="https://github.com/HaraldBregu/friday/releases"'), `${locale} primary action uses the existing release destination`);
  assert(count(html, /class="theme-toggle" data-theme-toggle/g) === 1, `${locale} navigation renders one theme switch`);
  assert(count(html, /class="fr-nav__group fr-nav-dropdown"/g) === 2, `${locale} uses compact Product and Explore navigation groups`);
  assert(count(html, /class="fr-nav__direct"/g) === 2, `${locale} keeps Extensions and Docs directly discoverable`);
}

assert(english.includes("Remembers what matters") && english.includes("Handles recurring work") && english.includes("Completes multi-step tasks"), "hero capability strip summarizes the core personal-assistant promise");
assert(english.includes("Friday needs your approval") && english.includes("It pauses and asks before taking an action"), "workflow explains permission-based approval");
assert(english.includes("Know when data leaves your device"), "control section includes the connected-service disclosure");

assert(landingCss.includes("overflow-x: clip") && docsCss.includes("overflow-x: clip"), "landing and docs shells prevent page-level horizontal overflow");
assert(landingCss.includes(":focus-visible"), "landing defines a visible keyboard focus treatment");
assert(landingCss.includes("prefers-reduced-motion") && docsCss.includes("prefers-reduced-motion"), "landing and docs respect reduced motion");
assert(landingCss.includes('[data-theme="light"] .friday-landing-page'), "landing defines a complete light-theme token set");
assert(/@media \(max-width: 900px\)[\s\S]*?\.fr-home-hero__layout,[\s\S]*?\.fr-control-grid \{\s*grid-template-columns: 1fr;/.test(landingCss), "hero and control layouts collapse at tablet width");
assert(/@media \(max-width: 680px\)[\s\S]*?\.fr-personal-grid \{\s*grid-template-columns: 1fr;/.test(landingCss), "personal capabilities collapse to one column on mobile");
assert(/@media \(max-width: 680px\)[\s\S]*?\.fr-workflow-steps \{\s*grid-template-columns: 1fr;/.test(landingCss), "workflow becomes linear on mobile");
assert(/\.fr-home-extension-gallery__grid \{[\s\S]*?width: min\(calc\(100vw - 48px\), 1120px\);/.test(landingCss) && /\.fr-showcase-app\.fr-extension-screen \{[\s\S]*?aspect-ratio: 7 \/ 5;/.test(landingCss), "extension screens use fluid aspect-ratio sizing");
assert(/\.fr-showcase-app\.fr-extension-screen \.fr-extension-screen__body \{[\s\S]*?flex: 1 1 0;/.test(landingCss) && /\.fr-extension-screen__workspace \{[\s\S]*?flex: 1 1 0;/.test(landingCss) && /\.fr-extension-workspace-ui,[\s\S]*?\.fr-extension-coding-ui \{[\s\S]*?flex: 1 1 0;/.test(landingCss), "every extension interface flexes through the full app window height");
assert(/\.fr-showcase-app:not\(\.fr-extension-screen\) > \.fr-showcase-app__body \{[\s\S]*?grid-template-rows:/.test(landingCss), "shared grid rows remain scoped away from extension screens");
assert(/\.fr-home-extension-row \{[\s\S]*?display: flex;/.test(landingCss), "each extension row places the interface left and description right without a grid template");
assert(!homeExtensionCss.includes("grid-template-rows"), "homepage extension demos do not define grid template rows");
assert(/\.fr-extension-workspace-ui__tree \{[\s\S]*?padding: 0\.45rem 0;/.test(landingCss) && /\.fr-extension-design-ui \{[\s\S]*?padding: 0;/.test(landingCss) && /\.fr-extension-coding-ui \{[\s\S]*?padding: 0;/.test(landingCss), "extension work surfaces use consistent edge-to-edge layouts");
assert(/\.fr-extension-workspace-ui__tree li \{[\s\S]*?font-size: 0\.62rem;/.test(landingCss) && /\.fr-extension-coding-ui__editor ol \{[\s\S]*?font-size: 0\.66rem;/.test(landingCss) && /\.fr-home-extension-row__copy p \{[\s\S]*?font-size: 1rem;/.test(landingCss), "extension interfaces and descriptions use the larger readable type scale");
assert(/\.fr-extension-screen \.fr-showcase-app__bar \.fr-window-dots i \{\s*width: 13px;\s*height: 13px;/.test(landingCss), "extension window traffic lights use the larger size");
assert(/@media \(max-width: 900px\)[\s\S]*?\.fr-home-extension-row \{\s*flex-direction: column;/.test(landingCss), "extension rows stack interface before description on tablets and mobile");
assert(/@media \(max-width: 380px\)[\s\S]*?\.fr-home-signals \{\s*grid-template-columns: 1fr;/.test(landingCss), "hero capability strip stays readable on narrow screens");
assert(/@media \(max-width: 680px\)[\s\S]*?\.provider-grid,\s*\.integration-grid,[\s\S]*?\.blog-product-grid \{\s*grid-template-columns: 1fr;/.test(catalogCss), "product-page grids collapse to one column on mobile");
assert(/@media \(max-width: 820px\)[\s\S]*?\.docs-product-page \.docs-reader \{\s*grid-template-columns: 1fr;/.test(docsCss), "the docs reader collapses on tablets");
assert(/@media \(max-width: 760px\)[\s\S]*?\.footer-grid \{\s*grid-template-columns: 1fr;/.test(globalCss), "the shared footer collapses on mobile");

console.log("Verified the personal-assistant landing page across both locales and responsive CSS breakpoints.");
