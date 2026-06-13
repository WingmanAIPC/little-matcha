import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Update this to your custom domain once connected in Vercel.
const siteUrl = "https://little-matcha.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Little Matcha — Hand-whisked matcha in Covington",
    template: "%s · Little Matcha",
  },
  description:
    "A tiny green escape. Little Matcha hand-whisks single-origin matcha, hojicha, and genmaicha sourced from a family farm in Shizuoka, Japan. Now open in Covington, KY.",
  keywords: [
    "matcha",
    "Little Matcha",
    "Covington",
    "Cincinnati",
    "hojicha",
    "genmaicha",
    "matcha latte",
    "Japanese tea",
    "café",
  ],
  authors: [{ name: "Little Matcha" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Little Matcha — A tiny green escape",
    description:
      "Hand-whisked, single-origin matcha sourced from Shizuoka, Japan. Now open in Covington, KY.",
    siteName: "Little Matcha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Matcha — A tiny green escape",
    description:
      "Hand-whisked, single-origin matcha from Shizuoka, Japan. Covington, KY.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
