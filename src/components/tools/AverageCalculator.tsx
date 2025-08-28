"use client";

import { useState } from "react";

export default function AverageCalculator() {
  const [numbers, setNumbers] = useState("");

  const values = numbers
    .split(/[,\s]+/)
    .map((n) => parseFloat(n))
    .filter((n) => !isNaN(n));

  const average =
    values.length > 0
      ? values.reduce((sum, n) => sum + n, 0) / values.length
      : 0;

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-32 p-2 border rounded"
        placeholder="Digite números separados por vírgula"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <div className="text-sm text-gray-800">
        <p>Média: <strong>{average.toFixed(2)}</strong></p>
      </div>
    </div>
  );
}
