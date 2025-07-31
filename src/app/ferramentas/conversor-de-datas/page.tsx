import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import DateConverter from "@/components/tools/DateConverter";

export const metadata: Metadata = {
  title: "Conversor de Datas - Ferramentas360",
  description:
    "Converta facilmente formatos de data, calcule diferença entre datas e transforme timestamps. Ferramenta online gratuita e prática.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/conversor-de-datas",
  },
  openGraph: {
    title: "Conversor de Datas - Ferramentas360",
    description:
      "Converta formatos de datas, calcule diferença entre dias e transforme timestamps. Rápido e gratuito.",
    url: "https://ferramentas360.com.br/ferramentas/conversor-de-datas",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Datas - Ferramentas360",
    description:
      "Converta formatos de datas, calcule diferença entre dias e transforme timestamps. Rápido e gratuito.",
  },
};

export default function ConversorDeDatasPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
        Conversor de Datas
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Use nosso conversor de datas online para converter entre diferentes formatos de data, transformar timestamps e calcular a diferença entre duas datas com rapidez e precisão.
      </p>

      <AdPlaceholder position="acima do conversor de datas" />

      <DateConverter />

      <AdPlaceholder position="abaixo do conversor de datas"  />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Como usar o conversor de datas?</h2>
        <p className="mb-2">
          Selecione as datas desejadas, escolha o tipo de conversão (formato ou cálculo) e veja o resultado instantaneamente.
        </p>
        <p>
          A ferramenta é ideal para desenvolvedores, profissionais administrativos, estudantes e qualquer pessoa que precise manipular datas no dia a dia.
        </p>
      </section>
    </section>
  );
}
