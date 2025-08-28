"use client";

import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const format = (space: number) => {
    setError(null);
    try {
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj, null, space));
    } catch (e: any) {
      setError("JSON inválido: " + (e?.message || "erro ao parsear"));
      setOutput("");
    }
  };

  const minify = () => format(0);
  const beautify = () => format(2);

  return (
    <div className="space-y-3">
      <textarea
        className="w-full h-40 p-3 border border-gray-300 rounded-lg resize-none text-sm"
        placeholder='Cole seu JSON aqui. Ex: {"a":1}'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
          onClick={beautify}
        >
          Embelezar
        </button>
        <button
          className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
          onClick={minify}
        >
          Compactar
        </button>
      </div>
      {error && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 p-2 rounded">
          {error}
        </div>
      )}
      <textarea
        readOnly
        className="w-full h-40 p-3 border border-gray-300 rounded-lg resize-none text-sm"
        value={output}
        placeholder="Saída formatada aparecerá aqui"
      />
    </div>
  );
}

