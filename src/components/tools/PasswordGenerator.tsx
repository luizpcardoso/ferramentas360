"use client";

import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_-+=<>?/";

    let chars = lower;
    if (useUpper) chars += upper;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    if (!chars) return setPassword("");

    let result = "";
    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * chars.length);
      result += chars[rand];
    }

    setPassword(result);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <label className="flex-1">
          <span className="text-sm text-gray-700">Tamanho da senha:</span>
          <input
            type="number"
            min={4}
            max={64}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full mt-1 border border-gray-300 rounded px-2 py-1"
          />
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={useUpper} onChange={() => setUseUpper(!useUpper)} />
          Letras maiúsculas
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={useNumbers} onChange={() => setUseNumbers(!useNumbers)} />
          Números
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={useSymbols} onChange={() => setUseSymbols(!useSymbols)} />
          Símbolos
        </label>
      </div>

      <button
        onClick={generatePassword}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Gerar senha
      </button>

      {password && (
        <div className="bg-gray-100 p-3 rounded text-center break-all text-sm font-mono">
          {password}
        </div>
      )}
    </div>
  );
}
