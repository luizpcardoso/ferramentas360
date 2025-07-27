"use client";

import { useState } from "react";

const loremBase =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function generateParagraphs(qtd: number): string {
  return Array.from({ length: qtd }, () => loremBase).join("\n\n");
}

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    const qtd = Math.min(100, Math.max(1, paragraphs));
    setOutput(generateParagraphs(qtd));
  };

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-2">
        <label htmlFor="qtd" className="text-sm text-gray-700">
          Parágrafos:
        </label>
        <input
          id="qtd"
          type="number"
          value={paragraphs}
          onChange={(e) => setParagraphs(Number(e.target.value))}
          min={1}
          max={100}
          className="w-20 border border-gray-300 rounded px-2 py-1"
        />
        <button
          onClick={handleGenerate}
          className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Gerar
        </button>
      </div>

      {output && (
        <textarea
          className="w-full h-64 border border-gray-300 rounded p-3 font-mono text-sm"
          readOnly
          value={output}
        />
      )}
    </div>
  );
}
