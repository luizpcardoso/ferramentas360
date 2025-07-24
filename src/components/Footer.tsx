export function Footer() {
    return (
      <footer className="bg-gray-100 border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-8 text-sm text-gray-600 text-center">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} ferramentas360.com.br. Todos os direitos reservados.
          </p>
  
          <div className="flex justify-center gap-4 text-gray-500 text-xs">
            <a href="/privacidade" className="hover:text-gray-800">
              Política de Privacidade
            </a>
            <a href="/termos" className="hover:text-gray-800">
              Termos de Uso
            </a>
            <a href="/contato" className="hover:text-gray-800">
              Contato
            </a>
          </div>
  
          {/* Espaço reservado para anúncios futuros */}
          <div className="mt-6 text-xs text-gray-400 italic">
            Espaço reservado para anúncios
          </div>
        </div>
      </footer>
    );
  }
  