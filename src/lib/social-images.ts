import type { Locale } from "../i18n";

export const socialImages = {
  default: {
    path: "/og/friday-personal-ai-assistant.png",
    width: 1200,
    height: 630,
    type: "image/png",
    alt: {
      en: "Friday desktop AI assistant with connected task panels and flowing violet and blue light.",
      it: "Friday, assistente AI desktop, con pannelli operativi connessi e flussi di luce viola e blu.",
    },
  },
  blog: {
    path: "/og/friday-journal-notes-for-builders.png",
    width: 1200,
    height: 630,
    type: "image/png",
    alt: {
      en: "Friday Journal cover with a luminous editorial workspace and the words Notes for builders.",
      it: "Copertina di Friday Journal con uno spazio editoriale luminoso e il testo Notes for builders.",
    },
  },
} as const;

export type SocialImageKey = keyof typeof socialImages;

export function socialImageForPath(path: string, locale: Locale) {
  const image = Object.values(socialImages).find((candidate) => candidate.path === path) ?? socialImages.default;

  return {
    ...image,
    alt: image.alt[locale],
  };
}

export function socialImageObject(key: SocialImageKey, siteBaseUrl: URL, locale: Locale, pageUrl: string) {
  const image = socialImages[key];
  const url = new URL(image.path, siteBaseUrl).toString();

  return {
    "@type": "ImageObject",
    "@id": `${pageUrl}#primaryimage`,
    url,
    contentUrl: url,
    width: image.width,
    height: image.height,
    encodingFormat: image.type,
    caption: image.alt[locale],
    inLanguage: locale === "it" ? "it-IT" : "en",
    representativeOfPage: true,
  };
}
