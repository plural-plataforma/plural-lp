import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://pluralplataforma.com/sitemap.xml",
    host: "https://pluralplataforma.com",
  };
}
