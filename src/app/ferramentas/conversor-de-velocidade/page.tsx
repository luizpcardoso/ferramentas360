import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import SpeedConverter from "@/components/tools/SpeedConverter";

export const metadata: Metadata = {
  title: "Conversor de Velocidade - Ferramentas360",
  description:
    "Converta valores de km/h para m/s e mph rapidamente.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/conversor-de-velocidade",
  },
  openGraph: {
    title: "Conversor de Velocidade - Ferramentas360",
    description:
      "Digite a velocidade em km/h e obtenha as conversões equivalentes.",
    url: "https://ferramentas360.com.br/ferramentas/conversor-de-velocidade",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Velocidade - Ferramentas360",
    description:
      "Ferramenta online para converter velocidades.",
  },
};

export default function ConversorDeVelocidadePage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Conversor de Velocidade
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Informe a velocidade em quilômetros por hora para ver a conversão em outras unidades.
      </p>

      <AdPlaceholder position="acima do conversor de velocidade" />

      <SpeedConverter />

      <AdPlaceholder position="abaixo do conversor de velocidade" />
    </section>
  );
}
