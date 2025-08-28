import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import ByteConverter from "@/components/tools/ByteConverter";

export const metadata: Metadata = {
  title: "Conversor de Bytes - Ferramentas360",
  description:
    "Converta facilmente bytes em KB, MB e GB.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/conversor-de-bytes",
  },
  openGraph: {
    title: "Conversor de Bytes - Ferramentas360",
    description:
      "Digite o valor em bytes e veja a conversão para outras unidades.",
    url: "https://ferramentas360.com.br/ferramentas/conversor-de-bytes",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Bytes - Ferramentas360",
    description:
      "Ferramenta online para converter bytes em KB, MB e GB.",
  },
};

export default function ConversorDeBytesPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Conversor de Bytes
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Digite um valor em bytes para ver a conversão em outras unidades de medida.
      </p>

      <AdPlaceholder position="acima do conversor de bytes" />

      <ByteConverter />

      <AdPlaceholder position="abaixo do conversor de bytes" />
    </section>
  );
}
