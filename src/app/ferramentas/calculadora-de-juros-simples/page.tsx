import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import SimpleInterestCalculator from "@/components/tools/SimpleInterestCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Juros Simples - Ferramentas360",
  description:
    "Calcule juros simples e o valor total de um investimento ou dívida.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-juros-simples",
  },
  openGraph: {
    title: "Calculadora de Juros Simples - Ferramentas360",
    description:
      "Informe capital, taxa e tempo para obter juros e montante.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-juros-simples",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Juros Simples - Ferramentas360",
    description:
      "Faça simulações rápidas de juros simples.",
  },
};

export default function CalculadoraDeJurosSimplesPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Juros Simples
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Calcule os juros simples e o total a pagar ou receber.
      </p>

      <AdPlaceholder position="acima da calculadora de juros simples" />

      <SimpleInterestCalculator />

      <AdPlaceholder position="abaixo da calculadora de juros simples" />
    </section>
  );
}
