"use client";

import { useState } from "react";

export default function RuleOfThreeCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    if (!isNaN(numA) && !isNaN(numB) && !isNaN(numC) && numA !== 0) {
      const value = (numB * numC) / numA;
      setResult(value);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="A"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="B"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="number"
          value={c}
          onChange={(e) => setC(e.target.value)}
          placeholder="C"
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <button
        onClick={calculate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Calcular
      </button>

      {result !== null && (
        <div className="bg-gray-100 p-3 rounded text-center font-mono text-lg">
          Resultado: {result.toFixed(2)}
        </div>
      )}
    </div>
  );
}
