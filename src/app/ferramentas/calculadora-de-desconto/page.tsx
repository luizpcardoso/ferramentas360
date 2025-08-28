import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import DiscountCalculator from "@/components/tools/DiscountCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Desconto - Ferramentas360",
  description:
    "Calcule o valor do desconto e o preço final de um produto.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-desconto",
  },
  openGraph: {
    title: "Calculadora de Desconto - Ferramentas360",
    description:
      "Informe o preço e a porcentagem de desconto para obter o valor final.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-desconto",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Desconto - Ferramentas360",
    description:
      "Descubra quanto você vai economizar em suas compras.",
  },
};

export default function CalculadoraDeDescontoPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Desconto
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Informe o valor do produto e a porcentagem de desconto para calcular o preço final.
      </p>

      <AdPlaceholder position="acima da calculadora de desconto" />

      <DiscountCalculator />

      <AdPlaceholder position="abaixo da calculadora de desconto" />
    </section>
  );
}
