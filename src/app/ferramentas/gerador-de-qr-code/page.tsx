import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import QrCodeGenerator from "@/components/tools/QrCodeGenerator";

export const metadata: Metadata = {
  title: "Gerador de QR Code - Ferramentas360",
  description:
    "Crie QR Codes a partir de textos ou URLs em segundos.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/gerador-de-qr-code",
  },
  openGraph: {
    title: "Gerador de QR Code - Ferramentas360",
    description:
      "Digite um texto ou link e gere um QR Code instantaneamente.",
    url: "https://ferramentas360.com.br/ferramentas/gerador-de-qr-code",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de QR Code - Ferramentas360",
    description:
      "Transforme qualquer texto ou URL em QR Code.",
  },
};

export default function GeradorDeQrCodePage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Gerador de QR Code
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Insira um texto ou link e gere um QR Code para compartilhar facilmente.
      </p>

      <AdPlaceholder position="acima do gerador de QR code" />

      <QrCodeGenerator />

      <AdPlaceholder position="abaixo do gerador de QR code" />
    </section>
  );
}
