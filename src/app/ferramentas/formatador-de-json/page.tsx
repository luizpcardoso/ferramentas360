import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import JsonFormatter from "@/components/tools/JsonFormatter";

export const metadata: Metadata = {
  title: "Formatador de JSON (Beautify/Minify) - Ferramentas360",
  description:
    "Valide e formate JSON com um clique: embeleze (indentado) ou compacte. Ideal para desenvolvedores.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/formatador-de-json",
  },
  openGraph: {
    title: "Formatador de JSON - Ferramentas360",
    description:
      "Ferramenta online para validar, identar e minificar JSON de forma simples e rápida.",
    url: "https://ferramentas360.com.br/ferramentas/formatador-de-json",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formatador de JSON - Ferramentas360",
    description:
      "Formate e compacte JSON diretamente no navegador, sem enviar dados.",
  },
};

export default function FormatadorDeJsonPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Formatador de JSON
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Cole um JSON para validar, identar (embelezar) ou compactar.
      </p>

      <AdPlaceholder position="acima do formatador de JSON" />

      <JsonFormatter />

      <AdPlaceholder position="abaixo do formatador de JSON" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Privacidade</h2>
        <p>
          Toda a formatação acontece localmente no seu navegador. Nenhum dado é enviado para servidores.
        </p>
      </section>
    </section>
  );
}

