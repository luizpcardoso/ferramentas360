"use client";

import { useMemo, useState } from "react";

function safeParse(value: string, fromBase: number): number | null {
  try {
    if (value.trim() === "") return 0;
    const n = parseInt(value, fromBase);
    return Number.isNaN(n) ? null : n;
  } catch {
    return null;
  }
}

export default function BaseConverter() {
  const [input, setInput] = useState("1010");
  const [base, setBase] = useState<"2" | "10" | "16">("2");

  const conv = useMemo(() => {
    const n = safeParse(input, parseInt(base, 10));
    if (n === null) return { dec: "—", bin: "—", hex: "—" };
    return {
      dec: n.toString(10),
      bin: n.toString(2),
      hex: n.toString(16).toUpperCase(),
    };
  }, [input, base]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label className="text-sm text-gray-700">
          Valor
          <input
            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <label className="text-sm text-gray-700">
          Base de entrada
          <select
            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            value={base}
            onChange={(e) => setBase(e.target.value as any)}
          >
            <option value="2">Binário (2)</option>
            <option value="10">Decimal (10)</option>
            <option value="16">Hexadecimal (16)</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
          <p className="text-gray-600">Decimal</p>
          <p className="font-semibold">{conv.dec}</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
          <p className="text-gray-600">Binário</p>
          <p className="font-semibold">{conv.bin}</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
          <p className="text-gray-600">Hexadecimal</p>
          <p className="font-semibold">{conv.hex}</p>
        </div>
      </div>
    </div>
  );
}

