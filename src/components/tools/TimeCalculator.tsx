"use client";

import { useState } from "react";

function parseTime(input: string): number {
  const [h, m] = input.split(":").map(Number);
  return h * 60 + m;
}

function formatTime(minutes: number): string {
  const h = Math.floor(Math.abs(minutes) / 60);
  const m = Math.abs(minutes) % 60;
  const sign = minutes < 0 ? "-" : "";
  return `${sign}${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export default function TimeCalculator() {
  const [time1, setTime1] = useState("01:00");
  const [time2, setTime2] = useState("01:30");
  const [operation, setOperation] = useState<"add" | "subtract">("add");
  const [result, setResult] = useState("");

  const calculate = () => {
    const minutes1 = parseTime(time1);
    const minutes2 = parseTime(time2);
    const total = operation === "add" ? minutes1 + minutes2 : minutes1 - minutes2;
    setResult(formatTime(total));
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="text-sm text-gray-700">Tempo 1 (hh:mm):</span>
          <input
            type="time"
            value={time1}
            onChange={(e) => setTime1(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded px-2 py-1"
          />
        </label>

        <label>
          <span className="text-sm text-gray-700">Tempo 2 (hh:mm):</span>
          <input
            type="time"
            value={time2}
            onChange={(e) => setTime2(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded px-2 py-1"
          />
        </label>
      </div>

      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="operation"
            value="add"
            checked={operation === "add"}
            onChange={() => setOperation("add")}
          />
          Somar
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="operation"
            value="subtract"
            checked={operation === "subtract"}
            onChange={() => setOperation("subtract")}
          />
          Subtrair
        </label>
      </div>

      <button
        onClick={calculate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Calcular
      </button>

      {result && (
        <div className="bg-gray-100 p-3 rounded text-center font-mono text-lg">
          Resultado: {result}
        </div>
      )}
    </div>
  );
}
