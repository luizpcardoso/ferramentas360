"use client";

import { useState } from "react";
import dayjs from "dayjs";

export default function DateDifferenceCalculator() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const diff = start && end ? dayjs(end).diff(dayjs(start), "day") : 0;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Data inicial</label>
        <input
          type="date"
          className="w-full border rounded p-2"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Data final</label>
        <input
          type="date"
          className="w-full border rounded p-2"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </div>
      {start && end && (
        <div className="text-sm text-gray-800">
          <p>Diferença: <strong>{diff} dias</strong></p>
        </div>
      )}
    </div>
  );
}
