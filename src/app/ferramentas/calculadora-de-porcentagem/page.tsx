import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import PercentageCalculator from "@/components/tools/PercentageCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Porcentagem - Ferramentas360",
  description:
    "Calcule porcentagens, aumentos, descontos e descubra que percentual uma parte representa do total. Rápido e gratuito.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-porcentagem",
  },
  openGraph: {
    title: "Calculadora de Porcentagem - Ferramentas360",
    description:
      "Ferramenta online para cálculos de porcentagem mais comuns: parte de um todo, aumento e desconto.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-porcentagem",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Porcentagem - Ferramentas360",
    description:
      "Descubra valores percentuais e aplique reajustes com facilidade.",
  },
};

export default function CalculadoraDePorcentagemPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Porcentagem
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Realize os cálculos de porcentagem mais comuns em segundos: parte de um total, aumento e desconto.
      </p>

      <AdPlaceholder position="acima da calculadora de porcentagem" />

      <PercentageCalculator />

      <AdPlaceholder position="abaixo da calculadora de porcentagem" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Aplicações do dia a dia</h2>
        <p>
          Útil para calcular promoções, reajustes de preços, taxas e proporções em atividades acadêmicas e profissionais.
        </p>
      </section>
    </section>
  );
}

