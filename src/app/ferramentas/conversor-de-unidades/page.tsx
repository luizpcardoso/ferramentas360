import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import UnitConverter from "@/components/tools/UnitConverter";

export const metadata: Metadata = {
  title: "Conversor de Unidades - Ferramentas360",
  description:
    "Converta entre unidades de medida como metros, quilômetros, gramas, litros e muito mais. Ferramenta online gratuita e prática.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/conversor-de-unidades",
  },
  openGraph: {
    title: "Conversor de Unidades - Ferramentas360",
    description:
      "Converta entre unidades de comprimento, peso, volume e temperatura com facilidade. Rápido, gratuito e online.",
    url: "https://ferramentas360.com.br/ferramentas/conversor-de-unidades",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Unidades - Ferramentas360",
    description:
      "Converta entre unidades de comprimento, peso, volume e temperatura com facilidade. Rápido, gratuito e online.",
  },
};

export default function ConversorDeUnidadesPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Conversor de Unidades
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Utilize nosso conversor de unidades para transformar valores entre diferentes sistemas de medida: comprimento, peso, volume, temperatura, e muito mais.
      </p>

      <AdPlaceholder position="acima do conversor de unidades" />

      <UnitConverter />

      <AdPlaceholder position="abaixo do conversor de unidades"/>

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Como usar o conversor de unidades?</h2>
        <p className="mb-2">
          Selecione o tipo de unidade que deseja converter, insira o valor, escolha a unidade de origem e a unidade de destino. O resultado será exibido automaticamente.
        </p>
        <p>
          Essa ferramenta é útil para estudantes, engenheiros, cozinheiros, viajantes e todos que lidam com medidas no dia a dia.
        </p>
      </section>
    </section>
  );
}
