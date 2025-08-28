"use client";

import { useState } from "react";

async function sha256(text: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  const bytes = Array.from(new Uint8Array(digest));
  return bytes.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function Sha256Generator() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      setHash(await sha256(input));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <textarea
        className="w-full h-36 p-3 border border-gray-300 rounded-lg resize-none text-sm"
        placeholder="Digite o texto para gerar o hash SHA-256..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Gerando..." : "Gerar Hash"}
      </button>
      {hash && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 break-all text-sm">
          {hash}
        </div>
      )}
    </div>
  );
}

