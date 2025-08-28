import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import DateDifferenceCalculator from "@/components/tools/DateDifferenceCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Dias entre Datas - Ferramentas360",
  description:
    "Descubra quantos dias existem entre duas datas específicas.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-dias-entre-datas",
  },
  openGraph: {
    title: "Calculadora de Dias entre Datas - Ferramentas360",
    description:
      "Selecione duas datas e veja a diferença em dias.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-dias-entre-datas",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Dias entre Datas - Ferramentas360",
    description:
      "Ferramenta para calcular rapidamente a diferença entre datas.",
  },
};

export default function CalculadoraDeDiasEntreDatasPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Dias entre Datas
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Escolha uma data inicial e uma final para descobrir o número de dias entre elas.
      </p>

      <AdPlaceholder position="acima da calculadora de dias" />

      <DateDifferenceCalculator />

      <AdPlaceholder position="abaixo da calculadora de dias" />
    </section>
  );
}
