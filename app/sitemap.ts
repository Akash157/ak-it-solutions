import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ak-it-sol.com";

  return [
    { url: `${base}` },
    { url: `${base}/about` },
    { url: `${base}/services` },
    { url: `${base}/portfolio` },
    { url: `${base}/contact` },
  ];
}