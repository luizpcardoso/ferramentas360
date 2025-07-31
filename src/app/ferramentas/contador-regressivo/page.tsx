import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import CountdownTimer from "@/components/tools/CountdownTimer";

export const metadata: Metadata = {
  title: "Contador Regressivo Online - Ferramentas360",
  description:
    "Configure facilmente um contador regressivo para eventos, estudos, treinos e mais. Ferramenta simples, rápida e gratuita.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/contador-regressivo",
  },
  openGraph: {
    title: "Contador Regressivo Online - Ferramentas360",
    description:
      "Configure um timer regressivo para tarefas, eventos ou estudos. Totalmente gratuito e fácil de usar.",
    url: "https://ferramentas360.com.br/ferramentas/contador-regressivo",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contador Regressivo Online - Ferramentas360",
    description:
      "Configure um timer regressivo para tarefas, eventos ou estudos. Totalmente gratuito e fácil de usar.",
  },
};

export default function ContadorRegressivoPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Contador Regressivo Online
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Use nosso contador regressivo para cronometrar eventos, atividades, treinos, foco em estudos ou qualquer outra tarefa com tempo definido. Rápido, gratuito e sem instalação.
      </p>

      <AdPlaceholder position="acima do contador regressivo"  />

      <CountdownTimer />

      <AdPlaceholder position="abaixo do contador regressivo" />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Como funciona?</h2>
        <p className="mb-2">
          Escolha o tempo desejado, inicie o cronômetro e acompanhe a contagem regressiva. Ao zerar, um alerta sonoro pode ser exibido (se implementado).
        </p>
        <p>
          O contador regressivo é útil para técnicas como Pomodoro, monitoramento de tempo de atividades, exames simulados e controle de pausas.
        </p>
      </section>
    </section>
  );
}
