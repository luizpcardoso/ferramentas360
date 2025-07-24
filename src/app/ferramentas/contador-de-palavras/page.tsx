import WordCounter from "@/components/tools/WordCounter";
import { AdPlaceholder } from "@/components/AdPlaceholder";

export default function ContadorDePalavrasPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Contador de Palavras e Caracteres
      </h1>

      <AdPlaceholder position="topo da ferramenta" />

      <WordCounter />

      <AdPlaceholder position="rodapé da ferramenta" />
    </section>
  );
}
