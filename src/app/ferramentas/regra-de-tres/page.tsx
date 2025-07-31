import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import RuleOfThreeCalculator from "@/components/tools/RuleOfThreeCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Regra de 3 - Ferramentas360",
  description:
    "Resolva facilmente proporções com nossa calculadora de Regra de 3. Ideal para matemática básica, porcentagem e conversões.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/regra-de-tres",
  },
  openGraph: {
    title: "Calculadora de Regra de 3 - Ferramentas360",
    description:
      "Calcule proporções com rapidez e facilidade. Ferramenta gratuita para regra de três simples ou composta.",
    url: "https://ferramentas360.com.br/ferramentas/regra-de-tres",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Regra de 3 - Ferramentas360",
    description:
      "Calcule proporções com rapidez e facilidade. Ferramenta gratuita para regra de três simples ou composta.",
  },
};

export default function RegraDeTresPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Calculadora de Regra de 3
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Use nossa calculadora de regra de três para resolver proporções de forma prática e precisa. Ideal para estudantes, professores e quem precisa fazer cálculos rápidos no dia a dia.
      </p>

      <AdPlaceholder position="acima da calculadora"  />

      <RuleOfThreeCalculator />

      <AdPlaceholder position="abaixo da calculadora"  />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">O que é Regra de Três?</h2>
        <p className="mb-2">
          A regra de três é um método matemático simples que permite resolver problemas de proporção entre valores. Muito usada em porcentagens, conversões de medidas e problemas cotidianos.
        </p>
        <p>
          Com nossa calculadora, basta inserir os três valores conhecidos e obter automaticamente o valor proporcional.
        </p>
      </section>
    </section>
  );
}
