import type { Locale } from "../i18n";

interface HomepageStructuredDataInput {
  description: string;
  faqs?: { question: string; answer: string }[];
  featureNames: string[];
  locale: Locale;
  siteBaseUrl: URL;
  tagline: string;
}

const PRODUCT_REPOSITORY_URL = "https://github.com/HaraldBregu/friday";
const PRODUCT_DOWNLOAD_URL = `${PRODUCT_REPOSITORY_URL}/releases`;

export function buildHomepageStructuredData({
  description,
  faqs = [],
  featureNames,
  locale,
  siteBaseUrl,
  tagline,
}: HomepageStructuredDataInput) {
  const language = locale === "it" ? "it-IT" : "en";
  const pagePath = locale === "it" ? "/it/" : "/";
  const homepageUrl = new URL(pagePath, siteBaseUrl).toString();
  const organizationId = new URL("/#organization", siteBaseUrl).toString();
  const websiteId = new URL("/#website", siteBaseUrl).toString();
  const applicationId = new URL("/#software-application", siteBaseUrl).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Friday",
        url: new URL("/", siteBaseUrl).toString(),
        logo: new URL("/icon-rounded.png", siteBaseUrl).toString(),
        sameAs: [PRODUCT_REPOSITORY_URL],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: "Friday",
        url: new URL("/", siteBaseUrl).toString(),
        inLanguage: ["en", "it"],
        publisher: { "@id": organizationId },
      },
      {
        "@type": "SoftwareApplication",
        "@id": applicationId,
        name: "Friday",
        description,
        url: homepageUrl,
        downloadUrl: PRODUCT_DOWNLOAD_URL,
        applicationCategory: "ProductivityApplication",
        applicationSubCategory: "AI assistant",
        operatingSystem: "macOS, Windows, Linux",
        softwareVersion: "1.0 beta",
        inLanguage: ["en", "it"],
        featureList: featureNames,
        author: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": `${homepageUrl}#webpage`,
        name: `Friday - ${tagline}`,
        url: homepageUrl,
        description,
        inLanguage: language,
        isPartOf: { "@id": websiteId },
        about: { "@id": applicationId },
        mainEntity: { "@id": applicationId },
      },
    ],
  };
}
