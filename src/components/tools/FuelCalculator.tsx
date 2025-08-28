"use client";

import { useState } from "react";

export default function FuelCalculator() {
  const [distance, setDistance] = useState("");
  const [fuel, setFuel] = useState("");

  const d = parseFloat(distance) || 0;
  const f = parseFloat(fuel) || 0;
  const consumption = f > 0 ? d / f : 0;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Distância (km)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Combustível (L)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        />
      </div>
      <div className="text-sm text-gray-800">
        <p>Consumo: <strong>{consumption.toFixed(2)} km/L</strong></p>
      </div>
    </div>
  );
}
