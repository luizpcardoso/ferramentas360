import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import BaseConverter from "@/components/tools/BaseConverter";

export const metadata: Metadata = {
  title: "Conversor de Bases Numéricas - Ferramentas360",
  description:
    "Converta números entre binário, decimal e hexadecimal. Ferramenta simples e rápida para estudantes e profissionais.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/conversor-de-bases",
  },
  openGraph: {
    title: "Conversor de Bases Numéricas - Ferramentas360",
    description:
      "Transforme números entre diferentes bases sem esforço: base 2, 10 e 16.",
    url: "https://ferramentas360.com.br/ferramentas/conversor-de-bases",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Bases Numéricas - Ferramentas360",
    description:
      "Converta para binário, decimal e hexadecimal com precisão.",
  },
};

export default function ConversorDeBasesPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Conversor de Bases Numéricas
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Converta valores entre as bases mais comuns: binário (2), decimal (10) e hexadecimal (16).
      </p>

      <AdPlaceholder position="acima do conversor de bases" />

      <BaseConverter />

      <AdPlaceholder position="abaixo do conversor de bases" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Dica</h2>
        <p>
          Use esta ferramenta para checar resultados de exercícios de arquitetura de computadores, programação embarcada e competições.
        </p>
      </section>
    </section>
  );
}

