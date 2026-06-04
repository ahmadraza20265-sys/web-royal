import type { Metadata } from "next";
import { ContactPageContent, PageIntro } from "@/components/public-sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Royal Mango Crates on WhatsApp, Instagram, Facebook, Google Maps, or submit an inquiry that opens WhatsApp."
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="Order premium mango crates on WhatsApp."
        copy="Share your name, city, variety, quantity, and delivery details. The form opens WhatsApp automatically with your inquiry."
      />
      <ContactPageContent />
    </main>
  );
}
