import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import TimeCalculator from "@/components/tools/TimeCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Tempo - Ferramentas360",
  description:
    "Some ou subtraia horas e minutos com facilidade usando nossa Calculadora de Tempo online. Ideal para controle de jornada, horas extras e mais.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/calculadora-de-tempo",
  },
  openGraph: {
    title: "Calculadora de Tempo - Ferramentas360",
    description:
      "Some ou subtraia horas e minutos com facilidade. Ferramenta online gratuita para cálculo de tempo.",
    url: "https://ferramentas360.com.br/ferramentas/calculadora-de-tempo",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Tempo - Ferramentas360",
    description:
      "Some ou subtraia horas e minutos com facilidade. Ferramenta online gratuita para cálculo de tempo.",
  },
};

export default function CalculadoraDeTempoPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Tempo
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Use nossa Calculadora de Tempo para somar ou subtrair horas e minutos de forma rápida e prática. Ideal para controlar jornadas de trabalho, tempo de estudo, eventos e muito mais.
      </p>

      <AdPlaceholder position="acima da calculadora"  />

      <TimeCalculator />

      <AdPlaceholder position="abaixo da calculadora"  />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Como funciona a calculadora de tempo?</h2>
        <p className="mb-2">
          Basta inserir as horas e minutos que deseja somar ou subtrair, e a ferramenta calcula o resultado automaticamente.
        </p>
        <p>
          Ela é útil para planejar atividades, calcular horas extras, tempo de descanso, duração de trajetos e qualquer situação em que o controle de tempo seja necessário.
        </p>
      </section>
    </section>
  );
}
