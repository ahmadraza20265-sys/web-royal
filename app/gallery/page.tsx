import type { Metadata } from "next";
import { GalleryPageContent, PageIntro } from "@/components/public-sections";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A premium gallery of Royal Mango Crates orchards, mangoes, harvest, packaging, and delivery."
};

export default function GalleryPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Gallery"
        title="Orchard freshness, golden mangoes, and gift-ready crates."
        copy="Browse moments from orchard selection, harvest, packaging, and delivery across the Royal Mango Crates experience."
      />
      <GalleryPageContent />
    </main>
  );
}
