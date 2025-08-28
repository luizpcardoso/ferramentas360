import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import CsvToJsonConverter from "@/components/tools/CsvToJsonConverter";

export const metadata: Metadata = {
  title: "Conversor CSV para JSON - Ferramentas360",
  description:
    "Converta rapidamente dados CSV em JSON estruturado, preservando as colunas como chaves.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/conversor-csv-para-json",
  },
  openGraph: {
    title: "Conversor CSV para JSON - Ferramentas360",
    description:
      "Ferramenta online para transformar planilhas CSV em objetos JSON com praticidade.",
    url: "https://ferramentas360.com.br/ferramentas/conversor-csv-para-json",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor CSV para JSON - Ferramentas360",
    description:
      "Cole seu CSV e obtenha JSON válido com indentação.",
  },
};

export default function ConversorCsvParaJsonPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Conversor CSV para JSON
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Informe um CSV com cabeçalho na primeira linha e veja o JSON equivalente.
      </p>

      <AdPlaceholder position="acima do conversor CSV para JSON" />

      <CsvToJsonConverter />

      <AdPlaceholder position="abaixo do conversor CSV para JSON" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Formatos suportados</h2>
        <p>
          Suporta aspas duplas para campos com vírgulas. Linhas em branco são ignoradas durante o processamento.
        </p>
      </section>
    </section>
  );
}

