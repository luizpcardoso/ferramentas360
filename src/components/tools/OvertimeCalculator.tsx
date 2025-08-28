"use client";

import { useState } from "react";

export default function OvertimeCalculator() {
  const [wage, setWage] = useState("");
  const [hours, setHours] = useState("");
  const [percent, setPercent] = useState("50");

  const w = parseFloat(wage) || 0;
  const h = parseFloat(hours) || 0;
  const p = parseFloat(percent) || 0;
  const extra = w * h * (1 + p / 100);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Valor hora (R$)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={wage}
          onChange={(e) => setWage(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Horas extras</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Adicional (%)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
        />
      </div>
      <div className="text-sm text-gray-800">
        <p>Valor a receber: <strong>R$ {extra.toFixed(2)}</strong></p>
      </div>
    </div>
  );
}
