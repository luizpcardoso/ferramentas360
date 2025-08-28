"use client";

import { useState } from "react";

export default function SpeedConverter() {
  const [kmh, setKmh] = useState("");
  const k = parseFloat(kmh) || 0;
  const ms = k / 3.6;
  const mph = k * 0.621371;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Velocidade (km/h)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={kmh}
          onChange={(e) => setKmh(e.target.value)}
        />
      </div>
      <div className="text-sm text-gray-800 space-y-1">
        <p>Metros por segundo: <strong>{ms.toFixed(2)} m/s</strong></p>
        <p>Milhas por hora: <strong>{mph.toFixed(2)} mph</strong></p>
      </div>
    </div>
  );
}
