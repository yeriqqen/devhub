import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yeriqqen.vercel.app";
  const routes = ["", "/explore", "/about", "/portfolio", "/contact"];

  return routes.map((route) => ({ url: `${baseUrl}${route}` }));
}
