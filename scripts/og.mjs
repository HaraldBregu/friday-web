// Generates 1200x630 Open Graph cards into public/og/.
// Run with `bun run og` after changing any card copy below.
// ponytail: output is committed, not built on deploy — SVG text needs system
// fonts, and Vercel's build image is not guaranteed to have them.
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "og");
const iconPath = join(root, "public", "icon-rounded.png");

const WIDTH = 1200;
const HEIGHT = 630;
const SANS = "Geist, Inter, Helvetica Neue, Helvetica, Arial, sans-serif";
const MONO = "Space Mono, SFMono-Regular, Menlo, Consolas, monospace";

const cards = [
  {
    slug: "default",
    eyebrow: "Desktop AI assistant",
    title: "Your Desktop AI Personal Assistant",
    description:
      "Friday reads and edits files, runs commands, searches the web, drives a browser, and generates media — with your own provider keys.",
  },
  {
    slug: "home-it",
    eyebrow: "Assistente AI desktop",
    title: "Il tuo assistente personale AI desktop",
    description:
      "Friday legge e modifica file, esegue comandi, cerca sul web, pilota un browser e genera media, con le tue chiavi provider.",
  },
  {
    slug: "solutions",
    eyebrow: "Solutions",
    title: "Built for how you work",
    description: "Capability maps for enterprise teams, education, and personal use.",
  },
  {
    slug: "docs",
    eyebrow: "Documentation",
    title: "Friday documentation",
    description:
      "Providers, agent tools, skills and MCP, channels, automation, privacy, and getting started.",
  },
  {
    slug: "blog",
    eyebrow: "Blog",
    title: "Notes for builders and operators",
    description: "Short updates on product decisions, workflow design, and integrations.",
  },
  {
    slug: "channels",
    eyebrow: "Channels",
    title: "Reach Friday from Telegram and Discord",
    description:
      "Per-channel tokens, sender allowlists, and replies delivered back to the originating thread.",
  },
  {
    slug: "providers",
    eyebrow: "AI Providers",
    title: "Bring your own AI",
    description:
      "Pick a provider and model independently for chat, transcription, speech, image, video, and audio.",
  },
  {
    slug: "tools",
    eyebrow: "Agent Tools",
    title: "Tools that act, with approval",
    description:
      "Files, shell commands, processes, web search and fetch, a real browser, media, memory, skills, and MCP.",
  },
  {
    slug: "integrations",
    eyebrow: "Integrations",
    title: "Connect the systems you already use",
    description: "Providers, channels, automation, and local data that plug into Friday.",
  },
  {
    slug: "operators",
    eyebrow: "Workflows",
    title: "Generation and automation, split by workflow",
    description:
      "Separate operators for chat, voice, images, video, audio, schedules, and health checks.",
  },
  {
    slug: "community",
    eyebrow: "Community",
    title: "Build Friday in the open",
    description: "The mission, contribution paths, and community links for Friday.",
  },
  {
    slug: "blog-launch",
    eyebrow: "Blog / Product",
    title: "Introducing the first public preview",
    description: "A short overview of the first preview release and the principles behind it.",
  },
  {
    slug: "blog-roadmap",
    eyebrow: "Blog / Security",
    title: "Roadmap: safer assistant workflows",
    description: "How approval gates, scoped credentials, and audit trails shape the next phase.",
  },
  {
    slug: "blog-integrations",
    eyebrow: "Blog / Engineering",
    title: "Designing integration templates",
    description:
      "A practical way to structure reusable adapters for developer and productivity tools.",
  },
];

const escape = (text) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

// Greedy wrap using an average glyph width, good enough for a fixed-size card.
function wrap(text, fontSize, maxWidth, widthRatio, maxLines) {
  const perChar = fontSize * widthRatio;
  const limit = Math.floor(maxWidth / perChar);
  const lines = [];
  let line = "";

  for (const word of text.split(/\s+/)) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length <= limit) {
      line = candidate;
      continue;
    }
    if (line) lines.push(line);
    line = word;
    if (lines.length === maxLines) break;
  }
  if (line && lines.length < maxLines) lines.push(line);

  if (lines.length === maxLines) {
    const consumed = lines.join(" ").length;
    if (consumed < text.length - 1) {
      lines[maxLines - 1] = `${lines[maxLines - 1].replace(/[,.;:]$/, "")}…`;
    }
  }
  return lines;
}

// Vertical rhythm is top-anchored: the title block always starts at the same
// baseline and the description follows it, so no card can collide with the
// eyebrow above or the footer rule below.
const TITLE_BASELINE = 300;
const DESC_GAP = 72;

function buildSvg({ eyebrow, title, description }) {
  const titleSize = title.length <= 30 ? 80 : title.length <= 54 ? 68 : 56;
  const titleLeading = titleSize * 1.08;
  const titleLines = wrap(title, titleSize, 1000, 0.52, 2);
  const descLines = wrap(description, 28, 1000, 0.5, 2);
  const descBaseline = TITLE_BASELINE + (titleLines.length - 1) * titleLeading + DESC_GAP;

  const titleTspans = titleLines
    .map(
      (line, index) =>
        `<tspan x="80" y="${Math.round(TITLE_BASELINE + index * titleLeading)}">${escape(line)}</tspan>`,
    )
    .join("");

  const descTspans = descLines
    .map(
      (line, index) =>
        `<tspan x="80" y="${Math.round(descBaseline + index * 40)}">${escape(line)}</tspan>`,
    )
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#19635f"/>
      <stop offset="0.55" stop-color="#2b5fb1"/>
      <stop offset="1" stop-color="#38bdf8"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.08" r="0.75">
      <stop offset="0" stop-color="#38bdf8" stop-opacity="0.20"/>
      <stop offset="0.55" stop-color="#a855f7" stop-opacity="0.06"/>
      <stop offset="1" stop-color="#050505" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#050505"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>
  <rect width="${WIDTH}" height="6" fill="url(#bar)"/>
  <text x="176" y="118" font-family="${SANS}" font-size="36" font-weight="700" fill="#f4f4f4" letter-spacing="-0.5">Friday</text>
  <text x="80" y="196" font-family="${MONO}" font-size="22" font-weight="700" fill="#38bdf8" letter-spacing="2.4">${escape(eyebrow.toUpperCase())}</text>
  <text font-family="${SANS}" font-size="${titleSize}" font-weight="800" fill="#f4f4f4" letter-spacing="-2.4">${titleTspans}</text>
  <text font-family="${SANS}" font-size="28" font-weight="400" fill="#a7a7a7">${descTspans}</text>
  <rect x="80" y="530" width="1040" height="1" fill="#ffffff" fill-opacity="0.12"/>
  <text x="80" y="578" font-family="${MONO}" font-size="22" fill="#737373">friday.haraldbregu.com</text>
  <text x="1120" y="578" text-anchor="end" font-family="${MONO}" font-size="22" fill="#737373">macOS · Windows · Linux</text>
</svg>`;
}

const icon = await sharp(iconPath).resize(72, 72).png().toBuffer();
await mkdir(outDir, { recursive: true });

for (const card of cards) {
  const png = await sharp(Buffer.from(buildSvg(card)))
    .composite([{ input: icon, top: 68, left: 80 }])
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();

  await writeFile(join(outDir, `${card.slug}.png`), png);
  console.log(`og/${card.slug}.png  ${(png.length / 1024).toFixed(0)} KB`);
}

console.log(`\n${cards.length} cards written to public/og/`);
