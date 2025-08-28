import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import UuidGenerator from "@/components/tools/UuidGenerator";

export const metadata: Metadata = {
  title: "Gerador de UUID v4 - Ferramentas360",
  description:
    "Gere UUIDs v4 aleatórios e copie com um clique. Ideal para identificadores únicos em sistemas.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/gerador-de-uuid",
  },
  openGraph: {
    title: "Gerador de UUID v4 - Ferramentas360",
    description:
      "Crie rapidamente UUIDs v4 e use como identificadores únicos.",
    url: "https://ferramentas360.com.br/ferramentas/gerador-de-uuid",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de UUID v4 - Ferramentas360",
    description:
      "Geração de UUIDs v4 diretamente no navegador, sem dados externos.",
  },
};

export default function GeradorDeUuidPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Gerador de UUID v4
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Gere um UUID único para usar como identificador em seus projetos.
      </p>

      <AdPlaceholder position="acima do gerador de UUID" />

      <UuidGenerator />

      <AdPlaceholder position="abaixo do gerador de UUID" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">O que é um UUID?</h2>
        <p>
          UUID (Universally Unique Identifier) é um identificador de 128 bits com baixíssima chance de colisão, útil para chaves em bancos de dados e sistemas distribuídos.
        </p>
      </section>
    </section>
  );
}

