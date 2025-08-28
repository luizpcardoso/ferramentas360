import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import AgeCalculator from "@/components/tools/AgeCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Idade - Ferramentas360",
  description:
    "Descubra sua idade exata em anos e dias a partir da data de nascimento. Simples e rápido.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-idade",
  },
  openGraph: {
    title: "Calculadora de Idade - Ferramentas360",
    description:
      "Informe sua data de nascimento e veja idade exata, dias adicionais e total de dias.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-idade",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Idade - Ferramentas360",
    description:
      "Idade detalhada calculada instantaneamente a partir da sua data de nascimento.",
  },
};

export default function CalculadoraDeIdadePage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Idade
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Selecione sua data de nascimento e confira sua idade exata.
      </p>

      <AdPlaceholder position="acima da calculadora de idade" />

      <AgeCalculator />

      <AdPlaceholder position="abaixo da calculadora de idade" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Como funciona?</h2>
        <p>
          A calculadora considera a diferença exata entre a data atual e a data de nascimento, exibindo anos completos e dias restantes.
        </p>
      </section>
    </section>
  );
}

