"use client";

import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const charCount = text.length;
  const charNoSpaces = text.replace(/\s/g, "").length;

  return (
    <div>
      <textarea
        className="w-full h-48 p-4 border border-gray-300 rounded-lg resize-none text-sm"
        placeholder="Digite ou cole seu texto aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-4 text-sm text-gray-800 space-y-1">
        <p><strong>{wordCount}</strong> palavras</p>
        <p><strong>{charCount}</strong> caracteres (com espaços)</p>
        <p><strong>{charNoSpaces}</strong> caracteres (sem espaços)</p>
      </div>
    </div>
  );
}
