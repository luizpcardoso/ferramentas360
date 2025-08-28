import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import TemperatureConverter from "@/components/tools/TemperatureConverter";

export const metadata: Metadata = {
  title: "Conversor de Temperatura (Celsius <-> Fahrenheit) - Ferramentas360",
  description:
    "Converta temperaturas entre Celsius e Fahrenheit de forma rápida e fácil.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/conversor-de-temperatura",
  },
  openGraph: {
    title: "Conversor de Temperatura - Ferramentas360",
    description:
      "Ferramenta online para converter valores de Celsius para Fahrenheit e vice-versa.",
    url: "https://ferramentas360.com.br/ferramentas/conversor-de-temperatura",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Temperatura - Ferramentas360",
    description:
      "Converta facilmente entre Celsius e Fahrenheit.",
  },
};

export default function ConversorDeTemperaturaPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Conversor de Temperatura
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Insira um valor em Celsius ou Fahrenheit e veja a conversão instantânea.
      </p>

      <AdPlaceholder position="acima do conversor de temperatura" />

      <TemperatureConverter />

      <AdPlaceholder position="abaixo do conversor de temperatura" />
    </section>
  );
}
