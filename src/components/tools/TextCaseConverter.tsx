"use client";

import { useState } from "react";

function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ");
}

export default function TextCaseConverter() {
  const [text, setText] = useState("");

  return (
    <div className="space-y-3">
      <textarea
        className="w-full h-44 p-3 border border-gray-300 rounded-lg resize-none text-sm"
        placeholder="Digite ou cole seu texto aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex flex-wrap gap-2">
        <button
          className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
          onClick={() => setText(text.toUpperCase())}
        >
          MAIÚSCULAS
        </button>
        <button
          className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
          onClick={() => setText(text.toLowerCase())}
        >
          minúsculas
        </button>
        <button
          className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
          onClick={() => setText(toTitleCase(text))}
        >
          Título (Title Case)
        </button>
        <button
          className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
          onClick={() => setText(text.replace(/\s+/g, " ").trim())}
        >
          Normalizar espaços
        </button>
      </div>
    </div>
  );
}

