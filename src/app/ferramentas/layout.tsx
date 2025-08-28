import { ReactNode } from "react";
import { ToolSidebar } from "@/components/ToolSidebar";
import { AdPlaceholder } from "@/components/AdPlaceholder";

export default function FerramentasLayout({ children }: { children: ReactNode }) {
  return (
    <section className="container mx-auto px-4 py-8 lg:flex lg:gap-8">
      <ToolSidebar />

      <main className="flex-1">
        <AdPlaceholder slot="tool-top" />

        {children}

        <AdPlaceholder slot="tool-bottom" />
      </main>
    </section>
  );
}
