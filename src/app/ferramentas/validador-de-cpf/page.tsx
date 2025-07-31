import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import CpfValidator from "@/components/tools/CpfValidator";

export const metadata: Metadata = {
  title: "Validador de CPF - Ferramentas360",
  description:
    "Verifique se um CPF é válido com base nos dígitos verificadores. Ferramenta online gratuita e confiável.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/validador-de-cpf",
  },
  openGraph: {
    title: "Validador de CPF - Ferramentas360",
    description:
      "Confira se um número de CPF é válido com nossa ferramenta gratuita. Validação feita com base nas regras oficiais.",
    url: "https://ferramentas360.com.br/ferramentas/validador-de-cpf",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Validador de CPF - Ferramentas360",
    description:
      "Confira se um número de CPF é válido com nossa ferramenta gratuita. Validação feita com base nas regras oficiais.",
  },
};

export default function ValidadorDeCpfPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Validador de CPF
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Valide números de CPF com base na estrutura e nos dígitos verificadores. Ideal para verificações cadastrais, profissionais e acadêmicas.
      </p>

      <AdPlaceholder position="acima do validador"  />

      <CpfValidator />

      <AdPlaceholder position="abaixo do validador"  />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Como funciona a validação de CPF?</h2>
        <p className="mb-2">
          O CPF (Cadastro de Pessoa Física) possui dois dígitos verificadores que são calculados com base nos nove primeiros números. Essa estrutura permite verificar se um CPF é matematicamente válido.
        </p>
        <p>
          Com esta ferramenta, você insere o número e recebe instantaneamente a confirmação se ele é válido ou não, sem precisar consultar bases externas.
        </p>
      </section>
    </section>
  );
}
