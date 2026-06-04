import type { Metadata } from "next";
import { AboutContent, PageIntro } from "@/components/public-sections";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story, mission, quality commitment, premium packaging, and farm-fresh promise of Royal Mango Crates."
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About Us"
        title="Premium Pakistani mangoes packed with royal care."
        copy="Royal Mango Crates exists for customers who expect exceptional mangoes, elegant presentation, and a simple WhatsApp ordering experience."
      />
      <AboutContent />
    </main>
  );
}
