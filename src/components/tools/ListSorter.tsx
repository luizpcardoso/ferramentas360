"use client";

import { useMemo, useState } from "react";

export default function ListSorter() {
  const [input, setInput] = useState("laranja\nbanana\nmaçã\npera");
  const [numeric, setNumeric] = useState(false);
  const [descending, setDescending] = useState(false);

  const sorted = useMemo(() => {
    const lines = input.split(/\r?\n/);
    const arr = [...lines];
    arr.sort((a, b) => {
      if (numeric) {
        const na = parseFloat(a);
        const nb = parseFloat(b);
        if (Number.isNaN(na) || Number.isNaN(nb)) return a.localeCompare(b);
        return na - nb;
      }
      return a.localeCompare(b, "pt-BR", { sensitivity: "base" });
    });
    if (descending) arr.reverse();
    return arr.join("\n");
  }, [input, numeric, descending]);

  return (
    <div className="space-y-3">
      <textarea
        className="w-full h-36 p-3 border border-gray-300 rounded-lg resize-none text-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex items-center gap-4 text-sm text-gray-700">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={numeric}
            onChange={(e) => setNumeric(e.target.checked)}
          />
          Ordenar como números
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={descending}
            onChange={(e) => setDescending(e.target.checked)}
          />
          Ordem decrescente
        </label>
      </div>
      <textarea
        readOnly
        className="w-full h-36 p-3 border border-gray-300 rounded-lg resize-none text-sm"
        value={sorted}
      />
    </div>
  );
}

