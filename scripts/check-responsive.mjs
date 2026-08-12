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

assert(htmlFiles.every((path) => {
  const html = readFileSync(path, "utf8");
  return html.includes('name="viewport"') || html.includes('http-equiv="refresh"');
}), "every rendered static page defines a mobile viewport");
assert(english.includes("friday-landing-page") && italian.includes("friday-landing-page"), "English and Italian share the landing shell");
assert(docsIndex.includes("docs-product-page") && docsArticle.includes("docs-product-page"), "docs index and articles share the docs shell");
assert(english.includes('id="providers"') && italian.includes('id="providers"'), "both landing locales include the provider section");
assert(count(english, /class="fr-provider__mark"/g) === 32 && count(italian, /class="fr-provider__mark"/g) === 32, "both landing locales render all 32 built-in provider manifests");
assert(count(english, /https:\/\/(?:unpkg\.com|api\.iconify\.design|cartesia\.ai|nomic\.ai|framerusercontent\.com)\//g) === 64, "all provider marks include dark and light CDN icon sources");
assert(!english.includes("fr-provider-status") && !italian.includes("fr-provider-status"), "provider cards do not render support-status labels");
assert(count(english, /class="theme-toggle" data-theme-toggle/g) === 1 && count(italian, /class="theme-toggle" data-theme-toggle/g) === 1, "English and Italian navigation render one theme switch");
assert(!english.includes("product-activity") && !italian.includes("product-activity"), "hero conversations omit all tool-call activity rows");
assert(!english.includes("demo-generated__header") && !italian.includes("demo-generated__header"), "generated media omits tool names and token counts");
assert(count(english, /class="fr-nav__group fr-nav-dropdown"/g) === 1 && count(italian, /class="fr-nav__group fr-nav-dropdown"/g) === 1, "Product is the only desktop dropdown");
assert(count(english, /class="fr-nav__direct"/g) === 2 && count(italian, /class="fr-nav__direct"/g) === 2, "Extensions and Docs remain direct desktop items");
assert(count(english, /class="fr-mobile-menu__group"/g) === 1 && count(italian, /class="fr-mobile-menu__group"/g) === 1, "mobile navigation mirrors the single Product dropdown");
for (const [locale, html, labels] of [
  ["English", english, ["Overview", "Skills", "Knowledge", "Extensions", "Docs"]],
  ["Italian", italian, ["Panoramica", "Skill", "Conoscenza", "Estensioni", "Docs"]],
]) {
  const desktopNav = html.match(/<div class="fr-nav__links"[\s\S]*?<div class="fr-nav__actions">/)?.[0] ?? "";
  const positions = labels.map((label) => desktopNav.indexOf(`>${label}</a>`));
  assert(positions.every((position) => position >= 0) && positions.every((position, index) => index === 0 || position > positions[index - 1]), `${locale} navigation follows the product journey`);
}
for (const [locale, html] of [["English", english], ["Italian", italian]]) {
  const providerList = html.match(/<ul class="fr-provider-grid"[\s\S]*?<\/ul>/)?.[0] ?? "";
  assert(providerList && !providerList.includes("<a "), `${locale} provider entries are not links`);
}

for (const [label, pattern] of [
  ["assistant turns", /class="assistant-turn"/g],
  ["user messages", /chat-bubble--user/g],
  ["tool groups", /class="product-activity__group"/g],
  ["media responses", /class="demo-media"/g],
]) {
  assert(count(english, pattern) === count(italian, pattern), `English and Italian have matching ${label}`);
}

for (const [locale, html] of [["English", english], ["Italian", italian]]) {
  assert(count(html, /class="demo-video-player"/g) === 2, `${locale} renders two reference-style generated video players`);
  assert(count(html, /class="demo-audio-player"/g) === 1, `${locale} renders one reference-style generated audio player`);
  assert(!html.includes('class="demo-song"'), `${locale} no longer renders the artwork-heavy song card`);
  assert(!/<video[^>]*\sposter=/.test(html), `${locale} video previews come from their matching video files`);
  assert(html.lastIndexOf('class="demo-video-player"') > html.lastIndexOf('class="demo-audio-player"'), `${locale} conversation ends with a generated video`);
  assert(html.lastIndexOf("video-1784367922287.mp4") > html.lastIndexOf("video-1785229250304.mp4"), `${locale} final generated video is the lion scene`);
}

for (const [locale, html] of [["English", english], ["Italian", italian]]) {
  const mediaResponses = [...html.matchAll(/<figure class="[^"]*\bdemo-media\b[^"]*"[^>]*>([\s\S]*?)<\/figure>/g)];
  assert(mediaResponses.length === 5, `${locale} renders five standalone image or video responses`);
  assert(mediaResponses.every((match) => count(match[1], /<(?:img|video)\b/g) === 1), `${locale} renders one media artifact per response`);
}

assert(landingCss.includes("max-height: calc(100dvh - 92px)"), "mobile navigation is constrained to the viewport");
assert(/\.fr-chat-preview \.chat-bubble--user \+ \.assistant-turn \{\s*margin-top: 0\.45rem;/.test(landingCss), "hero chat separates user prompts from assistant responses");
assert(landingCss.includes("width: min(100%, 423px)") && landingCss.includes("height: 586px"), "the desktop hero app frame uses its updated dimensions");
assert(/@media \(max-width: 900px\)[\s\S]*?\.fr-capabilities \{ grid-template-columns: 1fr 1fr; \}/.test(landingCss), "tablet capabilities use two columns");
assert(/\.fr-provider__mark \{[\s\S]*?width: 46px;[\s\S]*?height: 46px;/.test(landingCss), "provider marks use the enlarged icon size");
assert(/\.fr-provider-grid \{[\s\S]*?grid-template-columns: repeat\(4, minmax\(0, 1fr\)\);/.test(landingCss), "provider list uses four unboxed desktop columns");
assert(/\.fr-provider-grid \{[\s\S]*?margin: 3\.75rem 0 0;/.test(landingCss), "provider list has deliberate spacing below its title block");
assert(/@media \(max-width: 900px\)[\s\S]*?\.fr-provider-grid \{ grid-template-columns: repeat\(3, minmax\(0, 1fr\)\); \}/.test(landingCss), "provider list uses three tablet columns");
assert(/@media \(max-width: 680px\)[\s\S]*?\.fr-provider-grid \{ grid-template-columns: repeat\(2, minmax\(0, 1fr\)\); margin-top: 2\.75rem; \}/.test(landingCss), "provider inventory uses two columns on mobile");
assert(/@media \(max-width: 380px\)[\s\S]*?\.fr-provider-grid \{ grid-template-columns: 1fr;/.test(landingCss), "provider list uses one column on narrow mobile screens");
assert(/@media \(max-width: 760px\)[\s\S]*?\.product-window__bar \{\s*grid-template-columns: 1fr auto 1fr;/.test(globalCss), "the mobile demo title bar preserves all three columns");
assert(/@media \(max-width: 680px\)[\s\S]*?\.demo-media__image-grid,[\s\S]*?\.demo-media__video-grid \{ grid-template-columns: 1fr; \}/.test(landingCss), "mobile media responses use one column");
assert(landingCss.includes("min-height: 65px") && landingCss.includes("height: 185px"), "generated audio and video components use reduced heights at full width");
assert(landingCss.includes("content: attr(data-label)"), "the mobile knowledge comparison keeps column labels");
assert(/@media \(max-width: 820px\)[\s\S]*?\.docs-product-page \.docs-reader \{\s*grid-template-columns: 1fr;/.test(docsCss), "the docs reader collapses on tablets");
assert(/@media \(max-width: 680px\)[\s\S]*?\.docs-product-page \.docs-card-grid \{\s*grid-template-columns: 1fr;/.test(docsCss), "docs cards collapse on mobile");
assert(/@media \(max-width: 760px\)[\s\S]*?\.footer-grid \{\s*grid-template-columns: 1fr;/.test(globalCss), "the shared footer collapses on mobile");
assert(landingCss.includes("overflow-x: clip") && docsCss.includes("overflow-x: clip"), "landing and docs shells prevent page-level horizontal overflow");
assert(landingCss.includes("prefers-reduced-motion") && docsCss.includes("prefers-reduced-motion"), "landing and docs respect reduced motion");
assert(landingCss.includes('[data-theme="light"] .friday-landing-page'), "landing defines a complete light-theme token set");

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
