import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import DuplicateRemover from "@/components/tools/DuplicateRemover";

export const metadata: Metadata = {
  title: "Removedor de Linhas Duplicadas - Ferramentas360",
  description:
    "Remova linhas repetidas de uma lista, com opção de diferenciar maiúsculas e minúsculas.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/removedor-de-duplicatas",
  },
  openGraph: {
    title: "Removedor de Linhas Duplicadas - Ferramentas360",
    description:
      "Cole uma lista de itens e obtenha somente linhas únicas em segundos.",
    url: "https://ferramentas360.com.br/ferramentas/removedor-de-duplicatas",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Removedor de Linhas Duplicadas - Ferramentas360",
    description:
      "Elimine duplicatas de listas de forma simples e rápida.",
  },
};

export default function RemovedorDeDuplicatasPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Removedor de Linhas Duplicadas
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Cole uma lista, ative ou não a sensibilidade a maiúsculas, e gere uma versão sem repetições.
      </p>

      <AdPlaceholder position="acima do removedor de duplicatas" />

      <DuplicateRemover />

      <AdPlaceholder position="abaixo do removedor de duplicatas" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Quando usar?</h2>
        <p>
          Útil para organizar listas de emails, palavras-chave, itens de inventário e outros dados repetidos.
        </p>
      </section>
    </section>
  );
}

