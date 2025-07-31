import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import CurrencyConverter from "@/components/tools/CurrencyConverter";

export const metadata: Metadata = {
  title: "Conversor de Moedas - Ferramentas360",
  description:
    "Converta moedas em tempo real com base nas taxas de câmbio atualizadas. Ferramenta online gratuita, rápida e precisa.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/conversor-de-moedas",
  },
  openGraph: {
    title: "Conversor de Moedas - Ferramentas360",
    description:
      "Ferramenta online gratuita para conversão de moedas com câmbio atualizado. Ideal para viagens, comércio e finanças.",
    url: "https://ferramentas360.com.br/ferramentas/conversor-de-moedas",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Moedas - Ferramentas360",
    description:
      "Ferramenta online gratuita para conversão de moedas com câmbio atualizado. Ideal para viagens, comércio e finanças.",
  },
};

export default function ConversorDeMoedasPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Conversor de Moedas
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Converta moedas com base nas taxas de câmbio atualizadas em tempo real. Ideal para planejar viagens, realizar compras internacionais ou calcular valores em outras moedas.
      </p>

      <AdPlaceholder position="acima do conversor"/>

      <CurrencyConverter />

      <AdPlaceholder position="abaixo do conversor" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Como usar o conversor de moedas?</h2>
        <p className="mb-2">
          Selecione as moedas de origem e destino, insira o valor e veja o resultado atualizado de acordo com a taxa de câmbio atual.
        </p>
        <p>
          Nosso conversor é alimentado por APIs confiáveis para garantir precisão e rapidez no resultado.
        </p>
      </section>
    </section>
  );
}
