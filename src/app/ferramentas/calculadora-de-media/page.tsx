import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import AverageCalculator from "@/components/tools/AverageCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Média - Ferramentas360",
  description:
    "Calcule a média aritmética de uma lista de números.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-media",
  },
  openGraph: {
    title: "Calculadora de Média - Ferramentas360",
    description:
      "Informe números separados por vírgula e obtenha a média.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-media",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Média - Ferramentas360",
    description:
      "Ferramenta online para calcular a média aritmética.",
  },
};

export default function CalculadoraDeMediaPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Média
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Digite números separados por vírgula para obter a média aritmética.
      </p>

      <AdPlaceholder position="acima da calculadora de média" />

      <AverageCalculator />

      <AdPlaceholder position="abaixo da calculadora de média" />
    </section>
  );
}
