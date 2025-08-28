import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import TipCalculator from "@/components/tools/TipCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Gorjeta - Ferramentas360",
  description:
    "Calcule o valor da gorjeta e o total da conta rapidamente.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-gorjeta",
  },
  openGraph: {
    title: "Calculadora de Gorjeta - Ferramentas360",
    description:
      "Informe o valor da conta e a porcentagem da gorjeta para obter o total.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-gorjeta",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Gorjeta - Ferramentas360",
    description:
      "Descubra quanto deixar de gorjeta e o valor final da conta.",
  },
};

export default function CalculadoraDeGorjetaPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Gorjeta
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Informe o valor da conta e a porcentagem da gorjeta para calcular o total.
      </p>

      <AdPlaceholder position="acima da calculadora de gorjeta" />

      <TipCalculator />

      <AdPlaceholder position="abaixo da calculadora de gorjeta" />
    </section>
  );
}
