import { AdPlaceholder } from "@/components/AdPlaceholder";
import CountdownTimer from "@/components/tools/CountdownTimer";

export default function ContadorRegressivoPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Contador Regressivo
      </h1>

      <AdPlaceholder position="acima do contador regressivo" />

      <CountdownTimer />

      <AdPlaceholder position="abaixo do contador regressivo" />
    </section>
  );
}
