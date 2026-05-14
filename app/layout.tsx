import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Princess' Construction Inc | Premium Dallas Roofing",
  description:
    "Princess' Construction Inc is a premium Dallas roofing company for roof inspections, roof repairs, and roof installations."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
