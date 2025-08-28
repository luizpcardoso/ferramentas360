"use client";

import { useState } from "react";

export default function RandomNumberGenerator() {
  const [min, setMin] = useState("0");
  const [max, setMax] = useState("100");
  const [result, setResult] = useState<number | null>(null);

  const generate = () => {
    const minNum = parseInt(min, 10);
    const maxNum = parseInt(max, 10);
    if (!isNaN(minNum) && !isNaN(maxNum) && maxNum >= minNum) {
      const rand = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      setResult(rand);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Mínimo</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Máximo</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
      </div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={generate}
      >
        Gerar
      </button>
      {result !== null && (
        <p className="text-sm">Número gerado: <strong>{result}</strong></p>
      )}
    </div>
  );
}
