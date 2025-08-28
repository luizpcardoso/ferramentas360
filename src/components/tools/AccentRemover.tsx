"use client";

import { useState } from "react";

export default function AccentRemover() {
  const [input, setInput] = useState("coração, ação, solução, João");

  const normalized = input
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

  return (
    <div className="space-y-3">
      <textarea
        className="w-full h-36 p-3 border border-gray-300 rounded-lg resize-none text-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <textarea
        readOnly
        className="w-full h-36 p-3 border border-gray-300 rounded-lg resize-none text-sm"
        value={normalized}
      />
    </div>
  );
}

