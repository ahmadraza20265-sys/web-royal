import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liberty Digital Hub | Digital Investment Education & Online Income Guidance",
  description:
    "Liberty Digital Hub helps individuals grow through smart digital opportunities, affiliate marketing education, online income systems, and financial growth strategies."
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
