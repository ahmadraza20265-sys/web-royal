import type { Metadata } from "next";
import { PageIntro, VarietiesPageContent } from "@/components/public-sections";

export const metadata: Metadata = {
  title: "Mango Varieties",
  description: "Explore Langra, Sindhri, Chaunsa, Anwar Ratol, and Saroli premium mango crates."
};

export default function MangoVarietiesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Mango Varieties"
        title="Langra, Sindhri, Chaunsa, Anwar Ratol, and Saroli."
        copy="Explore premium seasonal mango varieties with taste profiles, seasons, and direct WhatsApp order buttons."
      />
      <VarietiesPageContent />
    </main>
  );
}
