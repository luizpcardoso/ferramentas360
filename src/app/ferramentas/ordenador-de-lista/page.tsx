import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import ListSorter from "@/components/tools/ListSorter";

export const metadata: Metadata = {
  title: "Ordenador de Lista - Ferramentas360",
  description:
    "Ordene linhas alfabeticamente ou numericamente, com opção de ordem crescente ou decrescente.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/ordenador-de-lista",
  },
  openGraph: {
    title: "Ordenador de Lista - Ferramentas360",
    description:
      "Ferramenta online para ordenar listas por texto ou número, útil em limpeza de dados.",
    url: "https://ferramentas360.com.br/ferramentas/ordenador-de-lista",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ordenador de Lista - Ferramentas360",
    description:
      "Ordene rapidamente listas por ordem alfabética ou numérica.",
  },
};

export default function OrdenadorDeListaPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Ordenador de Lista
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Cole sua lista e escolha a forma de ordenação desejada.
      </p>

      <AdPlaceholder position="acima do ordenador de lista" />

      <ListSorter />

      <AdPlaceholder position="abaixo do ordenador de lista" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Dicas</h2>
        <p>
          Para números, ative a opção numérica; para texto com acentos, a ordenação ignora diferenças de caixa por padrão.
        </p>
      </section>
    </section>
  );
}

