import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import CnpjGenerator from "@/components/tools/CnpjGenerator";

export const metadata: Metadata = {
  title: "Gerador de CNPJ - Ferramentas360",
  description:
    "Gere números de CNPJ válidos para testes e simulações.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/gerador-de-cnpj",
  },
  openGraph: {
    title: "Gerador de CNPJ - Ferramentas360",
    description:
      "Crie rapidamente um CNPJ válido para uso em ambientes de teste.",
    url: "https://ferramentas360.com.br/ferramentas/gerador-de-cnpj",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de CNPJ - Ferramentas360",
    description:
      "Ferramenta online para gerar números de CNPJ válidos.",
  },
};

export default function GeradorDeCnpjPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Gerador de CNPJ
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Gere números de CNPJ válidos para utilizar em testes e cadastros.
      </p>

      <AdPlaceholder position="acima do gerador de CNPJ" />

      <CnpjGenerator />

      <AdPlaceholder position="abaixo do gerador de CNPJ" />
    </section>
  );
}
