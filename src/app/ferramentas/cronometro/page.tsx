import { AdPlaceholder } from "@/components/AdPlaceholder";
import Stopwatch from "@/components/tools/Stopwatch";

export default function CronometroPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Cronômetro Online
      </h1>

      <AdPlaceholder position="acima do cronômetro" />

      <Stopwatch />

      <AdPlaceholder position="abaixo do cronômetro" />
    </section>
  );
}
