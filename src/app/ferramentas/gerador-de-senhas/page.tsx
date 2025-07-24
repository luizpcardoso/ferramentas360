import { AdPlaceholder } from "@/components/AdPlaceholder";
import PasswordGenerator from "@/components/tools/PasswordGenerator";

export default function GeradorDeSenhasPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Gerador de Senhas Seguras
      </h1>

      <AdPlaceholder position="acima do gerador de senhas" />

      <PasswordGenerator />

      <AdPlaceholder position="abaixo do gerador de senhas" />
    </section>
  );
}
