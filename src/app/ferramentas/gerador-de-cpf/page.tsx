import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import CpfGenerator from "@/components/tools/CpfGenerator";

export const metadata: Metadata = {
  title: "Gerador de CPF - Ferramentas360",
  description:
    "Gere números de CPF válidos para testes e cadastros.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/gerador-de-cpf",
  },
  openGraph: {
    title: "Gerador de CPF - Ferramentas360",
    description:
      "Crie rapidamente um CPF válido para uso em ambientes de teste.",
    url: "https://ferramentas360.com.br/ferramentas/gerador-de-cpf",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de CPF - Ferramentas360",
    description:
      "Ferramenta online para gerar números de CPF válidos.",
  },
};

export default function GeradorDeCpfPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Gerador de CPF
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Gere números de CPF válidos para utilizar em testes e cadastros.
      </p>

      <AdPlaceholder position="acima do gerador de CPF" />

      <CpfGenerator />

      <AdPlaceholder position="abaixo do gerador de CPF" />
    </section>
  );
}
