import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ferramentas360 - Ferramentas online úteis",
  description:
    "Utilize ferramentas online como contador de palavras, gerador de senhas, calculadora de tempo e muito mais — tudo gratuito e acessível.",
};

const tools = [
  {
    title: "Contador de Palavras",
    description: "Conte palavras e caracteres em seus textos.",
    href: "/ferramentas/contador-de-palavras",
  },
  {
    title: "Gerador de Senhas",
    description: "Crie senhas fortes e seguras com facilidade.",
    href: "/ferramentas/gerador-de-senhas",
  },
  {
    title: "Calculadora de Tempo",
    description: "Some ou subtraia horas e minutos rapidamente.",
    href: "/ferramentas/calculadora-de-tempo",
  },
  {
    title: "Conversor de Moedas",
    description: "Converta valores entre moedas com câmbio atualizado.",
    href: "/ferramentas/conversor-de-moedas",
  },
  {
    title: "Validador de CPF",
    description: "Verifique se um CPF é válido de forma instantânea.",
    href: "/ferramentas/validador-de-cpf",
  },
  {
    title: "Validador de CNPJ",
    description: "Verifique a validade de um CNPJ com rapidez.",
    href: "/ferramentas/validador-de-cnpj",
  },
  {
    title: "Cronômetro",
    description: "Inicie e pare um cronômetro com tempo preciso.",
    href: "/ferramentas/cronometro",
  },
  {
    title: "Contador Regressivo",
    description: "Configure um timer regressivo facilmente.",
    href: "/ferramentas/contador-regressivo",
  },
  {
    title: "Calculadora de Regra de 3",
    description: "Resolva proporções com a regra de três simples.",
    href: "/ferramentas/regra-de-tres",
  },
  {
    title: "Gerador de Lorem Ipsum",
    description: "Gere textos de exemplo para layouts e designs.",
    href: "/ferramentas/lorem-ipsum",
  },
  {
    title: "Conversor de Unidades",
    description: "Converta unidades como metros, litros, quilos etc.",
    href: "/ferramentas/conversor-de-unidades",
  },
  {
    title: "Calculadora de IMC",
    description: "Calcule seu Índice de Massa Corporal facilmente.",
    href: "/ferramentas/calculadora-de-imc",
  },
];

export default function HomePage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-900">
        Ferramentas online para facilitar seu dia a dia
      </h1>

      <div className="mb-6 text-center text-sm text-gray-400 italic">
        [ espaço reservado para anúncios ]
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block border border-gray-200 rounded-xl p-4 hover:shadow-md transition duration-200 bg-white"
          >
            <h2 className="text-lg font-semibold text-blue-600">
              {tool.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{tool.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-gray-400 italic">
        [ espaço reservado para anúncios ]
      </div>
    </section>
  );
}
