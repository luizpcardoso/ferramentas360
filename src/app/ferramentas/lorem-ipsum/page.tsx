import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import LoremIpsumGenerator from "@/components/tools/LoremIpsumGenerator";

export const metadata: Metadata = {
  title: "Gerador de Lorem Ipsum - Ferramentas360",
  description:
    "Gere textos fictícios com o clássico Lorem Ipsum para usar em layouts, protótipos e design de interfaces.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/lorem-ipsum",
  },
  openGraph: {
    title: "Gerador de Lorem Ipsum - Ferramentas360",
    description:
      "Gere blocos de texto fictício com o clássico Lorem Ipsum. Útil para mockups, testes de layout e design.",
    url: "https://ferramentas360.com.br/ferramentas/lorem-ipsum",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de Lorem Ipsum - Ferramentas360",
    description:
      "Gere blocos de texto fictício com o clássico Lorem Ipsum. Útil para mockups, testes de layout e design.",
  },
};

export default function LoremIpsumPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Gerador de Lorem Ipsum
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Gere textos fictícios com o clássico Lorem Ipsum para preencher espaços em layouts, mockups, protótipos e testes de design. Prático, rápido e personalizável.
      </p>

      <AdPlaceholder position="acima do gerador" />

      <LoremIpsumGenerator />

      <AdPlaceholder position="abaixo do gerador" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">O que é Lorem Ipsum?</h2>
        <p className="mb-2">
          O Lorem Ipsum é um texto fictício utilizado pela indústria gráfica e de design desde os anos 1500. Ele serve como uma simulação realista de blocos de texto.
        </p>
        <p>
          É muito usado por designers e desenvolvedores para testar layouts, fontes e espaçamento em interfaces antes do conteúdo real estar disponível.
        </p>
      </section>
    </section>
  );
}
