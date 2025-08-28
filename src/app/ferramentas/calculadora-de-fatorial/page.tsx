import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import FactorialCalculator from "@/components/tools/FactorialCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Fatorial - Ferramentas360",
  description:
    "Calcule o fatorial de um número inteiro rapidamente.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-fatorial",
  },
  openGraph: {
    title: "Calculadora de Fatorial - Ferramentas360",
    description:
      "Digite um número e obtenha instantaneamente o fatorial.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-fatorial",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Fatorial - Ferramentas360",
    description:
      "Ferramenta online para cálculo de fatoriais.",
  },
};

export default function CalculadoraDeFatorialPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Fatorial
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Informe um número inteiro para calcular seu fatorial.
      </p>

      <AdPlaceholder position="acima da calculadora de fatorial" />

      <FactorialCalculator />

      <AdPlaceholder position="abaixo da calculadora de fatorial" />
    </section>
  );
}
