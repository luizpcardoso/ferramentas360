import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import CompoundInterestCalculator from "@/components/tools/CompoundInterestCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Juros Compostos - Ferramentas360",
  description:
    "Simule o crescimento de investimentos com juros compostos, depósitos mensais e prazos. Ferramenta online gratuita e fácil de usar.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-juros-compostos",
  },
  openGraph: {
    title: "Calculadora de Juros Compostos - Ferramentas360",
    description:
      "Calcule montante final, juros ganhos e total investido com base na taxa anual, meses e aportes.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-juros-compostos",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Juros Compostos - Ferramentas360",
    description:
      "Simule juros compostos com aportes e prazos. Resultado claro e instantâneo.",
  },
};

export default function CalculadoraDeJurosCompostosPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Juros Compostos
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Estime o montante futuro de um investimento com juros compostos. Informe o valor inicial, a taxa, o tempo em meses e os depósitos mensais para ver o resultado.
      </p>

      <AdPlaceholder position="acima da calculadora de juros compostos" />

      <CompoundInterestCalculator />

      <AdPlaceholder position="abaixo da calculadora de juros compostos" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Como o cálculo é feito?</h2>
        <p className="mb-2">
          O juros composto considera que, a cada período, os juros são aplicados sobre o valor acumulado. Quando há aportes mensais, cada depósito também rende proporcionalmente ao tempo em que permanece investido.
        </p>
        <p>
          A fórmula utilizada considera a taxa efetiva mensal e soma o crescimento do capital inicial ao acúmulo dos aportes no período selecionado.
        </p>
      </section>
    </section>
  );
}

