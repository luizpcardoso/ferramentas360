/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

function uuidv4() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return (crypto as any).randomUUID();
  }
  // Fallback simples
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function UuidGenerator() {
  const [uuid, setUuid] = useState<string>(uuidv4());
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(uuid);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <input
          readOnly
          className="flex-1 border border-gray-300 rounded-lg p-2 text-sm"
          value={uuid}
        />
        <button
          className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
          onClick={() => setUuid(uuidv4())}
        >
          Gerar
        </button>
        <button
          className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
          onClick={handleCopy}
        >
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
    </div>
  );
}

