import { Metadata } from "next";
import BmiCalculator from "@/components/tools/BmiCalculator";
import { AdPlaceholder } from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Calculadora de IMC - Ferramentas360",
  description:
    "Calcule seu Índice de Massa Corporal (IMC) com base no peso e altura. Descubra em segundos se você está no peso ideal.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-imc",
  },
  openGraph: {
    title: "Calculadora de IMC - Ferramentas360",
    description:
      "Descubra rapidamente se você está no peso ideal com nossa calculadora de IMC online.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-imc",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de IMC - Ferramentas360",
    description:
      "Descubra rapidamente se você está no peso ideal com nossa calculadora de IMC online.",
  },
};

export default function CalculadoraDeImcPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
        Calculadora de IMC (Índice de Massa Corporal)
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Descubra seu Índice de Massa Corporal (IMC) de forma rápida e gratuita. Basta informar seu peso e altura e veja a classificação em tempo real.
      </p>

      <AdPlaceholder position="acima da calculadora de IMC"  />

      <BmiCalculator />

      <AdPlaceholder position="abaixo da calculadora de IMC" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">O que é IMC?</h2>
        <p className="mb-2">
          O IMC (Índice de Massa Corporal) é uma fórmula usada mundialmente para avaliar se uma pessoa está dentro do peso ideal com base na relação entre peso e altura.
        </p>
        <p className="mb-2">
          Esta ferramenta é útil para ter uma noção geral da sua condição física, mas não substitui uma avaliação médica.
        </p>
      </section>
    </section>
  );
}
