"use client";

import { useState } from "react";

function factorial(n: number): number {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export default function FactorialCalculator() {
  const [num, setNum] = useState("");
  const n = parseInt(num, 10);
  const result = !isNaN(n) && n >= 0 ? factorial(n) : 0;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Número</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <div className="text-sm text-gray-800">
        <p>Fatorial: <strong>{result}</strong></p>
      </div>
    </div>
  );
}
