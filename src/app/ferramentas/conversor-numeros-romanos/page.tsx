import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import RomanNumeralConverter from "@/components/tools/RomanNumeralConverter";

export const metadata: Metadata = {
  title: "Conversor de Números Romanos - Ferramentas360",
  description:
    "Converta números decimais para romanos e vice-versa. Suporta valores de 1 a 3999.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/conversor-numeros-romanos",
  },
  openGraph: {
    title: "Conversor de Números Romanos - Ferramentas360",
    description:
      "Ferramenta online para converter entre decimal e número romano de forma simples.",
    url: "https://ferramentas360.com.br/ferramentas/conversor-numeros-romanos",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Números Romanos - Ferramentas360",
    description:
      "Transforme números rapidamente para o sistema romano (I, V, X, L, C, D, M).",
  },
};

export default function ConversorNumerosRomanosPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Conversor de Números Romanos
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Converta entre representações decimais e romanas com precisão.
      </p>

      <AdPlaceholder position="acima do conversor romano" />

      <RomanNumeralConverter />

      <AdPlaceholder position="abaixo do conversor romano" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Limitações</h2>
        <p>
          O sistema romano clássico vai de 1 a 3999, utilizando símbolos padrão sem notações avançadas.
        </p>
      </section>
    </section>
  );
}

