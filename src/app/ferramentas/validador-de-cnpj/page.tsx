import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import CnpjValidator from "@/components/tools/CnpjValidator";

export const metadata: Metadata = {
  title: "Validador de CNPJ - Ferramentas360",
  description:
    "Verifique se um CNPJ é válido com nossa ferramenta gratuita. Validação rápida e precisa de Cadastro Nacional de Pessoa Jurídica.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/validador-de-cnpj",
  },
  openGraph: {
    title: "Validador de CNPJ - Ferramentas360",
    description:
      "Ferramenta online para validar CNPJs. Verifique gratuitamente se um CNPJ é válido conforme os critérios da Receita Federal.",
    url: "https://ferramentas360.com.br/ferramentas/validador-de-cnpj",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Validador de CNPJ - Ferramentas360",
    description:
      "Ferramenta online para validar CNPJs. Verifique gratuitamente se um CNPJ é válido conforme os critérios da Receita Federal.",
  },
};

export default function ValidadorDeCnpjPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Validador de CNPJ
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Verifique se um CNPJ (Cadastro Nacional da Pessoa Jurídica) é válido com nossa ferramenta online. Ideal para consultas rápidas, validações comerciais e uso profissional.
      </p>

      <AdPlaceholder position="acima do validador de CNPJ"  />

      <CnpjValidator />

      <AdPlaceholder position="abaixo do validador de CNPJ"  />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Como funciona o validador de CNPJ?</h2>
        <p className="mb-2">
          O CNPJ possui uma estrutura padronizada com dígitos verificadores. Nossa ferramenta analisa esses dígitos para verificar se o número informado segue as regras de validação da Receita Federal.
        </p>
        <p>
          Basta inserir o número do CNPJ e o resultado será exibido instantaneamente. Simples, rápido e confiável.
        </p>
      </section>
    </section>
  );
}
