import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "@/components/site-shell";
import { assets, brand } from "@/lib/data";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://royalmangocrates.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Royal Mango Crates | Premium Pakistani Mangoes",
    template: "%s | Royal Mango Crates"
  },
  description: "Premium Pakistani mangoes delivered fresh from carefully selected orchards.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Royal Mango Crates | Premium Pakistani Mangoes",
    description: "Premium Pakistani mangoes delivered fresh from carefully selected orchards.",
    url: siteUrl,
    siteName: "Royal Mango Crates",
    images: [{ url: assets.banner, width: 960, height: 400, alt: "Royal Mango Crates premium mangoes" }],
    locale: "en_PK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Mango Crates | Premium Pakistani Mangoes",
    description: "Premium Pakistani mangoes delivered fresh from carefully selected orchards.",
    images: [assets.banner]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08200f"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    url: siteUrl,
    image: `${siteUrl}${assets.banner}`,
    telephone: brand.whatsappDisplay,
    sameAs: [brand.instagram, brand.facebook],
    description: "Premium Pakistani mangoes delivered fresh from carefully selected orchards."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingWhatsApp />
        <Script id="schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
