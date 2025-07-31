import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Ferramentas360 - Soluções online para facilitar seu dia a dia",
  description: "Use ferramentas como contador de palavras, gerador de senhas e muito mais.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
       <head>
      
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1342640603806360"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
