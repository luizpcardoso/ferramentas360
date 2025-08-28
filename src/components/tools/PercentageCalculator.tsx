"use client";

import { useMemo, useState } from "react";

export default function PercentageCalculator() {
  const [base, setBase] = useState<string>("");
  const [percent, setPercent] = useState<string>("");
  const [part, setPart] = useState<string>("");

  const calc1 = useMemo(() => {
    const b = parseFloat(base) || 0;
    const p = parseFloat(percent) || 0;
    return (b * p) / 100;
  }, [base, percent]);

  const calc2 = useMemo(() => {
    const b = parseFloat(base) || 0;
    const prt = parseFloat(part) || 0;
    return b ? (prt / b) * 100 : 0;
  }, [base, part]);

  const calc3 = useMemo(() => {
    const b = parseFloat(base) || 0;
    const p = parseFloat(percent) || 0;
    return b ? b + (b * p) / 100 : 0;
  }, [base, percent]);

  const calc4 = useMemo(() => {
    const b = parseFloat(base) || 0;
    const p = parseFloat(percent) || 0;
    return b ? b - (b * p) / 100 : 0;
  }, [base, percent]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label className="text-sm text-gray-700">
          Base
          <input
            type="number"
            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />
        </label>
        <label className="text-sm text-gray-700">
          Percentual (%)
          <input
            type="number"
            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
        </label>
        <label className="text-sm text-gray-700">
          Parte
          <input
            type="number"
            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            value={part}
            onChange={(e) => setPart(e.target.value)}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
          <p>
            {percent || 0}% de {base || 0}: <strong>{calc1.toFixed(4)}</strong>
          </p>
          <p>
            {base || 0} com aumento de {percent || 0}%: <strong>{calc3.toFixed(4)}</strong>
          </p>
          <p>
            {base || 0} com desconto de {percent || 0}%: <strong>{calc4.toFixed(4)}</strong>
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
          <p>
            {part || 0} é quantos % de {base || 0}? <strong>{calc2.toFixed(4)}%</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

