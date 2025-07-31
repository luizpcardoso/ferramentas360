import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import Stopwatch from "@/components/tools/Stopwatch";

export const metadata: Metadata = {
  title: "Cronômetro Online - Ferramentas360",
  description:
    "Use nosso cronômetro online para medir o tempo com precisão. Ideal para treinos, estudos, eventos e atividades diversas.",
  alternates: {
    canonical: "https://ferramentas360.com.br/ferramentas/cronometro",
  },
  openGraph: {
    title: "Cronômetro Online - Ferramentas360",
    description:
      "Ferramenta online gratuita para contar tempo com precisão. Perfeito para controlar tarefas, treinos e foco.",
    url: "https://ferramentas360.com.br/ferramentas/cronometro",
    siteName: "Ferramentas360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cronômetro Online - Ferramentas360",
    description:
      "Ferramenta online gratuita para contar tempo com precisão. Perfeito para controlar tarefas, treinos e foco.",
  },
};

export default function CronometroPage() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Cronômetro Online
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Utilize nosso cronômetro online gratuito para cronometrar atividades com precisão e praticidade. Ideal para treinos, estudos, tempo de foco, provas, tarefas e muito mais.
      </p>

      <AdPlaceholder position="acima do cronômetro"  />

      <Stopwatch />

      <AdPlaceholder position="abaixo do cronômetro"  />

      <section className="mt-12 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-lg mb-2">Como funciona o cronômetro?</h2>
        <p className="mb-2">
          Clique em Iniciar para começar a contagem e em Parar para pausá-la. Você também pode zerar o tempo ou retomar quando quiser.
        </p>
        <p>
          Ferramenta útil para quem precisa controlar o tempo de forma simples, sem instalar aplicativos ou depender de relógios físicos.
        </p>
      </section>
    </section>
  );
}
