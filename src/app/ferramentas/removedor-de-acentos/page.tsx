import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import AccentRemover from "@/components/tools/AccentRemover";

export const metadata: Metadata = {
  title: "Removedor de Acentos - Ferramentas360",
  description:
    "Remova acentos e caracteres especiais de textos, gerando versões ASCII simples para URLs e sistemas.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/removedor-de-acentos",
  },
  openGraph: {
    title: "Removedor de Acentos - Ferramentas360",
    description:
      "Normalize textos removendo diacríticos (acentos) facilmente. Útil para slugs e comparações.",
    url: "https://ferramentas360.com.br/ferramentas/removedor-de-acentos",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Removedor de Acentos - Ferramentas360",
    description:
      "Remova diacríticos de qualquer texto em segundos.",
  },
};

export default function RemovedorDeAcentosPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Removedor de Acentos
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Cole um texto e gere uma versão sem acentos para facilitar buscas, comparações e criação de slugs.
      </p>

      <AdPlaceholder position="acima do removedor de acentos" />

      <AccentRemover />

      <AdPlaceholder position="abaixo do removedor de acentos" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Como funciona?</h2>
        <p>
          A normalização NFD separa caracteres e seus diacríticos, permitindo a remoção dos acentos via expressão regular.
        </p>
      </section>
    </section>
  );
}

