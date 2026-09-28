import { siteConfig } from "@/content/site";

export interface SeoProps {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
}

export function buildSeoMeta({
  path,
  title,
  description,
  type = "website",
  image,
  imageAlt,
}: SeoProps) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteConfig.siteUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
  const resolvedImage = image
    ? image.startsWith("http")
      ? image
      : `${siteConfig.siteUrl}${image.startsWith("/") ? "" : "/"}${image}`
    : `${siteConfig.siteUrl}/og-image.jpg`;

  const resolvedAlt =
    imageAlt || "Envo Peace and Development Foundation — Community Work in Ebonyi State";

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:site_name", content: siteConfig.name },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: resolvedImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: resolvedAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: resolvedImage },
      { name: "twitter:image:alt", content: resolvedAlt },
    ],
    links: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
    ],
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/apple-touch-icon.png`,
    image: `${siteConfig.siteUrl}/og-image.jpg`,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founderName,
      jobTitle: siteConfig.founderTitle,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 1, Hilltop Rd",
      addressLocality: "Abakaliki",
      addressRegion: "Ebonyi State",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer support",
      email: siteConfig.email,
      areaServed: "NG",
      availableLanguage: ["English", "Igbo"],
    },
    sameAs: Object.values(siteConfig.socials).filter(Boolean),
  };
}
