import Link from "next/link";
import { Metadata } from "next";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Ferramentas360 - Ferramentas online úteis",
  description:
    "Utilize ferramentas online como contador de palavras, gerador de senhas, calculadora de tempo e muito mais — tudo gratuito e acessível.",
};

export default function HomePage() {
  const destaque = tools.slice(0, 6);

  return (
    <section className="container mx-auto px-4 py-8 lg:flex lg:gap-8">
      <aside className="hidden lg:block w-64 border-r border-gray-200 pr-4">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Todas as Ferramentas</h3>
        <ul className="space-y-2">
          {tools.map((tool) => (
            <li key={tool.href}>
              <Link
                href={tool.href}
                className="flex items-center gap-2 text-sm text-blue-700 hover:underline"
              >
                <tool.icon className="w-4 h-4" />
                {tool.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-900">
          Ferramentas online para facilitar seu dia a dia
        </h1>

        <div className="mb-6 text-center text-sm text-gray-400 italic">
          [ espaço reservado para anúncios ]
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destaque.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block border border-gray-200 rounded-xl p-4 hover:shadow-md transition duration-200 bg-white"
            >
              <div className="flex items-center gap-3 mb-2">
                <tool.icon className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-blue-600">
                  {tool.title}
                </h2>
              </div>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-400 italic">
          [ espaço reservado para anúncios ]
        </div>
      </main>
    </section>
  );
}
