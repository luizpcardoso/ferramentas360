import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import FuelCalculator from "@/components/tools/FuelCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Consumo de Combustível - Ferramentas360",
  description:
    "Calcule quantos quilômetros seu veículo faz por litro de combustível.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-combustivel",
  },
  openGraph: {
    title: "Calculadora de Consumo de Combustível - Ferramentas360",
    description:
      "Informe a distância percorrida e a quantidade de combustível para obter o consumo.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-combustivel",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Consumo de Combustível - Ferramentas360",
    description:
      "Descubra o consumo médio de combustível do seu veículo.",
  },
};

export default function CalculadoraDeCombustivelPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Consumo de Combustível
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Informe a distância percorrida e o combustível utilizado para calcular o consumo.
      </p>

      <AdPlaceholder position="acima da calculadora de combustível" />

      <FuelCalculator />

      <AdPlaceholder position="abaixo da calculadora de combustível" />
    </section>
  );
}
