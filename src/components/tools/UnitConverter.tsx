"use client";

import { useState } from "react";

// Definindo estrutura com tipagem forte
const units = {
  comprimento: {
    m: {
      label: "Metro (m)",
      toBase: (v: number) => v,
      fromBase: (v: number) => v,
    },
    cm: {
      label: "Centímetro (cm)",
      toBase: (v: number) => v / 100,
      fromBase: (v: number) => v * 100,
    },
    km: {
      label: "Quilômetro (km)",
      toBase: (v: number) => v * 1000,
      fromBase: (v: number) => v / 1000,
    },
  },
  peso: {
    kg: {
      label: "Quilo (kg)",
      toBase: (v: number) => v,
      fromBase: (v: number) => v,
    },
    g: {
      label: "Grama (g)",
      toBase: (v: number) => v / 1000,
      fromBase: (v: number) => v * 1000,
    },
    ton: {
      label: "Tonelada (ton)",
      toBase: (v: number) => v * 1000,
      fromBase: (v: number) => v / 1000,
    },
  },
  volume: {
    l: {
      label: "Litro (L)",
      toBase: (v: number) => v,
      fromBase: (v: number) => v,
    },
    ml: {
      label: "Mililitro (ml)",
      toBase: (v: number) => v / 1000,
      fromBase: (v: number) => v * 1000,
    },
  },
} as const;

type UnitCategory = keyof typeof units;
type UnitKey<C extends UnitCategory> = keyof typeof units[C];

export default function UnitConverter() {
  const [category, setCategory] = useState<UnitCategory>("comprimento");
  const [fromUnit, setFromUnit] = useState<UnitKey<"comprimento">>("m");
  const [toUnit, setToUnit] = useState<UnitKey<"comprimento">>("cm");
  const [value, setValue] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return;

    const baseValue =
  (units[category] as Record<string, { toBase: (v: number) => number }>)[fromUnit].toBase(num);

const converted =
  (units[category] as Record<string, { fromBase: (v: number) => number }>)[toUnit].fromBase(baseValue);

    setResult(converted);
  };

  const handleCategoryChange = (newCat: UnitCategory) => {
    const keys = Object.keys(units[newCat]) as UnitKey<typeof newCat>[];
    setCategory(newCat);
    setFromUnit(keys[0]);
    setToUnit(keys[1] ?? keys[0]);
  };

  const unitOptions = Object.entries(units[category]) as [
    UnitKey<typeof category>,
    {
      label: string;
      toBase: (v: number) => number;
      fromBase: (v: number) => number;
    }
  ][];

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm text-gray-600">Categoria</label>
          <select
            className="w-full border border-gray-300 rounded px-2 py-1"
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value as UnitCategory)}
          >
            {Object.keys(units).map((cat) => (
              <option key={cat} value={cat}>
                {cat[0].toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600">De</label>
          <select
            className="w-full border border-gray-300 rounded px-2 py-1"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value as UnitKey<typeof category>)}
          >
            {unitOptions.map(([key, u]) => (
              <option key={key} value={key}>
                {u.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600">Para</label>
          <select
            className="w-full border border-gray-300 rounded px-2 py-1"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as UnitKey<typeof category>)}
          >
            {unitOptions.map(([key, u]) => (
              <option key={key} value={key}>
                {u.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
        />
        <button
          onClick={handleConvert}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Converter
        </button>
      </div>

      {result !== null && (
        <div className="text-center text-lg font-semibold">
          Resultado: {result}
        </div>
      )}
    </div>
  );
}
