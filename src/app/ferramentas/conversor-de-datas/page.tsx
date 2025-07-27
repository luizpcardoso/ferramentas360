import { AdPlaceholder } from "@/components/AdPlaceholder";
import DateConverter from "@/components/tools/DateConverter";

export default function ConversorDeDatasPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
        Conversor de Datas
      </h1>

      <AdPlaceholder position="acima do conversor de datas" />

      <DateConverter />

      <AdPlaceholder position="abaixo do conversor de datas" />
    </section>
  );
}
