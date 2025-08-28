import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import TextCaseConverter from "@/components/tools/TextCaseConverter";

export const metadata: Metadata = {
  title: "Conversor de Texto (maiúsculas, minúsculas e título) - Ferramentas360",
  description:
    "Converta seu texto para maiúsculas, minúsculas ou formato de título com um clique. Limpe espaços e normalize rápido.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/conversor-de-texto",
  },
  openGraph: {
    title: "Conversor de Texto - Ferramentas360",
    description:
      "Ferramenta online para mudar caixa do texto e normalizar espaços. Prático para redatores e estudantes.",
    url: "https://ferramentas360.com.br/ferramentas/conversor-de-texto",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Texto - Ferramentas360",
    description:
      "Altere rapidamente para MAIÚSCULAS, minúsculas e Title Case. Limpeza de espaços incluída.",
  },
};

export default function ConversorDeTextoPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Conversor de Texto
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Converta textos entre maiúsculas, minúsculas e formato de título. Ideal para padronizar documentos, artigos e posts.
      </p>

      <AdPlaceholder position="acima do conversor de texto" />

      <TextCaseConverter />

      <AdPlaceholder position="abaixo do conversor de texto" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Quando usar?</h2>
        <p className="mb-2">
          Ao editar títulos, normalizar textos copiados da web ou padronizar comunicações, ajustar a caixa do texto ajuda na consistência e legibilidade.
        </p>
        <p>
          A ferramenta também remove espaços extras, útil para limpar conteúdos antes de publicar.
        </p>
      </section>
    </section>
  );
}

