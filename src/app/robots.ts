import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://courseverse.example";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}


