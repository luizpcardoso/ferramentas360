import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import RandomNumberGenerator from "@/components/tools/RandomNumberGenerator";

export const metadata: Metadata = {
  title: "Gerador de Número Aleatório - Ferramentas360",
  description:
    "Gere números aleatórios dentro de um intervalo definido.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/gerador-de-numero-aleatorio",
  },
  openGraph: {
    title: "Gerador de Número Aleatório - Ferramentas360",
    description:
      "Escolha o intervalo mínimo e máximo e gere um número aleatório.",
    url: "https://ferramentas360.com.br/ferramentas/gerador-de-numero-aleatorio",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de Número Aleatório - Ferramentas360",
    description:
      "Ferramenta simples para gerar números aleatórios.",
  },
};

export default function GeradorDeNumeroAleatorioPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Gerador de Número Aleatório
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Defina o intervalo e gere números aleatórios instantaneamente.
      </p>

      <AdPlaceholder position="acima do gerador de número aleatório" />

      <RandomNumberGenerator />

      <AdPlaceholder position="abaixo do gerador de número aleatório" />
    </section>
  );
}
