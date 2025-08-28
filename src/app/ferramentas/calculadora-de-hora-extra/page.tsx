import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import OvertimeCalculator from "@/components/tools/OvertimeCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Hora Extra - Ferramentas360",
  description:
    "Calcule quanto receber de horas extras com base no adicional porcentual.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-hora-extra",
  },
  openGraph: {
    title: "Calculadora de Hora Extra - Ferramentas360",
    description:
      "Informe valor da hora, quantidade de horas extras e adicional para saber o total.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-hora-extra",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Hora Extra - Ferramentas360",
    description:
      "Saiba quanto receberá pelas horas extras trabalhadas.",
  },
};

export default function CalculadoraDeHoraExtraPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Hora Extra
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Informe o valor da hora, a quantidade de horas extras e o percentual de adicional.
      </p>

      <AdPlaceholder position="acima da calculadora de hora extra" />

      <OvertimeCalculator />

      <AdPlaceholder position="abaixo da calculadora de hora extra" />
    </section>
  );
}
