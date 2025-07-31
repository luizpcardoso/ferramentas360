import { Metadata } from "next";
import WordCounter from "@/components/tools/WordCounter";
import { AdPlaceholder } from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Contador de Palavras e Caracteres - Ferramentas360",
  description:
    "Conte palavras, caracteres e espaços com facilidade. Ferramenta online gratuita para redatores, estudantes e profissionais.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/contador-de-palavras",
  },
  openGraph: {
    title: "Contador de Palavras e Caracteres - Ferramentas360",
    description:
      "Ferramenta online gratuita para contar palavras, caracteres e espaços em tempo real. Ideal para textos acadêmicos, posts e artigos.",
    url: "https://ferramentas360.com.br/ferramentas/contador-de-palavras",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contador de Palavras e Caracteres - Ferramentas360",
    description:
      "Ferramenta online gratuita para contar palavras, caracteres e espaços em tempo real. Ideal para textos acadêmicos, posts e artigos.",
  },
};

export default function ContadorDePalavrasPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Contador de Palavras e Caracteres
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Use nosso contador online para saber a quantidade exata de palavras, caracteres com e sem espaço. Ideal para quem escreve textos acadêmicos, posts para redes sociais, artigos ou qualquer outro tipo de conteúdo.
      </p>

      <AdPlaceholder position="topo da ferramenta"  />

      <WordCounter />

      <AdPlaceholder position="rodapé da ferramenta"  />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Por que usar um contador de palavras?</h2>
        <p className="mb-2">
          Ao escrever para plataformas com limite de texto, como Twitter, Instagram ou trabalhos acadêmicos, é importante controlar a extensão do conteúdo. Esta ferramenta facilita esse controle em tempo real.
        </p>
        <p>
          Basta digitar ou colar seu texto e veja imediatamente as contagens de palavras e caracteres. Simples, rápido e sem precisar instalar nada.
        </p>
      </section>
    </section>
  );
}
