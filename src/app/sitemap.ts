import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://courseverse.example";
  const pages: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1, lastModified: new Date() },
  ];
  for (const c of courses) {
    pages.push({ url: `${base}/courses/${c.slug}`, priority: 0.8, lastModified: new Date() });
  }
  return pages;
}


