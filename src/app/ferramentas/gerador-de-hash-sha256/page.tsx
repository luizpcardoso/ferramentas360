import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import Sha256Generator from "@/components/tools/Sha256Generator";

export const metadata: Metadata = {
  title: "Gerador de Hash SHA-256 - Ferramentas360",
  description:
    "Gere o hash SHA-256 de qualquer texto diretamente no navegador. Útil para integridade de dados.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/gerador-de-hash-sha256",
  },
  openGraph: {
    title: "Gerador de Hash SHA-256 - Ferramentas360",
    description:
      "Crie hashes SHA-256 de forma rápida e segura sem enviar dados para servidores.",
    url: "https://ferramentas360.com.br/ferramentas/gerador-de-hash-sha256",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de Hash SHA-256 - Ferramentas360",
    description:
      "Geração de hash SHA-256 totalmente local, preservando privacidade.",
  },
};

export default function GeradorDeHashSha256Page() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Gerador de Hash SHA-256
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Insira um texto para obter o hash SHA-256 correspondente.
      </p>

      <AdPlaceholder position="acima do gerador de hash" />

      <Sha256Generator />

      <AdPlaceholder position="abaixo do gerador de hash" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Sobre o SHA-256</h2>
        <p>
          SHA-256 é um algoritmo de hash criptográfico amplamente utilizado para verificar integridade de dados e assinaturas digitais.
        </p>
      </section>
    </section>
  );
}

