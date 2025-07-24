import { AdPlaceholder } from "@/components/AdPlaceholder";
import CurrencyConverter from "@/components/tools/CurrencyConverter";

export default function ConversorDeMoedasPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Conversor de Moedas
      </h1>

      <AdPlaceholder position="acima do conversor" />

      <CurrencyConverter />

      <AdPlaceholder position="abaixo do conversor" />
    </section>
  );
}
