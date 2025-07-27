import { AdPlaceholder } from "@/components/AdPlaceholder";
import UnitConverter from "@/components/tools/UnitConverter";

export default function ConversorDeUnidadesPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Conversor de Unidades
      </h1>

      <AdPlaceholder position="acima do conversor de unidades" />

      <UnitConverter />

      <AdPlaceholder position="abaixo do conversor de unidades" />
    </section>
  );
}
