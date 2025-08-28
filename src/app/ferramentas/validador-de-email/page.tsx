import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import EmailValidator from "@/components/tools/EmailValidator";

export const metadata: Metadata = {
  title: "Validador de Email - Ferramentas360",
  description:
    "Verifique se um endereço de email é válido com base no formato. Útil para cadastros e formulários.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/validador-de-email",
  },
  openGraph: {
    title: "Validador de Email - Ferramentas360",
    description:
      "Confirme rapidamente se um email tem formato válido. Validação feita no navegador.",
    url: "https://ferramentas360.com.br/ferramentas/validador-de-email",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Validador de Email - Ferramentas360",
    description:
      "Valide emails por formato para uso em cadastros e formulários.",
  },
};

export default function ValidadorDeEmailPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Validador de Email
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Informe um endereço de email para verificar se o formato é válido.
      </p>

      <AdPlaceholder position="acima do validador de email" />

      <EmailValidator />

      <AdPlaceholder position="abaixo do validador de email" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Observação</h2>
        <p>
          Esta verificação considera apenas o formato do endereço (ex.: nome@dominio.com). Não realiza testes de entrega ou existência do domínio.
        </p>
      </section>
    </section>
  );
}

