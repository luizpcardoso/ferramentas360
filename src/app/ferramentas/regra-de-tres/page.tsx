import { AdPlaceholder } from "@/components/AdPlaceholder";
import RuleOfThreeCalculator from "@/components/tools/RuleOfThreeCalculator";

export default function RegraDeTresPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Regra de 3
      </h1>

      <AdPlaceholder position="acima da calculadora" />

      <RuleOfThreeCalculator />

      <AdPlaceholder position="abaixo da calculadora" />
    </section>
  );
}
