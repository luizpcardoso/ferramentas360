import { AdPlaceholder } from "@/components/AdPlaceholder";
import TimeCalculator from "@/components/tools/TimeCalculator";

export default function CalculadoraDeTempoPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Tempo
      </h1>

      <AdPlaceholder position="acima da calculadora" />

      <TimeCalculator />

      <AdPlaceholder position="abaixo da calculadora" />
    </section>
  );
}
