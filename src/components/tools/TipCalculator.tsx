"use client";

import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState("10");

  const b = parseFloat(bill) || 0;
  const p = parseFloat(percent) || 0;
  const tip = b * (p / 100);
  const total = b + tip;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Conta (R$)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Gorjeta (%)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
        />
      </div>
      <div className="text-sm text-gray-800">
        <p>Gorjeta: <strong>R$ {tip.toFixed(2)}</strong></p>
        <p>Total: <strong>R$ {total.toFixed(2)}</strong></p>
      </div>
    </div>
  );
}
