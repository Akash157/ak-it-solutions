import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ak-it-sol.com"),

  title: {
    default: "AK IT Solutions | Complete IT Solutions in Pakistan",
    template: "%s | AK IT Solutions",
  },

  description:
    "AK IT Solutions provides professional Website Development, Networking, Cyber Security, Cloud Solutions, CCTV Installation, VoIP/IP PBX, SEO, Digital Marketing and IT Consultancy services in Lahore, Pakistan.",

  keywords: [
    "AK IT Solutions",
    "Website Development",
    "Web Development Pakistan",
    "Website Design Lahore",
    "Networking Solutions",
    "Cisco",
    "MikroTik",
    "Ubiquiti",
    "Cyber Security",
    "Cloud Solutions",
    "Microsoft 365",
    "Google Workspace",
    "CCTV Installation",
    "VoIP",
    "IP PBX",
    "SEO",
    "Digital Marketing",
    "IT Consultancy",
    "IT Company Lahore",
    "IT Company Pakistan",
  ],

  authors: [
    {
      name: "AK IT Solutions",
      url: "https://ak-it-sol.com",
    },
  ],

  creator: "AK IT Solutions",

  publisher: "AK IT Solutions",

  applicationName: "AK IT Solutions",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://ak-it-sol.com",
    siteName: "AK IT Solutions",
    title: "AK IT Solutions | Complete IT Solutions in Pakistan",
    description:
      "Professional IT Services including Website Development, Networking, Cloud Solutions, CCTV, VoIP, Cyber Security and Digital Marketing.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AK IT Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AK IT Solutions",
    description:
      "Professional IT Services including Website Development, Networking, Cloud, Cyber Security, CCTV, VoIP and Digital Marketing.",

    images: ["/images/og-image.jpg"],
  },

  alternates: {
    canonical: "https://ak-it-sol.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}