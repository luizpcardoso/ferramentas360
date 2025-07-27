import { AdPlaceholder } from "@/components/AdPlaceholder";
import BmiCalculator from "@/components/tools/BmiCalculator";

export default function CalculadoraDeImcPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
        Calculadora de IMC (Índice de Massa Corporal)
      </h1>

      <AdPlaceholder position="acima da calculadora de IMC" />

      <BmiCalculator />

      <AdPlaceholder position="abaixo da calculadora de IMC" />
    </section>
  );
}
