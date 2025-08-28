"use client";

import { useState } from "react";

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");

  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) || 0;
  const t = parseFloat(time) || 0;
  const interest = (p * r * t) / 100;
  const total = p + interest;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Capital (R$)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Taxa (% ao período)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Tempo (períodos)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="text-sm text-gray-800">
        <p>Juros: <strong>R$ {interest.toFixed(2)}</strong></p>
        <p>Total: <strong>R$ {total.toFixed(2)}</strong></p>
      </div>
    </div>
  );
}
