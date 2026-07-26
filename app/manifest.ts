import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AK IT Solutions",
    short_name: "AK IT",
    description:
      "Professional Website Development, Networking, Cloud, Cyber Security and IT Solutions.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#0B7DDA",

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}