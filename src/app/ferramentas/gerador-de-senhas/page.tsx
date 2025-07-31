import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import PasswordGenerator from "@/components/tools/PasswordGenerator";

export const metadata: Metadata = {
  title: "Gerador de Senhas Seguras - Ferramentas360",
  description:
    "Gere senhas fortes e seguras com facilidade. Personalize o tamanho e os caracteres para maior proteção das suas contas.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/gerador-de-senhas",
  },
  openGraph: {
    title: "Gerador de Senhas Seguras - Ferramentas360",
    description:
      "Gere senhas seguras com letras, números e símbolos. Fortaleça suas credenciais com praticidade.",
    url: "https://ferramentas360.com.br/ferramentas/gerador-de-senhas",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de Senhas Seguras - Ferramentas360",
    description:
      "Gere senhas seguras com letras, números e símbolos. Fortaleça suas credenciais com praticidade.",
  },
};

export default function GeradorDeSenhasPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Gerador de Senhas Seguras
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Use nosso gerador de senhas para criar combinações seguras com letras, números e símbolos. Ideal para proteger suas contas pessoais e profissionais com senhas fortes.
      </p>

      <AdPlaceholder position="acima do gerador de senhas"  />

      <PasswordGenerator />

      <AdPlaceholder position="abaixo do gerador de senhas"  />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Por que gerar senhas seguras?</h2>
        <p className="mb-2">
          Senhas fracas ou repetidas facilitam invasões e vazamentos de dados. Com nosso gerador, você cria senhas aleatórias difíceis de serem descobertas.
        </p>
        <p>
          Personalize a quantidade de caracteres e os tipos permitidos para garantir máxima segurança e compatibilidade com os sites e sistemas que você usa.
        </p>
      </section>
    </section>
  );
}
