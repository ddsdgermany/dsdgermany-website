import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dsdgermany.de";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/is-ilanlari`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/almanya-hemsire-is-ilanlari`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/almanya-ota-is-ilanlari`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/almanya-fizyoterapist-is-ilanlari`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}