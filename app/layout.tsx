import type { Metadata } from "next";
import "@/styles/globals-compiled.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://infrasenseai.online"),
  title: {
    template: "%s | InfraSense AI",
    default: "InfraSense AI | AIoT Road Infrastructure Intelligence",
  },
  description: "Sense. Map. Analyze. Prioritize. Turning continuous road sensing into location-aware maintenance intelligence.",
  icons: {
    icon: "/brand/favicon/favicon.svg",
    apple: "/brand/favicon/favicon.svg",
  },
  openGraph: {
    title: "InfraSense AI | AIoT Road Infrastructure Intelligence",
    description: "Turning continuous road sensing into location-aware maintenance intelligence.",
    url: "https://infrasenseai.online",
    siteName: "InfraSense AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/brand/social/og-image.svg",
        width: 1200,
        height: 630,
        alt: "InfraSense AI - Working Prototype",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InfraSense AI | AIoT Road Infrastructure Intelligence",
    description: "Turning continuous road sensing into location-aware maintenance intelligence.",
    images: ["/brand/social/og-image.svg"],
  }
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/20 selection:text-accent">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
