import { AdPlaceholder } from "@/components/AdPlaceholder";
import CpfValidator from "@/components/tools/CpfValidator";

export default function ValidadorDeCpfPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Validador de CPF
      </h1>

      <AdPlaceholder position="acima do validador" />

      <CpfValidator />

      <AdPlaceholder position="abaixo do validador" />
    </section>
  );
}
