import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anilkumar-n-j.vercel.app"),
  title: `${profile.shortName} — ${profile.title}`,
  description: profile.summary,
  keywords: [
    "MEP BIM Coordinator",
    "BIM",
    "Revit",
    "Navisworks",
    "Dynamo",
    "AutoCAD",
    "MEP Coordination",
    "Clash Detection",
    "Malta",
    "GCC",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.shortName} — ${profile.title}`,
    description: profile.summary,
    type: "website",
    url: "https://anilkumar-n-j.vercel.app",
    siteName: `${profile.shortName} · Portfolio`,
    locale: "en_US",
    // `app/opengraph-image.tsx` is auto-wired for og:image
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} — ${profile.title}`,
    description: profile.summary,
    // Uses the same opengraph-image by default
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
