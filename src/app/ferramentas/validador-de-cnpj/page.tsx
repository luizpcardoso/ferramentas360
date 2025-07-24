import { AdPlaceholder } from "@/components/AdPlaceholder";
import CnpjValidator from "@/components/tools/CnpjValidator";

export default function ValidadorDeCnpjPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Validador de CNPJ
      </h1>

      <AdPlaceholder position="acima do validador de CNPJ" />

      <CnpjValidator />

      <AdPlaceholder position="abaixo do validador de CNPJ" />
    </section>
  );
}
