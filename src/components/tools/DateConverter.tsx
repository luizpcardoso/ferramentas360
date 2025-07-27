"use client";

import { useState } from "react";
import dayjs from "dayjs";

export default function DateConverter() {
  const [inputDate, setInputDate] = useState("");
  const [daysToAdd, setDaysToAdd] = useState("0");
  const [result, setResult] = useState<string | null>(null);

  const handleConvert = () => {
    if (!inputDate) return;
    const base = dayjs(inputDate);
    const days = parseInt(daysToAdd);
    const newDate = base.add(days, "day").format("YYYY-MM-DD");
    setResult(newDate);
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-700">Data base:</label>
        <input
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-700">Dias a adicionar (use negativo para subtrair):</label>
        <input
          type="number"
          value={daysToAdd}
          onChange={(e) => setDaysToAdd(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <button
        onClick={handleConvert}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Calcular nova data
      </button>

      {result && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Data final: {result}</p>
        </div>
      )}
    </div>
  );
}
