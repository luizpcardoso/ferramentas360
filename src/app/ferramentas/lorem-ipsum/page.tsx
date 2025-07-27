import { AdPlaceholder } from "@/components/AdPlaceholder";
import LoremIpsumGenerator from "@/components/tools/LoremIpsumGenerator";

export default function LoremIpsumPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Gerador de Lorem Ipsum
      </h1>

      <AdPlaceholder position="acima do gerador" />

      <LoremIpsumGenerator />

      <AdPlaceholder position="abaixo do gerador" />
    </section>
  );
}
