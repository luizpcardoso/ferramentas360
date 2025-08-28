"use client";

import { useMemo, useState } from "react";

function diffDates(from: Date, to: Date) {
  const ms = to.getTime() - from.getTime();
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365.2425);
  const remainingDays = days - Math.floor(years * 365.2425);
  return { years, days: remainingDays, totalDays: days };
}

export default function AgeCalculator() {
  const [birth, setBirth] = useState<string>("");

  const res = useMemo(() => {
    if (!birth) return null;
    const b = new Date(birth + "T00:00:00");
    if (Number.isNaN(b.getTime())) return null;
    const now = new Date();
    if (b > now) return null;
    return diffDates(b, now);
  }, [birth]);

  return (
    <div className="space-y-3">
      <label className="text-sm text-gray-700">
        Data de nascimento
        <input
          type="date"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
      </label>
      {res ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm">
          <p>
            Idade: <strong>{res.years}</strong> anos
          </p>
          <p>
            Dias adicionais: <strong>{res.days}</strong> dia(s)
          </p>
          <p>
            Dias totais: <strong>{res.totalDays}</strong>
          </p>
        </div>
      ) : (
        <p className="text-sm text-gray-600">Selecione uma data válida.</p>
      )}
    </div>
  );
}

