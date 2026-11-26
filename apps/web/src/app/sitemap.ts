import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yeriqqen.github.io";
  const routes = [
    "",
    "/explore",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
  ];

  return routes.map((route) => ({ url: `${baseUrl}${route}` }));
}
