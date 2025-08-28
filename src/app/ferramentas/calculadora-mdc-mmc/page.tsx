import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import GcdLcmCalculator from "@/components/tools/GcdLcmCalculator";

export const metadata: Metadata = {
  title: "Calculadora de MDC e MMC - Ferramentas360",
  description:
    "Calcule rapidamente o Máximo Divisor Comum (MDC) e o Mínimo Múltiplo Comum (MMC) de uma lista de números.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-mdc-mmc",
  },
  openGraph: {
    title: "Calculadora de MDC e MMC - Ferramentas360",
    description:
      "Informe os números e obtenha o MDC e o MMC instantaneamente. Ideal para estudos e exercícios.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-mdc-mmc",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de MDC e MMC - Ferramentas360",
    description:
      "MDC e MMC de vários números em poucos cliques.",
  },
};

export default function CalculadoraMdcMmcPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de MDC e MMC
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Insira os números separados por vírgula ou espaço para calcular o MDC e o MMC.
      </p>

      <AdPlaceholder position="acima do cálculo de MDC/MMC" />

      <GcdLcmCalculator />

      <AdPlaceholder position="abaixo do cálculo de MDC/MMC" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Sobre os cálculos</h2>
        <p>
          O MDC é o maior número que divide todos sem deixar resto; o MMC é o menor número múltiplo de todos.
        </p>
      </section>
    </section>
  );
}

