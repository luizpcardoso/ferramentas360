import { ReactNode } from "react";
import { ToolSidebar } from "@/components/ToolSidebar";

export default function FerramentasLayout({ children }: { children: ReactNode }) {
  return (
    <section className="container mx-auto px-4 py-8 lg:flex lg:gap-8">
      <ToolSidebar />

      <main className="flex-1">
        <div className="mb-6 text-center text-sm text-gray-400 italic">
          [ espaço reservado para anúncios ]
        </div>

        {children}

        <div className="mt-10 text-center text-sm text-gray-400 italic">
          [ espaço reservado para anúncios ]
        </div>
      </main>
    </section>
  );
}
